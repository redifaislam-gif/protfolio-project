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



 function openNav() {
	  
	  document.getElementById("myNav").style.width="100%";
  }
  
  
  function closeNav() {
	  
	  document.getElementById("myNav").style.width="0%";
  }
