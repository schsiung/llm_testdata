/*
 * This file is part of the KubeVirt project
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Copyright 2017, 2018 Red Hat, Inc.
 *
 */

package services

import (
	"encoding/json"
	"fmt"
	"path/filepath"
	"strconv"
	"strings"

	k8sv1 "k8s.io/api/core/v1"
	"k8s.io/apimachinery/pkg/api/resource"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/client-go/tools/cache"

	hostdisk "kubevirt.io/kubevirt/pkg/host-disk"

	networkv1 "github.com/k8snetworkplumbingwg/network-attachment-definition-client/pkg/apis/k8s.cni.cncf.io/v1"

	v1 "kubevirt.io/client-go/api/v1"
	"kubevirt.io/client-go/kubecli"
	"kubevirt.io/client-go/log"
	"kubevirt.io/client-go/precond"
	"kubevirt.io/kubevirt/pkg/config"
	containerdisk "kubevirt.io/kubevirt/pkg/container-disk"
	"kubevirt.io/kubevirt/pkg/hooks"
	"kubevirt.io/kubevirt/pkg/util"
	"kubevirt.io/kubevirt/pkg/util/hardware"
	"kubevirt.io/kubevirt/pkg/util/net/dns"
	"kubevirt.io/kubevirt/pkg/util/types"
	virtconfig "kubevirt.io/kubevirt/pkg/virt-config"
)

const configMapName = "kubevirt-config"
const KvmDevice = "devices.kubevirt.io/kvm"
const TunDevice = "devices.kubevirt.io/tun"
const VhostNetDevice = "devices.kubevirt.io/vhost-net"

const debugLogs = "debugLogs"

const MultusNetworksAnnotation = "k8s.v1.cni.cncf.io/networks"
const GenieNetworksAnnotation = "cni"

const CAP_NET_ADMIN = "NET_ADMIN"
const CAP_SYS_NICE = "SYS_NICE"

// LibvirtStartupDelay is added to custom liveness and readiness probes initial delay value.
// Libvirt needs roughly 10 seconds to start.
const LibvirtStartupDelay = 10

//These perfixes for node feature discovery, are used in a NodeSelector on the pod
//to match a VirtualMachineInstance CPU model(Family) and/or features to nodes that support them.
const NFD_CPU_MODEL_PREFIX = "feature.node.kubernetes.io/cpu-model-"
const NFD_CPU_FEATURE_PREFIX = "feature.node.kubernetes.io/cpu-feature-"
const NFD_KVM_INFO_PREFIX = "feature.node.kubernetes.io/kvm-info-cap-hyperv-"

const MULTUS_RESOURCE_NAME_ANNOTATION = "k8s.v1.cni.cncf.io/resourceName"
const MULTUS_DEFAULT_NETWORK_CNI_ANNOTATION = "v1.multus-cni.io/default-network"

// Istio list of virtual interfaces whose inbound traffic (from VM) will be treated as outbound traffic in envoy
const ISTIO_KUBEVIRT_ANNOTATION = "traffic.sidecar.istio.io/kubevirtInterfaces"

const ENV_VAR_LIBVIRT_DEBUG_LOGS = "LIBVIRT_DEBUG_LOGS"

type TemplateService interface {
	RenderLaunchManifest(*v1.VirtualMachineInstance) (*k8sv1.Pod, error)
}

type templateService struct {
	launcherImage              string
	virtShareDir               string
	virtLibDir                 string
	ephemeralDiskDir           string
	containerDiskDir           string
	imagePullSecret            string
	persistentVolumeClaimStore cache.Store
	virtClient                 kubecli.KubevirtClient
	clusterConfig              *virtconfig.ClusterConfig
}

type PvcNotFoundError error

func isFeatureStateEnabled(fs *v1.FeatureState) bool {
	return fs != nil && fs.Enabled != nil && *fs.Enabled
}

type hvFeatureLabel struct {
	Feature *v1.FeatureState
	Label   string
}

// makeHVFeatureLabelTable creates the mapping table between the VMI hyperv state and the label names.
// The table needs pointers to v1.FeatureHyperv struct, so it has to be generated and can't be a
// static var
func makeHVFeatureLabelTable(vmi *v1.VirtualMachineInstance) []hvFeatureLabel {
	// The following HyperV features don't require support from the host kernel, according to inspection
	// of the QEMU sources (4.0 - adb3321bfd)
	// VAPIC, Relaxed, Spinlocks, VendorID
	// VPIndex, SyNIC: depend on both MSR and capability
	// IPI, TLBFlush: depend on KVM Capabilities
	// Runtime, Reset, SyNICTimer, Frequencies, Reenlightenment: depend on KVM MSRs availability
	// EVMCS: depends on KVM capability, but the only way to know that is enable it, QEMU doesn't do
	// any check before that, so we leave it out
	//
	// see also https://schd.ws/hosted_files/devconfcz2019/cf/vkuznets_enlightening_kvm_devconf2019.pdf
	// to learn about dependencies between enlightenments

	hyperv := vmi.Spec.Domain.Features.Hyperv // shortcut
	return []hvFeatureLabel{
		hvFeatureLabel{
			Feature: hyperv.VPIndex,
			Label:   "vpindex",
		},
		hvFeatureLabel{
			Feature: hyperv.Runtime,
			Label:   "runtime",
		},
		hvFeatureLabel{
			Feature: hyperv.Reset,
			Label:   "reset",
		},
		hvFeatureLabel{
			// TODO: SyNIC depends on vp-index on QEMU level. We should enforce this constraint.
			Feature: hyperv.SyNIC,
			Label:   "synic",
		},
		hvFeatureLabel{
			// TODO: SyNICTimer depends on SyNIC and Relaxed. We should enforce this constraint.
			Feature: hyperv.SyNICTimer,
			Label:   "synictimer",
		},
		hvFeatureLabel{
			Feature: hyperv.Frequencies,
			Label:   "frequencies",
		},
		hvFeatureLabel{
			Feature: hyperv.Reenlightenment,
			Label:   "reenlightenment",
		},
		hvFeatureLabel{
			Feature: hyperv.TLBFlush,
			Label:   "tlbflush",
		},
		hvFeatureLabel{
			Feature: hyperv.IPI,
			Label:   "ipi",
		},
	}
}

func getHypervNodeSelectors(vmi *v1.VirtualMachineInstance) map[string]string {
	nodeSelectors := make(map[string]string)
	if vmi.Spec.Domain.Features == nil || vmi.Spec.Domain.Features.Hyperv == nil {
		return nodeSelectors
	}

	hvFeatureLabels := makeHVFeatureLabelTable(vmi)
	for _, hv := range hvFeatureLabels {
		if isFeatureStateEnabled(hv.Feature) {
			nodeSelectors[NFD_KVM_INFO_PREFIX+hv.Label] = "true"
		}
	}
	return nodeSelectors
}

func CPUModelLabelFromCPUModel(vmi *v1.VirtualMachineInstance) (label string, err error) {
	if vmi.Spec.Domain.CPU == nil || vmi.Spec.Domain.CPU.Model == "" {
		err = fmt.Errorf("Cannot create CPU Model label, vmi spec is mising CPU model")
		return
	}
	label = NFD_CPU_MODEL_PREFIX + vmi.Spec.Domain.CPU.Model
	return
}

func CPUFeatureLabelsFromCPUFeatures(vmi *v1.VirtualMachineInstance) []string {
	var labels []string
	if vmi.Spec.Domain.CPU != nil && vmi.Spec.Domain.CPU.Features != nil {
		for _, feature := range vmi.Spec.Domain.CPU.Features {
			if feature.Policy == "" || feature.Policy == "require" {
				labels = append(labels, NFD_CPU_FEATURE_PREFIX+feature.Name)
			}
		}
	}
	return labels
}

func SetNodeAffinityForForbiddenFeaturePolicy(vmi *v1.VirtualMachineInstance, pod *k8sv1.Pod) {

	if vmi.Spec.Domain.CPU == nil || vmi.Spec.Domain.CPU.Features == nil {
		return
	}

	for _, feature := range vmi.Spec.Domain.CPU.Features {
		if feature.Policy == "forbid" {

			requirement := k8sv1.NodeSelectorRequirement{
				Key:      NFD_CPU_FEATURE_PREFIX + feature.Name,
				Operator: k8sv1.NodeSelectorOpDoesNotExist,
			}
			term := k8sv1.NodeSelectorTerm{
				MatchExpressions: []k8sv1.NodeSelectorRequirement{requirement}}

			nodeAffinity := &k8sv1.NodeAffinity{
				RequiredDuringSchedulingIgnoredDuringExecution: &k8sv1.NodeSelector{
					NodeSelectorTerms: []k8sv1.NodeSelectorTerm{term},
				},
			}

			if pod.Spec.Affinity != nil && pod.Spec.Affinity.NodeAffinity != nil {
				if pod.Spec.Affinity.NodeAffinity.RequiredDuringSchedulingIgnoredDuringExecution != nil {
					terms := pod.Spec.Affinity.NodeAffinity.RequiredDuringSchedulingIgnoredDuringExecution.NodeSelectorTerms
					// Since NodeSelectorTerms are ORed , the anti affinity requirement will be added to each term.
					for i, selectorTerm := range terms {
						pod.Spec.Affinity.NodeAffinity.
							RequiredDuringSchedulingIgnoredDuringExecution.
							NodeSelectorTerms[i].MatchExpressions = append(selectorTerm.MatchExpressions, requirement)
					}
				} else {
					pod.Spec.Affinity.NodeAffinity.RequiredDuringSchedulingIgnoredDuringExecution = &k8sv1.NodeSelector{
						NodeSelectorTerms: []k8sv1.NodeSelectorTerm{term},
					}
				}

			} else if pod.Spec.Affinity != nil {
				pod.Spec.Affinity.NodeAffinity = nodeAffinity
			} else {
				pod.Spec.Affinity = &k8sv1.Affinity{
					NodeAffinity: nodeAffinity,
				}

			}
		}
	}
}

// Request a resource by name. This function bumps the number of resources,
// both its limits and requests attributes.
//
// If we were operating with a regular resource (CPU, memory, network
// bandwidth), we would need to take care of QoS. For example,
// https://kubernetes.io/docs/tasks/configure-pod-container/quality-service-pod/#create-a-pod-that-gets-assigned-a-qos-class-of-guaranteed
// explains that when Limits are set but Requests are not then scheduler
// assumes that Requests are the same as Limits for a particular resource.
//
// But this function is not called for this standard resources but for
// resources managed by device plugins. The device plugin design document says
// the following on the matter:
// https://github.com/kubernetes/community/blob/master/contributors/design-proposals/resource-management/device-plugin.md#end-user-story
//
// ```
// Devices can be selected using the same process as for OIRs in the pod spec.
// Devices have no impact on QOS. However, for the alpha, we expect the request
// to have limits == requests.
// ```
//
// Which suggests that, for resources managed by device plugins, 1) limits
// should be equal to requests; and 2) QoS rules do not apply.
//
// Hence we don't copy Limits value to Requests if the latter is missing.
func requestResource(resources *k8sv1.ResourceRequirements, resourceName string) {
	name := k8sv1.ResourceName(resourceName)

	// assume resources are countable, singular, and cannot be divided
	unitQuantity := *resource.NewQuantity(1, resource.DecimalSI)

	// Fill in limits
	val, ok := resources.Limits[name]
	if ok {
		val.Add(unitQuantity)
		resources.Limits[name] = val
	} else {
		resources.Limits[name] = unitQuantity
	}

	// Fill in requests
	val, ok = resources.Requests[name]
	if ok {
		val.Add(unitQuantity)
		resources.Requests[name] = val
	} else {
		resources.Requests[name] = unitQuantity
	}
}

func (t *templateService) RenderLaunchManifest(vmi *v1.VirtualMachineInstance) (*k8sv1.Pod, error) {
	precond.MustNotBeNil(vmi)
	domain := precond.MustNotBeEmpty(vmi.GetObjectMeta().GetName())
	namespace := precond.MustNotBeEmpty(vmi.GetObjectMeta().GetNamespace())
	nodeSelector := map[string]string{}

	initialDelaySeconds := 4
	timeoutSeconds := 5
	periodSeconds := 1
	successThreshold := 1
	failureThreshold := 5

	var volumes []k8sv1.Volume
	var volumeDevices []k8sv1.VolumeDevice
	var userId int64 = 0
	var privileged bool = false
	var volumeMounts []k8sv1.VolumeMount
	var imagePullSecrets []k8sv1.LocalObjectReference

	gracePeriodSeconds := v1.DefaultGracePeriodSeconds
	if vmi.Spec.TerminationGracePeriodSeconds != nil {
		gracePeriodSeconds = *vmi.Spec.TerminationGracePeriodSeconds
	}

	volumeMounts = append(volumeMounts, k8sv1.VolumeMount{
		Name:      "ephemeral-disks",
		MountPath: t.ephemeralDiskDir,
	})

	prop := k8sv1.MountPropagationHostToContainer
	volumeMounts = append(volumeMounts, k8sv1.VolumeMount{
		Name:             "container-disks",
		MountPath:        t.containerDiskDir,
		MountPropagation: &prop,
	})

	volumeMounts = append(volumeMounts, k8sv1.VolumeMount{
		Name:      "virt-share-dir",
		MountPath: t.virtShareDir,
	})

	volumeMounts = append(volumeMounts, k8sv1.VolumeMount{
		Name:      "libvirt-runtime",
		MountPath: "/var/run/libvirt",
	})

	if util.IsSRIOVVmi(vmi) || util.IsGPUVMI(vmi) {
		// libvirt needs this volume to access PCI device config;
		// note that the volume should not be read-only because libvirt
		// opens the config for writing
		volumeMounts = append(volumeMounts, k8sv1.VolumeMount{
			Name:      "pci-devices",
			MountPath: "/sys/devices/",
		})
		volumes = append(volumes, k8sv1.Volume{
			Name: "pci-devices",
			VolumeSource: k8sv1.VolumeSource{
				HostPath: &k8sv1.HostPathVolumeSource{
					Path: "/sys/devices/",
				},
			},
		})
	}
	serviceAccountName := ""

	for _, volume := range vmi.Spec.Volumes {
		volumeMount := k8sv1.VolumeMount{
			Name:      volume.Name,
			MountPath: hostdisk.GetMountedHostDiskDir(volume.Name),
		}
		if volume.PersistentVolumeClaim != nil {
			logger := log.DefaultLogger()
			claimName := volume.PersistentVolumeClaim.ClaimName
			_, exists, isBlock, err := types.IsPVCBlockFromStore(t.persistentVolumeClaimStore, namespace, claimName)
			if err != nil {
				logger.Errorf("error getting PVC: %v", claimName)
				return nil, err
			} else if !exists {
				logger.Errorf("didn't find PVC %v", claimName)
				return nil, PvcNotFoundError(fmt.Errorf("didn't find PVC %v", claimName))
			} else if isBlock {
				devicePath := filepath.Join(string(filepath.Separator), "dev", volume.Name)
				device := k8sv1.VolumeDevice{
					Name:       volume.Name,
					DevicePath: devicePath,
				}
				volumeDevices = append(volumeDevices, device)
			} else {
				volumeMounts = append(volumeMounts, volumeMount)
			}
			volumes = append(volumes, k8sv1.Volume{
				Name: volume.Name,
				VolumeSource: k8sv1.VolumeSource{
					PersistentVolumeClaim: volume.PersistentVolumeClaim,
				},
			})
		}
		if volume.Ephemeral != nil {
			volumeMounts = append(volumeMounts, volumeMount)
			volumes = append(volumes, k8sv1.Volume{
				Name: volume.Name,
				VolumeSource: k8sv1.VolumeSource{
					PersistentVolumeClaim: volume.Ephemeral.PersistentVolumeClaim,
				},
			})
		}
		if volume.ContainerDisk != nil && volume.ContainerDisk.ImagePullSecret != "" {
			imagePullSecrets = appendUniqueImagePullSecret(imagePullSecrets, k8sv1.LocalObjectReference{
				Name: volume.ContainerDisk.ImagePullSecret,
			})
		}
		if volume.HostDisk != nil {
			var hostPathType k8sv1.HostPathType

			switch hostType := volume.HostDisk.Type; hostType {
			case v1.HostDiskExists:
				hostPathType = k8sv1.HostPathDirectory
			case v1.HostDiskExistsOrCreate:
				hostPathType = k8sv1.HostPathDirectoryOrCreate
			}

			volumeMounts = append(volumeMounts, k8sv1.VolumeMount{
				Name:      volume.Name,
				MountPath: hostdisk.GetMountedHostDiskDir(volume.Name),
			})
			volumes = append(volumes, k8sv1.Volume{
				Name: volume.Name,
				VolumeSource: k8sv1.VolumeSource{
					HostPath: &k8sv1.HostPathVolumeSource{
						Path: filepath.Dir(volume.HostDisk.Path),
						Type: &hostPathType,
					},
				},
			})
		}
		if volume.DataVolume != nil {
			logger := log.DefaultLogger()
			claimName := volume.DataVolume.Name
			_, exists, isBlock, err := types.IsPVCBlockFromStore(t.persistentVolumeClaimStore, namespace, claimName)
			if err != nil {
				logger.Errorf("error getting PVC associated with DataVolume: %v", claimName)
				return nil, err
			} else if !exists {
				logger.Errorf("didn't find PVC associated with DataVolume: %v", claimName)
				return nil, PvcNotFoundError(fmt.Errorf("didn't find PVC associated with DataVolume: %v", claimName))
			} else if isBlock {
				devicePath := filepath.Join(string(filepath.Separator), "dev", volume.Name)
				device := k8sv1.VolumeDevice{
					Name:       volume.Name,
					DevicePath: devicePath,
				}
				volumeDevices = append(volumeDevices, device)
			} else {
				volumeMounts = append(volumeMounts, volumeMount)
			}

			volumes = append(volumes, k8sv1.Volume{
				Name: volume.Name,
				VolumeSource: k8sv1.VolumeSource{
					PersistentVolumeClaim: &k8sv1.PersistentVolumeClaimVolumeSource{
						ClaimName: claimName,
					},
				},
			})
		}
		if volume.ConfigMap != nil {
			// attach a ConfigMap to the pod
			volumeMounts = append(volumeMounts, k8sv1.VolumeMount{
				Name:      volume.Name,
				MountPath: filepath.Join(config.ConfigMapSourceDir, volume.Name),
				ReadOnly:  true,
			})
			volumes = append(volumes, k8sv1.Volume{
				Name: volume.Name,
				VolumeSource: k8sv1.VolumeSource{
					ConfigMap: &k8sv1.ConfigMapVolumeSource{
						LocalObjectReference: volume.ConfigMap.LocalObjectReference,
						Optional:             volume.ConfigMap.Optional,
					},
				},
			})
		}

		if volume.Secret != nil {
			// attach a Secret to the pod
			volumeMounts = append(volumeMounts, k8sv1.VolumeMount{
				Name:      volume.Name,
				MountPath: filepath.Join(config.SecretSourceDir, volume.Name),
				ReadOnly:  true,
			})
			volumes = append(volumes, k8sv1.Volume{
				Name: volume.Name,
				VolumeSource: k8sv1.VolumeSource{
					Secret: &k8sv1.SecretVolumeSource{
						SecretName: volume.Secret.SecretName,
						Optional:   volume.Secret.Optional,
					},
				},
			})
		}

		if volume.ServiceAccount != nil {
			serviceAccountName = volume.ServiceAccount.ServiceAccountName
		}

		if volume.CloudInitNoCloud != nil && volume.CloudInitNoCloud.UserDataSecretRef != nil {
			// attach a secret referenced by the user
			volumes = append(volumes, k8sv1.Volume{
				Name: volume.Name,
				VolumeSource: k8sv1.VolumeSource{
					Secret: &k8sv1.SecretVolumeSource{
						SecretName: volume.CloudInitNoCloud.UserDataSecretRef.Name,
					},
				},
			})
			volumeMounts = append(volumeMounts, k8sv1.VolumeMount{
				Name:      volume.Name,
				MountPath: filepath.Join(config.SecretSourceDir, volume.Name),
				ReadOnly:  true,
			})
		}

		if volume.CloudInitConfigDrive != nil && volume.CloudInitConfigDrive.UserDataSecretRef != nil {
			// attach a secret referenced by the user
			volumes = append(volumes, k8sv1.Volume{
				Name: volume.Name,
				VolumeSource: k8sv1.VolumeSource{
					Secret: &k8sv1.SecretVolumeSource{
						SecretName: volume.CloudInitConfigDrive.UserDataSecretRef.Name,
					},
				},
			})
			volumeMounts = append(volumeMounts, k8sv1.VolumeMount{
				Name:      volume.Name,
				MountPath: filepath.Join(config.SecretSourceDir, volume.Name),
				ReadOnly:  true,
			})
		}
	}

	if t.imagePullSecret != "" {
		imagePullSecrets = appendUniqueImagePullSecret(imagePullSecrets, k8sv1.LocalObjectReference{
			Name: t.imagePullSecret,
		})
	}

	// Pad the virt-launcher grace period.
	// Ideally we want virt-handler to handle tearing down
	// the vmi without virt-launcher's termination forcing
	// the vmi down.
	gracePeriodSeconds = gracePeriodSeconds + int64(15)
	gracePeriodKillAfter := gracePeriodSeconds + int64(15)

	// Get memory overhead
	memoryOverhead := getMemoryOverhead(vmi.Spec.Domain)

	// Consider CPU and memory requests and limits for pod scheduling
	resources := k8sv1.ResourceRequirements{}
	vmiResources := vmi.Spec.Domain.Resources

	resources.Requests = make(k8sv1.ResourceList)
	resources.Limits = make(k8sv1.ResourceList)

	// Copy vmi resources requests to a container
	for key, value := range vmiResources.Requests {
		resources.Requests[key] = value
	}

	// Copy vmi resources limits to a container
	for key, value := range vmiResources.Limits {
		resources.Limits[key] = value
	}

	// Consider hugepages resource for pod scheduling
	if vmi.Spec.Domain.Memory != nil && vmi.Spec.Domain.Memory.Hugepages != nil {
		hugepageType := k8sv1.ResourceName(k8sv1.ResourceHugePagesPrefix + vmi.Spec.Domain.Memory.Hugepages.PageSize)
		resources.Requests[hugepageType] = resources.Requests[k8sv1.ResourceMemory]
		resources.Limits[hugepageType] = resources.Requests[k8sv1.ResourceMemory]

		// Configure hugepages mount on a pod
		volumeMounts = append(volumeMounts, k8sv1.VolumeMount{
			Name:      "hugepages",
			MountPath: filepath.Join("/dev/hugepages"),
		})
		volumes = append(volumes, k8sv1.Volume{
			Name: "hugepages",
			VolumeSource: k8sv1.VolumeSource{
				EmptyDir: &k8sv1.EmptyDirVolumeSource{
					Medium: k8sv1.StorageMediumHugePages,
				},
			},
		})

		// Set requested memory equals to overhead memory
		resources.Requests[k8sv1.ResourceMemory] = *memoryOverhead
		if _, ok := resources.Limits[k8sv1.ResourceMemory]; ok {
			resources.Limits[k8sv1.ResourceMemory] = *memoryOverhead
		}
	} else {
		// Add overhead memory
		memoryRequest := resources.Requests[k8sv1.ResourceMemory]
		if !vmi.Spec.Domain.Resources.OvercommitGuestOverhead {
			memoryRequest.Add(*memoryOverhead)
		}
		resources.Requests[k8sv1.ResourceMemory] = memoryRequest

		if memoryLimit, ok := resources.Limits[k8sv1.ResourceMemory]; ok {
			memoryLimit.Add(*memoryOverhead)
			resources.Limits[k8sv1.ResourceMemory] = memoryLimit
		}
	}

	// Read requested hookSidecars from VMI meta
	requestedHookSidecarList, err := hooks.UnmarshalHookSidecarList(vmi)
	if err != nil {
		return nil, err
	}

	if len(requestedHookSidecarList) != 0 {
		volumes = append(volumes, k8sv1.Volume{
			Name: "hook-sidecar-sockets",
			VolumeSource: k8sv1.VolumeSource{
				EmptyDir: &k8sv1.EmptyDirVolumeSource{},
			},
		})
		volumeMounts = append(volumeMounts, k8sv1.VolumeMount{
			Name:      "hook-sidecar-sockets",
			MountPath: hooks.HookSocketsSharedDirectory,
		})
	}

	// Handle CPU pinning
	if vmi.IsCPUDedicated() {
		// schedule only on nodes with a running cpu manager
		nodeSelector[v1.CPUManager] = "true"

		vcpus := hardware.GetNumberOfVCPUs(vmi.Spec.Domain.CPU)

		if vcpus != 0 {
			resources.Limits[k8sv1.ResourceCPU] = *resource.NewQuantity(vcpus, resource.BinarySI)
		} else {
			if cpuLimit, ok := resources.Limits[k8sv1.ResourceCPU]; ok {
				resources.Requests[k8sv1.ResourceCPU] = cpuLimit
			} else if cpuRequest, ok := resources.Requests[k8sv1.ResourceCPU]; ok {
				resources.Limits[k8sv1.ResourceCPU] = cpuRequest
			}
		}
		// allocate 1 more pcpu if IsolateEmulatorThread request
		if vmi.Spec.Domain.CPU.IsolateEmulatorThread {
			emulatorThreadCpu := resource.NewQuantity(1, resource.BinarySI)
			limits := resources.Limits[k8sv1.ResourceCPU]
			limits.Add(*emulatorThreadCpu)
			resources.Limits[k8sv1.ResourceCPU] = limits
			if cpuRequest, ok := resources.Requests[k8sv1.ResourceCPU]; ok {
				cpuRequest.Add(*emulatorThreadCpu)
				resources.Requests[k8sv1.ResourceCPU] = cpuRequest
			}
		}

		resources.Limits[k8sv1.ResourceMemory] = *resources.Requests.Memory()
	}

	lessPVCSpaceToleration := t.clusterConfig.GetLessPVCSpaceToleration()

	command := []string{"/usr/bin/virt-launcher",
		"--qemu-timeout", "5m",
		"--name", domain,
		"--uid", string(vmi.UID),
		"--namespace", namespace,
		"--kubevirt-share-dir", t.virtShareDir,
		"--ephemeral-disk-dir", t.ephemeralDiskDir,
		"--container-disk-dir", t.containerDiskDir,
		"--readiness-file", "/var/run/kubevirt-infra/healthy",
		"--grace-period-seconds", strconv.Itoa(int(gracePeriodSeconds)),
		"--hook-sidecars", strconv.Itoa(len(requestedHookSidecarList)),
		"--less-pvc-space-toleration", strconv.Itoa(lessPVCSpaceToleration),
	}

	useEmulation := t.clusterConfig.IsUseEmulation()
	imagePullPolicy := t.clusterConfig.GetImagePullPolicy()

	if resources.Limits == nil {
		resources.Limits = make(k8sv1.ResourceList)
	}

	extraResources := getRequiredResources(vmi, useEmulation)
	for key, val := range extraResources {
		resources.Limits[key] = val
	}

	if useEmulation {
		command = append(command, "--use-emulation")
	} else {
		resources.Limits[KvmDevice] = resource.MustParse("1")
	}

	// Add ports from interfaces to the pod manifest
	ports := getPortsFromVMI(vmi)

	capabilities := getRequiredCapabilities(vmi)

	volumeMounts = append(volumeMounts, k8sv1.VolumeMount{
		Name:      "infra-ready-mount",
		MountPath: "/var/run/kubevirt-infra",
	})

	defaultReadinessProbe := &k8sv1.Probe{
		Handler: k8sv1.Handler{
			Exec: &k8sv1.ExecAction{
				Command: []string{
					"cat",
					"/var/run/kubevirt-infra/healthy",
				},
			},
		},
		InitialDelaySeconds: int32(initialDelaySeconds),
		PeriodSeconds:       int32(periodSeconds),
		TimeoutSeconds:      int32(timeoutSeconds),
		SuccessThreshold:    int32(successThreshold),
		FailureThreshold:    int32(failureThreshold),
	}

	volumes = append(volumes, k8sv1.Volume{Name: "infra-ready-mount", VolumeSource: k8sv1.VolumeSource{EmptyDir: &k8sv1.EmptyDirVolumeSource{}}})

	networkToResourceMap, err := getNetworkToResourceMap(t.virtClient, vmi)
	if err != nil {
		return nil, err
	}

	// Register resource requests and limits corresponding to attached multus networks.
	// TODO(ihar) remove when we adopt Multus mutating webhook that handles the job.
	for _, resourceName := range networkToResourceMap {
		if resourceName != "" {
			requestResource(&resources, resourceName)
		}
	}

	if util.IsGPUVMI(vmi) {
		for _, gpu := range vmi.Spec.Domain.Devices.GPUs {
			requestResource(&resources, gpu.DeviceName)
		}
	}

	// VirtualMachineInstance target container
	compute := k8sv1.Container{
		Name:            "compute",
		Image:           t.launcherImage,
		ImagePullPolicy: imagePullPolicy,
		SecurityContext: &k8sv1.SecurityContext{
			RunAsUser:  &userId,
			Privileged: &privileged,
			Capabilities: &k8sv1.Capabilities{
				Add: capabilities,
			},
		},
		Command:        command,
		VolumeDevices:  volumeDevices,
		VolumeMounts:   volumeMounts,
		Resources:      resources,
		Ports:          ports,
		ReadinessProbe: defaultReadinessProbe,
	}

	if vmi.Spec.ReadinessProbe != nil {
		compute.ReadinessProbe = copyProbe(vmi.Spec.ReadinessProbe)
		compute.ReadinessProbe.InitialDelaySeconds = compute.ReadinessProbe.InitialDelaySeconds + LibvirtStartupDelay
	}

	if vmi.Spec.LivenessProbe != nil {
		compute.LivenessProbe = copyProbe(vmi.Spec.LivenessProbe)
		compute.LivenessProbe.InitialDelaySeconds = compute.LivenessProbe.InitialDelaySeconds + LibvirtStartupDelay
	}

	for networkName, resourceName := range networkToResourceMap {
		varName := fmt.Sprintf("KUBEVIRT_RESOURCE_NAME_%s", networkName)
		compute.Env = append(compute.Env, k8sv1.EnvVar{Name: varName, Value: resourceName})
	}

	if _, ok := vmi.Labels[debugLogs]; ok {
		compute.Env = append(compute.Env, k8sv1.EnvVar{Name: ENV_VAR_LIBVIRT_DEBUG_LOGS, Value: "1"})
	}

	// Make sure the compute container is always the first since the mutating webhook shipped with the sriov operator
	// for adding the requested resources to the pod will add them to the first container of the list
	containers := []k8sv1.Container{compute}
	containersDisks := containerdisk.GenerateContainers(vmi, "container-disks", "virt-bin-share-dir")
	containers = append(containers, containersDisks...)

	volumes = append(volumes,
		k8sv1.Volume{
			Name: "virt-share-dir",
			VolumeSource: k8sv1.VolumeSource{
				HostPath: &k8sv1.HostPathVolumeSource{
					Path: t.virtShareDir,
				},
			},
		},
		k8sv1.Volume{
			Name: "virt-bin-share-dir",
			VolumeSource: k8sv1.VolumeSource{
				HostPath: &k8sv1.HostPathVolumeSource{
					Path: filepath.Join(t.virtLibDir, "/init/usr/bin"),
				},
			},
		},
	)
	volumes = append(volumes, k8sv1.Volume{
		Name: "libvirt-runtime",
		VolumeSource: k8sv1.VolumeSource{
			EmptyDir: &k8sv1.EmptyDirVolumeSource{},
		},
	})
	volumes = append(volumes, k8sv1.Volume{
		Name: "ephemeral-disks",
		VolumeSource: k8sv1.VolumeSource{
			EmptyDir: &k8sv1.EmptyDirVolumeSource{},
		},
	})
	volumes = append(volumes, k8sv1.Volume{
		Name: "container-disks",
		VolumeSource: k8sv1.VolumeSource{
			HostPath: &k8sv1.HostPathVolumeSource{
				Path: filepath.Join(t.containerDiskDir, string(vmi.UID)),
			},
		},
	})

	for k, v := range vmi.Spec.NodeSelector {
		nodeSelector[k] = v

	}
	if t.clusterConfig.CPUNodeDiscoveryEnabled() {
		if cpuModelLabel, err := CPUModelLabelFromCPUModel(vmi); err == nil {
			if vmi.Spec.Domain.CPU.Model != v1.CPUModeHostModel && vmi.Spec.Domain.CPU.Model != v1.CPUModeHostPassthrough {
				nodeSelector[cpuModelLabel] = "true"
			}
		}
		for _, cpuFeatureLable := range CPUFeatureLabelsFromCPUFeatures(vmi) {
			nodeSelector[cpuFeatureLable] = "true"
		}
	}

	if t.clusterConfig.HypervStrictCheckEnabled() {
		hvNodeSelectors := getHypervNodeSelectors(vmi)
		for k, v := range hvNodeSelectors {
			nodeSelector[k] = v
		}
	}

	nodeSelector[v1.NodeSchedulable] = "true"
	nodeSelectors := t.clusterConfig.GetNodeSelectors()
	for k, v := range nodeSelectors {
		nodeSelector[k] = v
	}

	podLabels := map[string]string{}

	for k, v := range vmi.Labels {
		podLabels[k] = v
	}
	podLabels[v1.AppLabel] = "virt-launcher"
	podLabels[v1.CreatedByLabel] = string(vmi.UID)

	for i, requestedHookSidecar := range requestedHookSidecarList {
		resources := k8sv1.ResourceRequirements{}
		// add default cpu and memory limits to enable cpu pinning if requested
		// TODO(vladikr): make the hookSidecar express resources
		if vmi.IsCPUDedicated() || vmi.WantsToHaveQOSGuaranteed() {
			resources.Limits = make(k8sv1.ResourceList)
			resources.Limits[k8sv1.ResourceCPU] = resource.MustParse("200m")
			resources.Limits[k8sv1.ResourceMemory] = resource.MustParse("64M")
		}
		sidecar := k8sv1.Container{
			Name:            fmt.Sprintf("hook-sidecar-%d", i),
			Image:           requestedHookSidecar.Image,
			ImagePullPolicy: requestedHookSidecar.ImagePullPolicy,
			Command:         requestedHookSidecar.Command,
			Args:            requestedHookSidecar.Args,
			Resources:       resources,
			VolumeMounts: []k8sv1.VolumeMount{
				k8sv1.VolumeMount{
					Name:      "hook-sidecar-sockets",
					MountPath: hooks.HookSocketsSharedDirectory,
				},
			},
		}
		containers = append(containers, sidecar)
	}

	// XXX: reduce test time. Adding one more container delays the start.
	// First stdci has issues with that and second we don't want to increase the startup time even more.
	// At the end the infra container needs to be always there, to allow better default readiness checks.
	if vmi.Spec.ReadinessProbe != nil {
		// Infra-ready container
		readyContainer := k8sv1.Container{
			Name:            "kubevirt-infra",
			Image:           t.launcherImage,
			ImagePullPolicy: imagePullPolicy,
			SecurityContext: &k8sv1.SecurityContext{
				RunAsUser: &userId,
			},
			Resources: k8sv1.ResourceRequirements{
				Limits: map[k8sv1.ResourceName]resource.Quantity{
					k8sv1.ResourceCPU:    resource.MustParse("1m"),
					k8sv1.ResourceMemory: resource.MustParse("12Mi"), // this is the minimum memory limit for cri-o!
				},
			},
			Command:        []string{"/usr/bin/tail", "-f", "/dev/null"},
			VolumeDevices:  volumeDevices,
			VolumeMounts:   volumeMounts,
			ReadinessProbe: defaultReadinessProbe,
		}
		containers = append(containers, readyContainer)
	}

	hostName := dns.SanitizeHostname(vmi)

	annotationsList := map[string]string{
		v1.DomainAnnotation: domain,
	}

	for k, v := range vmi.Annotations {
		if strings.Contains(k, "kubernetes.io") || strings.Contains(k, "kubevirt.io") {
			// skip kubernetes and kubevirt internal annotations
			continue
		}
		annotationsList[k] = v
	}

	cniAnnotations, err := getCniAnnotations(vmi)
	if err != nil {
		return nil, err
	}
	for k, v := range cniAnnotations {
		annotationsList[k] = v
	}

	for _, network := range vmi.Spec.Networks {
		if network.Multus != nil && network.Multus.Default {
			annotationsList[MULTUS_DEFAULT_NETWORK_CNI_ANNOTATION] = network.Multus.NetworkName
		}
	}

	if HaveMasqueradeInterface(vmi.Spec.Domain.Devices.Interfaces) {
		annotationsList[ISTIO_KUBEVIRT_ANNOTATION] = "k6t-eth0"
	}

	// TODO use constants for podLabels
	pod := k8sv1.Pod{
		ObjectMeta: metav1.ObjectMeta{
			GenerateName: "virt-launcher-" + domain + "-",
			Labels:       podLabels,
			Annotations:  annotationsList,
			OwnerReferences: []metav1.OwnerReference{
				*metav1.NewControllerRef(vmi, v1.VirtualMachineInstanceGroupVersionKind),
			},
		},
		Spec: k8sv1.PodSpec{
			Hostname:  hostName,
			Subdomain: vmi.Spec.Subdomain,
			SecurityContext: &k8sv1.PodSecurityContext{
				RunAsUser: &userId,
				SELinuxOptions: &k8sv1.SELinuxOptions{
					Type: "virt_launcher.process",
				},
			},
			TerminationGracePeriodSeconds: &gracePeriodKillAfter,
			RestartPolicy:                 k8sv1.RestartPolicyNever,
			Containers:                    containers,
			NodeSelector:                  nodeSelector,
			Volumes:                       volumes,
			ImagePullSecrets:              imagePullSecrets,
			DNSConfig:                     vmi.Spec.DNSConfig,
			DNSPolicy:                     vmi.Spec.DNSPolicy,
		},
	}

	if vmi.Spec.Affinity != nil {
		pod.Spec.Affinity = vmi.Spec.Affinity.DeepCopy()
	}

	if t.clusterConfig.CPUNodeDiscoveryEnabled() {
		SetNodeAffinityForForbiddenFeaturePolicy(vmi, &pod)
	}

	pod.Spec.Tolerations = vmi.Spec.Tolerations

	if len(serviceAccountName) > 0 {
		pod.Spec.ServiceAccountName = serviceAccountName
		automount := true
		pod.Spec.AutomountServiceAccountToken = &automount
	} else {
		automount := false
		pod.Spec.AutomountServiceAccountToken = &automount
	}

	return &pod, nil
}

func getRequiredCapabilities(vmi *v1.VirtualMachineInstance) []k8sv1.Capability {
	res := []k8sv1.Capability{}
	if (len(vmi.Spec.Domain.Devices.Interfaces) > 0) ||
		(vmi.Spec.Domain.Devices.AutoattachPodInterface == nil) ||
		(*vmi.Spec.Domain.Devices.AutoattachPodInterface == true) {
		res = append(res, CAP_NET_ADMIN)
	}
	// add a CAP_SYS_NICE capability to allow setting cpu affinity
	res = append(res, CAP_SYS_NICE)
	return res
}

func getRequiredResources(vmi *v1.VirtualMachineInstance, useEmulation bool) k8sv1.ResourceList {
	res := k8sv1.ResourceList{}
	if (len(vmi.Spec.Domain.Devices.Interfaces) > 0) ||
		(vmi.Spec.Domain.Devices.AutoattachPodInterface == nil) ||
		(*vmi.Spec.Domain.Devices.AutoattachPodInterface == true) {
		res[TunDevice] = resource.MustParse("1")
	}
	for _, iface := range vmi.Spec.Domain.Devices.Interfaces {
		if !useEmulation && (iface.Model == "" || iface.Model == "virtio") {
			// Note that about network interface, useEmulation does not make
			// any difference on eventual Domain xml, but uniformly making
			// /dev/vhost-net unavailable and libvirt implicitly fallback
			// to use QEMU userland NIC emulation.
			res[VhostNetDevice] = resource.MustParse("1")
		}
	}
	return res
}

func appendUniqueImagePullSecret(secrets []k8sv1.LocalObjectReference, newsecret k8sv1.LocalObjectReference) []k8sv1.LocalObjectReference {
	for _, oldsecret := range secrets {
		if oldsecret == newsecret {
			return secrets
		}
	}
	return append(secrets, newsecret)
}

// getMemoryOverhead computes the estimation of total
// memory needed for the domain to operate properly.
// This includes the memory needed for the guest and memory
// for Qemu and OS overhead.
//
// The return value is overhead memory quantity
//
// Note: This is the best estimation we were able to come up with
//       and is still not 100% accurate
func getMemoryOverhead(domain v1.DomainSpec) *resource.Quantity {
	vmiMemoryReq := domain.Resources.Requests.Memory()

	overhead := resource.NewScaledQuantity(0, resource.Kilo)

	// Add the memory needed for pagetables (one bit for every 512b of RAM size)
	pagetableMemory := resource.NewScaledQuantity(vmiMemoryReq.ScaledValue(resource.Kilo), resource.Kilo)
	pagetableMemory.Set(pagetableMemory.Value() / 512)
	overhead.Add(*pagetableMemory)

	// Add fixed overhead for shared libraries and such
	// TODO account for the overhead of kubevirt components running in the pod
	overhead.Add(resource.MustParse("128M"))

	// Add CPU table overhead (8 MiB per vCPU and 8 MiB per IO thread)
	// overhead per vcpu in MiB
	coresMemory := resource.MustParse("8Mi")
	if domain.CPU != nil {
		value := coresMemory.Value() * int64(domain.CPU.Cores)
		coresMemory = *resource.NewQuantity(value, coresMemory.Format)
	}
	overhead.Add(coresMemory)

	// static overhead for IOThread
	overhead.Add(resource.MustParse("8Mi"))

	// Add video RAM overhead
	if domain.Devices.AutoattachGraphicsDevice == nil || *domain.Devices.AutoattachGraphicsDevice == true {
		overhead.Add(resource.MustParse("16Mi"))
	}

	return overhead
}

func getPortsFromVMI(vmi *v1.VirtualMachineInstance) []k8sv1.ContainerPort {
	ports := make([]k8sv1.ContainerPort, 0)

	for _, iface := range vmi.Spec.Domain.Devices.Interfaces {
		if iface.Ports != nil {
			for _, port := range iface.Ports {
				if port.Protocol == "" {
					port.Protocol = "TCP"
				}

				ports = append(ports, k8sv1.ContainerPort{Protocol: k8sv1.Protocol(port.Protocol), Name: port.Name, ContainerPort: port.Port})
			}
		}
	}

	if len(ports) == 0 {
		return nil
	}

	return ports
}

func HaveMasqueradeInterface(interfaces []v1.Interface) bool {
	for _, iface := range interfaces {
		if iface.Masquerade != nil {
			return true
		}
	}

	return false
}

func getResourceNameForNetwork(network *networkv1.NetworkAttachmentDefinition) string {
	resourceName, ok := network.Annotations[MULTUS_RESOURCE_NAME_ANNOTATION]
	if ok {
		return resourceName
	}
	return "" // meaning the network is not served by resources
}

func getNamespaceAndNetworkName(vmi *v1.VirtualMachineInstance, fullNetworkName string) (namespace string, networkName string) {
	if strings.Contains(fullNetworkName, "/") {
		res := strings.SplitN(fullNetworkName, "/", 2)
		namespace, networkName = res[0], res[1]
	} else {
		namespace = precond.MustNotBeEmpty(vmi.GetObjectMeta().GetNamespace())
		networkName = fullNetworkName
	}
	return
}

func getNetworkToResourceMap(virtClient kubecli.KubevirtClient, vmi *v1.VirtualMachineInstance) (networkToResourceMap map[string]string, err error) {
	networkToResourceMap = make(map[string]string)
	for _, network := range vmi.Spec.Networks {
		if network.Multus != nil {
			namespace, networkName := getNamespaceAndNetworkName(vmi, network.Multus.NetworkName)
			crd, err := virtClient.NetworkClient().K8sCniCncfIoV1().NetworkAttachmentDefinitions(namespace).Get(networkName, metav1.GetOptions{})
			if err != nil {
				return map[string]string{}, fmt.Errorf("Failed to locate network attachment definition %s/%s", namespace, networkName)
			}
			networkToResourceMap[network.Name] = getResourceNameForNetwork(crd)
		}
	}
	return
}

func getIfaceByName(vmi *v1.VirtualMachineInstance, name string) *v1.Interface {
	for _, iface := range vmi.Spec.Domain.Devices.Interfaces {
		if iface.Name == name {
			return &iface
		}
	}
	return nil
}

func getCniAnnotations(vmi *v1.VirtualMachineInstance) (cniAnnotations map[string]string, err error) {
	ifaceList := make([]string, 0)
	ifaceListMap := make([]map[string]string, 0)
	cniAnnotations = make(map[string]string, 0)

	next_idx := 0
	for _, network := range vmi.Spec.Networks {
		// Set the type for the first network. All other networks must have same type.
		if network.Multus != nil {
			if network.Multus.Default {
				continue
			}
			namespace, networkName := getNamespaceAndNetworkName(vmi, network.Multus.NetworkName)
			ifaceMap := map[string]string{
				"name":      networkName,
				"namespace": namespace,
				"interface": fmt.Sprintf("net%d", next_idx+1),
			}
			iface := getIfaceByName(vmi, network.Name)
			if iface != nil && iface.MacAddress != "" {
				// De-facto Standard doesn't define exact string format for
				// MAC addresses pasted down to CNI.  Here we just pass through
				// whatever the value our API layer accepted as legit.
				// Note: while standard allows for 20-byte InfiniBand addresses,
				// we forbid them in API.
				ifaceMap["mac"] = iface.MacAddress
			}
			next_idx = next_idx + 1
			ifaceListMap = append(ifaceListMap, ifaceMap)
		} else if network.Genie != nil {
			// We have to handle Genie separately because it doesn't support JSON format.
			ifaceList = append(ifaceList, network.Genie.NetworkName)
		}
	}
	if len(ifaceListMap) > 0 {
		ifaceJsonString, err := json.Marshal(ifaceListMap)
		if err != nil {
			return map[string]string{}, fmt.Errorf("Failed to create JSON list from CNI interface map %s", ifaceListMap)
		}
		cniAnnotations[MultusNetworksAnnotation] = fmt.Sprintf("%s", ifaceJsonString)
	} else if len(ifaceList) > 0 {
		cniAnnotations[GenieNetworksAnnotation] = strings.Join(ifaceList, ",")
	}
	return
}

func NewTemplateService(launcherImage string,
	virtShareDir string,
	virtLibDir string,
	ephemeralDiskDir string,
	containerDiskDir string,
	imagePullSecret string,
	persistentVolumeClaimCache cache.Store,
	virtClient kubecli.KubevirtClient,
	clusterConfig *virtconfig.ClusterConfig) TemplateService {

	precond.MustNotBeEmpty(launcherImage)
	svc := templateService{
		launcherImage:              launcherImage,
		virtShareDir:               virtShareDir,
		virtLibDir:                 virtLibDir,
		ephemeralDiskDir:           ephemeralDiskDir,
		containerDiskDir:           containerDiskDir,
		imagePullSecret:            imagePullSecret,
		persistentVolumeClaimStore: persistentVolumeClaimCache,
		virtClient:                 virtClient,
		clusterConfig:              clusterConfig,
	}
	return &svc
}

func copyProbe(probe *v1.Probe) *k8sv1.Probe {
	if probe == nil {
		return nil
	}
	return &k8sv1.Probe{
		InitialDelaySeconds: probe.InitialDelaySeconds,
		TimeoutSeconds:      probe.TimeoutSeconds,
		PeriodSeconds:       probe.PeriodSeconds,
		SuccessThreshold:    probe.SuccessThreshold,
		FailureThreshold:    probe.FailureThreshold,
		Handler: k8sv1.Handler{
			HTTPGet:   probe.HTTPGet,
			TCPSocket: probe.TCPSocket,
		},
	}
}