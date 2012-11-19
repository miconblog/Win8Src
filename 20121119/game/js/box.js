(function(){

	var elCont = $("#content")[0];
	var elBox = $('<div class="balloon"></div>');
	var aColor = ["#342353","red","blue","#098343","#afed00","#2343de","#23ffe3"];
	
	
	elBox.css({
		"left": Math.floor(Math.random() * 100),
		"top" : Math.floor(Math.random() * 100),
		"background-color": aColor[Math.floor(Math.random() * 100) % 7]
	}).fadeIn();
	elCont.appendChild(elBox[0]);

})()

