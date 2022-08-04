$("#app_loader").show();
$("#app_body").hide();
$(window).on('load', function () {
    $(".loader").fadeOut(1000);
    setTimeout(() => {
        $("#app_loader").hide();
        $("#app_body").show();
    }, 1000);
});
console.log("%c Alert: %c chackers from this section can infiltrate your account!!! ","color: #fff; background: red","color: #fff; background: #5f5f5f");
setInterval(() => {
    console.log("%c Alert: %c chackers from this section can infiltrate your account!!! ","color: #fff; background: red","color: #fff; background: #5f5f5f");
}, 5000);
function enable_codeeditor() {
    const codeEditor = document.getElementById('codeEditor');
    const lineCounter = document.getElementById('lineCounter');
    codeEditor.addEventListener('scroll', () => {
        lineCounter.scrollTop = codeEditor.scrollTop;
        lineCounter.scrollLeft = codeEditor.scrollLeft;
    });
    codeEditor.addEventListener('keydown', (e) => {
        let { keyCode } = e;
        let { value, selectionStart, selectionEnd } = codeEditor;
        if (keyCode === 9) {
            e.preventDefault();
            codeEditor.value = value.slice(0, selectionStart) + '\t' + value.slice(selectionEnd);
            codeEditor.setSelectionRange(selectionStart + 2, selectionStart + 2)
        }
    });
    var lineCountCache = 0;
    line_counter();
    function line_counter() {
        var lineCount = codeEditor.value.split('\n').length;
        var outarr = new Array();
        if (lineCountCache != lineCount) {
            for (var x = 0; x < lineCount; x++) {
                outarr[x] = (x + 1) + ' ';
            }
            lineCounter.value = outarr.join('\n');
        }
        lineCountCache = lineCount;
    }
    codeEditor.addEventListener('input', () => {
        line_counter();
    });
}
