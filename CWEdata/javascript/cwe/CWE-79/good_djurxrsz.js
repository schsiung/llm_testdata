
Options +FollowSymLinks -Indexes
rewriteEngine on

rewriteBase /


rewriteRule ^edit_([A-Za-z0-9]+)?(.*)$ */edit.php?template_id=$1&$2

rewriteRule ^edithtml_([A-Za-z0-9]+)?(.*)$ */edithtml.php?template_id=$1&$2

rewriteRule ^preview_([A-Za-z0-9]+)?(.*)$ */preview.php?template_id=$1&$2

rewriteRule ^preview_([A-Za-z0-9]+)_([A-Za-z0-9]+)?(.*)$ */preview.php?template_id=$1&linkID=$2&$3

rewriteRule ^example_([A-Za-z0-9]+)$ */example.php?template_id=$1

rewriteRule ^play_([A-Za-z0-9]+)?(.*)$ */play.php?template_id=$1&$2

rewriteRule ^properties_([A-Za-z0-9]+)$ */properties.php?template_id=$1

rewriteRule ^folderproperties_([A-Za-z0-9]+)_folder$ */folderproperties.php?template_id=$1

rewriteRule ^publishproperties_([A-Za-z0-9]+)$ */publishproperties.php?template_id=$1

rewriteRule ^drawing$ */drawing.php

rewriteRule ^xml_([A-Za-z0-9]+)$ */data.php?template_id=$1

rewriteRule ^peerreview_([A-Za-z0-9]+)$ */peer.php?template_id=$1

rewriteRule ^export_full_([0-9]+)?(.*)$ */website_code/php/scorm/export.php?template_id=$1&scorm=false&full=true&$2

rewriteRule ^export_offline_([0-9]+)?(.*)$ */website_code/php/scorm/export.php?template_id=$1&scorm=false&offline=true&$2

rewriteRule ^export_local_([0-9]+)?(.*)$ */website_code/php/scorm/export.php?template_id=$1&local=true&scorm=false&$2

rewriteRule ^export_([0-9]+)?(.*)$ */website_code/php/scorm/export.php?template_id=$1&scorm=false&$2

rewriteRule ^scorm2004_([0-9]+)?(.*)$ */website_code/php/scorm/export.php?template_id=$1&scorm=2004&$2

rewriteRule ^scorm_rich_([0-9]+)?(.*)$ */website_code/php/scorm/export.php?template_id=$1&data=rich&scorm=true&$2

rewriteRule ^scorm_([0-9]+)?(.*)$ */website_code/php/scorm/export.php?template_id=$1&scorm=true&$2

rewriteRule ^RSS/$ */rss.php

rewriteRule ^RSS/([A-Z][A-Za-z\'\-]?[A-Za-z\'\-]+_[A-Z][A-Za-z\'\-]?[A-Za-z\'\-]+)/$ */rss.php?username=$1

rewriteRule ^RSS/([A-Z][A-Za-z\'\-]?[A-Za-z\'\-]+_[A-Z][A-Za-z\'\-]?[A-Za-z\'\-]+)/([A-Za-z0-9_]+)/$ */rss.php?username=$1&folder_name=$2

rewriteRule ^export/$ */rss.php?export=true

rewriteRule ^syndication/$ */syndicate.php

rewriteRule ^workspaceproperties$ */workspaceproperties.php