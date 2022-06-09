const express = require('express');
const fs = require('fs');
const lib = require('../index.js');
const obfuscator = require('../libs/obfuscator.js');
const loger = require('../libs/loger.js');
module.exports.load = (load);
function load(callback) {
    loger.log('Please wait while reading Static Files',1,2);
    lib.app.use('/static/boxicons', express.static('static/boxicons'));
    loger.log('Loading: [static/boxicons]',1,1);
    lib.app.use('/static/css', express.static('static/css'));
    loger.log('Loading: [static/css]',1,1);
    lib.app.use('/static/images', express.static('static/images'));
    loger.log('Loading: [static/images]',1,1);
    lib.app.use('/static/server-icon.png', express.static('./server/server-icon.png'));
    loger.log('Loading: [static/server-icon.png]',1,1);
    fs.readdir('static/js/', (err, files) => {
        loger.log('Loading: [static/js]',1,2);
        let dir_js_num = 0;
        files.forEach(file => {
            let file_split = file.split('.');
            if (file_split[file_split.length - 1] == 'js') {
                fs.readFile(`static/js/${file}`, 'utf-8', (err, data) => {
                    obfuscator.get(data, function (callback_data) {
                        loger.log(`Loading and Obfuscate js Files: [static/js/${file}]`,1,1);
                        lib.app.get(`/static/js/${file}`, function (req, res) {
                            res.type('application/javascript');
                            res.send(callback_data);
                        });
                        dir_js_num++
                        if(dir_js_num==files.length){
                            loger.log('Loading Static Files Done!',1,1);
                            callback({'status':'true'});
                        }
                    });
                });
            }else{
                dir_js_num++
                if(dir_js_num==files.length){
                    loger.log('Loading Static Files Done!',1,1);
                    callback({'status':'true'});
                }
            }
        });
    });
}