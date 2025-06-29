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

  <!-- Favicon -->
  <link rel="icon" type="image/png" sizes="192x192" href="/assets/android-icon-192x192.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="96x96" href="/assets/favicon-96x96.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png">

  <script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.9/typed.min.js"></script>

  <title>systeminformation</title>
  <script>
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    // We listen to the resize event
    // window.addEventListener('resize', () => {
    //   // We execute the same script as before
    //   let vh = window.innerHeight * 0.01;
    //   document.documentElement.style.setProperty('--vh', `${vh}px`);
    // });
    function init() {
      typed();
      document.querySelector('.down').addEventListener('click', function () {
        scrollIt(
          document.querySelector('.quickstart'),
          600,
          'easeOutQuad',
          function () {
            console.log('READY')
          }
        );
      });
      getDownloads();
    }
    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    function getDownloads() {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          var downloads = JSON.parse(this.responseText);
          document.getElementById("downloads").innerHTML = numberWithCommas(downloads.downloads);
        }
      };
      xhttp.open("GET", "https://api.npmjs.org/downloads/point/last-month/systeminformation", true);
      xhttp.send();
    }
    function getVersion() {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          var package = JSON.parse(this.responseText);
          document.getElementById("version").innerHTML = package.version;
        }
      };
      xhttp.open("GET", "https://registry.npmjs.org/systeminformation/latest", true);
      xhttp.send();
    }
    function typed() {
      var options = {
        strings: ["System and OS information library for node.js", "Get detailed hardware, system &amp; OS information.", "For Linux, macOS, Windows, FreeBSD, OpenBSD, NetBSD, SunOS"],
        typeSpeed: 60,
        loop: false,
        backDelay: 1200,

      }
      var typed = new Typed('#typed', options);
    }
    function scrollIt(destination, duration = 200, easing = 'linear', callback) {

      const easings = {
        linear(t) {
          return t;
        },
        easeInQuad(t) {
          return t * t;
        },
        easeOutQuad(t) {
          return t * (2 - t);
        },
        easeInOutQuad(t) {
          return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        },
        easeInCubic(t) {
          return t * t * t;
        },
        easeOutCubic(t) {
          return (--t) * t * t + 1;
        },
        easeInOutCubic(t) {
          return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        },
        easeInQuart(t) {
          return t * t * t * t;
        },
        easeOutQuart(t) {
          return 1 - (--t) * t * t * t;
        },
        easeInOutQuart(t) {
          return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
        },
        easeInQuint(t) {
          return t * t * t * t * t;
        },
        easeOutQuint(t) {
          return 1 + (--t) * t * t * t * t;
        },
        easeInOutQuint(t) {
          return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;
        }
      };

      const start = window.pageYOffset;
      const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

      const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
      const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
      const destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
      const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);

      if ('requestAnimationFrame' in window === false) {
        window.scroll(0, destinationOffsetToScroll);
        if (callback) {
          callback();
        }
        return;
      }

      function scroll() {
        const now = 'now' in window.performance ? performance.now() : new Date().getTime();
        const time = Math.min(1, ((now - startTime) / duration));
        const timeFunction = easings[easing](time);
        window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));

        if (window.pageYOffset === destinationOffsetToScroll) {
          if (callback) {
            callback();
          }
          return;
        }

        requestAnimationFrame(scroll);
      }

      scroll();
    }
  </script>

</head>

<body>
  <header class="bg-image-full">
    <div class="container">
      <img class="logo" src="assets/logo.png">
      <div class="title">systeminformation</div>
      <div class="subtitle"><span id="typed"></span></div>
      <div class="version">Current Version: <span id="version">4.30.5</span></div>
      <button class="btn btn-light" onclick="location.href='https://github.com/sebhildebrandt/systeminformation'">View on Github <i class=" fab fa-github"></i></button>
    </div>
    <div class="down">
      <button class="btn btn-primary mb-2" onclick="location.href='https://www.buymeacoffee.com/systeminfo'">Buy me a coffee&nbsp;&nbsp;<i class="far fa-mug-hot"></i></button>
      <br>Read Documentation<br>
      <i class="fal fa-caret-down caret"></i>
    </div>
  </header>

  <section class="container quickstart">
    <div class="row">
      <div class="col-12 sectionheader index">
        <div class="title">Overview</div>
        <div class="subtitle">Lightweight collection of 40+ functions to retrieve detailed hardware, system and OS information. For Linux, macOS, partial Windows, FreeBSD, OpenBSD, NetBSD and SunOS support</div>
        <div class="npmicons">
          <a href="https://npmjs.org/package/systeminformation" rel="nofollow"><img src="https://camo.githubusercontent.com/df25636cbefadf18ca1532e3bdcd0d2794235e19/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f73797374656d696e666f726d6174696f6e2e7376673f7374796c653d666c61742d737175617265" alt="NPM Version" data-canonical-src="https://img.shields.io/npm/v/systeminformation.svg?style=flat-square" style="max-width:100%;"></a>
          <a href="https://david-dm.org/sebhildebrandt/systeminformation" rel="nofollow"><img src="https://camo.githubusercontent.com/69739c043c2be3a38545f105b89381a2a6310f59/68747470733a2f2f696d672e736869656c64732e696f2f64617669642f73656268696c64656272616e64742f73797374656d696e666f726d6174696f6e2e7376673f7374796c653d666c61742d737175617265" alt="deps status" data-canonical-src="https://img.shields.io/david/sebhildebrandt/systeminformation.svg?style=flat-square" style="max-width:100%;"></a>
          <a href="https://lgtm.com/projects/g/sebhildebrandt/systeminformation/context:javascript" rel="nofollow"><img src="https://camo.githubusercontent.com/08409d6fb3794545416e1a40ca75172b54d34692/68747470733a2f2f696d672e736869656c64732e696f2f6c67746d2f67726164652f6a6176617363726970742f672f73656268696c64656272616e64742f73797374656d696e666f726d6174696f6e2e7376673f7374796c653d666c61742d737175617265" alt="Code Quality: Javascript" data-canonical-src="https://img.shields.io/lgtm/grade/javascript/g/sebhildebrandt/systeminformation.svg?style=flat-square" style="max-width:100%;"></a>
          <a href="https://lgtm.com/projects/g/sebhildebrandt/systeminformation/alerts" rel="nofollow"><img src="https://camo.githubusercontent.com/66428127fdde80fc8247a0c1df4c651f3a6b1c0a/68747470733a2f2f696d672e736869656c64732e696f2f6c67746d2f616c657274732f672f73656268696c64656272616e64742f73797374656d696e666f726d6174696f6e2e7376673f7374796c653d666c61742d737175617265" alt="Total alerts" data-canonical-src="https://img.shields.io/lgtm/alerts/g/sebhildebrandt/systeminformation.svg?style=flat-square" style="max-width:100%;"></a>
          <a href="https://github.com/sebhildebrandt/systeminformation/blob/master/LICENSE"><img src="https://camo.githubusercontent.com/4b5966a2a252ee0f241a1e03b13417178eb4964f/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c6963656e73652d4d49542d626c75652e7376673f7374796c653d666c61742d737175617265" alt="MIT license" data-canonical-src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square" style="max-width:100%;"></a>
        </div>
      </div>
    </div>
    <div class="row justify-content-center sectionheader index">
      <div class="col-8">
        <hr>
      </div>
    </div>
    <div class="row number-section">
      <div class="col-xl-4 col-lg-4 col-md-4 col-12">
        <div class="numbers">10,943</div>
        <div class="title">Lines of code</div>
      </div>
      <div class="col-xl-4 col-lg-4 col-md-4 col-12">
        <div id="downloads" class="numbers">...</div>
        <div class="title">Downloads last month</div>
      </div>
      <div class="col-xl-4 col-lg-4 col-md-4 col-12">
        <div class="numbers">359</div>
        <div class="title">Dependents</div>
      </div>
    </div>
    <div class="row justify-content-center sectionheader index">
      <div class="col-8">
        <hr>
      </div>
    </div>
    <div class="row" id="docs">
      <div class="col-12 sectionheader index">
        <div class="title">Documentation</div>
        <div class="subtitle">Detailed documentation and reference for Version 4.x.x</div>
      </div>
    </div>
    <div class="row index">
      <a href="gettingstarted.html" class="col-xl-3 col-lg-3 col-md-4 col-6 features">
        <div class="inner">
          <div class="icons"><i class="fal fa-download"></i></div>
          <div class="icontitle">Getting Started</div>
        </div>
      </a>
      <a href="general.html" class="col-xl-3 col-lg-3 col-md-4 col-6 features">
        <div class="inner">
          <div class="icons"><i class="fal fa-th-list"></i></div>
          <div class="icontitle">General</div>
        </div>
      </a>
      <a href="system.html" class="col-xl-3 col-lg-3 col-md-4 col-6 features">
        <div class="inner">
          <div class="icons"><i class="fal fa-server"></i></div>
          <div class="icontitle">System</div>
        </div>
      </a>
      <a href="cpu.html" class="col-xl-3 col-lg-3 col-md-4 col-6 features">
        <div class="inner">
          <div class="icons"><i class="fal fa-microchip"></i></div>
          <div class="icontitle">CPU</div>
        </div>
      </a>
      <a href="memory.html" class="col-xl-3 col-lg-3 col-md-4 col-6 features">
        <div class="inner">
          <div class="icons"><i class="fal fa-memory"></i></div>
          <div class="icontitle">Memory</div>
        </div>
      </a>
      <a href="battery.html" class="col-xl-3 col-lg-3 col-md-4 col-6 features">
        <div class="inner">
          <div class="icons"><i class="fal fa-battery-half"></i></div>
          <div class="icontitle">Battery</div>
        </div>
      </a>
      <a href="graphics.html" class="col-xl-3 col-lg-3 col-md-4 col-6 features">
        <div class="inner">
          <div class="icons"><i class="fal fa-desktop"></i></div>
          <div class="icontitle">Graphics</div>
        </div>
      </a>
      <a href="os.html" class="col-xl-3 col-lg-3 col-md-4 col-6 features">
        <div class="inner">
          <div class="icons"><i class="fal fa-window"></i></div>
          <div class="icontitle">OS</div>
        </div>
      </a>
      <a href="processes.html" class="col-xl-3 col-lg-3 col-md-4 col-6 features">
        <div class="inner">
          <div class="icons"><i class="fal fa-chart-line"></i></div>
          <div class="icontitle">Process/Service</div>
        </div>
      </a>
      <a href="filesystem.html" class="col-xl-3 col-lg-3 col-md-4 col-6 features">
        <div class="inner">
          <div class="icons"><i class="fal fa-hdd"></i></div>
          <div class="icontitle">Disks / FS</div>
        </div>
      </a>
      <a href="network.html" class="col-xl-3 col-lg-3 col-md-4 col-6 features">
        <div class="inner">
          <div class="icons"><i class="fal fa-network-wired"></i></div>
          <div class="icontitle">Network</div>
        </div>
      </a>
      <a href="wifi.html" class="col-xl-3 col-lg-3 col-md-4 col-6 features">
        <div class="inner">
          <div class="icons"><i class="fal fa-wifi"></i></div>
          <div class="icontitle">Wifi</div>
        </div>
      </a>
      <a href="docker.html" class="col-xl-3 col-lg-3 col-md-4 col-6 features">
        <div class="inner">
          <div class="icons"><i class="fab fa-docker"></i></div>
          <div class="icontitle">Docker</div>
        </div>
      </a>
      <a href="vbox.html" class="col-xl-3 col-lg-3 col-md-4 col-6 features">
        <div class="inner">
          <div class="icons"><i class="fal fa-box-open"></i></div>
          <div class="icontitle">Virtual Box</div>
        </div>
      </a>
    </div>
    <div class="row justify-content-center sectionheader index">
      <div class="col-8">
        <hr>
      </div>
    </div>
    <div class="row">
      <div class="col-12 sectionheader index">
        <div class="title-small">Issues</div>
        <div class="text">If you run into problems, please check out <a href="issues.html">known issues page</a> first. If you still have problems, please feel free to open an issue on our <a href="https://github.com/sebhildebrandt/systeminformation/issues">github page</a></div>
        <div class="title-small">Upcoming ...</div>
        <div class="text"><span class="bold">MacOS on ARM, Windows on ARM</span> - we will have a closer look on that! As soon as we have the new hardware here, will work on support for those platforms. We are also planning a new major version <span class="bold">Version 5</span> with some minor breaking changes and some additional features. We will try to make this available Q1 of 2021.<br /><br /></div>
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

  <!-- Optional JavaScript -->
  <!-- jQuery first, then Popper.js, then Bootstrap JS -->
  <script>
    window.onload = function (e) {
      init();
    }
  </script>
</body>

</html>