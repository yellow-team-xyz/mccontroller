const fs = require('fs');
const request = require('request');
const lib = require('../index.js');
const loger = require('../libs/loger.js');
module.exports.debug = (debug);
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
    loger.log('Checking DLL ...', 1, 2);
    request.get('http://dll.yellow-team.ir/', (error, resp, body) => {
        if (body == undefined || body == '{"status":"off"}') {
            loger.log("Can't connect to server", 3, 3);
            loger.log('Working [Offline]', 1, 3);
            callback({ 'status': 'true' });
        } else {
            loger.log('Working [ONLINE]', 1, 1);
            if (lib.get_official_addon == 'true') {
                if (fs.existsSync(`./addons/yellow-team-official.js`)) {
                    request.get('http://dll.yellow-team.ir/dll/mccontroller/addons/yellow-team-official.js', (error, resp, body) => {
                        if (error) {
                            loger.log('Update Yellow-Team-Official Addon Error!', 3, 3);
                            callback({ 'status': 'true' });
                        }
                        fs.writeFile(`./addons/yellow-team-official.js`, body, 'utf-8', function (err, data) {
                            loger.log('Update Yellow-Team-Official Addon Done!', 1, 1);
                            callback({ 'status': 'true' });
                        });
                    });
                } else {
                    request.get('http://dll.yellow-team.ir/dll/mccontroller/addons/yellow-team-official.js', (error, resp, body) => {
                        if (error) {
                            loger.log('Install Yellow-Team-Official Addon Error!', 3, 3);
                            callback({ 'status': 'true' });
                        }
                        fs.writeFile(`./addons/yellow-team-official.js`, body, 'utf-8', function (err, data) {
                            loger.log('Install Yellow-Team-Official Addon Done!', 1, 1);
                            callback({ 'status': 'true' });
                        });
                    });
                }
            } else {
                if (fs.existsSync(`./addons/yellow-team-official.js`)) {
                    fs.writeFile(`./addons/yellow-team-official.js`, '//Disable', 'utf-8', function (err, data) {
                        loger.log('Yellow-Team-Official Addon Disable!', 3, 3);
                        callback({ 'status': 'true' });
                    });
                } else {
                    callback({ 'status': 'true' });
                }
            }
        }
    });
}