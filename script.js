
$( document ).ready(function() {



$("#sha_button_list li").click(function(){
  

  $(this).toggleClass( "on off" )
  
}); 

$(".sha_switch").click(function(){
	
	  $(this).toggleClass( "on off" )

	
});

$(".swithTheme").click(function(){
  
     $("body").toggleClass( "light dark" );
  
    
    
    
});   
    
    

});


