(function () {
    WinJS.Application.addEventListener("ready", function (e) {

        //se.setPromise(WinJS.UI.processAll());

        console.log("ready");
        var data = [];
        var tagName = encodeURIComponent("체중");
        WinJS.xhr({
            url: "http://me2day.net/api/get_posts/miconblog.json?scope=tag["+tagName+"]",
        }).then(function (xhr) {
            var arr = JSON.parse(xhr.responseText);
            //console.log(arr);

            for (var i = 0; i < arr.length; ++i) {
                var s = arr[i].tagText;
                var point = /체중:(.*)\s/.exec(s)[1];   
                //console.log(point);
                data.push(point);
            }
        }).then(function () {
            console.log("DATA: ", data);
            printScore(data);
            GameStart();
         })
        
    });

    WinJS.Application.start();
})();

