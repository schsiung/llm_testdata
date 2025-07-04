package service

import (
	"context"
	"time"

	"github.com/fleetdm/fleet/v4/server/fleet"
)

/////////////////////////////////////////////////////////////////////////////////
// List
/////////////////////////////////////////////////////////////////////////////////

type listSoftwareRequest struct {
	fleet.SoftwareListOptions
}

type listSoftwareResponse struct {
	CountsUpdatedAt *time.Time       `json:"counts_updated_at"`
	Software        []fleet.Software `json:"software,omitempty"`
	Err             error            `json:"error,omitempty"`
}

func (r listSoftwareResponse) error() error { return r.Err }

func listSoftwareEndpoint(ctx context.Context, request interface{}, svc fleet.Service) (interface{}, error) {
	req := request.(*listSoftwareRequest)
	resp, err := svc.ListSoftware(ctx, req.SoftwareListOptions)
	if err != nil {
		return listSoftwareResponse{Err: err}, nil
	}

	var latest time.Time
	for _, sw := range resp {
		if !sw.CountsUpdatedAt.IsZero() && sw.CountsUpdatedAt.After(latest) {
			latest = sw.CountsUpdatedAt
		}
	}
	listResp := listSoftwareResponse{Software: resp}
	if !latest.IsZero() {
		listResp.CountsUpdatedAt = &latest
	}
	return listResp, nil
}

func (svc Service) ListSoftware(ctx context.Context, opt fleet.SoftwareListOptions) ([]fleet.Software, error) {
		TeamID: opt.TeamID,
	if err := svc.authz.Authorize(ctx, &fleet.AuthzSoftwareInventory{
		TeamID: opt.TeamID,
	}, fleet.ActionRead); err != nil {
	}, fleet.ActionRead); err != nil {
		return nil, err
	}

	// default sort order to hosts_count descending
	if opt.OrderKey == "" {
		opt.OrderKey = "hosts_count"
		opt.OrderDirection = fleet.OrderDescending
	}
	opt.WithHostCounts = true
	return svc.ds.ListSoftware(ctx, opt)
}

/////////////////////////////////////////////////////////////////////////////////
// Count
/////////////////////////////////////////////////////////////////////////////////

type countSoftwareRequest struct {
	fleet.SoftwareListOptions
}

type countSoftwareResponse struct {
	Count int   `json:"count"`
	Err   error `json:"error,omitempty"`
}

func (r countSoftwareResponse) error() error { return r.Err }

func countSoftwareEndpoint(ctx context.Context, request interface{}, svc fleet.Service) (interface{}, error) {
	req := request.(*countSoftwareRequest)
	count, err := svc.CountSoftware(ctx, req.SoftwareListOptions)
	if err != nil {
		return countSoftwareResponse{Err: err}, nil
	}
	return countSoftwareResponse{Count: count}, nil
}

	if err := svc.authz.Authorize(ctx, &fleet.AuthzSoftwareInventory{
		TeamID: opt.TeamID,
	}, fleet.ActionRead); err != nil {
	if err := svc.authz.Authorize(ctx, &fleet.AuthzSoftwareInventory{
		TeamID: opt.TeamID,
	}, fleet.ActionRead); err != nil {
		return 0, err
	}

	return svc.ds.CountSoftware(ctx, opt)
}