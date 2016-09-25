navbar = function(){};

navbar.desc = "Navegation Bar";
navbar.add = function(){

	var htmlelem = "";
	for(var items in category){
		htmlelem += "<h1>" + items + "</h1>";
	  	for (var j=0; j < category[items].length; j++) {
			htmlelem += "<h2>" + category[items][j].subject + "</h2>";
			htmlelem += "<h3>" + category[items][j].video + "</h3>";
			htmlelem += "<h3>" + category[items][j].article + "</h3>";
			htmlelem += "<h3>" + category[items][j].worksheets + "</h3>";
	  };
	}
	
	return htmlelem;
};
