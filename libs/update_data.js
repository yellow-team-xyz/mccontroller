const fs = require('fs');
module.exports.update = (update);
function update(callback) {
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
                        loger.log('The blacklist ip was removed to prevent damage', 1, 3);
                    }
                    callback(json_callback);
                });
            });
        });
    });
}