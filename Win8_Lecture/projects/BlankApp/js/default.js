(function () {

    WinJS.Application.addEventListener("activated", function (e) {
        console.log("activated");
    });

    WinJS.Application.addEventListener("loaded", function (e) {
        console.log("loaded");
    });

    WinJS.Application.addEventListener("checkpoint", function (e) {
        console.log("checkpoint");
    });

    WinJS.Application.addEventListener("error", function (e) {
        console.log("error");
    });

    WinJS.Application.addEventListener("ready", function (e) {
        console.log("ready");

        GameStart();

    });

    WinJS.Application.addEventListener("settings", function (e) {
        console.log("settings");
    });

    WinJS.Application.addEventListener("unload", function (e) {
        console.log("unload");
    });

    WinJS.Application.start();
})();

