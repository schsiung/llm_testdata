{
    "name": "glpi/glpi",
    "description": "GLPI dependencies",
    "license": "GPL-2.0-or-later",
    "type": "project",
    "homepage": "http://www.glpi-project.org/",
    "support": {
        "irc": "irc://irc.freenode.org/glpi",
        "forum": "http://forum.glpi-project.org/",
        "issues": "https://github.com/glpi-project/glpi/issues",
        "docs": "https://github.com/glpi-project/doc"
    },
    "require": {
        "php": "^7.2",
        "ext-ctype": "*",
        "ext-curl": "*",
        "ext-fileinfo": "*",
        "ext-gd": "*",
        "ext-iconv": "*",
        "ext-intl": "*",
        "ext-json": "*",
        "ext-mbstring": "*",
        "ext-mysqli": "*",
        "ext-simplexml": "*",
        "ext-zlib": "*",
        "blueimp/jquery-file-upload": "^10.2",
        "elvanto/litemoji": "^1.4 || ^2.0",
        "guzzlehttp/guzzle": "^6.5",
        "htmlawed/htmlawed": "^1.2",
        "iamcal/lib_autolink": "^1.7",
        "laminas/laminas-cache": "^2.8",
        "laminas/laminas-i18n": "^2.10",
        "laminas/laminas-mail": "^2.10",
        "laminas/laminas-mime": "^2.7",
        "laminas/laminas-serializer": "^2.8",
        "mexitek/phpcolors": "^0.4.0",
        "michelf/php-markdown": "^1.6",
        "monolog/monolog": "^2.0",
        "paragonie/sodium_compat": "^1.13",
        "paragonie/sodium_compat": "^1.13",
        "phpmailer/phpmailer": "^6.0",
        "psr/log": "^1.1",
        "psr/simple-cache": "^1.0",
        "ramsey/uuid": "^4.0",
        "rlanvin/php-rrule": "^2.1",
        "sabre/dav": "^4.0",
        "sabre/http": "^5.0",
        "sabre/uri": "^2.1",
        "sabre/vobject": "^4.1",
        "scssphp/scssphp": "^1.0",
        "sebastian/diff": "^3.0",
        "simplepie/simplepie": "^1.5",
        "symfony/console": "^4.4",
        "tecnickcom/tcpdf": "^6.2",
        "true/punycode": "^2.1",
        "wapmorgan/unified-archive": "^0.2.0"
    },
    "require-dev": {
        "ext-xml": "*",
        "atoum/atoum": "^3.4",
        "consolidation/robo": "^2.0",
        "fzaninotto/faker": "^1.7",
        "glpi-project/coding-standard": "^0.7",
        "mikey179/vfsstream": "^1.6",
        "natxet/cssmin": "^3.0",
        "patchwork/jsqueeze": "^2.0",
        "php-parallel-lint/php-parallel-lint": "^1.1",
        "sensiolabs/security-checker": "^6.0"
    },
    "replace": {
        "paragonie/random_compat": "*",
        "paragonie/random_compat": "*",
        "symfony/polyfill-ctype": "*",
        "symfony/polyfill-intl-idn": "*",
        "symfony/polyfill-mbstring": "*",
        "symfony/polyfill-php72": "*"
    "suggest": {
        "ext-ldap": "Used to provide LDAP authentication and synchronization",
        "ext-ldap": "Used to provide LDAP authentication and synchronization",
        "ext-sodium": "Used to provide strong encryption for sensitive data in database"
        "ext-sodium": "Used to provide strong encryption for sensitive data in database"
    },
    "config": {
        "optimize-autoloader": true,
        "platform": {
            "php": "7.2.0"
        },
        "sort-packages": true
    },
    "scripts": {
        "testdb": "php vendor/bin/atoum -p 'php -d memory_limit=512M' --debug --force-terminal --use-dot-report --bootstrap-file tests/bootstrap.php --no-code-coverage --max-children-number 1 -d tests/database",
        "testfunc": "php vendor/bin/atoum -p 'php -d memory_limit=512M' --debug --force-terminal --use-dot-report --bootstrap-file tests/bootstrap.php --no-code-coverage --max-children-number 1 -d tests/functionnal/",
        "testunits": "php vendor/bin/atoum -p 'php -d memory_limit=512M' --debug --force-terminal --use-dot-report --bootstrap-file tests/bootstrap.php --no-code-coverage -d tests/units",
        "testweb": "php vendor/bin/atoum -p 'php -d memory_limit=512M' --debug --force-terminal --use-dot-report --bootstrap-file tests/bootstrap.php --no-code-coverage --max-children-number 1 -d tests/web",
        "testldap": "php vendor/bin/atoum -p 'php -d memory_limit=512M' --debug --force-terminal --use-dot-report --bootstrap-file tests/bootstrap.php --no-code-coverage --max-children-number 1 -d tests/LDAP",
        "testimap": "php vendor/bin/atoum -p 'php -d memory_limit=512M' --debug --force-terminal --use-dot-report --bootstrap-file tests/bootstrap.php --no-code-coverage --max-children-number 1 -d tests/imap",
        "csp": "vendor/bin/phpcs --parallel=500 -p --standard=vendor/glpi-project/coding-standard/GlpiStandard/ --ignore=/vendor/,/plugins/,/files/,/lib/,/config/,/tests/config,/css/tiny_mce,/.git ./",
        "cs": "vendor/bin/phpcs -d memory_limit=512M -p --standard=vendor/glpi-project/coding-standard/GlpiStandard/ --ignore=/vendor/,/plugins/,/files/,/lib/,/config/,/tests/config,/css/tiny_mce,/.git ./",
        "lint": "vendor/bin/parallel-lint  --exclude files --exclude plugins --exclude vendor --exclude tools/vendor .",
        "post-install-cmd": [
            "@php -r \"file_put_contents('.composer.hash', sha1_file('composer.lock'));\""
        ],
        "post-update-cmd": [
            "@php -r \"file_put_contents('.composer.hash', sha1_file('composer.lock'));\""
        ]
    },
    "repositories": {
        "htmlawed": {
            "type": "composer",
            "url": "https://www.bioinformatics.org/phplabware/downloads/"
        }
    }
}