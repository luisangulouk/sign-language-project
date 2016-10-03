navbar = function(){};

navbar.desc = "Navegation Bar";
navbar.add = function(){

	var htmlelem = "";
	for(var items in category){
		htmlelem += "<div class=\"nav-container-item\"><h1>" + items + "</h1>";
		htmlelem += "<h2>" + category[items][0].subject + "</h2>";
		htmlelem += "<h3>" + category[items][0].video + "</h3>";
		htmlelem += "<h3>" + category[items][0].article + "</h3>";
		htmlelem += "<h3>" + category[items][0].worksheets + "</h3>";
		if(category[items].length>1){
			htmlelem += "<h3>--see more--</h3>";
  		};
		htmlelem += "</div>";	  
	}
	htmlelem += "<div class=\"clear\"></div>";
	
	return htmlelem;
};

/*	    		<div class="nav-container-item">
    				<h1>Adjectives</h1>
    				<h2>What are adjectives?</h2>
    				<h3>Information Video</h3>
    				<h3>Information sheet</h3>
    				<h3>worksheets</h3>
    			</div>
	    		<div class="nav-container-item">
    				<h1>Adjectives</h1>
    				<h2>What are adjectives?</h2>
    				<h3>Information Video</h3>
    				<h3>Information sheet</h3>
    				<h3>worksheets</h3>
    			</div>
	    		<div class="nav-container-item">
    				<h1>Adjectives</h1>
    				<h2>What are adjectives?</h2>
    				<h3>Information Video</h3>
    				<h3>Information sheet</h3>
    				<h3>worksheets</h3>
    			</div>
	    		<div class="nav-container-item">
    				<h1>Adjectives</h1>
    				<h2>What are adjectives?</h2>
    				<h3>Information Video</h3>
    				<h3>Information sheet</h3>
    				<h3>worksheets</h3>
    			</div>
	    		<div class="nav-container-item">
    				<h1>Adjectives</h1>
    				<h2>What are adjectives?</h2>
    				<h3>Information Video</h3>
    				<h3>Information sheet</h3>
    				<h3>worksheets</h3>
    			</div>
	    		<div class="nav-container-item">
    				<h1>Adjectives</h1>
    				<h2>What are adjectives?</h2>
    				<h3>Information Video</h3>
    				<h3>Information sheet</h3>
    				<h3>worksheets</h3>
    			</div>
	    		<div class="nav-container-item">
    				<h1>Adjectives</h1>
    				<h2>What are adjectives?</h2>
    				<h3>Information Video</h3>
    				<h3>Information sheet</h3>
    				<h3>worksheets</h3>
    			</div>
	    		<div class="nav-container-item">
    				<h1>Adjectives</h1>
    				<h2>What are adjectives?</h2>
    				<h3>Information Video</h3>
    				<h3>Information sheet</h3>
    				<h3>worksheets</h3>
    			</div>
	    		<div class="nav-container-item">
    				<h1>Adjectives</h1>
    				<h2>What are adjectives?</h2>
    				<h3>Information Video</h3>
    				<h3>Information sheet</h3>
    				<h3>worksheets</h3>
    			</div>
	    		<div class="nav-container-item">
    				<h1>Adjectives</h1>
    				<h2>What are adjectives?</h2>
    				<h3>Information Video</h3>
    				<h3>Information sheet</h3>
    				<h3>worksheets</h3>
*/