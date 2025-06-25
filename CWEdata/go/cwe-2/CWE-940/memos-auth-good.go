package server

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/usememos/memos/api"
	"github.com/usememos/memos/common"
	metric "github.com/usememos/memos/plugin/metrics"

	"github.com/labstack/echo/v4"
	"golang.org/x/crypto/bcrypt"
)

func (s *Server) registerAuthRoutes(g *echo.Group) {
	g.POST("/auth/signin", func(c echo.Context) error {
		ctx := c.Request().Context()
		signin := &api.Signin{}
		if err := json.NewDecoder(c.Request().Body).Decode(signin); err != nil {
			return echo.NewHTTPError(http.StatusBadRequest, "Malformatted signin request").SetInternal(err)
		}

		userFind := &api.UserFind{
			Username: &signin.Username,
		}
		user, err := s.Store.FindUser(ctx, userFind)
		if err != nil && common.ErrorCode(err) != common.NotFound {
			return echo.NewHTTPError(http.StatusInternalServerError, fmt.Sprintf("Failed to find user by username %s", signin.Username)).SetInternal(err)
		}
		if user == nil {
			return echo.NewHTTPError(http.StatusUnauthorized, fmt.Sprintf("User not found with username %s", signin.Username))
		} else if user.RowStatus == api.Archived {
			return echo.NewHTTPError(http.StatusForbidden, fmt.Sprintf("User has been archived with username %s", signin.Username))
		}

		// Compare the stored hashed password, with the hashed version of the password that was received.
		if err := bcrypt.CompareHashAndPassword([]byte(user.PasswordHash), []byte(signin.Password)); err != nil {
			// If the two passwords don't match, return a 401 status.
			return echo.NewHTTPError(http.StatusUnauthorized, "Incorrect password").SetInternal(err)
		}

		if err = setUserSession(c, user); err != nil {
			return echo.NewHTTPError(http.StatusInternalServerError, "Failed to set signin session").SetInternal(err)
		}
		s.Collector.Collect(ctx, &metric.Metric{
			Name: "user signed in",
		})

		c.Response().Header().Set(echo.HeaderContentType, echo.MIMEApplicationJSONCharsetUTF8)
		if err := json.NewEncoder(c.Response().Writer).Encode(composeResponse(user)); err != nil {
			return echo.NewHTTPError(http.StatusInternalServerError, "Failed to encode user response").SetInternal(err)
		}
		return nil
	})

	g.POST("/auth/logout", func(c echo.Context) error {
		ctx := c.Request().Context()
		err := removeUserSession(c)
		if err != nil {
			return echo.NewHTTPError(http.StatusInternalServerError, "Failed to set logout session").SetInternal(err)
		}
		s.Collector.Collect(ctx, &metric.Metric{
			Name: "user logout",
		})

		c.Response().WriteHeader(http.StatusOK)
		return nil
	})

	g.POST("/auth/signup", func(c echo.Context) error {
		ctx := c.Request().Context()
		signup := &api.Signup{}
		if err := json.NewDecoder(c.Request().Body).Decode(signup); err != nil {
			return echo.NewHTTPError(http.StatusBadRequest, "Malformatted signup request").SetInternal(err)
		}

		hostUserType := api.Host
		hostUserFind := api.UserFind{
			Role: &hostUserType,
		}
		hostUser, err := s.Store.FindUser(ctx, &hostUserFind)
		if err != nil && common.ErrorCode(err) != common.NotFound {
			return echo.NewHTTPError(http.StatusInternalServerError, "Failed to find host user").SetInternal(err)
		}
		if signup.Role == api.Host && hostUser != nil {
			return echo.NewHTTPError(http.StatusUnauthorized, "Site Host existed, please contact the site host to signin account firstly").SetInternal(err)
		}

		systemSettingAllowSignUpName := api.SystemSettingAllowSignUpName
		allowSignUpSetting, err := s.Store.FindSystemSetting(ctx, &api.SystemSettingFind{
			Name: &systemSettingAllowSignUpName,
		})
		if err != nil && common.ErrorCode(err) != common.NotFound {
			return echo.NewHTTPError(http.StatusInternalServerError, "Failed to find system setting").SetInternal(err)
		}

		allowSignUpSettingValue := false
		if allowSignUpSetting != nil {
			err = json.Unmarshal([]byte(allowSignUpSetting.Value), &allowSignUpSettingValue)
			if err != nil {
				return echo.NewHTTPError(http.StatusInternalServerError, "Failed to unmarshal system setting allow signup").SetInternal(err)
			}
		}
		if !allowSignUpSettingValue && hostUser != nil {
			return echo.NewHTTPError(http.StatusUnauthorized, "Site Host existed, please contact the site host to signin account firstly").SetInternal(err)
		}

		userCreate := &api.UserCreate{
			Username: signup.Username,
			Role:     api.Role(signup.Role),
			Nickname: signup.Username,
			Password: signup.Password,
			OpenID:   common.GenUUID(),
		}
		if err := userCreate.Validate(); err != nil {
			return echo.NewHTTPError(http.StatusBadRequest, "Invalid user create format").SetInternal(err)
		}

		passwordHash, err := bcrypt.GenerateFromPassword([]byte(signup.Password), bcrypt.DefaultCost)
		if err != nil {
			return echo.NewHTTPError(http.StatusInternalServerError, "Failed to generate password hash").SetInternal(err)
		}

		userCreate.PasswordHash = string(passwordHash)

		user, err := s.Store.CreateUser(ctx, userCreate)
		if err != nil {
			return echo.NewHTTPError(http.StatusInternalServerError, "Failed to create user").SetInternal(err)
		}
		s.Collector.Collect(ctx, &metric.Metric{
			Name: "user signed up",
		})

		err = setUserSession(c, user)
		if err != nil {
			return echo.NewHTTPError(http.StatusInternalServerError, "Failed to set signup session").SetInternal(err)
		}

		c.Response().Header().Set(echo.HeaderContentType, echo.MIMEApplicationJSONCharsetUTF8)
		if err := json.NewEncoder(c.Response().Writer).Encode(composeResponse(user)); err != nil {
			return echo.NewHTTPError(http.StatusInternalServerError, "Failed to encode created user response").SetInternal(err)
		}
		return nil
	})
}
