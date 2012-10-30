var printScore = function (arrData) {

    console.log(arrData);

    arrData = [{ point: "23" }, { point: "34" }, { point: "45" }];


    var el = document.getElementById("stats");

    var list = new WinJS.Binding.List(arrData);
    // var listView = new WinJS.UI.ListView(el);
    listView = el.winControl;
    var tpl = new WinJS.Binding.Template(document.getElementById("tpl"));

    listView.itemDataSource = list.dataSource;
    listView.itemTemplate = tpl.element;





    //var html = "<ol>";
    //for (var i = 0; i < arrData.length; ++i) {
    //    html += "<li>" + arrData[i] + "</li>";
    //}
    //html += "</ol>";

    //el.innerHTML = html;

    //console.log(el.innerHTML);
}