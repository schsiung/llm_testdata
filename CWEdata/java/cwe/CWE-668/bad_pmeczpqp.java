## ---------------------------------------------------------------------------
## See the NOTICE file distributed with this work for additional
## information regarding copyright ownership.
##
## This is free software; you can redistribute it and/or modify it
## under the terms of the GNU Lesser General Public License as
## published by the Free Software Foundation; either version 2.1 of
## the License, or (at your option) any later version.
##
## This software is distributed in the hope that it will be useful,
## but WITHOUT ANY WARRANTY; without even the implied warranty of
## MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
## Lesser General Public License for more details.
##
## You should have received a copy of the GNU Lesser General Public
## License along with this software; if not, write to the Free
## Software Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA
## 02110-1301 USA, or see the FSF site: http://www.fsf.org.
## ---------------------------------------------------------------------------
### Show list of deleted documents
#set($dds = $xwiki.getDeletedDocuments($tdoc.fullName, $tdoc.locale))
#displayDeletedDocuments($dds, 'docs')

#if ($doc.documentReference.name == 'WebHome')
  ## Also display the list of terminal documents sharing the same location.
  ## eg. If the current document is: "A.B.WebHome", we should also display any deleted terminal page called "A.B".
  ## This is important because when the user delete a terminal document and go back to the location, she should see
  ## the page she have just deleted, and not an empty page because A.B.WebHome has never existed...
  #set($dds = $xwiki.getDeletedDocuments($tdoc.space, $tdoc.locale))
  #displayDeletedDocuments($dds, 'terminal-docs', 'core.recyclebin.showListTerminalPagesMsg')
#end

#*
 * Display the given list of deleted documents
 * @param $list the list to display
 * @param $className the name of the css class to apply to the list
 * @param $message (optional) the translation key for the message which introduce the list
 *#
#macro (displayDeletedDocuments $list $className $message)
  #if (!$message)
    #set ($message = 'core.recyclebin.showlistmsg')
  #end  
  #if($list && $list.size() > 0)
    #set ($canDelete = $list[0].canDelete())
    #set ($canRestore = $list[0].canUndelete())
    #set ($canView = $list[0].canView())
    <hr />
    <div class="centered $!className">
      <p class="recyclebin-message">$escapetool.xml($services.localization.render($message))</p>
      <table class="centered">
       <thead>
        <tr>
         <th>$escapetool.xml($services.localization.render('core.recyclebin.deleter'))</td>
         <th>$escapetool.xml($services.localization.render('core.recyclebin.deleteDate'))</td>
         #if ($canRestore)
           <th>$escapetool.xml($services.localization.render('core.recyclebin.batchId'))</td>
         #end
         <th colspan="2">$escapetool.xml($services.localization.render('core.recyclebin.actions'))</th>
        </tr>
       </thead>
       <tbody>
       #foreach($dd in $list)
        <tr>
         <td>$xwiki.getUserName($dd.getDeleter())</td>
         <td>
         #if ($canView)
           <a class="link-view" href="$doc.getURL('view', $escapetool.url({'rev' : "deleted:${dd.getId()}"}))">
             $xwiki.formatDate($dd.getDate())
           </a>
         #else
           $xwiki.formatDate($dd.getDate())
         #end
         </td>
         #if ($canRestore)
           <td><a href="$xwiki.getURL($dd.fullName, 'undelete', "id=${dd.id}&amp;showBatch=true")">$!{dd.batchId}</a></td>
         #end
         <td>
           #if($canRestore)
             <a href="$xwiki.getURL($dd.getFullName(), 'undelete', "form_token=$!{services.csrf.getToken()}&amp;id=$dd.getId()")" class="action-restore">
               $escapetool.xml($services.localization.render('core.recyclebin.restore'))
             </a>
           #end
         </td>
         <td>
          #if($canDelete)
           <a href="$xwiki.getURL($dd.getFullName(), 'delete', "form_token=$!{services.csrf.getToken()}&amp;id=$dd.getId()")"
            onclick="if (confirm('$escapetool.javascript($services.localization.render('core.recyclebin.completelyDeleteConfirm'))')) {this.href += '&amp;confirm=1'; return true;} return false;" class="action-delete">
            $escapetool.xml($services.localization.render('core.recyclebin.delete'))
           </a>
          #end
         </td>
        </tr>
       #end
       </tbody>
      </table>
    </div>
  #end
#end