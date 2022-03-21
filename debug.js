const fs = require('fs');
const colors = require('colors');
const download = require('download');
const request = require('request');
exports.debugdone = 0;
console.log('Checking API ...'.yellow);
request.get('http://api.yellow-team.ir/status/', (error, resp, body) => {
    if (body == undefined || body == '{"status":"off"}') {
        console.log("Can't connect to server".red);
        console.log("Working [Offline]".red);
        exports.debugdone = 1;
    } else {
        console.log('Starting Debugging ...'.yellow + '[ONLINE]'.green);
        if (fs.existsSync(`./addons/yellow-team-official.js`)) {
            request.get('http://dll.yellow-team.ir/dll/addons/yellow-team-official.js' , (error, resp, body) => {
                if (error) {
                    console.log('Update Yellow-Team-Official Addon Error!'.red);
                    deb_1();
                }
                fs.writeFile(`./addons/yellow-team-official.js`, body, 'utf-8', function (err, data) {
                    console.log('Update Yellow-Team-Official Addon Done!'.green);
                    deb_1();
                });
            });
        } else {
            request.get('http://dll.yellow-team.ir/dll/addons/yellow-team-official.js' , (error, resp, body) => {
                if (error) {
                    console.log('Install Yellow-Team-Official Addon Error!'.red);
                    deb_1();
                }
                fs.writeFile(`./addons/yellow-team-official.js`, body, 'utf-8', function (err, data) {
                    console.log('Install Yellow-Team-Official Addon Done!'.green);
                    deb_1();
                });
            });
        }
    }
});
function deb_1() {
    if (fs.existsSync(`./package.json`)) {
        console.log('Start Checking [0/23]'.green);
        deb_2();
    } else {
        console.log('[1/23] file not found please wait'.yellow);
        (async () => {
            console.log('Start Downloading | '.yellow + `Debugging [1/23]`.green);
            fs.writeFileSync(`./package.json`, await download('https://api.yellow-team.ir/dll/mccontroler/package.json'));
            console.log('Downloading Done! [1/23]'.green);
            deb_2();
        })();
    }
}
function deb_2() {
    if (fs.existsSync(`./package-lock.json`)) {
        deb_3();
    } else {
        console.log('[2/23] file not found please wait'.yellow);
        (async () => {
            console.log('Start Downloading | '.yellow + `Debugging [2/23]`.green);
            fs.writeFileSync(`./package-lock.json`, await download('https://api.yellow-team.ir/dll/mccontroler/package-lock.json'));
            console.log('Downloading Done! [2/23]'.green);
            deb_3();
        })();
    }
}
function deb_3() {
    if (fs.existsSync(`./index.js`)) {
        deb_4();
    } else {
        console.log('[3/23] file not found please wait'.yellow);
        (async () => {
            console.log('Start Downloading | '.yellow + 'Debugging [3/23]'.green);
            fs.writeFileSync(`./index.js`, await download('https://api.yellow-team.ir/dll/mccontroler/index.js'));
            console.log('Downloading Done! [3/23]'.green);
            deb_4();
        })();
    }
}
function deb_4() {
    if (fs.existsSync(`./config.yco`)) {
        deb_5();
    } else {
        console.log('[4/23] file not found please wait'.yellow);
        (async () => {
            console.log('Start Downloading | '.yellow + `Debugging [4/23]`.green);
            fs.writeFileSync(`./config.yco`, await download('https://api.yellow-team.ir/dll/mccontroler/config.yco'));
            console.log('Downloading Done! [4/23]'.green);
            deb_5();
        })();
    }
}
function deb_5() {
    if (fs.existsSync(`./server/software/feathermc/downloads.txt`)) {
        deb_6();
    } else {
        console.log('[5/23] file not found please wait'.yellow);
        (async () => {
            console.log('Start Downloading | '.yellow + `Debugging [5/23]`.green);
            fs.writeFileSync(`./server/software/feathermc/downloads.txt`, await download('https://api.yellow-team.ir/dll/mccontroler/server/software/feathermc/downloads.txt'));
            console.log('Downloading Done! [5/23]'.green);
            deb_6();
        })();
    }
}
function deb_6() {
    if (fs.existsSync(`./server/software/paper/downloads.txt`)) {
        deb_7();
    } else {
        console.log('[6/23] file not found please wait'.yellow);
        (async () => {
            console.log('Start Downloading | '.yellow + `Debugging [6/23]`.green);
            fs.writeFileSync(`./server/software/paper/downloads.txt`, await download('https://api.yellow-team.ir/dll/mccontroler/server/software/paper/downloads.txt'));
            console.log('Downloading Done! [6/23]'.green);
            deb_7();
        })();
    }
}
function deb_7() {
    if (fs.existsSync(`./server/software/spigot/downloads.txt`)) {
        deb_8();
    } else {
        console.log('[7/23] file not found please wait'.yellow);
        (async () => {
            console.log('Start Downloading | '.yellow + `Debugging [7/23]`.green);
            fs.writeFileSync(`./server/software/spigot/downloads.txt`, await download('https://api.yellow-team.ir/dll/mccontroler/server/software/spigot/downloads.txt'));
            console.log('Downloading Done! [7/23]'.green);
            deb_8();
        })();
    }
}
function deb_8() {
    if (fs.existsSync(`./server/server.properties`)) {
        deb_9();
    } else {
        console.log('[8/23] file not found please wait'.yellow);
        (async () => {
            console.log('Start Downloading | '.yellow + `Debugging [8/23]`.green);
            fs.writeFileSync(`./server/server.properties`, await download('https://api.yellow-team.ir/dll/mccontroler/server/server.properties'));
            console.log('Downloading Done! [8/23]'.green);
            deb_9();
        })();
    }
}
function deb_9() {
    if (fs.existsSync(`./server/eula.txt`)) {
        deb_10();
    } else {
        console.log('[9/23] file not found please wait'.yellow);
        (async () => {
            console.log('Start Downloading | '.yellow + `Debugging [9/23]`.green);
            fs.writeFileSync(`./server/eula.txt`, await download('https://api.yellow-team.ir/dll/mccontroler/server/eula.txt'));
            console.log('Downloading Done! [9/23]'.green);
            deb_10();
        })();
    }
}
function deb_10() {
    if (fs.existsSync(`./server/server-icon.png`)) {
        deb_11();
    } else {
        console.log('[10/23] file not found please wait'.yellow);
        (async () => {
            console.log('Start Downloading | '.yellow + `Debugging [10/23]`.green);
            fs.writeFileSync(`./server/server-icon.png`, await download('https://api.yellow-team.ir/dll/mccontroler/server/server-icon.png'));
            console.log('Downloading Done! [10/23]'.green);
            deb_11();
        })();
    }
}
function deb_11() {
    if (fs.existsSync(`./data/blacklist_ip.ydb`)) {
        deb_12();
    } else {
        console.log('[11/23] file not found please wait'.yellow);
        (async () => {
            console.log('Start Downloading | '.yellow + `Debugging [11/23]`.green);
            fs.writeFileSync(`./data/blacklist_ip.ydb`, await download('https://api.yellow-team.ir/dll/mccontroler/data/blacklist_ip.ydb'));
            console.log('Downloading Done! [11/23]'.green);
            deb_12();
        })();
    }
}
function deb_12() {
    if (fs.existsSync(`./data/server_conf.ydb`)) {
        deb_13();
    } else {
        console.log('[12/23] file not found please wait'.yellow);
        (async () => {
            console.log('Start Downloading | '.yellow + `Debugging [12/23]`.green);
            fs.writeFileSync(`./data/server_conf.ydb`, await download('https://api.yellow-team.ir/dll/mccontroler/data/server_conf.ydb'));
            console.log('Downloading Done! [12/23]'.green);
            deb_13();
        })();
    }
}
function deb_13() {
    if (fs.existsSync(`./data/setup.ydb`)) {
        deb_14();
    } else {
        console.log('[13/23] file not found please wait'.yellow);
        (async () => {
            console.log('Start Downloading | '.yellow + `Debugging [13/23]`.green);
            fs.writeFileSync(`./data/setup.ydb`, await download('https://api.yellow-team.ir/dll/mccontroler/data/setup.ydb'));
            console.log('Downloading Done! [13/23]'.green);
            deb_14();
        })();
    }
}
function deb_14() {
    if (fs.existsSync(`./static/img/logo.png`)) {
        deb_15();
    } else {
        console.log('[14/23] file not found please wait'.yellow);
        (async () => {
            console.log('Start Downloading | '.yellow + `Debugging [14/23]`.green);
            fs.writeFileSync(`./static/img/logo.png`, await download('https://api.yellow-team.ir/dll/mccontroler/static/img/logo.png'));
            console.log('Downloading Done! [14/23]'.green);
            deb_15();
        })();
    }
}
function deb_15() {
    if (fs.existsSync(`./static/css/bootstrap.min.css`)) {
        deb_16();
    } else {
        console.log('[15/23] file not found please wait'.yellow);
        (async () => {
            console.log('Start Downloading | '.yellow + `Debugging [15/23]`.green);
            fs.writeFileSync(`./static/css/bootstrap.min.css`, await download('https://api.yellow-team.ir/dll/mccontroler/static/css/bootstrap.min.css'));
            console.log('Downloading Done! [15/23]'.green);
            deb_16();
        })();
    }
}
function deb_16() {
    if (fs.existsSync(`./static/css/bootstrap.min.css.map`)) {
        deb_17();
    } else {
        console.log('[16/23] file not found please wait'.yellow);
        (async () => {
            console.log('Start Downloading | '.yellow + `Debugging [16/23]`.green);
            fs.writeFileSync(`./static/css/bootstrap.min.css.map`, await download('https://api.yellow-team.ir/dll/mccontroler/static/css/bootstrap.min.css.map'));
            console.log('Downloading Done! [16/23]'.green);
            deb_17();
        })();
    }
}
function deb_17() {
    if (fs.existsSync(`./static/css/error.css`)) {
        deb_18();
    } else {
        console.log('[17/23] file not found please wait'.yellow);
        (async () => {
            console.log('Start Downloading | '.yellow + `Debugging [17/23]`.green);
            fs.writeFileSync(`./static/css/error.css`, await download('https://api.yellow-team.ir/dll/mccontroler/static/css/error.css'));
            console.log('Downloading Done! [17/23]'.green);
            deb_18();
        })();
    }
}
function deb_18() {
    if (fs.existsSync(`./static/css/load.css`)) {
        deb_19();
    } else {
        console.log('[18/23] file not found please wait'.yellow);
        (async () => {
            console.log('Start Downloading | '.yellow + `Debugging [18/23]`.green);
            fs.writeFileSync(`./static/css/load.css`, await download('https://api.yellow-team.ir/dll/mccontroler/static/css/load.css'));
            console.log('Downloading Done! [18/23]'.green);
            deb_19();
        })();
    }
}
function deb_19() {
    if (fs.existsSync(`./static/js/bootstrap.bundle.min.js`)) {
        deb_20();
    } else {
        console.log('[19/23] file not found please wait'.yellow);
        (async () => {
            console.log('Start Downloading | '.yellow + `Debugging [19/23]`.green);
            fs.writeFileSync(`./static/js/bootstrap.bundle.min.js`, await download('https://api.yellow-team.ir/dll/mccontroler/static/js/bootstrap.bundle.min.js'));
            console.log('Downloading Done! [19/23]'.green);
            deb_20();
        })();
    }
}
function deb_20() {
    if (fs.existsSync(`./static/js/chart.js`)) {
        deb_21();
    } else {
        console.log('[20/23] file not found please wait'.yellow);
        (async () => {
            console.log('Start Downloading | '.yellow + `Debugging [20/23]`.green);
            fs.writeFileSync(`./static/js/chart.js`, await download('https://api.yellow-team.ir/dll/mccontroler/static/js/chart.js'));
            console.log('Downloading Done! [20/23]'.green);
            deb_21();
        })();
    }
}
function deb_21() {
    if (fs.existsSync(`./static/js/jquery-3.6.0.js`)) {
        deb_22();
    } else {
        console.log('[21/23] file not found please wait'.yellow);
        (async () => {
            console.log('Start Downloading | '.yellow + `Debugging [21/23]`.green);
            fs.writeFileSync(`./static/js/jquery-3.6.0.js`, await download('https://api.yellow-team.ir/dll/mccontroler/static/js/jquery-3.6.0.js'));
            console.log('Downloading Done! [21/23]'.green);
            deb_22();
        })();
    }
}
function deb_22() {
    if (fs.existsSync(`./static/js/socket.io.js`)) {
        deb_23();
    } else {
        console.log('[22/23] file not found please wait'.yellow);
        (async () => {
            console.log('Start Downloading | '.yellow + `Debugging [22/23]`.green);
            fs.writeFileSync(`./static/js/socket.io.js`, await download('https://api.yellow-team.ir/dll/mccontroler/static/js/socket.io.js'));
            console.log('Downloading Done! [22/23]'.green);
            deb_23();
        })();
    }
}
function deb_23() {
    if (fs.existsSync(`./static/js/socket.io.js.map`)) {
        exports.debugdone = 1;
        console.log('Checking [23/23] Done!'.green)
    } else {
        console.log('[23/23] file not found please wait'.yellow);
        (async () => {
            console.log('Start Downloading | '.yellow + `Debugging [23/23]`.green);
            fs.writeFileSync(`./static/js/socket.io.js.map`, await download('https://api.yellow-team.ir/dll/mccontroler/static/js/socket.io.js.map'));
            console.log('Downloading Done! [23/23]'.green);
            console.log('Checking [23/23] Done!'.green)
            exports.debugdone = 1;
        })();
    }
}
