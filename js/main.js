$(document).ready(function(){
	
	
//stikey
	$(".js--clint-section").waypoint(function(direction){
		
	if(direction== "down"){
		$(".navbar").addClass("stikey");
	}else{
	$(".navbar").removeClass("stikey");	
	}	
		
	});
	//protfolio
	var mixer=mixitup('.container');
	
	
	$(".hellow-circle").circleProgress();	
		
		
});

$(document).ready(function(){
	
	$(".hellow-circle").circleProgress();	
		
});

	/*$(document).ready(function(){
	
	$(".clic").click(function(){
		
			$(".overlay-content").slideToggle();
		
	});	
		
});*/

 function openNav() {
	  
	  document.getElementById("myNav").style.width="90%";
  }
  
  
  function closeNav() {
	  
	  document.getElementById("myNav").style.width="0%";
  }
