// https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function(){
    $("#episode-one-link").click(function(){
        //show and style correct episode
        $('#episode-one').show('slowest')
            .css('background-color', "black")
            .css('color', "yellow");
        //hide all other episodes    
        $("#episode-two").hide("slow")
        $("#episode-three").fadeOut("slow")
        $("#episode-four").hide("slow")
        $("#episode-five").hide("fastest")
        $("#episode-six").fadeOut("slow")
        $("#episode-seven").fadeOut("slow");
    });
	
	
	
	
   
    //write the code here for when the user clicks links 2-6
	
	
	  $("#episode-two-link").click(function(){
        //show and style correct episode
        $('#episode-two').show('slowest')
            .css('background-color', "black")
            .css('color', "yellow");
        //hide all other episodes    
        $("#episode-one").hide("slow")
        $("#episode-three").fadeOut("slow")
        $("#episode-four").hide("slow")
        $("#episode-five").hide("fastest")
        $("#episode-six").fadeOut("slow")
        $("#episode-seven").fadeOut("slow");
    });
	
		
	  $("#episode-three-link").click(function(){
        //show and style correct episode
        $('#episode-three').show('slowest')
            .css('background-color', "black")
            .css('color', "yellow");
        //hide all other episodes    
        $("#episode-one").hide("slow")
        $("#episode-two").fadeOut("slow")
        $("#episode-four").hide("slow")
        $("#episode-five").hide("fastest")
        $("#episode-six").fadeOut("slow")
        $("#episode-seven").fadeOut("slow");
    });
	
			
	  $("#episode-four-link").click(function(){
        //show and style correct episode
        $('#episode-four').show('slowest')
            .css('background-color', "black")
            .css('color', "yellow");
        //hide all other episodes    
        $("#episode-one").hide("slow")
        $("#episode-two").hide("slow")
        $("#episode-three").hide("slow")
        $("#episode-five").hide("fastest")
        $("#episode-six").fadeOut("slow")
        $("#episode-seven").fadeOut("slow");
    });
	
	
		  $("#episode-five-link").click(function(){
        //show and style correct episode
        $('#episode-five').SlideIn('slowest')
            .css('background-color', "black")
            .css('color', "yellow");
        //hide all other episodes    
        $("#episode-one").hide("slow")
        $("#episode-two").fadeOut("slow")
        $("#episode-three").SlideOut("slow")
        $("#episode-four").SlideOut("fastest")
        $("#episode-six").SlideOut("slow")
        $("#episode-seven").SlideOut("slow");
    });
	
		
		  $("#episode-six-link").click(function(){
        //show and style correct episode
        $('#episode-six').show('slowest')
            .css('background-color', "black")
            .css('color', "yellow");
        //hide all other episodes    
        $("#episode-one").hide("slow")
        $("#episode-two").fadeOut("slow")
        $("#episode-three").hide("slow")
        $("#episode-four").hide("fastest")
        $("#episode-five").fadeOut("slow")
        $("#episode-seven").fadeOut("slow");
    });





    //to make this function more adaptable, change html property values (use data-target attribute value)
    $("#episode-seven-link").click(function() {
        $('.movies').hide("fast"); //hide all movie descriptions

        var target = $("#episode-seven-link").attr("data-target");  //get data-target value
        var target = "#" + target; //add # to target value
        $(target).fadeIn(3000) //display and style data-target
            .css("background-color", "black")
            .css("color", "yellow");
    });

});