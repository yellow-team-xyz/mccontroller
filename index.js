const express = require('express');
const colors = require('colors');
const pidusage = require('pidusage');
const url = require("url");
const bodyparser = require('body-parser');
const { spawn } = require('child_process');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const fs = require('fs');
const lineReader = require('line-reader');
const request = require('request');
const mcping = require("mcping-js");
const download = require('download');
const expressip = require('express-ip');

app.use(expressip().getIpInfoMiddleware);
app.use('/static', express.static('static'));
app.use('/static/server-icon.png', express.static('./server/server-icon.png'));
app.use(bodyparser.urlencoded({ extended: true }));

console.log("Please wait while reading the information".yellow);

let dict = 'qwertyuioplkjhgfdsazxcv.bnm12345678.9QWERTYUIOPASDFGHJKLZXCVBNM123%#@%4567890';
let dict_s = 'ZXCVBNM.LKJHGFDSAQWERTYUIOP@#$%^12345678#90z%.xcvbnmlkjhgfdsaqwertyuiop';

let login_token = '';
for(var i = 0; i < 128; i++){
  login_token = login_token + dict_s.charAt(Math.floor(Math.random() * dict_s.length));
}
let socketiokey = '';
for(var i = 0; i < 64; i++){
  socketiokey = socketiokey + dict.charAt(Math.floor(Math.random() * dict.length));
}
let sendsocketkey = '';
for(var i = 0; i < 64; i++){
  sendsocketkey = sendsocketkey + dict.charAt(Math.floor(Math.random() * dict.length));
}

let serverstatus = 'off';
let loadui = 'off';

let webserverport = "";
let webip = "";
let multipleips = "";

let serverip = "";

let dash_head = "";
let dash_main = "";
let dash_nav = "";
let dash_nav_side = "";
let dash_script = "";

let login_head = "";
let login_main = "";
let login_script = "";

let blacklist_ip = ""

fs.readFile('config.yco', 'utf8', function(err, data){
  datajson = JSON.parse(data);
  webserverport = datajson.webserverport;
  webip = datajson.webip;
  serverip = datajson.serverip;
  multipleips = datajson.multipleips;

  console.log("Done!".green);

  request.get(`http://api.yellow-team.xyz/news/?event=mccontroller_news`,  (error, resp, body)  => {
    console.log('News: '.green+`${body}`.yellow);
  });


        console.log("Starting...".yellow);
        console.log("Connecting to the database and reading information".yellow);

        setTimeout(() => {

          let username = 'admin';
          let password = '';
          let setup = '';
          let min_ram = '';
          let max_ram = '';
          let version = '';
          let servername = '';
          let software = '';
          let eula = '';
          
          let serverport = '';

          console.log("Loading Blacklist Ip".red);
          fs.readFile('data/blacklist_ip.ydb', 'utf8', function(err, data){
            blacklist_ip = data.split("\n");
            console.log('Done!'.green);
          });
          
          setInterval(() => {
            fs.readFile('data/setup.ydb', 'utf8', function(err, setupdata){
              setupjson = JSON.parse(setupdata);
              password = setupjson.admin_password;
              setup = setupjson.setup;
              min_ram = setupjson.min_ram;
              max_ram = setupjson.max_ram;
              version = setupjson.version;
              servername = setupjson.server_name
              software = setupjson.software;
              eula = setupjson.eula;
              serverport = setupjson.port;
            });
            fs.readFile('data/blacklist_ip.ydb', 'utf8', function(err, data){
              blacklist_ip = data.split("\n");
            });
            
          }, 1000);
          
          setTimeout(() => {
          

          module.exports.io = (io);
          module.exports.app = (app);
          module.exports.fs = (fs);
          module.exports.url = (url);
          module.exports.bodyparser = (bodyparser);
          module.exports.expressip = (expressip);
          module.exports.webserverport = (webserverport);
          module.exports.webip = (webip);
          module.exports.multipleips = (multipleips);
          module.exports.serverip = (serverip);

          setInterval(() => {
            module.exports.serverstatus = (serverstatus);
            module.exports.loadui = (loadui);
            module.exports.sendsocketkey = (sendsocketkey);
            module.exports.socketiokey = (socketiokey);
            module.exports.blacklist_ip = (blacklist_ip);
            module.exports.username = (username);
            module.exports.password = (password);
            module.exports.login_token = (login_token);
            module.exports.setup = (setup);
            module.exports.min_ram = (min_ram);
            module.exports.max_ram = (max_ram);
            module.exports.version = (version);
            module.exports.servername = (servername);
            module.exports.software = (software);
            module.exports.eula = (eula);
            module.exports.serverport = (serverport);
            if(serverstatus=='on'){
              module.exports.minecraft = (minecraft);
            }
          }, );
          
          
          console.log("Done!".green);
          if(setup==1){
          console.log("Checking the jar file".red);

          if (fs.existsSync(`./server/software/${software}/server_${version}.jar`)) {
            console.log("Done!".green);
          }else{
            console.log('Jar file not found please wait'.yellow);
            request.get(`https://api.yellow-team.xyz/update/?event=minecraft_up&version=${version}&software=${software}`,  (error, resp, body)  => {
              (async () => {
                loadui='on';
                console.log('Start Downloading | '.yellow+`Minecraft_${version} | `.green+`URL: ${body}`);
                fs.writeFileSync(`./server/software/${software}/server_${version}.jar`, await download(body));
                console.log('Downloading Done!'.green);
                loadui='off';
              })();
            });
          }
        }
          
          function minecraft_server() {
            fs.writeFile('server/eula.txt', "eula=true", 'utf-8', function(err, data) {
              console.log('Accept Minecraft EULA!'.yellow);
            });
            console.log("Checking Server.Properties".yellow);
            fs.readFile('server/server.properties', 'utf8', function(err, data){
              server_split_conf = data.split("\r\n",);
              let save_server_conf = `${server_split_conf[0]}\r\n${server_split_conf[1]}\r\n${server_split_conf[2]}\r\n${server_split_conf[3]}\r\n${server_split_conf[4]}\r\n${server_split_conf[5]}\r\n${server_split_conf[6]}\r\n${server_split_conf[7]}\r\n${server_split_conf[8]}\r\n${server_split_conf[9]}\r\n${server_split_conf[10]}\r\n${server_split_conf[11]}\r\n${server_split_conf[12]}\r\n${server_split_conf[13]}\r\n${server_split_conf[14]}\r\n${server_split_conf[15]}\r\n${server_split_conf[16]}\r\n${server_split_conf[17]}\r\n${server_split_conf[18]}\r\n${server_split_conf[19]}\r\n${server_split_conf[20]}\r\n${server_split_conf[21]}\r\n${server_split_conf[22]}\r\n${server_split_conf[23]}\r\n${server_split_conf[24]}\r\n${server_split_conf[25]}\r\n${server_split_conf[26]}\r\n${server_split_conf[27]}\r\n${server_split_conf[28]}\r\n${server_split_conf[29]}\r\n${server_split_conf[30]}\r\n${server_split_conf[31]}\r\nserver-port=${serverport}\r\n${server_split_conf[33]}\r\n${server_split_conf[34]}\r\n${server_split_conf[35]}\r\n${server_split_conf[36]}\r\n${server_split_conf[37]}\r\n${server_split_conf[38]}\r\n${server_split_conf[39]}\r\n${server_split_conf[40]}\r\n${server_split_conf[41]}\r\n${server_split_conf[42]}\r\n${server_split_conf[43]}\r\n${server_split_conf[44]}\r\n${server_split_conf[45]}\r\n${server_split_conf[46]}\r\n${server_split_conf[47]}\r\n${server_split_conf[48]}\r\n${server_split_conf[49]}\r\n${server_split_conf[50]}\r\n${server_split_conf[51]}\r\n${server_split_conf[52]}`;
              fs.writeFile('server/server.properties', save_server_conf, 'utf-8', function(err, data) {
                console.log("Done!".green);
                minecraft = spawn(
                  "java",
                  [`-Xms${min_ram}G`, `-Xmx${max_ram}G`, '-jar', `./software/${software}/server_${version}.jar`, 'nogui'],
                  {cwd:"./server"}
                );
                console.log('Server Start By Web'.green);
                serverstatus='on';
                return minecraft;
              });
            });
            
          } 
          
          io.on('connection', function (socket) {
            console.log("Socket Client Connected!".green);
            setInterval(() => {
              socket.emit(`${socketiokey}_status`,`${serverstatus}`);
              const server = new mcping.MinecraftServer(serverip, serverport);
              server.ping(10e3, 757, (err, res) => {
              if(res){
                io.emit(`${socketiokey}_server_online`,`Online`);
              }
              });
              if(serverstatus=='on'){
                pidusage(minecraft.pid, function (err, stats) {
                  if(serverstatus=='on'){
                    memoryuseserver =stats.memory/1000000;
                    socket.emit(`${socketiokey}_cpudata`,`${stats.cpu}`);
                    socket.emit(`${socketiokey}_ramdata`,`${memoryuseserver}`);
                  }
                });
              }
            }, 1000);
            if(serverstatus=='on'){
              socket.emit(`${socketiokey}_console_log`, `Server is Online ✅`);
              minecraft.stdout.on('data', function (data) {
                if (data) {
                  socket.emit(`${socketiokey}_console_log`,`${data}`); 
                }
              });
            }
          
            lineReader.eachLine('server/logs/latest.log', 'utf8', function(log, last) {
              io.emit(`${socketiokey}_log`,`${log}`);
            });
            
          });
          
          app.get('/', function(req, res){

              if(blacklist_ip.includes(`${req.ipInfo.ip}`)==true){
                res.send(`
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Error 403</title>
	<link rel="icon" href="/static/img/logo.png">
	<link href="/static/css/error.css" rel="stylesheet">
</head>
<body>
	<div id="notfound">
		<div class="notfound">
			<div class="notfound-404">
				<h1>403</h1>
			</div>
			<h2>Access denied ${req.ipInfo.ip}</h2>
			<p>Your IP is blocked!</p>
		</div>
	</div>

</body>
</html>
                `);
              }else{
              const params = url.parse(req.url,true).query;
          
              let errorcode = params.errorcode;
          
              let errormsg="";
              
              if(errorcode=="101"){
                  errormsg=`<center><div class="alert alert-danger" role="alert">Wrong Username or Password</div></center>`;
              }
              if(errorcode=="102"){
                errormsg=`<center><div class="alert alert-success" role="alert">Setup Done Please Login</div></center>`;
              }
              if(errorcode=="103"){
                errormsg=`<center><div class="alert alert-success" role="alert">Logout Done</div></center>`;
              }
              if(errorcode=="104"){
                errormsg=`<center><div class="alert alert-danger" role="alert">ServerPort value are not allowed</div></center>`;
              }
              if(errorcode==null){
                  errormsg="";
              }
          
              if(loadui=="on"){
                res.send(`
                <html>
<head>
<title>McController - Please wait</title>
<link rel="icon" href="/static/img/logo.png">
<link href="/static/css/bootstrap.min.css" rel="stylesheet">
<link href="/static/css/load.css" rel="stylesheet">
<script src="/static/js/bootstrap.bundle.min.js"></script>
</head>
<body class="bg-dark">		
	<div id="load-content">
	<center><h4 style="color:White;">Please wait Do not turn off the program</h4></center>
		<div id="loader-wrapper">
			<div id="loader"></div>
		</div>

	</div>
	<script>
	setTimeout(() => {
	location.reload();
    },5500);
	</script>
</body>
</html>
                `);
              }

              if(setup==0&&loadui=="off"){
                res.send(`
          <html>
              <head>
                  <title>McController - Setup</title>
                  <link rel="icon" href="/static/img/logo.png">
                  <link href="/static/css/bootstrap.min.css" rel="stylesheet">
                  <script src="/static/js/bootstrap.bundle.min.js"></script>
                  <style>   
                    .btn-login {
                      font-size: 0.9rem;
                      letter-spacing: 0.05rem;
                      padding: 0.75rem 1rem;
                    }
                    
                    .btn-yellow-team {
                      color: white !important;
                      background-color: #ffbf00;
                    }
                  </style>
              </head>
              <body class="bg-dark">
              
              <div class="container">
              <div class="row">
                <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                  <div class="card border-0 shadow rounded-3 my-5">
                    <div class="card-body p-4 p-sm-5">
                      <h5 class="card-title text-center mb-5 fw-light fs-5">McController - Setup</h5>
                      ${errormsg}
                      <form action="/dashboard/" method="post">
                        <div class="form-floating mb-3">
                          <input type="password" class="form-control" id="newpassword" name="newpassword" placeholder="Admin Password">
                          <label for="newpassword">Admin Password</label>
                        </div>
                        <div class="form-floating mb-3">
                          <input type="text" class="form-control" id="new_port" name="new_port" placeholder="Server Port">
                          <label for="new_port">Server Port</label>
                        </div>
                        <div class="form-floating mb-3">
                          <input type="text" class="form-control" id="new_min_ram" name="new_min_ram" placeholder="Min Ram Use G">
                          <label for="new_min_ram">Min Ram Use (G)</label>
                        </div>
                        <div class="form-floating mb-3">
                          <input type="text" class="form-control" id="new_max_ram" name="new_max_ram" placeholder="Max Ram Use G">
                          <label for="new_max_ram">Max Ram Use (G)</label>
                        </div>
                        <div class="form-floating mb-3">
                          <input type="text" class="form-control" id="new_servername" name="new_servername" placeholder="Server Name">
                          <label for="new_servername">Server Name</label>
                        </div>
                        <div class="form-select mb-3">
                        <label class="form-check-label" for="new_software">
                          Minecraft Server Software
                        </label>
                        <select name="new_software" class="form-select mb-3">
                          <option value="paper">Paper</option>
                          <option value="spigot">Spigot</option>
                        </select>
                        </div>
                        <div class="form-select mb-3">
                        <label class="form-check-label" for="new_version">
                          Minecraft Server Version
                        </label>
                        <select name="new_version" class="form-select mb-3">
                        <option value="1.18.1">1.18.1</option>
                        <option value="1.17.1">1.17.1</option>
                        <option value="1.16.5">1.16.5</option>
                        <option value="1.15.2">1.15.2</option>
                        <option value="1.14.4">1.14.4</option>
                        <option value="1.13.2">1.13.2</option>
                        <option value="1.12.2">1.12.2</option>
                        <option value="1.11.2">1.11.2</option>
                        <option value="1.10.2">1.10.2</option>
                        <option value="1.9.4">1.9.4</option>
                        <option value="1.8.8">1.8.8</option>
                        </select>
                        </div>
          
                        <div class="form-check mb-3">
                          <input class="form-check-input" type="checkbox" value="true" name="new_eula">
                          <label class="form-check-label" for="new_eula">
                          Accept Minecraft EULA
                          </label>
                        </div>
                        <div class="d-grid">
                          <button class="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Setup</button>
                        </div>
                        <hr class="my-4">
                        </form>
                        <div class="d-grid mb-2">
                          <a href="https://yellow-team.xyz/"><center><button class="btn btn-yellow-team btn-login text-uppercase fw-bold">Power By Yellow Team</button></center></a>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              </body>
          </html>
              `);
              }else{
                if(setup==1&&loadui=="off"){
                  res.send(`
          <html>
              <head>
                  <title>McController - Login</title>
                  <link rel="icon" href="/static/img/logo.png">
                  <link href="/static/css/bootstrap.min.css" rel="stylesheet">
                  <script src="/static/js/bootstrap.bundle.min.js"></script>
                  <style>   
                    .btn-login {
                      font-size: 0.9rem;
                      letter-spacing: 0.05rem;
                      padding: 0.75rem 1rem;
                    }
                    
                    .btn-yellow-team {
                      color: white !important;
                      background-color: #ffbf00;
                    }
                  </style>
                  ${login_head}
              </head>
              <body class="bg-dark">
              
              <div class="container">
              <div class="row">
                <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                  <div class="card border-0 shadow rounded-3 my-5">
                    <div class="card-body p-4 p-sm-5">
                      <h5 class="card-title text-center mb-5 fw-light fs-5">McController - Login</h5>
                      <form action="/dashboard/" method="post">
                        ${errormsg}
                        <div class="form-floating mb-3">
                          <input type="text" class="form-control" id="username" name="username" placeholder="Username">
                          <label for="username">Username</label>
                        </div>
                        <div class="form-floating mb-3">
                          <input type="password" class="form-control" id="password" name="password" placeholder="Password">
                          <label for="password">Password</label>
                        </div>
          
                        <div class="form-check mb-3">
                          <input class="form-check-input" type="checkbox" value="" id="rememberPasswordCheck">
                          <label class="form-check-label" for="rememberPasswordCheck">
                            Remember password
                          </label>
                        </div>
                        <div class="d-grid">
                          <button class="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Login</button>
                        </div>
                        ${login_main}
                        <hr class="my-4">
                        </form>
                        <div class="d-grid mb-2">
                          <a href="https://yellow-team.xyz/"><center><button class="btn btn-yellow-team btn-login text-uppercase fw-bold">Power By Yellow Team</button></center></a>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              <script>
              ${login_script}
              </script>
              </body>
          </html>
              `);
                }
              }
              }
          });
          app.get('/dashboard/', function(req, res){
            if(blacklist_ip.includes(`${req.ipInfo.ip}`)==true){
              res.send(`
<html lang="en">
<head>
<meta charset="utf-8">
<title>Error 403</title>
<link rel="icon" href="/static/img/logo.png">
<link href="/static/css/error.css" rel="stylesheet">
</head>
<body>
<div id="notfound">
  <div class="notfound">
    <div class="notfound-404">
      <h1>403</h1>
    </div>
    <h2>Access denied ${req.ipInfo.ip}</h2>
    <p>Your IP is blocked!</p>
  </div>
</div>

</body>
</html>
              `);
            }else{
          res.send(`
          <script>
          window.location.replace("/?errorcode=101");
          </script>
          `);
            }
          });
          app.post('/dashboard/', function(req, res){
            if(blacklist_ip.includes(`${req.ipInfo.ip}`)==true){
              res.send(`
<html lang="en">
<head>
<meta charset="utf-8">
<title>Error 403</title>
<link rel="icon" href="/static/img/logo.png">
<link href="/static/css/error.css" rel="stylesheet">
</head>
<body>
<div id="notfound">
  <div class="notfound">
    <div class="notfound-404">
      <h1>403</h1>
    </div>
    <h2>Access denied ${req.ipInfo.ip}</h2>
    <p>Your IP is blocked!</p>
  </div>
</div>

</body>
</html>
              `);
            }else{
            if(serverstatus=='on'){
              minecraft.on('exit', (code, signal) => {
                if (signal) console.log(`Process killed with signal: ${signal}`);
                io.emit(`${socketiokey}_console_log`, `The Server ShutDown ✅`); 
                console.log('Server Stop By Web'.yellow);
                minecraft.kill();
                serverstatus='off';
              });
              
            }
              const sendsocket = req.body.sendsocketkey;
              const event = req.body.event;
              const cmd_send = req.body.cmd_send;
              if(sendsocket==sendsocketkey){
                if(event=='update_log'){
                  lineReader.eachLine('server/logs/latest.log', 'utf8', function(log, last) {
                    io.emit(`${socketiokey}_log`,`${log}`);
                  });
                }
              }
              if(serverstatus=='off'){
                
          
                if(sendsocket==sendsocketkey){
                  if(event=='startserver'){
                    minecraft_server();
                    setTimeout(() => {
                      if(serverstatus=='on'){
                        minecraft.stdout.on('data', function (data) {
                          if (data) {
                            io.emit(`${socketiokey}_console_log`,`${data}`); 
                          }
                        });
                      }
                    }, 1500);
                    
                  }
                }
              }
              if(serverstatus=='on'){
                if(sendsocket==sendsocketkey){
                  if(event=='stopserver'){
                    minecraft.stdin.write('stop' + "\r");
                  }
                  if(event=='killserver'){
                    minecraft.kill('SIGINT');
                  }
                  if(event=='cmd_console'){
                    if(cmd_send=="stop"){
                      io.emit(`${socketiokey}_console_log`, `You do not have permission to use this command here ❌`); 
                    }else{
                      minecraft.stdin.write(cmd_send + "\r");
                    }
                  }
                }
              }
              
              if(setup==0){
                const newpassword = req.body.newpassword;
                const new_min_ram = req.body.new_min_ram;
                const new_max_ram = req.body.new_max_ram;
                const new_servername = req.body.new_servername;
                const new_software = req.body.new_software;
                const new_version = req.body.new_version;
                const new_eula = req.body.new_eula;
                const new_port = req.body.new_port;

                if(new_port==webserverport){
                  res.send(`
                <script>
                window.location.replace("/?errorcode=104");
                </script>`);
                }else{
                  if(!newpassword==""){
                    const new_setup = `{"admin_password":"${newpassword}","setup":"1","min_ram":"${new_min_ram}","max_ram":"${new_max_ram}","version":"${new_version}","server_name":"${new_servername}","software":"${new_software}","eula":"${new_eula}","port":"${new_port}"}`;
                    fs.writeFile('data/setup.ydb', new_setup, 'utf-8', function(err, data) {
                      password = newpassword;
                      setup = 1;
                      min_ram = new_min_ram;
                      max_ram = new_max_ram;
                      version = new_version;
                      servername = new_servername;
                      software = new_software;
                      eula = new_eula;
                      serverport = new_port;
                      console.log('('+`1`.red+')'+' Data Base Update! [Setup]'.green);
                      if (fs.existsSync(`./server/software/${new_software}/server_${new_version}.jar`)) {
                        console.log("Done!".green);
                        res.send(`
                  <script>
                  window.location.replace("/?errorcode=102");
                  </script>`);
                      }else{
                        console.log('Receiving information please wait'.yellow);
                        request.get(`https://api.yellow-team.xyz/update/?event=minecraft_up&version=${new_version}&software=${new_software}`,  (error, resp, body)  => {
                          (async () => {
                            loadui='on';
                            res.send(`
                  <script>
                  window.location.replace("/?errorcode=102");
                  </script>`);
                            console.log('Start Downloading | '.yellow+`Minecraft_${new_version} | `.green+`URL: ${body}`);
                            fs.writeFileSync(`./server/software/${new_software}/server_${new_version}.jar`, await download(body));
                            console.log('Downloading Done!'.green);
                            loadui='off';
                          })();
                        });
                      }
                    })
                  }
                }
                
              }else{
                if(setup==1){
                  const chnewpassword = req.body.chnewpassword;
                  const chlastpassword = req.body.chlastpassword;

                  const new_port_v = req.body.new_port_v;
                  const new_min_ram_v = req.body.new_min_ram_v;
                  const new_max_ram_v = req.body.new_max_ram_v;
                  const new_servername_v = req.body.new_servername_v;
                  const new_software_v = req.body.new_software_v;
                  const new_version_v = req.body.new_version_v;
                  if(new_port_v==webserverport){
                    io.emit(`${socketiokey}_setup_v_error`,`103`);
                  }else{
                  if(!new_port_v==""&!new_min_ram_v==""&!new_max_ram_v==""&!new_servername_v==""&!new_software_v==""&!new_version_v==""){
                  const new_setup_v = `{"admin_password":"${password}","setup":"1","min_ram":"${new_min_ram_v}","max_ram":"${new_max_ram_v}","version":"${new_version_v}","server_name":"${new_servername_v}","software":"${new_software_v}","eula":"${eula}","port":"${new_port_v}"}`;
                  fs.writeFile('data/setup.ydb', new_setup_v, 'utf-8', function(err, data) {
                    min_ram = new_min_ram_v;
                    max_ram = new_max_ram_v;
                    version = new_version_v;
                    servername = new_servername_v;
                    software = new_software_v;
                    serverport = new_port_v;
                    io.emit(`${socketiokey}_setup_v_error`,`101`);
                    console.log('('+`1`.red+')'+' Data Base Update! [Setup]'.green);
                    if (fs.existsSync(`./server/software/${new_software_v}/server_${new_version_v}.jar`)) {
                      console.log("Done!".green);
                    }else{
                      console.log('Receiving information please wait'.yellow);
                      request.get(`https://api.yellow-team.xyz/update/?event=minecraft_up&version=${new_version_v}&software=${new_software_v}`,  (error, resp, body)  => {
                        (async () => {        
                          loadui='on';
                          io.emit(`${socketiokey}_reload`,`reload`);
                          console.log('Start Downloading | '.yellow+`Minecraft_${new_version_v} | `.green+`URL: ${body}`);
                          fs.writeFileSync(`./server/software/${new_software_v}/server_${new_version_v}.jar`, await download(body));
                          console.log('Downloading Done!'.green);
                          loadui='off';
                        })();
                      });
                    }
                  });
                  }else{
                    io.emit(`${socketiokey}_setup_v_error`,`102`);
                  }
                }
          
                  if(sendsocket==sendsocketkey){
                    if(chlastpassword==password){
                      const ch_pass = `{"admin_password":"${chnewpassword}","setup":"1","min_ram":"${min_ram}","max_ram":"${max_ram}","version":"${version}","server_name":"${servername}","software":"${software}","eula":"${eula}","port":"${serverport}"}`;
                      fs.writeFile('data/setup.ydb', ch_pass, 'utf-8', function(err, data) {                   
                        password = chnewpassword;
                        io.emit(`${socketiokey}_profile_error`,"102");
                        console.log('('+`1`.red+')'+' Data Base Update! [Profile]'.green);
                      });
                    }else{
                      io.emit(`${socketiokey}_profile_error`,"101");
                    }
                  }
                  
                }
              }
          
              if(loadui=="on"){
                res.send(`
<html>
<head>
<title>McController - Please wait</title>
<link rel="icon" href="/static/img/logo.png">
<link href="/static/css/bootstrap.min.css" rel="stylesheet">
<link href="/static/css/load.css" rel="stylesheet">
<script src="/static/js/bootstrap.bundle.min.js"></script>
</head>
<body class="bg-dark">		
	<div id="load-content">
	<center><h4 style="color:White;">Please wait Do not turn off the program</h4></center>
		<div id="loader-wrapper">
			<div id="loader"></div>
		</div>

	</div>
	<script>
	setTimeout(() => {
	location.reload();
    },5500);
	</script>
</body>
</html>
                `);
              }
              if(setup==1&&req.body.username==username&&req.body.password==password&&loadui=="off"||setup==1&&loadui=="off"&&req.body.token_login==login_token){
                res.send(`
          <html>
            <head>
                <title>McController - Dashboard</title>
                <link rel="icon" href="/static/img/logo.png">
                <link rel="preconnect" href="//fdn.fontcdn.ir">
                <link rel="preconnect" href="//v1.fontapi.ir">
                <link href="https://v1.fontapi.ir/css/Estedad" rel="stylesheet">
                <link href="/static/css/bootstrap.min.css" rel="stylesheet">
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css">
                <script src="/static/js/bootstrap.bundle.min.js"></script>
                <script src="/static/js/jquery-3.6.0.js"></script>
                <script src="/static/js/socket.io.js"></script>
                <script src="/static/js/chart.js"></script>

                ${dash_head}

                <style>
                .btn-yellow-team {
                  color: white !important;
                  background-color: #ffbf00;
                }
              
                .sidenav {
                  height: 100%;
                  width: 200px;
                  position: fixed;
                  z-index: 1;
                  top: 0;
                  left: 0;
                  background-color: #161616;
                  overflow-x: hidden;
                  padding-top: 20px;
                }
              
                .sidenav a {
                  padding: 6px 6px 6px 32px;
                  text-decoration: none;
                  font-size: 25px;
                  color: #818181;
                  display: block;
                }
              
                .sidenav a:hover {
                  color: #f1f1f1;
                }
              
                .main {
                  margin-left: 215px;
                  margin-top: 100px;
                  margin-right: 15px;
                }
                
                @media screen and (max-height: 450px) {
                  .sidenav {padding-top: 15px;}
                  .sidenav a {font-size: 18px;}
                }
                </style>
            </head>
            <body id="body" style="background-color: #101010;">
              
                <nav style="background-color: #161616;" class="navbar navbar-expand-md fixed-top">
                <div class="container-fluid">
                <h1 style="color:White;"><img src="/static/img/logo.png" alt="" width="40" height="40" class="d-inline-block align-text-top"> McController</h1>
                  
                  <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav me-auto mb-2 mb-md-0">
                    ${dash_nav}
                    </ul>
                    
                    <form action="/dashboard/" method="post" class="d-flex">
                      <button name="logout" value="logout" class="btn btn-danger" type="submit"><i class="fas fa-sign-out-alt"></i> Logout</button>
                    </form>
                  </div>
                </div>
              </nav>
                <div class="sidenav">
                  <a href="#">Noon</a>
                  <a style="color:White;" type="button" onclick='server_m();'><i class="fa fa-power-off"></i> Server</a>
                  <a style="color:White;" type="button" onclick='options_m();'><i class="fa fa-cog"></i> Options</a>
                  <a style="color:White;" type="button" onclick='console_m();'><i class="fa fa-terminal"></i> Console</a>
                  <a style="color:White;" type="button" onclick='log_m();'><i class="fas fa-file-alt"></i> Log</a>
                  <a style="color:White;" type="button" onclick='setup_m();'><i class="fa fa-briefcase"></i> Setup</a>
                  <a style="color:White;" type="button" onclick='profile_m();'><i class="fa fa-address-card"></i> Profile</a>
                  <a style="color:White;" type="button" onclick='addon_m();'><i class="fa fa-cubes"></i> Addons</a>
                  ${dash_nav_side}
                </div>
              
                <div id="server" class="main">
                <div class="col pb-0 mt-0"><div class="card bg-dark">
                <div style="color:White;" class="card-header"><center><i class="fa fa-server"></i> Server</center></div>
                <div style="color:White;" class="card-body">
                <center><h3>${serverip}:${serverport}</h3></center>
                <center><h3>${servername}</h3></center>
                <div id='offline' style="background-color: #C70039; color:White;" class="card-footer">
                <center><h4><i class="fas fa-stop-circle"></i> Offline</h4></center>
                </div>
                <div id='online' style="background-color: #525252; color:White;" class="card-footer">
                <center><h4 id='online_txt'><i class="fas fa-stop-circle"></i> Starting ...</h4></center>
                </div>
                </div>
                </div>
                </div>
                <h1> </h1>
                <div id="server_start">
                <center><button onclick='start_server();' type="button" class="btn btn-lg btn-success"><i class="fa fa-power-off"></i> Start</button></center>
                </div>
                <center><div id="server_stop_kill"><button onclick='stop_server();' type="button" class="btn btn-lg btn-danger"><i class="fas fa-stop-circle"></i> Stop</button> <button onclick='kill_server();' type="button" class="btn btn-lg btn-danger"><i class="	fa fa-exclamation-triangle"></i> Kill</button></div></center>

                <div class="row row-cols-1 row-cols-lg-2">
                <div class="col pb-2 mt-3"><div class="card bg-dark">
                <div style="color:White;" class="card-header"><i class="fas fa-memory"></i> Ram Use</div>
                <div class="card-body">
                <canvas id="Ramchart" style="width: 100%; height: 100%"></canvas>
                </div>
                </div>
                </div>
                <div class="col pb-2 mt-3"><div class="card bg-dark">
                <div style="color:White;" class="card-header"><i class="fa fa-microchip"></i> CPU Use</div>
                <div class="card-body">
                <canvas id="Cpuchart" style="width: 100%; height: 100%"></canvas>
                </div>
                </div>
                </div>
                </div>
                </div>
                <div id="options" class="main">
                <div class="col pb-0 mt-0"><div class="card bg-dark">
                <div style="color:White;" class="card-body">
            
                <div class="d-flex justify-content-start">
                <img src="/static/server-icon.png" class="rounded float-right" alt="64">
                <div style="margin-left: 15px;">
                <h4>${serverip}:${serverport}</h4>
                <h5>Soon</h5>
                </div>
                </div>

                </div>
                </div>
                </div>

                <div class="col pb-0 mt-0"><div style="margin-top: 35px;" class="card bg-dark">
                <div style="color:White;" class="card-header"><i class="fa fa-cog"></i>  Server.properties</div>
                <div style="color:White;" class="card-body">
          

                </div>
                </div>
                </div>
                </div>

                <div id="console" class="main">
                <div class="col pb-0 mt-0"><div class="card bg-dark">
                <div style="color:White;" class="card-header"><i class="fa fa-terminal"></i> Console</div>
                <div style="color:White;" class="card-body">
          
                <ul id="console_messages" style="height: 20rem; background-color: black;" class="text-light rounded p-3 overflow-scroll">
                  <h6 id="console_online_log">$> Console Version => 1.0.6</h6>
                  <center><h1 id="console_offline_log">Offline <i class="fa fa-signal"></i></h1></center>
                </ul>
                <div id="sendcmddiv">
                <div class="d-flex">
                <input class="form-control m-1" id='cmd_send_elment' placeholder='say hello'>
                <button onclick="send_cmd_console()" class="btn btn-primary btn-sm w-25 m-1">Send Cmd</button>
                </div>
                </div>
          
                </div>
                </div>
                </div>
                </div>
                <div id="log" class="main">
                <div class="col pb-0 mt-0"><div class="card bg-dark">
                <div style="color:White;" class="card-header"><i class="fas fa-file-alt"></i> Log</div>
                <div style="color:White;" class="card-body">
                <ul id="log_txt" style="height: 20rem; background-color: black;" class="text-light rounded p-3 overflow-scroll">
                  <h6>Loading Information Please Wait...</h6>
                </ul>
                <div id="update_log_btn">
                <center><button onclick="update_log();" class="btn btn-primary" type="submit">Update Log</button></center>
                </div>
                <div id="update_log_wait">
                <center><h5>Please wait 5 seconds for the next update</h5></center>
                </div>
                </div>
                </div>
                </div>
                </div>

                <div id="setup" class="main">
                <div class="col pb-0 mt-0"><div class="card bg-dark">
                <div style="color:White;" class="card-header"><i class="fa fa-briefcase"></i> Setup</div>
                <div class="card-body">
                <div id="diverr_st_101" class="alert alert-success" role="alert">
                <center>Setup Changed Successfully!</center>
                </div>
                <div id="diverr_st_102" class="alert alert-danger" role="alert">
                <center>Requests are not complete!</center>
                </div>
                <div id="diverr_st_103" class="alert alert-danger" role="alert">
                <center>ServerPort value are not allowed</center>
                </div>
                <div class="form-floating mb-3">
                <input type="text" class="form-control" id="new_port" name="new_port" placeholder="Server Port">
                <label for="new_port">Server Port</label>
              </div>
              <div class="form-floating mb-3">
                <input type="text" class="form-control" id="new_min_ram" name="new_min_ram" placeholder="Min Ram Use G">
                <label for="new_min_ram">Min Ram Use (G)</label>
              </div>
              <div class="form-floating mb-3">
                <input type="text" class="form-control" id="new_max_ram" name="new_max_ram" placeholder="Max Ram Use G">
                <label for="new_max_ram">Max Ram Use (G)</label>
              </div>
              <div class="form-floating mb-3">
                <input type="text" class="form-control" id="new_servername" name="new_servername" placeholder="Server Name">
                <label for="new_servername">Server Name</label>
              </div>
              <div class="form-select mb-3">
              <label class="form-check-label" for="new_software">
                Minecraft Server Software
              </label>
              <select id="new_software" class="form-select mb-3">
                <option value="paper">Paper</option>
                <option value="spigot">Spigot</option>
              </select>
              </div>
              <div class="form-select mb-3">
              <label class="form-check-label" for="new_version">
                Minecraft Server Version
              </label>
              <select id="new_version" class="form-select mb-3">
                <option value="1.18.1">1.18.1</option>
                <option value="1.17.1">1.17.1</option>
                <option value="1.16.5">1.16.5</option>
                <option value="1.15.2">1.15.2</option>
                <option value="1.14.4">1.14.4</option>
                <option value="1.13.2">1.13.2</option>
                <option value="1.12.2">1.12.2</option>
                <option value="1.11.2">1.11.2</option>
                <option value="1.10.2">1.10.2</option>
                <option value="1.9.4">1.9.4</option>
                <option value="1.8.8">1.8.8</option>
              </select>
              </div>
                <div class="d-grid">
                  <button onclick="ch_setup();" class="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Update Setup</button>
                </div>

                </div>
                </div>
                </div>
                </div>
                <div id="addons" class="main">
                ${dash_main}
                </div>

                <div id="profile" class="main">
                <div class="col pb-0 mt-0"><div class="card bg-dark">
                <div style="color:White;" class="card-header"><i class="fa fa-address-card"></i> Profile</div>
                <div style="color:White;" class="card-body">
                <h4>User Name: ${username}</h4>
                <h4>Password: *********</h4>
                
                <hr class="my-4">
                <div id="diverr_pr_102" class="alert alert-success" role="alert">
                <center>Password Changed Successfully!</center>
                </div>
                <div id="diverr_pr_101" class="alert alert-danger" role="alert">
                <center>The Last Password Entered Is Incorrect.</center>
                </div>
                <h4>Change Password</h4>
                <div style="color:Black;" class="form-floating mb-3">
                  <input type="password" class="form-control" id="chlastpassword" name="chlastpassword" placeholder="Last Password">
                  <label for="chlastpassword">Last Password</label>
                </div>
                <div style="color:Black;" class="form-floating mb-3">
                  <input type="password" class="form-control" id="chnewpassword" name="chnewpassword" placeholder="New Password">
                  <label for="chnewpassword">New Password</label>
                </div>
                <div class="d-grid">
                  <button onclick="ch_pass();" class="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Change Password</button>
                </div>
                <hr class="my-4">
                <div class="d-grid mb-2">
                  <a href="https://yellow-team.xyz/"><center><button class="btn btn-yellow-team btn-login text-uppercase fw-bold">Power By Yellow Team</button></center></a>
                </div>
          
                </div>
                </div>
                </div>
                </div>
                <script>
                
                const socket = io('http://${webip}:${webserverport}/');
                const xhttp = new XMLHttpRequest();

                const new_port_v = document.getElementById('new_port');
                const new_min_ram_v = document.getElementById('new_min_ram');
                const new_max_ram_v = document.getElementById('new_max_ram');
                const new_servername_v = document.getElementById('new_servername');
                const new_software_v = document.getElementById('new_software');
                const new_version_v = document.getElementById('new_version');
                
                const onlinediv = document.getElementById('online');
                const onlinetxt = document.getElementById('online_txt');
          
                const chlastpassword = document.getElementById('chlastpassword');
                const chnewpassword = document.getElementById('chnewpassword');
          
                const console_box = document.getElementById('console_messages');
          
                const txt_log = document.getElementById('log_txt');
          
                const cmd_send = document.getElementById('cmd_send_elment');
           
                let serverstatus = '${serverstatus}';
          
                localStorage.setItem("token", "${login_token}");

                function start_server() {
                  if(serverstatus == 'off'){
                  xhttp.open("POST", "/dashboard/", true);
                  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                  xhttp.send("sendsocketkey=${sendsocketkey}&event=startserver");
                  }
                }
                function stop_server() {
                  if(serverstatus == 'on'){
                  xhttp.open("POST", "/dashboard/", true);
                  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                  xhttp.send("sendsocketkey=${sendsocketkey}&event=stopserver");
                  }
                  
                }
                function kill_server() {
                  if(serverstatus == 'on'){
                  xhttp.open("POST", "/dashboard/", true);
                  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                  xhttp.send("sendsocketkey=${sendsocketkey}&event=killserver");
                  }
                  
                }
                function ch_pass() {
                  xhttp.open("POST", "/dashboard/", true);
                  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                  xhttp.send("sendsocketkey=${sendsocketkey}&chlastpassword="+chlastpassword.value+"&chnewpassword="+chnewpassword.value);				
                }
                function ch_setup(){
                  xhttp.open("POST", "/dashboard/", true);
                  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                  xhttp.send("sendsocketkey=${sendsocketkey}&new_port_v="+new_port_v.value+"&new_min_ram_v="+new_min_ram_v.value+"&new_max_ram_v="+new_max_ram_v.value+"&new_servername_v="+new_servername_v.value+"&new_software_v="+new_software_v.value+"&new_version_v="+new_version_v.value);
                }
                function send_cmd_console() {
                  xhttp.open("POST", "/dashboard/", true);
                  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                  xhttp.send("sendsocketkey=${sendsocketkey}&event=cmd_console&cmd_send="+cmd_send.value);	
                  cmd_send.value="";		
                }
          
                function update_log() {
                  xhttp.open("POST", "/dashboard/", true);
                  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                  xhttp.send("sendsocketkey=${sendsocketkey}&event=update_log");
                  $("#update_log_btn").hide();
                  $("#update_log_wait").show();
                  setTimeout(() => {
                    $("#update_log_btn").show();
                    $("#update_log_wait").hide(); 
                  }, 5000);
                }
          
                socket.on('${socketiokey}_console_log', function(console_msg) {
                  var item = document.createElement('h6');
                  item.textContent = console_msg;
                  console_box.appendChild(item);
                  window.scrollTo(0, document.body.scrollHeight);
                });
                socket.on('${socketiokey}_reload', function(reload_msg) {
                  if(reload_msg=="reload"){
                    location.reload();
                  }
                });
                socket.on('${socketiokey}_log', function(log_data) {
                  var item = document.createElement('h6');
                  item.textContent = log_data;
                  txt_log.appendChild(item);
                  window.scrollTo(0, document.body.scrollHeight);
                });
          
                socket.on('${socketiokey}_setup_v_error', function(errormsg){
                  if(errormsg=="101"){
                    $("#diverr_st_102").hide();
                    $("#diverr_st_101").show();
                    $("#diverr_st_103").hide();
                    new_port_v.value = "";
                    new_min_ram_v.value = "";
                    new_max_ram_v.value = "";
                    new_servername_v.value = "";
                    setTimeout(() => {
                      $("#diverr_st_102").hide();
                      $("#diverr_st_101").hide();
                      $("#diverr_st_103").hide();
                    }, 3000);
                  }
                  if(errormsg=="102"){
                    $("#diverr_st_102").show();
                    $("#diverr_st_101").hide();
                    $("#diverr_st_103").hide();
                    setTimeout(() => {
                      $("#diverr_st_102").hide();
                      $("#diverr_st_101").hide();
                      $("#diverr_st_103").hide();
                    }, 3000);
                  }
                  if(errormsg=="103"){
                    $("#diverr_st_102").hide();
                    $("#diverr_st_101").hide();
                    $("#diverr_st_103").show();
                    setTimeout(() => {
                      $("#diverr_st_102").hide();
                      $("#diverr_st_101").hide();
                      $("#diverr_st_103").hide();
                    }, 3000);
                  }
                });
                socket.on('${socketiokey}_profile_error', function(errormsg){
                  if(errormsg=="101"){
                    $("#diverr_pr_102").hide();
                    $("#diverr_pr_101").show();
                    chlastpassword.value="";
                    setTimeout(() => {
                      $("#diverr_pr_102").hide();
                      $("#diverr_pr_101").hide();
                    }, 3000);
                  }
                  if(errormsg=="102"){
                    $("#diverr_pr_102").show();
                    $("#diverr_pr_101").hide();
                    chlastpassword.value="";
                    chnewpassword.value="";
                    setTimeout(() => {
                      $("#diverr_pr_102").hide();
                      $("#diverr_pr_101").hide();
                    }, 3000);
                  }
                });
          
                socket.on('${socketiokey}_status', function(status) {
                  serverstatus=status;
                });
          
                socket.on('${socketiokey}_server_online', function(status_online) {
                  onlinediv.style.backgroundColor ='#32FF00';
                  onlinetxt.textContent=status_online;
                  
                });
          
                socket.on('${socketiokey}_ramdata', ramdata => {
                  RamChart.data.datasets[0].data.push(ramdata);
                  if(RamChart.data.datasets[0].data.length>9) RamChart.data.datasets[0].data.shift();
                  RamChart.update();
                });
                socket.on('${socketiokey}_cpudata', cpudata => {
                  CpuChart.data.datasets[0].data.push(cpudata);
                  if(CpuChart.data.datasets[0].data.length>9) CpuChart.data.datasets[0].data.shift();
                  CpuChart.update();
                });
          
                const ctx = document.getElementById('Ramchart').getContext('2d');
                      const RamChart = new Chart(ctx, {
                      type: 'line',
                       data: {
                        labels: ['15','14','13','12','11','10', '9', '8', '7', '6', '5', '4', '3', '2','1'],
                        datasets: [{
                         label: 'System Ram Use',
                         data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                         backgroundColor: [
                            'rgb(255, 99, 132)'
                         ],
                         borderColor: [
                            'rgb(255, 99, 132)'
                         ],
                         borderWidth: 1
                      }]
                      },
                      options: {
                      scales: {
                      y: {
                          beginAtZero: true
                      }
                      }
                     }
                  });
              const ctx2 = document.getElementById('Cpuchart').getContext('2d');
                      const CpuChart = new Chart(ctx2, {
                      type: 'line',
                       data: {
                        labels: ['15','14','13','12','11','10', '9', '8', '7', '6', '5', '4', '3', '2','1'],
                        datasets: [{
                         label: 'System Cpu Use',
                         data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                         backgroundColor: [
                  'rgb(255, 99, 132)'
                         ],
                         borderColor: [
                  'rgb(255, 99, 132)'
                         ],
                         borderWidth: 1
                      }]
                      },
                      options: {
                      scales: {
                      y: {
                          beginAtZero: true
                      }
                      }
                     }
                  });
                  setInterval(() => {
                    if(serverstatus == 'off'){
                      $("#server_start").show();
                      $("#server_stop_kill").hide();
                      $("#online").hide();
                      $("#offline").show();
                      $("#sendcmddiv").hide();
                      $("#console_offline_log").show();
                      $("#console_online_log").hide();
                      onlinediv.style.backgroundColor ='#525252';
                      onlinetxt.textContent="Starting ...";
                    }else{
                      if(serverstatus == 'on'){
                        $("#server_start").hide();
                        $("#server_stop_kill").show();
                        $("#online").show();
                        $("#offline").hide();
                        $("#sendcmddiv").show();
                        $("#console_offline_log").hide();
                        $("#console_online_log").show();
                      }
                    }
                  },10);
                $("#diverr_pr_102").hide();
                $("#diverr_pr_101").hide();
                $("#diverr_st_103").hide();
                $("#diverr_st_102").hide();
                $("#diverr_st_101").hide();
                $("#server").show();
                $("#options").hide();
                $("#console").hide();
                $("#addons").hide();
                $("#log").hide();
                $("#setup").hide();
                $("#profile").hide();
                $("#update_log_btn").show();
                $("#update_log_wait").hide(); 

                
                function server_m() {
                $("#server").show();
                $("#console").hide();
                $("#log").hide();
                $("#setup").hide();
                $("#options").hide();
                $("#profile").hide();
                $("#addons").hide();
                }
                function options_m() {
                $("#server").hide();
                $("#console").hide();
                $("#log").hide();
                $("#setup").hide();
                $("#options").show();
                $("#profile").hide();
                $("#addons").hide();
                }
                function console_m() {
                $("#server").hide();
                $("#console").show();
                $("#log").hide();
                $("#options").hide();
                $("#setup").hide();
                $("#profile").hide();
                $("#addons").hide();
                }
                function log_m() {
                $("#server").hide();
                $("#console").hide();
                $("#log").show();
                $("#setup").hide();
                $("#options").hide();
                $("#profile").hide();
                $("#addons").hide();
                }
                function setup_m() {
                $("#server").hide();
                $("#console").hide();
                $("#log").hide();
                $("#setup").show();
                $("#options").hide();
                $("#profile").hide();
                $("#addons").hide();
                }
                function profile_m() {
                $("#server").hide();
                $("#console").hide();
                $("#log").hide();
                $("#options").hide();
                $("#setup").hide();
                $("#profile").show();
                $("#addons").hide();
                }
                function addon_m() {
                  $("#server").hide();
                  $("#console").hide();
                  $("#log").hide();
                  $("#options").hide();
                  $("#setup").hide();
                  $("#profile").hide();
                  $("#addons").show();
                }

                ${dash_script}


                </script>
            </body>
          </html>
                  `);
              }else{
                if(setup==1&&loadui=="off"){
                  if(req.body.logout){
                    res.send(`
                  <script>
                  window.location.replace("/?errorcode=103");
                  localStorage.setItem("token", "logout");
                  </script>`);
                  }else{
                    res.send(`
                  <script>
                  window.location.replace("/?errorcode=101");
                  </script>`);
                  }
                  
                }  
              }
            }
          });
          if(multipleips="false"){
            server.listen(webserverport, () => {
              console.log("--------------------------------------------".yellow);
              console.log("Mc Controler Yellow Team ©".green);
              console.log("Server listening!".green);
              console.log(`Web Dashboard http://${webip}:${webserverport}/`.green);
              console.log(`User:admin`.green)
              console.log("--------------------------------------------".yellow);

              fs.readdir("./plugins/", (err, files) => {
                files.forEach(file => {
                  const eventHandler = require(`./plugins/${file}`);
                  const pluginname = file.split(".")[0];
                  console.log("Loading Plugins: [".yellow+pluginname.green+"]".yellow);
                  if(eventHandler.login_head==undefined){}else{
                    login_head = `${login_head}`+eventHandler.login_head;
                  }
                  if(eventHandler.login_main==undefined){}else{
                    login_main = `${login_main}`+eventHandler.login_main;
                  }
                  if(eventHandler.login_script==undefined){}else{
                    login_script = `${login_script}`+eventHandler.login_script;
                  }
                  if(eventHandler.dash_head==undefined){}else{
                    dash_head = `${dash_head}`+eventHandler.dash_head;
                  }
                  if(eventHandler.dash_main==undefined){}else{
                    dash_main = `${dash_main}`+eventHandler.dash_main;
                  }
                  if(eventHandler.dash_nav==undefined){}else{
                    dash_nav = `${dash_nav}`+eventHandler.dash_nav;
                  }
                  if(eventHandler.dash_nav_side==undefined){}else{
                    dash_nav_side = `${dash_nav_side}`+eventHandler.dash_nav_side;
                  }
                  if(eventHandler.dash_script==undefined){}else{
                    dash_script = `${dash_script}`+eventHandler.dash_script;
                  }
                });
              });
            });
          }else{
            if(multipleips="true"){
              server.listen(webserverport,webip, () => {
                console.log("--------------------------------------------".yellow);
                console.log("Mc Controler Yellow Team ©".green);
                console.log("Server listening!".green);
                console.log(`Web Dashboard http://${webip}:${webserverport}/`.green);
                console.log(`User:admin`.green)
                console.log("--------------------------------------------".yellow);
                
                fs.readdir("./plugins/", (err, files) => {
                  files.forEach(file => {
                    const eventHandler = require(`./plugins/${file}`);
                    const pluginname = file.split(".")[0];
                    console.log("Loading Plugins: [".yellow+pluginname.green+"]".yellow);
                    if(eventHandler.login_head==undefined){}else{
                      login_head = `${login_head}`+eventHandler.login_head;
                    }
                    if(eventHandler.login_main==undefined){}else{
                      login_main = `${login_main}`+eventHandler.login_main;
                    }
                    if(eventHandler.login_script==undefined){}else{
                      login_script = `${login_script}`+eventHandler.login_script;
                    }
                    if(eventHandler.dash_head==undefined){}else{
                      dash_head = `${dash_head}`+eventHandler.dash_head;
                    }
                    if(eventHandler.dash_main==undefined){}else{
                      dash_main = `${dash_main}`+eventHandler.dash_main;
                    }
                    if(eventHandler.dash_nav==undefined){}else{
                      dash_nav = `${dash_nav}`+eventHandler.dash_nav;
                    }
                    if(eventHandler.dash_nav_side==undefined){}else{
                      dash_nav_side = `${dash_nav_side}`+eventHandler.dash_nav_side;
                    }
                    if(eventHandler.dash_script==undefined){}else{
                      dash_script = `${dash_script}`+eventHandler.dash_script;
                    }
                  });
                });
              });
            }
          }
          
        }, 2000);
      }, 500);
});
