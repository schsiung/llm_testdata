<!--
Copyright 2017 Google Inc. All rights reserved.

Licensed under the Apache License, Version 2.0 (the "License"); you may not
use this file except in compliance with the License. You may obtain a copy of
the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
License for the specific language governing permissions and limitations under
the License.
-->
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1, user-scalable=yes">

    <title>Rendertron</title>
    <meta name="description" content="Rendertron - headless rendering service">

    <link href="https://fonts.googleapis.com/css?family=Orbitron" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-104508854-1', 'auto');
      ga('send', 'pageview');
    </script>

    <style>
      body {
        background: black;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-family: 'Orbitron', sans-serif;
        margin: 0;
        min-height: calc(100vh - 40px);
        padding: 20px 0;
      }

      h1 {
        font-size: 60px;
        color: white;
        border-bottom: 1px solid #99f3ff;
        margin: 64px 32px;
      }

      #search-bar {
        min-width: 300px;
        width: calc(100% - 40px);
        max-width: 664px;
        position: relative;
        box-sizing: border-box;
      }

      input[type=url] {
        width: 100%;
        padding: 30px;
        box-sizing: border-box;
        border: none;
        font-size: 24px;
        background: black;
        border-radius: 10px;
        border: 2px solid #99f3ff;
        color: white;
        font-family: 'Orbitron', sans-serif;
        text-align: center;
      }

      progress-bar {
        --progress-bar-color: #99f3ff;
        height: 10px;
        position: absolute;
        margin-top: -10px;
        border-radius: 0 0 10px 10px;
      }

      #options {
        margin-top: 32px;
        display: flex;
        flex-wrap: wrap;
        max-width: 800px;
        justify-content: center;
      }

      #options > * {
        margin: 32px;
      }

      #options button {
        display: block;
        width: 300px;
        height: 300px;
        border: 1px solid #99f3ff;
        color: white;
        background: none;
        display: flex;
        flex-direction: column;
        font-size: 18px;
        font-family: 'Orbitron', sans-serif;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }

      .loading {
        box-shadow: #99f3ff 0px 0px 7px 4px;
        animation: pulse 1s infinite alternate cubic-bezier(0.4, 0, 0.2, 1)
      }

      @keyframes pulse {
        from {
          filter: blur(0px);
          transform: none;
        }
        to {
          filter: blur(1px);
          transform: scale(1.05);
        }
      }

      #options button i {
        font-size: 96px;
      }

      #options button span {
        margin-top: 24px;
        max-width: 200px;
        line-height: 24px;
      }

      a {
        text-decoration: none;
        color: inherit;
      }

      :focus, #url:focus, #options button:hover {
        transition: 100ms box-shadow cubic-bezier(0, 0, 0.2, 1);
        box-shadow: #99f3ff 0px 0px 7px 4px;
      }

      @media (max-width: 500px) {
        h1 {
          font-size: 40px;
        }
      }
    </style>
  </head>
  <body>
    <h1>Rendertron</h1>

    <div id="search-bar">
      <input id="url" type="url" placeholder="Enter a URL" autocapitalize="off" spellcheck="false">
      <progress-bar hidden></progress-bar>
    </div>

    <div id="options">
      <button onclick="takeScreenshot(this)">
        <i class="material-icons">photo_camera</i>
        <span>Take screenshot</span>
      </button>
      <button onclick="render(this, false)">
        <i class="material-icons">cloud_upload</i>
        <span>Render &amp; serialize</span>
      </button>
      <button onclick="render(this, true)">
        <i class="material-icons">code</i>
        <span>Render &amp; serialize with web components v1</span>
      </button>
      <a href="https://github.com/samuelli/bot-render" target="_blank">
        <button tabindex="-1">
          <i class="material-icons">insert_drive_file</i>
          <span>View documentation</span>
        </button>
      </a>
    </div>



    <script>
    function render(element, webcomponents) {
      if (!url.value)
        return;
      element.classList.add('loading');
      document.querySelector('progress-bar').removeAttribute('hidden');
      var queryParams = webcomponents ? '?wc-inject-shadydom=true' : '';
      window.location.href += `render/${url.value.replace('?', '%3F')}${queryParams}`;
    }

    function takeScreenshot(element) {
      if (!url.value)
        return;
      element.classList.add('loading');
      document.querySelector('progress-bar').removeAttribute('hidden');
      window.location.href += `screenshot/${url.value.replace('?', '%3F')}?width=${window.innerWidth}&height=${window.innerHeight}`;
    }
    </script>

    <link rel="import" href="node_modules/progress-bar-element/progress-bar.html">
  </body>
</html>