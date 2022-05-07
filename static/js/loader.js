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
