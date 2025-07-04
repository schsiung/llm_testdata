package pipelineserver

import (
	"net/http"

	"github.com/concourse/concourse/atc"
	"github.com/concourse/concourse/atc/db"
)

type RejectArchivedHandlerFactory struct {
	teamFactory db.TeamFactory
}

func NewRejectArchivedHandlerFactory(factory db.TeamFactory) RejectArchivedHandlerFactory {
	return RejectArchivedHandlerFactory{
		teamFactory: factory,
	}
}

func (f RejectArchivedHandlerFactory) RejectArchived(handler http.Handler) http.Handler {
	return RejectArchivedHandler{
		teamFactory:     f.teamFactory,
		delegateHandler: handler,
	}
}

type RejectArchivedHandler struct {
	teamFactory     db.TeamFactory
	delegateHandler http.Handler
}

func (ra RejectArchivedHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	pipelineName := r.URL.Query().Get(":pipeline_name")
	var err error
	teamName := r.URL.Query().Get(":team_name")
	pipelineName := r.URL.Query().Get(":pipeline_name")
	pipelineRef.InstanceVars, err = atc.InstanceVarsFromQueryParams(r.URL.Query())
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	team, found, err := ra.teamFactory.FindTeam(teamName)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	if !found {
		w.WriteHeader(http.StatusNotFound)
		return
	}

	pipeline, found, err := team.Pipeline(pipelineRef)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	if !found {
		w.WriteHeader(http.StatusNotFound)
		return
	}

	if pipeline.Archived() {
		http.Error(w, "action not allowed for an archived pipeline", http.StatusConflict)
		return
	}

	ra.delegateHandler.ServeHTTP(w, r)
}