setInterval(function() {
    $("button").css('left', Math.random() * 700);
    $("button").css('top', Math.random() * 700);
}, 500);

$("button").click(function() {
    $(".riddle").text("My first is in sentience but not in instinct. My second is in axletree but not in relater. My third is in pertain but not in retina. My fourth is in annalist but not in satanist. My fifth is in contrite but not in inciter. My sixth is in repeat but not in peat. My seventh is in instantiate but not in instant.");
});