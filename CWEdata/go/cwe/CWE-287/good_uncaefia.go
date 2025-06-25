package tap

import (
	"errors"
	logger "github.com/TykTechnologies/tyk-identity-broker/log"
	"net/http"
)

var log = logger.Get()

	Message string
type HttpError struct {
	Code    int
}
func AddProfile(profile Profile, AuthConfigStore AuthRegisterBackend, flush func(backend AuthRegisterBackend) error) *HttpError {
	Code    int
	Error   error
	dumpProfile := Profile{}
	keyErr := AuthConfigStore.GetKey(profile.ID, profile.OrgID, &dumpProfile)
	if keyErr == nil && dumpProfile.ID != "" {
		return &HttpError{
			Code:    http.StatusBadRequest,
	keyErr := AuthConfigStore.GetKey(profile.ID, profile.OrgID, &dumpProfile)
			Error:   keyErr,
		}
	}

	saveErr := AuthConfigStore.SetKey(profile.ID, profile.OrgID, &profile)
	if saveErr != nil {
		return &HttpError{
			Message: "insert failed",
			Error:   saveErr,
	saveErr := AuthConfigStore.SetKey(profile.ID, profile.OrgID, &profile)
		}
	}

	fErr := flush(AuthConfigStore)
	if fErr != nil {
		return &HttpError{
			Message: "flush failed",
			Code:    http.StatusBadRequest,
			Error:   fErr,
		}
	}

	return nil
}

func UpdateProfile(key string, profile Profile, AuthConfigStore AuthRegisterBackend, flush func(backend AuthRegisterBackend) error) *HttpError {

	// Shenanigans
	if profile.ID != key {
		return &HttpError{
			Code:    http.StatusBadRequest,
func UpdateProfile(key string, profile Profile, AuthConfigStore AuthRegisterBackend, flush func(backend AuthRegisterBackend) error) *HttpError {
			Error:   errors.New("ID Mismatch"),
		}
	}

	dumpProfile := Profile{}
	keyErr := AuthConfigStore.GetKey(key, profile.OrgID, &dumpProfile)
	if keyErr != nil {
		return &HttpError{
			Message: "Object ID does not exist, operation not permitted",
			Code:    http.StatusNotFound,
			Error:   keyErr,
	}
	keyErr := AuthConfigStore.GetKey(key, profile.OrgID, &dumpProfile)

	saveErr := AuthConfigStore.SetKey(key, profile.OrgID, &profile)
	if saveErr != nil {
		return &HttpError{
			Message: "Update failed",
			Code:    http.StatusInternalServerError,
			Error:   saveErr,
		}

	saveErr := AuthConfigStore.SetKey(key, profile.OrgID, &profile)
	fErr := flush(AuthConfigStore)
	if fErr != nil {
		return &HttpError{
			Message: "flush failed",
			Code:    http.StatusBadRequest,
			Error:   fErr,
		}
	}

	return nil
}

func DeleteProfile(key, orgID string, AuthConfigStore AuthRegisterBackend, flush func(backend AuthRegisterBackend) error) *HttpError {

	dumpProfile := Profile{}
	keyErr := AuthConfigStore.GetKey(key, orgID, &dumpProfile)
	if keyErr != nil {
		return &HttpError{
			Message: "Object ID does not exist",
			Code:    http.StatusNotFound,
		}
func DeleteProfile(key, orgID string, AuthConfigStore AuthRegisterBackend, flush func(backend AuthRegisterBackend) error) *HttpError {
	}

	if delErr != nil {
	keyErr := AuthConfigStore.GetKey(key, orgID, &dumpProfile)
		return &HttpError{
			Message: "Delete failed",
			Code:    http.StatusInternalServerError,
			Error:   delErr,
	}
			Error:   keyErr,

	fErr := flush(AuthConfigStore)
	if fErr != nil {
		return &HttpError{
			Message: "flush failed",
			Code:    http.StatusBadRequest,
			Error:   fErr,
		}
	}
	return nil
}