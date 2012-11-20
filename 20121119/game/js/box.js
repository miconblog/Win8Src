(function(){

	var elCont = $("#content")[0];
	elCont.addEventListener("click", function(e){
		if(e.srcElement.className === "balloon") {
			
			console.log("풍선 터트리기", jQuery(e.srcElement).fadeOut() );
		 
		}
	});
	
	var createBox = function(){
		
		var elBox = $('<div class="balloon"></div>');
		var aColor = ["#342353","red","blue","#098343","#afed00","#2343de","#23ffe3"];
		
		
		elBox.css({
			"left": Math.floor(Math.random() * 10000) % 750,
			"top" : Math.floor(Math.random() * 10000) % 350,
			"background-position-y": ((Math.floor(Math.random() * 100) % 7) * -50) + "px"
		}).fadeIn();
		
	/*	elBox[0].onclick = function(){
			jQuery(this).css("background-position", "-50px 0px");
		}
		*/
		
		elCont.appendChild(elBox[0]);
		/*
		elBox[0].addEventListener("click", function(){
			alert(1);
		});
			*/
	}
	
	nBoxTimer = setInterval( createBox, 500)

})()

