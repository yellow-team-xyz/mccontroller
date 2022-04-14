const fs = require('fs');
const colors = require('colors');
const download = require('download');
const request = require('request');
const lib = require('./index.js');
exports.debugdone = 0;
lib.console_log('Checking API ...',1,2);
request.get('https://api.yellow-team.ir/', (error, resp, body) => {
    if (body == undefined || body == '{"status":"off"}') {
        lib.console_log("Can't connect to server",3,3);
        lib.console_log('Working [Offline]',1,3);
        exports.debugdone = 1;
    } else {
        lib.console_log('Checking DLL ...',1,2);
        request.get('http://dll.yellow-team.ir/', (error, resp, body) => {
            if (body == undefined || body == '{"status":"off"}') {
                lib.console_log("Can't connect to server",3,3);
                lib.console_log('Working [Offline]',1,3);
                exports.debugdone = 1;
            } else {
                lib.console_log('Starting Debugging ...[ONLINE]',1,1);
                if (fs.existsSync(`./addons/yellow-team-official.js`)) {
                    request.get('http://dll.yellow-team.ir/dll/addons/yellow-team-official.js', (error, resp, body) => {
                        if (error) {
                            lib.console_log('Update Yellow-Team-Official Addon Error!',3,3);
                            deb_1();
                        }
                        fs.writeFile(`./addons/yellow-team-official.js`, body, 'utf-8', function (err, data) {
                            lib.console_log('Update Yellow-Team-Official Addon Done!',1,1);
                            deb_1();
                        });
                    });
                } else {
                    request.get('http://dll.yellow-team.ir/dll/addons/yellow-team-official.js', (error, resp, body) => {
                        if (error) {
                            lib.console_log('Install Yellow-Team-Official Addon Error!',3,3);
                            deb_1();
                        }
                        fs.writeFile(`./addons/yellow-team-official.js`, body, 'utf-8', function (err, data) {
                            lib.console_log('Install Yellow-Team-Official Addon Done!',1,1);
                            deb_1();
                        });
                    });
                }
            }
        });
    }
});
function deb_1() {
    if (fs.existsSync(`./package.json`)) {
        lib.console_log('Start Checking [0/25]',1,2);
        deb_2();
    } else {
        lib.console_log('[1/25] file not found please wait',1,2);
        (async () => {
            lib.console_log('Start Downloading | ',1,2 + `Debugging [1/25]`,1,1);
            fs.writeFileSync(`./package.json`, await download('https://api.yellow-team.ir/dll/mccontroler/package.json'));
            lib.console_log('Downloading Done! [1/25]',1,1);
            deb_2();
        })();
    }
}
function deb_2() {
    if (fs.existsSync(`./package-lock.json`)) {
        deb_3();
    } else {
        lib.console_log('[2/25] file not found please wait',1,2);
        (async () => {
            lib.console_log('Start Downloading | ',1,2 + `Debugging [2/25]`,1,1);
            fs.writeFileSync(`./package-lock.json`, await download('https://api.yellow-team.ir/dll/mccontroler/package-lock.json'));
            lib.console_log('Downloading Done! [2/25]',1,1);
            deb_3();
        })();
    }
}
function deb_3() {
    if (fs.existsSync(`./index.js`)) {
        deb_4();
    } else {
        lib.console_log('[3/25] file not found please wait',1,2);
        (async () => {
            lib.console_log('Start Downloading | ',1,2 + 'Debugging [3/25]',1,1);
            fs.writeFileSync(`./index.js`, await download('https://api.yellow-team.ir/dll/mccontroler/index.js'));
            lib.console_log('Downloading Done! [3/25]',1,1);
            deb_4();
        })();
    }
}
function deb_4() {
    if (fs.existsSync(`./config.yco`)) {
        deb_5();
    } else {
        lib.console_log('[4/25] file not found please wait',1,2);
        (async () => {
            lib.console_log('Start Downloading | ',1,2 + `Debugging [4/25]`,1,1);
            fs.writeFileSync(`./config.yco`, await download('https://api.yellow-team.ir/dll/mccontroler/config.yco'));
            lib.console_log('Downloading Done! [4/25]',1,1);
            deb_5();
        })();
    }
}
function deb_5() {
    if (fs.existsSync(`./server/software/feathermc/downloads.txt`)) {
        deb_6();
    } else {
        lib.console_log('[5/25] file not found please wait',1,2);
        (async () => {
            lib.console_log('Start Downloading | ',1,2 + `Debugging [5/25]`,1,1);
            fs.writeFileSync(`./server/software/feathermc/downloads.txt`, await download('https://api.yellow-team.ir/dll/mccontroler/server/software/feathermc/downloads.txt'));
            lib.console_log('Downloading Done! [5/25]',1,1);
            deb_6();
        })();
    }
}
function deb_6() {
    if (fs.existsSync(`./server/software/paper/downloads.txt`)) {
        deb_7();
    } else {
        lib.console_log('[6/25] file not found please wait',1,2);
        (async () => {
            lib.console_log('Start Downloading | ',1,2 + `Debugging [6/25]`,1,1);
            fs.writeFileSync(`./server/software/paper/downloads.txt`, await download('https://api.yellow-team.ir/dll/mccontroler/server/software/paper/downloads.txt'));
            lib.console_log('Downloading Done! [6/25]',1,1);
            deb_7();
        })();
    }
}
function deb_7() {
    if (fs.existsSync(`./server/software/spigot/downloads.txt`)) {
        deb_8();
    } else {
        lib.console_log('[7/25] file not found please wait',1,2);
        (async () => {
            lib.console_log('Start Downloading | ',1,2 + `Debugging [7/25]`,1,1);
            fs.writeFileSync(`./server/software/spigot/downloads.txt`, await download('https://api.yellow-team.ir/dll/mccontroler/server/software/spigot/downloads.txt'));
            lib.console_log('Downloading Done! [7/25]',1,1);
            deb_8();
        })();
    }
}
function deb_8() {
    if (fs.existsSync(`./server/server.properties`)) {
        deb_9();
    } else {
        lib.console_log('[8/25] file not found please wait',1,2);
        (async () => {
            lib.console_log('Start Downloading | ',1,2 + `Debugging [8/25]`,1,1);
            fs.writeFileSync(`./server/server.properties`, await download('https://api.yellow-team.ir/dll/mccontroler/server/server.properties'));
            lib.console_log('Downloading Done! [8/25]',1,1);
            deb_9();
        })();
    }
}
function deb_9() {
    if (fs.existsSync(`./server/eula.txt`)) {
        deb_10();
    } else {
        lib.console_log('[9/25] file not found please wait',1,2);
        (async () => {
            lib.console_log('Start Downloading | ',1,2 + `Debugging [9/25]`,1,1);
            fs.writeFileSync(`./server/eula.txt`, await download('https://api.yellow-team.ir/dll/mccontroler/server/eula.txt'));
            lib.console_log('Downloading Done! [9/25]',1,1);
            deb_10();
        })();
    }
}
function deb_10() {
    if (fs.existsSync(`./server/server-icon.png`)) {
        deb_11();
    } else {
        lib.console_log('[10/25] file not found please wait',1,2);
        (async () => {
            lib.console_log('Start Downloading | ',1,2 + `Debugging [10/25]`,1,1);
            fs.writeFileSync(`./server/server-icon.png`, await download('https://api.yellow-team.ir/dll/mccontroler/server/server-icon.png'));
            lib.console_log('Downloading Done! [10/25]',1,1);
            deb_11();
        })();
    }
}
function deb_11() {
    if (fs.existsSync(`./data/blacklist_ip.ydb`)) {
        deb_12();
    } else {
        lib.console_log('[11/25] file not found please wait',1,2);
        (async () => {
            lib.console_log('Start Downloading | ',1,2 + `Debugging [11/25]`,1,1);
            fs.writeFileSync(`./data/blacklist_ip.ydb`, await download('https://api.yellow-team.ir/dll/mccontroler/data/blacklist_ip.ydb'));
            lib.console_log('Downloading Done! [11/25]',1,1);
            deb_12();
        })();
    }
}
function deb_12() {
    if (fs.existsSync(`./data/server_conf.ydb`)) {
        deb_13();
    } else {
        lib.console_log('[12/25] file not found please wait',1,2);
        (async () => {
            lib.console_log('Start Downloading | ',1,2 + `Debugging [12/25]`,1,1);
            fs.writeFileSync(`./data/server_conf.ydb`, await download('https://api.yellow-team.ir/dll/mccontroler/data/server_conf.ydb'));
            lib.console_log('Downloading Done! [12/25]',1,1);
            deb_13();
        })();
    }
}
function deb_13() {
    if (fs.existsSync(`./data/setup.ydb`)) {
        deb_14();
    } else {
        lib.console_log('[13/25] file not found please wait',1,2);
        (async () => {
            lib.console_log('Start Downloading | ',1,2 + `Debugging [13/25]`,1,1);
            fs.writeFileSync(`./data/setup.ydb`, await download('https://api.yellow-team.ir/dll/mccontroler/data/setup.ydb'));
            lib.console_log('Downloading Done! [13/25]',1,1);
            deb_14();
        })();
    }
}
function deb_14() {
    if (fs.existsSync(`./static/img/logo.png`)) {
        deb_15();
    } else {
        lib.console_log('[14/25] file not found please wait',1,2);
        (async () => {
            lib.console_log('Start Downloading | ',1,2 + `Debugging [14/25]`,1,1);
            fs.writeFileSync(`./static/img/logo.png`, await download('https://api.yellow-team.ir/dll/mccontroler/static/img/logo.png'));
            lib.console_log('Downloading Done! [14/25]',1,1);
            deb_15();
        })();
    }
}
function deb_15() {
    if (fs.existsSync(`./static/css/bootstrap.min.css`)) {
        deb_16();
    } else {
        lib.console_log('[15/25] file not found please wait',1,2);
        (async () => {
            lib.console_log('Start Downloading | ',1,2 + `Debugging [15/25]`,1,1);
            fs.writeFileSync(`./static/css/bootstrap.min.css`, await download('https://api.yellow-team.ir/dll/mccontroler/static/css/bootstrap.min.css'));
            lib.console_log('Downloading Done! [15/25]',1,1);
            deb_16();
        })();
    }
}
function deb_16() {
    if (fs.existsSync(`./static/css/bootstrap.min.css.map`)) {
        deb_17();
    } else {
        lib.console_log('[16/25] file not found please wait',1,2);
        (async () => {
            lib.console_log('Start Downloading | ',1,2 + `Debugging [16/25]`,1,1);
            fs.writeFileSync(`./static/css/bootstrap.min.css.map`, await download('https://api.yellow-team.ir/dll/mccontroler/static/css/bootstrap.min.css.map'));
            lib.console_log('Downloading Done! [16/25]',1,1);
            deb_17();
        })();
    }
}
function deb_17() {
    if (fs.existsSync(`./static/css/error.css`)) {
        deb_18();
    } else {
        lib.console_log('[17/25] file not found please wait',1,2);
        (async () => {
            lib.console_log('Start Downloading | ',1,2 + `Debugging [17/25]`,1,1);
            fs.writeFileSync(`./static/css/error.css`, await download('https://api.yellow-team.ir/dll/mccontroler/static/css/error.css'));
            lib.console_log('Downloading Done! [17/25]',1,1);
            deb_18();
        })();
    }
}
function deb_18() {
    if (fs.existsSync(`./static/css/load.css`)) {
        deb_19();
    } else {
        lib.console_log('[18/25] file not found please wait',1,2);
        (async () => {
            lib.console_log('Start Downloading | ',1,2 + `Debugging [18/25]`,1,1);
            fs.writeFileSync(`./static/css/load.css`, await download('https://api.yellow-team.ir/dll/mccontroler/static/css/load.css'));
            lib.console_log('Downloading Done! [18/25]',1,1);
            deb_19();
        })();
    }
}
function deb_19() {
    if (fs.existsSync(`./static/js/bootstrap.bundle.min.js`)) {
        deb_20();
    } else {
        lib.console_log('[19/25] file not found please wait',1,2);
        (async () => {
            lib.console_log('Start Downloading | ',1,2 + `Debugging [19/25]`,1,1);
            fs.writeFileSync(`./static/js/bootstrap.bundle.min.js`, await download('https://api.yellow-team.ir/dll/mccontroler/static/js/bootstrap.bundle.min.js'));
            lib.console_log('Downloading Done! [19/25]',1,1);
            deb_20();
        })();
    }
}
function deb_20() {
    if (fs.existsSync(`./static/js/chart.js`)) {
        deb_21();
    } else {
        lib.console_log('[20/25] file not found please wait',1,2);
        (async () => {
            lib.console_log('Start Downloading | ',1,2 + `Debugging [20/25]`,1,1);
            fs.writeFileSync(`./static/js/chart.js`, await download('https://api.yellow-team.ir/dll/mccontroler/static/js/chart.js'));
            lib.console_log('Downloading Done! [20/25]',1,1);
            deb_21();
        })();
    }
}
function deb_21() {
    if (fs.existsSync(`./static/js/jquery-3.6.0.js`)) {
        deb_22();
    } else {
        lib.console_log('[21/25] file not found please wait',1,2);
        (async () => {
            lib.console_log('Start Downloading | ',1,2 + `Debugging [21/25]`,1,1);
            fs.writeFileSync(`./static/js/jquery-3.6.0.js`, await download('https://api.yellow-team.ir/dll/mccontroler/static/js/jquery-3.6.0.js'));
            lib.console_log('Downloading Done! [21/25]',1,1);
            deb_22();
        })();
    }
}
function deb_22() {
    if (fs.existsSync(`./static/js/socket.io.js`)) {
        deb_23();
    } else {
        lib.console_log('[22/25] file not found please wait',1,2);
        (async () => {
            lib.console_log('Start Downloading | ',1,2 + `Debugging [22/25]`,1,1);
            fs.writeFileSync(`./static/js/socket.io.js`, await download('https://api.yellow-team.ir/dll/mccontroler/static/js/socket.io.js'));
            lib.console_log('Downloading Done! [22/25]',1,1);
            deb_23();
        })();
    }
}
function deb_23() {
    if (fs.existsSync(`./static/js/socket.io.js.map`)) {
        deb_24();
        lib.console_log('Checking [23/25] Done!',1,1)
    } else {
        lib.console_log('[23/25] file not found please wait',1,2);
        (async () => {
            lib.console_log('Start Downloading | ',1,2 + `Debugging [23/25]`,1,1);
            fs.writeFileSync(`./static/js/socket.io.js.map`, await download('https://api.yellow-team.ir/dll/mccontroler/static/js/socket.io.js.map'));
            lib.console_log('Downloading Done! [23/25]',1,1);
            lib.console_log('Checking [23/25] Done!',1,1)
            deb_24();
        })();
    }
}
function deb_24() {
    if (fs.existsSync(`./data/log.log`)) {
        deb_25();
        lib.console_log('Checking [24/25] Done!',1,1)
    } else {
        lib.console_log('[24/25] file not found please wait',1,2);
        (async () => {
            lib.console_log('Start Downloading | ',1,2 + `Debugging [24/25]`,1,1);
            fs.writeFileSync(`./data/log.log`, await download('https://api.yellow-team.ir/dll/mccontroler/data/log.log'));
            lib.console_log('Downloading Done! [24/25]',1,1);
            lib.console_log('Checking [24/25] Done!',1,1)
            deb_25();
        })();
    } 
}
function deb_25() {
    if (fs.existsSync(`./data/version.ydb`)) {
        exports.debugdone = 1;
        lib.console_log('Checking [25/25] Done!',1,1)
    } else {
        lib.console_log('[25/25] file not found please wait',1,2);
        (async () => {
            lib.console_log('Start Downloading | ',1,2 + `Debugging [25/25]`,1,1);
            fs.writeFileSync(`./data/version.ydb`, await download('https://api.yellow-team.ir/dll/mccontroler/data/version.ydb'));
            lib.console_log('Downloading Done! [25/25]',1,1);
            lib.console_log('Checking [25/25] Done!',1,1)
            exports.debugdone = 1;
        })();
    } 
}
