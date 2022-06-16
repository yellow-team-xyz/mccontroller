let language = '';
module.exports.get = (get);
module.exports.languages = (languages);
function get(html_id,callback) {
    let data = '';
    if(html_id=='101'){
        data = `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>${language.mccontroller_name} - 403</title>
    <link href="/static/images/logo.png" rel="icon">
    <link href="/static/css/bootstrap.min.css" rel="stylesheet">
    <link href="/static/boxicons/css/boxicons.min.css" rel="stylesheet">
    <link href="/static/css/style.css" rel="stylesheet">

</head>
<body id="body-pd" class="body-pd">
    <main id="app_loader">
        <div class="loader">
            <div class="box box0">
                <div></div>
            </div>
            <div class="box box1">
                <div></div>
            </div>
            <div class="box box2">
                <div></div>
            </div>
            <div class="box box3">
                <div></div>
            </div>
            <div class="box box4">
                <div></div>
            </div>
            <div class="box box5">
                <div></div>
            </div>
            <div class="box box6">
                <div></div>
            </div>
            <div class="box box7">
                <div></div>
            </div>
            <div class="ground">
                <div></div>
            </div>
        </div>
    </main>
    <main class="center" id="app_body" style="display: none;">
        <center>
            <h1 style="color: white;">${language['403_page'].error_title}</h1>
            <h5 style="color: white;">${language['403_page'].error_sub_title}</h5>
            <button style="margin-top: 15px;" class="btn btn-primary" onclick="window.location.reload();">${language['403_page'].error_reload_page_button}</button>
        </center>
    </main>
    <script type="text/javascript" src="/static/js/bootstrap.bundle.min.js"></script>
    <script src="/static/js/jquery-3.6.0.js"></script>
    <script src="/static/js/loader.js"></script>
</body>
</html>`;
    }
    if(html_id=='102'){
        data = `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>${language.mccontroller_name} - 404</title>
    <link href="/static/images/logo.png" rel="icon">
    <link href="/static/css/bootstrap.min.css" rel="stylesheet">
    <link href="/static/boxicons/css/boxicons.min.css" rel="stylesheet">
    <link href="/static/css/style.css" rel="stylesheet">

</head>
<body id="body-pd" class="body-pd">
    <main id="app_loader">
        <div class="loader">
            <div class="box box0">
                <div></div>
            </div>
            <div class="box box1">
                <div></div>
            </div>
            <div class="box box2">
                <div></div>
            </div>
            <div class="box box3">
                <div></div>
            </div>
            <div class="box box4">
                <div></div>
            </div>
            <div class="box box5">
                <div></div>
            </div>
            <div class="box box6">
                <div></div>
            </div>
            <div class="box box7">
                <div></div>
            </div>
            <div class="ground">
                <div></div>
            </div>
        </div>
    </main>
    <main class="center" id="app_body" style="display: none;">
        <center>
            <h1 style="color: white;">${language['404_page'].error_title}</h1>
            <h5 style="color: white;">${language['404_page'].error_sub_title}</h5>
            <button style="margin-top: 15px;" class="btn btn-primary" onclick="window.location.replace('/');">${language['404_page'].error_home_page_button}</button>
        </center>
    </main>
    <script type="text/javascript" src="/static/js/bootstrap.bundle.min.js"></script>
    <script src="/static/js/jquery-3.6.0.js"></script>
    <script src="/static/js/loader.js"></script>
</body>
</html>`;
    }
    if(html_id=='103'){
        data = `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>${language.mccontroller_name}</title>
    <link href="/static/images/logo.png" rel="icon">
    <link href="/static/css/bootstrap.min.css" rel="stylesheet">
    <link href="/static/boxicons/css/boxicons.min.css" rel="stylesheet">
    <link href="/static/css/style.css" rel="stylesheet">

</head>
<body id="body-pd" class="body-pd">
    <main id="app_loader">
        <div class="loader">
            <div class="box box0">
                <div></div>
            </div>
            <div class="box box1">
                <div></div>
            </div>
            <div class="box box2">
                <div></div>
            </div>
            <div class="box box3">
                <div></div>
            </div>
            <div class="box box4">
                <div></div>
            </div>
            <div class="box box5">
                <div></div>
            </div>
            <div class="box box6">
                <div></div>
            </div>
            <div class="box box7">
                <div></div>
            </div>
            <div class="ground">
                <div></div>
            </div>
        </div>
    </main>
    <script type="text/javascript" src="/static/js/bootstrap.bundle.min.js"></script>
    <script src="/static/js/jquery-3.6.0.js"></script>
    <script>setTimeout(() => {window.location.reload();}, 3100);</script>
</body>
</html>`;
    }
    if(html_id=='104'){
        data = `<main id="app_disconnect" class="center" style="display: none;">
    <center>
        <h1 style="color: white;">${language.socket_disconnect_page.socket_disconnect}</h1>
        <button style="margin-top: 15px;" class="btn btn-primary" onclick="window.location.reload();">${language.socket_disconnect_page.reload_for_reconnect_button}</button>
    </center>
</main>`;
    }
    callback(data);
}
function languages(json_data) {
    language = json_data;
}
