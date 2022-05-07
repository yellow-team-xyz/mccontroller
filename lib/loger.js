const fs = require('fs');
const colors = require('colors');
module.exports.log = (log);
function log(log, alert, color) {
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
}
setInterval(() => {
    let date_ob = new Date();
    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    let hours = date_ob.getHours();
    let minutes = date_ob.getMinutes();
    let seconds = date_ob.getSeconds();
    const log_stats = fs.statSync("./data/logs/log.log");
    if (log_stats.size > 248000) {
        log('The report file has reached the last storage limit. Changing the file ...', 1, 2);
        fs.rename('./data/logs/log.log',`./data/logs/log[${year}-${month}-${date}][${hours}h-${minutes}m-${seconds}s].log`,(err)=>{
            if(err){
                fs.writeFileSync('./data/logs/log.log', `[${year}-${month}-${date}][${hours}h-${minutes}m-${seconds}s][INFO]: Removed!`);
                log('Changing File Field Remove Old Log Data ...', 3, 3);
                log('Done!', 1, 1);
            }else{
                fs.writeFile('./data/logs/log.log', `[${year}-${month}-${date}][${hours}h-${minutes}m-${seconds}s][INFO]: New Log File Created!`, function (err) {
                    if(err){
                        log('Field!', 3, 3);
                    }else{
                        log('Done!', 1, 1);
                    }
                });
            }
        });
    }
}, 1000);
