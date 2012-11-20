(function(){

	ScoreModel = function(){
		var nScore = 0;		
		
		return {
			addPoint : function(){
				nScore++;
				this.notify("CHANGE_POINT", {point: nScore});
			},

			reducePoint: function(){
				nScore--;
				this.notify("CHANGE_POINT", {point: nScore});
			}
		}
	}		

	
	ScoreView = function(model){
		var jelView = jQuery("#score");
		
		
		model.observer("CHANGE_POINT", function(data){
			jelView.html(data.point);
		});
	}
})()

