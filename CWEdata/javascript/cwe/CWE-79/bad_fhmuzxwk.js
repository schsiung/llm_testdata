<%#
 Copyright 2010-2018 Jo-Philipp Wich <jo@mein.io>
 Licensed to the public under the Apache License 2.0.
-%>

<script type="text/javascript">//<![CDATA[
	function iface_reconnect(id) {
		XHR.halt();

		var d = document.getElementById(id + '-ifc-description');
		if (d) d.innerHTML = '<em><%:Interface is reconnecting...%></em>';

		(new XHR()).post('<%=url('admin/network/iface_reconnect')%>/' + id,
			{ token: '<%=token%>' }, XHR.run);
	}

	function iface_delete(ev) {
		if (!confirm(<%=luci.http.write_json(translate('Really delete this interface? The deletion cannot be undone! You might lose access to this device if you are connected via this interface'))%>)) {
			ev.preventDefault();
			return false;
		}

		ev.target.previousElementSibling.value = '1';
		return true;
	}

	var networks = [];

	document.querySelectorAll('[data-network]').forEach(function(n) {
		networks.push(n.getAttribute('data-network'));
	});

	function render_iface(ifc) {
		return E('span', { class: 'cbi-tooltip-container' }, [
			E('img', { 'class' : 'middle', 'src': '<%=resource%>/icons/%s%s.png'.format(
				ifc.is_alias ? 'alias' : ifc.type,
				ifc.is_up ? '' : '_disabled') }),
			E('span', { 'class': 'cbi-tooltip ifacebadge large' }, [
				E('img', { 'src': '<%=resource%>/icons/%s%s.png'.format(
					ifc.type, ifc.is_up ? '' : '_disabled') }),
				E('span', { 'class': 'left' }, [
					E('strong', '<%:Type%>: '), ifc.typename, E('br'),
					E('strong', '<%:Device%>: '), ifc.ifname, E('br'),
					E('strong', '<%:Connected%>: '), ifc.is_up ? '<%:yes%>' : '<%:no%>', E('br'),
					ifc.macaddr ? E('strong', '<%:MAC%>: ') : '',
					ifc.macaddr ? ifc.macaddr : '',
					ifc.macaddr ? E('br') : '',
					E('strong', '<%:RX%>: '), '%.2mB (%d <%:Pkts.%>)'.format(ifc.rx_bytes, ifc.rx_packets), E('br'),
					E('strong', '<%:TX%>: '), '%.2mB (%d <%:Pkts.%>)'.format(ifc.tx_bytes, ifc.tx_packets)
				])
			])
		]);
	}

	XHR.poll(5, '<%=url('admin/network/iface_status')%>/' + networks.join(','), null,
		function(x, ifcs)
		{
			if (ifcs)
			{
				for (var idx = 0; idx < ifcs.length; idx++)
				{
					var ifc = ifcs[idx];
					var html = '';

					var s = document.getElementById(ifc.id + '-ifc-devices');
					if (s)
					{
						while (s.firstChild)
							s.removeChild(s.firstChild);

						s.appendChild(render_iface(ifc));

						if (ifc.subdevices && ifc.subdevices.length)
						{
							var sifs = [ ' (' ];

							for (var j = 0; j < ifc.subdevices.length; j++)
								sifs.push(render_iface(ifc.subdevices[j]));

							sifs.push(')');

							s.appendChild(E('span', {}, sifs));
						}

						s.appendChild(E('br'));
						s.appendChild(E('small', {}, [ ifc.is_alias ? '<%:Alias of "%s"%>'.format(ifc.is_alias) : ifc.name ]));
					}

					var d = document.getElementById(ifc.id + '-ifc-description');
					if (d && ifc.proto && ifc.ifname)
					{
						var desc = null;

						if (ifc.is_dynamic)
							desc = '<%:Virtual dynamic interface%>';
						else if (ifc.is_alias)
							desc = '<%:Alias Interface%>';

						if (ifc.desc)
							desc = desc ? '%s (%s)'.format(desc, ifc.desc) : ifc.desc;

						html += String.format('<strong><%:Protocol%>:</strong> %h<br />', desc || '?');

						if (ifc.is_up)
						{
							html += String.format('<strong><%:Uptime%>:</strong> %t<br />', ifc.uptime);
						}


						if (!ifc.is_dynamic && !ifc.is_alias)
						{
							if (ifc.macaddr)
								html += String.format('<strong><%:MAC%>:</strong> %s<br />', ifc.macaddr);

							html += String.format(
								'<strong><%:RX%>:</strong> %.2mB (%d <%:Pkts.%>)<br />' +
								'<strong><%:TX%>:</strong> %.2mB (%d <%:Pkts.%>)<br />',
									ifc.rx_bytes, ifc.rx_packets,
									ifc.tx_bytes, ifc.tx_packets
							);
						}

						if (ifc.ipaddrs && ifc.ipaddrs.length)
						{
							for (var i = 0; i < ifc.ipaddrs.length; i++)
								html += String.format(
									'<strong><%:IPv4%>:</strong> %s<br />',
									ifc.ipaddrs[i]
								);
						}

						if (ifc.ip6addrs && ifc.ip6addrs.length)
						{
							for (var i = 0; i < ifc.ip6addrs.length; i++)
								html += String.format(
									'<strong><%:IPv6%>:</strong> %s<br />',
									ifc.ip6addrs[i]
								);
						}

						if (ifc.ip6prefix)
							html += String.format('<strong><%:IPv6-PD%>:</strong> %s<br />', ifc.ip6prefix);

						if (ifc.errors)
						{
							for (var i = 0; i < ifc.errors.length; i++)
								html += String.format(
									'<em class="error"><strong><%:Error%>:</strong> %h</em><br />',
									ifc.errors[i]
								);
						}

						d.innerHTML = html;
					}
					else if (d && !ifc.proto)
					{
						var e = document.getElementById(ifc.id + '-ifc-edit');
						if (e)
							e.disabled = true;

						d.innerHTML = String.format(
							'<em><%:Unsupported protocol type.%></em><br />' +
							'<a href="%h"><%:Install protocol extensions...%></a>',
								'<%=url("admin/system/packages")%>?query=luci-proto&display=available'
						);
					}
					else if (d && !ifc.ifname)
					{
						d.innerHTML = String.format(
							'<em><%:Network without interfaces.%></em><br />' +
							'<a href="<%=url("admin/network/network/%s")%>?tab.network.%s=physical"><%:Assign interfaces...%></a>',
								ifc.name, ifc.name
						);
					}
					else if (d)
					{
						d.innerHTML = '<em><%:Interface not present or not connected yet.%></em>';
					}
				}
			}
		}
	);
//]]></script>