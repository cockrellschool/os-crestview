(function ($) {
	$(".navicon").click(function(event) {
		event.stopPropagation();
		event.preventDefault();
   		$(".nav").slideToggle(200);
        return false;
	});



})(jQuery);



// $(document).ready(function () {
        		 
//     $(".navicon").click(function(event) {
// 		event.stopPropagation();
// 		event.preventDefault();
//    		$(".nav").slideToggle(200);
//         return false;
// 	});

// });