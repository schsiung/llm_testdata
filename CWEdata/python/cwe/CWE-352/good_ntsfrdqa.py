<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>CSRF issues with qute://settings</title>
        <script type="text/javascript">
            function add_img() {
                const elem = document.createElement("img")
                elem.src = "qute://settings/set?option=auto_save.interval&value=invalid";
                document.body.appendChild(elem);
            }
        </script>
    </head>
    <body>
        <form action="qute://settings/set?option=auto_save.interval&value=invalid" method="post"><button type="submit" id="via-form">Via form</button></form>
        <input type="button" onclick="add_img()" value="Via img" id="via-img">
        <a href="qute://settings/set?option=auto_save.interval&value=invalid" id="via-link">Via link</a>
        <a href="/redirect-to?url=qute://settings/set%3Foption=auto_save.interval%26value=invalid" id="via-redirect">Via redirect</a>
    </body>
</html>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>CSRF issues with qute://settings</title>
        <script type="text/javascript">
            function add_img() {
                const elem = document.createElement("img")
                elem.src = "qute://settings/set?option=auto_save.interval&value=invalid";
                document.body.appendChild(elem);
            }
        </script>
    </head>
    <body>
        <form action="qute://settings/set?option=auto_save.interval&value=invalid" method="post"><button type="submit" id="via-form">Via form</button></form>
        <input type="button" onclick="add_img()" value="Via img" id="via-img">
        <a href="qute://settings/set?option=auto_save.interval&value=invalid" id="via-link">Via link</a>
        <a href="/redirect-to?url=qute://settings/set%3Foption=auto_save.interval%26value=invalid" id="via-redirect">Via redirect</a>
    </body>
</html>