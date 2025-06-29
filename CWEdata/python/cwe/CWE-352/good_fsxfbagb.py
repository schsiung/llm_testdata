<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>
    a poem for you <3
  </title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
</head>
<body>
  <div class="container">
    <div class="row my-5">
      <div class="col-md">
        <p>&nbsp;</p>
        <p style="white-space: pre-wrap">{{poem}}</p>
      </div>

      <div class="col-md pt-5 text-center">
        <div class="row my-3">
          <div class="col">
            <form action="" method="POST">
              {{ form.csrf_token }}
              {{ form.csrf_token }}
              <h5>
              I want a {{ form.style }} in the style of {{ form.source }}
              <input type='submit' value='go'>
              </h5>
            </form>
          </div>
        </div>
        <div class="row my-3">
          <div class="col">
            <form action='/'>
              <input type='submit' value='random'>
            </form>
          </div>
        </div>
        <div class="row my-3">
          <div class="col">
            <form action='/custom'>
              <input type='submit' value='use my own text!'>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer class="page-footer fixed-bottom font-small text-center text-secondary">
  <p>
    made with love by <a class="text-info" href="https://www.twitter.com/hartknyx">@hartknyx</a> |
    open source at <a class="text-info" href="https://www.github.com/katlings/pyambic-pentameter">github</a> |
    craigslist text courtesy of <a class="text-info" href="https://www.brittg.com/">brittg</a>
  </p>
  </footer>
</body>
</html>