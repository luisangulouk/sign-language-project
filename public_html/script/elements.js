navbar = function(){};

navbar.desc = "Navegation Bar";
navbar.add = function(){

	var htmlelem = "";
	for(var items in category){
		htmlelem += "<div class=\"nav-container-item\" id=\"" + items + "\"><h1>" + items.replace(/_/g," "); + "</h1>";
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
navbar.swichOn = function(){

	$("#nav-subjects,.nav-container-item,#nav-container-subjects").mouseover(function(){
		$("#nav-container-subjects").show();
	});
	$("#nav-container-subjects,.nav-simple").mouseout(function(){
		$("#nav-container-subjects").hide();
	});
	$(".nav-simple").mouseover(function(){
		$("#nav-container-subjects").hide();
	});
	$("#nav-subjects").click(function(){
		$("#nav-container-subjects").show();
	});
	$(".nav-container-item").click(function(){
		$("#nav-container-subjects").hide();
		var info = $(this).attr("id");
	  		var htmlelem = "<article class=\"content-section-item\" id=\"section_" + info + "\"><h1>" + info.replace(/_/g," "); + "</h1>";
			for (var i=0; i < category[info].length; i++) {
					htmlelem += "<h2>" + category[info][i].subject + "</h2>";
					htmlelem += "<h3>" + category[info][i].video + "</h3>";
					htmlelem += "<h3>" + category[info][i].article + "</h3>";
					htmlelem += "<h3>" + category[info][i].worksheets + "</h3>";
			};
			htmlelem += "<video width=\"250\" height=\"200\" controls><source src=\"videos/samplevideo.mp4\" type=\"video/mp4\">Your browser does not support the video tag.</video>";	  
			htmlelem += "</article>";	  
		$("#content-section").html(htmlelem);
		$("#content-section").show();	
	});
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