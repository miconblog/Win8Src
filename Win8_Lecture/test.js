var el = $("#msg");
el.delegate(".box", "click", function () {
    $(this).hide();
});

var nCount = 0;
var nTimer = setInterval(function () {
    nCount++;

    var elBox = $("<div class='box'>박스1</div>");
    var R = Math.floor(Math.random() * 10);
    var G = Math.floor(Math.random() * 10)
    var B = Math.floor(Math.random() * 10)

    elBox.css({
        "left": Math.floor(Math.random() * 1000),
        "top": Math.floor(Math.random() * 500),
        "background-color": "#" + R + G + B
    });
    /*
    elBox.on("click", function(e){
        $(this).hide();
    });*/
    el.append(elBox);


    if (nCount > 100) {
        clearInterval(nTimer);
    }
    console.log(nCount);

}, 100);