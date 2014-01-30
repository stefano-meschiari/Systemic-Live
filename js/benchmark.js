$(document).ready(function() {
    var text = "We will now run a quick speed test to ensure your browser can run Systemic Live successfully. Please wait a few moments.";
    var alertDiv = $('<div class="alert alert-danger alert-dismissable"><span id="bench-message">' +
                     text + '</span><button type="button" class="close" data-dismiss="alert">&times;</button>');
    $(".container").prepend(alertDiv);

    _.delay(function() {
        var speed = K.benchmark();

        if (speed < 3000) {
            $("#bench-message").html("All right! Your browser is fast enough to run Systemic :)");
            _.delay(function() { alertDiv.hide(400); }, 3000);
        } else {
            if (speed < 5000) {
                $("#bench-message").html("Your browser is a little slow. Consider switching to a different browser or computer :/");
            } else {
                $("#bench-message").html("Your browser might be too slow to run Systemic acceptably. Consider switching to a different browser or computer :(");
            }
            uialert("Slow browser? Try Google Chrome, Mozilla Firefox or Safari 6+.", ".container", -1);
        }
        
    }, 3000);
});
