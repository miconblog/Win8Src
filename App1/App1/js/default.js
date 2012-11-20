// 새 서식 파일에 대한 소개는 다음 문서를 참조하십시오.
// http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
    "use strict"

    WinJS.Application.addEventListener("loaded", function () {
        GameStart();
        TimerStart();
    });


    WinJS.Application.start();
})();
