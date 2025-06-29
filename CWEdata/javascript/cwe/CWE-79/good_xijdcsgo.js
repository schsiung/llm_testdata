<html>
  <head>
    <link
      href="https://fonts.googleapis.com/css?family=Montserrat&display=swap"
      rel="stylesheet"
    />
    <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css?family=Noto+Sans+SC&display=swap" rel="stylesheet">
    <style>
      body {
        /* background: rgb(221, 208, 208); */
        /* background:#333; */
        font-family: 'Arial';
        /* font-size: 18px !important; */
        }
      h1 { color: grey;}
      .mermaid2 {
        display: none;
      }
      .mermaid svg {
        /* font-size: 18px !important; */
      }
      .malware {
        position: fixed;
        bottom:0;
        left:0;
        right:0;
        height: 150px;
        background: red;
        color: black;
        display: flex;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: monospace;
        font-size: 72px;
      }
    </style>
  </head>
  <body>
    <div>Security check</div>
    <div class="flex">
      <div id="diagram" class="mermaid"></div>
      <div id="res" class=""></div>
  <script src="./mermaid.js"></script>
    <script>
      mermaid.parseError = function (err, hash) {
        // console.error('Mermaid error: ', err);
      };
      mermaid.initialize({
        theme: 'forest',
        arrowMarkerAbsolute: true,
        // themeCSS: '.edgePath .path {stroke: red;} .arrowheadPath {fill: red;}',
        logLevel: 0,
        state: {
          defaultRenderer: 'dagre-d3',
        },
        flowchart: {
          // defaultRenderer: 'dagre-wrapper',
          nodeSpacing: 10,
    curve: 'cardinal',
    htmlLabels: true,
        },
        htmlLabels: true,
        // gantt: { axisFormat: '%m/%d/%Y' },
        sequence: { actorFontFamily: 'courier', actorMargin: 50, showSequenceNumbers: false },
        // sequenceDiagram: { actorMargin: 300 } // deprecated
        // fontFamily: '"times", sans-serif',
        // fontFamily: 'courier',
        fontSize: 18,
        curve: 'basis',
        securityLevel: 'loose',
        startOnLoad: false,
        secure: ['secure', 'securityLevel', 'startOnLoad', 'maxTextSize'],
        // themeVariables: {relationLabelColor: 'red'}
      });
      function callback() {
  alert('It worked');
}
      function xssAttack() {
        const div = document.createElement('div');
        div.id = 'the-malware';
        div.className = 'malware';
        div.innerHTML = 'XSS Succeeded';
        document.getElementsByTagName('body')[0].appendChild(div);
        throw new Error('XSS Succeded');
      }

      var diagram = `sequenceDiagram
    participant Alice
    links Alice: { "Click me!" : "javasjavascript:cript:alert('goose')" }`;

// //   var diagram = "stateDiagram-v2\n";
// //  diagram += "<img/src='1'/onerror"
// diagram += '//via.placeholder.com/64\' width=64 />"]';
// console.log(diagram);
// document.querySelector('#diagram').innerHTML = diagram;
mermaid.render('diagram', diagram, (res) => {
  console.log(res);
  document.querySelector('#res').innerHTML = res;
});
    </script>
  </body>
</html>

<html>
  <head>
    <link
      href="https://fonts.googleapis.com/css?family=Montserrat&display=swap"
      rel="stylesheet"
    />
    <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css?family=Noto+Sans+SC&display=swap" rel="stylesheet">
    <style>
      body {
        /* background: rgb(221, 208, 208); */
        /* background:#333; */
        font-family: 'Arial';
        /* font-size: 18px !important; */
        }
      h1 { color: grey;}
      .mermaid2 {
        display: none;
      }
      .mermaid svg {
        /* font-size: 18px !important; */
      }
      .malware {
        position: fixed;
        bottom:0;
        left:0;
        right:0;
        height: 150px;
        background: red;
        color: black;
        display: flex;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: monospace;
        font-size: 72px;
      }
    </style>
  </head>
  <body>
    <div>Security check</div>
    <div class="flex">
      <div id="diagram" class="mermaid"></div>
      <div id="res" class=""></div>
  <script src="./mermaid.js"></script>
    <script>
      mermaid.parseError = function (err, hash) {
        // console.error('Mermaid error: ', err);
      };
      mermaid.initialize({
        theme: 'forest',
        arrowMarkerAbsolute: true,
        // themeCSS: '.edgePath .path {stroke: red;} .arrowheadPath {fill: red;}',
        logLevel: 0,
        state: {
          defaultRenderer: 'dagre-d3',
        },
        flowchart: {
          // defaultRenderer: 'dagre-wrapper',
          nodeSpacing: 10,
    curve: 'cardinal',
    htmlLabels: true,
        },
        htmlLabels: true,
        // gantt: { axisFormat: '%m/%d/%Y' },
        sequence: { actorFontFamily: 'courier', actorMargin: 50, showSequenceNumbers: false },
        // sequenceDiagram: { actorMargin: 300 } // deprecated
        // fontFamily: '"times", sans-serif',
        // fontFamily: 'courier',
        fontSize: 18,
        curve: 'basis',
        securityLevel: 'loose',
        startOnLoad: false,
        secure: ['secure', 'securityLevel', 'startOnLoad', 'maxTextSize'],
        // themeVariables: {relationLabelColor: 'red'}
      });
      function callback() {
  alert('It worked');
}
      function xssAttack() {
        const div = document.createElement('div');
        div.id = 'the-malware';
        div.className = 'malware';
        div.innerHTML = 'XSS Succeeded';
        document.getElementsByTagName('body')[0].appendChild(div);
        throw new Error('XSS Succeded');
      }

      var diagram = `sequenceDiagram
    participant Alice
    links Alice: { "Click me!" : "javasjavascript:cript:alert('goose')" }`;

// //   var diagram = "stateDiagram-v2\n";
// //  diagram += "<img/src='1'/onerror"
// diagram += '//via.placeholder.com/64\' width=64 />"]';
// console.log(diagram);
// document.querySelector('#diagram').innerHTML = diagram;
mermaid.render('diagram', diagram, (res) => {
  console.log(res);
  document.querySelector('#res').innerHTML = res;
});
    </script>
  </body>
</html>
