var EBILL = EBILL || {};

EBILL.DBFEATURES = (function(){
	var Structure = {
		name : "recip",
		Indexes : function() {
			console.log(this.name);
		}
	}	
		return {
			ShowInfo : function(){
				Structure.Indexes();
			}
		}
})();

EBILL.DBFEATURES.ShowInfo();