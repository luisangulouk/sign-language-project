var DMS = DMS || {};

DMS.recordset = (function(){
	var table = {
		name : "docdata",
		fields : {},
		Indexes : function() {
			console.log(this.name);
		}
	}
		return {
			ShowInfo : function(){
				table.Indexes();
			}
		}
})();

DMS.recordset.ShowInfo();
