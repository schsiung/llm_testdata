ver 5.55:
	Fix issue with handling security level for HoG.
	Fix issue with handling HIDSDPDisable attribute.
	Fix issue with handling HID virtual cable unplug.
	Fix issue with handling HID channel disconnect order.
	Fix issue with handling AVDTP delay reporting states.
	Fix issue with handling AVRCP notification events.
	Fix issue with handling AVRCP list player attributes.
	Fix issue with handling AVRCP category 1 player settings.
	Fix issue with handling AVRCP media player passthrough bitmask.
	Fix issue with handling HFP 1.7 default features.
	Fix issue with handling GATT disconnecting handling.
	Fix issue with handling GATT database hash.
	Fix issue with handling service changed characteristic.
	Fix issue with handling read of multiple characteristic values.
	Fix issue with handling Just-Works auto-accept pairing.
	Fix issue with handling authentication of bonded devices.
	Fix issue with handling L2CAP streaming mode for AVDTP.
	Fix issue with handling SysEx parser for MIDI support.
	Fix issue with handling configured scan parameter values.
	Fix issue with handling temporary devices removal.
	Fix issue with handling advertising flags.

ver 5.55:
	Fix issue with handling security level for HoG.
	Fix issue with handling HIDSDPDisable attribute.
	Fix issue with handling HID virtual cable unplug.
	Fix issue with handling HID channel disconnect order.
	Fix issue with handling AVDTP delay reporting states.
	Fix issue with handling AVRCP notification events.
	Fix issue with handling AVRCP list player attributes.
	Fix issue with handling AVRCP category 1 player settings.
	Fix issue with handling AVRCP media player passthrough bitmask.
	Fix issue with handling HFP 1.7 default features.
	Fix issue with handling GATT disconnecting handling.
	Fix issue with handling GATT database hash.
	Fix issue with handling service changed characteristic.
	Fix issue with handling read of multiple characteristic values.
	Fix issue with handling Just-Works auto-accept pairing.
	Fix issue with handling authentication of bonded devices.
	Fix issue with handling L2CAP streaming mode for AVDTP.
	Fix issue with handling SysEx parser for MIDI support.
	Fix issue with handling configured scan parameter values.
	Fix issue with handling temporary devices removal.
	Fix issue with handling advertising flags.

ver 5.54:
	Fix issue with HOGP to accept data only from bonded devices.
	Fix issue with A2DP sessions being connected at the same time.
	Fix issue with class UUID matches before connecting profile.
	Add support for handling MTU auto-tuning option for AVDTP.
	Add support for new policy for Just-Works repairing.
	Add support for Enhanced ATT bearer (EATT).

ver 5.53:
	Fix issue with handling unregistration for advertisment.
	Fix issue with A2DP and handling recovering process.
	Fix issue with udpating input device information.
	Add support for loading blocked keys.

ver 5.52:
	Fix issue with AVDTP session disconnect timeout handling.
	Mark media endpoint APIs as stable interfaces.

ver 5.51:
	Fix issue with first agent not being registered as default.
	Fix issue with loading devices without Service Changed CCC.
	Fix issue with GATT client and extended property reading.
	Fix issue with handling GATT client invalid read behavior.
	Fix issue with handling GATT disconnect handler removal.
	Fix issue with missing GATT/GAP service records for SDP.
	Fix issue with checking SDP continuation state length.
	Fix issue with HID device removal on HoG disconnect.
	Fix issue with AVDTP and session destroy handling.
	Fix issue with AVCTP and output MTU accounting.
	Fix issue with AVRCP and creating media items.
	Add support for GATT database caching feature.
	Add experimental support for Bluetooth Mesh Profile.

ver 5.50:
	Fix issue with GATT and reading long values.
	Fix issue with GATT and reading multiple includes.
	Fix issue with GATT and service changes when offline.
	Fix issue with handling secondary service discovery.
	Fix issue with handling persistency of CCC values.
	Fix issue with handling Mesh session on disconnection.
	Fix issue with handling Mesh proxy PDU SAR message length.
	Fix issue with handling Mesh default heartbeat TTL value.
	Add support for Mesh node-reset operation handling.
	Add support for GATT authorization request handling.
	Add support for GATT minimum key size requirements.
	Add support for GATT server and included services.
	Add support for handling additional advertising data.
	Add support for handling separate discoverable state.
	Add support for enabling HFP version 1.7 features.
	Add support for dedicated Bluetooth logging daemon.

ver 5.49:
	Fix issue with configuring discoverable advertising flag.
	Fix issue with bearer selection and single mode controllers.
	Fix issue with Connect and ConnectProfile returning in progress.
	Fix issue with missing Paired property change when not bonded.
	Fix issue with storage for controllers without public address.
	Fix issue with handling AVCTP disconnecting the channel queue.
	Fix issue with not clearing connectable setting on power off.
	Fix issue with creating multiple mgmt socket instances.
	Fix issue with GATT server and BR/EDR only devices.
	Fix issue with InterfaceAdded event ordering.
	Add support for generic ConnectDevice method call.
	Add support for Mesh heartbeat client functionality.

ver 5.48:
	Fix issue with subscriptions for unpaired devices.
	Fix issue with handling A2DP and no available SEP.
	Fix issue with handling AVCTP change path support.
	Fix issue with handling AVCTP browsing channel.
	Fix issue with handling AVCTP passthrough PDUs.
	Fix issue with handling detaching of controller.
	Fix issue with handling start discovery results.
	Fix issue with handling non-connectable devices.
	Fix issue with handling unused parameter in WriteValue.
	Add support for service side AcquireWrite and AcquireNotify.
	Add support for providing address type information.
	Add support for cable based authentication and pairing.
	Add support for Bluetooth Low-Energy battery service.
	Add support for BTP client for qualification testing.
	Add support for additional Mesh control functionality.
	Mark advertising manager APIs as stable interfaces.

ver 5.47:
	Fix issue with handling AcquireNotify registration.
	Fix issue with handling support for reconnection interval.
	Fix issue with handling A2DP transport and accepting streams.
	Fix issue with fallback from BR/EDR to LE bearer handling.
	Add support for appearance and local name advertising data.
	Add support for retrieving the supported discovery filters.
	Add support for decoding Bluetooth 5.0 commands and events.
	Add support for decoding Bluetooth Mesh advertising bearer.
	Add support for Bluetooth Mesh control application.

ver 5.46:
	Fix issue with handling ATT over BR/EDR connections.
	Fix issue with SDP browsing cleanup after connection.
	Fix issue with pointer dereference and OPP Put request.
	Fix issue with identity address updates during pairing.
	Fix issue with not removing services that had disappeared.
	Add support for improved discovery of included services.
	Add support for simplified characteristics discovery.
	Add support for GATT caching configuration option.
	Add experimental support for AcquireWrite and AcquireNotify.

ver 5.45:
	Fix issue with agent support in Bluetooth client tool.
	Fix issue with handling re-connection policy.
	Fix issue with handling unknown ATT commands.
	Fix issue with handling GATT Service Includes property.
	Fix issue with handling PullAll for OBEX transfers.
	Fix issue with handling delay in AVDTP Suspend responses.
	Fix issue with handling decoding of management frames.
	Add support for frame counters in Bluetooth monitor tool.

ver 5.44:
	Fix issue with GAP and GATT service registration.
	Fix issue with wrong address type for ATT sockets.
	Fix issue with dictionary entries for advertising.
	Fix issue with device information and HID over GATT.
	Fix issue with handling secondary service discovery.
	Fix issue with handling Attribute Read Long procedure.
	Fix issue with handling Attribute Write Long procedure.
	Fix issue with handling abort of AVDTP SetConfiguration.
	Add support for single-mode static address configuration.
	Add support for MIDI over Bluetooth Low Energy.

ver 5.43:
	Fix issue with HID over GATT support.
	Fix issue with ATT Find By Type response handling.
	Fix issue with handling insufficient authentication.
	Fix issue with bonding while pairing is in progress.
	Fix issue with BR/EDR pairing for dual-mode devices.
	Fix issue with handling profile policy resets.
	Fix issue with connecting state of services.
	Fix issue with handling PAN GN Master role.
	Add support for enabling LE Privacy feature.

ver 5.42:
	Fix issue with PBAP call logs from different folders.
	Fix issue with OBEX over L2CAP and PowerPC architecture.
	Fix issue with BR/EDR over LE selection during discovery.
	Fix issue with selection of bearer after bonding.
	Fix issue with handling socket recv() return values.
	Fix issue with setting connecting service state.
	Fix issue with setting correct ATT default MTU value.
	Fix issue with not setting AVRCP player identifier.
	Fix issue with handling AVRCP browsable player.
	Fix issue with addressing AVRCP player changes.
	Add support for new management tracing capability.
	Mark GATT D-Bus APIs as stable interfaces.

ver 5.41:
	Fix issue with service state changes handling.
	Fix issue with AVRCP and no available player.
	Fix issue with handling discovery filters.
	Fix issue with handling temporary addresses.
	Fix issue with GATT MTU size and BR/EDR links.
	Fix issue with OBEX and creating directories.

ver 5.40:
	Fix issue with not storing GATT attributes.
	Fix issue with optional GATT notifications.
	Fix issue with reading GATT extended properties.
	Fix issue with GATT device name properties.
	Fix issue with previously paired devices.
	Fix issue with handling device removal.
	Fix issue with profile connection handling.
	Add support for TTY monitor protocol.

ver 5.39:
	Fix issue with missing uHID kernel support.
	Fix issue with GATT reliable write handling.
	Fix issue with GATT service changed handling.
	Fix issue with GATT execute write handling.
	Fix issue with AVRCP player event handling.
	Fix issue with AVRCP controller handling.
	Fix issue with AVDTP connection handling.
	Fix issue with AVDTP error handling.

ver 5.38:
	Fix issue with stack overflow and UUID handling.
	Fix issue with ObjectManager interface and GATT.
	Fix issue with GATT database and error handling.
	Fix issue with GATT client notifications.
	Fix issue with GATT object ordering.
	Fix issue with GATT default MTU exchange.
	Fix issue with device attribute clearing.
	Fix issue with AVRCP capabilities request.

ver 5.37:
	Fix issue with registering external profiles.
	Fix issue with connecting external profiles.
	Fix issue with GATT service changed handling.
	Fix issue with not emitting GattServices update.
	Convert to unified HID over GATT profile support.
	Convert to KeyboardDisplay as default IO capability.
	Install btattach utility by default.

ver 5.36:
	Fix issue with PBAP headers for size query.
	Fix issue with AVRCP current player handling.
	Fix issue with device information handling.
	Fix issue with device disconnect handling.
	Fix issue with duplicate connect handling.
	Fix issue with attribute claiming for drivers.

ver 5.35:
	Fix issue with connected devices after discovery.
	Fix issue with profile support and LTK loading.
	Fix issue with AVRCP events for volume control.
	Fix issue with OBEX session owner handling.
	Fix issue with HID over GATT setup failures.
	Fix issue with GATT notification registration.
	Fix issue with GATT cache validation feature.
	Add support for persistent GATT database.
	Add support for controller enabling option.

ver 5.34:
	Fix issue with GATT profiles and auto-connect.
	Fix issue with missing GoepL2CapPsm SDP data.
	Fix issue with suspending AVDTP endpoints.
	Fix issue with audio service state on disconnect.
	Add support for AVRCP Set Addressed Player feature.
	Add support for AVRCP Get Folder Items feature.
	Add support for Android 5.1 HFP WBS callbacks.

ver 5.33:
	Fix issue with memory leak in GATT database.
	Fix issue with AVDTP set configuration handling.
	Fix issue with AVDTP discover procedure.
	Fix issue with not emitting Paired property.

ver 5.32:
	Fix issue with OPP GET request path handling.
	Fix issue with ATT information request errors.
	Fix issue with advertising instance numbers.
	Fix issue with overwriting SDP record cache.
	Fix issue with new connections during disconnect.
	Add support for GATT security auto-elevation.

ver 5.31:
	Fix issue with crash in networking interface.
	Fix issue with crash when creating endless GATT loops.
	Fix issue with memory leak when connecting services.
	Fix issue with memory leak creating new D-Bus proxy.
	Fix issue with profile connections from remote devices.
	Fix issue with GATT over BR/EDR and MTU notification.
	Fix issue with HID and dual mode remote devices.
	Fix issue with handling A2DP vendor codec setup.
	Fix issue with AVRCP and syncing player state.
	Fix issue with GATT secondary discovery handling.
	Fix issue with wrong characteristic allocation.
	Add support for handling BNEP setup response.
	Add support for setting GATT database security flags.
	Add support for setting discovery filters interface.
	Add support for user controlled advertising interface.
	Update Android qualification documentation to PTS 6.1 release.

ver 5.30:
	Fix compilation error in C++ due to inline function.
	Fix issue with missing storage of device information.
	Fix issue with GATT client and gaps in service handles.
	Fix issue with AVDTP discovery callback crashing.
	Fix issue with AVCTP channel handling in case of conflicts.
	Fix issue with AVRCP target and get capabilities command.
	Add experimental support for LE advertising manager API.
	Add support for Android 5.1 GATT MTU exchange API.

ver 5.29:
	Fix issue with AVCTP initial key repeat timeout.
	Fix issue with Android application disconnect handling.
	Fix issue with Android support and service notifications.
	Fix issue with Android support and Exchange MTU Request.
	Fix issue with Android HFP support and AT+CMER handling.
	Fix issue with Android HFP support and SLC setup.
	Fix issue with Android HFP support and call hold status.
	Fix issue with Android HFP support and indicator handling.
	Fix issue with Android HFP support and SCO/eSCO disconnection.
	Fix issue with Android HID over GATT support and battery service.
	Fix issue with GATT sending Exchange MTU Request for BR/EDR.
	Fix issue with GATT notification support without CCC.
	Fix issue with GATT object life-time after disconnects.
	Fix issue with GATT notification handling API.
	Add experimental support for GATT client D-Bus API.
	Add experimental support for GATT server D-Bus API.
	Add support for Multi Profile Specification.
	Update Android qualification documentation to PTS 6.0 release.

ver 5.28:
	Fix issue with GATT device discovery and probing.
	Fix issue with bearer selection for dual-mode devices.
	Fix issue with device removal while connected.
	Fix issue with device name setting from inquiry response.
	Fix issue with missing termination of name characteristic.
	Fix issue with UTF-8 length handling for device name.
	Fix issue with AVCTP key auto release handling.
	Fix issue with AVCTP key press repetition handling.
	Fix issue with payload sizes and GATT notifications.
	Fix issue with memory corruption and GATT notifications.
	Add support for HID proxy switching and CSR 8510 A10 devices.
	Add support for Broadcom hex2hcd conversion utility.

ver 5.27:
	Fix issue with endian handling and management interface.
	Fix issue with pending GATT operations when disconnecting.
	Fix issue with 128-bit UUID conversions for HID over GATT.
	Add support for Android 5.0 SELinux policies.

ver 5.26:
	Fix issue with handling A2DP XCASE connection state.
	Fix issue with crash and A2DP configuration failures.
	Fix issue with crash during OBEX session shutdown.
	Add support for version 1.2 of Phonebook Access Profile.
	Add support for HID over GATT get and set report handling.
	Add support for Low Energy Secure Connections feature.
	Add support for Bluetooth 4.2 commands and events.
	Add support for Android 5.0 Bluetooth features.

ver 5.25:
	Fix issue with SCO connection after codec negotiation.
	Fix issue with GATT and secondary service discovery.
	Fix issue with GATT write descriptor callback.
	Fix issue with MAP supported features bits.
	Add support for MAP local time and timezone offset.
	Add support for PBAP speed-dial and favorites folders.
	Add support for PBAP speed-dial and identifier filters.
	Add support for controller mode configuration option.
	Add initial support for Android Lollipop features.

ver 5.24:
	Fix issue with storing of connection parameters.
	Add support for Phonebook Access Profile 1.2 features.
	Add support for Message Access Profile 1.2 event reports.
	Add support for Android Bluetooth configuration options.

ver 5.23:
	Fix issue with concurrent authorization requests.
	Fix issue with HID report identifier mismatch.
	Fix issue with crash when receiving uHID events.
	Fix issue with crash and OBEX disconnect handling.
	Fix issue with OBEX client transfers and suspend.
	Fix issue with parsing of MAP application parameters.
	Fix issue with devices rejecting AVRCP GetCapabilities.
	Add support for kernel whitelist and Android Bluetooth.

ver 5.22:
	Fix issue with UHID_OUTPUT events mapping.
	Fix issue with UHID_FEATURE events handling.
	Fix issue with UINT32_MAX overflow and AVRCP.
	Fix issue when dirent type DT_UNKNOWN is returned.
	Add support for kernel whitelist filtering feature.
	Add support for Android Bluetooth GATT over BR/EDR.

ver 5.21:
	Fix issue with SDP requests and wrong PDU size.
	Fix issue with handling passive scanning triggers.
	Add support for storing and loading connection parameters.
	Add support for kernel background auto-connection feature.
	Add support for Android Bluetooth Scan Parameters feature.
	Add support for Android Bluetooth Device Information feature.
	Add support for Android Bluetooth Health Device interface.

ver 5.20:
	Fix issue with LED handling of PS3 controllers.
	Add support for Android Bluetooth GATT server interface.
	Add support for Android Bluetooth HID over GATT feature.
	Add support for Android Bluetooth multi-profile feature.
	Add support for Android Bluetooth aptX audio integration.

	Note: aptX codec not included

ver 5.19:
	Fix issue with OBEX Put-Delete and Create-Empty methods.
	Fix issue with AVRCP browsable/searchable player properties.
	Fix issue with handling multiple default agents.
	Fix issue with handling unpair event per bearer.
	Fix issue with HID over GATT report ID presence.
	Add support for HID protocol handling in userspace.
	Add support for Bluetooth reconnection policy framework.
	Add support for Android Bluetooth SCO over HCI transport.
	Add support for Android Bluetooth audio quality control.
	Add support for Android Bluetooth Low Energy only mode.

ver 5.18:
	Fix issue with identifying LE single mode devices.
	Fix issue with L2CAP and RFCOMM peer address lookup.
	Add support for handling OBEX authentication procedure.
	Add support for Android Bluetooth GATT client interface.

ver 5.17:
	Fix issue with not resetting OBEX SRM setup.
	Fix issue with BR/EDR devices and auto-connect list.
	Fix issue with bonding complete detection as peripheral.
	Fix issue with not updating bearer timestamp of connections.
	Fix issue with paired property for multiple bearers.
	Add support for Android Bluetooth Handsfree interface.
	Add support for Android Bluetooth Wideband speech.

ver 5.16:
	Fix issue with HID over GATT physical location.
	Fix issue with HID over GATT unique identifier.
	Fix issue with missing paired property notification.
	Fix issue with endianess of long term key storage.
	Add support for storing signature resolving keys.
	Add support for Android Bluetooth AVRCP interface.

ver 5.15:
	Fix issue with LE enabling and background scanning.
	Fix issue with HID over GATT input device name.
	Fix issue with storage of slave long term keys.
	Add support for handling identity resolving keys.
	Add support for Android Bluetooth A2DP interface.
	Add support for Android Bluetooth audio interface.

ver 5.14:
	Fix issue with marking PS3 controllers as trusted.
	Fix issue with authorization of PS3 controllers.
	Add support for DualShock 4 controller detection.
	Add support for legacy pairing emulation.
	Add support for secure simple pairing emulation.
	Add support for automated pairing testing.
	Add support for RFCOMM protocol testing.
	Add support for HCI controller testing.

ver 5.13:
	Fix issue with PS3 controller detection.
	Add support for data transfers to L2CAP testing tool.
	Add support for delay reporting to AVDTP testing tool.
	Add support for Android Bluetooth Core interface.
	Add support for Android Bluetooth Socket interface.
	Add support for Android Bluetooth HID Host interface.
	Add support for Android Bluetooth PAN interface.

ver 5.12:
	Fix issue with missing reply to DisconnectProfile.
	Fix issue with icon property and class of device changes.
	Fix issue with HID devices when SDP record is not available.
	Fix issue with handling auto-pairing of printers.
	Fix issue with agent authorization handling.
	Add support for PS3 controller setup and pairing.
	Add support for LE L2CAP CoC test capabilities.
	Add support for AVDTP qualification test cases.
	Add support for SMP cryptographic test cases.

ver 5.11:
	Fix issue with connection attempt when not powered.
	Fix issue with assigning player to AVRCP target role.
	Fix issue with OBEX default cache directory.
	Fix issue with SDP search error handling.
	Fix issue with processing of SDP records.
	Fix issue with HID to HCI switching utility.
	Fix issue with mgmt end-to-end testing tool.
	Fix issue with L2CAP end-to-end testing tool.
	Add support for SMP end-to-end testing tool.
	Add support for more Wii controllers.

ver 5.10:
	Fix issue with discoverable timeout handling.
	Fix issue with MAP messages and record version.
	Fix issue with MAP messages and status events.
	Fix issue with MAP messages and relative folders.
	Fix issue with MAP messages and type property signals.
	Fix issue with transfer size for OBEX GET operations.
	Fix issue with AVRCP service class identifier.
	Fix issue with AVRCP tracking seeked signal.
	Add support for OBEX command line client.

ver 5.9:
	Fix issue with network service and adapter removal.
	Fix issue with misleading OBEX error messages.
	Fix issue with OBEX transport reference handling.
	Fix issue with memory leak with MAP event handler.
	Fix issue with missing MAP property changed signal.
	Fix issue with message type property values.
	Fix issue with empty UUID list for devices.
	Fix issue with profile agent cancel method.
	Remove dependency on USB library.

ver 5.8:
	Fix issue with missing OBEX session properties.
	Fix issue with missing SDP service refresh.
	Fix issue with SDP attribute range check.
	Fix issue with priority for SDP transactions.
	Fix issue with service discovery after pairing.
	Fix issue with race condition in service list.
	Fix issue with input service state transition.
	Fix issue with default authorization for profiles.
	Fix issue with AVRCP browsing channel connections.
	Add support for AVRCP role agnostic sessions.

ver 5.7:
	Fix issue with missing UUID discovery during pairing.
	Fix issue with broken patch for SDP range check handling.
	Fix issue with AVRCP usage of UID=0 for paused/stopped.
	Add support MAP notification dispatching.

ver 5.6:
	Fix issue with incoming connections without SDP record.
	Fix issue with canceling ongoing device connections.
	Fix issue with handling failed connection attempts.
	Fix issue with pending resume during A2DP open failures.
	Fix issue with registering AVRCP unsupported notification.
	Fix issue with listing available AVRCP target settings.
	Fix issue with missing error for OBEX SetPath commands.
	Fix issue with missing OBEX session command queue.
	Fix issue with retrieving multiple MAP event reports.
	Add support for command line player utility.

ver 5.5:
	Fix issue with race condition between SDP and properties.
	Fix issue with handling storage of private device addresses.
	Fix issue with NFC out-of-band pairing and power states.
	Fix issue with short name during device update handling.
	Fix issue with handling AVRCP without A2DP being present.
	Add support for handling AVRCP pass-through operations.
	Add support for automatically reconnecting HID devices.
	Add support for automatically pairing of devices.

ver 5.4:
	Fix issue with invalid memory access and SDP service search.
	Add support for available player changed event for controller.
	Add support for UIDs changed event for AVRCP controller.
	Add support for mandatory AVRCP pass-through operations.
	Add support for Message Notification Service (MNS) server.
	Add support for agent methods within command line client.

ver 5.3:
	Fix issue with registering invalid profiles.
	Fix issue with inconsistent A2DP transport state.
	Fix issue with A2DP resume while in configured state.
	Fix issue with buffer overflow when processing SDP response.
	Fix issue with missing range check for SDP attribute response.
	Fix issue with missing validation of SDP data elements.
	Fix issue with missing fallback to static hostname.
	Fix issue with default adapter assignment.

ver 5.2:
	Fix issue with connection handling for Low Energy.
	Fix issue with broken device discovery handling.
	Fix issue with invalid memory access within A2DP.
	Fix issue with handling empty path name of SetPath.
	Fix issue with handling Message Access Profile filters.
	Fix issue with handling network service unregistration.
	Fix issue with not handling bogus device pairing results.
	Fix issue with initial service discovery and profile manager.
	Add support for AVRCP volume notifications.
	Add support for AVRCP browsing commands.

ver 5.1:
	Fix issue with crash when removing OBEX session.
	Fix issue with HID device disconnected from kernel.
	Fix issue with buffer overflow when parsing HID SDP record.
	Fix issue with SDP_TEXT_STR16 and SDP_URL_STR16 parsing.
	Add support for integration with systemd's hostname daemon.
	Add support for separate adapter alias property.
	Add support for adapter and device modalias properties.
	Add support for official BlueZ device information.
	Add support for asynchronous management interface handling.
	Add tool for testing management interface compliance.
	Add tool for testing SDP qualification requirements.
	Add tool for testing various EIR and AD data records.

ver 5.0:
	Introduce D-Bus Properties and ObjectManager interfaces.
	Add support for generic profile interface.
	Add support for global agent interface.
	Add support for integrated OBEX daemon.
	Add support for integrated hcidump utility.
	Add support for Bluetooth tracing and monitor utility.
	Add support for Bluetooth command line client utility.
	Remove support for Handsfree gateway handling.
	Remove support for GStreamer A2DP and SBC elements.
	Disable default installation of Bluetooth library.

ver 4.101:
	Fix issue with missing BlueZ service file.
	Fix issue with aborting A2DP setup during AVDTP start.
	Fix issue with handling of multiple A2DP indication.
	Fix issue with handling AVDTP abort with invalid SEID.
	Fix issue with rejecting AVDTP abort commands.
	Add support for handling AVDTP command collision.

ver 4.100:
	Fix issue with crashing when SCO connection fails.
	Fix issue with HFP gateway failing on first GSM connection.
	Fix issue with AVRCP and handling of vendor commands.
	Fix issue with handling AVRCP subunit info command.
	Fix issue with missing capability for AVRCP track reached end.
	Fix issue with AVDTP signaling and GStreamer SBC NULL check.
	Fix issue with AVDTP Reconfigure Reject message.
	Fix issue with incorrect EIR length parsing.
	Fix issue with SDP disconnect for HIDSDPDisable.
	Fix issue with SDP interoperability with Mac OS X Lion.
	Fix issue with reverse SDP discovery with some devices.
	Fix issue with discovering state during power off operation.
	Add support for AVRCP Volume Changed notifications.
	Add support for AVRCP Set Absolute Volume handling.
	Add support for display legacy PIN code agent method.
	Add support for multiple media transports per endpoint.
	Add support for discovering device information characteristics.
	Add support for vendor source for Device ID setting.
	Add support for immediate alert server.
	Add support for link loss server.

	Notes:
	This version requires D-Bus 1.4 or later.
	This version requires GLib 2.28 or later.

ver 4.99:
	Fix issue with missing retries for BNEP connection setup.
	Fix issue with not showing name if first EIR has no details.
	Fix issue with running SDP discovery for LE devices.
	Add support for GATT using 128-bit Bluetooth UUIDs.
	Add support for retrieving key size information.
	Add support for storing Long Term Keys.
	Add support for Proximity Reporter API.
	Add support for KeyboardDisplay IO capability.
	Add support for version 1.0 of management API.
	Add support for monitoring interface.

ver 4.98:
	Fix issue with adapter list upon initialization failure.
	Fix issue with missing legacy property for Low Energy.
	Fix issue with missing EIR information handling.
	Fix issue with device address type tracking.
	Fix issue with alert level characteristic.
	Fix issue with headset shutdown handling.
	Fix issue with Wiimote address handling.
	Add support for advanced l2test options.
	Add support for attribute protocol and multiple adapters.

ver 4.97:
	Update support for proximity profile.
	Fix issue with SBC audio decoding quality.
	Fix multiple issues with HFP support.
	Fix multiple issues with A2DP support.
	Fix multiple issues with AVDTP support.
	Fix multiple issues with AVRCP support.
	Add support for AVRCP meta-data transfer.
	Add support for Bluetooth based thermometers.

ver 4.96:
	Fix issue with race condition in AVDTP stream start.
	Fix issue with global adapter offline switching.
	Fix issue with pairing and No Bonding devices.
	Add support for Nintendo Wii Remote pairing.

ver 4.95:
	Fix issue with AVCTP replies with invalid PID.
	Fix issue with AVRCP and unknown packet types.
	Fix issue with AVRCP not using NOT_IMPLEMENTED correctly.
	Fix issue with AVDTP discovery if all endpoints are in use.
	Fix issue with invalid memory writes and media support.
	Fix issue with not removing device alias and unbonding.
	Fix issue with device disconnects and offline mode handling.
	Add support for setting adapter name based on machine-info.
	Add support for systemd service configuration.

ver 4.94:
	Fix issue with invalid read of memory in various modules.
	Fix issue with buffer overflow when sending AVDTP commands.
	Fix issue with response to vendor dependent AVRCP commands.
	Fix issue with headset when not able to reply with ERROR.
	Fix issue with crash when creating a device from storage.
	Fix issue with handling non UTF-8 devices names.
	Add support for improved discovery procedure.

ver 4.93:
	Fix issue with property type and Health Main channel.
	Fix issue with crash when removing devices.
	Add support for hid2hci and udev integration.

ver 4.92:
	Fix issue with handling of A2DP suspend response.
	Fix issue with crashing when acquiring A2DP stream.
	Fix issue with missing check for valid SCO before shutdown.
	Fix issue with waiting for POLLERR when disconnecting SCO.
	Fix issue with disconnect after primary service discovery.
	Fix issue with attribute interface registration.
	Add support for primary services over BR/EDR.
	Add support for flushable packets of A2DP media.

ver 4.91:
	Fix issue with LMP version string and hciconfig.
	Fix issue with missing discovery signal when scanning.
	Fix issue with wrong state and canceling name resolving.
	Fix issue with missing check during adapter initialization.
	Fix issue with missing protocol not supported error and A2DP.
	Fix issue with crash during driver unregistering and A2DP.
	Fix issue with crash when receiving AVDTP close command.
	Fix issue with remote SEP handling when A2DP codec changes.
	Fix issue with SCO hangup handling and state changes.
	Fix issue with security level and MCAP instances.
	Fix issue with memory leak and HDP data channels.
	Add support for discover characteristics by UUID to gatttool.
	Add initial support for Out-of-Band association model.
	Add initial support for SIM Access Profile.

ver 4.90:
	Fix issue with setting of global mode property.
	Fix issue with handling of RequestSession responses.
	Fix issue with TP_BNEP_CTRL_BV_01_C qualification test.
	Fix issue with too short AVDTP request timeout.
	Add support for SIM Access Profile manager.
	Add support for new UUID utility functions.
	Add support for attribute server notifications.
	Add support for client characteristic configuration.
	Update support for interactive GATT utility.

ver 4.89:
	Fix issue with name resolving when discovery is suspended.
	Fix issue with parsing flags of advertising report.
	Fix issue with SEP handling if interface is disabled.
	Fix issue with device object creation on disconnect event.
	Fix issue with indicators whenever the driver is initialized.
	Fix issue with call indicator when parsing call info reply.
	Fix issue with crash and allowed GATT MTU was too large.
	Add support for SDP record of Primary GATT services.
	Add support for interactive mode for GATT utility.

ver 4.88:
	Fix issue with HID channel reference count handling.
	Fix issue with daemon exit on badly formatted AT+VTS.
	Fix issue with crash while parsing of endpoint properties.
	Fix issue with possible crash on AVDTP Suspend request timeout.
	Fix issue with stopping inquiry before adapter is initialized.
	Fix issue with creating device object when connection fails.
	Fix issue with sending HCIDEVUP when adapter is already up.
	Fix issue with handling bonding IO channel closing.
	Fix agent cancellation in security mode 3 situations.
	Update pairing code to support management interface.

ver 4.87:
	Fix issue with initialization when adapter is already up.
	Fix issue with attribute server MTU and incoming connections.
	Fix issue with duplicate characteristics after discovery.

ver 4.86:
	Revert wrong fix for SDP PDU size error response.
	Fix various memory leaks in A2DP and AVDTP support.
	Add Routing property to MediaTransport interface
	Add proper tracking mechanism to NREC status.
	Add READ_BLOB_REQUEST support to attribute server.

ver 4.85:
	Fix issue with event mask setting for older adapters.
	Fix issue with device creation and pairing failures.
	Add support for telephony support via oFono.
	Add support for characteristic security level.
	Update support for service registration.

ver 4.84:
	Fix issue with wrong parameters and device found signals.
	Fix issue with leaking EIR data if RSSI does not change.
	Fix issue with adapter initialization state.
	Fix issue with closing of SDP server sockets.

ver 4.83:
	Fix issue with already connected HFP/HSP endpoints.
	Fix missing reply when create device is canceled.
	Fix memory leak within the attribute server.
	Fix memory leak with unused extended inquiry name.
	Fix setting paired state when device->authr is false.
	Fix clearing authentication request for renewed keys.
	Add support for storing link keys in runtime memory.
	Update support for primary service discovery.

ver 4.82:
	Fix crash with mmap of files with multiples of page size.
	Fix HFP response and hold (AT+BTRH) command response.
	Fix device creation error response when powered off.
	Fix device removal when connecting/browsing fails.
	Add initial attribute permission implementation.
	Add AVDTP SRC stream send buffer size verification.
	Add support for setting link policy based on features.

ver 4.81:
	Fix issue with telephony driver initialization.
	Fix issue with adapter services list initialization.
	Fix crash after simultaneous authentication requests.
	Add support for primary service search on device creation.

ver 4.80:
	Fix legacy link key storing for some buggy adapters.
	Fix invalid memory access when EIR field length is zero.
	Fix adapter initialization to wait for kernel HCI commands.
	Fix initialization of adapters which are already up.
	Fix possible race condition when initializing adapters.
	Fix possible crashes when attempting to connect AVDTP.
	Fix not aborting sink stream configuration on disconnect.
	Fix not indicating disconnected state when connecting to AVDTP.
	Fix not dropping AVDTP session when canceling stream setup.
	Fix AVDTP abort not being send when the state is idle.
	Fix regression with Low Energy and interleave discovery.
	Add a new configuration option to disable Low Energy support.
	Add iwmmxt optimization for SBC for ARM PXA series CPUs.
	Update support for GATT Primary Service Discovery.
	Update MCAP and HDP support.

ver 4.79:
	Fix issue with adapter initialization race condition.
	Update new Bluetooth Management interface support.

ver 4.78:
	Fix various issues with AVDTP timer handling.
	Fix various issues with handling of mode changes.
	Fix issue with audio disconnect watch in connecting state.
	Fix issue with handling call waiting indicators in telephony.
	Fix issue with handling UUID parameter and RegisterEndpoint.
	Add initial support for Bluetooth Management interface.
	Add support for Application property to HealthChannel.

ver 4.77:
	Fix issue with device name and accessing already freed memory.
	Fix issue with handling CHLD=0 command for handsfree.
	Fix issue with manager properties and no adapters.
	Fix issue with properties and broken service records.
	Fix issue with A2DP playback and sample rate changes.
	Update MCAP and HDP support.

ver 4.76:
	Fix issue in telephony driver with hanging up held call.
	Fix issue in telephony driver with notifications when on hold.
	Fix issue with blocking on setconf confirmation callback.
	Fix issue with not always signaling new streams as sinks.
	Fix issue with errors in case of endpoint request timeout.
	Fix issue with HFP/HSP microphone and speaker gain values.
	Add source if the device attempt to configure local sink stream.
	Add PSM option for GATT/ATT over BR/EDR on gatttool.
	Add support for GATT/ATT Attribute Write Request.
	Update MCAP and HDP support.

ver 4.75:
	Fix use of uninitialized variable on legacy pairing.
	Fix mismatch of attribute protocol opcode.

ver 4.74:
	Fix regression for Legacy Pairing.
	Fix wrong PSM value for attribute protocol.
	Fix issue with RSSI field in advertising reports.
	Add support for Add BR/EDR and LE interleaved discovery.
	Add support for GATT write characteristic value option.
	Add support for specifying download address for AR300x.

ver 4.73:
	Fix problem with EIR data when setting the name.
	Fix reading local name from command complete event.
	Fix registering local endpoints with disabled socket interface.
	Add support for more HCI operations using ops infrastructure.
	Add support for GATT characteristic hierarchy.
	Add support for GATT indications.

ver 4.72:
	Fix memory leak while connecting BTIO channels.
	Fix crash with GStreamer plugin if SBC is not supported.
	Fix issue with GATT server stop sending notifications.
	Fix issue with GATT and dealing with the minimum MTU size.
	Fix issue with file descriptor leak in GATT client.
	Add support for UUID 128-bit handling in attribute client.
	Add support for encoders/decoders for MTU Exchange.
	Add support for the MTU Exchange procedure to the server.
	Add support for a per channel MTU to the ATT server.
	Add support for Characteristic interface.
	Add support for new Media API and framework.
	Add initial support for HDP plugin.

ver 4.71:
	Fix compilation when SBC support in not enabled.
	Fix crash with RequestSession and application disconnects.
	Fix memory leak and possible crash when removing audio device.
	Fix issue with closing stream of locked sep when reconfiguring.
	Fix issue where discovery could interfere with bonding.
	Fix issue with Connected status when PS3 BD remote connects.
	Fix issue with lifetime of fake input devices.
	Add support for compile time option of oui.txt path.
	Add support for printing IEEE1284 device ID for CUPS.
	Add plugin for setting adapter class via DMI.
	Add more features for attribute protocol and profile.
	Add initial support for MCAP.

ver 4.70:
	Fix incoming call indication handling when in WAITING state.
	Fix various SDP related qualification test case issues.
	Fix logic to write EIR when SDP records are changed.
	Fix UTF-8 validity check for remote names in EIR.
	Add support for UUID-128 extended inquiry response.
	Add service UUIDs from EIR to the DeviceFound signal.
	Add fast connectable feature for Handsfree profile.
	Add HCI command and event definitions for AMP support.
	Add firmware download support for Qualcommh devices.
	Add host level support for Atheros AR300x device.
	Add initial support of ATT and GATT for basic rate.

ver 4.69:
	Fix issue with calling g_option_context_free() twice.
	Fix inconsistencies with initial LE commands and events.
	Add support for telephony ClearLastNumber method.
	Add support for network server interface.

ver 4.68:
	Fix initialization of adapters in RAW mode.
	Fix signal strength for HFP in Maemo's telephony support.
	Add support for following the radio state via Maemo's MCE.
	Add initial set of LE commands and events definitions.
	Add mode option for L2CAP sockets to the BtIO API.

ver 4.67:
	Fix issue with authentication reply when bonding already completed.
	Fix issue with not canceling authentication when bonding fails.
	Fix issue with changed combination keys and temporary storage.
	Fix issue with sdp_get_supp_feat library function.
	Fix issue with missing unblock on device removal.
	Fix issue with not waiting for mode change completion.
	Add ARMv6 optimized version of analysis filter for SBC encoder.

ver 4.66:
	Fix regression with full debug enabling via SIGUSR2.
	Fix redundant speaker/microphone gains being sent.
	Fix not emitting PropertyChanged for SpeakerGain/MicrophoneGain.
	Fix issue with storage usage when a record is not found in memory.
	Fix issue with DiscoverServices not retrieving any records.
	Fix audio profile disconnection order to match whitepaper.
	Fix auto-accept confirmation when local agent has NoInputNoOutput.
	Fix remote just-works SSP when MITM protection is required.
	Fix performing dedicated bonding without MITM requirement.
	Add support for storing debug link keys in runtime memory.

ver 4.65:
	Fix issues with general bonding being default setting now.
	Fix driver removal upon device removal.
	Add new "Blocked" property to device objects.
	Add hciconfig support for blacklisting.
	Add support for dynamic debug feature.

ver 4.64:
	Fix invalid memory access in headset_get_nrec function.
	Fix issue with disconnect event on higher protocol layers.
	Fix issue with list parsing in sdp_set_supp_features function.
	Fix device object reference counting for SDP browse requests.
	Add missing memory checks whenever memory is allocated for SDP.
	Add support for exporting local services via D-Bus.
	Add more L2CAP Enhanced Retransmission test options.

ver 4.63:
	Fix avdtp_abort not canceling pending requests.
	Fix stale connection when abort gets rejected.

ver 4.62:
	Fix accidental symbol breakage with inquiry transmit power.
	Fix using invalid data from previous headset connection.
	Fix double free on AVDTP Abort response.
	Fix possible crash while verifying AVDTP version.
	Fix missing inuse flag when AVDTP stream is configured.
	Add support for Bluetooth controller types.

ver 4.61:
	Fix issues with Read Inquiry Response Transmit Power Level.
	Fix possible invalid read when removing a temporary device.
	Fix mode restoration when remember_powered is false.
	Fix conference call releasing in telephony-maemo.
	Fix segmentation fault with authorization during headset disconnects.
	Add support for handling unanswered AVDTP request on disconnect.
	Add support for handling Inquiry Response Transmit Power Level.
	Add support for caching of remote host features.
	Add preliminary voice dialing support for HSP.

ver 4.60:
	Fix voice mailbox number reading from SIM.
	Fix some races with D-Bus mainloop integration.
	Add helpers for D-Bus signal watches.

ver 4.59:
	Add values for Bluetooth 4.0 specification.
	Add SDP functions for HDP support.
	Add test scripts for input and audio.
	Fix missing close on BtIO create_io function.
	Fix sending incorrect AVDTP commands after timeout occurs.
	Fix timer removal when device disconnects unexpectedly.
	Fix Extended Inquiry Response record for Device ID.

ver 4.58:
	Fix crash when adapter agent exists during authentication.
	Fix CK-20W quirks for play and pause events.

ver 4.57:
	Fix unloading of drivers for uninitialized adapters.
	Fix debug message to use requested and not opened SEID.
	Fix codec selection for GStreamer plugin.
	Fix deleting of SDP records during service updates.
	Fix deleting of SDP records when a device is removed.
	Fix handling when the SDP record is modified on remote device.
	Fix potential buffer overflow by using snprintf instead of sprintf.
	Fix const declarations for some storage function parameters.

ver 4.56:
	Add missing values from Bluetooth 3.0 specification.
	Add proper tracking of device paired status.
	Fix tracking of devices without permanently stored link key.
	Fix issue with link key removal after connection failures.
	Fix legacy pairing information based on remote host features.
	Fix off-by-one issue with AVDTP capability parsing.
	Fix AVRCP, AVCTP, AVDTP, A2DP and HFP version numbers.
	Fix agent canceling before calling agent_destroy.
	Fix service record parsing with an empty UUID list.
	Fix various SDP related memory leaks.

ver 4.55:
	Add support for POSIX capabilities dropping.
	Add special quirk for the Nokia CK-20W car kit.
	Fix error code handling for AVDTP SetConfiguration response.
	Fix updating out of range list when RSSI hasn't changed.
	Fix various memory leaks and unnecessary error checks.

ver 4.54:
	Add introspection interface to output of introspection calls.
	Fix stream handling when media transport disconnects prematurely.
	Fix command timeout handling when there's no stream.
	Fix headset_suspend_stream behavior for invalid states
	Fix issue with AVDTP ABORTING state transition.
	Fix issue with AVDTP suspend while closing.

ver 4.53:
	Fix issue with telephony connection state notifications.
	Fix AVDTP stream leak for invalid media transport config.
	Fix audio connection authorization handling with timeouts.
	Fix race condition in authorizing audio connections.
	Fix device authorized setting for AVRCP-only connections.
	Fix duplicate attempts from device to connect signal channel.

ver 4.52:
	Add AVCTP support to test utility.
	Fix AVDTP Abort when transport closes before response.
	Fix authorization when the audio profiles are slow to connect.
	Fix potential AVDTP reference leaks.

ver 4.51:
	Add utility for basic AVDTP testing.
	Add support for configuring L2CAP FCS option.
	Fix discovery mode for CUPS 1.4.x and later.
	Fix global state tracking of audio service.
	Fix last issues with the new build system.

ver 4.50:
	Fix issue with missing manual pages in distribution.
	Fix issue with the configuration and state directories.
	Fix issue with creating include directory.
	Fix dependencies of include file generation.

ver 4.49:
	Add simple test program for basic GAP testing.
	Add support for confirmation requests to agent example.
	Add support for full non-recursive build.
	Add five millisecond delay for Simple Pairing auto-accept.
	Fix Class of Device setting when InitiallyPowered=false.

ver 4.48:
	Add library function for comparing UUID values.
	Add support for creating all plugins as builtins.
	Add support for async handling of service class changes.
	Add support for source interface to audio IPC.
	Fix device name settings when device is off or down.
	Fix issue with enabled SCO server when not necessary.
	Fix missing D-Bus access policy for CUPS backend.
	Fix discovery results of CUPS backend.
	Fix initialization handling of Maemo telephony.

ver 4.47:
	Add support for RFKILL unblock handling.
	Add support for serial proxy configurations.
	Add support for caching service class updates.
	Fix issues with updating SDP service records.
	Fix usage of limited discoverable mode.
	Remove deprecated methods and signals for AudioSource.

ver 4.46:
	Add support for A2DP sink role.
	Fix clearing svc_cache before the adapter is up.
	Fix various pointer after free usages.
	Fix various memory leaks.

ver 4.45:
	Fix UDEV_DATADIR fallback if pkg-config fails.
	Fix adapter cleanup and setup prototypes.
	Fix double-free with out-of-range devices.
	Fix inband ring setting to be per-headset.
	Fix handling of Maemo CSD startup.

ver 4.44:
	Add some missing manual pages.
	Fix missing number prefix when installing udev rules.
	Fix program prefix used in Bluetooth udev rules.
	Fix three-way calling indicator order.
	Fix downgrade/upgrade of callheld indicator.
	Fix +CIEV sending when indicator value changes.
	Fix signal handling for Maemo telephony driver.
	Fix parsing issues with messages from Maemo CSD.
	Fix issue with duplicate active calls.

ver 4.43:
	Add support for udev based on-demand startup.
	Fix verbose error reporting of CUPS backend.
	Fix various string length issues.
	Fix issues with Maemo telephony driver.
	Fix another device setup and temporary flag issue.
	Fix and update example agent implementation.

ver 4.42:
	Add TI WL1271 to Texas Instruments chip list.
	Add special udev mode to bluetoothd.
	Fix regression when there is no agent registered.
	Fix error return when bonding socket hang up.
	Fix SCO server socket for HFP handsfree role.
	Fix shutdown on SCO socket before closing.
	Fix shutdown on A2DP audio stream channel before closing.
	Fix issue with asserting on AVDTP reference count bugs.
	Fix authorization denied issue with certain headsets.
	Fix AVRCP UNITINFO and SUBUNIT INFO responses.
	Fix discovery cancel issues in case SDP discovery fails.

ver 4.41:
	Fix pairing even if the ACL gets dropped before successful SDP.
	Fix regression which caused device to be removed after pairing.
	Fix HSP record fetching when remote device doesn't support it.
	Fix SDP discovery canceling when clearing hs->pending.
	Fix headset never connecting on the first attempt.
	Fix headset state tracking if bt_search_service() fails.
	Fix maximum headset connection count check.
	Fix AVDTP Discover timeout handling.
	Fix also UI_SET_KEYBIT for the new pause and play key codes.

ver 4.40:
	Add telephony driver for oFono telephony stack.
	Add support for Dell specific HID proxy switching.
	Add support for running hid2hci from udev.
	Add mapping for AVRCP Play and Pause to dedicated key codes.
	Fix AVRCP keycodes to better match existing X keymap support.
	Fix various quoting issues within telephony support.
	Fix memory allocation issue when generating PDUs for SDP.
	Fix race condition on device removal.
	Fix non-cancelable issue with CreateDevice method.
	Fix non-working CancelDiscovery method call.

ver 4.39:
	Add workaround for dealing with unknown inquiry complete.
	Fix discovering when using software scheduler.
	Fix wrong NoInputNoOutput IO capability string.
	Fix race condition with agent during pairing.
	Fix agent cancellation for security mode 3 acceptor failure.
	Fix temporary flag removal when device creation fails.
	Fix hciattach to use ppoll instead of poll.
	Fix service class update when adapter is down.
	Fix service classes race condition during startup.
	Fix release of audio client before freeing the device.

ver 4.38:
	Add support for builtin plugins.
	Add framework for adapter operations.
	Add constants for Enhanced Retransmission modes.
	Fix HCI socket leak in device_remove_bonding.
	Fix various format string issues.
	Fix crashes with various free functions.
	Fix issues with Headset and A2DP drivers to load again.
	Fix sending AVRCP button released passthrough messages
	Fix bug which prevent input devices to work after restart.
	Fix issue with interpretation of UUID-128 as channel.

ver 4.37:
	Add version value for Bluetooth 3.0 devices.
	Add additional L2CAP extended feature mask bits.
	Add support for loading plugins in priority order.
	Add support for more detailed usage of disconnect watches.
	Add support for AVRCP volume control.
	Add saturated clipping of SBC decoder output to 16-bit.
	Fix potentially infinite recursion of adapter_up.
	Fix SCO handling in the case of an incoming call.
	Fix input service to use confirm callback.
	Fix cleanup of temporary device entries from storage.

ver 4.36:
	Add proper tracking of AVCTP connect attempts.
	Add support to channel pattern in Serial interface.
	Fix A2DP sink crash if removing device while connecting.
	Fix error handling if HFP indicators aren't initialized.
	Fix segfault while handling an incoming SCO connection.
	Fix Serial.Disconnect to abort connection attempt.

ver 4.35:
	Add support for Handsfree profile headset role.
	Add additional checks for open SEIDs from clients.
	Fix device removal while audio IPC client is connected.
	Fix device removal when an authorization request is pending.
	Fix incoming AVDTP connect while authorization in progress.
	Fix disconnection timers for audio support.
	Fix various potential NULL pointer deferences.
	Fix callheld indicator value for multiple calls.
	Fix voice number type usage.
	Fix GDBus watch handling.

ver 4.34:
	Add support for version checks of plugins.
	Add support for class property on adapter interface.
	Add support for second SDP attempt after connection reset.
	Add support for more detailed audio states.
	Add support for HFP+A2DP auto connection feature.
	Add support for new and improved audio IPC.
	Add program for testing audio IPC interface.
	Fix various AVDTP qualification related issues.
	Fix broken SDP AttributeIdList parsing.
	Fix invalid memory access of SDP URL handling.
	Fix local class of device race conditions.
	Fix issue with periodic inquiry on startup.
	Fix missing temporary devices in some situations.
	Fix SBC alignment issue for encoding with four subbands.

ver 4.33:
	Add Paired property to the DeviceFound signals.
	Add support for Headset profile 1.2 version.
	Fix broken network configuration when IPv6 is disabled.
	Fix network regression that caused disconnection.
	Fix SDP truncation of strings with NULL values.
	Fix service discovery handling of CUPS helper.

ver 4.32:
	Fix broken SDP record handling.
	Fix SDP data buffer parsing.
	Fix more SDP memory leaks.
	Fix read scan enable calls.
	Fix A2DP stream handling.

ver 4.31:
	Add support for new BtIO helper library.
	Fix AVDTP session close issue.
	Fix SDP memory leaks.
	Fix various uninitialized memory issues.
	Fix duplicate signal emissions.
	Fix property changes request handling.
	Fix class of device storage handling.

ver 4.30:
	Add CID field to L2CAP socket address structure.
	Fix reset of authentication requirements after bonding.
	Fix storing of link keys when using dedicated bonding.
	Fix storing of pre-Bluetooth 2.1 link keys.
	Fix resetting trust settings on every reboot.
	Fix handling of local name changes.
	Fix memory leaks in hciconfig and hcitool

ver 4.29:
	Use AVRCP version 1.0 for now.
	Decrease AVDTP idle timeout to one second.
	Delay AVRCP connection when remote device connects A2DP.
	Add workaround for AVDTP stream setup with broken headsets.
	Add missing three-way calling feature bit for Handsfree.
	Fix handsfree callheld indicator updating.
	Fix parsing of all AT commands within the buffer.
	Fix authentication replies when disconnected.
	Fix handling of debug combination keys.
	Fix handling of changed combination keys.
	Fix handling of link keys when using no bonding.
	Fix handling of invalid/unknown authentication requirements.
	Fix closing of L2CAP raw socket used for dedicated bonding.

ver 4.28:
	Add AVDTP signal fragmentation support.
	Add more SBC performance optimizations.
	Add more SBC audio quality improvements.
	Use native byte order for audio plugins.
	Set the adapter alias only after checking the EIR data.
	Fix auto-disconnect issue with explicit A2DP connections.
	Fix invalid memory access of ALSA plugin.
	Fix compilation with -Wsign-compare.

ver 4.27:
	Add more SBC optimization (MMX and ARM NEON).
	Add BT_SECURITY and BT_DEFER_SETUP definitions.
	Add support for deferred connection setup.
	Add support for fragmentation of data packets.
	Add option to trigger dedicated bonding.
	Follow MITM requirements from remote device.
	Require MITM for dedicated bonding if capabilities allow it.
	Fix IO capabilities for non-pairing and pairing cases.
	Fix no-bonding connections in non-bondable mode.
	Fix new pairing detection with SSP.
	Fix bonding with pre-2.1 devices and newer kernels.
	Fix LIAC setting while toggling Pairable property.
	Fix device creation for incoming security mode 3 connects.
	Fix crash within A2DP with bogus pointer.
	Fix issue with sdp_copy_record() function.
	Fix crash with extract_des() if sdp_uuid_extract() fails.

ver 4.26:
	Use of constant shift in SBC quantization code.
	Add possibility to analyze 4 blocks at once in encoder.
	Fix correct handling of frame sizes in the encoder.
	Fix for big endian problems in SBC codec.
	Fix audio client socket to always be non-blocking.
	Update telephony support for Maemo.

ver 4.25:
	Fix receiving data over the audio control socket.
	Fix subbands selection for joint-stereo in SBC encoder.
	Add new SBC analysis filter function.

ver 4.24:
	Fix signal emissions when removing adapters.
	Fix missing adapter signals on exit.
	Add support for bringing adapters down on exit.
	Add support for RememberPowered option.
	Add support for verbose compiler warnings.
	Add more options to SBC encoder.

ver 4.23:
	Update audio IPC for better codec handling.
	Fix bitstream optimization for SBC encoder.
	Fix length header values of IPC messages.
	Fix multiple coding style violations.
	Fix FindDevice to handle temporary devices.
	Add configuration option for DeviceID.
	Add support for InitiallyPowered option.
	Add missing signals for manager properties.
	Add telephony support for Maemo.

ver 4.22:
	Add deny statements to D-Bus access policy.
	Add support for LegacyPairing property.
	Add support for global properties.
	Add more commands to telephony testing script.
	Add sender checks for serial and network interfaces.
	Remove deprecated methods and signals from input interface.
	Remove deprecated methods and signals from network interface.
	Remove OffMode option and always use device down.

ver 4.21:
	Fix adapter initialization logic.
	Fix adapter setup and start security manager early.
	Fix usage issue with first_init variable.

ver 4.20:
	Cleanup session handling.
	Cleanup mode setting handling.
	Fix issue with concurrent audio clients.
	Fix issue with HFP/HSP suspending.
	Fix AT result code syntax handling.
	Add Handsfree support for AT+NREC.
	Add PairableTimeout adapter property.

ver 4.19:
	Fix installation of manual pages for old daemons.
	Fix D-Bus signal emmissions for CreateDevice.
	Fix issues with UUID probing.
	Fix +BSRF syntax issue.
	Add Pairable adapter property.
	Add sdp_copy_record() library function.

ver 4.18:
	Fix release before close issue with RFCOMM TTYs.
	Fix Connected property on input interface.
	Fix DeviceFound signals during initial name resolving.
	Fix service discovery handling.
	Fix duplicate UUID detection.
	Fix SBC gain mismatch and decoding handling.
	Add more options to SBC encoder and decoder.
	Add special any adapter object for service interface.
	Add variable prefix to adapter and device object paths.

ver 4.17:
	Fix SBC encoder not writing last frame.
	Fix missing timer for A2DP suspend.
	Add more supported devices to hid2hci utility.
	Add additional functionality to Handsfree support.

ver 4.16:
	Fix wrong parameter usage of watch callbacks.
	Fix parameters for callback upon path removal.
	Fix unloading of adapter drivers.

ver 4.15:
	Fix various A2DP state machine issues.
	Fix some issues with the Handsfree error reporting.
	Fix format string warnings with recent GCC versions.
	Remove dependency on GModule.

ver 4.14:
	Fix types of property arrays.
	Fix potential crash with input devices.
	Fix PS3 BD remote input event generation.
	Allow dynamic adapter driver registration.
	Update udev rules.

ver 4.13:
	Fix service discovery and UUID handling.
	Fix bonding issues with Simple Pairing.
	Fix file descriptor misuse of SCO connections.
	Fix various memory leaks in the device handling.
	Fix AVCTP disconnect handling.
	Fix GStreamer modes for MP3 encoding.
	Add operator selection to Handsfree support.

ver 4.12:
	Fix crash with missing icon value.
	Fix error checks of HAL plugin.
	Fix SCO server socket cleanup on exit.
	Fix memory leaks from DBusPendingCall.
	Fix handling of pending authorization requests.
	Fix missing protocol UUIDs in record pattern.

ver 4.11:
	Change SCO server socket into a generic one.
	Add test script for dummy telephony plugin.
	Fix uninitialized reply of multiple GetProperties methods.

ver 4.10:
	Fix memory leaks with HAL messages.
	Add more advanced handsfree features.
	Add properties to audio, input and network interfaces.
	Stop device discovery timer on device removal.

ver 4.9:
	Fix signals for Powered and Discoverable properties.
	Fix handling of Alias and Icon properties.
	Fix duplicate entries for service UUIDs.

ver 4.8:
	Fix retrieving of formfactor value.
	Fix retrieving of local and remote extended features.
	Fix potential NULL pointer dereference during pairing.
	Fix crash with browsing due to a remotely initated pairing.

ver 4.7:
	Fix pairing and service discovery logic.
	Fix crashes during suspend and resume.
	Fix race condition within devdown mode.
	Add RequestSession and ReleaseSession methods.
	Add Powered and Discoverable properties.
	Add Devices property and deprecate ListDevices.
	Add workaround for a broken carkit from Nokia.

ver 4.6:
	Fix Device ID record handling.
	Fix service browsing and storage.
	Fix authentication and encryption for input devices.
	Fix adapter name initialization.

ver 4.5:
	Fix initialization issue with new adapters.
	Send HID authentication request without blocking.
	Hide the verbose SDP debug behind SDP_DEBUG.
	Add extra UUIDs for service discovery.
	Add SCO server socket listener.
	Add authorization support to service plugin.

ver 4.4:
	Add temporary fix for the CUPS compile issue.
	Add service-api.txt to distribution.
	Mention the variable prefix of an object path

ver 4.3:
	Add dummy driver for telephony support.
	Add support for discovery sessions.
	Add service plugin for external services.
	Various cleanups.

ver 4.2:
	Avoid memory copies in A2DP write routine.
	Fix broken logic with Simple Pairing check and old kernels.
	Allow non-bondable and outgoing SDP without agent.
	Only remove the bonding for non-temporary devices.
	Cleanup various unnecessary includes.
	Make more unexported functions static.
	Add basic infrastructure for gtk-doc support.

ver 4.1:
	Add 30 seconds timeout to BNEP connection setup phase.
	Avoid memory copies in A2DP write routine for ALSA.
	Make sure to include compat/sdp.h in the distribution.

ver 4.0:
	Initial public release.

ver 3.36:
	Add init routines for TI BRF chips.
	Add extra attributes to the serial port record.
	Add example record for headset audio gateway record.
	Use Handsfree version 0x0105 for the gateway role.
	Fix SDP record registration with specific record handles.
	Fix BCSP sent/receive handling.
	Fix various includes for cross-compilation.
	Allow link mode settings for outgoing connections.
	Allow bonding during periodic inquiry.

ver 3.35:
	Add two additional company identifiers.
	Add UUID-128 support for service discovery.
	Fix usage of friendly names for service discovery.
	Fix authorization when experiemental is disabled.
	Fix uninitialized variable in passkey request handling.
	Enable output of timestamps for l2test and rctest.

ver 3.34:
	Replace various SDP functions with safe versions.
	Add additional length validation for incoming SDP packets.
	Use safe function versions for SDP client handling.
	Fix issue with RemoveDevice during discovery procedure.
	Fix collect for non-persistent service records.

ver 3.33:
	Add functions for reading and writing the link policy settings.
	Add definition for authentication requirements.
	Add support for handling Simple Pairing.
	Add Simple Pairing support to Agent interface.
	Add ReleaseMode method to Adapter interface.
	Add DiscoverServices method to Device interface.
	Remove obsolete code and cleanup the repository.
	Move over to use the libgdbus API.
	Enable PIE by default if supported.

ver 3.32:
	Add OCF constants for synchronous flow control enabling.
	Add support for switching HID proxy devices from Dell.
	Add more Bluetooth client/server helper functions.
	Add support for input service idle timeout option.
	Fix BNEP reconnection handling.
	Fix return value for snd_pcm_hw_params() calls.
	Use upper-case addresses for object paths.
	Remove HAL support helpers.
	Remove inotify support.
	Remove service daemon activation handling.
	Remove uneeded D-Bus API extension.

ver 3.31:
	Create device object for all pairing cases.
	Convert authorization to internal function calls.
	Add initial support for Headset Audio Gateway role.
	Add generic Bluetooth helper functions for GLib.
	Fix endiannes handling of connection handles.
	Don't optimize when debug is enabled.

ver 3.30:
	Convert audio service into a plugin.
	Convert input service into a plugin.
	Convert serial service into a plugin.
	Convert network service into a plugin.
	Emit old device signals when a property is changed.
	Fix missing DiscoverDevices and CancelDiscovery methods.
	Add another company identifier.
	Add basic support for Bluetooth sessions.
	Add avinfo utility for AVDTP/A2DP classification.
	Remove build option for deprecated sdpd binary.

ver 3.29:
	Introduce new D-Bus based API.
	Add more SBC optimizations.
	Add support for PS3 remote devices.
	Fix alignment trap in SDP server.
	Fix memory leak in sdp_get_uuidseq_attr function.

ver 3.28:
	Add support for MCAP UUIDs.
	Add support for role switch for audio service.
	Add disconnect timer for audio service.
	Add disconnect detection to ALSA plugin.
	Add more SBC optimizations.
	Fix alignment issue of SDP server.
	Remove support for SDP parsing via expat.

ver 3.27:
	Update uinput.h with extra key definitions.
	Add support for input connect/disconnect callbacks.
	Add ifdefs around some baud rate definitions.
	Add another company identifier.
	Add proper HFP service level connection handling.
	Add basic headset automatic disconnect support.
	Add support for new SBC API.
	Fix SBC decoder noise at high bitpools.
	Use 32-bit multipliers for further SBC optimization.
	Check for RFCOMM connection state in SCO connect callback.
	Make use of parameters selected in ALSA plugin.

ver 3.26:
	Fix compilation issues with UCHAR_MAX, USHRT_MAX and UINT_MAX.
	Improve handling of different audio transports.
	Enable services by default and keep old daemons disabled.

ver 3.25:
	Add limited support for Handsfree profile.
	Add limited support for MPEG12/MP3 codec.
	Add basic support for UNITINFO and SUBUNITINFO.
	Add more SBC optimizations.
	Fix external service (un)registration.
	Allow GetInfo and GetAddress to fail.

ver 3.24:
	Add definitions for MDP.
	Add TCP connection support for serial proxy.
	Add fix for Logitech HID proxy switching.
	Add missing macros, MIN, MAX, ABS and CLAMP.
	Add more SBC encoder optimizations.
	Add initial mechanism to handle headset commands.
	Fix connecting to handsfree profile headsets.
	Use proper function for checking signal name.

ver 3.23:
	Fix remote name request handling bug.
	Fix key search function to honor the mmap area size.
	Fix Avahi integration of network service.
	Add new plugin communication for audio service.
	Enable basic AVRCP support by default.
	More optimizations to the SBC library.
	Create common error definitions.

ver 3.22:
	Add missing include file from audio service.
	Add SBC conformance test utility.
	Add basic uinput support for AVRCP.
	Fix L2CAP socket leak in audio service.
	Fix buffer usage in GStreamer plugin.
	Fix remote name request event handling.

ver 3.21:
	Add constant for Bluetooth socket options level.
	Add initial AVRCP support.
	Add A2DP sink support to GStreamer plugin.
	Fix interoperability with A2DP suspend.
	Fix sign error in 8-subband encoder.
	Fix handling of service classes length size.
	Store Extended Inquiry Response data information.
	Publish device id information through EIR.
	Support higher baud rates for Ericcson based chips.

ver 3.20:
	Fix GStreamer plugin file type detection.
	Fix potential infinite loop in inotify support.
	Fix D-Bus signatures for dict handling.
	Fix issues with service activation.
	Fix SDP failure handling of audio service.
	Fix various memory leaks in input service.
	Add secure device creation method to input service.
	Add service information methods to serial service.
	Add config file support to network service.
	Add scripting capability to network service.
	Add special on-mode handling.
	Add optimization for SBC encoder.
	Add tweaks for D-Bus 1.1.x libraries.
	Add support for inquiry transmit power level.

ver 3.19:
	Limit range of bitpool announced while in ACP side.
	Use poll instead of usleep to wait for worker thread.
	Use default event mask from the specification.
	Add L2CAP mode constants.
	Add HID proxy support for Logitech diNovo Edge dongle.
	Add refresh option to re-request device names.
	Show correct connection link type.

ver 3.18:
	Don't allocate memory for the Bluetooth base UUID.
	Implement proper locking for headsets.
	Fix various A2DP SEP locking issues.
	Fix and cleanup audio stream handling.
	Fix stream starting if suspend request is pending.
	Fix A2DP and AVDTP endianess problems.
	Add network timeout and retransmission support.
	Add more detailed decoding of EIR elements.

ver 3.17:
	Fix supported commands bit calculation.
	Fix crashes in audio and network services.
	Check PAN source and destination roles.
	Only export the needed symbols for the plugins.

ver 3.16:
	Update company identifier list.
	Add support for headsets with SCO audio over HCI.
	Add support for auto-create through ALSA plugin.
	Add support for ALSA plugin parameters.
	Add GStreamer plugin with SBC decoder and encoder.
	Fix network service NAP, GN and PANU servers.
	Set EIR information from SDP database.

ver 3.15:
	Add A2DP support to the audio service.
	Add proxy support to the serial service.
	Extract main service class for later use.
	Set service classes value from SDP database.

ver 3.14:
	Add missing signals for the adapter interface.
	Add definitions and functions for Simple Pairing.
	Add basic commands for Simple Pairing.
	Add correct Simple Pairing and EIR interaction.
	Add missing properties for remote information.
	Add EPoX endian quirk to the input service.
	Fix HID descriptor import and storage functions.
	Fix handling of adapters in raw mode.
	Fix remote device listing methods.

ver 3.13:
	Fix some issues with the headset support.
	Fix concurrent pending connection attempts.
	Fix usage of devname instead of netdev.
	Add identifier for Nokia SyncML records.
	Add command for reading the CSR chip revision.
	Add generic CSR radio test support.
	Update HCI command table.

ver 3.12:
	Add missing HCI command text descriptions
	Add missing HCI commands structures.
	Add missing HCI event structures.
	Add common bachk() function.
	Add support for limited discovery mode.
	Add support for setting of event mask.
	Add GetRemoteServiceIdentifiers method.
	Add skeleton for local D-Bus server.
	Add headset gain control methods.
	Fix various headset implementation issues.
	Fix various serial port service issues.
	Fix various input service issues.
	Let CUPS plugin discover printers in range.
	Improve the BCM2035 UART init routine.
	Ignore connection events for non-ACL links.

ver 3.11:
	Update API documentation.
	Minimize SDP root records and browse groups.
	Use same decoder for text and URL strings.
	Fix URL data size handling.
	Fix SDP pattern extraction for XML.
	Fix network connection persistent state.
	Add network connection helper methods.
	Add initial version of serial port support.
	Add class of device tracking.

ver 3.10.1:
	Add option to disable installation of manual pages.
	Fix input service encryption setup.
	Fix serial service methods.
	Fix network service connection handling.
	Provide a simple init script.

ver 3.10:
	Add initial version of network service.
	Add initial version of serial service.
	Add initial version of input service.
	Add initial version of audio service.
	Add authorization framework.
	Add integer based SBC library.
	Add version code for Bluetooth 2.1 specification.
	Add ESCO_LINK connection type constant.
	Export sdp_uuid32_to_uuid128() function.

ver 3.9:
	Add RemoteDeviceDisconnectRequested signal.
	Add updated service framework.
	Add embedded GLib library.
	Add support for using system GLib library.
	Create internal SDP server library.

ver 3.8:
	Sort discovered devices list based on their RSSI.
	Send DiscoverableTimeoutChanged signal.
	Fix local and remote name validity checking.
	Add ListRemoteDevices and ListRecentRemoteDevices methods.
	Add basic integration of confirmation concept.
	Add support for service record description via XML.
	Add support for external commands to the RFCOMM utility.
	Add experimental service and authorization API.
	Add functions for registering binary records.

ver 3.7:
	Fix class of device handling.
	Fix error replies with pairing and security mode 3.
	Fix disconnect method for RFCOMM connections.
	Add match pattern for service searches.
	Add support for prioritized watches.
	Add additional PDU length checks.
	Fix CSRC value for partial responses.

ver 3.6.1:
	Fix IO channel race conditions.
	Fix pairing issues on big endian systems.
	Fix pairing issues with page timeout errors.
	Fix pairing state for security mode 3 requests.
	Switch to user as default security manager mode.

ver 3.6:
	Update D-Bus based RFCOMM interface support.
	Use L2CAP raw sockets for HCI connection creation.
	Add periodic discovery support to the D-Bus interface.
	Add initial support for device names via EIR.
	Add proper UTF-8 validation of device names.
	Add support for the J-Three keyboard.
	Fix issues with the asynchronous API for SDP.

ver 3.5:
	Fix and cleanup watch functionality.
	Add support for periodic inquiry mode.
	Add support for asynchronous SDP requests.
	Add more request owner tracking.
	Add asynchronous API for SDP.
	Document pageto and discovto options.

ver 3.4:
	Improve error reporting for failed HCI commands.
	Improve handling of CancelBonding.
	Fixed bonding reply message when disconnected.
	Fix UUID128 string lookup handling.
	Fix malloc() versus bt_malloc() usage.

ver 3.3:
	Don't change inquiry mode for Bluetooth 1.1 adapters.
	Add udev rules for Bluetooth serial PCMCIA cards.
	Add Cancel and Release methods for passkey agents.
	Add GetRemoteClass method.
	Convert to using ppoll() and pselect().
	Initialize allocated memory to zero.
	Remove bcm203x firmware loader.
	Remove kernel specific timeouts.
	Add additional private data field for SDP sessions.
	Add host controller to host flow control defines.
	Add host number of completed packets defines.
	Initialize various memory to zero before usage.

ver 3.2:
	Only check for the low-level D-Bus library.
	Update possible device minor classes.
	Fix timeout for pending reply.
	Add more Inquiry with RSSI quirks.
	Sleep only 100 msecs for device detection.
	Don't send BondingCreated on link key renewal.
	Allow storing of all UTF-8 remote device names.
	Create storage filenames with a generic function.
	Fix handling of SDP strings.
	Add adapter type for SDIO cards.
	Add features bit for link supervision timeout.

ver 3.1:
	Add missing placeholders for feature bits.
	Fix handling of raw mode devices.
	Fix busy loop in UUID extraction routine.
	Remove inquiry mode setting.
	Remove auth and encrypt settings.

ver 3.0:
	Implement the new BlueZ D-Bus API.
	Fix broken behavior with EVT_CMD_STATUS.
	Add features bit for pause encryption.
	Add additional EIR error code.
	Add more company identifiers.
	Add another Phonebook Access identifier.
	Update sniff subrating data structures.

ver 2.25:
	Use %jx instead of %llx for uint64_t and int64_t.
	Allow null-terminated text strings.
	Add UUID for N-Gage games.
	Add UUID for Apple Macintosh Attributes.
	Add Apple attributes and iSync records.
	Add definitions for Apple Agent.
	Add support for the Handsfree Audio Gateway service.
	Add support for choosing a specific record handle.
	Add support for dialup/telephone connections.
	Add definitions for Apple Agent.
	Add support for record handle on service registration.

ver 2.24:
	Fix display of SDP text and data strings.
	Add support for device scan property.
	Add support for additional access protocols.
	Update the D-Bus policy configuration file.

ver 2.23:
	Update the new D-Bus interface.
	Make dfutool ready for big endian architectures.
	Add support for AVRCP specific service records.
	Add support for writing complex BCCMD commands.
	Add the new BCCMD interface utility.
	Add MicroBCSP implementation from CSR.
	Add constants and definitions for sniff subrating.
	Add support for allocation of binary text elements.
	Add HCI emulation tool.
	Add fake HID support for old EPoX presenters.
	Reject connections from unknown HID devices.
	Fix service discovery deadlocks with Samsung D600 phones.

ver 2.22:
	Remove D-Bus 0.23 support.
	Add initial version of the new D-Bus interface.
	Add support for extended inquiry response commands.
	Add support for the Logitech diNovo Media Desktop Laser.
	Add compile time buffer checks (FORTIFY SOURCE).
	Decode reserved LMP feature bits.
	Fix errno overwrite problems.
	Fix profile descriptor problem with Samsung phones.

ver 2.21:
	Move create_dirs() and create_file() into the textfile library.
	Let textfile_put() also replace the last key value pair.
	Fix memory leaks with textfile_get() usage.
	Fix infinite loops and false positive matches.
	Don't retrieve stored link keys for RAW devices.
	Document the putkey and delkey commands.
	Show supported commands also in clear text.
	Support volatile changes of the BD_ADDR for CSR chips.
	Add support for identification of supported commands.
	Add missing OCF declarations for the security filter.
	Add two new company identifiers.

ver 2.20:
	Add UUIDs for video distribution profile.
	Add UUIDs for phonebook access profile.
	Add attribute identifier for supported repositories.
	Add definitions for extended inquiry response.
	Add functions for extended inquiry response.
	Add support for extended inquiry response.
	Add support for HotSync service record.
	Add support for ActiveSync service record.
	Add ActiveSync networking support.
	Fix D-Bus crashes with new API versions.

ver 2.19:
	Fix the GCC 4.0 warnings.
	Fix the routing for dealing with raw devices.
	Fix off by one memory allocation error.
	Fix security problem with escape characters in device name.
	Add per device service record functions.
	Send D-Bus signals for inquiry results and remote name resolves.
	Add support for device specific SDP records.

ver 2.18:
	Support D-Bus 0.23 and 0.33 API versions.
	Support reading of complex BCCMD values.
	Support minimum and maximum encryption key length.
	Add support for reading and writing the inquiry scan type.
	Add definitions for connection accept timeout and scan enable.
	Add support for inquiry scan type.
	Add tool for the CSR BCCMD interface.
	Add first draft of the Audio/Video control utility.
	Add disconnect timer support for the A2DP ALSA plugin.
	Make SBC parameters configurable.
	Replace non-printable characters in device names.
	Remove hci_vhci.h header file.
	Remove hci_uart.h header file.

ver 2.17:
	Set the storage directory through ${localstatedir}.
	Add the textfile library for ASCII based file access.
	Add support for return link keys event.
	Add support for voice setting configuration.
	Add support for page scan timeout configuration.
	Add support for storing and deleting of stored link keys.
	Add support for searching for services with UUID-128.
	Add support for retrieving all possible service records.
	Add support for a raw mode view of service records.
	Add support for HID information caching in hidd.
	Add support for authentication in pand and dund.
	Add support for changing BD_ADDR of CSR chips.
	Add pskey utility for changing CSR persistent storage values.
	Add the firmware upgrade utility.
	Add connection caching for the A2DP ALSA plugin.
	Add functions for stored link keys.
	Add definitions for PIN type and unit key.
	Add SDP_WAIT_ON_CLOSE flag for sdp_connect().
	Include stdio.h in bluetooth.h header file.
	Include sys/socket.h in the header files.

ver 2.16:
	Store link keys in ASCII based file format.
	Support device name caching.
	Support zero length data sizes in l2test.
	Change default l2ping data size to 44 bytes.
	Hide the server record and the public browse group root.
	Read BD_ADDR if not set and if it is a raw device.
	Add SDP language attributes.
	Add support for browsing the L2CAP group.
	Add support for stored pin codes for outgoing connections.
	Add support for local commands and extended features.
	Add support for reading CSR panic and fault codes.
	Add config option for setting the inquiry mode.
	Add OUI decoding support.
	Use unlimited inquiry responses as default.
	Use cached device names for PIN request.
	Use the clock offset when getting the remote names.
	Add function for reading local supported commands.
	Add function for reading local extended features.
	Add function for reading remote extended features.
	Add function for getting the remote name with a clock offset.
	Add function for extracting the OUI from a BD_ADDR.
	Add inquiry info structure with RSSI and page scan mode.
	Fix buffer allocation for features to string conversion.
	Support inquiry with unlimited number of responses.

ver 2.15:
	Enable the RFCOMM service level security.
	Add deprecated functions for reading the name.
	Add command for reading the clock offset.
	Add command for reading the clock.
	Add function for reading the clock.
	Add function for reading the local Bluetooth address.
	Add function for reading the local supported features.
	Don't configure raw devices.
	Don't set inquiry scan or page scan on raw devices.
	Don't show extended information for raw devices.
	Support L2CAP signal sizes bigger than 2048 bytes.
	Cleanup of the socket handling code of the test programs.
	Use better way for unaligned access.
	Remove sdp_internal.h and its usage.

ver 2.14:
	Make use of additional connection information.
	Use library function for reading the RSSI.
	Use library function for reading the link quality.
	Use library function for reading the transmit power level.
	Use library functions for the link supervision timeout.
	Add tool for changing the device address.
	Add function for reading the RSSI.
	Add function for reading the link quality.
	Add function for reading the transmit power level.
	Add functions for the link supervision timeout.
	Remove deprecated functions.
	Update AM_PATH_BLUEZ macro.

ver 2.13:
	Use file permission 0600 for the link key file.
	Add support for HID attribute descriptions.
	Add support for Device ID attributes.
	Add Device ID and HID attribute definitions.
	Update the UUID constants and its translations.
	Update L2CAP socket option definitions.
	Update connection information definitions.
	Various whitespace cleanups.

ver 2.12:
	Inherit the device specific options from the default.
	Use --device for selecting the source device.
	Add --nosdp option for devices with resource limitation.
	Add support and parameter option for secure mode.
	Add a lot of build ids and hardware revisions.
	Add service classes and profile ids for WAP.
	Add simple AM_PATH_BLUEZ macro.
	Update UUID translation tables.
	Correct kernel interface for CMTP and HIDP support.

ver 2.11:
	Initial support for the kernel security manager.
	Various cleanups to avoid inclusion of kernel headers.
	Fix output when the CUPS backend is called without arguments.
	Fix problems with a 64 bit userland.
	Use Bluetooth library functions if available.
	Use standard numbering scheme of SDP record handles.
	Use bit zero for vendor packets in the filter type bitmask.
	Add SIM Access types for service discovery.
	Add more audio/video profile translations.
	Add another company identifier.
	Add the missing HCI error codes.
	Add RFCOMM socket options.
	Add definition for the SECURE link mode.
	Add functions for reading and writing the inquiry mode.
	Add functions for AFH related settings and information.
	Add version identifier for the Bluetooth 2.0 specification.
	Add a master option to the hidd.
	Add support for changing the link key of a connection.
	Add support for requesting encryption on keyboards.
	Add support for revision information of Digianswer devices.
	Add support for the Zoom, IBM and TDK PCMCIA cards.
	Add checks for the OpenOBEX and the ALSA libraries.
	Add experimental mRouter support.

ver 2.10:
	Use a define for the configuration directory.
	Fix string initialization for flags translation.
	Fix and extend the unaligned access macros.
	Make compiling with debug information optional.
	Don't override CFLAGS from configure.
	Check for usb_get_busses() and usb_interrupt_read().
	Add optional support for compiling with PIE.
	Make installation of the init scripts optional.
	Make compiling with debug information optional.
	Don't override CFLAGS from configure.

ver 2.9:
	Retry SDP connect if busy in the CUPS backend.
	Use packet type and allow role switch in hcitool.
	Use the functions from the USB library for hid2hci.
	Add Broadcom firmware loader.
	Add EPoX endian quirk for buggy keyboards.
	Add L2CAP info type and info result definitions.
	Add value for L2CAP_CONF_RFC_MODE.
	Change RSSI value to signed instead of unsigned.
	Allow UUID32 values as protocol identifiers.
	Update the autoconf/automake scripts.

ver 2.8:
	Use LIBS and LDADD instead of LDFLAGS.
	Use HIDP subclass field for HID boot protocol.
	Set olen before calling getsockopt() in pand.
	Restore signals for dev-up script.
	Add PID file support for pand.
	Add size parameter to expand_name() in hcid.
	Add support for audio source and audio sink SDP records.
	Add support for HID virtual cable unplug.
	Add support for AmbiCom BT2000C card.
	Add defines and UUID's for audio/video profiles.
	Add AVDTP protocol identifier.
	Add HIDP subclass field.
	Add PKGConfig support.
	Fix the event code of inquiry with RSSI.
	Remove dummy SDP library.

ver 2.7:
	Fix display of decoded LMP features.
	Update company identifiers.
	Add AFH related types.
	Add first bits from EDR prototyping specification.
	Add support for inquiry with RSSI.
	Add HCRP related SDP functions.
	Add HIDP header file.
	Add support for getting the AFH channel map.
	Add support for AFH mode.
	Add support for inquiry mode.
	Add Bluetooth backend for CUPS.
	Add the hid2hci utility.
	Add the hidd utility.
	Add the pand utility.
	Add the dund utility.
	More endian bug fixes.
	Give udev some time to create the RFCOMM device nodes.
	Release the TTY if no device node is found.
	New startup script for the Bluetooth subsystem.
	Update to the autoconf stuff.

ver 2.6:
	Change default prefix to /usr.
	Add manpages for hcid and hcid.conf.
	Add the sdpd server daemon.
	Add the sdptool utility.
	Add the ciptool utility.
	Add new company identifiers.
	Add BNEP and CMTP header files.
	Add the SDP library.
	Use R2 for default value of pscan_rep_mode.

ver 2.5:
	Add decoding of Bluetooth 1.2 features.
	Add link manager version parameter for Bluetooth 1.2.
	Add new company identifiers.
	Add D-Bus support for PIN request.
	Support for transmit power level.
	Support for park, sniff and hold mode.
	Support for role switch.
	Support for reading the clock offset.
	Support for requesting authentication.
	Support for setting connection encryption.
	Show revision information for Broadcom devices.
	Replace unprintable characters in device name.
	Use R1 for default value of pscan_rep_mode.
	Fix some 64-bit problems.
	Fix some endian problems.
	Report an error on PIN helper failure.
	Update bluepin script for GTK2.

ver 2.4:
	Increase number of inquiry responses.
	Support for transmit power level.
	Display all 8 bytes of the features.
	Add support for reading and writing of IAC.
	Correct decoding class of device.
	Use Ericsson revision command for ST Microelectronics devices.
	Display AVM firmware version with 'revision' command.
	New code for CSR specific revision information.
	Support for ST Microelectronics specific initialization.
	Support for 3Com card version 3.0.
	Support for TDK, IBM and Socket cards.
	Support for initial baud rate.
	Update man pages.
	Fixes for some memory leaks.

ver 2.3:
	Added const qualifiers to appropriate function arguments.
	Minor fixes.
	CSR firmware version is now displayed by 'revision' command.
	Voice command is working properly on big endian machines.
	Added support for Texas Bluetooth modules.
	Added support for high UART baud rates on Ericsson modules.
	BCSP initialization fixes.
	Support for role switch command (hcitool).
	RFCOMM config file parser fixes.
	Update man pages.
	Removed GLib dependency.

ver 2.2:
	Updated RFCOMM header file.
	Additional HCI command and event defines.
	Support for voice settings (hciconfig).
	Minor hcitool fixes.
	Improved configure script.
	Added Headset testing tool.
	Updated man pages.
	RPM package.

ver 2.1.1:
	Resurrect hci_remote_name.

ver 2.1:
	Added hci_{read, write}_class_of_dev().
	Added hci_{read, write}_current_iac_lap().
	Added hci_write_local_name().
	Added RFCOMM header file.
	Minor fixes.
	Improved BCSP initialization (hciattach).
	Support for displaying link quality (hcitool).
	Support for changing link supervision timeout (hcitool).
	New RFCOMM TTY configuration tool (rfcomm).
	Minor fixes and updates.

ver 2.0:
	Additional company IDs.
	BCSP initialization (hciattach).
	Minor hciconfig fixes.

ver 2.0-pr13:
	Support for multiple pairing modes.
	Link key database handling fixes.

ver 2.0-pre12:
	Removed max link key limit. Keys never expire.
	Link key database is always updated. Reread PIN on SIGHUP (hcid).
	Bluetooth script starts SDPd, if installed.
	Other minor fixes.

ver 2.0-pre11:
	Improved link key management and more verbose logging (hcid).
	Fixed scan command (hcitool).

ver 2.0-pre10:
	Fix hci_inquiry function to return errors and accept user buffers.
	New functions hci_devba, hci_devid, hci_for_each_dev and hci_get_route.
	Additional company IDs.
	Makefile and other minor fixes.
	Support for reading RSSI, remote name and changing
	connection type (hcitool). 
	Device initialization fixes (hcid).
	Other minor fixes and improvements.
	Build environment cleanup and fixes.

ver 2.0-pre9:
	Improved bluepin. Working X authentication.
	Improved hcitool. New flexible cmd syntax, additional commands.
	Human readable display of the device features.
	LMP features to string translation support.
	Additional HCI command and event defines.
	Extended hci_filter API.

ver 2.0-pre8:
	Additional HCI ioctls and defines.
	All strings and buffers are allocated dynamically.
	ba2str, str2ba automatically swap bdaddress.
	Additional hciconfig commands. Support for ACL and SCO MTU ioctls.
	Support for Inventel and COM1 UART based devices.
	Minor hcitool fixes.
	Improved l2test. New L2CAP test modes.
	Minor fixes and cleanup.

ver 2.0-pre7:
	Bluetooth libraries and header files is now a separate package.
	New build environment uses automake and libtool.
	Massive header files cleanup.
	Bluetooth utilities is now a separate package.
	New build environment uses automake.
	Moved all config files and security data to /etc/bluetooth.
	Various cleanups.

ver 2.0-pre6:
	API cleanup and additions.
	Improved hcitool.
	l2test minor output fixes.
	hciattach opt to display list of supported devices.

ver 2.0-pre4:
	HCI filter enhancements.

ver 2.0-pre3:
	Cleanup.

ver 2.0-pre2:
	Additional HCI library functions.
	Improved CSR baud rate initialization.
	PCMCIA scripts fixes and enhancements.
	Documentation update.

ver 2.0-pre1:
	New UART initialization utility.
	Hot plugging support for UART based PCMCIA devices.
	SCO testing utility.
	New authentication utility (bluepin).
	Minor fixes and improvements.