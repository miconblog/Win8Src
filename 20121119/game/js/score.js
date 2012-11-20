(function(){

	ScoreModel = function(){
		var nScore = 0;	


		var oEventHandler = {
		
		}
		
		
		return {
			addPoint : function(){
				nScore++;
				this.notify("CHANGE_POINT", {point: nScore});
			},

			reducePoint: function(){
				nScore--;
				this.notify("CHANGE_POINT", {point: nScore});
			},
			
			// 옵저버 객체를 등록
			observer : function(sEventName, fHandler){
				
				if( oEventHandler[sEventName] ){
					oEventHandler[sEventName] = null;
				}
				
				oEventHandler[sEventName] = fHandler;
				
			},
			notify: function(sEventName, oData){
			
				if ( oEventHandler[sEventName] ){
					oEventHandler[sEventName]( {point: nScore} );
				}
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

