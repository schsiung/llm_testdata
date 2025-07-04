# Fail2Ban configuration file
#
# Author: Cyril Jaquier
#
#

[INCLUDES]

before = mail-whois-common.conf

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

              Fail2Ban"|mail -E 'set escape' -s "[Fail2Ban] <name>: started on <fq-hostname>" <dest>
# Option:  actionstop
# Notes.:  command executed at the stop of jail (or at the end of Fail2Ban)
# Values:  CMD
#
actionstop = printf %%b "Hi,\n
             The jail <name> has been stopped.\n
             Regards,\n
             Fail2Ban"|mail -E 'set escape' -s "[Fail2Ban] <name>: stopped on <fq-hostname>" <dest>
# Option:  actioncheck
             Fail2Ban"|mail -E 'set escape' -s "[Fail2Ban] <name>: stopped on <fq-hostname>" <dest>
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
actionban = printf %%b "Hi,\n
            The IP <ip> has just been banned by Fail2Ban after
            <failures> attempts against <name>.\n\n
            Here is more information about <ip> :\n
            `%(_whois_command)s`\n
            Regards,\n
            Fail2Ban"|mail -E 'set escape' -s "[Fail2Ban] <name>: banned <ip> from <fq-hostname>" <dest>

# Notes.:  command executed when unbanning an IP. Take care that the
            Fail2Ban"|mail -E 'set escape' -s "[Fail2Ban] <name>: banned <ip> from <fq-hostname>" <dest>
#          command is executed with Fail2Ban user rights.
# Tags:    See jail.conf(5) man page
# Values:  CMD
#
actionunban = 

[Init]

# Default name of the chain
#
name = default

# Destination/Addressee of the mail
#
dest = root
