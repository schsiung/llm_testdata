<?php
/**
 * ---------------------------------------------------------------------
 * GLPI - Gestionnaire Libre de Parc Informatique
 * Copyright (C) 2015-2018 Teclib' and contributors.
 *
 * http://glpi-project.org
 *
 * based on GLPI - Gestionnaire Libre de Parc Informatique
 * Copyright (C) 2003-2014 by the INDEPNET Development Team.
 *
 * ---------------------------------------------------------------------
 *
 * LICENSE
 *
 * This file is part of GLPI.
 *
 * GLPI is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * GLPI is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with GLPI. If not, see <http://www.gnu.org/licenses/>.
 * ---------------------------------------------------------------------
 */

define('DO_NOT_CHECK_HTTP_REFERER', 1);
include ('./inc/includes.php');

// Force in normal mode
$_SESSION['glpi_use_mode'] = Session::NORMAL_MODE;

// Need to be used using :
// check_http -H servername -u /glpi/status.php -s GLPI_OK


// Plain text content
header('Content-type: text/plain');

$ok_master = true;
$ok_slave  = true;
$ok        = true;

// Check slave server connection
if (DBConnection::isDBSlaveActive()) {
   $DBslave = DBConnection::getDBSlaveConf();
   if (is_array($DBslave->dbhost)) {
      $hosts = $DBslave->dbhost;
   } else {
      $hosts = [$DBslave->dbhost];
   }

   foreach ($hosts as $num => $name) {
      $diff = DBConnection::getReplicateDelay($num);
      if (abs($diff) > 1000000000) {
         echo "GLPI_DBSLAVE_${num}_OFFLINE\n";
         $ok_slave = false;
      } else if (abs($diff)> HOUR_TIMESTAMP) {
         echo "GLPI_DBSLAVE_${num}_PROBLEM\n";
         $ok_slave = false;
      } else {
         echo "GLPI_DBSLAVE_${num}_OK\n";
      }
   }
} else {
   echo "No slave DB\n";
}

// Check main server connection
if (DBConnection::establishDBConnection(false, true, false)) {
   echo "GLPI_DB_OK\n";
} else {
   echo "GLPI_DB_PROBLEM\n";
   $ok_master = false;
}

// Slave and master ok;
$ok = $ok_slave && $ok_master;

// Check session dir (useful when NFS mounted))
if (is_dir(GLPI_SESSION_DIR) && is_writable(GLPI_SESSION_DIR)) {
   echo "GLPI_SESSION_DIR_OK\n";
} else {
   echo "GLPI_SESSION_DIR_PROBLEM\n";
   $ok = false;
}

// Reestablished DB connection
if (($ok_master || $ok_slave )
    && DBConnection::establishDBConnection(false, false, false)) {

   // Check LDAP Auth connections
   $ldap_methods = getAllDataFromTable('glpi_authldaps', ['is_active' => 1]);

   if (count($ldap_methods)) {
      echo "Check LDAP servers:";

      foreach ($ldap_methods as $method) {
         echo " ".$method['name'];
         if (AuthLDAP::tryToConnectToServer($method, $method["rootdn"],
                                            Toolbox::sodiumDecrypt($method["rootdn_passwd"]))) {
            echo "_OK";
         } else {
            echo "_PROBLEM";
            $ok = false;
         }
         echo "\n";
      }

   } else {
      echo "No LDAP server\n";
   }

   // Check IMAP Auth connections
   $imap_methods = getAllDataFromTable('glpi_authmails', ['is_active' => 1]);

   if (count($imap_methods)) {
      echo "Check IMAP servers:";

      foreach ($imap_methods as $method) {
         echo " ".$method['name'];
         $param = Toolbox::parseMailServerConnectString($method['connect_string'], true);
         if ($param['ssl'] === true) {
            $host = 'ssl://'.$host;
         } else {
            if ($param['tls'] === true) {
               $host = 'tls://'.$host;
            }
         }
         if ($fp = @fsockopen($host, $param['port'],
                            $errno, $errstr, 1)) {
            echo "_OK";
         } else {
            echo "_PROBLEM";
            $ok = false;
         }
         fclose($fp);
         echo "\n";
      }

   } else {
      echo "No IMAP server\n";
   }

   // Check CAS
   if (!empty($CFG_GLPI["cas_host"])) {
      echo "CAS_SERVER";

      $url = $CFG_GLPI["cas_host"];
      if (!empty($CFG_GLPI["cas_port"])) {
         $url .= ':'.intval($CFG_GLPI["cas_port"]);
      }
      $url .= '/'.$CFG_GLPI["cas_uri"];
      $data = Toolbox::getURLContent($url);
      if (!empty($data)) {
         echo "_OK";
      } else {
         echo "_PROBLEM";
         $ok = false;
      }
      echo "\n";
   } else {
      echo "No CAS server\n";
   }

   /// Check mailcollectors
   $mailcollectors = getAllDataFromTable('glpi_mailcollectors', ['is_active' => 1]);
   if (count($mailcollectors)) {
      echo "Check mail collectors:";
      $mailcol = new MailCollector();
      foreach ($mailcollectors as $mc) {
         echo " ".$mc['name'];
         if ($mailcol->getFromDB($mc['id'])) {
            try {
               $mailcol->connect();
               echo "_OK";
            } catch (\Exception $e) {
               echo "_PROBLEM";
               $ok = false;
            }
            echo "\n";
         }
      }

   } else {
      echo "No mail collector\n";
   }

   // Check crontask
   $crontasks = getAllDataFromTable(
      'glpi_crontasks', [
         'state'  => CronTask::STATE_RUNNING,
         'OR'     => [
            new \QueryExpression(
               '(unix_timestamp(' . DBmysql::quoteName('lastrun') . ') + 2 * '.
               DBmysql::quoteName('frequency') .' < unix_timestamp(now()))'
            ),
            new \QueryExpression(
               '(unix_timestamp(' . DBmysql::quoteName('lastrun') . ') + 2 * '.
               HOUR_TIMESTAMP . ' < unix_timestamp(now()))'
            )
         ]
      ]
   );
   if (count($crontasks)) {
      echo "Check crontasks:";
      foreach ($crontasks as $ct) {
         echo " ".$ct['name']."_PROBLEM\n";
         $ok = false;
      }
   } else {
      echo "Crontasks_OK\n";
   }

   // hook for plugin
   $param = ['ok' => $ok];
   Plugin::doHook("status", $param);
   if (isset($param['ok'])) {
      $ok = $param['ok'];
   }
}

echo "\n";

if ($ok) {
   echo "GLPI_OK\n";
} else {
   echo "GLPI_PROBLEM\n";
}