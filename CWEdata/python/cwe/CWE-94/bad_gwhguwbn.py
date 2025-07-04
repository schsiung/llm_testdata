# Fail2Ban configuration file
#
# Author: Cyril Jaquier
# Modified-By: Yaroslav Halchenko to include grepping on IP over log files
#

[INCLUDES]

before = mail-whois-common.conf
         helpers-common.conf

[Definition]

# bypass ban/unban for restored tickets
norestored = 1

# Option:  actionstart
# Notes.:  command executed on demand at the first ban (or at the start of Fail2Ban if actionstart_on_demand is set to false).
# Values:  CMD
#
actionstart = printf %%b "Hi,\n
              The jail <name> has been started successfully.\n
              Regards,\n
              Fail2Ban" | <mailcmd> "[Fail2Ban] <name>: started on <fq-hostname>" <dest>

# Option:  actionstop
# Notes.:  command executed at the stop of jail (or at the end of Fail2Ban)
# Values:  CMD
#
actionstop = printf %%b "Hi,\n
             The jail <name> has been stopped.\n
             Regards,\n
             Fail2Ban" | <mailcmd> "[Fail2Ban] <name>: stopped on <fq-hostname>" <dest>

# Option:  actioncheck
# Notes.:  command executed once before each actionban command
# Values:  CMD
#
actioncheck = 

# Option:  actionban
# Notes.:  command executed when banning an IP. Take care that the
#          command is executed with Fail2Ban user rights.
# Tags:    See jail.conf(5) man page
# Values:  CMD
#

_ban_mail_content = ( printf %%b "Hi,\n
            The IP <ip> has just been banned by Fail2Ban after
            <failures> attempts against <name>.\n\n
            Here is more information about <ip> :\n"
            %(_whois_command)s;
            printf %%b "\nLines containing failures of <ip> (max <grepmax>)\n";
            %(_grep_logs)s;
            printf %%b "\n
            Regards,\n
            Fail2Ban" )

actionban = %(_ban_mail_content)s | <mailcmd> "[Fail2Ban] <name>: banned <ip> from <fq-hostname>" <dest>

# Option:  actionunban
# Notes.:  command executed when unbanning an IP. Take care that the
#          command is executed with Fail2Ban user rights.
# Tags:    See jail.conf(5) man page
# Values:  CMD
#
actionunban = 

[Init]

# Option:  mailcmd
# Notes.:  Your system mail command. Is passed 2 args: subject and recipient
# Values:  CMD
#
mailcmd = mail -E 'set escape' -s

# Default name of the chain
#
name = default

# Destinataire of the mail
#
dest = root

# Path to the log files which contain relevant lines for the abuser IP
#
logpath = /dev/null

# Number of log lines to include in the email
#
#grepmax = 1000
#grepopts = -m <grepmax>