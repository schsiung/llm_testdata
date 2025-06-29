# begin Red Hat management server registration
mkdir -p /usr/share/rhn/
#if $redhat_management_key != ""
   #if $redhat_management_type == "site"
      #set $mycert_file = "RHN-ORG-TRUSTED-SSL-CERT"
      #set $mycert = "/usr/share/rhn/" + $mycert_file
curl http://$redhat_management_server/pub/RHN-ORG-TRUSTED-SSL-CERT -o $mycert
perl -npe 's/RHNS-CA-CERT/$mycert_file/g' -i /etc/sysconfig/rhn/*
   #end if
   #if $redhat_management_type == "hosted"
      #set $mycert = "/usr/share/rhn/RHNS-CA-CERT"
   #end if 
   #set $endpoint = "https://%s/XMLRPC" % $redhat_management_server
rhnreg_ks --serverUrl=$endpoint --sslCACert=$mycert --activationkey=$redhat_management_key
#else
# not configured to register to any Red Hat management server (ok)
#end if
# end Red Hat management server registration