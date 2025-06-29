<!doctype html>
<html lang="en">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- CSS -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
  <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-LRlmVvLKVApDVGuspQFnRQJjkv0P7/YFrw84YYQtmYG4nK8c+M+NlmYDCv0rKWpG" crossorigin="anonymous">
  <link rel="stylesheet" href="styles.css">
  <script src="main.js"></script>

  <!-- Favicon -->
  <link rel="icon" type="image/png" sizes="192x192" href="/assets/android-icon-192x192.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="96x96" href="/assets/favicon-96x96.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png">

  <title>systeminformation</title>

</head>

<body>
  <nav class="nav">
    <div class="container">
      <a href="."><img class="logo float-left" src="assets/logo.png">
        <div class="title float-left">systeminformation</div>
      </a>
      <div class="text float-right github"><a href="https://github.com/sebhildebrandt/systeminformation">View on Github <i class="fab fa-github"></i></a></div>
      <div class="text float-right todocs"><a href="./#docs">Docs Overview</a></div>
    </div>
  </nav>

  <section class="container">
    <div class="row">
      <div class="col-12 col-md-4 col-lg-3 col-xl-2 menu" id="menu">
      </div>
      <div class="col-12 col-md-8 col-lg-9 col-xl-10 content">
        <div class="row">
          <div class="col-12 sectionheader">
            <div class="title">Version History</div>
            <div class="text">
              <h3>Major Changes - Version 4</h3>
              <h4>New Functions</h4>
              <ul>
                <li><span class="code">chassis()</span> chassis information</li>
                <li><span class="code">vboxInfo()</span> detailed virtualBox VM information</li>
                <li><span class="code">wifiNetworks()</span> detailed information about available wifi networks</li>
              </ul>
              <h4>Breaking Changes</h4>
              <ul>
                <li><span class="code">networkStats()</span>: will provide an <strong>array</strong> of stats for all given interfaces. In previous versions only one interface was provided as a parameter. Pass '*' for all interfaces</li>
                <li><span class="code">networkStats()</span>: <span class="code">rx</span> and <span class="code">tx</span> changed to <span class="code">rx_bytes</span> and <span class="code">tx_bytes</span></li>
                <li><span class="code">dockerContainerStats()</span> will provide an <strong>array</strong> of stats for all given docker containers. In previous versions only one interface was provided as a parameter. Pass '*' for all docker containers</li>
              </ul>
              <h4>Other Changes</h4>
              <ul>
                <li><span class="code">system()</span>: optimized system detection (e.g. new Raspberry Pi models, ...)</li>
                <li><span class="code">system(), bios(), baseboard()</span>: information also as non-root (linux)</li>
                <li><span class="code">graphics()</span>: added pip, pip3, virtualBox, </li>
                <li><span class="code">versions()</span>: better controller and display detection, fixes</li>
                <li><span class="code">networkInterfaces()</span>: optimization, fixes</li>
                <li><span class="code">networkStats()</span> added <span class="code">operstate</span>, <span class="code">type</span>, <span class="code">duplex</span>, <span class="code">mtu</span>, <span class="code">speed</span>, <span class="code">carrierChanges</span></li>
                <li>added TypeScript definitions </li>
              </ul>
              <p><strong>Be aware</strong>, that the new version 4.x is <strong>NOT fully backward compatible</strong> to version 3.x ...</p>

              <h3>Major (breaking) Changes - Version 3</h3>
              <ul>
                <li>works only with <span class="code">node.js</span> v4.0.0 and above (using now internal ES6 promise function, arrow functions, ...)</li>
                <li><strong>Promises</strong>. As you can see in the documentation, you can now also use it in a promise oriented way. But callbacks are still supported.</li>
                <li><strong>Async/Await</strong>. Due to the promises support, systeminformation also works perfectly with the `async/await` pattern (available in <span class="code">node.js</span> <strong>v7.6.0</strong> and above). See example in the docs.</li>
              </ul>
              <h3>Full version history</h3>
              <table class="table table-sm table-bordered table-striped">
                <thead>
                  <tr>
                    <th scope="col">Version</th>
                    <th scope="col">Date</th>
                    <th scope="col">Comment</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">4.31.1</th>
                    <td>2020-12-06</td>
                    <td><span class="code">inetLatency()</span> command injection vulnaribility fix</td>
                  </tr>
                  <tr>
                    <th scope="row">4.31.0</th>
                    <td>2020-12-06</td>
                    <td><span class="code">osInfo()</span> added FQDN</td>
                  </tr>
                  <tr>
                    <th scope="row">4.30.11</th>
                    <td>2020-12-02</td>
                    <td><span class="code">cpu()</span> bugfix speed parsing</td>
                  </tr>
                  <tr>
                    <th scope="row">4.30.10</th>
                    <td>2020-12-01</td>
                    <td><span class="code">cpu()</span> handled speed parsing error (Apple Silicon)</td>
                  </tr>
                  <tr>
                    <th scope="row">4.30.9</th>
                    <td>2020-12-01</td>
                    <td><span class="code">cpu()</span> corrected processor names (Raspberry Pi)</td>
                  </tr>
                  <tr>
                    <th scope="row">4.30.8</th>
                    <td>2020-11-30</td>
                    <td><span class="code">fsSize()</span> catch error (mac OS)</td>
                  </tr>
                  <tr>
                    <th scope="row">4.30.7</th>
                    <td>2020-11-29</td>
                    <td><span class="code">cpuTemperature()</span> rewrite hwmon parsing (linux)</td>
                  </tr>
                  <tr>
                    <th scope="row">4.30.6</th>
                    <td>2020-11-27</td>
                    <td><span class="code">wmic</span> added default windows path</td>
                  </tr>
                  <tr>
                    <th scope="row">4.30.5</th>
                    <td>2020-11-26</td>
                    <td>adapted security update (prototype pollution prevention)</td>
                  </tr>
                  <tr>
                    <th scope="row">4.30.4</th>
                    <td>2020-11-25</td>
                    <td>reverted Object.freeze because it broke some projects</td>
                  </tr>
                  <tr>
                    <th scope="row">4.30.3</th>
                    <td>2020-11-25</td>
                    <td>security update (prototype pollution prevention) Object.freeze</td>
                  </tr>
                  <tr>
                    <th scope="row">4.30.2</th>
                    <td>2020-11-25</td>
                    <td>security update (prototype pollution prevention)</td>
                  </tr>
                  <tr>
                    <th scope="row">4.30.1</th>
                    <td>2020-11-12</td>
                    <td>updated docs</td>
                  </tr>
                  <tr>
                    <th scope="row">4.30.0</th>
                    <td>2020-11-11</td>
                    <td><span class="code">get()</span> added possibility to provide parameters</td>
                  </tr>
                  <tr>
                    <th scope="row">4.29.3</th>
                    <td>2020-11-09</td>
                    <td><span class="code">blockdevices()</span> catch error adapted</td>
                  </tr>
                  <tr>
                    <th scope="row">4.29.2</th>
                    <td>2020-11-09</td>
                    <td><span class="code">blockdevices()</span> catch error</td>
                  </tr>
                  <tr>
                    <th scope="row">4.29.1</th>
                    <td>2020-11-08</td>
                    <td><span class="code">system()</span> better parsing Raspberry Pi revision codes</td>
                  </tr>
                  <tr>
                    <th scope="row">4.29.0</th>
                    <td>2020-11-08</td>
                    <td><span class="code">fsSize()</span> correct fs type detection macOS (HFS, APFS, NFS)</td>
                  </tr>
                  <tr>
                    <th scope="row">4.28.1</th>
                    <td>2020-11-05</td>
                    <td>code cleanup, removing debug console.log()</td>
                  </tr>
                  <tr>
                    <th scope="row">4.28.0</th>
                    <td>2020-11-04</td>
                    <td><span class="code">graphics()</span> added deviceName (windows)</td>
                  </tr>
                  <tr>
                    <th scope="row">4.27.11</th>
                    <td>2020-10-26</td>
                    <td><span class="code">inetChecksite()</span> fixed vulnerability: command injection</td>
                  </tr>
                  <tr>
                    <th scope="row">4.27.10</th>
                    <td>2020-10-16</td>
                    <td><span class="code">dockerContainers()</span> resolved hanging issue</td>
                  </tr>
                  <tr>
                    <th scope="row">4.27.9</th>
                    <td>2020-10-13</td>
                    <td><span class="code">networkInterfaces()</span> loopback internal detection (windows)</td>
                  </tr>
                  <tr>
                    <th scope="row">4.27.8</th>
                    <td>2020-10-08</td>
                    <td>windows codepages partial fix</td>
                  </tr>
                  <tr>
                    <th scope="row">4.27.7</th>
                    <td>2020-10-05</td>
                    <td>updated typescript typings, minor fixes</td>
                  </tr>
                  <tr>
                    <th scope="row">4.27.6</th>
                    <td>2020-10-02</td>
                    <td><span class="code">get()</span> fixed when results are in arrays</td>
                  </tr>
                  <tr>
                    <th scope="row">4.27.5</th>
                    <td>2020-09-18</td>
                    <td><span class="code">cpuTemperature()</span> fixed try catch (linux)</td>
                  </tr>
                  <tr>
                    <th scope="row">4.27.4</th>
                    <td>2020-09-16</td>
                    <td><span class="code">networkInterfaceDefault()</span> optimization (macOS)</td>
                  </tr>
                  <tr>
                    <th scope="row">4.27.3</th>
                    <td>2020-08-26</td>
                    <td>updated typescript typings</td>
                  </tr>
                  <tr>
                    <th scope="row">4.27.2</th>
                    <td>2020-08-26</td>
                    <td>fixed issue breaking node v4 compatibility</td>
                  </tr>
                  <tr>
                    <th scope="row">4.27.1</th>
                    <td>2020-08-25</td>
                    <td><span class="code">networkStats()</span> fixed packages dropped (linux)</td>
                  </tr>
                  <tr>
                    <th scope="row">4.27.0</th>
                    <td>2020-08-24</td>
                    <td><span class="code">observe()</span> added function to observe/watch system parameters</td>
                  </tr>
                  <tr>
                    <th scope="row">4.26.12</th>
                    <td>2020-08-21</td>
                    <td><span class="code">versions()</span> fixed issue windows</td>
                  </tr>
                  <tr>
                    <th scope="row">4.26.11</th>
                    <td>2020-08-20</td>
                    <td><span class="code">cpuTemperature()</span> fixed issue windows</td>
                  </tr>
                  <tr>
                    <th scope="row">4.26.10</th>
                    <td>2020-07-16</td>
                    <td><span class="code">networkStats()</span> fixed issue blocking windows</td>
                  </tr>
                  <tr>
                    <th scope="row">4.26.9</th>
                    <td>2020-06-06</td>
                    <td><span class="code">networkStats()</span> fixed comparison issue windows</td>
                  </tr>
                  <tr>
                    <th scope="row">4.26.8</th>
                    <td>2020-06-06</td>
                    <td><span class="code">networkInterfaces()</span> fixed caching</td>
                  </tr>
                  <tr>
                    <th scope="row">4.26.7</th>
                    <td>2020-06-06</td>
                    <td><span class="code">cpuTemperature()</span> fixed raspberry pi sensors issue</td>
                  </tr>
                  <tr>
                    <th scope="row">4.26.6</th>
                    <td>2020-06-03</td>
                    <td><span class="code">diskLayout()</span> fixed issue</td>
                  </tr>
                  <tr>
                    <th scope="row">4.26.5</th>
                    <td>2020-05-27</td>
                    <td><span class="code">cpuTemperature()</span> optimizes scanning AMD linux sensors</td>
                  </tr>
                  <tr>
                    <th scope="row">4.26.4</th>
                    <td>2020-05-21</td>
                    <td><span class="code">cpuTemperature()</span> fix (BSD), code cleanup</td>
                  </tr>
                  <tr>
                    <th scope="row">4.26.3</th>
                    <td>2020-05-20</td>
                    <td>Updated documentation</td>
                  </tr>
                  <tr>
                    <th scope="row">4.26.2</th>
                    <td>2020-05-19</td>
                    <td><span class="code">processes()</span> memory leak fix, security issue fix</td>
                  </tr>
                  <tr>
                    <th scope="row">4.26.1</th>
                    <td>2020-05-13</td>
                    <td>code cleanup </td>
                  </tr>
                  <tr>
                    <th scope="row">4.26.0</th>
                    <td>2020-05-12</td>
                    <td><span class="code">diskLayout()</span> added full smart data (where supported) </td>
                  </tr>
                  <tr>
                    <th scope="row">4.25.2</th>
                    <td>2020-05-12</td>
                    <td><span class="code">getDynamicData()</span> added wifiNetworks() </td>
                  </tr>
                  <tr>
                    <th scope="row">4.25.1</th>
                    <td>2020-05-07</td>
                    <td><span class="code">get()</span> minor bounds test fix, updated docs </td>
                  </tr>
                  <tr>
                    <th scope="row">4.25.0</th>
                    <td>2020-05-07</td>
                    <td><span class="code">get()</span> added function to get partial system info </td>
                  </tr>
                  <tr>
                    <th scope="row">4.24.2</th>
                    <td>2020-05-06</td>
                    <td><span class="code">cpu()</span> fix BSD, <span class="code">networkStats()</span> fix BSD </td>
                  </tr>
                  <tr>
                    <th scope="row">4.24.1</th>
                    <td>2020-05-03</td>
                    <td><span class="code">processes()</span> fix parsing command and params (linux, macOS) </td>
                  </tr>
                  <tr>
                    <th scope="row">4.24.0</th>
                    <td>2020-05-01</td>
                    <td><span class="code">networkInterfaces()</span> added netmask ip4 and ip6</td>
                  </tr>
                  <tr>
                    <th scope="row">4.23.10</th>
                    <td>2020-05-01</td>
                    <td><span class="code">cpuTemperature()</span> optimized parsing linux</td>
                  </tr>
                  <tr>
                    <th scope="row">4.23.9</th>
                    <td>2020-04-29</td>
                    <td><span class="code">currentLoad()</span> workarround for no os.cpus info</td>
                  </tr>
                  <tr>
                    <th scope="row">4.23.8</th>
                    <td>2020-04-26</td>
                    <td><span class="code">getMacAddresses()</span> fix added try catch</td>
                  </tr>
                  <tr>
                    <th scope="row">4.23.7</th>
                    <td>2020-04-26</td>
                    <td><span class="code">getCpuCurrentSpeedSync()</span> workarround fix</td>
                  </tr>
                  <tr>
                    <th scope="row">4.23.6</th>
                    <td>2020-04-25</td>
                    <td><span class="code">networkGatewayDefault()</span> bugfix no interfaces</td>
                  </tr>
                  <tr>
                    <th scope="row">4.23.5</th>
                    <td>2020-20-04</td>
                    <td>updated docs</td>
                  </tr>
                  <tr>
                    <th scope="row">4.23.4</th>
                    <td>2020-04-20</td>
                    <td><span class="code">users()</span> optimized parseDateTime function</td>
                  </tr>
                  <tr>
                    <th scope="row">4.23.3</th>
                    <td>2020-04-09</td>
                    <td>refactored to avoid <span class="code">cat</span></td>
                  </tr>
                  <tr>
                    <th scope="row">4.23.2</th>
                    <td>2020-04-08</td>
                    <td><span class="code">cpu()</span> fixed getting base speed Ryzen CPUs</td>
                  </tr>
                  <tr>
                    <th scope="row">4.23.1</th>
                    <td>2020-03-11</td>
                    <td><span class="code">diskLayout()</span> optimized detection (linux)</td>
                  </tr>
                  <tr>
                    <th scope="row">4.23.0</th>
                    <td>2020-03-08</td>
                    <td><span class="code">versions()</span> added param to specify which program/lib versions to detect</td>
                  </tr>
                  <tr>
                    <th scope="row">4.22.7</th>
                    <td>2020-03-08</td>
                    <td><span class="code">diskLayout()</span> fixed detection (linux)</td>
                  </tr>
                  <tr>
                    <th scope="row">4.22.6</th>
                    <td>2020-03-08</td>
                    <td><span class="code">network()</span> fixed DHCP detection (linux)</td>
                  </tr>
                  <tr>
                    <th scope="row">4.22.5</th>
                    <td>2020-03-04</td>
                    <td><span class="code">graphics()</span> fixed vram (macOS)</td>
                  </tr>
                  <tr>
                    <th scope="row">4.22.4</th>
                    <td>2020-03-01</td>
                    <td><span class="code">versions()</span> added dotnet, fix typings</td>
                  </tr>
                  <tr>
                    <th scope="row">4.22.3</th>
                    <td>2020-02-20</td>
                    <td><span class="code">memLayout()</span> code cleanup</td>
                  </tr>
                  <tr>
                    <th scope="row">4.22.2</th>
                    <td>2020-02-19</td>
                    <td><span class="code">memLayout()</span> raspberry PI mem voltage fix</td>
                  </tr>
                  <tr>
                    <th scope="row">4.22.1</th>
                    <td>2020-02-17</td>
                    <td><span class="code">memLayout()</span> raspberry PI support</td>
                  </tr>
                  <tr>
                    <th scope="row">4.22.0</th>
                    <td>2020-02-17</td>
                    <td><span class="code">services()</span> added pids (windows)</td>
                  </tr>
                  <tr>
                    <th scope="row">4.21.3</th>
                    <td>2020-02-16</td>
                    <td><span class="code">versions()</span> fixed versions mysql (macOS)</td>
                  </tr>
                  <tr>
                    <th scope="row">4.21.2</th>
                    <td>2020-02-11</td>
                    <td><span class="code">networkConnections()</span> fixed linux (debian) issue</td>
                  </tr>
                  <tr>
                    <th scope="row">4.21.1</th>
                    <td>2020-01-31</td>
                    <td><span class="code">networkGatewayDefault()</span> fixed windows 7 issue</td>
                  </tr>
                  <tr>
                    <th scope="row">4.21.0</th>
                    <td>2020-01-27</td>
                    <td>added <span class="code">npx</span> compatibility</td>
                  </tr>
                  <tr>
                    <th scope="row">4.20.1</th>
                    <td>2020-01-26</td>
                    <td><span class="code">battery()</span> code refactoring, cleanup, updated docs</td>
                  </tr>
                  <tr>
                    <th scope="row">4.20.0</th>
                    <td>2020-01-25</td>
                    <td><span class="code">battery()</span> added designcapacity, voltage, unit</td>
                  </tr>
                  <tr>
                    <th scope="row">4.19.4</th>
                    <td>2020-01-24</td>
                    <td><span class="code">mem()</span> prevent log messages</td>
                  </tr>
                  <tr>
                    <th scope="row">4.19.3</th>
                    <td>2020-01-24</td>
                    <td><span class="code">memLayout()</span> bank info fix macOS</td>
                  </tr>
                  <tr>
                    <th scope="row">4.19.2</th>
                    <td>2020-01-19</td>
                    <td><span class="code">cpu()</span> multi-processor fix windows</td>
                  </tr>
                  <tr>
                    <th scope="row">4.19.1</th>
                    <td>2020-01-14</td>
                    <td><span class="code">osInfo()</span> uefi fix windows</td>
                  </tr>
                  <tr>
                    <th scope="row">4.19.0</th>
                    <td>2020-01-12</td>
                    <td><span class="code">osInfo()</span> uefi (OS uses UEFI on startup)</td>
                  </tr>
                  <tr>
                    <th scope="row">4.18.3</th>
                    <td>2020-01-10</td>
                    <td><span class="code">fsSize()</span> fix excluding loop/snap devices</td>
                  </tr>
                  <tr>
                    <th scope="row">4.18.2</th>
                    <td>2020-01-10</td>
                    <td><span class="code">memLayout()</span> fix memsize linux (modules >= 32 GB)</td>
                  </tr>
                  <tr>
                    <th scope="row">4.18.1</th>
                    <td>2020-01-07</td>
                    <td>updated docs</td>
                  </tr>
                  <tr>
                    <th scope="row">4.18.0</th>
                    <td>2020-01-07</td>
                    <td><span class="code">networkInterfaces()</span> added dhcp for mac OS, added dhcp linux fallback</td>
                  </tr>
                  <tr>
                    <th scope="row">4.17.3</th>
                    <td>2020-01-05</td>
                    <td>code cleanup</td>
                  </tr>
                  <tr>
                    <th scope="row">4.17.2</th>
                    <td>2020-01-05</td>
                    <td><span class="code">cpu().speed</span> AMD base frequency and fix (0.00)</td>
                  </tr>
                  <tr>
                    <th scope="row">4.17.1</th>
                    <td>2020-01-04</td>
                    <td><span class="code">fsSize()</span> alpine linux support</td>
                  </tr>
                  <tr>
                    <th scope="row">4.17.0</th>
                    <td>2020-01-04</td>
                    <td><span class="code">networkInterfaces()</span> added dhcp, dnsSuffix, ieee8021xAuth, ieee8021xState</td>
                  </tr>
                  <tr>
                    <th scope="row">4.16.1</th>
                    <td>2020-01-01</td>
                    <td><span class="code">networkInterfaces()</span> bug fix (mac OS)</td>
                  </tr>
                  <tr>
                    <th scope="row">4.16.0</th>
                    <td>2019-11-27</td>
                    <td><span class="code">networkGatewayDefault()</span> added</td>
                  </tr>
                  <tr>
                    <th scope="row">4.15.3</th>
                    <td>2019-11-10</td>
                    <td><span class="code">type definitions</span> and docs update</td>
                  </tr>
                  <tr>
                    <th scope="row">4.15.2</th>
                    <td>2019-11-10</td>
                    <td><span class="code">mem()</span> improved calculation linux</td>
                  </tr>
                  <tr>
                    <th scope="row">4.15.1</th>
                    <td>2019-11-10</td>
                    <td><span class="code">diskLayout()</span> added support for older lsblk versions (linux)</td>
                  </tr>
                  <tr>
                    <th scope="row">4.15.0</th>
                    <td>2019-11-10</td>
                    <td><span class="code">cpu()</span> added governor (linux)</td>
                  </tr>
                  <tr>
                    <th scope="row">4.14.17</th>
                    <td>2019-10-22</td>
                    <td><span class="code">graphics()</span> improved display detection (windows)</td>
                  </tr>
                  <tr>
                    <th scope="row">4.14.16</th>
                    <td>2019-10-19</td>
                    <td><span class="code">graphics()</span> improved display detection (windows)</td>
                  </tr>
                  <tr>
                    <th scope="row">4.14.15</th>
                    <td>2019-10-18</td>
                    <td><span class="code">graphics()</span> fallback display detection (windows)</td>
                  </tr>
                  <tr>
                    <th scope="row">4.14.14</th>
                    <td>2019-10-18</td>
                    <td><span class="code">powershell()</span> fixed error handling (windows)</td>
                  </tr>
                  <tr>
                    <th scope="row">4.14.13</th>
                    <td>2019-10-15</td>
                    <td><span class="code">networkConnections()</span> fixed parsing (linux)</td>
                  </tr>
                  <tr>
                    <th scope="row">4.14.12</th>
                    <td>2019-10-14</td>
                    <td><span class="code">getCpu()</span> fixed multi socket detection (linux)</td>
                  </tr>
                  <tr>
                    <th scope="row">4.14.11</th>
                    <td>2019-10-01</td>
                    <td><span class="code">type definitions</span> bug dockerInfo</td>
                  </tr>
                  <tr>
                    <th scope="row">4.14.10</th>
                    <td>2019-10-01</td>
                    <td><span class="code">type definitions</span> bug fix memLayout</td>
                  </tr>
                  <tr>
                    <th scope="row">4.14.9</th>
                    <td>2019-10-01</td>
                    <td><span class="code">processLoad()</span> fix windows</td>
                  </tr>
                  <tr>
                    <th scope="row">4.14.8</th>
                    <td>2019-08-23</td>
                    <td><span class="code">parseDateTime()</span> fix coding error</td>
                  </tr>
                  <tr>
                    <th scope="row">4.14.7</th>
                    <td>2019-08-22</td>
                    <td><span class="code">battery()</span> windows acconnected improvement</td>
                  </tr>
                  <tr>
                    <th scope="row">4.14.6</th>
                    <td>2019-08-22</td>
                    <td><span class="code">users()</span> improved date time parsing</td>
                  </tr>
                  <tr>
                    <th scope="row">4.14.5</th>
                    <td>2019-08-22</td>
                    <td><span class="code">fsSize()</span> fix windows size as number</td>
                  </tr>
                  <tr>
                    <th scope="row">4.14.4</th>
                    <td>2019-07-20</td>
                    <td><span class="code">versions()</span> fix pip, pip3</td>
                  </tr>
                  <tr>
                    <th scope="row">4.14.3</th>
                    <td>2019-07-09</td>
                    <td><span class="code">system()</span> sku fix windows</td>
                  </tr>
                  <tr>
                    <th scope="row">4.14.2</th>
                    <td>2019-07-07</td>
                    <td><span class="code">networkConnections()</span> pid linux fix NAN</td>
                  </tr>
                  <tr>
                    <th scope="row">4.14.1</th>
                    <td>2019-07-04</td>
                    <td><span class="code">graphics()</span> added display position windows</td>
                  </tr>
                  <tr>
                    <th scope="row">4.14.0</th>
                    <td>2019-07-03</td>
                    <td><span class="code">processes()</span> added process params and path</td>
                  </tr>
                  <tr>
                    <th scope="row">4.13.2</th>
                    <td>2019-07-02</td>
                    <td><span class="code">versions()</span> fix getting all versions</td>
                  </tr>
                  <tr>
                    <th scope="row">4.13.1</th>
                    <td>2019-07-01</td>
                    <td><span class="code">versions()</span> gcc fix mac OS</td>
                  </tr>
                  <tr>
                    <th scope="row">4.13.0</th>
                    <td>2019-07-01</td>
                    <td><span class="code">networkConnections()</span> added PID, process</td>
                  </tr>
                  <tr>
                    <th scope="row">4.12.2</th>
                    <td>2019-06-24</td>
                    <td><span class="code">system()</span> added Raspberry PI 4 detection</td>
                  </tr>
                  <tr>
                    <th scope="row">4.12.1</th>
                    <td>2019-06-24</td>
                    <td><span class="code">networkInterface()</span> virtual interfaces mac OS<br>
                      <span class="code">networkInterfaceDefault()</span> optimization windows</td>
                  </tr>
                  <tr>
                    <th scope="row">4.12.0</th>
                    <td>2019-06-21</td>
                    <td><span class="code">networkInterface()</span> added property virtual</td>
                  </tr>
                  <tr>
                    <th scope="row">4.11.6</th>
                    <td>2019-06-19</td>
                    <td><span class="code">util</span> bug fix</td>
                  </tr>
                  <tr>
                    <th scope="row">4.11.5</th>
                    <td>2019-06-19</td>
                    <td><span class="code">dockerAll()</span> bug fix</td>
                  </tr>
                  <tr>
                    <th scope="row">4.11.4</th>
                    <td>2019-06-17</td>
                    <td><span class="code">type definitions</span> bug fix</td>
                  </tr>
                  <tr>
                    <th scope="row">4.11.3</th>
                    <td>2019-06-16</td>
                    <td><span class="code">graphics()</span> optimization windows</td>
                  </tr>
                  <tr>
                    <th scope="row">4.11.2</th>
                    <td>2019-06-16</td>
                    <td><span class="code">wifiNetworks()</span> bug fixes</td>
                  </tr>
                  <tr>
                    <th scope="row">4.11.1</th>
                    <td>2019-06-15</td>
                    <td>updated docs</td>
                  </tr>
                  <tr>
                    <th scope="row">4.11.0</th>
                    <td>2019-06-14</td>
                    <td><span class="code">wifiNetworks()</span> added available wifi networks</td>
                  </tr>
                  <tr>
                    <th scope="row">4.10.0</th>
                    <td>2019-06-14</td>
                    <td><span class="code">graphics()</span> rewrite windows, added featues</td>
                  </tr>
                  <tr>
                    <th scope="row">4.9.2</th>
                    <td>2019-06-12</td>
                    <td><span class="code">type definitions</span> bug fix</td>
                  </tr>
                  <tr>
                    <th scope="row">4.9.1</th>
                    <td>2019-06-11</td>
                    <td><span class="code">networkStats()</span> bugfix windows</td>
                  </tr>
                  <tr>
                    <th scope="row">4.9.0</th>
                    <td>2019-06-03</td>
                    <td><span class="code">graphics()</span> added vendor, refresh rate, current resolution</td>
                  </tr>
                  <tr>
                    <th scope="row">4.8.4</th>
                    <td>2019-06-03</td>
                    <td><span class="code">vboxInfo()</span> fixed call parameters</td>
                  </tr>
                  <tr>
                    <th scope="row">4.8.3</th>
                    <td>2019-05-31</td>
                    <td><span class="code">vboxInfo()</span> added stoppedSince, started, stopped</td>
                  </tr>
                  <tr>
                    <th scope="row">4.8.2</th>
                    <td>2019-05-31</td>
                    <td><span class="code">dockerInfo()</span> changed property naming style</td>
                  </tr>
                  <tr>
                    <th scope="row">4.8.1</th>
                    <td>2019-05-31</td>
                    <td>updated docs</td>
                  </tr>
                  <tr>
                    <th scope="row">4.8.0</th>
                    <td>2019-05-31</td>
                    <td><span class="code">vboxInfo()</span> added virtualbox detailed VM info</td>
                  </tr>
                  <tr>
                    <th scope="row">4.7.3</th>
                    <td>2019-05-30</td>
                    <td>updated typescript typings</td>
                  </tr>
                  <tr>
                    <th scope="row">4.7.2</th>
                    <td>2019-05-30</td>
                    <td><span class="code">versions()</span> added virtualbox</td>
                  </tr>
                  <tr>
                    <th scope="row">4.7.1</th>
                    <td>2019-05-29</td>
                    <td><span class="code">memLayout()</span> fix mac OS mojave</td>
                  </tr>
                  <tr>
                    <th scope="row">4.7.0</th>
                    <td>2019-05-29</td>
                    <td>partial NetBSD support</td>
                  </tr>
                  <tr>
                    <th scope="row">4.6.1</th>
                    <td>2019-05-29</td>
                    <td><span class="code">wmic</span> path fix - windows</td>
                  </tr>
                  <tr>
                    <th scope="row">4.6.0</th>
                    <td>2019-05-27</td>
                    <td><span class="code">dockerInfo()</span> added dockerInfo</td>
                  </tr>
                  <tr>
                    <th scope="row">4.5.1</th>
                    <td>2019-05-17</td>
                    <td>updated docs</td>
                  </tr>
                  <tr>
                    <th scope="row">4.5.0</th>
                    <td>2019-05-17</td>
                    <td><span class="code">fsOpenFiles()</span> added open file descriptor count</td>
                  </tr>
                  <tr>
                    <th scope="row">4.4.1</th>
                    <td>2019-05-11</td>
                    <td>updated docs</td>
                  </tr>
                  <tr>
                    <th scope="row">4.4.0</th>
                    <td>2019-05-11</td>
                    <td><span class="code">dockerContainers()</span> added started, finished time</td>
                  </tr>
                  <tr>
                    <th scope="row">4.3.0</th>
                    <td>2019-05-09</td>
                    <td><span class="code">dockerContainers() dockerStats()</span> added restartCount</td>
                  </tr>
                  <tr>
                    <th scope="row">4.2.1</th>
                    <td>2019-05-09</td>
                    <td><span class="code">networkInterfaceDefault()</span> time delay fix (linux)</td>
                  </tr>
                  <tr>
                    <th scope="row">4.2.0</th>
                    <td>2019-05-09</td>
                    <td><span class="code">osInfo()</span> extended service pack version (windows)</td>
                  </tr>
                  <tr>
                    <th scope="row">4.1.8</th>
                    <td>2019-05-09</td>
                    <td><span class="code">graphics()</span> resolve on error (windows)</td>
                  </tr>
                  <tr>
                    <th scope="row">4.1.7</th>
                    <td>2019-05-09</td>
                    <td><span class="code">users()</span> parsing fix (windows)</td>
                  </tr>
                  <tr>
                    <th scope="row">4.1.6</th>
                    <td>2019-04-24</td>
                    <td><span class="code">memory()</span> swap used fix (linux)</td>
                  </tr>
                  <tr>
                    <th scope="row">4.1.5</th>
                    <td>2019-04-19</td>
                    <td>refactored <span class="code">wmic</span> calls to work also on Windows XP</td>
                  </tr>
                  <tr>
                    <th scope="row">4.1.4</th>
                    <td>2019-03-26</td>
                    <td><span class="code">networkInterfaces()</span> speed bug (windows)</td>
                  </tr>
                  <tr>
                    <th scope="row">4.1.3</th>
                    <td>2019-03-24</td>
                    <td>wmic path detection (windows)</td>
                  </tr>
                  <tr>
                    <th scope="row">4.1.2</th>
                    <td>2019-03-23</td>
                    <td>updated docs</td>
                  </tr>
                  <tr>
                    <th scope="row">4.1.1</th>
                    <td>2019-03-13</td>
                    <td>updated typescript typings</td>
                  </tr>
                  <tr>
                    <th scope="row">4.1.0</th>
                    <td>2019-03-13</td>
                    <td><span class="code">versions()</span>added pip, pip3</td>
                  </tr>
                  <tr>
                    <th scope="row">4.0.16</th>
                    <td>2019-03-12</td>
                    <td>Happy birthday - 5th aniversary</td>
                  </tr>
                  <tr>
                    <th scope="row">4.0.15</th>
                    <td>2019-03-02</td>
                    <td><span class="code">versions()</span>added java, python3, optimized gcc</td>
                  </tr>
                  <tr>
                    <th scope="row">4.0.14</th>
                    <td>2019-03-01</td>
                    <td>updated typescript typings</td>
                  </tr>
                  <tr>
                    <th scope="row">4.0.13</th>
                    <td>2019-03-01</td>
                    <td><span class="code">diskLayout()</span> added device (/dev/sda...) linux, mac</td>
                  </tr>
                  <tr>
                    <th scope="row">4.0.12</th>
                    <td>2019-03-01</td>
                    <td><span class="code">diskLayout()</span> linux rewritten - better detection</td>
                  </tr>
                  <tr>
                    <th scope="row">4.0.11</th>
                    <td>2019-02-23</td>
                    <td><span class="code">users()</span> fix windows (time), added @ts-check</td>
                  </tr>
                  <tr>
                    <th scope="row">4.0.10</th>
                    <td>2019-02-10</td>
                    <td><span class="code">networkInterfaceDefault()</span> fix windows</td>
                  </tr>
                  <tr>
                    <th scope="row">4.0.9</th>
                    <td>2019-02-08</td>
                    <td><span class="code">cpu()</span> fix, code clean up</td>
                  </tr>
                  <tr>
                    <th scope="row">4.0.8</th>
                    <td>2019-02-05</td>
                    <td><span class="code">inetLatency()</span> latency fix parse chinese output</td>
                  </tr>
                  <tr>
                    <th scope="row">4.0.7</th>
                    <td>2019-02-05</td>
                    <td><span class="code">inetLatency()</span> latency Windows fix</td>
                  </tr>
                  <tr>
                    <th scope="row">4.0.6</th>
                    <td>2019-02-04</td>
                    <td>powershell catch error</td>
                  </tr>
                  <tr>
                    <th scope="row">4.0.5</th>
                    <td>2019-02-03</td>
                    <td>updated docs</td>
                  </tr>
                  <tr>
                    <th scope="row">4.0.4</th>
                    <td>2019-02-03</td>
                    <td>code cleanup, updated docs</td>
                  </tr>
                  <tr>
                    <th scope="row">4.0.3</th>
                    <td>2019-02-03</td>
                    <td><span class="code">networkInterfaces(), chassis()</span> fixed two more issues</td>
                  </tr>
                  <tr>
                    <th scope="row">4.0.2</th>
                    <td>2019-02-03</td>
                    <td><span class="code">networkInterfaces(), chassis()</span> fixed smaller issues</td>
                  </tr>
                  <tr>
                    <th scope="row">4.0.1</th>
                    <td>2019-02-02</td>
                    <td>updated docs</td>
                  </tr>
                  <tr>
                    <th scope="row">4.0.0</th>
                    <td>2019-02-02</td>
                    <td>new major version 4</td>
                  </tr>
                  <tr>
                    <th scope="row">3.54.0</th>
                    <td>2018-12-30</td>
                    <td>added TypeScript type definitions</td>
                  </tr>
                  <tr>
                    <th scope="row">3.53.1</th>
                    <td>2018-12-29</td>
                    <td><span class="code">versions()</span> bug fix nginx version</td>
                  </tr>
                  <tr>
                    <th scope="row">3.53.0</th>
                    <td>2018-12-29</td>
                    <td><span class="code">versions()</span> added perl, python, gcc</td>
                  </tr>
                  <tr>
                    <th scope="row">3.52.7</th>
                    <td>2018-12-29</td>
                    <td><span class="code">versions()</span> bug fix macOS detection</td>
                  </tr>
                  <tr>
                    <th scope="row">3.52.6</th>
                    <td>2018-12-28</td>
                    <td><span class="code">versions()</span> bug fix macOS</td>
                  </tr>
                  <tr>
                    <th scope="row">3.52.5</th>
                    <td>2018-12-28</td>
                    <td>preparing automated tests, travis-ci integration, added dev-dependencies</td>
                  </tr>
                  <tr>
                    <th scope="row">3.52.4</th>
                    <td>2018-12-27</td>
                    <td><span class="code">graphics().controllers</span> bugfix linux</td>
                  </tr>
                  <tr>
                    <th scope="row">3.52.3</th>
                    <td>2018-12-27</td>
                    <td><span class="code">os().codepage</span> bugfix</td>
                  </tr>
                  <tr>
                    <th scope="row">3.52.2</th>
                    <td>2018-12-17</td>
                    <td>code cleanup</td>
                  </tr>
                  <tr>
                    <th scope="row">3.52.1</th>
                    <td>2018-12-17</td>
                    <td><span class="code">inetChecksite()</span> bugfix windows</td>
                  </tr>
                  <tr>
                    <th scope="row">3.52.0</th>
                    <td>2018-12-15</td>
                    <td><span class="code">cpu()</span> added physical cores, processors, socket type</td>
                  </tr>
                  <tr>
                    <th scope="row">3.51.4</th>
                    <td>2018-12-05</td>
                    <td><span class="code">versions()</span> bugfix, optimization postgres</td>
                  </tr>
                  <tr>
                    <th scope="row">3.51.3</th>
                    <td>2018-11-27</td>
                    <td><span class="code">mem()</span> refactoring parsing linux, code cleanup</td>
                  </tr>
                  <tr>
                    <th scope="row">3.51.2</th>
                    <td>2018-11-26</td>
                    <td><span class="code">mem()</span> bugfix parsing <span class="code">free</span> output linux</td>
                  </tr>
                  <tr>
                    <th scope="row">3.51.1</th>
                    <td>2018-11-26</td>
                    <td><span class="code">processLoad()</span> bugfix windows</td>
                  </tr>
                  <tr>
                    <th scope="row">3.51.0</th>
                    <td>2018-11-25</td>
                    <td><span class="code">processLoad()</span> added for windows</td>
                  </tr>
                  <tr>
                    <th scope="row">3.50.3</th>
                    <td>2018-11-25</td>
                    <td><span class="code">processLoad()</span>, <span class="code">services()</span> fixed cpu data (linux)</td>
                  </tr>
                  <tr>
                    <th scope="row">3.50.2</th>
                    <td>2018-11-23</td>
                    <td>network mac adresses: ip support fix</td>
                  </tr>
                  <tr>
                    <th scope="row">3.50.1</th>
                    <td>2018-11-23</td>
                    <td><span class="code">services()</span> added possibility to specify ALL services "*" for win</td>
                  </tr>
                  <tr>
                    <th scope="row">3.50.0</th>
                    <td>2018-11-23</td>
                    <td><span class="code">services()</span> added possibility to specify ALL services "*" for linux</td>
                  </tr>
                  <tr>
                    <th scope="row">3.49.4</th>
                    <td>2018-11-21</td>
                    <td><span class="code">battery()</span> timeremaining optimization (linux) thanks to Jorai Rijsdijk</td>
                  </tr>
                  <tr>
                    <th scope="row">3.49.3</th>
                    <td>2018-11-20</td>
                    <td><span class="code">memLayout()</span> optimized parsing (win)</td>
                  </tr>
                  <tr>
                    <th scope="row">3.49.2</th>
                    <td>2018-11-19</td>
                    <td>code cleanup</td>
                  </tr>
                  <tr>
                    <th scope="row">3.49.1</th>
                    <td>2018-11-19</td>
                    <td><span class="code">cpu().brand</span> removed extra spaces, tabs</td>
                  </tr>
                  <tr>
                    <th scope="row">3.49.0</th>
                    <td>2018-11-19</td>
                    <td>added system <span class="code">uuid()</span> (os specific), <span class="code">versions()</span> added postgresql</td>
                  </tr>
                  <tr>
                    <th scope="row">3.48.4</th>
                    <td>2018-11-18</td>
                    <td>windows: garbled output because of codepage</td>
                  </tr>
                  <tr>
                    <th scope="row">3.48.3</th>
                    <td>2018-11-18</td>
                    <td><span class="code">dockerContainerStats()</span> fixed issue <span class="code">cpu_percent</span> win</td>
                  </tr>
                  <tr>
                    <th scope="row">3.48.2</th>
                    <td>2018-11-18</td>
                    <td><span class="code">dockerContainerStats()</span> fixed issue <span class="code">cpu_percent</span>, win exec</td>
                  </tr>
                  <tr>
                    <th scope="row">3.48.1</th>
                    <td>2018-11-17</td>
                    <td><span class="code">docker...()</span> fixed issue parsing docker socket JSON</td>
                  </tr>
                  <tr>
                    <th scope="row">3.48.0</th>
                    <td>2018-11-17</td>
                    <td><span class="code">diskLayout()</span> better interface detection (WIN), <span class="code">osInfo()</span> added build, serial</td>
                  </tr>
                  <tr>
                    <th scope="row">3.47.0</th>
                    <td>2018-11-06</td>
                    <td><span class="code">versions()</span> added docker, postfix</td>
                  </tr>
                  <tr>
                    <th scope="row">3.46.0</th>
                    <td>2018-11-05</td>
                    <td>fixed issue <span class="code">versions()</span>, added system openssl version</td>
                  </tr>
                  <tr>
                    <th scope="row">3.45.10</th>
                    <td>2018-11-03</td>
                    <td>fixed issue <span class="code">battery()</span>, modified <span class="code">package.json</span> - files</td>
                  </tr>
                  <tr>
                    <th scope="row">3.45.9</th>
                    <td>2018-10-22</td>
                    <td>fixed node 4 incompatibility</td>
                  </tr>
                  <tr>
                    <th scope="row">3.45.8</th>
                    <td>2018-10-22</td>
                    <td><span class="code">system()</span> fix Raspberry Pi detection</td>
                  </tr>
                  <tr>
                    <th scope="row">3.45.7</th>
                    <td>2018-10-05</td>
                    <td>fixed typos</td>
                  </tr>
                  <tr>
                    <th scope="row">3.45.6</th>
                    <td>2018-09-12</td>
                    <td><span class="code">mem()</span> bug parsing linux in other languages</td>
                  </tr>
                  <tr>
                    <th scope="row">3.45.5</th>
                    <td>2018-09-07</td>
                    <td><span class="code">diskLayout()</span> tiny bug S.M.A.R.T status windows</td>
                  </tr>
                  <tr>
                    <th scope="row">3.45.4</th>
                    <td>2018-09-06</td>
                    <td>added icon to README.md</td>
                  </tr>
                  <tr>
                    <th scope="row">3.45.3</th>
                    <td>2018-09-06</td>
                    <td><span class="code">diskLayout()</span> optimized media type detection (HD, SSD) on Windows</td>
                  </tr>
                  <tr>
                    <th scope="row">3.45.2</th>
                    <td>2018-09-05</td>
                    <td>updated imags shields icons</td>
                  </tr>
                  <tr>
                    <th scope="row">3.45.1</th>
                    <td>2018-09-05</td>
                    <td>updated documentation</td>
                  </tr>
                  <tr>
                    <th scope="row">3.45.0</th>
                    <td>2018-09-04</td>
                    <td><span class="code">diskLayout()</span> added smartStatus</td>
                  </tr>
                  <tr>
                    <th scope="row">3.44.2</th>
                    <td>2018-08-28</td>
                    <td>added code quality badges</td>
                  </tr>
                  <tr>
                    <th scope="row">3.44.1</th>
                    <td>2018-08-28</td>
                    <td>code cleanup</td>
                  </tr>
                  <tr>
                    <th scope="row">3.44.0</th>
                    <td>2018-08-25</td>
                    <td><span class="code">battery()</span> bugfix & added type, model, manufacturer, serial</td>
                  </tr>
                  <tr>
                    <th scope="row">3.43.0</th>
                    <td>2018-08-25</td>
                    <td><span class="code">cpuCurrentspeed()</span> added cpu speed for all cores</td>
                  </tr>
                  <tr>
                    <th scope="row">3.42.10</th>
                    <td>2018-08-25</td>
                    <td><span class="code">processes()</span> optimized start time parsing</td>
                  </tr>
                  <tr>
                    <th scope="row">3.42.9</th>
                    <td>2018-08-08</td>
                    <td><span class="code">cpuTemperature()</span> optimized parsing</td>
                  </tr>
                  <tr>
                    <th scope="row">3.42.8</th>
                    <td>2018-08-03</td>
                    <td>updated docs</td>
                  </tr>
                  <tr>
                    <th scope="row">3.42.7</th>
                    <td>2018-08-03</td>
                    <td><span class="code">processes()</span> optimized parsing ps name</td>
                  </tr>
                  <tr>
                    <th scope="row">3.42.6</th>
                    <td>2018-08-03</td>
                    <td><span class="code">processes()</span> bugfix parsing ps linux</td>
                  </tr>
                  <tr>
                    <th scope="row">3.42.5</th>
                    <td>2018-08-03</td>
                    <td><span class="code">processes()</span> bugfix parsing ps linux</td>
                  </tr>
                  <tr>
                    <th scope="row">3.42.4</th>
                    <td>2018-07-09</td>
                    <td><span class="code">cpuTemperature()</span> bugfix parsing negative values</td>
                  </tr>
                  <tr>
                    <th scope="row">3.42.3</th>
                    <td>2018-07-05</td>
                    <td><span class="code">services()</span> bugfix not finding services with capital letters</td>
                  </tr>
                  <tr>
                    <th scope="row">3.42.2</th>
                    <td>2018-07-03</td>
                    <td><span class="code">users()</span> optimized results if lack of permissions</td>
                  </tr>
                  <tr>
                    <th scope="row">3.42.1</th>
                    <td>2018-07-03</td>
                    <td><span class="code">versions()</span> bugfix git version macOS</td>
                  </tr>
                  <tr>
                    <th scope="row">3.42.0</th>
                    <td>2018-06-01</td>
                    <td><span class="code">processes()</span> added parent process PID</td>
                  </tr>
                  <tr>
                    <th scope="row">3.41.4</th>
                    <td>2018-05-28</td>
                    <td>windows exec WMIC in try catch</td>
                  </tr>
                  <tr>
                    <th scope="row">3.41.3</th>
                    <td>2018-05-13</td>
                    <td>improved SunOS support <span class="code">getStaticData()</span>, <span class="code">getDynamicData()</span></td>
                  </tr>
                  <tr>
                    <th scope="row">3.41.2</th>
                    <td>2018-05-13</td>
                    <td>bugfix <span class="code">system()</span> and <span class="code">flags()</span> Raspberry Pi</td>
                  </tr>
                  <tr>
                    <th scope="row">3.41.1</th>
                    <td>2018-05-11</td>
                    <td>updated docs</td>
                  </tr>
                  <tr>
                    <th scope="row">3.41.0</th>
                    <td>2018-05-11</td>
                    <td><span class="code">system()</span> Raspberry Pi bugfix and extended detection, added partial <span class="code">SunOS</span> support</td>
                  </tr>
                  <tr>
                    <th scope="row">3.40.1</th>
                    <td>2018-05-10</td>
                    <td>bugfix <span class="code">system().sku</span> (windows)</td>
                  </tr>
                  <tr>
                    <th scope="row">3.40.0</th>
                    <td>2018-04-29</td>
                    <td>extended <span class="code">versions()</span> (php, redis, mongodb)</td>
                  </tr>
                  <tr>
                    <th scope="row">3.39.0</th>
                    <td>2018-04-29</td>
                    <td>added <span class="code">versions().mysql</span> and <span class="code">versions().nginx</span>, starting <span class="code">SunOS</span>> support (untested)</td>
                  </tr>
                  <tr>
                    <th scope="row">3.38.0</th>
                    <td>2018-04-06</td>
                    <td>added <span class="code">battery().acconnected</span></td>
                  </tr>
                  <tr>
                    <th scope="row">3.37.12</th>
                    <td>2018-04-05</td>
                    <td>another optimization <span class="code">battery().ischarging</span> for macOS</td>
                  </tr>
                  <tr>
                    <th scope="row">3.37.11</th>
                    <td>2018-04-05</td>
                    <td>another optimization <span class="code">battery().ischarging</span> for macOS</td>
                  </tr>
                  <tr>
                    <th scope="row">3.37.10</th>
                    <td>2018-04-05</td>
                    <td><span class="code">battery().ischarging</span> optimized for macOS</td>
                  </tr>
                  <tr>
                    <th scope="row">3.37.9</th>
                    <td>2018-04-03</td>
                    <td>optimized <span class="code">processes()</span>, bugfix <span class="code">networkInterfaceDefault()</span></td>
                  </tr>
                  <tr>
                    <th scope="row">3.37.8</th>
                    <td>2018-03-25</td>
                    <td>optimized <span class="code">networkDefaultInterface()</span> detection, fixed network <span class="code">operstate</span>> MacOS</td>
                  </tr>
                  <tr>
                    <th scope="row">3.37.7</th>
                    <td>2018-03-13</td>
                    <td>celebrating 4th birthday</td>
                  </tr>
                  <tr>
                    <th scope="row">3.37.6</th>
                    <td>2018-03-12</td>
                    <td>updated docs: fixed <span class="code">diskLayout</span>>and <span class="code">mamlayout</span>></td>
                  </tr>
                  <tr>
                    <th scope="row">3.37.5</th>
                    <td>2018-03-12</td>
                    <td>added support for <span class="code">ip</span>> instead of <span class="code">ifconfig</span>></td>
                  </tr>
                  <tr>
                    <th scope="row">3.37.4</th>
                    <td>2018-02-22</td>
                    <td>bugfix windows <span class="code">processes()</span>, <span class="code">disklayout()</span></td>
                  </tr>
                  <tr>
                    <th scope="row">3.37.3</th>
                    <td>2018-02-19</td>
                    <td>added windows exec <span class="code">windowsHide</span> option</td>
                  </tr>
                  <tr>
                    <th scope="row">3.37.2</th>
                    <td>2018-02-15</td>
                    <td>fixed bug <span class="code">battery().percent</span> for macOS</td>
                  </tr>
                  <tr>
                    <th scope="row">3.37.1</th>
                    <td>2018-02-13</td>
                    <td>fixed bug <span class="code">battery().ischarging</span> for macOS</td>
                  </tr>
                  <tr>
                    <th scope="row">3.37.0</th>
                    <td>2018-02-11</td>
                    <td>extended FreeBSD support <span class="code">networkStats()</span></td>
                  </tr>
                  <tr>
                    <th scope="row">3.36.0</th>
                    <td>2018-02-11</td>
                    <td>extended FreeBSD support <span class="code">networkConnections()</span></td>
                  </tr>
                  <tr>
                    <th scope="row">3.35.0</th>
                    <td>2018-02-11</td>
                    <td>extended FreeBSD support <span class="code">processLoad()</span></td>
                  </tr>
                  <tr>
                    <th scope="row">3.34.1</th>
                    <td>2018-02-11</td>
                    <td>updated docs</td>
                  </tr>
                  <tr>
                    <th scope="row">3.34.0</th>
                    <td>2018-02-10</td>
                    <td>first partial FreeBSD support</td>
                  </tr>
                  <tr>
                    <th scope="row">3.33.15</th>
                    <td>2018-01-21</td>
                    <td>optimized OSX battery</td>
                  </tr>
                  <tr>
                    <th scope="row">3.33.14</th>
                    <td>2018-01-17</td>
                    <td>bugfix <span class="code">diskLayout()</span> (Windows)</td>
                  </tr>
                  <tr>
                    <th scope="row">3.33.13</th>
                    <td>2018-01-12</td>
                    <td>bugfix <span class="code">memLayout()</span> (Windows)</td>
                  </tr>
                  <tr>
                    <th scope="row">3.33.12</th>
                    <td>2017-12-25</td>
                    <td>fixed typos</td>
                  </tr>
                  <tr>
                    <th scope="row">3.33.11</th>
                    <td>2017-12-17</td>
                    <td>updated docs</td>
                  </tr>
                  <tr>
                    <th scope="row">3.33.10</th>
                    <td>2017-12-14</td>
                    <td>bugfix WMIC blockDevice parse (Windows 7)</td>
                  </tr>
                  <tr>
                    <th scope="row">3.33.9</th>
                    <td>2017-12-14</td>
                    <td>bugfix WMIC not found (Windows)</td>
                  </tr>
                  <tr>
                    <th scope="row">3.33.8</th>
                    <td>2017-12-02</td>
                    <td>bugfix diskLayout().size (OSX)</td>
                  </tr>
                  <tr>
                    <th scope="row">3.33.7</th>
                    <td>2017-11-28</td>
                    <td>bugfix diskLayout().size</td>
                  </tr>
                  <tr>
                    <th scope="row">3.33.6</th>
                    <td>2017-11-16</td>
                    <td>bugfix diskLayout().size</td>
                  </tr>
                  <tr>
                    <th scope="row">3.33.5</th>
                    <td>2017-11-09</td>
                    <td>code cleanup</td>
                  </tr>
                  <tr>
                    <th scope="row">3.33.4</th>
                    <td>2017-11-09</td>
                    <td>bugfix graphics controller win (bytes)</td>
                  </tr>
                  <tr>
                    <th scope="row">3.33.3</th>
                    <td>2017-11-08</td>
                    <td>bugfix cpu speed arm - type</td>
                  </tr>
                  <tr>
                    <th scope="row">3.33.2</th>
                    <td>2017-11-08</td>
                    <td>bugfix cpu speed arm</td>
                  </tr>
                  <tr>
                    <th scope="row">3.33.1</th>
                    <td>2017-11-07</td>
                    <td>improved bios and main board information</td>
                  </tr>
                  <tr>
                    <th scope="row">3.33.0</th>
                    <td>2017-11-07</td>
                    <td>added bios and main board information</td>
                  </tr>
                  <tr>
                    <th scope="row">3.32.4</th>
                    <td>2017-11-02</td>
                    <td>AMD cpu base frequencies table also for windows</td>
                  </tr>
                  <tr>
                    <th scope="row">3.32.3</th>
                    <td>2017-11-02</td>
                    <td>code cleanup, AMD cpu base frequencies table</td>
                  </tr>
                  <tr>
                    <th scope="row">3.32.2</th>
                    <td>2017-11-01</td>
                    <td>bugfix JSON.parse error <span class="code">blockDevices()</span></td>
                  </tr>
                  <tr>
                    <th scope="row">3.32.1</th>
                    <td>2017-10-23</td>
                    <td>updated docs</td>
                  </tr>
                  <tr>
                    <th scope="row">3.32.0</th>
                    <td>2017-10-23</td>
                    <td>extended <span class="code">memLayout()</span> - added manufacturer</td>
                  </tr>
                  <tr>
                    <th scope="row">3.31.4</th>
                    <td>2017-10-21</td>
                    <td>updated <span class="code">README.md</span></td>
                  </tr>
                  <tr>
                    <th scope="row">3.31.3</th>
                    <td>2017-10-21</td>
                    <td>bugfix <span class="code">graphics()</span>, fixed typo <span class="code">README.md</span></td>
                  </tr>
                  <tr>
                    <th scope="row">3.31.2</th>
                    <td>2017-10-16</td>
                    <td>bugfix <span class="code">graphics()</span> vendor and model parsing linux VGA/3D</td>
                  </tr>
                  <tr>
                    <th scope="row">3.31.1</th>
                    <td>2017-10-16</td>
                    <td>bugfix <span class="code">graphics()</span> vendor and model parsing linux</td>
                  </tr>
                  <tr>
                    <th scope="row">3.31.0</th>
                    <td>2017-10-15</td>
                    <td>extended windows support <span class="code">cpuFlags()</span> (partially)</td>
                  </tr>
                  <tr>
                    <th scope="row">3.30.6</th>
                    <td>2017-10-05</td>
                    <td>updated community profile</td>
                  </tr>
                  <tr>
                    <th scope="row">3.30.5</th>
                    <td>2017-10-05</td>
                    <td>bugfix <span class="code">users()</span> - parsing values on windows</td>
                  </tr>
                  <tr>
                    <th scope="row">3.30.4</th>
                    <td>2017-10-03</td>
                    <td>bugfix <span class="code">cpuTemperature()</span> - parsing values on windows</td>
                  </tr>
                  <tr>
                    <th scope="row">3.30.3</th>
                    <td>2017-10-03</td>
                    <td>bugfix <span class="code">cpuTemperature()</span> - max value on windows</td>
                  </tr>
                  <tr>
                    <th scope="row">3.30.2</th>
                    <td>2017-09-26</td>
                    <td>bugfix <span class="code">networkInterfaces()</span> - optimized ip6 address selection</td>
                  </tr>
                  <tr>
                    <th scope="row">3.30.1</th>
                    <td>2017-09-21</td>
                    <td>bugfix/typo <span class="code">inetChecksite()</span></td>
                  </tr>
                  <tr>
                    <th scope="row">3.30.0</th>
                    <td>2017-09-21</td>
                    <td>extended <span class="code">versions()</span> (added <span class="code">yarn</span>, <span class="code">gulp</span>, <span class="code">grunt</span>, <span class="code">tsc</span>, <span class="code">git</span>)</td>
                  </tr>
                  <tr>
                    <th scope="row">3.29.0</th>
                    <td>2017-09-15</td>
                    <td>extended windows support <span class="code">services()</span>, optimized <span class="code">diskLayout()</span> (OSX), bugfixes</td>
                  </tr>
                  <tr>
                    <th scope="row">3.28.0</th>
                    <td>2017-09-14</td>
                    <td>extended windows support <span class="code">processes()</span></td>
                  </tr>
                  <tr>
                    <th scope="row">3.27.1</th>
                    <td>2017-09-13</td>
                    <td>updated Raspberry version detection <span class="code">system()</span> (Pi 3, Zero)</td>
                  </tr>
                  <tr>
                    <th scope="row">3.27.0</th>
                    <td>2017-09-12</td>
                    <td>added raw data to <span class="code">currentLoad()</span>, fixed <span class="code">networkInterfaces()</span> MAC problem node 8.x</td>
                  </tr>
                  <tr>
                    <th scope="row">3.26.2</th>
                    <td>2017-09-01</td>
                    <td>removed redundant code</td>
                  </tr>
                  <tr>
                    <th scope="row">3.26.1</th>
                    <td>2017-08-23</td>
                    <td>fixed <span class="code">cpu().speed</span> windows / AMD, updated docs</td>
                  </tr>
                  <tr>
                    <th scope="row">3.26.0</th>
                    <td>2017-08-21</td>
                    <td>extended <span class="code">getDynamicData()</span> (windows), updated docs</td>
                  </tr>
                  <tr>
                    <th scope="row">3.25.1</th>
                    <td>2017-08-07</td>
                    <td>updated docs </td>
                  </tr>
                  <tr>
                    <th scope="row">3.25.0</th>
                    <td>2017-08-07</td>
                    <td>improved windows support <span class="code">networkStats()</span>, <span class="code">cpuCache()</span>, bug fix <span class="code">getStaticData()</span></td>
                  </tr>
                  <tr>
                    <th scope="row">3.24.0</th>
                    <td>2017-08-05</td>
                    <td>extended windows support <span class="code">networkStats()</span>, <span class="code">networkConnections()</span></td>
                  </tr>
                  <tr>
                    <th scope="row">3.23.7</th>
                    <td>2017-07-11</td>
                    <td>bug fix <span class="code">diskLayout()</span></td>
                  </tr>
                  <tr>
                    <th scope="row">3.23.6</th>
                    <td>2017-07-11</td>
                    <td>added <span class="code">cpuFlags()</span> to <span class="code">getStaticData()</span>, bug fix <span class="code">graphics()</span> (Win)</td>
                  </tr>
                  <tr>
                    <th scope="row">3.23.5</th>
                    <td>2017-06-29</td>
                    <td>bug fix <span class="code">inetChecksite()</span></td>
                  </tr>
                  <tr>
                    <th scope="row">3.23.4</th>
                    <td>2017-06-24</td>
                    <td>bug fix <span class="code">getDynamicData(), getAllData() - mem</span></td>
                  </tr>
                  <tr>
                    <th scope="row">3.23.3</th>
                    <td>2017-06-23</td>
                    <td>updated docs</td>
                  </tr>
                  <tr>
                    <th scope="row">3.23.2</th>
                    <td>2017-06-23</td>
                    <td>bug fix <span class="code">battery</span> (windows)</td>
                  </tr>
                  <tr>
                    <th scope="row">3.23.1</th>
                    <td>2017-06-22</td>
                    <td>updated docs</td>
                  </tr>
                  <tr>
                    <th scope="row">3.23.0</th>
                    <td>2017-06-22</td>
                    <td>added <span class="code">memLayout</span>, <span class="code">diskLayout</span>, extended windows support (<span class="code">inetChecksite<span class="code"></span></td>
                  </tr>
                  <tr>
                    <th scope="row">3.22.0</th>
                    <td>2017-06-19</td>
                    <td>extended windows support (<span class="code">users<span class="code">, <span class="code">inetLatency</span>)</td>
                  </tr>
                  <tr>
                    <th scope="row">3.21.0</th>
                    <td>2017-06-18</td>
                    <td>extended time (timezone), extended windows support (battery, getAll...)</td>
                  </tr>
                  <tr>
                    <th scope="row">3.20.1</th>
                    <td>2017-06-17</td>
                    <td>updated docs</td>
                  </tr>
                  <tr>
                    <th scope="row">3.20.0</th>
                    <td>2017-06-16</td>
                    <td>extend WIN support (cpu, cpuCache, cpuCurrentspeed, mem, networkInterfaces, docker)</td>
                  </tr>
                  <tr>
                    <th scope="row">3.19.0</th>
                    <td>2017-06-12</td>
                    <td>OSX temperature now an optional dependency </td>
                  </tr>
                  <tr>
                    <th scope="row">3.18.0</th>
                    <td>2017-05-27</td>
                    <td>extended <span class="code">cpu</span> info (vendor, family, model, stepping, revision, cache, speedmin/max)</td>
                  </tr>
                  <tr>
                    <th scope="row">3.17.3</th>
                    <td>2017-04-29</td>
                    <td>minor fix (blockDevices data array, Windows)</td>
                  </tr>
                  <tr>
                    <th scope="row">3.17.2</th>
                    <td>2017-04-24</td>
                    <td>minor fix (removed console.log)</td>
                  </tr>
                  <tr>
                    <th scope="row">3.17.1</th>
                    <td>2017-04-23</td>
                    <td>fixed bugs fsSize(win), si.processes (command), si.osinfo(win)</td>
                  </tr>
                  <tr>
                    <th scope="row">3.17.0</th>
                    <td>2017-02-19</td>
                    <td>windows support for some first functions, extended process list (linux</td>
                  </tr>
                  <tr>
                    <th scope="row">3.16.0</th>
                    <td>2017-01-19</td>
                    <td>blockDevices: added removable attribute + fix</td>
                  </tr>
                  <tr>
                    <th scope="row">3.15.1</th>
                    <td>2017-01-17</td>
                    <td>minor cpuTemperature fix (OSX)</td>
                  </tr>
                  <tr>
                    <th scope="row">3.15.0</th>
                    <td>2017-01-15</td>
                    <td>added cpuTemperature also for OSX</td>
                  </tr>
                  <tr>
                    <th scope="row">3.14.0</th>
                    <td>2017-01-14</td>
                    <td>added currentLoad per cpu/core, cpu cache and cpu flags</td>
                  </tr>
                  <tr>
                    <th scope="row">3.13.0</th>
                    <td>2016-11-23</td>
                    <td>added shell (returns standard shell)</td>
                  </tr>
                  <tr>
                    <th scope="row">3.12.0</th>
                    <td>2016-11-17</td>
                    <td>refactoring and extended currentLoad</td>
                  </tr>
                  <tr>
                    <th scope="row">3.11.2</th>
                    <td>2016-11-16</td>
                    <td>blockDevices: improved for older lsblk versions</td>
                  </tr>
                  <tr>
                    <th scope="row">3.11.1</th>
                    <td>2016-11-16</td>
                    <td>fixed small bug in blockDevices</td>
                  </tr>
                  <tr>
                    <th scope="row">3.11.0</th>
                    <td>2016-11-15</td>
                    <td>blockDevices for OSX and extended blockDevices</td>
                  </tr>
                  <tr>
                    <th scope="row">3.10.2</th>
                    <td>2016-11-14</td>
                    <td>bug fix fsSize on OSX</td>
                  </tr>
                  <tr>
                    <th scope="row">3.10.1</th>
                    <td>2016-11-14</td>
                    <td>optimization fsStats, disksIO, networkStats</td>
                  </tr>
                  <tr>
                    <th scope="row">3.10.0</th>
                    <td>2016-11-12</td>
                    <td>added blockDevices, fixed fsSize, added file system type</td>
                  </tr>
                  <tr>
                    <th scope="row">3.9.0</th>
                    <td>2016-11-11</td>
                    <td>added MAC address to networkInterfaces, fixed currentLoad</td>
                  </tr>
                  <tr>
                    <th scope="row">3.8.1</th>
                    <td>2016-11-04</td>
                    <td>updated docs</td>
                  </tr>
                  <tr>
                    <th scope="row">3.8.0</th>
                    <td>2016-11-04</td>
                    <td>added dockerContainerProcesses</td>
                  </tr>
                  <tr>
                    <th scope="row">3.7.1</th>
                    <td>2016-11-03</td>
                    <td>code refactoring</td>
                  </tr>
                  <tr>
                    <th scope="row">3.7.0</th>
                    <td>2016-11-02</td>
                    <td>extended docker stats, and no longer relying on curl</td>
                  </tr>
                  <tr>
                    <th scope="row">3.6.0</th>
                    <td>2016-09-14</td>
                    <td>added versions (kernel, ssl, node, npm, pm2, ...)</td>
                  </tr>
                  <tr>
                    <th scope="row">3.5.1</th>
                    <td>2016-09-14</td>
                    <td>bugfix graphics info</td>
                  </tr>
                  <tr>
                    <th scope="row">3.5.0</th>
                    <td>2016-09-14</td>
                    <td>added graphics info (controller, display)</td>
                  </tr>
                  <tr>
                    <th scope="row">3.4.4</th>
                    <td>2016-09-02</td>
                    <td>tiny fixes system.model, getDefaultNetworkInterface</td>
                  </tr>
                  <tr>
                    <th scope="row">3.4.3</th>
                    <td>2016-09-02</td>
                    <td>tiny bug fix fsStats, disksIO OSX</td>
                  </tr>
                  <tr>
                    <th scope="row">3.4.2</th>
                    <td>2016-09-01</td>
                    <td>improved default network interface</td>
                  </tr>
                  <tr>
                    <th scope="row">3.4.1</th>
                    <td>2016-08-30</td>
                    <td>updated docs</td>
                  </tr>
                  <tr>
                    <th scope="row">3.4.0</th>
                    <td>2016-08-30</td>
                    <td>rewritten processes current cpu usage</td>
                  </tr>
                  <tr>
                    <th scope="row">3.3.0</th>
                    <td>2016-08-24</td>
                    <td>process list added to processes</td>
                  </tr>
                  <tr>
                    <th scope="row">3.2.1</th>
                    <td>2016-08-19</td>
                    <td>updated docs, improvement system</td>
                  </tr>
                  <tr>
                    <th scope="row">3.2.0</th>
                    <td>2016-08-19</td>
                    <td>added battery information</td>
                  </tr>
                  <tr>
                    <th scope="row">3.1.1</th>
                    <td>2016-08-18</td>
                    <td>improved system and os detection (vm, ...), bugfix disksIO</td>
                  </tr>
                  <tr>
                    <th scope="row">3.1.0</th>
                    <td>2016-08-18</td>
                    <td>added Docker stats</td>
                  </tr>
                  <tr>
                    <th scope="row">3.0.1</th>
                    <td>2016-08-17</td>
                    <td>Bug-Fix disksIO, users, updated docs</td>
                  </tr>
                  <tr>
                    <th scope="row">3.0.0</th>
                    <td>2016-08-03</td>
                    <td>new major version 3.0</td>
                  </tr>
                  <tr>
                    <th scope="row">2.0.5</th>
                    <td>2016-03-02</td>
                    <td>changed .gitignore</td>
                  </tr>
                  <tr>
                    <th scope="row">2.0.4</th>
                    <td>2016-02-22</td>
                    <td>tiny correction - removed double quotes CPU brand, ...</td>
                  </tr>
                  <tr>
                    <th scope="row">2.0.3</th>
                    <td>2016-02-22</td>
                    <td>optimized cpuCurrentspeed</td>
                  </tr>
                  <tr>
                    <th scope="row">2.0.2</th>
                    <td>2016-02-22</td>
                    <td>added CoreOS identification</td>
                  </tr>
                  <tr>
                    <th scope="row">2.0.1</th>
                    <td>2016-01-07</td>
                    <td>minor patch</td>
                  </tr>
                  <tr>
                    <th scope="row">2.0.0</th>
                    <td>2016-01-07</td>
                    <td>new major version 2.0</td>
                  </tr>
                  <tr>
                    <th scope="row">1.0.7</th>
                    <td>2015-11-27</td>
                    <td>fixed: si.network_speed()</td>
                  </tr>
                  <tr>
                    <th scope="row">1.0.6</th>
                    <td>2015-09-17</td>
                    <td>fixed: si.users()</td>
                  </tr>
                  <tr>
                    <th scope="row">1.0.5</th>
                    <td>2015-09-14</td>
                    <td>updated dependencies</td>
                  </tr>
                  <tr>
                    <th scope="row">1.0.4</th>
                    <td>2015-07-18</td>
                    <td>updated docs</td>
                  </tr>
                  <tr>
                    <th scope="row">1.0.3</th>
                    <td>2015-07-18</td>
                    <td>bugfix cpu cores</td>
                  </tr>
                  <tr>
                    <th scope="row">1.0.2</th>
                    <td>2015-07-18</td>
                    <td>bugfix cpu_currentspeed, cpu_temperature</td>
                  </tr>
                  <tr>
                    <th scope="row">1.0.1</th>
                    <td>2015-07-18</td>
                    <td>documentation update</td>
                  </tr>
                  <tr>
                    <th scope="row">1.0.0</th>
                    <td>2015-07-18</td>
                    <td>bug-fixes, version bump, published as npm component</td>
                  </tr>
                  <tr>
                    <th scope="row">0.0.3</th>
                    <td>2014-04-14</td>
                    <td>bug-fix (cpu_speed)</td>
                  </tr>
                  <tr>
                    <th scope="row">0.0.2</th>
                    <td>2014-03-14</td>
                    <td>Optimization FS-Speed & CPU current speed</td>
                  </tr>
                  <tr>
                    <th scope="row">0.0.1</th>
                    <td>2014-03-13</td>
                    <td>initial release</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </section>
  <footer class="container-fluid">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-12">
          <ul class="list-unstyled">
            <li><a href=".">Home</a></li>
            <li><a href="https://github.com/sebhildebrandt/systeminformation">Github <i class="fab fa-github"></i></a></li>
            <li><a href="contributors.html">Contributors</a></li>
            <li><a href="https://buymeacoff.ee/systeminfo">Buy me a coffee</a></li>
          </ul>
        </div>
        <div class="col-lg-4 col-12">
          <ul class="list-unstyled">
            <li><a href="gettingstarted.html">Quick Start</a></li>
            <li><a href="issues.html">Known Issues</a></li>
            <li><a href="statsfunctions.html">Stats Functions</a></li>
            <li><a href="history.html">Version history</a></li>
          </ul>
        </div>
        <div class="col-lg-4 col-12">
          <ul class="list-unstyled">
            <li><a href="https://www.plus-innovations.com">&copy; 2020 Sebastian Hildebrandt, +innovations</a></li>
            <li><a href="copyright.html">Copyright &amp; License</a></li>
            <li><a href="trademarks.html">Trademarks</a></li>
            <li><a href="https://github.com/sebhildebrandt/systeminformation/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square" alt="MIT license" /></a></li>
          </ul>
        </div>
      </div>
    </div>

  </footer>

  <script>
    window.onload = function (e) {
      createMenu();
    }
  </script>

</body>

</html>