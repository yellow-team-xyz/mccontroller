const express = require('express');
const multer = require('multer');
const colors = require('colors');
const pidusage = require('pidusage');
const url = require('url');
const bodyparser = require('body-parser');
const { spawn } = require('node:child_process');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);
const fs = require('fs');
const request = require('request');
const mcping = require('mcping-js');
const download = require('download');
const JavaScriptObfuscator = require('javascript-obfuscator');
const expressip = require('express-ip');
app.use(expressip().getIpInfoMiddleware);
app.use(bodyparser.urlencoded({ extended: true }));
process.setMaxListeners(0);

module.exports.colors = (colors);
module.exports.app = (app);
module.exports.io = (io);
module.exports.update_this_data = (update_this_data);
module.exports.anti_data_storage_injection_realstring = (anti_data_storage_injection_realstring);

///Program Value
let dict = 'qwertyuioplkjhgfdsazxcv.bnm12345678.9QWERTYUIOPASDFGHJKLZXCVBNM123%#@%4567890';
let dict_s = 'ZXCVBNM.LKJHGFDSAQWERTYUIOP@#$%^12345678#90z%.xcvbnmlkjhgfdsaqwertyuiop';
let dict_w = 'qwertyuioplkjhgfdsazxcvbnm123456789QWERTYUIOPASDFGHJKLZXCVBNM1234567890'
let language = require('./languages/US-en.json');
let webserver_ip = '';
let webserver_port = '';
let multipleips = '';
let server_ip = '';
let use_ssl = 'http';
let serverstatus = 'off';
let loadui = 'off';
let home_html = '';
let dash_head = '';
let dash_main = '';
let dash_nav = '';
let dash_nav_side = '';
let dash_script = '';
let login_head = '';
let login_main = '';
let login_script = '';
let blacklist_ip = '';
let minecraft_server_data = '';
let socket_connection_key = '';
for (var i = 0; i < 64; i++) {
  socket_connection_key = socket_connection_key + dict.charAt(Math.floor(Math.random() * dict.length));
}
let server_received_key = '';
for (var i = 0; i < 64; i++) {
  server_received_key = server_received_key + dict.charAt(Math.floor(Math.random() * dict.length));
}
let server_send_key = '';
for (var i = 0; i < 64; i++) {
  server_send_key = server_send_key + dict.charAt(Math.floor(Math.random() * dict.length));
}
let options_received_key = '';
for (var i = 0; i < 64; i++) {
  options_received_key = options_received_key + dict.charAt(Math.floor(Math.random() * dict.length));
}
let options_send_key = '';
for (var i = 0; i < 64; i++) {
  options_send_key = options_send_key + dict.charAt(Math.floor(Math.random() * dict.length));
}
let console_received_key = '';
for (var i = 0; i < 64; i++) {
  console_received_key = console_received_key + dict.charAt(Math.floor(Math.random() * dict.length));
}
let console_send_key = '';
for (var i = 0; i < 64; i++) {
  console_send_key = console_send_key + dict.charAt(Math.floor(Math.random() * dict.length));
}
let log_received_key = '';
for (var i = 0; i < 64; i++) {
  log_received_key = log_received_key + dict.charAt(Math.floor(Math.random() * dict.length));
}
let log_send_key = '';
for (var i = 0; i < 64; i++) {
  log_send_key = log_send_key + dict.charAt(Math.floor(Math.random() * dict.length));
}
let log_download_key = '';
for (var i = 0; i < 128; i++) {
  log_download_key = log_download_key + dict_w.charAt(Math.floor(Math.random() * dict_w.length));
}
let plugins_received_key = '';
for (var i = 0; i < 64; i++) {
  plugins_received_key = plugins_received_key + dict.charAt(Math.floor(Math.random() * dict.length));
}
let plugins_send_key = '';
for (var i = 0; i < 128; i++) {
  plugins_send_key = plugins_send_key + dict_w.charAt(Math.floor(Math.random() * dict_w.length));
}
let general_settings_received_key = '';
for (var i = 0; i < 64; i++) {
  general_settings_received_key = general_settings_received_key + dict.charAt(Math.floor(Math.random() * dict.length));
}
let general_settings_send_key = '';
for (var i = 0; i < 64; i++) {
  general_settings_send_key = general_settings_send_key + dict.charAt(Math.floor(Math.random() * dict.length));
}
let addons_received_key = '';
for (var i = 0; i < 64; i++) {
  addons_received_key = addons_received_key + dict.charAt(Math.floor(Math.random() * dict.length));
}
let addons_send_key = '';
for (var i = 0; i < 64; i++) {
  addons_send_key = addons_send_key + dict.charAt(Math.floor(Math.random() * dict.length));
}
let profile_received_key = '';
for (var i = 0; i < 64; i++) {
  profile_received_key = profile_received_key + dict.charAt(Math.floor(Math.random() * dict.length));
}
let profile_send_key = '';
for (var i = 0; i < 64; i++) {
  profile_send_key = profile_send_key + dict.charAt(Math.floor(Math.random() * dict.length));
}
let access_received_key = '';
for (var i = 0; i < 64; i++) {
  access_received_key = access_received_key + dict.charAt(Math.floor(Math.random() * dict.length));
}
let access_send_key = '';
for (var i = 0; i < 64; i++) {
  access_send_key = access_send_key + dict.charAt(Math.floor(Math.random() * dict.length));
}
let address_shared = '';
let html_error_403 = '';
let html_error_404 = '';
let html_loader = '';
let html_socket_disconnect = '';
let setup = '';
let app_language = '';
let min_ram = '';
let max_ram = '';
let version = '';
let servername = '';
let software = '';
let connection_type = '';
let eula = '';
let serverport = '';
let app_version = '';
let server_conf_motd = '';
let server_conf_spawn_protection = '';
let server_conf_slots = '';
let server_conf_gamemode = '';
let server_conf_difficulty = '';
let server_conf_whitelist = '';
let server_conf_cracked = '';
let server_conf_pvp = '';
let server_conf_commandblocks = '';
let server_conf_fly = '';
let server_conf_animals = '';
let server_conf_monster = '';
let server_conf_villagers = '';
let server_conf_force_gamemode = '';
let server_conf_nether = '';
let server_conf_resource_pack_url = '';
///

app.use(`/static/${log_download_key}/`, express.static('./server/logs/'));

static_htmls_get('101', function (callback) {
  html_error_403 = callback;
  static_htmls_get('102', function (callback) {
    html_error_404 = callback;
    static_htmls_get('103', function (callback) {
      html_loader = callback;
      static_htmls_get('104', function (callback) {
        html_socket_disconnect = callback;
        static_load(function (callback) {
          if (callback.status == 'true') {
            loger('Please wait while reading config.yco', 1, 2);
            fs.readFile('config.yco', 'utf8', function (err, data) {
              datajson = JSON.parse(data);
              webserver_ip = datajson.webserver_ip;
              webserver_port = datajson.webserver_port;
              multipleips = datajson.multipleips;
              server_ip = datajson.server_ip;
              if (webserver_port == 443) {
                use_ssl = 'https';
              }
              loger('Done!', 1, 1);
              debug(function (callback) {
                if (callback.status == 'true') {
                  loger('Please wait while reading data', 1, 2);
                  update_data_update(function (callback) {
                    update_this_data(callback, function (callback) {
                      if (callback.status == 'true') {
                        loger('Reading data Done!', 1, 1);
                        setInterval(() => {
                          update_data_update(function (callback) {
                            update_this_data(callback, function (callback) { });
                          });
                        }, 2500);
                        if (setup == 1) {
                          loger('Checking the jar file', 1, 3);
                          if (fs.existsSync(`./server/software/${software}-${version}.jar`)) {
                            loger('Done!', 1, 1);
                          } else {
                            loger('Jar file not found please wait', 2, 2);
                            let dll_url = `http://dll.yservices.ir/mccontroller/software/${software}/${software}-${version}.jar`;
                            (async () => {
                              loadui = 'on';
                              loger(`Start Downloading | Minecraft_${version} | URL: ${dll_url}`, 1, 2);
                              fs.writeFileSync(`./server/software/${software}-${version}.jar`, await download(dll_url));
                              loger('Downloading Done!', 1, 1);
                              loadui = 'off';
                            })();
                          }
                        }
                        function minecraft_server() {
                          fs.writeFile('./server/eula.txt', "eula=true", 'utf-8', function (err, data) {
                            loger('Accept Minecraft EULA!', 1, 2);
                          });
                          loger('Checking Server.Properties', 1, 2);
                          fs.readFile('./server/server.properties', 'utf8', function (err, data) {
                            server_split_conf = data.split("\r\n");
                            let server_conf_ex_cracked = '';
                            if (server_conf_cracked == 'true') {
                              server_conf_ex_cracked = 'false';
                            } else {
                              if (server_conf_cracked == 'false') {
                                server_conf_ex_cracked = 'true';
                              }
                            }
                            let save_server_conf = `${server_split_conf[0]}\r\n${server_split_conf[1]}\r\nspawn-protection=${server_conf_spawn_protection}\r\n${server_split_conf[3]}\r\n${server_split_conf[4]}\r\n${server_split_conf[5]}\r\n${server_split_conf[6]}\r\nforce-gamemode=${server_conf_force_gamemode}\r\nallow-nether=${server_conf_nether}\r\n${server_split_conf[9]}\r\ngamemode=${server_conf_gamemode}\r\n${server_split_conf[11]}\r\n${server_split_conf[12]}\r\n${server_split_conf[13]}\r\n${server_split_conf[14]}\r\ndifficulty=${server_conf_difficulty}\r\nspawn-monsters=${server_conf_monster}\r\n${server_split_conf[17]}\r\n${server_split_conf[18]}\r\npvp=${server_conf_pvp}\r\n${server_split_conf[20]}\r\n${server_split_conf[21]}\r\n${server_split_conf[22]}\r\n${server_split_conf[23]}\r\n${server_split_conf[24]}\r\nenable-command-block=${server_conf_commandblocks}\r\nmax-players=${server_conf_slots}\r\n${server_split_conf[27]}\r\n${server_split_conf[28]}\r\n${server_split_conf[29]}\r\n${server_split_conf[30]}\r\n${server_split_conf[31]}\r\nserver-port=${serverport}\r\n${server_split_conf[33]}\r\n${server_split_conf[34]}\r\nspawn-npcs=${server_conf_villagers}\r\nallow-flight=${server_conf_fly}\r\n${server_split_conf[37]}\r\n${server_split_conf[38]}\r\nresource-pack=${server_conf_resource_pack_url}\r\nspawn-animals=${server_conf_animals}\r\nwhite-list=${server_conf_whitelist}\r\n${server_split_conf[42]}\r\n${server_split_conf[43]}\r\nonline-mode=${server_conf_ex_cracked}\r\n${server_split_conf[45]}\r\n${server_split_conf[46]}\r\n${server_split_conf[47]}\r\n${server_split_conf[48]}\r\n${server_split_conf[49]}\r\n${server_split_conf[50]}\r\nmotd=${server_conf_motd}\r\n${server_split_conf[52]}`;
                            fs.writeFile('server/server.properties', save_server_conf, 'utf-8', function (err, data) {
                              loger('Done!', 1, 1);
                              if (max_ram >= 12) {
                                minecraft = spawn(
                                  "java",
                                  [`-Xms${min_ram}G`, `-Xmx${max_ram}G`, '-XX:+UseG1GC', '-XX:+ParallelRefProcEnabled', '-XX:MaxGCPauseMillis=200', '-XX:+UnlockExperimentalVMOptions', '-XX:+DisableExplicitGC', '-XX:+AlwaysPreTouch', '-XX:G1NewSizePercent=40', '-XX:G1MaxNewSizePercent=50', '-XX:G1HeapRegionSize=16M', '-XX:G1ReservePercent=15', '-XX:G1HeapWastePercent=5', '-XX:G1MixedGCCountTarget=4', '-XX:InitiatingHeapOccupancyPercent=20', '-XX:G1MixedGCLiveThresholdPercent=90', '-XX:G1RSetUpdatingPauseTimePercent=5', '-XX:SurvivorRatio=32', '-XX:+PerfDisableSharedMem', '-XX:MaxTenuringThreshold=1', '-Daikars.new.flags=true', '-Dusing.aikars.flags=https://mcflags.emc.gs', '-jar', `./software/${software}-${version}.jar`, 'nogui'],
                                  { cwd: "./server" }
                                );
                                loger('Server Start By Web', 1, 1);
                                serverstatus = 'on';
                                minecraft.on('exit', (code, signal) => {
                                  if (serverstatus == 'on') {
                                    if (signal) loger(`Server killed with signal: ${signal}`, 1, 3);
                                    io.emit(`${console_received_key}_console_log`, { message: 'The Server ShutDown ✅', color: 'green' });
                                    loger('Server Stop By Web', 1, 2);
                                    minecraft.kill();
                                    serverstatus = 'off';
                                  }
                                });
                                return minecraft;
                              } else {
                                minecraft = spawn(
                                  "java",
                                  [`-Xms${min_ram}G`, `-Xmx${max_ram}G`, '-XX:+UseG1GC', '-XX:+ParallelRefProcEnabled', '-XX:MaxGCPauseMillis=200', '-XX:+UnlockExperimentalVMOptions', '-XX:+DisableExplicitGC', '-XX:+AlwaysPreTouch', '-XX:G1NewSizePercent=30', '-XX:G1MaxNewSizePercent=40', '-XX:G1HeapRegionSize=8M', '-XX:G1ReservePercent=20', '-XX:G1HeapWastePercent=5', '-XX:G1MixedGCCountTarget=4', '-XX:InitiatingHeapOccupancyPercent=15', '-XX:G1MixedGCLiveThresholdPercent=90', '-XX:G1RSetUpdatingPauseTimePercent=5', '-XX:SurvivorRatio=32', '-XX:+PerfDisableSharedMem', '-XX:MaxTenuringThreshold=1', '-Daikars.new.flags=true', '-Dusing.aikars.flags=https://mcflags.emc.gs', '-jar', `./software/${software}-${version}.jar`, 'nogui'],
                                  { cwd: "./server" }
                                );
                                loger('Server Start By Web', 1, 1);
                                serverstatus = 'on';
                                minecraft.on('exit', (code, signal) => {
                                  if (serverstatus == 'on') {
                                    if (signal) loger(`Server killed with signal: ${signal}`, 1, 3);
                                    io.emit(`${console_received_key}_console_log`, { message: 'The Server ShutDown ✅', color: 'green' });
                                    loger('Server Stop By Web', 1, 2);
                                    minecraft.kill();
                                    serverstatus = 'off';
                                  }
                                });
                                return minecraft;
                              }
                            });
                          });
                        }
                        io.on('connection', function (socket) {
                          socket.on('connection_key', function (data) {
                            if (data.connection_key != undefined && data.connection_key == socket_connection_key) {
                              socket.emit('connection_key', { status: 'success' });

                              loger('Socket Client Connected!', 1, 1);
                              socket.on('disconnect', () => {
                                loger('Socket Client Disconnect!', 1, 3);
                              });

                              //events

                              socket.on('event', function (data) {
                                if (data.event != undefined) {
                                  if (data.event == 'startserver') {
                                    if (data.key != undefined && data.key == server_send_key) {
                                      if (serverstatus == 'off') {
                                        minecraft_server();
                                      }
                                    }
                                  }
                                  if (data.event == 'stopserver') {
                                    if (data.key != undefined && data.key == server_send_key) {
                                      if (serverstatus == 'on') {
                                        minecraft.stdin.write("stop" + "\r");
                                      }
                                    }
                                  }
                                  if (data.event == 'update_server_conf') {
                                    if (data.key != undefined && data.key == options_send_key) {
                                      let motd = data.motd;
                                      let commandblocks = data.server_commandblocks;
                                      let whitelist = data.server_whitelist;
                                      let cracked = data.server_cracked;
                                      let pvp = data.server_pvp;
                                      let fly = data.server_fly;
                                      let animals = data.server_animals;
                                      let monster = data.server_monster;
                                      let villagers = data.server_villagers;
                                      let nether = data.server_nether;
                                      let force_gamemode = data.server_force_gamemode;
                                      let spawn_protection = data.server_spawn_protection;
                                      let slots = data.server_slots;
                                      let gamemode = data.server_gamemode;
                                      let difficulty = data.server_difficulty;
                                      let resource_pack_url = data.server_resource_pack_url;
                                      let server_conf_update = `{"motd":"${motd}","commandblocks":"${commandblocks}","whitelist":"${whitelist}","cracked":"${cracked}","pvp":"${pvp}","fly":"${fly}","animals":"${animals}","monster":"${monster}","villagers":"${villagers}","nether":"${nether}","force_gamemode":"${force_gamemode}","spawn_protection":"${spawn_protection}","slots":"${slots}","gamemode":"${gamemode}","difficulty":"${difficulty}","resource_pack_url":"${resource_pack_url}"}`;
                                      if (motd == '' || motd == undefined) {
                                        socket.emit(`${options_received_key}_options_update`, `${language.options_page.alert_danger}`);
                                      } else {
                                        fs.writeFile('data/server_conf.ydb', server_conf_update, 'utf-8', function (err, data) {
                                          server_conf_motd = motd;
                                          if (err) {
                                            socket.emit(`${options_received_key}_options_update`, `${language.options_page.alert_danger}`);
                                          } else {
                                            update_data_update(function (callback) {
                                              update_this_data(callback, function (callback) {
                                                if (callback.status == 'true') {
                                                  socket.emit(`${options_received_key}_options_update`, `${language.options_page.alert_success}`);
                                                  loger('Server Conf Data Base Update!', 1, 1);
                                                }
                                              });
                                            });
                                          }
                                        });
                                      }
                                    }
                                  }
                                  if (data.event == 'update_logs') {
                                    if (data.key != undefined && data.key == log_send_key) {
                                      fs.readdir('./server/logs', 'utf8', function (log, files) {
                                        let files_num = 0;
                                        let receive_files = '';
                                        let receive_files_log = '';
                                        let receive_files_gz = '';
                                        if (files != '' && files != undefined) {
                                          files.forEach(file => {
                                            files_num++;
                                            if (file.split('.')[file.split('.').length - 1] == 'log') {
                                              receive_files_log = receive_files_log + `<tr> <th scope="row"><img src="/static/images/${file.split('.')[file.split('.').length - 1]}-icon.png" width="32px" height="32px" /></th> <td>${file}</td> <td> <a href="/static/${log_download_key}/${file}" type="button" class="btn btn-primary btn-sm">${language.log_page.download_button}</a> <button onclick="select_data('${file}')" type="button" class="btn btn-primary btn-sm">${language.log_page.select_button}</button> <button onclick="delete_file('${file}');" type="button" class="btn btn-danger btn-sm">${language.log_page.delete_button}</button> </td> </tr>`;
                                            }
                                            if (file.split('.')[file.split('.').length - 1] == 'gz') {
                                              receive_files_gz = receive_files_gz + `<tr> <th scope="row"><img src="/static/images/${file.split('.')[file.split('.').length - 1]}-icon.png" width="32px" height="32px" /></th> <td>${file}</td> <td> <a href="/static/${log_download_key}/${file}" type="button" class="btn btn-primary btn-sm">${language.log_page.download_button}</a> <button onclick="delete_file('${file}');" type="button" class="btn btn-danger btn-sm">${language.log_page.delete_button}</button> </td> </tr>`;
                                            }
                                            receive_files = receive_files_log + receive_files_gz;
                                            if (files.length == files_num) {
                                              socket.emit(`${log_received_key}_receive_logs`, receive_files);
                                            }
                                          });
                                        }
                                      });
                                    }
                                  }
                                  if (data.event == 'logs_delete') {
                                    if (data.key != undefined && data.key == log_send_key && data.file != undefined) {
                                      fs.unlink('./server/logs/' + data.file, function (err) {
                                        if (err) {
                                          socket.emit(`${log_received_key}_logs_delete`, `${language.log_page.delete_error_message}`);
                                        } else {
                                          socket.emit(`${log_received_key}_logs_delete`, `${language.log_page.delete_success_message}`);
                                        }
                                      });
                                    }
                                  }
                                  if (data.event == 'cmd_console') {
                                    if (data.key != undefined && data.key == console_send_key) {
                                      if (serverstatus == 'on') {
                                        if (data.cmd_send == 'stop') {
                                          io.emit(`${console_received_key}_console_log`, { message: language.console_page.console_permission_didnt, color: '#f52121' });
                                        } else {
                                          minecraft.stdin.write(data.cmd_send + "\r");
                                        }
                                      }
                                    }
                                  }
                                  if (data.event == 'receive_files_addons') {
                                    if (data.key != undefined && data.key == addons_send_key) {
                                      fs.readdir('./addons' + data.file_manager_location, 'utf8', (err, files) => {
                                        let files_num = 0;
                                        let receive_files = '';
                                        if (files != '' && files != undefined) {
                                          files.forEach(file => {
                                            files_num++;
                                            file_name = file.split('.');
                                            receive_files = receive_files + `<tr><th scope="row"><img src="/static/images/${file.split('.')[file.split('.').length - 1]}-icon.png" width="32px" height="32px" /></th><td><a style="color: white;" href="#${data.file_manager_location}/${file}"><p>${file}</p></a></td><td> <button onclick="delete_file('${file}');" type="button" class="btn btn-danger btn-sm">${language.filemanager.delete_button}</button></td>`;
                                            if (files.length == files_num) {
                                              receive_files = `<div class="d-flex justify-content-start"> <div style="margin-right: 9px;" class="input-group mb-3"> <div class="input-group-prepend"> <span class="input-group-text">File Name :</span> </div> <input type="text" class="form-control" id="create_file_input"> <div class="input-group-append"> <span class="input-group-text">.addon.js</span> </div> </div> <button onclick="create_file();" style="margin-bottom: 16px;" type="button" class="btn btn-primary btn-sm">${language.filemanager.create_button}</button> </div> <table class="table table-dark"><thead><tr><th scope="col"><i class="bx bx-file bx-sm"></i></th><th scope="col">${language.filemanager.name_list}</th><th scope="col">${language.filemanager.actions_list}</th></tr></thead><tbody>${receive_files}</tbody>`;
                                              socket.emit(`${addons_received_key}_receive_files`, receive_files);
                                            }
                                          });
                                        } else {
                                          if (data.file_manager_location.split('.')[1] == undefined) {
                                            if (err) {
                                              socket.emit(`${addons_received_key}_receive_files`, `<a href="#" type="button" class="btn btn-primary btn-sm">${language.filemanager.go_back_button}</a> <div>${language.filemanager.fm_error_1}</div>`);
                                            } else {
                                              socket.emit(`${addons_received_key}_receive_files`, `<a href="#" type="button" class="btn btn-primary btn-sm">${language.filemanager.go_back_button}</a> <div>${language.filemanager.fm_error_2}</div>`);
                                            }
                                          } else {
                                            let file_type = data.file_manager_location.split('.')[data.file_manager_location.split('.').length - 1];
                                            if (fs.existsSync('./addons' + data.file_manager_location)) {
                                              if (file_type == 'js') {
                                                fs.readFile('./addons' + data.file_manager_location, 'utf8', (err, data) => {
                                                  if (err) {
                                                    socket.emit(`${addons_received_key}_receive_files`, `<a href="#" type="button" class="btn btn-primary btn-sm">${language.filemanager.go_back_button}</a> <div>${language.filemanager.fm_error_3}</div>`);
                                                  } else {
                                                    socket.emit(`${addons_received_key}_receive_files`, `<div class="d-flex flex-row"><a style="margin-bottom: 5px;margin-right: 5px;" href="#" type="button" class="btn btn-primary btn-sm">${language.filemanager.go_back_button}</a> <button style="margin-bottom: 5px;margin-right: 5px;" type="button" class="btn btn-primary btn-sm" onclick="update_file_codeeditor();">${language.filemanager.save_file_button}</button></div><p><textarea id="lineCounter" wrap="off" readonly>1.</textarea><textarea id="codeEditor" wrap="off">${data}</textarea></p>`);
                                                  }
                                                });
                                              } else {
                                                socket.emit(`${addons_received_key}_receive_files`, `<a href="#" type="button" class="btn btn-primary btn-sm">${language.filemanager.go_back_button}</a> <div>${language.filemanager.fm_error_4}</div>`);
                                              }
                                            } else {
                                              socket.emit(`${addons_received_key}_receive_files`, `<a href="#" type="button" class="btn btn-primary btn-sm">${language.filemanager.go_back_button}</a> <div>${language.filemanager.fm_error_5}</div>`);
                                            }
                                          }
                                        }
                                      });
                                    }
                                  }
                                  if (data.event == 'addons_update_files') {
                                    if (data.key != undefined && data.key == addons_send_key) {
                                      if (data.new_file_data == false) {
                                        data.new_file_data = '';
                                      }
                                      if (fs.existsSync('./addons' + data.location)) {
                                        fs.writeFile('./addons' + data.location, data.new_file_data, (err) => {
                                          if (err) {
                                            socket.emit(`${addons_received_key}_update_files`, `${language.filemanager.fm_error_6}`);
                                          } else {
                                            socket.emit(`${addons_received_key}_update_files`, `${language.filemanager.fm_error_7}`);
                                          }
                                        });
                                      } else {
                                        socket.emit(`${addons_received_key}_update_files`, `${language.filemanager.fm_error_8}`);
                                      }
                                    }
                                  }
                                  if (data.event == 'addons_create_file') {
                                    if (data.key != undefined && data.key == addons_send_key) {
                                      if (data.name_create_file != undefined && data.name_create_file != '') {
                                        if (fs.existsSync(`./addons/${data.name_create_file}.addon.js`)) {
                                          socket.emit(`${addons_received_key}_update_files`, `${language.filemanager.fm_error_9}`);
                                        } else {
                                          fs.writeFile(`./addons/${data.name_create_file}.addon.js`, '//Addon Example Name Like ' + data.name_create_file, 'utf8', (err) => {
                                            if (err) {
                                              socket.emit(`${addons_received_key}_update_files`, `${language.filemanager.fm_error_10}`);
                                            } else {
                                              socket.emit(`${addons_received_key}_update_files`, `${language.filemanager.fm_error_11}`);
                                            }
                                          });
                                        }
                                      } else {
                                        socket.emit(`${addons_received_key}_update_files`, `${fm_error_12}`);
                                      }
                                    }
                                  }
                                  if (data.event == 'addons_file_delete') {
                                    if (data.key != undefined && data.key == addons_send_key && data.file != undefined) {
                                      fs.unlink('./addons/' + data.file, function (err) {
                                        if (err) {
                                          socket.emit(`${addons_received_key}_update_files`, `${fm_error_13}`);
                                        } else {
                                          socket.emit(`${addons_received_key}_update_files`, `${fm_error_14}`);
                                        }
                                      });
                                    }
                                  }
                                  if (data.event == 'restart_addons') {
                                    if (data.key != undefined && data.key == addons_send_key) {
                                      Load_addons();
                                      socket.emit(`${addons_received_key}_update_files`, `${language.addons_page.reload_addons_message}`);
                                      setTimeout(() => {
                                        io.emit('reload', 'reload');
                                      }, 2000);
                                    }
                                  }
                                  if (data.event == 'change_password') {
                                    if (data.key != undefined && data.key == profile_send_key) {
                                      if (data.username != '' || data.username != undefined || data.chlastpassword != '' || data.chlastpassword != undefined || data.chnewpassword != '' || data.chnewpassword != undefined) {
                                        if (fs.existsSync(`./data/users/${data.username}.ydb`)) {
                                          fs.readFile(`./data/users/${data.username}.ydb`, 'utf8', function (err, user_data) {
                                            datajson = JSON.parse(user_data);
                                            if (data.chlastpassword == datajson.password && data.username == datajson.username && datajson.token == data.token) {
                                              let new_user_token = '';
                                              for (var i = 0; i < 128; i++) {
                                                new_user_token = new_user_token + dict_s.charAt(Math.floor(Math.random() * dict_s.length));
                                              }
                                              anti_data_storage_injection_realstring(data.chnewpassword, function (chnewpassword_data) {
                                                let new_user_data = `{"username":"${datajson.username}","password":"${chnewpassword_data}","token":"${new_user_token}","level_permission":"${datajson.level_permission}"}`;
                                                fs.writeFile(`./data/users/${datajson.username}.ydb`, new_user_data, 'utf-8', function (err) {
                                                  if (err) {
                                                    socket.emit(`${profile_received_key}_${data.username}_profile_update`, { message: `${language.profile_page.danger_alert_2}`, status: "danger" });
                                                  } else {
                                                    socket.emit(`${profile_received_key}_${data.username}_profile_update`, { message: `${language.profile_page.success_alert}`, status: "success" });
                                                  }
                                                });
                                              });
                                            } else {
                                              socket.emit(`${profile_received_key}_${data.username}_profile_update`, { message: "Error", status: `${language.profile_page.danger_alert}` });
                                            }
                                          });
                                        }
                                      }
                                    }
                                  }
                                  if (data.event == 'update_general_settings') {
                                    if (data.key != undefined && data.key == general_settings_send_key) {
                                      const new_language_v = data.new_language_v;
                                      const new_port_v = data.new_port_v;
                                      const new_min_ram_v = data.new_min_ram_v;
                                      const new_max_ram_v = data.new_max_ram_v;
                                      const new_servername_v = data.new_servername_v;
                                      const new_software_v = data.new_software_v;
                                      const new_version_v = data.new_version_v;
                                      const new_connection_v = data.new_connection_v;

                                      if (new_port_v == webserver_port) {
                                        socket.emit(`${general_settings_received_key}_setup_update`, `${language.general_settings_page.error_103}`);
                                      } else {
                                        if (!new_port_v == "" & !new_min_ram_v == "" & !new_max_ram_v == "" & !new_servername_v == "" & !new_software_v == "" & !new_version_v == "") {
                                          const new_setup_v = `{"setup":"1","language":"${new_language_v}","min_ram":"${new_min_ram_v}","max_ram":"${new_max_ram_v}","version":"${new_version_v}","server_name":"${new_servername_v}","software":"${new_software_v}","eula":"${eula}","port":"${new_port_v}","connection_type":"${new_connection_v}"}`;
                                          fs.writeFile('data/setup.ydb', new_setup_v, 'utf-8', function (err, data) {
                                            update_data_update(function (callback) {
                                              update_this_data(callback, function (callback) {
                                                if (callback.status == 'true') {
                                                  if (setup == 1) {
                                                    socket.emit(`${general_settings_received_key}_setup_update`, `${language.general_settings_page.error_101}`);
                                                    io.emit('reload', 'reload');
                                                  }
                                                  if (fs.existsSync(`./server/software/${new_software_v}-${new_version_v}.jar`)) {
                                                    loger('Setup Data Base Update!', 1, 1);
                                                  } else {
                                                    loger('Receiving information please wait', 1, 2);
                                                    let dll_url = `http://dll.yservices.ir/mccontroller/software/${software}/${software}-${version}.jar`;
                                                    (async () => {
                                                      loadui = 'on';
                                                      io.emit('reload', 'reload');
                                                      loger(`Start Downloading | Minecraft_${new_version_v} | URL: ${dll_url}`, 1, 2);
                                                      fs.writeFileSync(`./server/software/${new_software_v}-${new_version_v}.jar`, await download(dll_url));
                                                      loger('Downloading Done!', 1, 1);
                                                      loadui = 'off';
                                                    })();
                                                  }
                                                }
                                              });
                                            });
                                          });
                                        } else {
                                          socket.emit(`${general_settings_received_key}_setup_update`, `${language.general_settings_page.error_102}`);
                                        }
                                      }
                                    }
                                  }
                                  if (data.event == 'add_access') {
                                    if (data.key != undefined && data.key == access_send_key) {
                                      if (fs.existsSync(`./data/users/${data.username}.ydb`)) {
                                        socket.emit(`${access_received_key}_access_update`, `${language.access_page.alert_danger_add}`);
                                      } else {
                                        let new_user_token = '';
                                        for (var i = 0; i < 128; i++) {
                                          new_user_token = new_user_token + dict_s.charAt(Math.floor(Math.random() * dict_s.length));
                                        }
                                        anti_data_storage_injection_realstring(data.username, function (username_data) {
                                          anti_data_storage_injection_realstring(data.password, function (password_data) {
                                            anti_data_storage_injection_realstring(data.level_permission, function (level_permission_data) {
                                              let new_user = `{"username":"${username_data}","password":"${password_data}","token":"${new_user_token}","level_permission":"${level_permission_data}"}`;
                                              fs.writeFile(`data/users/${username_data}.ydb`, new_user, 'utf-8', function (err, data) {
                                                if (err) {
                                                  socket.emit(`${access_received_key}_access_update`, `${language.access_page.alert_danger_add_2}`);
                                                } else {
                                                  socket.emit(`${access_received_key}_access_update`, `${language.access_page.alert_success_add}`);
                                                  socket.emit('reload', 'reload');
                                                }
                                              });
                                            });
                                          });
                                        });
                                      }
                                    }
                                  }
                                  if (data.event == 'remove_access') {
                                    if (data.key != undefined && data.key == access_send_key) {
                                      if (fs.existsSync(`./data/users/${data.rm_username}.ydb`)) {
                                        fs.unlink(`./data/users/${data.rm_username}.ydb`, function (err) {
                                          if (err) {
                                            socket.emit(`${access_received_key}_access_update`, `${language.access_page.alert_danger_remove_2}`);
                                          } else {
                                            socket.emit(`${access_received_key}_access_update`, `${language.access_page.alert_success_remove}`);
                                            socket.emit('reload', 'reload');
                                          }
                                        });
                                      } else {
                                        socket.emit(`${access_received_key}_access_update`, `${language.access_page.alert_danger_remove}`);
                                      }
                                    }
                                  }

                                  if (data.event == 'receive_files_plugins') {
                                    if (data.key != undefined && data.key == plugins_send_key) {
                                      fs.readdir('./server/plugins' + data.file_manager_location, 'utf8', (err, files) => {
                                        let files_num = 0;
                                        let receive_files = '';
                                        let receive_files_folder = '';
                                        let receive_files_file = '';
                                        if (files != '' && files != undefined) {
                                          files.forEach(file => {
                                            files_num++;
                                            file_name = file.split('.');
                                            if (file.split('.')[file.split('.').length - 1] == 'gif' || file.split('.')[file.split('.').length - 1] == 'css' || file.split('.')[file.split('.').length - 1] == 'gz' || file.split('.')[file.split('.').length - 1] == 'html' || file.split('.')[file.split('.').length - 1] == 'icon' || file.split('.')[file.split('.').length - 1] == 'jar' || file.split('.')[file.split('.').length - 1] == 'jpg' || file.split('.')[file.split('.').length - 1] == 'js' || file.split('.')[file.split('.').length - 1] == 'json' || file.split('.')[file.split('.').length - 1] == 'log' || file.split('.')[file.split('.').length - 1] == 'png' || file.split('.')[file.split('.').length - 1] == 'properties' || file.split('.')[file.split('.').length - 1] == 'py' || file.split('.')[file.split('.').length - 1] == 'txt' || file.split('.')[file.split('.').length - 1] == 'yml' || file.split('.')[file.split('.').length - 1] == 'zip') {
                                              receive_files_file = receive_files_file + `<tr><th scope="row"><img src="/static/images/${file.split('.')[file.split('.').length - 1]}-icon.png" width="32px" height="32px" /></th><td><a style="color: white;" href="#${data.file_manager_location}/${file}"><p>${file}</p></a></td><td> <button onclick="delete_file('${data.file_manager_location}/${file}');" type="button" class="btn btn-danger btn-sm">${language.filemanager.delete_button}</button></td>`;
                                            } else {
                                              receive_files_folder = receive_files_folder + `<tr><th scope="row"><img src="/static/images/folder-icon.png" width="32px" height="32px" /></th><td><a style="color: white;" href="#${data.file_manager_location}/${file}"><p>${file}</p></a></td><td></td>`;
                                            }
                                            if (files.length == files_num) {
                                              receive_files = receive_files_folder + receive_files_file;
                                              receive_files = `<table class="table table-dark"><thead><tr><th scope="col"><i class="bx bx-file bx-sm"></i></th><th scope="col">${language.filemanager.name_list}</th><th scope="col">${language.filemanager.actions_list}</th></tr></thead><tbody>${receive_files}</tbody>`;
                                              socket.emit(`${plugins_received_key}_receive_files`, receive_files);
                                            }
                                          });
                                        } else {
                                          if (data.file_manager_location.split('.')[1] == undefined) {
                                            if (err) {
                                              socket.emit(`${plugins_received_key}_receive_files`, `<a href="#" type="button" class="btn btn-primary btn-sm">${language.filemanager.go_back_button}</a> <div>${language.filemanager.fm_error_5}</div>`);
                                            } else {
                                              socket.emit(`${plugins_received_key}_receive_files`, `<a href="#" type="button" class="btn btn-primary btn-sm">${language.filemanager.go_back_button}</a> <div>${language.filemanager.fm_error_2}</div>`);
                                            }
                                          } else {
                                            let file_type = data.file_manager_location.split('.')[data.file_manager_location.split('.').length - 1];
                                            if (fs.existsSync('./server/plugins' + data.file_manager_location)) {
                                              if (file_type == 'js' || file_type == 'yml' || file_type == 'txt' || file_type == 'properties' || file_type == 'json' || file_type == 'log') {
                                                fs.readFile('./server/plugins' + data.file_manager_location, 'utf8', (err, data) => {
                                                  if (err) {
                                                    socket.emit(`${plugins_received_key}_receive_files`, `<a href="#" type="button" class="btn btn-primary btn-sm">${language.filemanager.go_back_button}</a> <div>${language.filemanager.fm_error_3}</div>`);
                                                  } else {
                                                    socket.emit(`${plugins_received_key}_receive_files`, `<div class="d-flex flex-row"><a style="margin-bottom: 5px;margin-right: 5px;" href="#" type="button" class="btn btn-primary btn-sm">${language.filemanager.go_back_button}</a> <button style="margin-bottom: 5px;margin-right: 5px;" type="button" class="btn btn-primary btn-sm" onclick="update_file_codeeditor();">${language.filemanager.save_file_button}</button></div><p><textarea id="lineCounter" wrap="off" readonly>1.</textarea><textarea id="codeEditor" wrap="off">${data}</textarea></p>`);
                                                  }
                                                });
                                              } else {
                                                socket.emit(`${plugins_received_key}_receive_files`, `<a href="#" type="button" class="btn btn-primary btn-sm">${language.filemanager.go_back_button}</a> <div>${language.filemanager.fm_error_4}</div>`);
                                              }
                                            } else {
                                              socket.emit(`${plugins_received_key}_receive_files`, `<a href="#" type="button" class="btn btn-primary btn-sm">${language.filemanager.go_back_button}</a> <div>${language.filemanager.fm_error_1}</div>`);
                                            }
                                          }
                                        }
                                      });
                                    }
                                  }
                                  if (data.event == 'plugins_update_files') {
                                    if (data.key != undefined && data.key == plugins_send_key) {
                                      if (data.new_file_data == false) {
                                        data.new_file_data = '';
                                      }
                                      if (fs.existsSync('./server/plugins' + data.location)) {
                                        fs.writeFile('./server/plugins' + data.location, data.new_file_data, (err) => {
                                          if (err) {
                                            socket.emit(`${plugins_received_key}_update_files`, `${language.filemanager.fm_error_6}`);
                                          } else {
                                            socket.emit(`${plugins_received_key}_update_files`, `${language.filemanager.fm_error_7}`);
                                          }
                                        });
                                      } else {
                                        socket.emit(`${plugins_received_key}_update_files`, `${language.filemanager.fm_error_8}`);
                                      }
                                    }
                                  }
                                  if (data.event == 'plugins_file_delete') {
                                    if (data.key != undefined && data.key == plugins_send_key && data.file != undefined) {
                                      fs.unlink('./server/plugins' + data.file, function (err) {
                                        if (err) {
                                          socket.emit(`${plugins_received_key}_update_files`, `${language.filemanager.fm_error_13}`);
                                        } else {
                                          socket.emit(`${plugins_received_key}_update_files`, `${language.filemanager.fm_error_14}`);
                                        }
                                      });
                                    }
                                  }
                                }
                              });

                              //server
                              setInterval(() => {
                                socket.emit(`${server_received_key}_status`, serverstatus);
                                socket.emit(`${console_received_key}_status`, serverstatus);
                                const server = new mcping.MinecraftServer(server_ip, serverport);
                                server.ping(10e3, 757, (err, res) => {
                                  if (res) {
                                    minecraft_server_data = res;
                                    socket.emit(`${server_received_key}_server_info`, { online_player: res.players.online });
                                    io.emit(`${server_received_key}_server_online`, `${language.server_page.online}`);
                                  } else {
                                    if (err) {
                                      minecraft_server_data = '';
                                    }
                                  }
                                });
                                if (serverstatus == 'on') {
                                  pidusage(minecraft.pid, function (err, stats) {
                                    if (serverstatus == 'on') {
                                      if (!err) {
                                        if (stats.memory != undefined && stats.cpu != undefined) {
                                          memoryuseserver = stats.memory / 1000000;
                                          socket.emit(`${server_received_key}_system_usage`, { cpudata: stats.cpu, ramdata: memoryuseserver });
                                        }
                                      }
                                    }
                                  });
                                }
                              }, 2000);
                              //end

                              //console
                              let console_bugfix = 'false';
                              setInterval(() => {
                                if (console_bugfix == 'false') {
                                  if (serverstatus == 'on') {
                                    socket.emit(`${console_received_key}_console_log`, { message: 'Server is Online ✅', color: 'green' });
                                    minecraft.stdout.on('data', function (data) {
                                      if (data) {
                                        let console_color = '#f52121';
                                        let console_data = `${data}`;
                                        console_data = console_data.split(" ");
                                        if (console_data.includes('INFO]:') == true) {
                                          console_color = '#3c3cff';
                                        }
                                        if (console_data.includes('WARN]:') == true) {
                                          console_color = '#f9f947';
                                        }
                                        socket.emit(`${console_received_key}_console_log`, { message: `${data}`, color: console_color });
                                      }
                                    });
                                    console_bugfix = 'true';
                                  }
                                }
                              });
                              //end

                            }
                          });
                        });

                        (function () {
                          var P = ["\\", "|", "/", "-"];
                          var x = 0;
                          return setInterval(function () {
                            process.stdout.write("\r" + 'App :[' + P[x++] + ']  App_Version:[' + app_version + ']' + "\r");
                            x &= 3;
                          }, 250);
                        })();

                        app.post('/event/', function (req, res) {
                          if (connection_type == 'private') {
                            if (req.ipInfo.ip != '::1') {
                              return;
                            }
                          }
                          if (loadui == 'on') {
                            res.send(html_loader);
                          } else {
                            if (blacklist_ip.includes(`${req.ipInfo.ip}`) == true) {
                              res.status(403).send(html_error_403);
                            } else {
                              if (setup == 0) {
                                if (req.body.event == 'setup') {
                                  if (req.body.port == webserver_port) {
                                    res.send('<script>window.location.replace("/login/?errorcode=104");</script>');
                                  } else {
                                    let new_user_token = '';
                                    for (var i = 0; i < 128; i++) {
                                      new_user_token = new_user_token + dict_s.charAt(Math.floor(Math.random() * dict_s.length));
                                    }
                                    let new_user = `{"username":"${req.body.username}","password":"${req.body.password}","token":"${new_user_token}","level_permission":"1"}`;
                                    fs.writeFile(`data/users/${req.body.username}.ydb`, new_user, 'utf-8', function (err, data) {
                                      let setup_update = `{"setup":"1","language":"${req.body.language}","min_ram":"${req.body.min_ram}","max_ram":"${req.body.max_ram}","version":"${req.body.version}","server_name":"${req.body.server_name}","software":"${req.body.software}","eula":"${req.body.eula}","port":"${req.body.port}","connection_type":"${req.body.connection}"}`;
                                      fs.writeFile('data/setup.ydb', setup_update, 'utf-8', function (err, data) {
                                        update_data_update(function (callback) {
                                          update_this_data(callback, function (callback) {
                                            if (callback.status == 'true') {
                                              loger('Setup Done!', 1, 1);
                                              loadui = 'on';
                                              if (fs.existsSync(`./server/software/${software}-${version}.jar`)) {
                                                loadui = 'off';
                                              } else {
                                                loger('Jar file not found please wait', 2, 2);
                                                let dll_url = `http://dll.yservices.ir/mccontroller/software/${software}/${software}-${version}.jar`;
                                                (async () => {
                                                  loger(`Start Downloading | Minecraft_${version} | URL: ${dll_url}`, 1, 2);
                                                  fs.writeFileSync(`./server/software/${software}-${version}.jar`, await download(dll_url));
                                                  loger('Downloading Done!', 1, 1);
                                                  loadui = 'off';
                                                })();
                                              }
                                              res.send('<script>window.location.replace("/login/?errorcode=102");</script>');
                                            }
                                          });
                                        });

                                      });
                                    });
                                  }
                                }
                              } else {
                                if (req.body.event == 'login') {
                                  if (fs.existsSync(`./data/users/${req.body.username}.ydb`)) {
                                    fs.readFile(`./data/users/${req.body.username}.ydb`, 'utf8', function (err, data) {
                                      datajson = JSON.parse(data);
                                      if (req.body.password == datajson.password) {
                                        res.send(`<script>localStorage.setItem("token","${datajson.token}");window.location.replace("/dashboard/");</script>`);
                                      } else {
                                        if (req.ipInfo.ip != '::1') {
                                          fs.appendFile('./data/blacklist_ip.ydb', `\n${req.ipInfo.ip}`, function () {
                                            res.send('<script>window.location.replace("/login/?errorcode=101");</script>');
                                          });
                                          setTimeout(() => {
                                            fs.readFile('./data/blacklist_ip.ydb', 'utf8', function (err, data) {
                                              let new_data = data.replace(`\n${req.ipInfo.ip}`, '');
                                              fs.writeFileSync('./data/blacklist_ip.ydb', `${new_data}`);
                                            });
                                          }, 10000);
                                        } else {
                                          res.send('<script>window.location.replace("/login/?errorcode=101");</script>');
                                        }
                                      }
                                    });
                                  } else {
                                    if (req.ipInfo.ip != '::1') {
                                      fs.appendFile('./data/blacklist_ip.ydb', `\n${req.ipInfo.ip}`, function () {
                                        res.send('<script>window.location.replace("/login/?errorcode=101");</script>');
                                      });
                                      setTimeout(() => {
                                        fs.readFile('./data/blacklist_ip.ydb', 'utf8', function (err, data) {
                                          let new_data = data.replace(`\n${req.ipInfo.ip}`, '');
                                          fs.writeFileSync('./data/blacklist_ip.ydb', `${new_data}`);
                                        });
                                      }, 10000);
                                    } else {
                                      res.send('<script>window.location.replace("/login/?errorcode=101");</script>');
                                    }
                                  }
                                }
                              }
                            }
                          }
                        });

                        const storage = multer.diskStorage({
                          destination: function (req, file, callback) {
                            callback(null, './server/plugins/');
                          },
                          filename: function (req, file, callback) {
                            callback(null, file.originalname);
                          }
                        });
                        const upload = multer({ storage: storage }).single('plugin_file');

                        app.post(`/upload/plugins/${plugins_send_key}/`, function (req, res) {
                          if (connection_type == 'private') {
                            if (req.ipInfo.ip != '::1') {
                              return;
                            }
                          }
                          upload(req, res, function (err) {
                            if (err) {
                              return res.end(`${language.plugins_page.file_upload_error}`);
                            }
                            res.end(`${language.plugins_page.file_upload_done}`);
                          });
                        });

                        app.get('/dashboard/', function (req, res) {
                          if (connection_type == 'private') {
                            if (req.ipInfo.ip != '::1') {
                              return;
                            }
                          }
                          if (loadui == 'on') {
                            res.send(html_loader);
                          } else {
                            if (blacklist_ip.includes(`${req.ipInfo.ip}`) == true) {
                              res.status(403).send(html_error_403);
                            } else {
                              res.send('<script>const token = localStorage.getItem("token");document.write(`<form id="sendform" action="/dashboard/server/" method="post"><input type="hidden" value="${token}" name="token"></form>`);document.getElementById("sendform").submit();</script>');
                            }

                          }
                        });
                        app.post('/dashboard/', function (req, res) {
                          if (connection_type == 'private') {
                            if (req.ipInfo.ip != '::1') {
                              return;
                            }
                          }
                          if (loadui == 'on') {
                            res.send(html_loader);
                          } else {
                            if (blacklist_ip.includes(`${req.ipInfo.ip}`) == true) {
                              res.status(403).send(html_error_403);
                            } else {
                              res.send('<script>const token = localStorage.getItem("token");document.write(`<form id="sendform" action="/dashboard/server/" method="post"><input type="hidden" value="${token}" name="token"></form>`);document.getElementById("sendform").submit();</script>');
                            }
                          }
                        });
                        app.get('/dashboard/server/', function (req, res) {
                          if (connection_type == 'private') {
                            if (req.ipInfo.ip != '::1') {
                              return;
                            }
                          }
                          if (loadui == 'on') {
                            res.send(html_loader);
                          } else {
                            if (blacklist_ip.includes(`${req.ipInfo.ip}`) == true) {
                              res.status(403).send(html_error_403);
                            } else {
                              res.send('<script>const token = localStorage.getItem("token");document.write(`<form id="sendform" action="${document.location.href}" method="post"><input type="hidden" value="${token}" name="token"></form>`);document.getElementById("sendform").submit();</script>');
                            }
                          }
                        });
                        app.get('/dashboard/options/', function (req, res) {
                          if (connection_type == 'private') {
                            if (req.ipInfo.ip != '::1') {
                              return;
                            }
                          }
                          if (loadui == 'on') {
                            res.send(html_loader);
                          } else {
                            if (blacklist_ip.includes(`${req.ipInfo.ip}`) == true) {
                              res.status(403).send(html_error_403);
                            } else {
                              res.send('<script>const token = localStorage.getItem("token");document.write(`<form id="sendform" action="${document.location.href}" method="post"><input type="hidden" value="${token}" name="token"></form>`);document.getElementById("sendform").submit();</script>');
                            }
                          }
                        });
                        app.get('/dashboard/console/', function (req, res) {
                          if (connection_type == 'private') {
                            if (req.ipInfo.ip != '::1') {
                              return;
                            }
                          }
                          if (loadui == 'on') {
                            res.send(html_loader);
                          } else {
                            if (blacklist_ip.includes(`${req.ipInfo.ip}`) == true) {
                              res.status(403).send(html_error_403);
                            } else {
                              res.send('<script>const token = localStorage.getItem("token");document.write(`<form id="sendform" action="${document.location.href}" method="post"><input type="hidden" value="${token}" name="token"></form>`);document.getElementById("sendform").submit();</script>');
                            }
                          }
                        });
                        app.get('/dashboard/log/', function (req, res) {
                          if (connection_type == 'private') {
                            if (req.ipInfo.ip != '::1') {
                              return;
                            }
                          }
                          if (loadui == 'on') {
                            res.send(html_loader);
                          } else {
                            if (blacklist_ip.includes(`${req.ipInfo.ip}`) == true) {
                              res.status(403).send(html_error_403);
                            } else {
                              res.send('<script>const token = localStorage.getItem("token");document.write(`<form id="sendform" action="${document.location.href}" method="post"><input type="hidden" value="${token}" name="token"></form>`);document.getElementById("sendform").submit();</script>');
                            }
                          }
                        });
                        app.get('/dashboard/plugins/', function (req, res) {
                          if (connection_type == 'private') {
                            if (req.ipInfo.ip != '::1') {
                              return;
                            }
                          }
                          if (loadui == 'on') {
                            res.send(html_loader);
                          } else {
                            if (blacklist_ip.includes(`${req.ipInfo.ip}`) == true) {
                              res.status(403).send(html_error_403);
                            } else {
                              res.send('<script>const token = localStorage.getItem("token");document.write(`<form id="sendform" action="${document.location.href}" method="post"><input type="hidden" value="${token}" name="token"></form>`);document.getElementById("sendform").submit();</script>');
                            }
                          }
                        });
                        app.get('/dashboard/general_settings/', function (req, res) {
                          if (connection_type == 'private') {
                            if (req.ipInfo.ip != '::1') {
                              return;
                            }
                          }
                          if (loadui == 'on') {
                            res.send(html_loader);
                          } else {
                            if (blacklist_ip.includes(`${req.ipInfo.ip}`) == true) {
                              res.status(403).send(html_error_403);
                            } else {
                              res.send('<script>const token = localStorage.getItem("token");document.write(`<form id="sendform" action="${document.location.href}" method="post"><input type="hidden" value="${token}" name="token"></form>`);document.getElementById("sendform").submit();</script>');
                            }
                          }
                        });
                        app.get('/dashboard/addons/', function (req, res) {
                          if (connection_type == 'private') {
                            if (req.ipInfo.ip != '::1') {
                              return;
                            }
                          }
                          if (blacklist_ip.includes(`${req.ipInfo.ip}`) == true) {
                            res.status(403).send(html_error_403);
                          } else {
                            res.send('<script>const token = localStorage.getItem("token");document.write(`<form id="sendform" action="${document.location.href}" method="post"><input type="hidden" value="${token}" name="token"></form>`);document.getElementById("sendform").submit();</script>');
                          }
                        });
                        app.get('/dashboard/profile/', function (req, res) {
                          if (connection_type == 'private') {
                            if (req.ipInfo.ip != '::1') {
                              return;
                            }
                          }
                          if (loadui == 'on') {
                            res.send(html_loader);
                          } else {
                            if (blacklist_ip.includes(`${req.ipInfo.ip}`) == true) {
                              res.status(403).send(html_error_403);
                            } else {
                              res.send('<script>const token = localStorage.getItem("token");document.write(`<form id="sendform" action="${document.location.href}" method="post"><input type="hidden" value="${token}" name="token"></form>`);document.getElementById("sendform").submit();</script>');
                            }
                          }
                        });
                        app.get('/dashboard/access/', function (req, res) {
                          if (connection_type == 'private') {
                            if (req.ipInfo.ip != '::1') {
                              return;
                            }
                          }
                          if (loadui == 'on') {
                            res.send(html_loader);
                          } else {
                            if (blacklist_ip.includes(`${req.ipInfo.ip}`) == true) {
                              res.status(403).send(html_error_403);
                            } else {
                              res.send('<script>const token = localStorage.getItem("token");document.write(`<form id="sendform" action="${document.location.href}" method="post"><input type="hidden" value="${token}" name="token"></form>`);document.getElementById("sendform").submit();</script>');
                            }
                          }
                        });

                        app.get('/dashboard/logout/', function (req, res) {
                          if (connection_type == 'private') {
                            if (req.ipInfo.ip != '::1') {
                              return;
                            }
                          }
                          if (loadui == 'on') {
                            res.send(html_loader);
                          } else {
                            if (blacklist_ip.includes(`${req.ipInfo.ip}`) == true) {
                              res.status(403).send(html_error_403);
                            } else {
                              res.send('<script>localStorage.setItem("token","noon");window.location.replace("/login/?errorcode=103");</script>');
                            }
                          }
                        });

                        app.get('/', function (req, res) {
                          if (connection_type == 'private') {
                            if (req.ipInfo.ip != '::1') {
                              return;
                            }
                          }
                          if (loadui == "on") {
                            res.send(html_loader);
                          } else {
                            if (blacklist_ip.includes(`${req.ipInfo.ip}`) == true) {
                              res.status(403).send(html_error_403);
                            } else {
                              if (home_html == "") {
                                res.send('<script>window.location.replace("/login/");</script>');
                              } else {
                                res.send(home_html);
                              }
                            }
                          }
                        });

                        app.get('/login', function (req, res) {
                          if (connection_type == 'private') {
                            if (req.ipInfo.ip != '::1') {
                              return;
                            }
                          }
                          const params = url.parse(req.url, true).query;
                          let errorcode = params.errorcode;
                          let errormsg = "";
                          if (errorcode == "101") {
                            errormsg = `<center><div class="alert alert-danger" role="alert">${language.error_message[101]}</div></center>`;
                          }
                          if (errorcode == "102") {
                            errormsg = `<center><div class="alert alert-success" role="alert">Setup Done Please Login</div></center>`;
                          }
                          if (errorcode == "103") {
                            errormsg = `<center><div class="alert alert-success" role="alert">${language.error_message[103]}</div></center>`;
                          }
                          if (errorcode == "104") {
                            errormsg = `<center><div class="alert alert-danger" role="alert">ServerPort value are not allowed</div></center>`;
                          }
                          if (errorcode == null) {
                            errormsg = "";
                          }
                          if (loadui == "on") {
                            res.send(html_loader);
                          } else {
                            if (blacklist_ip.includes(`${req.ipInfo.ip}`) == true) {
                              res.status(403).send(html_error_403);
                            } else {
                              if (setup == 0) {
                                fs.readdir('./languages/', (err, files) => {
                                  let languages_num = 0;
                                  let languages_options = '';
                                  files.forEach(file => {
                                    languages_num++;
                                    let languages_selected = '';
                                    if (file.split('.')[0] == 'US-en') languages_selected = 'selected="selected" ';
                                    languages_options = languages_options + `<option ${languages_selected}value="${file.split('.')[0]}">${file.split('.')[0]}</option>`;
                                    if (languages_num == files.length) {
                                      res.send(`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>McController - Setup</title>
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
  <main id="app_body" style="display: none;">
    <div style="background-color: white; border-radius: 4px; width: 400px; margin-top: 30px; margin-bottom: 30px;" class="card-body p-4 p-sm-5">
      <h5 class="card-title text-center mb-5 fw-light fs-5">McController - Setup</h5>
      <form action="/event/" method="post">
      ${errormsg}
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="username" name="username" placeholder="Admin Username" required>
          <label for="username">Admin Username</label>
        </div>
        <div class="form-floating mb-3">
          <input type="password" class="form-control" id="password" name="password" placeholder="Admin Password" required>
          <label for="password">Admin Password</label>
        </div>
        <div class="form-floating mb-3">
          <input type="number" class="form-control" id="port" name="port" placeholder="Server Port" required>
          <label for="port">Server Port</label>
        </div>
        <div class="form-floating mb-3">
          <input type="number" class="form-control" id="min_ram" name="min_ram" placeholder="Min Ram Use G" required>
          <label for="min_ram">Min Ram Use (G)</label>
        </div>
        <div class="form-floating mb-3">
          <input type="number" class="form-control" id="max_ram" name="max_ram" placeholder="Max Ram Use G" required>
          <label for="max_ram">Max Ram Use (G)</label>
        </div>
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="server_name" name="server_name" placeholder="Server Name" required>
          <label for="server_name">Server Name</label>
        </div>
        <div class="form-select mb-3">
          <label class="form-check-label" for="software">
            Minecraft Server Software
          </label>
          <select name="software" class="form-select mb-3" required>
            <option value="paper">Paper</option>
            <option value="spigot">Spigot</option>
            <option value="craftbukkit">Craftbukkit</option>
          </select>
        </div>
        <div class="form-select mb-3">
          <label class="form-check-label" for="version">
            Minecraft Server Version
          </label>
          <select name="version" class="form-select mb-3" required>
            <option value="1.19">1.19</option>
            <option value="1.18.2">1.18.2</option>
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
        <div class="form-select mb-3">
          <label class="form-check-label" for="language">
            Languages
          </label>
          <select name="language" class="form-select mb-3" required>
            ${languages_options}
          </select>
        </div>
        <div class="form-select mb-3">
          <label class="form-check-label" for="connection">
            Connection Type
          </label>
          <select name="connection" class="form-select mb-3" required>
            <option value="public">Public | Any ip can connect program</option>
            <option value="private">Private | Only local address can connect program</option>
          </select>
        </div>
        <div class="form-check mb-3">
          <input class="form-check-input" type="checkbox" value="true" name="eula" required>
          <label class="form-check-label" for="eula">
            Accept Minecraft EULA
          </label>
        </div>
        <div class="d-grid">
          <button class="btn btn-primary text-uppercase fw-bold" type="submit" name="event" value="setup">Setup</button>
        </div>
        <hr class="my-4">
      </form>
      <div class="d-grid mb-2">
        <a href="https://yellow-team.ir/">
          <center><button
              style="font-size: 0.9rem;letter-spacing: 0.05rem;padding: 0.75rem 1rem;color: white !important;background-color: #ffbf00;"
              class="btn text-uppercase fw-bold">Power By Yellow
              Team</button></center>
        </a>
      </div>
    </div>
  </main>
  <script type="text/javascript" src="/static/js/bootstrap.bundle.min.js"></script>
  <script src="/static/js/jquery-3.6.0.js"></script>
  <script src="/static/js/loader.js"></script>
</body>
</html>`);
                                    }
                                  });
                                });
                              } else {
                                if (setup == 1) {
                                  res.send(`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${language.mccontroller_name} - ${language.login_page.login_title}</title>
  <link href="/static/images/logo.png" rel="icon">
  <link href="/static/css/bootstrap.min.css" rel="stylesheet">
  <link href="/static/boxicons/css/boxicons.min.css" rel="stylesheet">
  <link href="/static/css/style.css" rel="stylesheet">
  ${login_head}
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
  <main id="app_body" style="display: none;">
    <div style="background-color: white; border-radius: 4px; width: 400px; margin-top: 30px; margin-bottom: 30px" class="card-body p-4 p-sm-5">
      <h5 class="card-title text-center mb-5 fw-light fs-5">${language.mccontroller_name} - ${language.login_page.login_title}</h5>
      <form action="/event/" method="post">
      ${errormsg}
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="username" name="username" placeholder="${language.login_page.login_input_username}" required>
          <label for="username">${language.login_page.login_input_username}</label>
        </div>
        <div class="form-floating mb-3">
          <input type="password" class="form-control" id="password" name="password" placeholder="${language.login_page.login_input_password}" required>
          <label for="password">${language.login_page.login_input_password}</label>
        </div>
        <div class="form-check mb-3">
          <input class="form-check-input" type="checkbox" value="" id="rememberPasswordCheck" checked disabled>
          <label class="form-check-label" for="rememberPasswordCheck">
          ${language.login_page.remember_checkbox_password}
          </label>
        </div>
        <div class="d-grid">
          <button class="btn btn-primary text-uppercase fw-bold"
            type="submit" name="event" value="login">${language.login_page.login_button}</button>
        </div>
        ${login_main}
        <hr class="my-4">
      </form>
      <div class="d-grid mb-2">
        <a href="https://yellow-team.ir/">
          <center><button style="font-size: 0.9rem;letter-spacing: 0.05rem;padding: 0.75rem 1rem;color: white !important;background-color: ${language.copyright.color};" class="btn text-uppercase fw-bold">${language.copyright.title}</button></center>
        </a>
      </div>
    </div>
  </main>
  <script type="text/javascript" src="/static/js/bootstrap.bundle.min.js"></script>
  <script src="/static/js/jquery-3.6.0.js"></script>
  <script src="/static/js/loader.js"></script>
  <script>${login_script}</script>
</body>
</html>`);
                                }
                              }
                            }
                          }
                        });

                        app.post('/dashboard/server/', function (req, res) {
                          if (connection_type == 'private') {
                            if (req.ipInfo.ip != '::1') {
                              return;
                            }
                          }
                          if (loadui == 'on') {
                            res.send(html_loader);
                          } else {
                            if (blacklist_ip.includes(`${req.ipInfo.ip}`) == true) {
                              res.status(403).send(html_error_403);
                            } else {
                              if (req.body.token != undefined) {
                                fs.readdir("./data/users/", (err, files) => {
                                  let length_files = 0;
                                  files.forEach(file => {
                                    file = file.split('.');
                                    fs.readFile(`./data/users/${file[0]}.ydb`, 'utf8', function (err, data) {
                                      datajson = JSON.parse(data);
                                      if (req.body.token == datajson.token) {
                                        let level_permission = datajson.level_permission.split('');
                                        if (level_permission.includes('1') == true || level_permission.includes('2') == true) {
                                          nav_side_get(level_permission, 'server', function (nav_list) {
                                            let server_script = `
$("#app_disconnect").hide();
$("#app_nav").show();
const socket = io(document.location.host);
const xhttp = new XMLHttpRequest();
let serverstatus = '${serverstatus}';
socket.emit('connection_key',{connection_key:"${socket_connection_key}"});
socket.on('connection_key', data => {
  if(data.status=='success'){
    if(localStorage.getItem('server_ram_data')==undefined||localStorage.getItem('server_ram_data')==''){
      localStorage.setItem('server_ram_data','[0,0,0,0,0,0,0,0,0,0,0,0,0,0]');
    }
    if(localStorage.getItem('server_cpu_data')==undefined||localStorage.getItem('server_cpu_data')==''){
      localStorage.setItem('server_cpu_data','[0,0,0,0,0,0,0,0,0,0,0,0,0,0]');
    }
    if(localStorage.getItem('server_online_player_data')==undefined||localStorage.getItem('server_online_player_data')==''){
      localStorage.setItem('server_online_player_data','[0,0,0,0,0,0,0,0,0,0,0,0,0,0]');
    }
    const onlinediv = document.getElementById('online');
    const onlinetxt = document.getElementById('online_txt');
    setInterval(() => {
      if (serverstatus == 'off'){
          $("#online").hide();
          $("#server_stop").hide();
          $("#offline").show();
          $("#server_start").show();
          onlinediv.style.backgroundColor = '#525252'; onlinetxt.innerHTML = '<i class="bx bx-loader-circle rotate"></i> ${language.server_page.starting}';
      }else{
          $("#online").show();
          $("#server_stop").show();
          $("#offline").hide();
          $("#server_start").hide();
      }
      
    },);
    
    const ctx_1 = document.getElementById('system_usage').getContext('2d');
    const system_usage = new Chart(ctx_1, {
    type: 'line',
     data: {
      labels: ['30','28','26','24','22','20', '18', '16', '14', '12', '10', '8', '6', '4','2'],
      datasets: [{
       label: '${language.server_page.system_ram_use}',
       data: JSON.parse(localStorage.getItem('server_ram_data')),
       backgroundColor: [
          '#10ff00'
       ],
        borderColor: [
      '#10ff00'
       ],
       borderWidth: 1
    },{
       label: '${language.server_page.system_cpu_use}',
       data: JSON.parse(localStorage.getItem('server_cpu_data')),
       backgroundColor: [
          '#fff700'
       ],
        borderColor: [
      '#fff700'
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
    const ctx_2 = document.getElementById('server_info').getContext('2d');
    const server_info = new Chart(ctx_2, {
    type: 'line',
     data: {
      labels: ['30','28','26','24','22','20', '18', '16', '14', '12', '10', '8', '6', '4','2'],
      datasets: [{
       label: '${language.server_page.online_player}',
       data: JSON.parse(localStorage.getItem('server_online_player_data')),
       backgroundColor: [
          '#ff6600'
       ],
        borderColor: [
      '#ff6600'
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
    
    socket.on('${server_received_key}_status', function (status) { console.log("%c Received Server Status: %c "+status+" ","color: #fff; background: #F59402","color: #fff; background: #5f5f5f"); serverstatus = status; });
    socket.on('${server_received_key}_server_online', function (status_online) { onlinediv.style.backgroundColor = '#32FF00'; onlinetxt.innerHTML = '<i class="bx bx-power-off"></i> '+status_online; });
    socket.on('${server_received_key}_system_usage', system_usage_data => { console.log("%c Received Cpu Data: %c "+system_usage_data.cpudata+" ","color: #fff; background: #4bc729","color: #fff; background: #5f5f5f"); const old_data = JSON.parse(localStorage.getItem('server_cpu_data'));localStorage.setItem('server_cpu_data','['+old_data[1]+','+old_data[2]+','+old_data[3]+','+old_data[4]+','+old_data[5]+','+old_data[6]+','+old_data[7]+','+old_data[8]+','+old_data[9]+','+old_data[10]+','+old_data[11]+','+old_data[12]+','+old_data[13]+','+system_usage_data.cpudata+']'); system_usage.data.datasets[1].data.push(system_usage_data.cpudata); if (system_usage.data.datasets[1].data.length > 9) system_usage.data.datasets[1].data.shift(); system_usage.update(); console.log("%c Received Ram Data: %c "+system_usage_data.ramdata+" ","color: #fff; background: #022FF5","color: #fff; background: #5f5f5f"); const old_data_2 = JSON.parse(localStorage.getItem('server_ram_data'));localStorage.setItem('server_ram_data','['+old_data_2[1]+','+old_data_2[2]+','+old_data_2[3]+','+old_data_2[4]+','+old_data_2[5]+','+old_data_2[6]+','+old_data_2[7]+','+old_data_2[8]+','+old_data_2[9]+','+old_data_2[10]+','+old_data_2[11]+','+old_data_2[12]+','+old_data_2[13]+','+system_usage_data.ramdata+']'); system_usage.data.datasets[0].data.push(system_usage_data.ramdata); if (system_usage.data.datasets[0].data.length > 9) system_usage.data.datasets[0].data.shift(); system_usage.update(); });
    socket.on('${server_received_key}_server_info', server_info_data => { console.log("%c Received Online Player Data: %c "+server_info_data.online_player+" ","color: #fff; background: #ff6600","color: #fff; background: #5f5f5f"); const old_data = JSON.parse(localStorage.getItem('server_online_player_data'));localStorage.setItem('server_online_player_data','['+old_data[1]+','+old_data[2]+','+old_data[3]+','+old_data[4]+','+old_data[5]+','+old_data[6]+','+old_data[7]+','+old_data[8]+','+old_data[9]+','+old_data[10]+','+old_data[11]+','+old_data[12]+','+old_data[13]+','+server_info_data.online_player+']'); server_info.data.datasets[0].data.push(server_info_data.online_player); if (server_info.data.datasets[0].data.length > 9) server_info.data.datasets[0].data.shift(); server_info.update(); });
    socket.on('disconnect', () => {
      console.log("%c Socket Event: %c Disconnect ","color: #fff; background: #000000","color: #fff; background: #5f5f5f");
      $("#app_disconnect").show();
      $("#app_nav").hide();
      $("#app_body").hide();
    });
    socket.on('reload', function (data) {
      if(data=='reload'){
          window.location.reload();
          console.log("%c Received Server Event: %c Reload ","color: #fff; background: #F502C4","color: #fff; background: #5f5f5f");
      }
    });
    ${dash_script}
  }
});

document.addEventListener("DOMContentLoaded", function (event) {
  const showNavbar = (toggleId, navId, bodyId, headerId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId),
      bodypd = document.getElementById(bodyId),
      headerpd = document.getElementById(headerId)
    if (toggle && nav && bodypd && headerpd) {
      toggle.addEventListener('click', () => {
        nav.classList.toggle('show')
        toggle.classList.toggle('bx-x')
        bodypd.classList.toggle('body-pd')
        headerpd.classList.toggle('body-pd')
      })
    }
  }
  showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header')
  const linkColor = document.querySelectorAll('.nav_link')
  function colorLink() {
    if (linkColor) {
      linkColor.forEach(l => l.classList.remove('active'))
      this.classList.add('active')
    }
  }
  linkColor.forEach(l => l.addEventListener('click', colorLink))
});

function start_server() {if (serverstatus == 'off') {alert('${language.server_page.waiting_process}');console.log("%c Send Server Event: %c START ","color: #fff; background: #F502C4","color: #fff; background: #5f5f5f");socket.emit('event',{key:'${server_send_key}',event:'startserver'});}}
function stop_server() {if (serverstatus == 'on') {alert('${language.server_page.waiting_process}');console.log("%c Send Server Event: %c STOP ","color: #fff; background: #F502C4","color: #fff; background: #5f5f5f");xhttp.open("POST", "/event/", true);socket.emit('event',{key:'${server_send_key}',event:'stopserver'});}}`;

                                            obfuscator_get(server_script, function (callback) {
                                              server_script = callback;
                                              res.send(`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${language.mccontroller_name} - ${language.dashboard}</title>
  <link href="/static/images/logo.png" rel="icon">
  <link href="/static/css/bootstrap.min.css" rel="stylesheet">
  <link href="/static/boxicons/css/boxicons.min.css" rel="stylesheet">
  <link href="/static/css/style.css" rel="stylesheet">
  <link href="/static/css/dashboard.css" rel="stylesheet">
  ${dash_head}
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
${html_socket_disconnect}
  <main id="app_nav">
    <header class="header body-pd" id="header">
      <div class="header_toggle"> <i class="bx bx-menu bx-x" id="header-toggle"></i> </div>${address_shared}${dash_nav}
      <div class="header_img"> <img src="/static/images/logo.png" alt="" height="40px" width="40px"> </div>
    </header>
    <div class="l-navbar show" id="nav-bar">
      <nav class="nav">
        <div> <a href="" class="nav_logo"> <i class="bx bx-cube nav_logo-icon"></i> <span
              class="nav_logo-name">${language.mccontroller_name}</span> </a>
          <div class="nav_list"> ${nav_list}${dash_nav_side} <a href="/dashboard/logout/" class="nav_link"> <i class="bx bx-log-out nav_icon"></i> <span
          class="nav_name">${language.nav_side.logout}</span> </a> </div>
        </div>
      </nav>
    </div>
  </main>
  <main id="app_body" style="display: none; width: 100%; height: auto; margin: 17px;">
    <div class="col pb-0 mt-0">
        <div class="card bg-dark">
            <div style="color:White;" class="card-header">
                <center><i class="bx bx-server"></i> ${language.server_page.server}</center>
            </div>
            <div style="color:White; padding: 0rem 0rem;" class="card-body">
                <center style="margin-top: 10px;">
                    <h3>${server_ip}:${serverport}</h3>
                    <h3>${servername}</h3>
                </center>
                <div id='offline' style="background-color: #C70039; color:White;" class="card-footer">
                    <center>
                        <h4><i class="bx bx-stop-circle"></i> ${language.server_page.offline}</h4>
                    </center>
                </div>
                <div id='online' style="background-color: #525252; color:White;" class="card-footer">
                    <center>
                        <h4 id='online_txt'><i class="bx bx-loader-circle rotate"></i> ${language.server_page.starting}</h4>
                    </center>
                </div>
            </div>
        </div>
    </div>
    <h1> </h1>
    <div id="server_start">
        <center><button onclick='start_server();' type="button" class="btn btn-lg btn-success"><i
                    class="bx bx-power-off"></i> ${language.server_page.start_button}</button></center>
    </div>
    <center>
        <div id="server_stop"><button onclick='stop_server();' type="button" class="btn btn-lg btn-danger"><i
                    class="bx bx-stop-circle"></i> ${language.server_page.stop_button}</button></div>
    </center>
    <div class="row row-cols-1 row-cols-lg-2">
        <div class="col pb-2 mt-3">
            <div class="card bg-dark">
                <div style="color:White;" class="card-header"><i class="bx bx-microchip"></i> ${language.server_page.system_usage}</div>
                <div class="card-body">
                    <canvas id="system_usage" style="width: 100%; height: 100%"></canvas>
                </div>
            </div>
        </div>
        <div class="col pb-2 mt-3">
            <div class="card bg-dark">
                <div style="color:White;" class="card-header"><i class="bx bx-server"></i> ${language.server_page.server_info}</div>
                <div class="card-body">
                    <canvas id="server_info" style="width: 100%; height: 100%"></canvas>
                </div>
            </div>
        </div>
    </div>
    </main>
  <script type="text/javascript" src="/static/js/bootstrap.bundle.min.js"></script>
  <script type="text/javascript" src="/static/js/jquery-3.6.0.js"></script>
  <script type="text/javascript" src="/static/js/socket.io.js"></script>
  <script type="text/javascript" src="/static/js/chart.js"></script>
  <script type="text/javascript" src="/static/js/loader.js"></script>
  <script type="text/javascript">
  ${server_script}
  </script>
</body>
</html>`);
                                            });
                                          });
                                        } else {
                                          res.send('<script>window.location.replace("/dashboard/options/");</script>');
                                        }
                                      } else {
                                        length_files++;
                                        if (files.length == length_files) {
                                          if (req.ipInfo.ip != '::1') {
                                            fs.appendFile('./data/blacklist_ip.ydb', `\n${req.ipInfo.ip}`, function () {
                                              res.send('<script>window.location.replace("/login/?errorcode=101");</script>');
                                            });
                                            setTimeout(() => {
                                              fs.readFile('./data/blacklist_ip.ydb', 'utf8', function (err, data) {
                                                let new_data = data.replace(`\n${req.ipInfo.ip}`, '');
                                                fs.writeFileSync('./data/blacklist_ip.ydb', `${new_data}`);
                                              });
                                            }, 10000);
                                          } else {
                                            res.send('<script>window.location.replace("/login/?errorcode=101");</script>');
                                          }
                                        }
                                      }
                                    });
                                  });
                                });
                              } else {
                                if (req.ipInfo.ip != '::1') {
                                  fs.appendFile('./data/blacklist_ip.ydb', `\n${req.ipInfo.ip}`, function () {
                                    res.send('<script>window.location.replace("/login/?errorcode=101");</script>');
                                  });
                                  setTimeout(() => {
                                    fs.readFile('./data/blacklist_ip.ydb', 'utf8', function (err, data) {
                                      let new_data = data.replace(`\n${req.ipInfo.ip}`, '');
                                      fs.writeFileSync('./data/blacklist_ip.ydb', `${new_data}`);
                                    });
                                  }, 10000);
                                } else {
                                  res.send('<script>window.location.replace("/login/?errorcode=101");</script>');
                                }
                              }
                            }
                          }
                        });

                        app.post('/dashboard/options/', function (req, res) {
                          if (connection_type == 'private') {
                            if (req.ipInfo.ip != '::1') {
                              return;
                            }
                          }
                          if (loadui == 'on') {
                            res.send(html_loader);
                          } else {
                            if (blacklist_ip.includes(`${req.ipInfo.ip}`) == true) {
                              res.status(403).send(html_error_403);
                            } else {
                              if (req.body.token != undefined) {
                                fs.readdir("./data/users/", (err, files) => {
                                  let length_files = 0;
                                  files.forEach(file => {
                                    file = file.split('.');
                                    fs.readFile(`./data/users/${file[0]}.ydb`, 'utf8', function (err, data) {
                                      datajson = JSON.parse(data);
                                      if (req.body.token == datajson.token) {
                                        let level_permission = datajson.level_permission.split('');
                                        if (level_permission.includes('1') == true || level_permission.includes('3') == true) {
                                          nav_side_get(level_permission, 'options', function (nav_list) {
                                            let options_script = `
$("#app_disconnect").hide();
$("#app_nav").show();
const socket = io(document.location.host);
const xhttp = new XMLHttpRequest();
const server_motd = document.getElementById('server_motd');const server_spawn_protection = document.getElementById('server_spawn_protection');const server_slots = document.getElementById('server_slots');const server_gamemode = document.getElementById('server_gamemode');const server_difficulty = document.getElementById('server_difficulty');const server_resource_pack_url = document.getElementById('server_resource_pack');
    $('#server_commandblocks')[0].checked = ${server_conf_commandblocks}; $('#server_whitelist')[0].checked = ${server_conf_whitelist}; $('#server_cracked')[0].checked = ${server_conf_cracked}; $('#server_pvp')[0].checked = ${server_conf_pvp}; $('#server_fly')[0].checked = ${server_conf_fly}; $('#server_animals')[0].checked = ${server_conf_animals}; $('#server_monster')[0].checked = ${server_conf_monster}; $('#server_villagers')[0].checked = ${server_conf_villagers}; $('#server_nether')[0].checked = ${server_conf_nether}; $('#server_force_gamemode')[0].checked = ${server_conf_force_gamemode}; $('#server_gamemode').val('${server_conf_gamemode}'); $('#server_difficulty').val('${server_conf_difficulty}');
socket.emit('connection_key',{connection_key:"${socket_connection_key}"});
socket.on('connection_key', data => {
  if(data.status=='success'){
    socket.on('${options_received_key}_options_update', function (data) {
      console.log("%c Received Data: %c "+data+" ","color: #fff; background: #4bc729","color: #fff; background: #5f5f5f");
        alert(data);
    });
    socket.on('disconnect', () => {
      console.log("%c Socket Event: %c Disconnect ","color: #fff; background: #000000","color: #fff; background: #5f5f5f");
      $("#app_disconnect").show();
      $("#app_nav").hide();
      $("#app_body").hide();
    });
    socket.on('reload', function (data) {
      if(data=='reload'){
          window.location.reload();
          console.log("%c Received Server Event: %c Reload ","color: #fff; background: #F502C4","color: #fff; background: #5f5f5f");
      }
    });
    ${dash_script}
  }
});

function update_options_server() {console.log("%c Send Server Event: %c UPDATE OPTIONS ","color: #fff; background: #F502C4","color: #fff; background: #5f5f5f");socket.emit("event",{"key":"${options_send_key}","event":"update_server_conf","motd":server_motd.value,"server_commandblocks":$('#server_commandblocks').is(':checked'),"server_whitelist":$('#server_whitelist').is(':checked'),"server_cracked":$('#server_cracked').is(':checked'),"server_pvp":$('#server_pvp').is(':checked'),"server_fly":$('#server_fly').is(':checked'),"server_animals":$('#server_animals').is(':checked'),"server_monster":$('#server_monster').is(':checked'),"server_villagers":$('#server_villagers').is(':checked'),"server_nether":$('#server_nether').is(':checked'),"server_force_gamemode":$('#server_force_gamemode').is(':checked'),"server_spawn_protection":server_spawn_protection.value,"server_slots":server_slots.value,"server_gamemode":server_gamemode.value,"server_difficulty":server_difficulty.value,"server_resource_pack_url":server_resource_pack_url.value});  }

document.addEventListener("DOMContentLoaded", function (event) {
  const showNavbar = (toggleId, navId, bodyId, headerId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId),
      bodypd = document.getElementById(bodyId),
      headerpd = document.getElementById(headerId)
    if (toggle && nav && bodypd && headerpd) {
      toggle.addEventListener('click', () => {
        nav.classList.toggle('show')
        toggle.classList.toggle('bx-x')
        bodypd.classList.toggle('body-pd')
        headerpd.classList.toggle('body-pd')
      })
    }
  }
  showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header')
  const linkColor = document.querySelectorAll('.nav_link')
  function colorLink() {
    if (linkColor) {
      linkColor.forEach(l => l.classList.remove('active'))
      this.classList.add('active')
    }
  }
  linkColor.forEach(l => l.addEventListener('click', colorLink))
});
enable_codeeditor();`;
                                            obfuscator_get(options_script, function (callback) {
                                              options_script = callback;
                                              res.send(`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${language.mccontroller_name} - ${language.dashboard}</title>
  <link href="/static/images/logo.png" rel="icon">
  <link href="/static/css/bootstrap.min.css" rel="stylesheet">
  <link href="/static/boxicons/css/boxicons.min.css" rel="stylesheet">
  <link href="/static/css/style.css" rel="stylesheet">
  <link href="/static/css/dashboard.css" rel="stylesheet">
  ${dash_head}
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
  ${html_socket_disconnect}
  <main id="app_nav">
    <header class="header body-pd" id="header">
      <div class="header_toggle"> <i class="bx bx-menu bx-x" id="header-toggle"></i> </div>${address_shared}${dash_nav}
      <div class="header_img"> <img src="/static/images/logo.png" alt="" height="40px" width="40px"> </div>
    </header>
    <div class="l-navbar show" id="nav-bar">
      <nav class="nav">
        <div> <a href="" class="nav_logo"> <i class="bx bx-cube nav_logo-icon"></i> <span
              class="nav_logo-name">${language.mccontroller_name}</span> </a>
          <div class="nav_list"> ${nav_list}${dash_nav_side} <a href="/dashboard/logout/" class="nav_link"> <i class="bx bx-log-out nav_icon"></i> <span
          class="nav_name">Logout</span> </a> </div>
        </div>
      </nav>
    </div>
  </main>
  <main id="app_body" style="display: none; width: 100%; height: auto; margin: 17px;">
    
      <div class="col pb-0 mt-0">
        <div class="card bg-dark">
          <div style="color:White;" class="card-body">
            <div class="d-flex justify-content-start">
              <img src="/static/server-icon.png" class="rounded float-right" alt="64">
              <div style="margin-left: 15px;">
                <h4>${server_ip}:${serverport}</h4>
                <input id="server_motd" placeholder="Server Motd" type="text" class="form-control"
                    value="${server_conf_motd}" aria-describedby="inputGroup-sizing-sm">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style="margin-top: 35px;" class="card bg-dark">
          <div style="color:White;" class="card-header"><i class="bx bx-cog"></i> ${language.options_page.server_properties}</div>
          <div style="color:White;" class="card-body">
              <div class="d-flex justify-content-between">
                  <div class="form-input">
                      <label class="form-check-label" for="server_spawn_protection">
                          ${language.options_page.spawn_protection}
                      </label>
                      <input class="form-control" id="server_spawn_protection" type="number" step="1" min="1"
                          max="30000000" value="${server_conf_spawn_protection}" />
                  </div>
                  <div class="form-input mb-3">
                      <label class="form-check-label" for="server_slots">
                          ${language.options_page.slots}
                      </label>
                      <input class="form-control" id="server_slots" type="number" step="1" min="1"
                          max="2147483647" value="${server_conf_slots}" />
                  </div>
                </div>
                <div class="d-flex justify-content-between">
                  <div class="form-input">
                      <label class="form-check-label" for="server_gamemode">
                          ${language.options_page.gamemode}
                      </label>
                      <select id="server_gamemode" class="form-select mb-3">
                          <option value="0">${language.options_page.gamemode_survival}</option>
                          <option value="1">${language.options_page.gamemode_creative}</option>
                          <option value="2">${language.options_page.gamemode_adventure}</option>
                          <option value="3">${language.options_page.gamemode_spectator}</option>
                      </select>
                  </div>
                  <div class="form-input">
                      <label class="form-check-label" for="server_difficulty">
                      ${language.options_page.difficulty}
                      </label>
                      <select id="server_difficulty" class="form-select mb-3">
                          <option value="1">${language.options_page.difficulty_easy}</option>
                          <option value="0">${language.options_page.difficulty_peaceful}</option>
                          <option value="2">${language.options_page.difficulty_normal}</option>
                          <option value="3">${language.options_page.difficulty_hard}</option>
                      </select>
                  </div>
              </div>
              <hr class="my-4">
              <div class="d-flex justify-content-between">
                <div class="form-check form-switch">
                    <input class="form-check-input mb-3" type="checkbox" value="${server_conf_whitelist}"
                        id="server_whitelist">
                    <label class="form-check-label" for="server_whitelist">${language.options_page.whitelist}</label>
                </div>
                <div class="form-check form-switch">
                    <input class="form-check-input mb-3" type="checkbox" value="${server_conf_cracked}"
                        id="server_cracked">
                    <label class="form-check-label" for="server_cracked">${language.options_page.cracked}</label>
                </div>
              </div>
              <div class="d-flex justify-content-between">
                <div class="form-check form-switch">
                    <input class="form-check-input mb-3" type="checkbox" value="${server_conf_pvp}"
                        id="server_pvp">
                    <label class="form-check-label" for="server_pvp">${language.options_page.pvp}</label>
                </div>
                <div class="form-check form-switch">
                    <input class="form-check-input mb-3" type="checkbox" value="${server_conf_monster}"
                        id="server_monster">
                    <label class="form-check-label" for="server_monster">${language.options_page.monster}</label>
                </div>
              </div>
              <div class="d-flex justify-content-between">
                <div class="form-check form-switch">
                    <input class="form-check-input mb-3" type="checkbox" value="${server_conf_fly}"
                        id="server_fly">
                    <label class="form-check-label" for="server_fly">${language.options_page.fly}</label>
                </div>
                <div class="form-check form-switch">
                    <input class="form-check-input mb-3" type="checkbox" value="${server_conf_animals}"
                        id="server_animals">
                    <label class="form-check-label" for="server_animals">${language.options_page.animals}</label>
                </div>
              </div>
              <div class="d-flex justify-content-between">
                <div class="form-check form-switch">
                    <input class="form-check-input mb-3" type="checkbox" value="${server_conf_commandblocks}"
                        id="server_commandblocks">
                    <label class="form-check-label" for="server_commandblocks">${language.options_page.commandblocks}</label>
                </div>
                <div class="form-check form-switch">
                    <input class="form-check-input mb-3" type="checkbox" value="${server_conf_villagers}"
                        id="server_villagers">
                    <label class="form-check-label" for="server_villagers">${language.options_page.villagers}</label>
                </div>
              </div>
              <div class="d-flex justify-content-between">
                  <div class="form-check form-switch">
                      <input class="form-check-input mb-3" type="checkbox" value="${server_conf_force_gamemode}"
                          id="server_force_gamemode">
                      <label class="form-check-label" for="server_force_gamemode">${language.options_page.force_gamemode}</label>
                  </div>
                  <div class="form-check form-switch">
                      <input class="form-check-input mb-3" type="checkbox" value="${server_conf_nether}"
                          id="server_nether">
                      <label class="form-check-label" for="server_nether">${language.options_page.nether}</label>
                  </div>
              </div>
              <hr class="my-4">
              <div class="form-input">
                  <label class="form-check-label" for="server_resource_pack">
                  ${language.options_page.resource_pack_url}
                  </label>
                  <input value="${server_conf_resource_pack_url}" class="form-control" id="server_resource_pack"
                      type="input" placeholder="https://example.com/Resource_pack.zip" />
              </div>
              <div class="d-grid gap-2" style="margin-top: 10px;"><button onclick="update_options_server();" type="button" class="btn btn-primary">${language.options_page.update_options_button}</button></div>
          </div>
      </div>
    </div>
    </main>
  <script type="text/javascript" src="/static/js/bootstrap.bundle.min.js"></script>
  <script type="text/javascript" src="/static/js/jquery-3.6.0.js"></script>
  <script type="text/javascript" src="/static/js/socket.io.js"></script>
  <script type="text/javascript" src="/static/js/loader.js"></script>
  <script type="text/javascript">
  ${options_script}
  </script>
</body>
</html>`);
                                            });
                                          });
                                        } else {
                                          res.send('<script>window.location.replace("/dashboard/console/");</script>');
                                        }
                                      } else {
                                        length_files++;
                                        if (files.length == length_files) {
                                          if (req.ipInfo.ip != '::1') {
                                            fs.appendFile('./data/blacklist_ip.ydb', `\n${req.ipInfo.ip}`, function () {
                                              res.send('<script>window.location.replace("/login/?errorcode=101");</script>');
                                            });
                                            setTimeout(() => {
                                              fs.readFile('./data/blacklist_ip.ydb', 'utf8', function (err, data) {
                                                let new_data = data.replace(`\n${req.ipInfo.ip}`, '');
                                                fs.writeFileSync('./data/blacklist_ip.ydb', `${new_data}`);
                                              });
                                            }, 10000);
                                          } else {
                                            res.send('<script>window.location.replace("/login/?errorcode=101");</script>');
                                          }
                                        }
                                      }
                                    });
                                  });
                                });
                              } else {
                                if (req.ipInfo.ip != '::1') {
                                  fs.appendFile('./data/blacklist_ip.ydb', `\n${req.ipInfo.ip}`, function () {
                                    res.send('<script>window.location.replace("/login/?errorcode=101");</script>');
                                  });
                                  setTimeout(() => {
                                    fs.readFile('./data/blacklist_ip.ydb', 'utf8', function (err, data) {
                                      let new_data = data.replace(`\n${req.ipInfo.ip}`, '');
                                      fs.writeFileSync('./data/blacklist_ip.ydb', `${new_data}`);
                                    });
                                  }, 10000);
                                } else {
                                  res.send('<script>window.location.replace("/login/?errorcode=101");</script>');
                                }
                              }
                            }
                          }
                        });

                        app.post('/dashboard/console/', function (req, res) {
                          if (connection_type == 'private') {
                            if (req.ipInfo.ip != '::1') {
                              return;
                            }
                          }
                          if (loadui == 'on') {
                            res.send(html_loader);
                          } else {
                            if (blacklist_ip.includes(`${req.ipInfo.ip}`) == true) {
                              res.status(403).send(html_error_403);
                            } else {
                              if (req.body.token != undefined) {
                                fs.readdir("./data/users/", (err, files) => {
                                  let length_files = 0;
                                  files.forEach(file => {
                                    file = file.split('.');
                                    fs.readFile(`./data/users/${file[0]}.ydb`, 'utf8', function (err, data) {
                                      datajson = JSON.parse(data);
                                      if (req.body.token == datajson.token) {
                                        let level_permission = datajson.level_permission.split('');
                                        if (level_permission.includes('1') == true || level_permission.includes('4') == true) {
                                          nav_side_get(level_permission, 'console', function (nav_list) {

                                            let console_script = `
$("#app_disconnect").hide();
$("#app_nav").show();
const socket = io(document.location.host);
const xhttp = new XMLHttpRequest();
let serverstatus = '${serverstatus}';
const cmd_send = document.getElementById('cmd_send_elment');
const console_box = document.getElementById('console_messages');
cmd_send.addEventListener("keydown", function (e) {if (e.key === "Enter") {send_cmd_console();}});
socket.emit('connection_key',{connection_key:"${socket_connection_key}"});
socket.on('connection_key', data => {
  if(data.status=='success'){
    setInterval(() => {
        if (serverstatus == 'off'){
            $("#console_box").hide();
            $("#console_offline_log").show();
        }else{
            $("#console_box").show();
            $("#console_offline_log").hide();
        }
    },);
    
    let console_bugfix = '';
    socket.on('${console_received_key}_console_log', function (console_msg) {
      if (console_bugfix != console_msg.message) {
        console_bugfix = console_msg.message;
        var item = document.createElement('h6');
        item.textContent = console_msg.message;
        item.style.color = console_msg.color;
        console_box.appendChild(item);
        console_div = document.getElementById('console_box');
        console_div.scrollTo(0, console_div.scrollHeight);
        console.log("%c Received Console Data: %c "+console_msg.message,"color: #fff; background: #4bc729","color: #fff; background: #5f5f5f");
      } else {
        console_bugfix = '';
      }
    });
    socket.on('${console_received_key}_status', function (status) { console.log("%c Received Server Status: %c "+status+" ","color: #fff; background: #F59402","color: #fff; background: #5f5f5f"); serverstatus = status; });
    socket.on('disconnect', () => {
      console.log("%c Socket Event: %c Disconnect ","color: #fff; background: #000000","color: #fff; background: #5f5f5f");
      $("#app_disconnect").show();
      $("#app_nav").hide();
      $("#app_body").hide();
    });
    socket.on('reload', function (data) {
      if(data=='reload'){
          window.location.reload();
          console.log("%c Received Server Event: %c Reload ","color: #fff; background: #F502C4","color: #fff; background: #5f5f5f");
      }
    });
  }
});

function send_cmd_console() {console.log("%c Send Server CMD Event: %c "+cmd_send.value+" ","color: #fff; background: #F502C4","color: #fff; background: #5f5f5f");socket.emit('event',{key:'${console_send_key}',event:'cmd_console',cmd_send:cmd_send.value});cmd_send.value = "";}

document.addEventListener("DOMContentLoaded", function (event) {
  const showNavbar = (toggleId, navId, bodyId, headerId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId),
      bodypd = document.getElementById(bodyId),
      headerpd = document.getElementById(headerId)
    if (toggle && nav && bodypd && headerpd) {
      toggle.addEventListener('click', () => {
        nav.classList.toggle('show')
        toggle.classList.toggle('bx-x')
        bodypd.classList.toggle('body-pd')
        headerpd.classList.toggle('body-pd')
      })
    }
  }
  showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header')
  const linkColor = document.querySelectorAll('.nav_link')
  function colorLink() {
    if (linkColor) {
      linkColor.forEach(l => l.classList.remove('active'))
      this.classList.add('active')
    }
  }
  linkColor.forEach(l => l.addEventListener('click', colorLink))
});
${dash_script}`;
                                            obfuscator_get(console_script, function (callback) {
                                              console_script = callback;
                                              res.send(`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${language.mccontroller_name} - ${language.dashboard}</title>
  <link href="/static/images/logo.png" rel="icon">
  <link href="/static/css/bootstrap.min.css" rel="stylesheet">
  <link href="/static/boxicons/css/boxicons.min.css" rel="stylesheet">
  <link href="/static/css/style.css" rel="stylesheet">
  <link href="/static/css/dashboard.css" rel="stylesheet">
  ${dash_head}
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
${html_socket_disconnect}
  <main id="app_nav">
    <header class="header body-pd" id="header">
      <div class="header_toggle"> <i class="bx bx-menu bx-x" id="header-toggle"></i> </div>${address_shared}${dash_nav}
      <div class="header_img"> <img src="/static/images/logo.png" alt="" height="40px" width="40px"> </div>
    </header>
    <div class="l-navbar show" id="nav-bar">
      <nav class="nav">
        <div> <a href="" class="nav_logo"> <i class="bx bx-cube nav_logo-icon"></i> <span
              class="nav_logo-name">${language.mccontroller_name}</span> </a>
          <div class="nav_list"> ${nav_list}${dash_nav_side} <a href="/dashboard/logout/" class="nav_link"> <i class="bx bx-log-out nav_icon"></i> <span
          class="nav_name">${language.nav_side.logout}</span> </a> </div>
        </div>
      </nav>
    </div>
  </main>
  <main id="app_body" style="display: none; width: 100%; height: auto; margin: 17px;">
    <div class="col pb-0 mt-0">
    <div class="card bg-dark">
        <div style="color:White;" class="card-header"><i class="bx bx-terminal"></i> ${language.console_page.console}</div>
        <div style="color:White;" class="card-body">
            <ul id="console_box" style="height: 28rem; background-color: black;"
                class="text-light rounded p-3 overflow-scroll">
                <div id="container">
                    <h6 id="console_online_log">${language.console_page.console_version_message}</h6>
                    <ul id="console_messages"></ul>
                    <div id="input-line" class="input-line">
                        <div class="prompt"></div>
                        <div id="sendcmddiv" class="form-input"><label class="form-check-label" for="cmd_send_elment">></label><input list="commands" id="cmd_send_elment" class="cmdline" autofocus /></div>
                        <datalist id="commands">
                          <option value="help">
                          <option value="give [amount]">
                          <option value="weather [rain, thunder, snow, and clear]">
                          <option value="gamemode [player] [gamemode: Survival, creative, spectator, and adventure]">
                          <option value="summon [object]">
                          <option value="tp [username]">
                          <option value="time set [Day or Night]">
                          <option value="xp [player]">
                          <option value="locatebiome [biome]">
                          <option value="msg [player] [message]">
                          <option value="save-all">
                          <option value="stop">
                          <option value="restart">
                          <option value="worldborder">
                          <option value="whitelist [add or remove] [player]">
                          <option value="gamerule value">
                          <option value="ban [player]">
                          <option value="ban-ip [player]">
                          <option value="pardon">
                          <option value="banlist">
                          <option value="clear [username]">
                          <option value="datapack [pack]">
                          <option value="op [player]">
                          <option value="deop [player]">
                          <option value="difficulty [difficulty: peaceful, easy, normal, hard]">
                          <option value="seed">
                        </datalist>
                    </div>
                </div>
            </ul>
            <ul id="console_offline_log" style="height: 28rem; background-color: black;"
                class="text-light rounded p-3 overflow-scroll">
                <center>
                    <h1 style="margin-top: 140px;"><i class="bx bx-no-signal"></i> ${language.console_page.offline_console}</h1>
                </center>
            </ul>
        </div>
    </div>
    </div>
    </main>
  <script type="text/javascript" src="/static/js/bootstrap.bundle.min.js"></script>
  <script type="text/javascript" src="/static/js/jquery-3.6.0.js"></script>
  <script type="text/javascript" src="/static/js/socket.io.js"></script>
  <script type="text/javascript" src="/static/js/chart.js"></script>
  <script type="text/javascript" src="/static/js/loader.js"></script>
  <script type="text/javascript">
  ${console_script}
  </script>
</body>
</html>`);
                                            });
                                          });
                                        } else {
                                          res.send('<script>window.location.replace("/dashboard/log/");</script>');
                                        }
                                      } else {
                                        length_files++;
                                        if (files.length == length_files) {
                                          if (req.ipInfo.ip != '::1') {
                                            fs.appendFile('./data/blacklist_ip.ydb', `\n${req.ipInfo.ip}`, function () {
                                              res.send('<script>window.location.replace("/login/?errorcode=101");</script>');
                                            });
                                            setTimeout(() => {
                                              fs.readFile('./data/blacklist_ip.ydb', 'utf8', function (err, data) {
                                                let new_data = data.replace(`\n${req.ipInfo.ip}`, '');
                                                fs.writeFileSync('./data/blacklist_ip.ydb', `${new_data}`);
                                              });
                                            }, 10000);
                                          } else {
                                            res.send('<script>window.location.replace("/login/?errorcode=101");</script>');
                                          }
                                        }
                                      }
                                    });
                                  });
                                });
                              } else {
                                if (req.ipInfo.ip != '::1') {
                                  fs.appendFile('./data/blacklist_ip.ydb', `\n${req.ipInfo.ip}`, function () {
                                    res.send('<script>window.location.replace("/login/?errorcode=101");</script>');
                                  });
                                  setTimeout(() => {
                                    fs.readFile('./data/blacklist_ip.ydb', 'utf8', function (err, data) {
                                      let new_data = data.replace(`\n${req.ipInfo.ip}`, '');
                                      fs.writeFileSync('./data/blacklist_ip.ydb', `${new_data}`);
                                    });
                                  }, 10000);
                                } else {
                                  res.send('<script>window.location.replace("/login/?errorcode=101");</script>');
                                }
                              }
                            }
                          }
                        });

                        app.post('/dashboard/log/', function (req, res) {
                          if (connection_type == 'private') {
                            if (req.ipInfo.ip != '::1') {
                              return;
                            }
                          }
                          if (loadui == 'on') {
                            res.send(html_loader);
                          } else {
                            if (blacklist_ip.includes(`${req.ipInfo.ip}`) == true) {
                              res.status(403).send(html_error_403);
                            } else {
                              if (req.body.token != undefined) {
                                fs.readdir("./data/users/", (err, files) => {
                                  let length_files = 0;
                                  files.forEach(file => {
                                    file = file.split('.');
                                    fs.readFile(`./data/users/${file[0]}.ydb`, 'utf8', function (err, data) {
                                      datajson = JSON.parse(data);
                                      if (req.body.token == datajson.token) {
                                        let level_permission = datajson.level_permission.split('');
                                        if (level_permission.includes('1') == true || level_permission.includes('5') == true) {
                                          nav_side_get(level_permission, 'log', function (nav_list) {
                                            let log_script = `
$("#app_disconnect").hide();
$("#app_nav").show();
const socket = io(document.location.host);
const xhttp = new XMLHttpRequest();
socket.emit('connection_key',{connection_key:"${socket_connection_key}"});
socket.on('connection_key', data => {
  if(data.status=='success'){
    socket.on('disconnect', () => {
      console.log("%c Socket Event: %c Disconnect ","color: #fff; background: #000000","color: #fff; background: #5f5f5f");
      $("#app_disconnect").show();
      $("#app_nav").hide();
      $("#app_body").hide();
    });
    socket.on('reload', function (data) {
      if(data=='reload'){
          window.location.reload();
          console.log("%c Received Server Event: %c Reload ","color: #fff; background: #F502C4","color: #fff; background: #5f5f5f");
      }
    });
    update_logs();
    socket.on('${log_received_key}_logs_delete', function (data) {
      alert(data);
      update_logs();
    });
    socket.on('${log_received_key}_receive_logs', function (data) {
      document.getElementById('logs').innerHTML = data;
    });
  }
});

function update_logs() {
  socket.emit('event',{key:"${log_send_key}",event:"update_logs"});
}
function delete_file(file) {
  if (confirm('Are you sure you want to do this. It is irreversible') == true) {
    socket.emit('event',{key:"${log_send_key}",event:"logs_delete",file:file});
  }
}
function select_data(file){
  $.get('/static/${log_download_key}/'+file, function( data ) {
    document.getElementById('codeEditor').value = data;
    enable_codeeditor();
  });
}

document.addEventListener("DOMContentLoaded", function (event) {
  const showNavbar = (toggleId, navId, bodyId, headerId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId),
      bodypd = document.getElementById(bodyId),
      headerpd = document.getElementById(headerId)
    if (toggle && nav && bodypd && headerpd) {
      toggle.addEventListener('click', () => {
        nav.classList.toggle('show')
        toggle.classList.toggle('bx-x')
        bodypd.classList.toggle('body-pd')
        headerpd.classList.toggle('body-pd')
      })
    }
  }
  showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header')
  const linkColor = document.querySelectorAll('.nav_link')
  function colorLink() {
    if (linkColor) {
      linkColor.forEach(l => l.classList.remove('active'))
      this.classList.add('active')
    }
  }
  linkColor.forEach(l => l.addEventListener('click', colorLink))
});
enable_codeeditor();
${dash_script}`;
                                            obfuscator_get(log_script, function (callback) {
                                              log_script = callback;
                                              res.send(`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${language.mccontroller_name} - ${language.dashboard}</title>
  <link href="/static/images/logo.png" rel="icon">
  <link href="/static/css/bootstrap.min.css" rel="stylesheet">
  <link href="/static/boxicons/css/boxicons.min.css" rel="stylesheet">
  <link href="/static/css/style.css" rel="stylesheet">
  <link href="/static/css/dashboard.css" rel="stylesheet">
  ${dash_head}
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
${html_socket_disconnect}
  <main id="app_nav">
    <header class="header body-pd" id="header">
      <div class="header_toggle"> <i class="bx bx-menu bx-x" id="header-toggle"></i> </div>${address_shared}${dash_nav}
      <div class="header_img"> <img src="/static/images/logo.png" alt="" height="40px" width="40px"> </div>
    </header>
    <div class="l-navbar show" id="nav-bar">
      <nav class="nav">
        <div> <a href="" class="nav_logo"> <i class="bx bx-cube nav_logo-icon"></i> <span
              class="nav_logo-name">${language.mccontroller_name}</span> </a>
          <div class="nav_list"> ${nav_list}${dash_nav_side} <a href="/dashboard/logout/" class="nav_link"> <i class="bx bx-log-out nav_icon"></i> <span
          class="nav_name">${language.nav_side.logout}</span> </a> </div>
        </div>
      </nav>
    </div>
  </main>
  <main id="app_body" style="display: none; width: 100%; height: auto; margin: 17px;">
  <div class="row row-cols-1 row-cols-lg-2">
    <div class="col pb-0 mt-0">
      <div style="margin-top: 15px;" class="card bg-dark">
          <div style="color:White;" class="card-header"><i class="bx bx-file"></i> ${language.log_page.log}</div>
          <div style="color:White;" class="card-body">
          <p><textarea id="lineCounter" wrap="off" readonly>1.</textarea><textarea id="codeEditor" wrap="off">To preview Logs, please select a Log</textarea></p>
          </div>
      </div>
    </div>
    <div class="col pb-0 mt-0">
      <div style="margin-top: 15px;" class="card bg-dark">
          <div style="color:White;" class="card-header"><i class="bx bx-file"></i> ${language.log_page.logs}</div>
          <div style="color:White;" class="card-body">
          <div class="d-grid gap-2"><button type="button" class="btn btn-primary" onclick="update_logs();">${language.log_page.refresh_list_button}</button></div>
          <table class="table table-dark">
            <thead>
              <tr>
                <th scope="col"><i class="bx bx-file bx-sm"></i></th>
                <th scope="col">${language.log_page.name_list}</th>
                <th scope="col">${language.log_page.actions_list}</th>
              </tr>
            </thead>
            <tbody id="logs">
            </tbody>
          </table>
          </div>
      </div>
    </div>
    </div>
  </main>
  <script type="text/javascript" src="/static/js/bootstrap.bundle.min.js"></script>
  <script type="text/javascript" src="/static/js/jquery-3.6.0.js"></script>
  <script type="text/javascript" src="/static/js/socket.io.js"></script>
  <script type="text/javascript" src="/static/js/chart.js"></script>
  <script type="text/javascript" src="/static/js/loader.js"></script>
  <script type="text/javascript">
  ${log_script}
  </script>
</body>
</html>`);
                                            });
                                          });
                                        } else {
                                          res.send('<script>window.location.replace("/dashboard/plugins/");</script>');
                                        }
                                      } else {
                                        length_files++;
                                        if (files.length == length_files) {
                                          if (req.ipInfo.ip != '::1') {
                                            fs.appendFile('./data/blacklist_ip.ydb', `\n${req.ipInfo.ip}`, function () {
                                              res.send('<script>window.location.replace("/login/?errorcode=101");</script>');
                                            });
                                            setTimeout(() => {
                                              fs.readFile('./data/blacklist_ip.ydb', 'utf8', function (err, data) {
                                                let new_data = data.replace(`\n${req.ipInfo.ip}`, '');
                                                fs.writeFileSync('./data/blacklist_ip.ydb', `${new_data}`);
                                              });
                                            }, 10000);
                                          } else {
                                            res.send('<script>window.location.replace("/login/?errorcode=101");</script>');
                                          }
                                        }
                                      }
                                    });
                                  });
                                });
                              } else {
                                if (req.ipInfo.ip != '::1') {
                                  fs.appendFile('./data/blacklist_ip.ydb', `\n${req.ipInfo.ip}`, function () {
                                    res.send('<script>window.location.replace("/login/?errorcode=101");</script>');
                                  });
                                  setTimeout(() => {
                                    fs.readFile('./data/blacklist_ip.ydb', 'utf8', function (err, data) {
                                      let new_data = data.replace(`\n${req.ipInfo.ip}`, '');
                                      fs.writeFileSync('./data/blacklist_ip.ydb', `${new_data}`);
                                    });
                                  }, 10000);
                                } else {
                                  res.send('<script>window.location.replace("/login/?errorcode=101");</script>');
                                }
                              }
                            }
                          }
                        });

                        app.post('/dashboard/plugins/', function (req, res) {
                          if (connection_type == 'private') {
                            if (req.ipInfo.ip != '::1') {
                              return;
                            }
                          }
                          if (loadui == 'on') {
                            res.send(html_loader);
                          } else {
                            if (blacklist_ip.includes(`${req.ipInfo.ip}`) == true) {
                              res.status(403).send(html_error_403);
                            } else {
                              if (req.body.token != undefined) {
                                fs.readdir("./data/users/", (err, files) => {
                                  let length_files = 0;
                                  files.forEach(file => {
                                    file = file.split('.');
                                    fs.readFile(`./data/users/${file[0]}.ydb`, 'utf8', function (err, data) {
                                      datajson = JSON.parse(data);
                                      if (req.body.token == datajson.token) {
                                        let level_permission = datajson.level_permission.split('');
                                        if (level_permission.includes('1') == true || level_permission.includes('6') == true) {
                                          nav_side_get(level_permission, 'plugins', function (nav_list) {
                                            let plugins_script = `
$("#app_disconnect").hide();
$("#app_nav").show();
const socket = io(document.location.host);
const xhttp = new XMLHttpRequest();
let file_manager_location = document.location.href.split('#')[1];
socket.emit('connection_key',{connection_key:"${socket_connection_key}"});
socket.on('connection_key', data => {
  if(data.status=='success'){
    socket.on('disconnect', () => {
      console.log("%c Socket Event: %c Disconnect ","color: #fff; background: #000000","color: #fff; background: #5f5f5f");
      $("#app_disconnect").show();
      $("#app_nav").hide();
      $("#app_body").hide();
    });
    socket.on('reload', function (data) {
      if(data=='reload'){
          window.location.reload();
          console.log("%c Received Server Event: %c Reload ","color: #fff; background: #F502C4","color: #fff; background: #5f5f5f");
      }
    });
    if (file_manager_location != undefined) {
      socket.emit('event', {key:'${plugins_send_key}',event:'receive_files_plugins',file_manager_location:file_manager_location});
    }
    setInterval(() => {
        //location
        if (file_manager_location == undefined) {
            window.location.replace('#');
            file_manager_location = document.location.href.split('#')[1];
            socket.emit('event', {key:'${plugins_send_key}',event:'receive_files_plugins',file_manager_location:file_manager_location});
        } else {
            let old_file_manager_location = file_manager_location;
            file_manager_location = document.location.href.split('#')[1];
            if (old_file_manager_location != file_manager_location) {
              socket.emit('event', {key:'${plugins_send_key}',event:'receive_files_plugins',file_manager_location:file_manager_location});
            }
        }
    });
    if (file_manager_location != undefined) { socket.emit('event', {key:'${plugins_send_key}',event:'receive_files_addons',file_manager_location:file_manager_location}); }
    socket.on('${plugins_received_key}_receive_files', function (data) {
      document.getElementById('receive_files').innerHTML = data;
      enable_codeeditor();
    });
    socket.on('${plugins_received_key}_update_files', function (data) {
      socket.emit('event', {key:'${plugins_send_key}',event:'receive_files_plugins',file_manager_location:file_manager_location});
      alert(data);
    });
  }
});

function update_file_codeeditor() {
  const new_file_data = document.getElementById('codeEditor').value;
  socket.emit('event', { key:'${plugins_send_key}', event:'plugins_update_files', location: document.location.href.split('#')[1], new_file_data: new_file_data });
}

function delete_file(file) {
  socket.emit('event', { key:'${plugins_send_key}', event:'plugins_file_delete', file:file });
}

$(document).ready(function() {
  $('#uploadForm').submit(function() {
      document.getElementById('status').innerHTML = '<div class="alert alert-warning"><i class="bx bx-loader-circle rotate"></i> ${language.plugins_page.file_is_uploading}</div>';
      console.log("%c Server Send Event: %c ${language.plugins_page.file_is_uploading} ","color: #fff; background: #37A10D","color: #fff; background: #5f5f5f");
     $(this).ajaxSubmit({
         error: function(xhr) {
            status('Error: ' + xhr.status);
            document.getElementById('status').innerHTML = '<div class="alert alert-danger">${language.plugins_page.file_upload_error}</div>';
            console.log("%c Server Send Event: %c ERROR ","color: #fff; background: #5f5f5f","color: #fff; background: #FF0000");
         },
         success: function(response) {
            socket.emit('event', {key:'${plugins_send_key}',event:'receive_files_plugins',file_manager_location:file_manager_location});
            document.getElementById('status').innerHTML = '<div class="alert alert-success">'+response+'</div>';
            console.log("%c Server Send Event: %c Done! ","color: #fff; background: #37A10D","color: #fff; background: #5f5f5f");
         }
 });
 return false;
 });    
});

document.addEventListener("DOMContentLoaded", function (event) {
  const showNavbar = (toggleId, navId, bodyId, headerId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId),
      bodypd = document.getElementById(bodyId),
      headerpd = document.getElementById(headerId)
    if (toggle && nav && bodypd && headerpd) {
      toggle.addEventListener('click', () => {
        nav.classList.toggle('show')
        toggle.classList.toggle('bx-x')
        bodypd.classList.toggle('body-pd')
        headerpd.classList.toggle('body-pd')
      })
    }
  }
  showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header')
  const linkColor = document.querySelectorAll('.nav_link')
  function colorLink() {
    if (linkColor) {
      linkColor.forEach(l => l.classList.remove('active'))
      this.classList.add('active')
    }
  }
  linkColor.forEach(l => l.addEventListener('click', colorLink))
});
${dash_script}`;
                                            obfuscator_get(plugins_script, function (callback) {
                                              plugins_script = callback;
                                              res.send(`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${language.mccontroller_name} - ${language.dashboard}</title>
  <link href="/static/images/logo.png" rel="icon">
  <link href="/static/css/bootstrap.min.css" rel="stylesheet">
  <link href="/static/boxicons/css/boxicons.min.css" rel="stylesheet">
  <link href="/static/css/style.css" rel="stylesheet">
  <link href="/static/css/dashboard.css" rel="stylesheet">
  <style>
  th:hover{
    background-color: #343a40;
  }
  td:hover{
    background-color: #343a40;
  }
  </style>
  ${dash_head}
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
${html_socket_disconnect}
  <main id="app_nav">
    <header class="header body-pd" id="header">
      <div class="header_toggle"> <i class="bx bx-menu bx-x" id="header-toggle"></i> </div>${address_shared}${dash_nav}
      <div class="header_img"> <img src="/static/images/logo.png" alt="" height="40px" width="40px"> </div>
    </header>
    <div class="l-navbar show" id="nav-bar">
      <nav class="nav">
        <div> <a href="" class="nav_logo"> <i class="bx bx-cube nav_logo-icon"></i> <span
              class="nav_logo-name">${language.mccontroller_name}</span> </a>
          <div class="nav_list"> ${nav_list}${dash_nav_side} <a href="/dashboard/logout/" class="nav_link"> <i class="bx bx-log-out nav_icon"></i> <span
          class="nav_name">${language.nav_side.logout}</span> </a> </div>
        </div>
      </nav>
    </div>
  </main>
  <main id="app_body" style="display: none; width: 100%; height: auto; margin: 17px;">
    <div class="col pb-0 mt-0">
    <div class="card bg-dark">
        <div style="color:White;" class="card-header"><i class="bx bx-extension"></i> ${language.plugins_page.plugins}</div>
          <div style="color:White;" class="card-body">
          <div id = "status"></div>
          <h4>${language.plugins_page.upload_plugin}</h4><br/>
          <form id="uploadForm" enctype="multipart/form-data" action="/upload/plugins/${plugins_send_key}/" method="post">
          <input class="form-control form-control-lg" type="file" accept=".jar" name="plugin_file" required/><br/>
            <div class="d-grid gap-2"><button type="submit" class="btn btn-primary btn-sm" name="submit">${language.plugins_page.upload_plugin_button}</button></div>
          </form>
          <hr class="my-4">
          <div id="receive_files" style="color:White;" class="card-body">
          </div>
          </div>
        </div>
    </div>
    </main>
  <script type="text/javascript" src="/static/js/bootstrap.bundle.min.js"></script>
  <script type="text/javascript" src="/static/js/jquery.min.js"></script>
  <script type="text/javascript" src="/static/js/jquery.form.min.js"></script>
  <script type="text/javascript" src="/static/js/socket.io.js"></script>
  <script type="text/javascript" src="/static/js/chart.js"></script>
  <script type="text/javascript" src="/static/js/loader.js"></script>
  <script type="text/javascript">
  ${plugins_script}
  </script>
</body>
</html>`);
                                            });
                                          });
                                        } else {
                                          res.send('<script>window.location.replace("/dashboard/general_settings/");</script>');
                                        }
                                      } else {
                                        length_files++;
                                        if (files.length == length_files) {
                                          if (req.ipInfo.ip != '::1') {
                                            fs.appendFile('./data/blacklist_ip.ydb', `\n${req.ipInfo.ip}`, function () {
                                              res.send('<script>window.location.replace("/login/?errorcode=101");</script>');
                                            });
                                            setTimeout(() => {
                                              fs.readFile('./data/blacklist_ip.ydb', 'utf8', function (err, data) {
                                                let new_data = data.replace(`\n${req.ipInfo.ip}`, '');
                                                fs.writeFileSync('./data/blacklist_ip.ydb', `${new_data}`);
                                              });
                                            }, 10000);
                                          } else {
                                            res.send('<script>window.location.replace("/login/?errorcode=101");</script>');
                                          }
                                        }
                                      }
                                    });
                                  });
                                });
                              } else {
                                if (req.ipInfo.ip != '::1') {
                                  fs.appendFile('./data/blacklist_ip.ydb', `\n${req.ipInfo.ip}`, function () {
                                    res.send('<script>window.location.replace("/login/?errorcode=101");</script>');
                                  });
                                  setTimeout(() => {
                                    fs.readFile('./data/blacklist_ip.ydb', 'utf8', function (err, data) {
                                      let new_data = data.replace(`\n${req.ipInfo.ip}`, '');
                                      fs.writeFileSync('./data/blacklist_ip.ydb', `${new_data}`);
                                    });
                                  }, 10000);
                                } else {
                                  res.send('<script>window.location.replace("/login/?errorcode=101");</script>');
                                }
                              }
                            }
                          }
                        });

                        app.post('/dashboard/general_settings/', function (req, res) {
                          if (connection_type == 'private') {
                            if (req.ipInfo.ip != '::1') {
                              return;
                            }
                          }
                          if (loadui == 'on') {
                            res.send(html_loader);
                          } else {
                            if (blacklist_ip.includes(`${req.ipInfo.ip}`) == true) {
                              res.status(403).send(html_error_403);
                            } else {
                              if (req.body.token != undefined) {
                                fs.readdir("./data/users/", (err, files) => {
                                  let length_files = 0;
                                  files.forEach(file => {
                                    file = file.split('.');
                                    fs.readFile(`./data/users/${file[0]}.ydb`, 'utf8', function (err, data) {
                                      datajson = JSON.parse(data);
                                      if (req.body.token == datajson.token) {
                                        let level_permission = datajson.level_permission.split('');
                                        if (level_permission.includes('1') == true || level_permission.includes('7') == true) {
                                          nav_side_get(level_permission, 'general_settings', function (nav_list) {
                                            fs.readdir('./languages/', (err, files) => {
                                              let languages_num = 0;
                                              let languages_options = '';
                                              files.forEach(file => {
                                                languages_num++;
                                                let languages_selected = '';
                                                if (file.split('.')[0] == app_language) languages_selected = 'selected="selected" ';
                                                languages_options = languages_options + `<option ${languages_selected}value="${file.split('.')[0]}">${file.split('.')[0]}</option>`;
                                                if (languages_num == files.length) {
                                                  let general_settings_script = `
$("#app_disconnect").hide();
$("#app_nav").show();
const socket = io(document.location.host);
const xhttp = new XMLHttpRequest();
socket.emit('connection_key',{connection_key:"${socket_connection_key}"});
socket.on('connection_key', data => {
  if(data.status=='success'){
    $('#new_software').val('${software}'); $('#new_version').val('${version}');$('#new_connection').val('${connection_type}');
    socket.on('${general_settings_received_key}_setup_update', function (data) {
      alert(data);
    });
    socket.on('disconnect', () => {
      console.log("%c Socket Event: %c Disconnect ","color: #fff; background: #000000","color: #fff; background: #5f5f5f");
      $("#app_disconnect").show();
      $("#app_nav").hide();
      $("#app_body").hide();
    });
    socket.on('reload', function (data) {
      if(data=='reload'){
          window.location.reload();
          console.log("%c Received Server Event: %c Reload ","color: #fff; background: #F502C4","color: #fff; background: #5f5f5f");
      }
    });
  }
});

function ch_setup() {
  console.log("%c Send Server Event: %c Change Setup ","color: #fff; background: #F502C4","color: #fff; background: #5f5f5f");
  const new_port_v = document.getElementById('new_port');const new_min_ram_v = document.getElementById('new_min_ram');const new_max_ram_v = document.getElementById('new_max_ram');const new_servername_v = document.getElementById('new_servername');const new_connection_v = document.getElementById('new_connection'); new_software_v = document.getElementById('new_software');const new_version_v = document.getElementById('new_version');const new_language_v = document.getElementById('new_language');
  socket.emit('event',{key:"${general_settings_send_key}",event:"update_general_settings",new_port_v:new_port_v.value,new_min_ram_v:new_min_ram_v.value,new_max_ram_v:new_max_ram_v.value,new_servername_v:new_servername_v.value,new_software_v:new_software_v.value,new_version_v:new_version_v.value,new_language_v:new_language_v.value,new_connection_v:new_connection_v.value});
}

document.addEventListener("DOMContentLoaded", function (event) {
  const showNavbar = (toggleId, navId, bodyId, headerId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId),
      bodypd = document.getElementById(bodyId),
      headerpd = document.getElementById(headerId)
    if (toggle && nav && bodypd && headerpd) {
      toggle.addEventListener('click', () => {
        nav.classList.toggle('show')
        toggle.classList.toggle('bx-x')
        bodypd.classList.toggle('body-pd')
        headerpd.classList.toggle('body-pd')
      })
    }
  }
  showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header')
  const linkColor = document.querySelectorAll('.nav_link')
  function colorLink() {
    if (linkColor) {
      linkColor.forEach(l => l.classList.remove('active'))
      this.classList.add('active')
    }
  }
  linkColor.forEach(l => l.addEventListener('click', colorLink))
});
${dash_script}`;
                                                  obfuscator_get(general_settings_script, function (callback) {
                                                    general_settings_script = callback;
                                                    res.send(`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${language.mccontroller_name} - ${language.dashboard}</title>
  <link href="/static/images/logo.png" rel="icon">
  <link href="/static/css/bootstrap.min.css" rel="stylesheet">
  <link href="/static/boxicons/css/boxicons.min.css" rel="stylesheet">
  <link href="/static/css/style.css" rel="stylesheet">
  <link href="/static/css/dashboard.css" rel="stylesheet">
  ${dash_head}
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
${html_socket_disconnect}
  <main id="app_nav">
    <header class="header body-pd" id="header">
      <div class="header_toggle"> <i class="bx bx-menu bx-x" id="header-toggle"></i> </div>${address_shared}${dash_nav}
      <div class="header_img"> <img src="/static/images/logo.png" alt="" height="40px" width="40px"> </div>
    </header>
    <div class="l-navbar show" id="nav-bar">
      <nav class="nav">
        <div> <a href="" class="nav_logo"> <i class="bx bx-cube nav_logo-icon"></i> <span
              class="nav_logo-name">${language.mccontroller_name}</span> </a>
          <div class="nav_list"> ${nav_list}${dash_nav_side} <a href="/dashboard/logout/" class="nav_link"> <i class="bx bx-log-out nav_icon"></i> <span
          class="nav_name">${language.nav_side.logout}</span> </a> </div>
        </div>
      </nav>
    </div>
  </main>
  <main id="app_body" style="display: none; width: 100%; height: auto; margin: 17px;">
    <div class="col pb-0 mt-0">
    <div class="card bg-dark">
        <div style="color:White;" class="card-header"><i class="bx bx-cog"></i> ${language.general_settings_page.setup}</div>
        <div class="card-body">
            <div class="form-floating mb-3">
                <input value="${serverport}" type="number" class="form-control" id="new_port" name="new_port"
                    placeholder="${language.general_settings_page.server_port}">
                <label for="new_port">${language.general_settings_page.server_port}</label>
            </div>
            <div class="form-floating mb-3">
                <input value="${min_ram}" type="number" class="form-control" id="new_min_ram" name="new_min_ram"
                    placeholder="${language.general_settings_page.min_ram_use}">
                <label for="new_min_ram">${language.general_settings_page.min_ram_use}</label>
            </div>
            <div class="form-floating mb-3">
                <input value="${max_ram}" type="number" class="form-control" id="new_max_ram" name="new_max_ram"
                    placeholder="${language.general_settings_page.max_ram_use}">
                <label for="new_max_ram">${language.general_settings_page.max_ram_use}</label>
            </div>
            <div class="form-floating mb-3">
                <input value="${servername}" type="text" class="form-control" id="new_servername"
                    name="new_servername" placeholder="${language.general_settings_page.server_name}">
                <label for="new_servername">${language.general_settings_page.server_name}</label>
            </div>
            <div class="form-select mb-3">
                <label class="form-check-label" for="new_software">
                    ${language.general_settings_page.minecraft_server_software}
                </label>
                <select id="new_software" class="form-select mb-3">
                    <option value="paper">Paper</option>
                    <option value="spigot">Spigot</option>
                    <option value="craftbukkit">Craftbukkit</option>
                </select>
            </div>
            <div class="form-select mb-3">
                <label class="form-check-label" for="new_version">
                ${language.general_settings_page.minecraft_server_version}
                </label>
                <select id="new_version" class="form-select mb-3">
                    <option value="1.19">1.19</option>
                    <option value="1.18.2">1.18.2</option>
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
            <div class="form-select mb-3">
              <label class="form-check-label" for="language">
                ${language.general_settings_page.languages}
              </label>
              <select id="new_language" class="form-select mb-3" required>
                ${languages_options}
              </select>
            </div>
            <div class="form-select mb-3">
              <label class="form-check-label" for="new_connection">
                ${language.general_settings_page.connection_type}
              </label>
              <select id="new_connection" class="form-select mb-3" required>
                <option value="public">${language.general_settings_page.connection_type_public}</option>
                <option value="private">${language.general_settings_page.connection_type_private}</option>
              </select>
            </div>
            <div class="d-grid">
                <button onclick="ch_setup();" class="btn btn-primary btn-login text-uppercase fw-bold"
                    type="submit">${language.general_settings_page.update_setup_button}</button>                
            </div>
        </div>
    </div>
    </div>
    </main>
  <script type="text/javascript" src="/static/js/bootstrap.bundle.min.js"></script>
  <script type="text/javascript" src="/static/js/jquery-3.6.0.js"></script>
  <script type="text/javascript" src="/static/js/socket.io.js"></script>
  <script type="text/javascript" src="/static/js/chart.js"></script>
  <script type="text/javascript" src="/static/js/loader.js"></script>
  <script type="text/javascript">
  ${general_settings_script}
  </script>
</body>
</html>`);
                                                  });
                                                }
                                              });
                                            });
                                          });
                                        } else {
                                          res.send('<script>window.location.replace("/dashboard/addons/");</script>');
                                        }
                                      } else {
                                        length_files++;
                                        if (files.length == length_files) {
                                          if (req.ipInfo.ip != '::1') {
                                            fs.appendFile('./data/blacklist_ip.ydb', `\n${req.ipInfo.ip}`, function () {
                                              res.send('<script>window.location.replace("/login/?errorcode=101");</script>');
                                            });
                                            setTimeout(() => {
                                              fs.readFile('./data/blacklist_ip.ydb', 'utf8', function (err, data) {
                                                let new_data = data.replace(`\n${req.ipInfo.ip}`, '');
                                                fs.writeFileSync('./data/blacklist_ip.ydb', `${new_data}`);
                                              });
                                            }, 10000);
                                          } else {
                                            res.send('<script>window.location.replace("/login/?errorcode=101");</script>');
                                          }
                                        }
                                      }
                                    });
                                  });
                                });
                              } else {
                                if (req.ipInfo.ip != '::1') {
                                  fs.appendFile('./data/blacklist_ip.ydb', `\n${req.ipInfo.ip}`, function () {
                                    res.send('<script>window.location.replace("/login/?errorcode=101");</script>');
                                  });
                                  setTimeout(() => {
                                    fs.readFile('./data/blacklist_ip.ydb', 'utf8', function (err, data) {
                                      let new_data = data.replace(`\n${req.ipInfo.ip}`, '');
                                      fs.writeFileSync('./data/blacklist_ip.ydb', `${new_data}`);
                                    });
                                  }, 10000);
                                } else {
                                  res.send('<script>window.location.replace("/login/?errorcode=101");</script>');
                                }
                              }
                            }
                          }
                        });

                        app.post('/dashboard/addons/', function (req, res) {
                          if (connection_type == 'private') {
                            if (req.ipInfo.ip != '::1') {
                              return;
                            }
                          }
                          if (loadui == 'on') {
                            res.send(html_loader);
                          } else {
                            if (blacklist_ip.includes(`${req.ipInfo.ip}`) == true) {
                              res.status(403).send(html_error_403);
                            } else {
                              if (req.body.token != undefined) {
                                fs.readdir("./data/users/", (err, files) => {
                                  let length_files = 0;
                                  files.forEach(file => {
                                    file = file.split('.');
                                    fs.readFile(`./data/users/${file[0]}.ydb`, 'utf8', function (err, data) {
                                      datajson = JSON.parse(data);
                                      if (req.body.token == datajson.token) {
                                        let level_permission = datajson.level_permission.split('');
                                        if (level_permission.includes('1') == true || level_permission.includes('8') == true) {
                                          nav_side_get(level_permission, 'addons', function (nav_list) {
                                            let addons_script = `
$("#app_disconnect").hide();
$("#app_nav").show();
const socket = io(document.location.host);
const xhttp = new XMLHttpRequest();
socket.emit('connection_key',{connection_key:"${socket_connection_key}"});
socket.on('connection_key', data => {
  if(data.status=='success'){
    socket.on('disconnect', () => {
      console.log("%c Socket Event: %c Disconnect ","color: #fff; background: #000000","color: #fff; background: #5f5f5f");
      $("#app_disconnect").show();
      $("#app_nav").hide();
      $("#app_body").hide();
    });
    socket.on('reload', function (data) {
      if(data=='reload'){
          window.location.reload();
          console.log("%c Received Server Event: %c Reload ","color: #fff; background: #F502C4","color: #fff; background: #5f5f5f");
      }
    });
    
    let file_manager_location = document.location.href.split('#')[1];
    setInterval(() => {
        //location
        if (file_manager_location == undefined) {
            window.location.replace('#');
            file_manager_location = document.location.href.split('#')[1];
            socket.emit('event', {key:'${addons_send_key}',event:'receive_files_addons',file_manager_location:file_manager_location});
        } else {
            let old_file_manager_location = file_manager_location;
            file_manager_location = document.location.href.split('#')[1];
            if (old_file_manager_location != file_manager_location) {
              socket.emit('event', {key:'${addons_send_key}',event:'receive_files_addons',file_manager_location:file_manager_location});
            }
        }
    });
    if (file_manager_location != undefined) { socket.emit('event', {key:'${addons_send_key}',event:'receive_files_addons',file_manager_location:file_manager_location}); }
    socket.on('${addons_received_key}_receive_files', function (data) {
      document.getElementById('receive_files').innerHTML = data;
      enable_codeeditor();
    });
    socket.on('${addons_received_key}_update_files', function (data) {
      socket.emit('event', {key:'${addons_send_key}',event:'receive_files_addons',file_manager_location:file_manager_location});
      alert(data);
    });
  }
});

function update_file_codeeditor() {
  const new_file_data = document.getElementById('codeEditor').value;
  socket.emit('event', { key:'${addons_send_key}', event:'addons_update_files', location: document.location.href.split('#')[1], new_file_data: new_file_data });
}

function restart_addons() {
  let text = "${language.addons_page.reload_addons_alert}";if (confirm(text) == true) {console.log("%c Send Server Event: %c Restart Addons ","color: #fff; background: #F502C4","color: #fff; background: #5f5f5f");socket.emit('event', { key:'${addons_send_key}', event:'restart_addons' });}
}

function create_file() {
  const name_create_file = document.getElementById('create_file_input').value;
  socket.emit('event', { key:'${addons_send_key}', event:'addons_create_file', name_create_file: name_create_file });
}

function delete_file(file) {
  socket.emit('event', { key:'${addons_send_key}', event:'addons_file_delete', file: file });
}

document.addEventListener("DOMContentLoaded", function (event) {
  const showNavbar = (toggleId, navId, bodyId, headerId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId),
      bodypd = document.getElementById(bodyId),
      headerpd = document.getElementById(headerId)
    if (toggle && nav && bodypd && headerpd) {
      toggle.addEventListener('click', () => {
        nav.classList.toggle('show')
        toggle.classList.toggle('bx-x')
        bodypd.classList.toggle('body-pd')
        headerpd.classList.toggle('body-pd')
      })
    }
  }
  showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header')
  const linkColor = document.querySelectorAll('.nav_link')
  function colorLink() {
    if (linkColor) {
      linkColor.forEach(l => l.classList.remove('active'))
      this.classList.add('active')
    }
  }
  linkColor.forEach(l => l.addEventListener('click', colorLink))
});
${dash_script}`;
                                            obfuscator_get(addons_script, function (callback) {
                                              addons_script = callback;
                                              res.send(`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${language.mccontroller_name} - ${language.dashboard}</title>
  <link href="/static/images/logo.png" rel="icon">
  <link href="/static/css/bootstrap.min.css" rel="stylesheet">
  <link href="/static/boxicons/css/boxicons.min.css" rel="stylesheet">
  <link href="/static/css/style.css" rel="stylesheet">
  <link href="/static/css/dashboard.css" rel="stylesheet">
  <style>
    a {
        text-decoration: none;
        color: #343434;
    }
    th:hover{
      background-color: #343a40;
    }
    td:hover{
      background-color: #343a40;
    }
  </style>
  ${dash_head}
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
${html_socket_disconnect}
  <main id="app_nav">
    <header class="header body-pd" id="header">
      <div class="header_toggle"> <i class="bx bx-menu bx-x" id="header-toggle"></i> </div>${address_shared}${dash_nav}
      <div class="header_img"> <img src="/static/images/logo.png" alt="" height="40px" width="40px"> </div>
    </header>
    <div class="l-navbar show" id="nav-bar">
      <nav class="nav">
        <div> <a href="" class="nav_logo"> <i class="bx bx-cube nav_logo-icon"></i> <span
              class="nav_logo-name">${language.mccontroller_name}</span> </a>
          <div class="nav_list"> ${nav_list}${dash_nav_side} <a href="/dashboard/logout/" class="nav_link"> <i class="bx bx-log-out nav_icon"></i> <span
          class="nav_name">${language.nav_side.logout}</span> </a> </div>
        </div>
      </nav>
    </div>
  </main>
  <main id="app_body" style="display: none; width: 100%; height: auto; margin: 17px;">
    <div class="col pb-0 mt-0">
    <div class="card bg-dark">
        <div style="color:White;" class="card-header"><i class="bx bx-briefcase"></i> ${language.addons_page.addons}</div>
        <button style="margin-left: 15px; margin-right: 15px; margin-top: 10px;" onclick="restart_addons();" class="btn btn-warning btn-sm btn-login text-uppercase fw-bold"
                    type="submit">${language.addons_page.reload_addons_button}</button>
          <div id="receive_files" style="color:White;" class="card-body">
          </div>
        </div>
      ${dash_main}
    </div>
  </main>
  <script type="text/javascript" src="/static/js/bootstrap.bundle.min.js"></script>
  <script type="text/javascript" src="/static/js/jquery-3.6.0.js"></script>
  <script type="text/javascript" src="/static/js/socket.io.js"></script>
  <script type="text/javascript" src="/static/js/chart.js"></script>
  <script type="text/javascript" src="/static/js/loader.js"></script>
  <script type="text/javascript">
  ${addons_script}
  </script>
</body>
</html>`);
                                            });
                                          });
                                        } else {
                                          res.send('<script>window.location.replace("/dashboard/profile/");</script>');
                                        }
                                      } else {
                                        length_files++;
                                        if (files.length == length_files) {
                                          if (req.ipInfo.ip != '::1') {
                                            fs.appendFile('./data/blacklist_ip.ydb', `\n${req.ipInfo.ip}`, function () {
                                              res.send('<script>window.location.replace("/login/?errorcode=101");</script>');
                                            });
                                            setTimeout(() => {
                                              fs.readFile('./data/blacklist_ip.ydb', 'utf8', function (err, data) {
                                                let new_data = data.replace(`\n${req.ipInfo.ip}`, '');
                                                fs.writeFileSync('./data/blacklist_ip.ydb', `${new_data}`);
                                              });
                                            }, 10000);
                                          } else {
                                            res.send('<script>window.location.replace("/login/?errorcode=101");</script>');
                                          }
                                        }
                                      }
                                    });
                                  });
                                });
                              } else {
                                if (req.ipInfo.ip != '::1') {
                                  fs.appendFile('./data/blacklist_ip.ydb', `\n${req.ipInfo.ip}`, function () {
                                    res.send('<script>window.location.replace("/login/?errorcode=101");</script>');
                                  });
                                  setTimeout(() => {
                                    fs.readFile('./data/blacklist_ip.ydb', 'utf8', function (err, data) {
                                      let new_data = data.replace(`\n${req.ipInfo.ip}`, '');
                                      fs.writeFileSync('./data/blacklist_ip.ydb', `${new_data}`);
                                    });
                                  }, 10000);
                                } else {
                                  res.send('<script>window.location.replace("/login/?errorcode=101");</script>');
                                }
                              }
                            }
                          }
                        });

                        app.post('/dashboard/profile/', function (req, res) {
                          if (connection_type == 'private') {
                            if (req.ipInfo.ip != '::1') {
                              return;
                            }
                          }
                          if (loadui == 'on') {
                            res.send(html_loader);
                          } else {
                            if (blacklist_ip.includes(`${req.ipInfo.ip}`) == true) {
                              res.status(403).send(html_error_403);
                            } else {
                              if (req.body.token != undefined) {
                                fs.readdir("./data/users/", (err, files) => {
                                  let length_files = 0;
                                  files.forEach(file => {
                                    file = file.split('.');
                                    fs.readFile(`./data/users/${file[0]}.ydb`, 'utf8', function (err, data) {
                                      datajson = JSON.parse(data);
                                      if (req.body.token == datajson.token) {
                                        let level_permission = datajson.level_permission.split('');
                                        if (level_permission.includes('1') == true || level_permission.includes('9') == true) {
                                          nav_side_get(level_permission, 'profile', function (nav_list) {
                                            let profile_script = `
$("#app_disconnect").hide();
$("#app_nav").show();
const socket = io(document.location.host);
const xhttp = new XMLHttpRequest();
socket.emit('connection_key',{connection_key:"${socket_connection_key}"});
socket.on('connection_key', data => {
  if(data.status=='success'){
    socket.on('${profile_received_key}_${datajson.username}_profile_update', function (data) { alert(data.message); if(data.status=='success'){window.location.replace('/login');} });
    socket.on('disconnect', () => {
      console.log("%c Socket Event: %c Disconnect ","color: #fff; background: #000000","color: #fff; background: #5f5f5f");
      $("#app_disconnect").show();
      $("#app_nav").hide();
      $("#app_body").hide();
    });
    socket.on('reload', function (data) {
      if(data=='reload'){
          window.location.reload();
          console.log("%c Received Server Event: %c Reload ","color: #fff; background: #F502C4","color: #fff; background: #5f5f5f");
      }
    });
  }
});

function ch_pass() {
  let chlastpassword = document.getElementById('chlastpassword').value;
  let chnewpassword = document.getElementById('chnewpassword').value;
  socket.emit('event', {key:'${profile_send_key}',event:'change_password',username:'${datajson.username}',chlastpassword:chlastpassword,chnewpassword:chnewpassword,token:localStorage.getItem('token')});
}

document.addEventListener("DOMContentLoaded", function (event) {
  const showNavbar = (toggleId, navId, bodyId, headerId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId),
      bodypd = document.getElementById(bodyId),
      headerpd = document.getElementById(headerId)
    if (toggle && nav && bodypd && headerpd) {
      toggle.addEventListener('click', () => {
        nav.classList.toggle('show')
        toggle.classList.toggle('bx-x')
        bodypd.classList.toggle('body-pd')
        headerpd.classList.toggle('body-pd')
      })
    }
  }
  showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header')
  const linkColor = document.querySelectorAll('.nav_link')
  function colorLink() {
    if (linkColor) {
      linkColor.forEach(l => l.classList.remove('active'))
      this.classList.add('active')
    }
  }
  linkColor.forEach(l => l.addEventListener('click', colorLink))
});
${dash_script}`;
                                            obfuscator_get(profile_script, function (callback) {
                                              profile_script = callback;
                                              res.send(`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${language.mccontroller_name} - ${language.dashboard}</title>
  <link href="/static/images/logo.png" rel="icon">
  <link href="/static/css/bootstrap.min.css" rel="stylesheet">
  <link href="/static/boxicons/css/boxicons.min.css" rel="stylesheet">
  <link href="/static/css/style.css" rel="stylesheet">
  <link href="/static/css/dashboard.css" rel="stylesheet">
  ${dash_head}
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
${html_socket_disconnect}
  <main id="app_nav">
    <header class="header body-pd" id="header">
      <div class="header_toggle"> <i class="bx bx-menu bx-x" id="header-toggle"></i> </div>${address_shared}${dash_nav}
      <div class="header_img"> <img src="/static/images/logo.png" alt="" height="40px" width="40px"> </div>
    </header>
    <div class="l-navbar show" id="nav-bar">
      <nav class="nav">
        <div> <a href="" class="nav_logo"> <i class="bx bx-cube nav_logo-icon"></i> <span
              class="nav_logo-name">${language.mccontroller_name}</span> </a>
          <div class="nav_list"> ${nav_list}${dash_nav_side} <a href="/dashboard/logout/" class="nav_link"> <i class="bx bx-log-out nav_icon"></i> <span
          class="nav_name">${language.nav_side.logout}</span> </a> </div>
        </div>
      </nav>
    </div>
  </main>
  <main id="app_body" style="display: none; width: 100%; height: auto; margin: 17px;">
  <div class="row row-cols-1 row-cols-lg-2">
    <div class="col pb-2 mt-3">
      <div class="card bg-dark">
          <div style="color:White;" class="card-header"><i class="bx bx-user"></i> Events</div>
          <div style="color:White;" class="card-body">
              <h4>${language.profile_page.change_password}</h4>
              <div style="color:Black;" class="form-floating mb-3">
                  <input type="password" class="form-control" id="chlastpassword" name="chlastpassword"
                      placeholder="${language.profile_page.last_password}">
                  <label for="chlastpassword">${language.profile_page.last_password}</label>
              </div>
              <div style="color:Black;" class="form-floating mb-3">
                  <input type="password" class="form-control" id="chnewpassword" name="chnewpassword"
                      placeholder="${language.profile_page.new_password}">
                  <label for="chnewpassword">${language.profile_page.new_password}</label>
              </div>
              <div class="d-grid">
                  <button onclick="ch_pass();" class="btn btn-primary btn-login text-uppercase fw-bold"
                      type="submit">${language.profile_page.change_password_button}</button>
              </div>
              <hr class="my-4">
              <div class="d-grid mb-2">
                  <a href="https://yellow-team.ir/">
                      <center><button style="font-size: 0.9rem;letter-spacing: 0.05rem;padding: 0.75rem 1rem;color: white !important;background-color: ${language.copyright.color};" class="btn text-uppercase fw-bold">${language.copyright.title}</button></center>
                  </a>
              </div>
          </div>
      </div>
    </div>
    <div class="col pb-2 mt-3">
      <div class="card bg-dark">
      <div style="color:White;" class="card-header"><i class="bx bx-user"></i> ${language.profile_page.prfile}</div>
        <div style="color:White;" class="card-body">
          <center>
            <img src="/static/images/logo.png" alt="" height="120px" width="120px">
            <h4 style="margin-top: 15px;">${language.profile_page.username}: ${datajson.username}</h4>
          </center>
        </div>
      </div>
    </div>
  </div>
  </main>
  <script type="text/javascript" src="/static/js/bootstrap.bundle.min.js"></script>
  <script type="text/javascript" src="/static/js/jquery-3.6.0.js"></script>
  <script type="text/javascript" src="/static/js/socket.io.js"></script>
  <script type="text/javascript" src="/static/js/chart.js"></script>
  <script type="text/javascript" src="/static/js/loader.js"></script>
  <script type="text/javascript">
  ${profile_script}
  </script>
</body>
</html>`);
                                            });
                                          });
                                        } else {
                                          res.send('<script>window.location.replace("/dashboard/access/");</script>');
                                        }
                                      } else {
                                        length_files++;
                                        if (files.length == length_files) {
                                          if (req.ipInfo.ip != '::1') {
                                            fs.appendFile('./data/blacklist_ip.ydb', `\n${req.ipInfo.ip}`, function () {
                                              res.send('<script>window.location.replace("/login/?errorcode=101");</script>');
                                            });
                                            setTimeout(() => {
                                              fs.readFile('./data/blacklist_ip.ydb', 'utf8', function (err, data) {
                                                let new_data = data.replace(`\n${req.ipInfo.ip}`, '');
                                                fs.writeFileSync('./data/blacklist_ip.ydb', `${new_data}`);
                                              });
                                            }, 10000);
                                          } else {
                                            res.send('<script>window.location.replace("/login/?errorcode=101");</script>');
                                          }
                                        }
                                      }
                                    });
                                  });
                                });
                              } else {
                                if (req.ipInfo.ip != '::1') {
                                  fs.appendFile('./data/blacklist_ip.ydb', `\n${req.ipInfo.ip}`, function () {
                                    res.send('<script>window.location.replace("/login/?errorcode=101");</script>');
                                  });
                                  setTimeout(() => {
                                    fs.readFile('./data/blacklist_ip.ydb', 'utf8', function (err, data) {
                                      let new_data = data.replace(`\n${req.ipInfo.ip}`, '');
                                      fs.writeFileSync('./data/blacklist_ip.ydb', `${new_data}`);
                                    });
                                  }, 10000);
                                } else {
                                  res.send('<script>window.location.replace("/login/?errorcode=101");</script>');
                                }
                              }
                            }
                          }
                        });
                        let access_table = '';
                        setInterval(() => {
                          access_table = '';
                          fs.readdir("./data/users/", (err, files) => {
                            let length_files = 0;
                            files.forEach(file => {
                              file = file.split('.');
                              fs.readFile(`./data/users/${file[0]}.ydb`, 'utf8', function (err, data) {
                                datajson = JSON.parse(data);
                                access_table = access_table + '<tr><td>' + datajson.username + '</td><td>' + datajson.level_permission + '</td></tr>';
                              });
                            });
                          });
                        }, 1000);
                        app.post('/dashboard/access/', function (req, res) {
                          if (connection_type == 'private') {
                            if (req.ipInfo.ip != '::1') {
                              return;
                            }
                          }
                          if (loadui == 'on') {
                            res.send(html_loader);
                          } else {
                            if (blacklist_ip.includes(`${req.ipInfo.ip}`) == true) {
                              res.status(403).send(html_error_403);
                            } else {
                              if (req.body.token != undefined) {
                                fs.readdir("./data/users/", (err, files) => {
                                  let length_files = 0;
                                  files.forEach(file => {
                                    file = file.split('.');
                                    fs.readFile(`./data/users/${file[0]}.ydb`, 'utf8', function (err, data) {
                                      datajson = JSON.parse(data);
                                      if (req.body.token == datajson.token) {
                                        let level_permission = datajson.level_permission.split('');
                                        if (level_permission.includes('1') == true) {
                                          nav_side_get(level_permission, 'access', function (nav_list) {
                                            let access_script = `
$("#app_disconnect").hide();
$("#app_nav").show();
const socket = io(document.location.host);
const xhttp = new XMLHttpRequest();
let access_level = '';
socket.emit('connection_key',{connection_key:"${socket_connection_key}"});
socket.on('connection_key', data => {
  if(data.status=='success'){
    setInterval(() => {
        let tmp_level = '';
        if($('#access_1').is(':checked')==true){
          tmp_level = '1';
          $('#access_2')[0].checked = true;
          $('#access_3')[0].checked = true;
          $('#access_4')[0].checked = true;
          $('#access_5')[0].checked = true;
          $('#access_6')[0].checked = true;
          $('#access_7')[0].checked = true;
          $('#access_8')[0].checked = true;
          $('#access_9')[0].checked = true;
        }else{
          if($('#access_2').is(':checked')==true){
            tmp_level = tmp_level+'2';
          }
          if($('#access_3').is(':checked')==true){
            tmp_level = tmp_level+'3';
          }
          if($('#access_4').is(':checked')==true){
            tmp_level = tmp_level+'4';
          }
          if($('#access_5').is(':checked')==true){
            tmp_level = tmp_level+'5';
          }
          if($('#access_6').is(':checked')==true){
            tmp_level = tmp_level+'6';
          }
          if($('#access_7').is(':checked')==true){
            tmp_level = tmp_level+'7';
          }
          if($('#access_8').is(':checked')==true){
            tmp_level = tmp_level+'8';
          }
          if($('#access_9').is(':checked')==true){
            tmp_level = tmp_level+'9';
          }
        }
        if(tmp_level==''){
          access_level = 'NaN';  
        }else{
          access_level = tmp_level;
        }
        document.getElementById('access_level').textContent = 'Access Level Permission: '+access_level;
    },);
    socket.on('${access_received_key}_access_update', function (data) { alert(data); });
    socket.on('disconnect', () => {
      console.log("%c Socket Event: %c Disconnect ","color: #fff; background: #000000","color: #fff; background: #5f5f5f");
      $("#app_disconnect").show();
      $("#app_nav").hide();
      $("#app_body").hide();
    });
    socket.on('reload', function (data) {
      if(data=='reload'){
          window.location.reload();
          console.log("%c Received Server Event: %c Reload ","color: #fff; background: #F502C4","color: #fff; background: #5f5f5f");
      }
    });
  }
});
function add_access(){
  const add_username = document.getElementById('add_username');
  const add_password = document.getElementById('add_password');
  socket.emit('event', {key:'${access_send_key}',event:'add_access',username:add_username.value,password:add_password.value,level_permission:access_level});
}
function remove_access(){
let text = "${language.access_page.remove_access_alert_confirm}";
  if (confirm(text) == true) {
    const rm_username = document.getElementById('rm_username');
    socket.emit('event', {key:'${access_send_key}',event:'remove_access',rm_username:rm_username.value});
  }
}
document.addEventListener("DOMContentLoaded", function (event) {
  const showNavbar = (toggleId, navId, bodyId, headerId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId),
      bodypd = document.getElementById(bodyId),
      headerpd = document.getElementById(headerId)
    if (toggle && nav && bodypd && headerpd) {
      toggle.addEventListener('click', () => {
        nav.classList.toggle('show')
        toggle.classList.toggle('bx-x')
        bodypd.classList.toggle('body-pd')
        headerpd.classList.toggle('body-pd')
      })
    }
  }
  showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header')
  const linkColor = document.querySelectorAll('.nav_link')
  function colorLink() {
    if (linkColor) {
      linkColor.forEach(l => l.classList.remove('active'))
      this.classList.add('active')
    }
  }
  linkColor.forEach(l => l.addEventListener('click', colorLink))
});
${dash_script}`;
                                            obfuscator_get(access_script, function (callback) {
                                              access_script = callback;
                                              res.send(`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${language.mccontroller_name} - ${language.dashboard}</title>
  <link href="/static/images/logo.png" rel="icon">
  <link href="/static/css/bootstrap.min.css" rel="stylesheet">
  <link href="/static/boxicons/css/boxicons.min.css" rel="stylesheet">
  <link href="/static/css/style.css" rel="stylesheet">
  <link href="/static/css/dashboard.css" rel="stylesheet">
  ${dash_head}
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
${html_socket_disconnect}
  <main id="app_nav">
    <header class="header body-pd" id="header">
      <div class="header_toggle"> <i class="bx bx-menu bx-x" id="header-toggle"></i> </div>${address_shared}${dash_nav}
      <div class="header_img"> <img src="/static/images/logo.png" alt="" height="40px" width="40px"> </div>
    </header>
    <div class="l-navbar show" id="nav-bar">
      <nav class="nav">
        <div> <a href="" class="nav_logo"> <i class="bx bx-cube nav_logo-icon"></i> <span
              class="nav_logo-name">${language.mccontroller_name}</span> </a>
          <div class="nav_list"> ${nav_list}${dash_nav_side} <a href="/dashboard/logout/" class="nav_link"> <i class="bx bx-log-out nav_icon"></i> <span
          class="nav_name">${language.nav_side.logout}</span> </a> </div>
        </div>
      </nav>
    </div>
  </main>
  <main id="app_body" style="display: none; width: 100%; height: auto; margin: 17px;">
  <div class="row row-cols-1 row-cols-lg-2">
    <div class="col pb-2 mt-3">
    <div style="margin-top: 20px;" class="card bg-dark">
        <div style="color:White;" class="card-header"><i class="bx bx-lock-open-alt"></i> ${language.access_page.access}</div>
        <div style="color:White;" class="card-body">
        <h4>${language.access_page.add_access}</h4>
        <div style="color:Black;" class="form-floating mb-3">
            <input type="text" class="form-control" id="add_username" name="add_username"
                placeholder="${language.access_page.add_username}">
            <label for="add_username">${language.access_page.add_username}</label>
        </div>
        <div style="color:Black;" class="form-floating mb-3">
            <input type="password" class="form-control" id="add_password" name="add_password"
                placeholder="${language.access_page.add_password}">
            <label for="add_password">${language.access_page.add_password}</label>
        </div>
        <h4 id="access_level">${language.access_page.access_level_permission}: NaN</h4>
        <div class="d-flex justify-content-between">
            <div class="form-check form-switch">
                <input class="form-check-input mb-3" type="checkbox" value="false"
                    id="access_2">
                <label class="form-check-label" for="access_2">${language.access_level_permission.server}</label>
            </div>
            <div class="form-check form-switch">
                <input class="form-check-input mb-3" type="checkbox" value="false"
                    id="access_3">
                <label class="form-check-label" for="access_3">${language.access_level_permission.options}</label>
            </div>
          </div>
          <div class="d-flex justify-content-between">
            <div class="form-check form-switch">
                <input class="form-check-input mb-3" type="checkbox" value="false"
                    id="access_4">
                <label class="form-check-label" for="access_4">${language.access_level_permission.console}</label>
            </div>
            <div class="form-check form-switch">
                <input class="form-check-input mb-3" type="checkbox" value="false"
                    id="access_5">
                <label class="form-check-label" for="access_5">${language.access_level_permission.log}</label>
            </div>
          </div>
          <div class="d-flex justify-content-between">
            <div class="form-check form-switch">
                <input class="form-check-input mb-3" type="checkbox" value="false"
                    id="access_6">
                <label class="form-check-label" for="access_6">${language.access_level_permission.plugins}</label>
            </div>
            <div class="form-check form-switch">
                <input class="form-check-input mb-3" type="checkbox" value="false"
                    id="access_7">
                <label class="form-check-label" for="access_7">${language.access_level_permission.general_settings}</label>
            </div>
          </div>
          <div class="d-flex justify-content-between">
            <div class="form-check form-switch">
                <input class="form-check-input mb-3" type="checkbox" value="false"
                    id="access_8">
                <label class="form-check-label" for="access_8">${language.access_level_permission.addons}</label>
            </div>
            <div class="form-check form-switch">
                <input class="form-check-input mb-3" type="checkbox" value="false"
                    id="access_9">
                <label class="form-check-label" for="access_9">${language.access_level_permission.profile}</label>
            </div>
          </div>
          <div class="d-flex justify-content-between">
            <div class="form-check form-switch">
                <input class="form-check-input mb-3" type="checkbox" value="false"
                    id="access_1">
                <label class="form-check-label" for="access_1">${language.access_level_permission.administrator}</label>
            </div>
          </div>
        <div class="d-grid">
            <button onclick="add_access();" class="btn btn-primary btn-login text-uppercase fw-bold"
            type="submit">${language.access_page.add_access_button}</button>
        </div>
        <hr class="my-4">
        <table class="table table-light">
        <thead>
          <tr>
            <th scope="col">${language.access_page.username_table}</th>
            <th scope="col">${language.access_page.level_permission_table}</th>
          </tr>
        </thead>
        <tbody>
          ${access_table}
        </tbody>
        </table>
        </div>
    </div>
    </div>
    <div class="col pb-2 mt-3">
    <div style="margin-top: 20px;" class="card bg-dark">
        <div style="color:White;" class="card-header"><i class="bx bx-lock-open-alt"></i> ${language.access_page.remove_access}</div>
        <div style="color:White;" class="card-body">
        <h4>${language.access_page.remove_access_sub}</h4>
        <div style="color:Black;" class="form-floating mb-3">
            <input type="text" class="form-control" id="rm_username" name="rm_username"
                placeholder="${language.access_page.remove_access_username}">
            <label for="rm_username">${language.access_page.remove_access_username}</label>
        </div>
        <div class="d-grid">
            <button onclick="remove_access();" class="btn btn-danger btn-login text-uppercase fw-bold"
            type="submit">${language.access_page.remove_access_button}</button>
        </div>
        </div>
        </div>
    </div>
    </div>
  </main>
  <script type="text/javascript" src="/static/js/bootstrap.bundle.min.js"></script>
  <script type="text/javascript" src="/static/js/jquery-3.6.0.js"></script>
  <script type="text/javascript" src="/static/js/socket.io.js"></script>
  <script type="text/javascript" src="/static/js/chart.js"></script>
  <script type="text/javascript" src="/static/js/loader.js"></script>
  <script type="text/javascript">
  ${access_script}
  </script>
</body>
</html>`);
                                            });
                                          });
                                        } else {
                                          res.send('<script>window.location.replace("/dashboard/server/");</script>');
                                        }
                                      } else {
                                        length_files++;
                                        if (files.length == length_files) {
                                          if (req.ipInfo.ip != '::1') {
                                            fs.appendFile('./data/blacklist_ip.ydb', `\n${req.ipInfo.ip}`, function () {
                                              res.send('<script>window.location.replace("/login/?errorcode=101");</script>');
                                            });
                                            setTimeout(() => {
                                              fs.readFile('./data/blacklist_ip.ydb', 'utf8', function (err, data) {
                                                let new_data = data.replace(`\n${req.ipInfo.ip}`, '');
                                                fs.writeFileSync('./data/blacklist_ip.ydb', `${new_data}`);
                                              });
                                            }, 10000);
                                          } else {
                                            res.send('<script>window.location.replace("/login/?errorcode=101");</script>');
                                          }
                                        }
                                      }
                                    });
                                  });
                                });
                              } else {
                                if (req.ipInfo.ip != '::1') {
                                  fs.appendFile('./data/blacklist_ip.ydb', `\n${req.ipInfo.ip}`, function () {
                                    res.send('<script>window.location.replace("/login/?errorcode=101");</script>');
                                  });
                                  setTimeout(() => {
                                    fs.readFile('./data/blacklist_ip.ydb', 'utf8', function (err, data) {
                                      let new_data = data.replace(`\n${req.ipInfo.ip}`, '');
                                      fs.writeFileSync('./data/blacklist_ip.ydb', `${new_data}`);
                                    });
                                  }, 10000);
                                } else {
                                  res.send('<script>window.location.replace("/login/?errorcode=101");</script>');
                                }
                              }
                            }
                          }
                        });
                        app.get('*', function (req, res) {
                          if (connection_type == 'private') {
                            if (req.ipInfo.ip != '::1') {
                              return;
                            }
                          }
                          if (loadui == 'on') {
                            res.send(html_loader);
                          } else {
                            if (blacklist_ip.includes(`${req.ipInfo.ip}`) == true) {
                              res.status(403).send(html_error_403);
                            } else {
                              res.status(404).send(html_error_404);
                            }
                          }
                        });
                        app.post('*', function (req, res) {
                          if (connection_type == 'private') {
                            if (req.ipInfo.ip != '::1') {
                              return;
                            }
                          }
                          if (loadui == 'on') {
                            res.send(html_loader);
                          } else {
                            if (blacklist_ip.includes(`${req.ipInfo.ip}`) == true) {
                              res.status(403).send(html_error_403);
                            } else {
                              res.status(404).send(html_error_404);
                            }
                          }
                        });
                        if (multipleips == "false") {
                          server.listen(webserver_port, () => {
                            loger('--------------------------------------------', 1, 2);
                            loger('Mc Controler Yellow Team ©', 1, 1);
                            loger('Server listening!', 1, 1);
                            loger(`Web Server Address ${use_ssl}://${webserver_ip}:${webserver_port}/`, 1, 1);
                            loger('--------------------------------------------', 1, 2);
                            Load_addons();
                          });
                        } else {
                          if (multipleips == "true") {
                            server.listen(webserver_port, webserver_ip, () => {
                              loger('--------------------------------------------', 1, 2);
                              loger('Mc Controler Yellow Team ©', 1, 1);
                              loger('Server listening!', 1, 1);
                              loger(`Web Server Address ${use_ssl}://${webserver_ip}:${webserver_port}/`, 1, 1);
                              loger('--------------------------------------------', 1, 2);
                              Load_addons();
                            });
                          }
                        }
                        function Load_addons() {
                          login_head = '';
                          login_main = '';
                          login_script = '';
                          dash_head = '';
                          dash_main = '';
                          dash_nav = '';
                          dash_nav_side = '';
                          dash_script = '';
                          home_html = '';
                          fs.readdir("./addons/", (err, files) => {
                            files.forEach(file => {
                              const is_addon = file.split(".")[1];
                              if (is_addon == 'addon') {
                                fs.readFile(`./addons/${file}`, 'utf8', function (err, data) {
                                  let addon_js = data;
                                  data = data.split("//Disable");
                                  if (data.length == 1) {
                                    const addonname = file.split(".")[0];
                                    loger(`Loading Addon: [${addonname}]`, 1, 2);
                                    addon_js = addon_js.replaceAll('let ', `let ${addonname}_`);
                                    addon_js = addon_js.replaceAll('const ', `const ${addonname}_`);
                                    addon_js = addon_js.replaceAll('var ', `var ${addonname}_`);
                                    addon_js = addon_js.replaceAll('function ', `function ${addonname}_`);
                                    eval(`${addon_js}`);
                                  } else {
                                    const addonname = file.split(".")[0];
                                    loger(`Loading Addon: [${addonname}] [Disable]`, 1, 3);
                                  }
                                });
                              }
                            });
                          });
                        }
                      }
                    });

                  });
                }
              });
            });
          }
        });
      });
    });
  });
});

function anti_data_storage_injection_realstring(data, callback) {
  data = data.replaceAll('"', '');
  callback(data);
}

function update_this_data(datajson, callback) {
  setup = datajson.setup;
  app_language = datajson.app_language;
  min_ram = datajson.min_ram;
  max_ram = datajson.max_ram;
  version = datajson.version;
  servername = datajson.server_name;
  software = datajson.software;
  connection_type = datajson.connection_type;
  if (connection_type == 'public') {
    address_shared = `<span class="badge bg-secondary">Shared Address: ${use_ssl}://${webserver_ip}:${webserver_port}/</span>`;
  } else {
    address_shared = '';
  }
  eula = datajson.eula;
  serverport = datajson.port;
  app_version = datajson.app_version;
  blacklist_ip = datajson.blacklist_ip;
  server_conf_motd = datajson.server_conf_motd;
  server_conf_spawn_protection = datajson.server_conf_spawn_protection;
  server_conf_slots = datajson.server_conf_slots;
  server_conf_gamemode = datajson.server_conf_gamemode;
  server_conf_difficulty = datajson.server_conf_difficulty;
  server_conf_whitelist = datajson.server_conf_whitelist;
  server_conf_cracked = datajson.server_conf_cracked;
  server_conf_pvp = datajson.server_conf_pvp;
  server_conf_commandblocks = datajson.server_conf_commandblocks;
  server_conf_fly = datajson.server_conf_fly;
  server_conf_animals = datajson.server_conf_animals;
  server_conf_monster = datajson.server_conf_monster;
  server_conf_villagers = datajson.server_conf_villagers;
  server_conf_force_gamemode = datajson.server_conf_force_gamemode;
  server_conf_nether = datajson.server_conf_nether;
  server_conf_resource_pack_url = datajson.server_conf_resource_pack_url;
  if (setup == 1) {
    if (app_language != undefined && app_language != '') {
      language = require(`./languages/${app_language}.json`);
      static_htmls_get('101', function (callback_data) {
        html_error_403 = callback_data;
        static_htmls_get('102', function (callback_data) {
          html_error_404 = callback_data;
          static_htmls_get('103', function (callback_data) {
            html_loader = callback_data;
            static_htmls_get('104', function (callback_data) {
              html_socket_disconnect = callback_data;
              callback({ 'status': 'true' });
            });
          });
        });
      });
    }
  } else {
    callback({ 'status': 'true' });
  }
}

function debug(callback) {
  if (!fs.existsSync('./data/users')) {
    fs.mkdirSync('./data/users');
  }
  if (!fs.existsSync('./addons')) {
    fs.mkdirSync('./addons');
  }
  if (!fs.existsSync('./server/logs')) {
    fs.mkdirSync('./server/logs');
  }
  loger('Checking DLL ...', 1, 2);
  request.get('http://dll.yservices.ir/', (error, resp, body) => {
    if (error || body == undefined || body == '{"status":"off"}') {
      loger("Can't connect to server", 3, 3);
      loger('Working [Offline]', 1, 3);
      callback({ 'status': 'true' });
    } else {
      loger('Working [ONLINE]', 1, 1);
      callback({ 'status': 'true' });
    }
  });
}

function loger(log, alert, color) {
  let date_ob = new Date();
  let date = ("0" + date_ob.getDate()).slice(-2);
  let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
  let year = date_ob.getFullYear();
  let hours = date_ob.getHours();
  let minutes = date_ob.getMinutes();
  let seconds = date_ob.getSeconds();
  if (alert == 1) {
    if (color == 1) {
      console.log("[" + year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds + "]" + "[INFO]".blue + ": " + log.green);
    }
    if (color == 2) {
      console.log("[" + year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds + "]" + "[INFO]".blue + ": " + log.yellow);
    }
    if (color == 3) {
      console.log("[" + year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds + "]" + "[INFO]".blue + ": " + log.red);
    }
    fs.appendFile('./data/logs/log.log', "\n[" + year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds + "]" + "[INFO]" + ": " + log, function () { });
  }
  if (alert == 2) {
    if (color == 1) {
      console.log("[" + year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds + "]" + "[WARN]".yellow + ": " + log.green);
    }
    if (color == 2) {
      console.log("[" + year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds + "]" + "[WARN]".yellow + ": " + log.yellow);
    }
    if (color == 3) {
      console.log("[" + year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds + "]" + "[WARN]".yellow + ": " + log.red);
    }
    fs.appendFile('./data/logs/log.log', "\n[" + year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds + "]" + "[WARN]" + ": " + log, function () { });
  }
  if (alert == 3) {
    if (color == 1) {
      console.log("[" + year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds + "]" + "[ERROR]".red + ": " + log.green);
    }
    if (color == 2) {
      console.log("[" + year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds + "]" + "[ERROR]".red + ": " + log.yellow);
    }
    if (color == 3) {
      console.log("[" + year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds + "]" + "[ERROR]".red + ": " + log.red);
    }
    fs.appendFile('./data/logs/log.log', "\n[" + year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds + "]" + "[ERROR]" + ": " + log, function () { });
  }
  const log_stats = fs.statSync("./data/logs/log.log");
  if (log_stats.size > 248000) {
    console.log("[" + year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds + "]" + "[INFO]".blue + ": " + 'The report file has reached the last storage limit. Changing the file ...'.yellow);
    fs.rename('./data/logs/log.log', `./data/logs/log[${year}-${month}-${date}][${hours}h-${minutes}m-${seconds}s].log`, (err) => {
      if (err) {
        fs.writeFileSync('./data/logs/log.log', `[${year}-${month}-${date}][${hours}h-${minutes}m-${seconds}s][INFO]: Removed!`);
        loger('Changing File Field Remove Old Log Data ...', 3, 3);
        loger('Done!', 1, 1);
      } else {
        fs.writeFile('./data/logs/log.log', `[${year}-${month}-${date}][${hours}h-${minutes}m-${seconds}s][INFO]: New Log File Created!`, function (err) {
          if (err) {
            loger('Field!', 3, 3);
          } else {
            loger('Done!', 1, 1);
          }
        });
      }
    });
  }
}

function nav_side_get(level_permission, location, callback) {
  let nav_list = '';
  if (level_permission.includes('2') == true || level_permission.includes('1') == true) {
    let active = '';
    if (location == 'server') active = ' active';
    nav_list = nav_list + '<a href="/dashboard/server/" id="side_server" class="nav_link' + active + '"> <i class="bx bx-power-off nav_icon"></i> <span class="nav_name">' + language.nav_side.server + '</span> </a>';
  }
  if (level_permission.includes('3') == true || level_permission.includes('1') == true) {
    let active = '';
    if (location == 'options') active = ' active';
    nav_list = nav_list + '<a href="/dashboard/options/" id="side_options" class="nav_link' + active + '"> <i class="bx bx-slider-alt nav_icon"></i><span class="nav_name">' + language.nav_side.options + '</span> </a>';
  }
  if (level_permission.includes('4') == true || level_permission.includes('1') == true) {
    let active = '';
    if (location == 'console') active = ' active';
    nav_list = nav_list + '<a href="/dashboard/console/" id="side_console" class="nav_link' + active + '"> <i class="bx bx-terminal nav_icon"></i> <span class="nav_name">' + language.nav_side.console + '</span> </a>';
  }
  if (level_permission.includes('5') == true || level_permission.includes('1') == true) {
    let active = '';
    if (location == 'log') active = ' active';
    nav_list = nav_list + '<a href="/dashboard/log/" id="side_log" class="nav_link' + active + '"> <i class="bx bx-file nav_icon"></i> <span class="nav_name">' + language.nav_side.log + '</span></a>';
  }
  if (level_permission.includes('6') == true || level_permission.includes('1') == true) {
    let active = '';
    if (location == 'plugins') active = ' active';
    nav_list = nav_list + '<a href="/dashboard/plugins/" id="side_plugins" class="nav_link' + active + '"> <i class="bx bx-extension nav_icon"></i> <span class="nav_name">' + language.nav_side.plugins + '</span></a>';
  }
  if (level_permission.includes('7') == true || level_permission.includes('1') == true) {
    let active = '';
    if (location == 'general_settings') active = ' active';
    nav_list = nav_list + '<a href="/dashboard/general_settings/" id="side_general_settings" class="nav_link' + active + '"> <i class="bx bx-cog nav_icon"></i> <span class="nav_name">' + language.nav_side.general_settings + '</span> </a>';
  }
  if (level_permission.includes('8') == true || level_permission.includes('1') == true) {
    let active = '';
    if (location == 'addons') active = ' active';
    nav_list = nav_list + '<a href="/dashboard/addons/" id="side_addons" class="nav_link' + active + '"> <i class="bx bx-briefcase nav_icon"></i> <span class="nav_name">' + language.nav_side.addons + '</span> </a>';
  }
  if (level_permission.includes('9') == true || level_permission.includes('1') == true) {
    let active = '';
    if (location == 'profile') active = ' active';
    nav_list = nav_list + '<a href="/dashboard/profile/" id="side_profile" class="nav_link' + active + '"> <i class="bx bx-user nav_icon"></i> <span class="nav_name">' + language.nav_side.profile + '</span> </a>';
  }
  if (level_permission.includes('1') == true) {
    let active = '';
    if (location == 'access') active = ' active';
    nav_list = nav_list + '</a><a href="/dashboard/access/" id="side_access" class="nav_link' + active + '"> <i class="bx bx-lock-open-alt nav_icon"></i> <span class="nav_name">' + language.nav_side.access + '</span> </a>';
  }
  callback(nav_list);
}

function obfuscator_get(javascript, callback) {
  const obfuscator_options = {
    compact: false,
    controlFlowFlattening: true,
    controlFlowFlatteningThreshold: 1,
    numbersToExpressions: true,
    simplify: true,
    stringArrayShuffle: true,
    splitStrings: true,
    stringArrayThreshold: 1
  };
  const obfuscationResult = JavaScriptObfuscator.obfuscate(javascript, obfuscator_options);
  callback(obfuscationResult.getObfuscatedCode());
}

function static_htmls_get(html_id, callback) {
  let data = '';
  if (html_id == '101') {
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
  if (html_id == '102') {
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
  if (html_id == '103') {
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
  if (html_id == '104') {
    data = `<main id="app_disconnect" class="center" style="display: none;">
  <center>
      <h1 style="color: white;">${language.socket_disconnect_page.socket_disconnect}</h1>
      <button style="margin-top: 15px;" class="btn btn-primary" onclick="window.location.reload();">${language.socket_disconnect_page.reload_for_reconnect_button}</button>
  </center>
</main>`;
  }
  callback(data);
}

function static_load(callback) {
  loger('Please wait while reading Static Files', 1, 2);
  app.use('/static/boxicons', express.static('static/boxicons'));
  loger('Loading: [static/boxicons]', 1, 1);
  app.use('/static/css', express.static('static/css'));
  loger('Loading: [static/css]', 1, 1);
  app.use('/static/images', express.static('static/images'));
  loger('Loading: [static/images]', 1, 1);
  app.use('/static/server-icon.png', express.static('./server/server-icon.png'));
  loger('Loading: [static/server-icon.png]', 1, 1);
  app.use('/static/js', express.static('static/js'));
  loger('Loading: [static/js]', 1, 1);
  callback({ 'status': 'true' });
}

function update_data_update(callback) {
  let json_callback = {};
  fs.readFile('./data/setup.ydb', 'utf8', function (err, data) {
    datajson = JSON.parse(data);
    json_callback['setup'] = datajson.setup;
    json_callback['app_language'] = datajson.language;
    json_callback['min_ram'] = datajson.min_ram;
    json_callback['max_ram'] = datajson.max_ram;
    json_callback['version'] = datajson.version;
    json_callback['server_name'] = datajson.server_name;
    json_callback['software'] = datajson.software;
    json_callback['connection_type'] = datajson.connection_type;
    json_callback['eula'] = datajson.eula;
    json_callback['port'] = datajson.port;
    fs.readFile('./data/version.ydb', 'utf8', function (err, data) {
      datajson = JSON.parse(data);
      json_callback['app_version'] = datajson.version;
      fs.readFile('./data/blacklist_ip.ydb', 'utf8', function (err, data) {
        json_callback['blacklist_ip'] = data.split("\n");
        fs.readFile('./data/server_conf.ydb', 'utf8', function (err, server_conf_data) {
          server_conf_datajson = JSON.parse(server_conf_data);
          json_callback['server_conf_motd'] = server_conf_datajson.motd;
          json_callback['server_conf_spawn_protection'] = server_conf_datajson.spawn_protection;
          json_callback['server_conf_slots'] = server_conf_datajson.slots;
          json_callback['server_conf_gamemode'] = server_conf_datajson.gamemode;
          json_callback['server_conf_difficulty'] = server_conf_datajson.difficulty;
          json_callback['server_conf_whitelist'] = server_conf_datajson.whitelist;
          json_callback['server_conf_cracked'] = server_conf_datajson.cracked;
          json_callback['server_conf_pvp'] = server_conf_datajson.pvp;
          json_callback['server_conf_commandblocks'] = server_conf_datajson.commandblocks;
          json_callback['server_conf_fly'] = server_conf_datajson.fly;
          json_callback['server_conf_animals'] = server_conf_datajson.animals;
          json_callback['server_conf_monster'] = server_conf_datajson.monster;
          json_callback['server_conf_villagers'] = server_conf_datajson.villagers;
          json_callback['server_conf_force_gamemode'] = server_conf_datajson.force_gamemode;
          json_callback['server_conf_nether'] = server_conf_datajson.nether;
          json_callback['server_conf_resource_pack_url'] = server_conf_datajson.resource_pack_url;
          const blacklist_ip_stats = fs.statSync('./data/blacklist_ip.ydb');
          let blacklist_ip_fileSizeInBytes = blacklist_ip_stats.size;
          let blacklist_ip_fileSizeInMegabytes = blacklist_ip_fileSizeInBytes / 1024;
          if (blacklist_ip_fileSizeInMegabytes > 30) {
            fs.writeFileSync('data/blacklist_ip.ydb', '123.123.123.123\n124.124.124.124');
            loger('The blacklist ip was removed to prevent damage', 1, 3);
          }
          callback(json_callback);
        });
      });
    });
  });
}
