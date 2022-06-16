const express = require('express');
const lib = require('../index.js');
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
    lib.app.use('/static/js', express.static('static/js'));
    loger.log('Loading: [static/js]',1,1);
    callback({'status':'true'});
}