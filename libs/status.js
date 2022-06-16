const lib = require('../index.js');
(function () {
    var P = ["\\", "|", "/", "-"];
    var x = 0;
    return setInterval(function () {
      process.stdout.write("\r" + 'App :[' + P[x++] + ']  App_Version:[' + lib.app_version + ']' + "\r");
      x &= 3;
    }, 250);
})();