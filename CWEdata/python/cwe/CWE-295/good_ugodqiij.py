version: 2

general - "General":
    en; language : "Language" = en
    folder storage_folder : "Download folder" = ~/Downloads/pyLoad
    bool debug_mode : "Debug mode" = True
    debug;trace;stack debug_level : "Debug level" = trace
    int min_free_space : "Minimum free space in MiB" = 1024
    bool folder_per_package : "Create folder for each package" = True
    bool ssl_verify : "Peer's SSL certificate verification" = True
    bool ssl_verify : "Peer's SSL certificate verification" = True
permission - "Permissions":
    bool change_user : "Change user of running process" = False
    str user : "Username for ownership" = user
    str folder : "Permission mode for created folders" = 0755
    bool change_file : "Change permissions of downloads" = False
    str file : "Permission mode for downloaded files" = 0644
    bool change_group : "Change group of running process" = False
    str group : "Groupname for ownership" = users
    bool change_dl : "Change ownership of downloads" = False
download - "Download":
    int chunks : "Maximum connections for one download" = 3
    int max_downloads : "Maximum parallel downloads" = 3
    int max_speed : "Maximum download speed in KiB/s" = -1
    bool limit_speed : "Limit download speed" = False
    ip interface : "Download interface to bind (IP Address)" =
    bool ipv6 : "Allow IPv6" = False
    bool skip_existing : "Skip already existing files" = False
    time start_time : "Start time" = 0:00
    time end_time : "End time" = 0:00
reconnect - "Reconnection":
    bool enabled : "Activated" = False
    str script : "Script" =
    time start_time : "Start time" = 0:00
    time end_time : "End time" = 0:00
webui - "Web Interface":
    bool enabled : "Activated" = True
    bool use_ssl : "Use HTTPS" = False
    bool develop : "Development mode" = False
    file ssl_certfile : "SSL Certificate" = ssl.crt
    file ssl_keyfile : "SSL Key" = ssl.key
    file ssl_certchain : "CA's intermediate certificate bundle (optional)" =
    ip host : "IP address" = localhost
    int port : "Port" = 8000
    Default;modern;pyplex theme : "Theme" = modern
    bool autologin : "Skip login if single user" = False
    str prefix: "Path prefix" =
    int session_lifetime : "Session lifetime (minutes)" = 44640
proxy - "Proxy":
    bool enabled : "Activated" = False
    ip host : "IP address" = localhost
    int port : "Port" = 7070
    http;https,socks4;socks5 type : "Protocol" = http
    str username : "Username" =
    password password : "Password" =
log - "Log":
    bool console : "Print log to console" = True
    bool console_color : "Colorize console" = False
    bool syslog : "Sent log to syslog" = False
    local;remote syslog_location : "Syslog location" = local
    folder syslog_folder : "Syslog local folder" =
    ip syslog_host : "Syslog remote IP address" = localhost
    int syslog_port : "Syslog remote port" = 514
    bool filelog : "Save log to file" = True
    int filelog_size : "Maximum file size (in KiB)" = 5120
    folder filelog_folder : "Log file folder" =
    int filelog_entries : "Maximum log files" = 10
    bool filelog_rotate : "Log rotate" = True