setInterval(function() {
    $(".move").css('left', Math.random() * 700);
    $(".move").css('top', Math.random() * 700);
}, 500);

$(".move").click(function() {
    $(".riddle").show();
    $(".move").hide();
});

$(".submit").click(function() {
    var phrase = $("input").val();
    if (phrase === "4:30") {
    $(".reveal").html("<p>Let's play a game, Truth or...?</p>");}
});