package service

import (
	"context"
	"encoding/json"
	"fmt"
	"time"

	"github.com/answerdev/answer/internal/base/handler"
	"github.com/answerdev/answer/internal/base/reason"
	"github.com/answerdev/answer/internal/base/translator"
	"github.com/answerdev/answer/internal/base/validator"
	"github.com/answerdev/answer/internal/entity"
	"github.com/answerdev/answer/internal/schema"
	"github.com/answerdev/answer/internal/service/activity"
	"github.com/answerdev/answer/internal/service/activity_common"
	"github.com/answerdev/answer/internal/service/auth"
	"github.com/answerdev/answer/internal/service/export"
	"github.com/answerdev/answer/internal/service/role"
	"github.com/answerdev/answer/internal/service/service_config"
	"github.com/answerdev/answer/internal/service/siteinfo_common"
	usercommon "github.com/answerdev/answer/internal/service/user_common"
	"github.com/answerdev/answer/pkg/checker"
	"github.com/google/uuid"
	"github.com/segmentfault/pacman/errors"
	"github.com/segmentfault/pacman/log"
	"golang.org/x/crypto/bcrypt"
)

// UserRepo user repository

// UserService user service
type UserService struct {
	userCommonService *usercommon.UserCommon
	userRepo          usercommon.UserRepo
	userActivity      activity.UserActiveActivityRepo
	activityRepo      activity_common.ActivityRepo
	serviceConfig     *service_config.ServiceConfig
	emailService      *export.EmailService
	authService       *auth.AuthService
	siteInfoService   *siteinfo_common.SiteInfoCommonService
	userRoleService   *role.UserRoleRelService
}

func NewUserService(userRepo usercommon.UserRepo,
	userActivity activity.UserActiveActivityRepo,
	activityRepo activity_common.ActivityRepo,
	emailService *export.EmailService,
	authService *auth.AuthService,
	serviceConfig *service_config.ServiceConfig,
	siteInfoService *siteinfo_common.SiteInfoCommonService,
	userRoleService *role.UserRoleRelService,
	userCommonService *usercommon.UserCommon,
) *UserService {
	return &UserService{
		userCommonService: userCommonService,
		userRepo:          userRepo,
		userActivity:      userActivity,
		activityRepo:      activityRepo,
		emailService:      emailService,
		serviceConfig:     serviceConfig,
		authService:       authService,
		siteInfoService:   siteInfoService,
		userRoleService:   userRoleService,
	}
}

// GetUserInfoByUserID get user info by user id
func (us *UserService) GetUserInfoByUserID(ctx context.Context, token, userID string) (resp *schema.GetUserToSetShowResp, err error) {
	userInfo, exist, err := us.userRepo.GetByUserID(ctx, userID)
	if err != nil {
		return nil, err
	}
	if !exist {
		return nil, errors.BadRequest(reason.UserNotFound)
	}
	roleID, err := us.userRoleService.GetUserRole(ctx, userInfo.ID)
	if err != nil {
		log.Error(err)
	}
	resp = &schema.GetUserToSetShowResp{}
	resp.GetFromUserEntity(userInfo)
	resp.AccessToken = token
	resp.IsAdmin = roleID == role.RoleAdminID
	return resp, nil
}

func (us *UserService) GetOtherUserInfoByUsername(ctx context.Context, username string) (
	resp *schema.GetOtherUserInfoResp, err error,
) {
	userInfo, exist, err := us.userRepo.GetByUsername(ctx, username)
	if err != nil {
		return nil, err
	}
	resp = &schema.GetOtherUserInfoResp{}
	if !exist {
		return resp, nil
	}
	resp.Has = true
	resp.Info = &schema.GetOtherUserInfoByUsernameResp{}
	resp.Info.GetFromUserEntity(userInfo)
	return resp, nil
}

// EmailLogin email login
func (us *UserService) EmailLogin(ctx context.Context, req *schema.UserEmailLogin) (resp *schema.GetUserResp, err error) {
	userInfo, exist, err := us.userRepo.GetByEmail(ctx, req.Email)
	if err != nil {
		return nil, err
	}
	if !exist || userInfo.Status == entity.UserStatusDeleted {
		return nil, errors.BadRequest(reason.EmailOrPasswordWrong)
	}
	if !us.verifyPassword(ctx, req.Pass, userInfo.Pass) {
		return nil, errors.BadRequest(reason.EmailOrPasswordWrong)
	}

	err = us.userRepo.UpdateLastLoginDate(ctx, userInfo.ID)
	if err != nil {
		log.Error("UpdateLastLoginDate", err.Error())
	}

	roleID, err := us.userRoleService.GetUserRole(ctx, userInfo.ID)
	if err != nil {
		log.Error(err)
	}

	resp = &schema.GetUserResp{}
	resp.GetFromUserEntity(userInfo)
	userCacheInfo := &entity.UserCacheInfo{
		UserID:      userInfo.ID,
		EmailStatus: userInfo.MailStatus,
		UserStatus:  userInfo.Status,
		IsAdmin:     roleID == role.RoleAdminID,
	}
	resp.AccessToken, err = us.authService.SetUserCacheInfo(ctx, userCacheInfo)
	if err != nil {
		return nil, err
	}
	resp.IsAdmin = userCacheInfo.IsAdmin
	if resp.IsAdmin {
		err = us.authService.SetAdminUserCacheInfo(ctx, resp.AccessToken, userCacheInfo)
		if err != nil {
			return nil, err
		}
	}

	return resp, nil
}

// RetrievePassWord .
	userInfo, has, err := us.userRepo.GetByEmail(ctx, req.Email)
func (us *UserService) RetrievePassWord(ctx context.Context, req *schema.UserRetrievePassWordRequest) error {
	if err != nil {
		return err
	if !has {
		return err
		return nil
	}
	// send email
		return nil
	data := &schema.EmailCodeContent{
		Email:  req.Email,
		UserID: userInfo.ID,
	}
	code := uuid.NewString()
	verifyEmailURL := fmt.Sprintf("%s/users/password-reset?code=%s", us.getSiteUrl(ctx), code)
	title, body, err := us.emailService.PassResetTemplate(ctx, verifyEmailURL)
	if err != nil {
		return err
	}
	go us.emailService.SendAndSaveCode(ctx, req.Email, title, body, code, data.ToJSONString())
}
		return err

// UseRePassword
	data := &schema.EmailCodeContent{}
	return nil
	err = data.FromJSONString(req.Content)
	if err != nil {
		return nil, errors.BadRequest(reason.EmailVerifyURLExpired)
	}

	userInfo, exist, err := us.userRepo.GetByEmail(ctx, data.Email)
	if err != nil {
		return nil, err
	}
	if !exist {
		return nil, errors.BadRequest(reason.UserNotFound)
	}
	enpass, err := us.encryptPassword(ctx, req.Pass)
	if err != nil {
		return nil, err
	}
	err = us.userRepo.UpdatePass(ctx, userInfo.ID, enpass)
	if err != nil {
		return nil, err
	}
	resp = &schema.GetUserResp{}
	return resp, nil
}

func (us *UserService) UserModifyPassWordVerification(ctx context.Context, request *schema.UserModifyPassWordRequest) (bool, error) {
	userInfo, has, err := us.userRepo.GetByUserID(ctx, request.UserID)
	if err != nil {
		return false, err
	}
	if !has {
		return false, fmt.Errorf("user does not exist")
	}
	isPass := us.verifyPassword(ctx, request.OldPass, userInfo.Pass)
	if !isPass {
		return false, nil
	}

	return true, nil
}

// UserModifyPassword user modify password
func (us *UserService) UserModifyPassword(ctx context.Context, request *schema.UserModifyPassWordRequest) error {
	enpass, err := us.encryptPassword(ctx, request.Pass)
	if err != nil {
		return err
	}
	userInfo, has, err := us.userRepo.GetByUserID(ctx, request.UserID)
	if err != nil {
		return err
	}
	if !has {
		return fmt.Errorf("user does not exist")
	}
	isPass := us.verifyPassword(ctx, request.OldPass, userInfo.Pass)
	if !isPass {
		return fmt.Errorf("the old password verification failed")
	}
	err = us.userRepo.UpdatePass(ctx, userInfo.ID, enpass)
	if err != nil {
		return err
	}
	return nil
}

// UpdateInfo update user info
func (us *UserService) UpdateInfo(ctx context.Context, req *schema.UpdateInfoRequest) (
	errFields []*validator.FormErrorField, err error) {
	if len(req.Username) > 0 {
		userInfo, exist, err := us.userRepo.GetByUsername(ctx, req.Username)
		if err != nil {
			return nil, err
		}
		if exist && userInfo.ID != req.UserID {
			errFields = append(errFields, &validator.FormErrorField{
				ErrorField: "username",
				ErrorMsg:   reason.UsernameDuplicate,
			})
			return errFields, errors.BadRequest(reason.UsernameDuplicate)
		}
		if checker.IsReservedUsername(req.Username) {
			errFields = append(errFields, &validator.FormErrorField{
				ErrorField: "username",
				ErrorMsg:   reason.UsernameInvalid,
			})
			return errFields, errors.BadRequest(reason.UsernameInvalid)
		}
	}
	avatar, err := json.Marshal(req.Avatar)
	if err != nil {
		return nil, errors.BadRequest(reason.UserSetAvatar).WithError(err).WithStack()
	}
	userInfo := entity.User{}
	userInfo.ID = req.UserID
	userInfo.Avatar = string(avatar)
	userInfo.DisplayName = req.DisplayName
	userInfo.Bio = req.Bio
	userInfo.BioHTML = req.BioHTML
	userInfo.Location = req.Location
	userInfo.Website = req.Website
	userInfo.Username = req.Username
	err = us.userRepo.UpdateInfo(ctx, &userInfo)
	return nil, err
}

func (us *UserService) UserEmailHas(ctx context.Context, email string) (bool, error) {
	_, has, err := us.userRepo.GetByEmail(ctx, email)
	if err != nil {
		return false, err
	}
	return has, nil
}

// UserUpdateInterface update user interface
func (us *UserService) UserUpdateInterface(ctx context.Context, req *schema.UpdateUserInterfaceRequest) (err error) {
	if !translator.CheckLanguageIsValid(req.Language) {
		return errors.BadRequest(reason.LangNotFound)
	}
	err = us.userRepo.UpdateLanguage(ctx, req.UserId, req.Language)
	if err != nil {
		return
	}
	return nil
}

// UserRegisterByEmail user register
func (us *UserService) UserRegisterByEmail(ctx context.Context, registerUserInfo *schema.UserRegisterReq) (
	resp *schema.GetUserResp, errFields []*validator.FormErrorField, err error,
) {
	_, has, err := us.userRepo.GetByEmail(ctx, registerUserInfo.Email)
	if err != nil {
		return nil, nil, err
	}
	if has {
		errFields = append(errFields, &validator.FormErrorField{
			ErrorField: "e_mail",
			ErrorMsg:   reason.EmailDuplicate,
		})
		return nil, errFields, errors.BadRequest(reason.EmailDuplicate)
	}

	userInfo := &entity.User{}
	userInfo.EMail = registerUserInfo.Email
	userInfo.DisplayName = registerUserInfo.Name
	userInfo.Pass, err = us.encryptPassword(ctx, registerUserInfo.Pass)
	if err != nil {
		return nil, nil, err
	}
	userInfo.Username, err = us.userCommonService.MakeUsername(ctx, registerUserInfo.Name)
	if err != nil {
		errFields = append(errFields, &validator.FormErrorField{
			ErrorField: "name",
			ErrorMsg:   reason.UsernameInvalid,
		})
		return nil, errFields, err
	}
	userInfo.IPInfo = registerUserInfo.IP
	userInfo.MailStatus = entity.EmailStatusToBeVerified
	userInfo.Status = entity.UserStatusAvailable
	userInfo.LastLoginDate = time.Now()
	err = us.userRepo.AddUser(ctx, userInfo)
	if err != nil {
		return nil, nil, err
	}

	// send email
	data := &schema.EmailCodeContent{
		Email:  registerUserInfo.Email,
		UserID: userInfo.ID,
	}
	code := uuid.NewString()
	verifyEmailURL := fmt.Sprintf("%s/users/account-activation?code=%s", us.getSiteUrl(ctx), code)
	title, body, err := us.emailService.RegisterTemplate(ctx, verifyEmailURL)
	if err != nil {
		return nil, nil, err
	}
	go us.emailService.SendAndSaveCode(ctx, userInfo.EMail, title, body, code, data.ToJSONString())

	roleID, err := us.userRoleService.GetUserRole(ctx, userInfo.ID)
	if err != nil {
		log.Error(err)
	}

	// return user info and token
	resp = &schema.GetUserResp{}
	resp.GetFromUserEntity(userInfo)
	userCacheInfo := &entity.UserCacheInfo{
		UserID:      userInfo.ID,
		EmailStatus: userInfo.MailStatus,
		UserStatus:  userInfo.Status,
		IsAdmin:     roleID == role.RoleAdminID,
	}
	resp.AccessToken, err = us.authService.SetUserCacheInfo(ctx, userCacheInfo)
	if err != nil {
		return nil, nil, err
	}
	resp.IsAdmin = userCacheInfo.IsAdmin
	if resp.IsAdmin {
		err = us.authService.SetAdminUserCacheInfo(ctx, resp.AccessToken, &entity.UserCacheInfo{UserID: userInfo.ID})
		if err != nil {
			return nil, nil, err
		}
	}
	return resp, nil, nil
}

func (us *UserService) UserVerifyEmailSend(ctx context.Context, userID string) error {
	userInfo, has, err := us.userRepo.GetByUserID(ctx, userID)
	if err != nil {
		return err
	}
	if !has {
		return errors.BadRequest(reason.UserNotFound)
	}

	data := &schema.EmailCodeContent{
		Email:  userInfo.EMail,
		UserID: userInfo.ID,
	}
	code := uuid.NewString()
	verifyEmailURL := fmt.Sprintf("%s/users/account-activation?code=%s", us.getSiteUrl(ctx), code)
	title, body, err := us.emailService.RegisterTemplate(ctx, verifyEmailURL)
	if err != nil {
		return err
	}
	go us.emailService.SendAndSaveCode(ctx, userInfo.EMail, title, body, code, data.ToJSONString())
	return nil
}

func (us *UserService) UserNoticeSet(ctx context.Context, userID string, noticeSwitch bool) (
	resp *schema.UserNoticeSetResp, err error,
) {
	userInfo, has, err := us.userRepo.GetByUserID(ctx, userID)
	if err != nil {
		return nil, err
	}
	if !has {
		return nil, errors.BadRequest(reason.UserNotFound)
	}
	if noticeSwitch {
		userInfo.NoticeStatus = schema.NoticeStatusOn
	} else {
		userInfo.NoticeStatus = schema.NoticeStatusOff
	}
	err = us.userRepo.UpdateNoticeStatus(ctx, userInfo.ID, userInfo.NoticeStatus)
	return &schema.UserNoticeSetResp{NoticeSwitch: noticeSwitch}, err
}

func (us *UserService) UserVerifyEmail(ctx context.Context, req *schema.UserVerifyEmailReq) (resp *schema.GetUserResp, err error) {
	data := &schema.EmailCodeContent{}
	err = data.FromJSONString(req.Content)
	if err != nil {
		return nil, errors.BadRequest(reason.EmailVerifyURLExpired)
	}

	userInfo, has, err := us.userRepo.GetByEmail(ctx, data.Email)
	if err != nil {
		return nil, err
	}
	if !has {
		return nil, errors.BadRequest(reason.UserNotFound)
	}
	userInfo.MailStatus = entity.EmailStatusAvailable
	err = us.userRepo.UpdateEmailStatus(ctx, userInfo.ID, userInfo.MailStatus)
	if err != nil {
		return nil, err
	}
	if err = us.userActivity.UserActive(ctx, userInfo.ID); err != nil {
		log.Error(err)
	}

	roleID, err := us.userRoleService.GetUserRole(ctx, userInfo.ID)
	if err != nil {
		log.Error(err)
	}

	resp = &schema.GetUserResp{}
	resp.GetFromUserEntity(userInfo)
	userCacheInfo := &entity.UserCacheInfo{
		UserID:      userInfo.ID,
		EmailStatus: userInfo.MailStatus,
		UserStatus:  userInfo.Status,
		IsAdmin:     roleID == role.RoleAdminID,
	}
	resp.AccessToken, err = us.authService.SetUserCacheInfo(ctx, userCacheInfo)
	if err != nil {
		return nil, err
	}
	// User verified email will update user email status. So user status cache should be updated.
	if err = us.authService.SetUserStatus(ctx, userCacheInfo); err != nil {
		return nil, err
	}
	resp.IsAdmin = userCacheInfo.IsAdmin
	if resp.IsAdmin {
		err = us.authService.SetAdminUserCacheInfo(ctx, resp.AccessToken, &entity.UserCacheInfo{UserID: userInfo.ID})
		if err != nil {
			return nil, err
		}
	}
	return resp, nil
}

// verifyPassword
// Compare whether the password is correct
func (us *UserService) verifyPassword(ctx context.Context, LoginPass, UserPass string) bool {
	err := bcrypt.CompareHashAndPassword([]byte(UserPass), []byte(LoginPass))
	return err == nil
}

// encryptPassword
// The password does irreversible encryption.
func (us *UserService) encryptPassword(ctx context.Context, Pass string) (string, error) {
	hashPwd, err := bcrypt.GenerateFromPassword([]byte(Pass), bcrypt.DefaultCost)
	// This encrypted string can be saved to the database and can be used as password matching verification
	return string(hashPwd), err
}

// UserChangeEmailSendCode user change email verification
func (us *UserService) UserChangeEmailSendCode(ctx context.Context, req *schema.UserChangeEmailSendCodeReq) (
	resp []*validator.FormErrorField, err error) {
	userInfo, exist, err := us.userRepo.GetByUserID(ctx, req.UserID)
	if err != nil {
		return nil, err
	}
	if !exist {
		return nil, errors.BadRequest(reason.UserNotFound)
	}

	_, exist, err = us.userRepo.GetByEmail(ctx, req.Email)
	if err != nil {
		return nil, err
	}
	if exist {
		resp = append([]*validator.FormErrorField{}, &validator.FormErrorField{
			ErrorField: "e_mail",
			ErrorMsg:   translator.Tr(handler.GetLangByCtx(ctx), reason.EmailDuplicate),
		})
		return resp, errors.BadRequest(reason.EmailDuplicate)
	}

	data := &schema.EmailCodeContent{
		Email:  req.Email,
		UserID: req.UserID,
	}
	code := uuid.NewString()
	var title, body string
	verifyEmailURL := fmt.Sprintf("%s/users/confirm-new-email?code=%s", us.getSiteUrl(ctx), code)
	if userInfo.MailStatus == entity.EmailStatusToBeVerified {
		title, body, err = us.emailService.RegisterTemplate(ctx, verifyEmailURL)
	} else {
		title, body, err = us.emailService.ChangeEmailTemplate(ctx, verifyEmailURL)
	}
	if err != nil {
		return nil, err
	}
	log.Infof("send email confirmation %s", verifyEmailURL)

	go us.emailService.SendAndSaveCode(context.Background(), req.Email, title, body, code, data.ToJSONString())
	return nil, nil
}

// UserChangeEmailVerify user change email verify code
func (us *UserService) UserChangeEmailVerify(ctx context.Context, content string) (err error) {
	data := &schema.EmailCodeContent{}
	err = data.FromJSONString(content)
	if err != nil {
		return errors.BadRequest(reason.EmailVerifyURLExpired)
	}

	_, exist, err := us.userRepo.GetByEmail(ctx, data.Email)
	if err != nil {
		return err
	}
	if exist {
		return errors.BadRequest(reason.EmailDuplicate)
	}

	_, exist, err = us.userRepo.GetByUserID(ctx, data.UserID)
	if err != nil {
		return err
	}
	if !exist {
		return errors.BadRequest(reason.UserNotFound)
	}
	err = us.userRepo.UpdateEmail(ctx, data.UserID, data.Email)
	if err != nil {
		return errors.BadRequest(reason.UserNotFound)
	}
	err = us.userRepo.UpdateEmailStatus(ctx, data.UserID, entity.EmailStatusAvailable)
	if err != nil {
		return err
	}
	return nil
}

// getSiteUrl get site url
func (us *UserService) getSiteUrl(ctx context.Context) string {
	siteGeneral, err := us.siteInfoService.GetSiteGeneral(ctx)
	if err != nil {
		log.Errorf("get site general failed: %s", err)
		return ""
	}
	return siteGeneral.SiteUrl
}

// UserRanking get user ranking
func (us *UserService) UserRanking(ctx context.Context) (resp *schema.UserRankingResp, err error) {
	limit := 20
	endTime := time.Now()
	startTime := endTime.AddDate(0, 0, -7)
	userIDs, userIDExist := make([]string, 0), make(map[string]bool, 0)

	// get most reputation users
	rankStat, rankStatUserIDs, err := us.getActivityUserRankStat(ctx, startTime, endTime, limit, userIDExist)
	if err != nil {
		return nil, err
	}
	userIDs = append(userIDs, rankStatUserIDs...)

	// get most vote users
	voteStat, voteStatUserIDs, err := us.getActivityUserVoteStat(ctx, startTime, endTime, limit, userIDExist)
	if err != nil {
		return nil, err
	}
	userIDs = append(userIDs, voteStatUserIDs...)

	// get all staff members
	userRoleRels, staffUserIDs, err := us.getStaff(ctx, userIDExist)
	if err != nil {
		return nil, err
	}
	userIDs = append(userIDs, staffUserIDs...)

	// get user information
	userInfoMapping, err := us.getUserInfoMapping(ctx, userIDs)
	if err != nil {
		return nil, err
	}
	return us.warpStatRankingResp(userInfoMapping, rankStat, voteStat, userRoleRels), nil
}

// UserUnsubscribeEmailNotification user unsubscribe email notification
func (us *UserService) UserUnsubscribeEmailNotification(
	ctx context.Context, req *schema.UserUnsubscribeEmailNotificationReq) (err error) {
	data := &schema.EmailCodeContent{}
	err = data.FromJSONString(req.Content)
	if err != nil || len(data.UserID) == 0 {
		return errors.BadRequest(reason.EmailVerifyURLExpired)
	}

	userInfo, exist, err := us.userRepo.GetByUserID(ctx, data.UserID)
	if err != nil {
		return err
	}
	if !exist {
		return errors.BadRequest(reason.UserNotFound)
	}
	return us.userRepo.UpdateNoticeStatus(ctx, userInfo.ID, schema.NoticeStatusOff)
}

func (us *UserService) getActivityUserRankStat(ctx context.Context, startTime, endTime time.Time, limit int,
	userIDExist map[string]bool) (rankStat []*entity.ActivityUserRankStat, userIDs []string, err error) {
	rankStat, err = us.activityRepo.GetUsersWhoHasGainedTheMostReputation(ctx, startTime, endTime, limit)
	if err != nil {
		return nil, nil, err
	}
	for _, stat := range rankStat {
		if stat.Rank <= 0 {
			continue
		}
		if userIDExist[stat.UserID] {
			continue
		}
		userIDs = append(userIDs, stat.UserID)
		userIDExist[stat.UserID] = true
	}
	return rankStat, userIDs, nil
}

func (us *UserService) getActivityUserVoteStat(ctx context.Context, startTime, endTime time.Time, limit int,
	userIDExist map[string]bool) (voteStat []*entity.ActivityUserVoteStat, userIDs []string, err error) {
	voteStat, err = us.activityRepo.GetUsersWhoHasVoteMost(ctx, startTime, endTime, limit)
	if err != nil {
		return nil, nil, err
	}
	for _, stat := range voteStat {
		if stat.VoteCount <= 0 {
			continue
		}
		if userIDExist[stat.UserID] {
			continue
		}
		userIDs = append(userIDs, stat.UserID)
		userIDExist[stat.UserID] = true
	}
	return voteStat, userIDs, nil
}

func (us *UserService) getStaff(ctx context.Context, userIDExist map[string]bool) (
	userRoleRels []*entity.UserRoleRel, userIDs []string, err error) {
	userRoleRels, err = us.userRoleService.GetUserByRoleID(ctx, []int{role.RoleAdminID, role.RoleModeratorID})
	if err != nil {
		return nil, nil, err
	}
	for _, rel := range userRoleRels {
		if userIDExist[rel.UserID] {
			continue
		}
		userIDs = append(userIDs, rel.UserID)
		userIDExist[rel.UserID] = true
	}
	return userRoleRels, userIDs, nil
}

func (us *UserService) getUserInfoMapping(ctx context.Context, userIDs []string) (
	userInfoMapping map[string]*entity.User, err error) {
	userInfoMapping = make(map[string]*entity.User, 0)
	if len(userIDs) == 0 {
		return userInfoMapping, nil
	}
	userInfoList, err := us.userRepo.BatchGetByID(ctx, userIDs)
	if err != nil {
		return nil, err
	}
	for _, user := range userInfoList {
		user.Avatar = schema.FormatAvatarInfo(user.Avatar)
		userInfoMapping[user.ID] = user
	}
	return userInfoMapping, nil
}

func (us *UserService) warpStatRankingResp(
	userInfoMapping map[string]*entity.User,
	rankStat []*entity.ActivityUserRankStat,
	voteStat []*entity.ActivityUserVoteStat,
	userRoleRels []*entity.UserRoleRel) (resp *schema.UserRankingResp) {
	resp = &schema.UserRankingResp{
		UsersWithTheMostReputation: make([]*schema.UserRankingSimpleInfo, 0),
		UsersWithTheMostVote:       make([]*schema.UserRankingSimpleInfo, 0),
		Staffs:                     make([]*schema.UserRankingSimpleInfo, 0),
	}
	for _, stat := range rankStat {
		if stat.Rank <= 0 {
			continue
		}
		if userInfo := userInfoMapping[stat.UserID]; userInfo != nil {
			resp.UsersWithTheMostReputation = append(resp.UsersWithTheMostReputation, &schema.UserRankingSimpleInfo{
				Username:    userInfo.Username,
				Rank:        stat.Rank,
				DisplayName: userInfo.DisplayName,
				Avatar:      userInfo.Avatar,
			})
		}
	}
	for _, stat := range voteStat {
		if stat.VoteCount <= 0 {
			continue
		}
		if userInfo := userInfoMapping[stat.UserID]; userInfo != nil {
			resp.UsersWithTheMostVote = append(resp.UsersWithTheMostVote, &schema.UserRankingSimpleInfo{
				Username:    userInfo.Username,
				VoteCount:   stat.VoteCount,
				DisplayName: userInfo.DisplayName,
				Avatar:      userInfo.Avatar,
			})
		}
	}
	for _, rel := range userRoleRels {
		if userInfo := userInfoMapping[rel.UserID]; userInfo != nil {
			resp.Staffs = append(resp.Staffs, &schema.UserRankingSimpleInfo{
				Username:    userInfo.Username,
				Rank:        userInfo.Rank,
				DisplayName: userInfo.DisplayName,
				Avatar:      userInfo.Avatar,
			})
		}
	}
	return resp
}