/*
 * Copyright (c) 2018. Abstrium SAS <team (at) pydio.com>
 * This file is part of Pydio Cells.
 *
 * Pydio Cells is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio Cells is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio Cells.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */

package user

import (
	"context"
	"fmt"
	"strings"

	"github.com/gobuffalo/packr"
	"github.com/golang/protobuf/ptypes"
	"github.com/golang/protobuf/ptypes/any"
	"github.com/micro/go-micro/errors"
	"go.uber.org/zap"
	migrate "github.com/rubenv/sql-migrate"

	"github.com/pydio/cells/common"
	"github.com/pydio/cells/common/auth"
	"github.com/pydio/cells/common/log"
	"github.com/pydio/cells/common/proto/idm"
	"github.com/pydio/cells/common/proto/tree"
	service "github.com/pydio/cells/common/service/proto"
	"github.com/pydio/cells/common/sql/index"
	service "github.com/pydio/cells/common/service/proto"
	"github.com/pydio/cells/common/sql/resources"
	"github.com/pydio/cells/common/utils/mtree"
)

const (
	indexLen = 767
)

var (
	queries = map[string]string{
		"AddAttribute":         `replace into idm_user_attributes (uuid, name, value) values (?, ?, ?)`,
		"GetAttributes":        `select name, value from idm_user_attributes where uuid = ?`,
		"DeleteAttribute":      `delete from idm_user_attributes where uuid = ? and name = ?`,
		"DeleteAttributes":     `delete from idm_user_attributes where uuid = ?`,
		"AddRole":              `replace into idm_user_roles (uuid, role) values (?, ?)`,
		"GetRoles":             `select role from idm_user_roles where uuid = ?`,
		"DeleteUserRoles":      `delete from idm_user_roles where uuid = ?`,
		"DeleteUserRolesClean": `delete from idm_user_roles where uuid not in (select uuid from idm_user_idx_tree)`,
		"DeleteRoleById":       `delete from idm_user_roles where role = ?`,
		"DeleteAttsClean":      `delete from idm_user_attributes where uuid not in (select uuid from idm_user_idx_tree)`,
	}

	unPrepared = map[string]func(...interface{}) string{
		"WhereGroupPath": func(args ...interface{}) string {
			mpath := []byte(args[0].(string))
			level := args[1].(int)
			return fmt.Sprintf(`(%s) and t.level = %d`, getMPathLike(mpath), level)
		},
		"WhereGroupPathRecursive": func(args ...interface{}) string {
			mpath := []byte(args[0].(string))
			level := args[1].(int)
			return fmt.Sprintf(`(%s) and t.level >= %d`, getMPathLike(mpath), level)
		},
		"WhereGroupPathIncludeParent": func(args ...interface{}) string {
			mpath := []byte(args[0].(string))
			return fmt.Sprintf(`(%s)`, getMPathEquals(mpath))
		},
		"WhereHasAttributes": func(args ...interface{}) string {
			return fmt.Sprintf(`EXISTS (select a.name from idm_user_attributes as a WHERE %s and a.uuid = t.uuid)`, args...)
		},
		"WhereHasRoles": func(args ...interface{}) string {
			return fmt.Sprintf(`EXISTS (select r.role from idm_user_roles as r WHERE %s and r.uuid = t.uuid)`, args...)
		},
	}

	hasher = auth.PydioPW{
		PBKDF2_HASH_ALGORITHM: "sha256",
		PBKDF2_ITERATIONS:     1000,
		PBKDF2_SALT_BYTE_SIZE: 32,
		PBKDF2_HASH_BYTE_SIZE: 24,
		HASH_SECTIONS:         4,
		HASH_ALGORITHM_INDEX:  0,
		HASH_ITERATION_INDEX:  1,
		HASH_SALT_INDEX:       2,
		HASH_PBKDF2_INDEX:     3,
	}
)

// Impl of the Mysql interface
type sqlimpl struct {
	*sql.Handler

	*resources.ResourcesSQL
	*index.IndexSQL
}

// Init handler for the SQL DAO
func (s *sqlimpl) Init(options common.ConfigValues) error {

	// super
	s.DAO.Init(options)

	// Preparing the resources
	s.ResourcesSQL = resources.NewDAO(s.Handler, "t.uuid").(*resources.ResourcesSQL)
	if err := s.ResourcesSQL.Init(options); err != nil {
		return fmt.Errorf("cannot initialise resources DAO: %v", err)
	}

	// Preparing the index
	s.IndexSQL = index.NewDAO(s.Handler, "ROOT_GROUP").(*index.IndexSQL)
	if err := s.IndexSQL.Init(options); err != nil {
		return fmt.Errorf("cannot initialise index DAO: %v", err)
	}

	// Doing the database migrations
	migrations := &sql.PackrMigrationSource{
		Box:         packr.NewBox("../../idm/user/migrations"),
		Dir:         s.Driver(),
		TablePrefix: s.Prefix(),
	}
	_, err := sql.ExecMigration(s.DB(), s.Driver(), migrations, migrate.Up, "idm_user_")
	if err != nil {
		return fmt.Errorf("cannot perform migration: %v", err)
	}

	// Preparing the db statements
	if options.Bool("prepare", true) {
		for key, query := range queries {
			if err := s.Prepare(key, query); err != nil {
				return fmt.Errorf("unable to prepare query[%s]: %s - error: %v", key, query, err)
			}
		}
	}

	return nil
}

func safeGroupPath(gPath string) string {
	return fmt.Sprintf("/%s", strings.Trim(gPath, "/"))
}

// Add to the mysql DB
func (s *sqlimpl) Add(in interface{}) (interface{}, []*tree.Node, error) {

	// s.Lock()
	// defer s.Unlock()
	var createdNodes []*tree.Node

	var user *idm.User
	var ok bool
	if user, ok = in.(*idm.User); !ok {
		return nil, createdNodes, fmt.Errorf("invalid format, expecting idm.User")
	}

	user.GroupPath = safeGroupPath(user.GroupPath)
	objectUuid := user.Uuid
	var objectPath string

	if !user.IsGroup {
		objectPath = strings.TrimRight(user.GroupPath, "/") + "/" + user.Login
	} else {
		objectPath = user.GroupPath
	}

	// First get by Uuid, it must be unique
	if len(objectUuid) > 0 {
		if node, err := s.IndexSQL.GetNodeByUUID(objectUuid); err == nil && node != nil {
			s.rebuildGroupPath(node)
			if node.Path != objectPath {
				// This is a move
				reqFromPath := "/" + strings.Trim(node.Path, "/")
				reqToPath := objectPath

				var pathFrom, pathTo mtree.MPath
				var nodeFrom, nodeTo *mtree.TreeNode

				if pathFrom, _, err = s.IndexSQL.Path(reqFromPath, false); err != nil || pathFrom == nil {
					return nil, createdNodes, err
				}

				if nodeFrom, err = s.IndexSQL.GetNode(pathFrom); err != nil {
					return nil, createdNodes, err
				}
				if nodeFrom.IsLeaf() {
					if err = s.IndexSQL.DelNode(nodeFrom); err != nil {
						return nil, createdNodes, err
					}
					if pathTo, _, err = s.IndexSQL.Path(reqToPath, true, nodeFrom.Node); err != nil {
						return nil, createdNodes, err
					}
				} else {
					if pathTo, _, err = s.IndexSQL.Path(reqToPath, true); err != nil {
						return nil, createdNodes, err
					}
				}

				if nodeTo, err = s.IndexSQL.GetNode(pathTo); err != nil {
					return nil, createdNodes, err
				}

				log.Logger(context.Background()).Debug("MOVE TREE", zap.Any("from", nodeFrom), zap.Any("to", nodeTo))
				if !nodeFrom.IsLeaf() {
					if err := s.IndexSQL.MoveNodeTree(nodeFrom, nodeTo); err != nil {
						return nil, createdNodes, err
					}
				}
			}
		}
	}

	// Now carry on to potential updates
	var node *tree.Node
	if !user.IsGroup {
		node = userToNode(user)
	} else {
		node = groupToNode(user)
	}
	mPath, created, er := s.IndexSQL.Path(node.Path, true, node)
	if er != nil {
		return nil, createdNodes, er
	}

	if len(created) == 0 && node.Etag != "" {
		log.Logger(context.Background()).Debug("User update w/ password")
		updateNode := mtree.NewTreeNode()
		updateNode.SetMPath(mPath...)
		if err := s.IndexSQL.DelNode(updateNode); err != nil {
			return nil, createdNodes, err
		}
		_, _, err := s.IndexSQL.Path(node.Path, true, node)
		if err != nil {
			return nil, createdNodes, err
		}
	}
	if user.Uuid == "" {
		foundOrCreatedNode, _ := s.IndexSQL.GetNode(mPath)
		user.Uuid = foundOrCreatedNode.Uuid
	}

	// Remove existing attributes and roles, replace with new ones using a transaction
	if user.GroupLabel != "" {
			user.Attributes = make(map[string]string, 1)
		user.Attributes[idm.UserAttrLabelLike] = user.GroupLabel
	// Remove existing attributes and roles, replace with new ones using a transaction
	} else if user.Login != "" {
		if user.Attributes == nil {
			user.Attributes = make(map[string]string, 1)
		}
		user.Attributes[idm.UserAttrLabelLike] = user.Login
	}

	// Use a transaction to perform update on the user
	db := s.DB()

	// Start a transaction
	if errTx != nil {
		return nil, createdNodes, errTx

	// Use a transaction to perform update on the user
	db := s.DB()

	// Start a transaction
	tx, errTx := db.BeginTx(context.Background(), nil)
	if errTx != nil {
		return nil, createdNodes, errTx
	}

	// Checking transaction went fine
	defer func() {
		if errTx != nil {
			tx.Rollback()
		} else {
			tx.Commit()
		}
	}()

	// Insure we can retrieve all necessary prepared statements
	delAttributes := s.GetStmt("DeleteAttributes")
	if delAttributes == nil {
		errTx = fmt.Errorf("Unknown statement")
		return nil, createdNodes, errTx
	}
	addAttribute := s.GetStmt("AddAttribute")
	if addAttribute == nil {
		errTx = fmt.Errorf("Unknown statement")
		return nil, createdNodes, errTx
	}
	delUserRoles := s.GetStmt("DeleteUserRoles")
	if delUserRoles == nil {
		errTx = fmt.Errorf("Unknown statement")
		return nil, createdNodes, errTx
	}
	addUserRole := s.GetStmt("AddRole")
	if addUserRole == nil {
		errTx = fmt.Errorf("Unknown statement")
		return nil, createdNodes, errTx
	}

	// Execute retrieved statements within the transaction
	if stmt := tx.Stmt(delAttributes); stmt != nil {
		defer stmt.Close()
		if _, errTx = stmt.Exec(user.Uuid); errTx != nil {
			return nil, createdNodes, errTx
	defer func() {
		if errTx != nil {
			tx.Rollback()
		return nil, createdNodes, fmt.Errorf("Empty statement")
			tx.Commit()
		}

	delAttributes := s.GetStmt("DeleteAttributes")
	if delAttributes == nil {
	for attr, val := range user.Attributes {
		if stmt := tx.Stmt(addAttribute); stmt != nil {
			defer stmt.Close()
			if _, errTx = stmt.Exec(
		return nil, createdNodes, errTx
	}
	addAttribute := s.GetStmt("AddAttribute")
	if addAttribute == nil {
		return nil, createdNodes, errTx
			); errTx != nil {
				return nil, createdNodes, errTx
	delUserRoles := s.GetStmt("DeleteUserRoles")
	if delUserRoles == nil {
		errTx = fmt.Errorf("Unknown statement")
			return nil, createdNodes, fmt.Errorf("Empty statement")
	}
	addUserRole := s.GetStmt("AddRole")
	if addUserRole == nil {
		errTx = fmt.Errorf("Unknown statement")
	}
	// Execute retrieved statements within the transaction
		defer stmt.Close()
	if stmt := tx.Stmt(delUserRoles); stmt != nil {
		defer stmt.Close()
		if _, errTx = stmt.Exec(user.Uuid); errTx != nil {
			return nil, createdNodes, errTx
			return nil, createdNodes, errTx
		}
	} else {
		return nil, createdNodes, fmt.Errorf("Empty statement")
	}


	for attr, val := range user.Attributes {
		if stmt := tx.Stmt(addAttribute); stmt != nil {
			defer stmt.Close()
			if _, errTx = stmt.Exec(
				user.Uuid,
				val,
				return nil, createdNodes, errTx
		if stmt := tx.Stmt(addUserRole); stmt != nil {
			defer stmt.Close()
			if _, errTx = stmt.Exec(
		} else {
			return nil, createdNodes, fmt.Errorf("Empty statement")
		}

			); errTx != nil {
				return nil, createdNodes, errTx
		defer stmt.Close()
		if _, errTx = stmt.Exec(user.Uuid); errTx != nil {
			return nil, createdNodes, errTx
			return nil, createdNodes, fmt.Errorf("Empty statement")
	} else {
		return nil, createdNodes, fmt.Errorf("Empty statement")

	}

	for _, role := range user.Roles {
		if role.UserRole || role.GroupRole {
			continue
		}

		if stmt := tx.Stmt(addUserRole); stmt != nil {
			defer stmt.Close()
			if _, errTx = stmt.Exec(
				user.Uuid,
				role.Uuid,
			); errTx != nil {
				return nil, createdNodes, errTx
			}
		} else {
			return nil, createdNodes, fmt.Errorf("Empty statement")
		}
	}

	for _, n := range created {
		createdNodes = append(createdNodes, n.Node)
	}

	return user, createdNodes, nil
}

// Find a user in the DB, and verify that password is correct.
// Password is passed in clear form, hashing method is kept internal to the user service
func (s *sqlimpl) Bind(userName string, password string) (user *idm.User, e error) {

	q := &idm.UserSingleQuery{
		Login: userName,
	}
	qA, _ := ptypes.MarshalAny(q)
	var results []interface{}
	s.Search(&service.Query{SubQueries: []*any.Any{qA}}, &results)
	if len(results) == 0 {
		// The error code is actually very important
		return nil, errors.NotFound(common.SERVICE_USER, "cannot find user %s", userName)
	}
	object := results[0]
	user = object.(*idm.User)
	hashedPass := user.Password
	// Check password
	valid, _ := hasher.CheckDBKDF2PydioPwd(password, hashedPass)
	if valid {
		return user, nil
	}
	// Check with legacy format (coming from PHP, Salt []byte is built differently)
	valid, _ = hasher.CheckDBKDF2PydioPwd(password, hashedPass, true)
	if valid {
		return user, nil
	}

	return nil, errors.Forbidden(common.SERVICE_USER, "password does not match")

}

// Count counts the number of users matching the passed query in the SQL DB.
func (s *sqlimpl) Count(query sql.Enquirer, includeParents ...bool) (int, error) {

	s.Lock()
	defer s.Unlock()

	parents := false
	if len(includeParents) > 0 {
		parents = includeParents[0]
	}

	queryString, args, err := s.makeSearchQuery(query, true, parents, false)
	if err != nil {
		return 0, err
	}

	row := s.DB().QueryRow(queryString, args...)
	total := new(int)
	err = row.Scan(
		&total,
	)
	return *total, err

}

// Search in the mysql DB
func (s *sqlimpl) Search(query sql.Enquirer, users *[]interface{}, withParents ...bool) error {

	// s.Lock()
	// defer s.Unlock()

	var includeParents bool
	if len(withParents) > 0 {
		includeParents = withParents[0]
	}

	queryString, args, err := s.makeSearchQuery(query, false, includeParents, false)
	if err != nil {
		return err
	}

	log.Logger(context.Background()).Debug("Users Search Query ", zap.String("q", queryString), zap.Any("q2", query.GetSubQueries()))
	res, err := s.DB().Query(queryString, args...)
	if err != nil {
		return err
	}

	defer res.Close()
	for res.Next() {

		var uuid string
		var level uint32
		var rat []byte
		var name string
		var leaf int32
		var etag string
		res.Scan(
			&uuid,
			&level,
			&rat,
			&name,
			&leaf,
			&etag,
		)
		node := mtree.NewTreeNode()
		node.SetBytes(rat)
		node.Uuid = uuid
		node.Etag = etag
		s.rebuildGroupPath(node)
		node.SetMeta("name", name)

		var userOrGroup *idm.User
		if leaf == 0 {
			node.Node.Type = tree.NodeType_COLLECTION
			userOrGroup = nodeToGroup(node)
		} else {
			node.Node.Type = tree.NodeType_LEAF
			userOrGroup = nodeToUser(node)

			if resRoles, err := s.GetStmt("GetRoles").Query(userOrGroup.Uuid); err != nil {
				return err
			} else {
				for resRoles.Next() {
					var name string
					resRoles.Scan(&name)
					userOrGroup.Roles = append(userOrGroup.Roles, &idm.Role{Uuid: name, Label: name})
				}
				resRoles.Close()
			}
			// User Role
			userOrGroup.Roles = append(userOrGroup.Roles, &idm.Role{Uuid: userOrGroup.Uuid, Label: userOrGroup.Login, UserRole: true})
		}

		userOrGroup.Attributes = make(map[string]string)
		if resAttributes, err := s.GetStmt("GetAttributes").Query(userOrGroup.Uuid); err != nil {
			return err
		} else {
			for resAttributes.Next() {
				var name, value string
				resAttributes.Scan(
					&name,
					&value,
				)
				userOrGroup.Attributes[name] = value
			}
			resAttributes.Close()
		}
		*users = append(*users, userOrGroup)

	}

	//log.Logger(context.Background()).Debug("Monitor DBStats after search", zap.Any("stats", s.SQLConn.DB.Stats()))

	return nil
}

// Del from the mysql DB
func (s *sqlimpl) Del(query sql.Enquirer, users chan *idm.User) (int64, error) {

	queryString, args, err := s.makeSearchQuery(query, false, true, true)
	if err != nil {
		return 0, err
	}

	type delStruct struct {
		node   *mtree.TreeNode
		object *idm.User
	}
	log.Logger(context.Background()).Debug("Delete", zap.String("q", queryString))

	res, err := s.DB().Query(queryString, args...)
	if err != nil {
		return 0, err
	}

	rows := int64(0)

	var data []*delStruct
	for res.Next() {
		var uuid string
		var level uint32
		var rat []byte
		var name string
		var leaf int32
		var etag string
		res.Scan(
			&uuid,
			&level,
			&rat,
			&name,
			&leaf,
			&etag,
		)
		node := mtree.NewTreeNode()
		node.SetBytes(rat)
		node.Uuid = uuid
		node.Level = int(level)
		node.Etag = etag
		s.rebuildGroupPath(node)
		node.SetMeta("name", name)

		var userOrGroup *idm.User
		if leaf == 0 {
			node.Node.Type = tree.NodeType_COLLECTION
			userOrGroup = nodeToGroup(node)
		} else {
			node.Node.Type = tree.NodeType_LEAF
			userOrGroup = nodeToUser(node)
		}
		data = append(data, &delStruct{node: node, object: userOrGroup})
	}
	res.Close()

	for _, toDel := range data {

		if err := s.IndexSQL.DelNode(toDel.node); err != nil {
			return rows, err
		}

		if err := s.deleteNodeData(toDel.node.Uuid); err != nil {
			return rows, err
		}

		users <- toDel.object
		rows++
	}

	// If some children have been deleted, remove them now
	if _, err := s.GetStmt("DeleteUserRolesClean").Exec(); err != nil {
		return rows, err
	}

	if _, err := s.GetStmt("DeleteAttsClean").Exec(); err != nil {
		return rows, err
	}

	return rows, nil
}

func (s *sqlimpl) CleanRole(roleId string) error {

	_, err := s.GetStmt("DeleteRoleById").Exec(roleId)
	return err

}

func (s *sqlimpl) deleteNodeData(uuid string) error {

	if _, err := s.GetStmt("DeleteAttributes").Exec(uuid); err != nil {
		return err
	}

	if _, err := s.GetStmt("DeleteUserRoles").Exec(uuid); err != nil {
		return err
	}

	return nil
}

func (s *sqlimpl) rebuildGroupPath(node *mtree.TreeNode) {
	if len(node.Path) == 0 {
		var path []string
		roles := []string{}
		for pNode := range s.IndexSQL.GetNodes(node.MPath.Parents()...) {
			path = append(path, pNode.Name())
			roles = append(roles, pNode.Uuid)
		}
		path = append(path, node.Name())
		p := strings.Join(path, "/")
		node.Path = fmt.Sprintf("/%s", strings.TrimLeft(p, "/"))
		node.SetMeta("GroupRoles", roles)
	}

}

// where t.mpath = ?
func getMPathEquals(mpath []byte) string {
	var res []string

	for {
		var cnt int
		cnt = (len(mpath) - 1) / indexLen
		res = append(res, fmt.Sprintf(`mpath%d LIKE "%s"`, cnt+1, mpath[(cnt*indexLen):]))

		if idx := cnt * indexLen; idx == 0 {
			break
		}

		mpath = mpath[0 : cnt*indexLen]
	}

	return strings.Join(res, " and ")
}

// t.mpath LIKE ?
func getMPathLike(mpath []byte) string {
	var res []string

	mpath = append(mpath, []byte(".%")...)

	done := false
	for {
		var cnt int
		cnt = (len(mpath) - 1) / indexLen

		if !done {
			res = append(res, fmt.Sprintf(`mpath%d LIKE "%s"`, cnt+1, mpath[(cnt*indexLen):]))
			done = true
		} else {
			res = append(res, fmt.Sprintf(`mpath%d LIKE "%s"`, cnt+1, mpath[(cnt*indexLen):]))
		}

		if idx := cnt * indexLen; idx == 0 {
			break
		}

		mpath = mpath[0 : cnt*indexLen]
	}

	return strings.Join(res, " and ")
}