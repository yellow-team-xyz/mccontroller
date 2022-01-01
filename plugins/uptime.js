//Uptime Plugin

const lib = require('../index.js')

let sc = "0";
let mi = "0";
let ho = "0";
let da = "0";

let dict = 'qwertyuioplkjhgfdsazxcvbnm123456789QWERTYUIOPASDFGHJKLZXCVBNM1234567890';

let socketuptime_plugin = '';
for(var i = 0; i < 32; i++){
    socketuptime_plugin = socketuptime_plugin + dict.charAt(Math.floor(Math.random() * dict.length));
}

exports.dash_nav_side = `
<center><h5 style="color:White;" id="uptime_plugin_text">Loading...</h5></center>
`;
exports.dash_script = `
//uptime_plugin_by YEE6
const uptime_plugin_text = document.getElementById('uptime_plugin_text');
socket.on('${socketuptime_plugin}_uptime_plugin', function(uptime_msg){
    uptime_plugin_text.textContent=uptime_msg;
});
//end
`;


setInterval(() => {
    sc++;
    if(sc>=59){
        mi++;
        sc="0";
    }
    if(mi>=59){
        ho++;
        mi="0";
    }
    if(ho>=23){
        da++;
        ho="0";
    }
    lib.io.emit(`${socketuptime_plugin}_uptime_plugin`,`Uptime: Days: ${da} Hours: ${ho} Minutes: ${mi} Seconds: ${sc}`)
}, 1000);
