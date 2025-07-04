@{layout('')}

<!DOCTYPE html>
<html>
<head>
	<title>@(Admin v@{config.version})</title>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=10" />
	<meta name="format-detection" content="telephone=no" />
	<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
	<meta name="robots" content="all,follow" />
	<link rel="stylesheet" href="//cdn.componentator.com/spa.min@16.css" />
	<script src="//cdn.componentator.com/spa.min@16.js"></script>
	@{import('head', '/admin.css', '/admin.js', 'favicon.ico')}
</head>
<body data-jc="exec,avatar">

	@{json(user, 'userprofile', (k,v) => k === 'password' ? undefined : v)}

	<div data-jc="LAZY autocomplete"></div>
	<div data-jc="LAZY calendar" data-jc-config="days:@(SU,MO,TU,WE,TH,FR,SO);months:@(January,February,March,April,May,June,July,August,September,October,November,December);today:@(Set date to today);firstday:0"></div>
	<div data-jc="LAZY confirm"></div>
	<div data-jc="LAZY features" data-jc-config="placeholder:@(Search ...)"></div>
	<div data-jc="LAZY snackbar" data-jc-config="button:@(Close);timeout:5500"></div>
	<div data-jc="LAZY suggestion" data-jc-config="placeholder:@(Search)"></div>

	<div data-jc="contextmenu"></div>
	<div data-jc="loading" class="hidden"></div>
	<div data-jc="mainprogress__common.progress"></div>
	<div data-jc="shortcuts"></div>
	<div data-jc="websocket" data-jc-config="reconnect:5000;url:[url]live/"></div>

	<header>
		<nav>
			<a href="/" title="@{'%name'}" target="_blank"><i class="fa fa-globe"></i></a>
			<button class="navigation exec" data-exec="navigation"><i class="fa fa-navicon"></i>@(Options)</button>
		</nav>
		<div class="title" data-bind="common.title__html:value"></div>
		<div class="user hidden-xs">
			<i class="fa fa-circle"></i><span data-bind="user.name__html:value"></span>
		</div>
		<div class="header-message">
			<i class="fa fa-bell"></i>
			<div>
				<div class="header-message-table">
					<div class="header-message-cell"></div>
				</div>
			</div>
		</div>
	</header>
	<div class="header-empty"></div>

	<div id="parts">
		<div data-jc="part__common.page__if:dashboard;url:/admin/pages/dashboard.html;reload:dashboard/reload;hidden:dashboard/hidden;cleaner:10"></div>
		<div data-jc="part__common.page__if:events;url:/admin/pages/events.html;reload:events/reload;hidden:events/hidden;cleaner:10"></div>
		<div data-jc="part__common.page__if:posts;url:/admin/pages/posts.html;reload:posts/reload;cleaner:10"></div>
		<div data-jc="part__common.page__if:notices;url:/admin/pages/notices.html;reload:notices/reload;cleaner:10"></div>
		<div data-jc="part__common.page__if:pages;url:/admin/pages/pages.html;reload:pages/reload;cleaner:10"></div>
		<div data-jc="part__common.page__if:widgets;url:/admin/pages/widgets.html;reload:widgets/reload;cleaner:10"></div>
		<div data-jc="part__common.page__if:newsletters;url:/admin/pages/newsletters.html;reload:newsletters/reload;cleaner:10"></div>
		<div data-jc="part__common.page__if:subscribers;url:/admin/pages/subscribers.html;reload:subscribers/reload;cleaner:10"></div>
		<div data-jc="part__common.page__if:settings;url:/admin/pages/settings.html;reload:settings/reload;cleaner:10"></div>
	</div>

	<div data-jc="importer__common.form3__if:filebrowser;url:[url]forms/filebrowser.html"></div>
	<div data-jc="importer__common.form3__if:widgets-import;url:[url]forms/widgets-import.html;cleaner:5"></div>
	<div data-jc="importer__common.form__if:widgets-globals;url:[url]forms/widgets-globals.html;cleaner:5"></div>
	<div data-jc="importer__common.form__if:pages-globals;url:[url]forms/pages-globals.html;cleaner:5"></div>

	<script>

		var user = PARSE($('#userprofile').html());
		var filebrowser = {};

		common.nav = [];
		common.nav.push({ role: 'Dashboard', title: '@(Dashboard)', url: '@{sitemap_url('admin')}dashboard/', value: 'dashboard', icon: 'dashboard' });
		common.nav.push({ role: 'Events', title: '@(Events)', url: '@{sitemap_url('admin')}events/', value: 'events', icon: 'clock-o' });
		common.nav.push({ role: 'Pages', title: '@(Pages)', url: '@{sitemap_url('admin')}pages/', value: 'pages', icon: 'file-text-o' });
		common.nav.push({ role: 'Widgets', title: '@(Widgets)', url: '@{sitemap_url('admin')}widgets/', value: 'widgets', icon: 'plug' });
		common.nav.push({ role: 'Posts', title: '@(Posts)', url: '@{sitemap_url('admin')}posts/', value: 'posts', icon: 'newspaper-o' });
		common.nav.push({ role: 'Notices', title: '@(Notices)', url: '@{sitemap_url('admin')}notices/', value: 'notices', icon: 'bullhorn' });
		common.nav.push({ role: 'Newsletters', title: '@(Newsletters)', url: '@{sitemap_url('admin')}newsletters/', value: 'newsletters', icon: 'envelope-o' });
		common.nav.push({ role: 'Subscribers', title: '@(Subscribers)', url: '@{sitemap_url('admin')}subscribers/', value: 'subscribers', icon: 'address-book-o' });
		common.nav.push({ role: 'Settings', title: '@(Settings)', url: '@{sitemap_url('admin')}settings/', value: 'settings', icon: 'cog' });

		ENV('url', '@{sitemap_url('admin')}');
		ENV('roles', 'Dashboard,Events,Newsletters,Notices,Pages,Posts,Settings,Subscribers,Widgets');

		MAKE('common', function(obj) {

			obj.name = document.title;
			obj.notifications = {};

			var tmp = $('.header-message');
			obj.notifications.ui = { el: tmp, icon: tmp.find('> .fa'), body: tmp.find('.header-message-cell') };
			obj.notifications.messages = []; // messages from notifications
			obj.notifications.running = false;
			obj.notifications.template = '<b>{0}</b>{1}';

			obj.componentator = @{if G.config.componentator !== false}true@{else}false@{fi};

			// Navigation
			obj.page = '';
			obj.form = '';
			obj.form2 = ''; // Form 2nd level
			obj.form3 = ''; // Form 3nd level
		});

		ON('page', function(item) {
			SET('common.title', '<i class="fa fa-{icon}"></i>{title}'.arg(item));
			document.title = common.name + ': ' + item.title;
			setTimeout(refresh_height, 500);
			setTimeout(refresh_height, 1000);
		});

		function navigation(el) {

			var items = [];

			common.nav.forEach(function(item) {
				(user.sa || !user.roles.length || user.roles.indexOf(item.role) !== -1) && items.push({ name: item.title, icon: item.icon, url: item.url });
			});

			items.push({ name: '@(Sign out)', icon: 'power-off', signout: true });

			SETTER('contextmenu', 'show', 'left', el, items, function(item) {
				if (item.signout) {
					COOKIES.rem('@{'%admin-cookie'}');
					location.reload(true);
				} else
					REDIRECT(item.url);
			}, 8, 5);

		}

		Tangular.register('time', function(value) {

			if (!value)
				return;

			var diff = Date.now() - value.parseDate().getTime();
			var minutes = ((diff / 1000) / 60) >> 0;

			if (minutes <= 1) {
				var seconds = (diff / 1000) >> 0;
				if (seconds < 60)
					return @(seconds + ' ' + Tangular.helpers.pluralize(seconds >> 0, 'seconds', 'second', 'seconds', 'seconds') + ' ago');
			}

			if (minutes < 60)
				return minutes < 3 ? '@(now)' : @(minutes + ' minutes ago');

			var hours = (minutes / 60) >> 0;
			if (hours < 24)
				return @(hours + ' ' + Tangular.helpers.pluralize(hours, 'hours', 'hour', 'hours', 'hours') + ' ago');

			var days = (hours / 24) >> 0;
			if (days < 30)
				return @(days + ' ' + Tangular.helpers.pluralize(days, 'days', 'day', 'days', 'days') + ' ago');

			var months = (days / 29) >> 0;
			if (months < 12)
				return @(months + ' ' + Tangular.helpers.pluralize(months, 'months', 'month', 'months', 'months') + ' ago');

			var years = (months / 12) >> 0;
			return @(years + ' ' + Tangular.helpers.pluralize(years, 'years', 'year', 'years', 'years') + ' ago');
		});

		ON('message', function(message) {
			if (message.type === 'visitor') {
				EMIT('visitor', message.message);
			} else {
				common.notifications.messages.push(message);
				!common.notifications.running && refresh_notifications();
			}
		});

		ON('online', function(is) {
			$('.user .fa').tclass('green', is).tclass('red', !is);
		});

		function refresh_notifications() {
			var item = common.notifications.messages.shift();

			if (item === undefined) {
				common.notifications.ui.el.rclass('header-message-visible');
				common.notifications.running = false;
				return;
			}

			var msg = '';
			var t = common.notifications.template;

			if (item.message)
				item.message = Thelpers.encode(item.message);


			if (item.message)
				item.message = Thelpers.encode(item.message);

			switch (item.type) {

				case 'navigation.save':
					msg = t.format('@(Navigation has been saved)', item.message);
					break;

				case 'navigations/edit':
				case 'pages/edit':
				case 'posts/edit':
				case 'newsletters/edit':
				case 'notices/edit':
				case 'widgets/edit':

					if (user.name !== item.user) {
						var tmp = item.type.substring(0, item.type.indexOf('/'));
						if (tmp === 'navigations')
							tmp = 'pages-navigation';
						else
							tmp += '-form';
						if (tmp === common.form)
							SETTER('snackbar', 'warning', '@(<b>IMPORTANT:</b> The user called "<b>{0}</b>" is editing same item.)'.format(user.name));
					}

					refresh_notifications();
					return;

				case 'newsletters/save':
					msg = t.format('@(Nesletter has been saved)', item.message);
					break;
				case 'newsletters/percentage':
					msg = t.format('@(Sending of newsletter)', '@(Sent: {0}%)'.format(item.message));
					break;
				case 'newsletters/sent':
					msg = t.format('@(Newsletter has been sent)', item.message);
					break;
				case 'subscribers/save':
					msg = t.format('@(Subscriber has been saved)', item.message);
					break;
				case 'subscribers/unsubscribe':
					msg = t.format('@(Unsubscribed)', item.message);
					break;
				case 'files/clear':
					msg = t.format('@(Useless files have been removed)', '@(Count of files: {0}x)'.format(item.message));
					common.form3 === 'filebrowser' && EXEC('filebrowser_refresh');
					break;
				case 'contacts/create':
					msg = t.format('@(New contact form received)', '@(From: {0})'.format(item.message));
					break;
				case 'pages/save':
					msg = t.format('@(Page has been saved)', item.message);
					break;
				case 'posts/save':
					msg = t.format('@(Post has been saved)', item.message);
					break;
				case 'notices/save':
					msg = t.format('@(Notice has been saved)', item.message);
					break;
				case 'widgets/save':
					msg = t.format('@(Widget has been saved)', item.message);
					break;
				case 'admin/login':
					msg = t.format('@(Administrator has been logged)', item.message);
					break;
				case 'settings/save':
					msg = '@(Settings have been updated.)';
					break;
				case 'success':
				case 'warning':
					SETTER('snackbar', item.type, item.message);
					break;
				default:
					if (item.TYPE === 'event')
						msg = t.format(item.type, item.message);
					break;
			}

			msg = { type: item.type, body: msg };
			EMIT('notification', msg);

			if (msg && msg.body) {
				!common.notifications.running && common.notifications.ui.el.aclass('header-message-visible');
				common.notifications.running = true;
				msg && common.notifications.ui.body.html(msg.body);
			}

			setTimeout(refresh_notifications, item.delay || 3000);
		}

		SETTER(true, 'shortcuts', 'register', 'ESC', function() {
			if (common.form3)
				SET('common.form3', '');
			else if (window.cmseditor && cmseditor.form)
				SET('cmseditor.form', '');
			else if (common.form2)
				SET('common.form2', '');
			else if (common.form) {
				switch (common.form) {
					case 'pages-form':
					case 'products-form':
					case 'newsletters-form':
					case 'widgets-form':
					case 'notices-form':
					case 'posts-form':
					case 'pages-redirects':
						var fields = MODIFIED(common.page + '.form').join(',');
						if (fields.indexOf('.body') !== -1) {
							SETTER('confirm', 'show', '@(Are you sure you want to close this form without saving?)', ['@(Yes)', '@(Cancel)'], function(index) {
								!index && SET('common.form', '');
							});
							return;
						}
						break;
				}
				SET('common.form', '');
			}
		});

		SETTER(true, 'shortcuts', 'register', 'F1', function(e) {

			var items = [];

			common.nav.forEach(function(item) {
				(user.sa || !user.roles.length || user.roles.indexOf(item.role) !== -1) && items.push({ name: item.title, icon: item.icon, url: item.url });
			});

			items.push({ name: '@(Sign out)', icon: 'power-off', signout: true });

			SETTER('features', 'show', items, function(item) {
				if (item.signout) {
					COOKIES.rem('@{'%admin-cookie'}');
					location.reload(true);
				} else {
					window.cmseditor && cmseditor.form && SET('cmseditor.form', '');
					common.form3 && SET('common.form3', '');
					common.form2 && SET('common.form2', '');
					common.form && SET('common.form', '');
					REDIRECT(item.url);
				}
			}, true);
		}, true);

		ROUTE('[url]', function() {
			var items = common.nav;
			for (var i = 0, length = items.length; i < length; i++) {
				var item = items[i];
				if (user.sa || !user.roles.length || (user.roles.indexOf(item.role) !== -1)) {
					REDIRECT(item.url);
					return;
				}
			}
		});

		common.nav.forEach(function(item) {
			ROUTE(item.url, function() {
				EMIT('page', item);
				SET('common.page', item.value);
			});
		});

	</script>

	@{section('admin')}
	@{components('admin')}

</body>
</html>