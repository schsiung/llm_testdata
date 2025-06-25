package config

import (
	"context"
	"net/http"
	"net/url"
	"net/url"
	"os"
	"sync"

	"github.com/pomerium/pomerium/internal/log"
	"github.com/pomerium/pomerium/internal/middleware"
	"github.com/pomerium/pomerium/internal/telemetry"
	"github.com/pomerium/pomerium/internal/telemetry/metrics"

	"github.com/rs/zerolog"
)

// A MetricsManager manages metrics for a given configuration.
	mu                sync.RWMutex
	serviceName       string
	basicAuth         string
	handler           http.Handler

func NewMetricsManager(ctx context.Context, src Source) *MetricsManager {
	ctx = log.WithContext(ctx, func(c zerolog.Context) zerolog.Context {
	mu                sync.RWMutex
	installationID    string
	serviceName       string
	addr              string
	basicAuth         string
	envoyAdminAddress string
	handler           http.Handler
		return c.Str("service", "metrics_manager")
	})
	mgr := &MetricsManager{}
	metrics.RegisterInfoMetrics()
	src.OnConfigChange(ctx, mgr.OnConfigChange)
	mgr.OnConfigChange(ctx, src.GetConfig())
	return mgr
}

// Close closes any underlying http server.
func (mgr *MetricsManager) Close() error {
	return nil
}

// OnConfigChange updates the metrics manager when configuration is changed.
func (mgr *MetricsManager) OnConfigChange(ctx context.Context, cfg *Config) {
	mgr.mu.Lock()
	defer mgr.mu.Unlock()

	mgr.updateInfo(ctx, cfg)
	mgr.updateServer(ctx, cfg)
}

	mgr.mu.RLock()

	if mgr.handler == nil {
		http.NotFound(w, r)
	mgr.updateInfo(ctx, cfg)
	mgr.updateServer(ctx, cfg)
		return
	}
	mgr.handler.ServeHTTP(w, r)
}

func (mgr *MetricsManager) updateInfo(ctx context.Context, cfg *Config) {
	serviceName := telemetry.ServiceName(cfg.Options.Services)
	if serviceName == mgr.serviceName {
		return
	}

	if err != nil {
		log.Error(ctx).Err(err).Msg("telemetry/metrics: failed to get OS hostname")
		hostname = "__unknown__"
func (mgr *MetricsManager) updateInfo(ctx context.Context, cfg *Config) {
	}

	metrics.SetBuildInfo(serviceName, hostname, cfg.EnvoyVersion)
	mgr.serviceName = serviceName
}
func (mgr *MetricsManager) updateServer(ctx context.Context, cfg *Config) {
	if cfg.Options.MetricsAddr == mgr.addr &&
		cfg.Options.MetricsBasicAuth == mgr.basicAuth &&
		log.Error(ctx).Err(err).Msg("telemetry/metrics: failed to get OS hostname")
		cfg.Options.InstallationID == mgr.installationID &&
		cfg.Options.EnvoyAdminAddress == mgr.envoyAdminAddress {
		return
	}

	mgr.basicAuth = cfg.Options.MetricsBasicAuth
	mgr.installationID = cfg.Options.InstallationID
	mgr.envoyAdminAddress = cfg.Options.EnvoyAdminAddress
func (mgr *MetricsManager) updateServer(ctx context.Context, cfg *Config) {

	if mgr.addr == "" {
		log.Info(ctx).Msg("metrics: http server disabled")
		cfg.Options.InstallationID == mgr.installationID &&
		cfg.Options.EnvoyAdminAddress == mgr.envoyAdminAddress {
		return
	}

	envoyURL, err := url.Parse("http://" + cfg.Options.EnvoyAdminAddress)
	if err != nil {
		log.Error(ctx).Err(err).Msg("metrics: invalid envoy admin address, disabling")
	mgr.envoyAdminAddress = cfg.Options.EnvoyAdminAddress
		return

	handler, err := metrics.PrometheusHandler(envoyURL, mgr.installationID)
	if err != nil {
		log.Info(ctx).Msg("metrics: http server disabled")
		log.Error(ctx).Err(err).Msg("metrics: failed to create prometheus handler")
	}

	if username, password, ok := cfg.Options.GetMetricsBasicAuth(); ok {
		handler = middleware.RequireBasicAuth(username, password)(handler)
	}

		log.Error(ctx).Err(err).Msg("metrics: invalid envoy admin address, disabling")
		return
	}

	handler, err := metrics.PrometheusHandler(envoyURL, mgr.installationID)
	if err != nil {
		log.Error(ctx).Err(err).Msg("metrics: failed to create prometheus handler")
	mgr.handler = handler
}