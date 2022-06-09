const JavaScriptObfuscator = require('javascript-obfuscator');
module.exports.get = (get);
function get(javascript,callback) {
    const obfuscator_options = {
        compact: false,
        controlFlowFlattening: true,
        controlFlowFlatteningThreshold: 1,
        numbersToExpressions: true,
        simplify: true,
        stringArrayShuffle: true,
        splitStrings: true,
        stringArrayThreshold: 1
    };
    const obfuscationResult = JavaScriptObfuscator.obfuscate(javascript, obfuscator_options);
    callback(obfuscationResult.getObfuscatedCode());
}