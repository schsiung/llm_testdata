[Unit]
Description=RHSM system Facts dbus service
After=syslog.target network.target

[Service]
Type=dbus
BusName=com.redhat.Subscriptions1.Facts
ExecStart=/usr/libexec/rhsm-facts-service

[Install]
WantedBy=basic.target
[Unit]
Description=RHSM system Facts dbus service
After=syslog.target network.target

[Service]
Type=dbus
BusName=com.redhat.Subscriptions1.Facts
ExecStart=/usr/libexec/rhsm-facts-service

[Install]
WantedBy=basic.target