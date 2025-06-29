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
#if (!$xwiki.hasAccessLevel('view', 'XWiki.Registration') || $xwiki.getDocument('XWiki.Registration').isNew())
  ## Display the static content included in this template, as there's no override in the wiki.
  <h1>$services.localization.render('core.register.title')</h1>
  #if (!$reg || $reg < 0)
    <p>$services.localization.render('core.register.welcome')</p>
  #end
  #if ($reg && $reg <= 0)
    #if ($reg == -2)
      #error($services.localization.render('core.register.passwordMismatch'))
    #elseif ($reg == -3)
      #error($services.localization.render('core.register.userAlreadyExists'))
    #elseif ($reg == -4)
      #error($services.localization.render('core.register.invalidUsername'))
    #elseif ($reg == -8)
      #error($services.localization.render('core.register.userAlreadyExists'))
    #else
      #error($services.localization.render('core.register.registerFailed', [$reg]))
    #end
  #elseif ($reg)
    #set ($xwname = "XWiki.${request.xwikiname}")
    #info($services.localization.render('core.register.successful', [$xwiki.getUserName($xwname),
      $escapetool.xml($request.xwikiname)]))
  #end
  #if (!$reg || $reg < 0)
    <form id="register" action="" method="post" class="xform third">
      <div>
        <input type="hidden" name="form_token" value="$!services.csrf.token" />
        <input type="hidden" name="register" value="1" />
        #set ($class = $xwiki.getClass('XWiki.XWikiUsers'))
        <input type="hidden" name="xredirect" value="$escapetool.xml($!request.xredirect)" />
        #set ($obj = $class.newObject())
        #set ($serverobj = $class.newObject())
        #set ($discard = $doc.use('XWiki.XWikiUsers'))
        #if ($request.register_first_name)
          $doc.set('first_name', $request.register_first_name)
        #end
        #if ($request.register_last_name)
          $doc.set('last_name', $request.register_last_name)
        #end
        <dl>
          #set ($prop = $class.first_name)
          <dt><label for="register_${prop.name}">$services.localization.render('core.register.firstName')</label></dt>
          <dd>$doc.displayEdit($prop, 'register_',  $obj)</dd>

          #set ($prop = $class.last_name)
          <dt><label for="register_${prop.name}">$services.localization.render('core.register.lastName')</label></dt>
          <dd>$doc.displayEdit($prop, 'register_',  $obj)</dd>

          <dt>
            <label for="register_username">
              $services.localization.render('core.register.username')
              <span class="xRequired">$services.localization.render('core.validation.required')</span>
            </label>
          </dt>
          <dd>
            <input name="xwikiname" id="register_username" type="text" size="20"
              onfocus="prepareName(document.forms.register);" />
          </dd>

          #set ($prop = $class.password)
          <dt>
            <label for="register_${prop.name}">
              $services.localization.render('core.register.password')
              <span class="xRequired">$services.localization.render('core.validation.required')</span>
            </label>
          </dt>
          <dd>$doc.displayEdit($prop, 'register_',  $obj).replace('type=', 'autocomplete="off" type=')</dd>

          <dt>
            <label for="register2_${prop.name}">
              $services.localization.render('core.register.passwordRepeat')
              <span class="xRequired">$services.localization.render('core.validation.required')</span>
            </label>
          </dt>
          <dd>$doc.displayEdit($prop, 'register2_',  $obj).replace('type=', 'autocomplete="off" type=')</dd>

          #set ($prop = $class.email)
          <dt><label for="register_${prop.name}">$services.localization.render('core.register.email')</label></dt>
          <dd>$doc.displayEdit($prop, 'register_',  $obj)</dd>
        </dl>
      </div>
      <div class="buttons">
        <span class="buttonwrapper">
          <input type="submit" value="$services.localization.render('core.register.submit')" class="button"/>
        </span>
      </div>
    </form>
  #end
#else
  ## An override exists in the wiki, display it.
  #set ($doc = $xwiki.getDocument('XWiki.Registration'))
  $xwiki.includeTopic('XWiki.Registration', false)
#end