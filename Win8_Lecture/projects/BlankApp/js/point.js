var printScore = function (arrData) {
    console.log(arrData);

    // ListView 컨트롤을 이용해 데이터를 표현하는 경우
    arrData = [{ point: "23" }, { point: "34" }, { point: "45" }];
    var el = document.getElementById("stats");
    var list = new WinJS.Binding.List(arrData);
    // var listView = new WinJS.UI.ListView(el);
    listView = el.winControl;
    var tpl = new WinJS.Binding.Template(document.getElementById("tpl"));

    listView.itemDataSource = list.dataSource;
    listView.itemTemplate = tpl.element;

    // 직접 마크업을 만들어 넣는경우
    //var html = "<ol>";
    //for (var i = 0; i < arrData.length; ++i) {
    //    html += "<li>" + arrData[i] + "</li>";
    //}
    //html += "</ol>";
    //el.innerHTML = html;
    //console.log(el.innerHTML);
}