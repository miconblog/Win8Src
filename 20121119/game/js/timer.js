(function (){
	var timer = 60;
	
	var nT = setInterval(function(){
		//console.log(timer);
		//var el = document.getElementById("timer");
		var el = $("#timer")[0];
		el.innerHTML = "<div>" + timer + "</div>";
		timer--;
		
		if( timer < 0 ){
			clearInterval(nT);
			alert("Time Over");
		}
	}, 1000);
})();



