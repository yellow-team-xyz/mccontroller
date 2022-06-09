let language = '';

module.exports.get = (get);
module.exports.languages = (languages);
function get(level_permission, location, callback) {
    let nav_list = '';
    if (level_permission.includes('2') == true || level_permission.includes('1') == true) {
        let active = '';
        if (location == 'server') active = ' active';
        nav_list = nav_list + '<a href="/dashboard/server/" id="side_server" class="nav_link' + active + '"> <i class="bx bx-power-off nav_icon"></i> <span class="nav_name">'+language.server+'</span> </a>';
    }
    if (level_permission.includes('3') == true || level_permission.includes('1') == true) {
        let active = '';
        if (location == 'options') active = ' active';
        nav_list = nav_list + '<a href="/dashboard/options/" id="side_options" class="nav_link' + active + '"> <i class="bx bx-slider-alt nav_icon"></i><span class="nav_name">'+language.options+'</span> </a>';
    }
    if (level_permission.includes('4') == true || level_permission.includes('1') == true) {
        let active = '';
        if (location == 'console') active = ' active';
        nav_list = nav_list + '<a href="/dashboard/console/" id="side_console" class="nav_link' + active + '"> <i class="bx bx-terminal nav_icon"></i> <span class="nav_name">'+language.console+'</span> </a>';
    }
    if (level_permission.includes('5') == true || level_permission.includes('1') == true) {
        let active = '';
        if (location == 'log') active = ' active';
        nav_list = nav_list + '<a href="/dashboard/log/" id="side_log" class="nav_link' + active + '"> <i class="bx bx-file nav_icon"></i> <span class="nav_name">'+language.log+'</span></a>';
    }
    if (level_permission.includes('6') == true || level_permission.includes('1') == true) {
        let active = '';
        if (location == 'plugins') active = ' active';
        nav_list = nav_list + '<a href="/dashboard/plugins/" id="side_plugins" class="nav_link' + active + '"> <i class="bx bx-extension nav_icon"></i> <span class="nav_name">'+language.plugins+'</span></a>';
    }
    if (level_permission.includes('7') == true || level_permission.includes('1') == true) {
        let active = '';
        if (location == 'general_settings') active = ' active';
        nav_list = nav_list + '<a href="/dashboard/general_settings/" id="side_general_settings" class="nav_link' + active + '"> <i class="bx bx-cog nav_icon"></i> <span class="nav_name">'+language.general_settings+'</span> </a>';
    }
    if (level_permission.includes('8') == true || level_permission.includes('1') == true) {
        let active = '';
        if (location == 'addons') active = ' active';
        nav_list = nav_list + '<a href="/dashboard/addons/" id="side_addons" class="nav_link' + active + '"> <i class="bx bx-briefcase nav_icon"></i> <span class="nav_name">'+language.addons+'</span> </a>';
    }
    if (level_permission.includes('9') == true || level_permission.includes('1') == true) {
        let active = '';
        if (location == 'profile') active = ' active';
        nav_list = nav_list + '<a href="/dashboard/profile/" id="side_profile" class="nav_link' + active + '"> <i class="bx bx-user nav_icon"></i> <span class="nav_name">'+language.profile+'</span> </a>';
    }
    if (level_permission.includes('1') == true) {
        let active = '';
        if (location == 'access') active = ' active';
        nav_list = nav_list + '</a><a href="/dashboard/access/" id="side_access" class="nav_link' + active + '"> <i class="bx bx-lock-open-alt nav_icon"></i> <span class="nav_name">'+language.access+'</span> </a>';
    }
    callback(nav_list);
}
function languages(json_data) {
    language = json_data;
}