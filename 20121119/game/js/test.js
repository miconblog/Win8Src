// Controller.js
var Controller = function(){
	this.oModel = new Model();
	this.oView = new View(this.oModel);
	
	this.oModel.setTime(30);
}

var ctrl = new Controller();


// Model.js
var Model = function(){

	this.nTime = 0;

	return {
	
		setTime: function (n) { 
			this.nTime = n;
			this.fireEvent("CHANGED", {time: this.time});
			
		}
	}
}


// View.js
var View = function(oModel){

	this.oModel = oModel;
	
	oModel.observer("CHANGED", function(){
	
	
	
	});
}

