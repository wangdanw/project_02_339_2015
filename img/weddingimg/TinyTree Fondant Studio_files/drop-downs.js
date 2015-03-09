// For an explanation of the basics of jquery, please see hamburger.js
$(document).ready( function() {

	/*
		Here we are running a function when a.dd-toggle is clicked
	*/
	$("a.dd-toggle").click( function(e) { 
		
		// preventDefault lets us prevent the <a> tag from linking through
		e.preventDefault();


		/*
			Here we are doing a couple things in this one line, so
			let's break it apart:

				if (  				<< This creates an if/then statement
					
					$(this) 		<< Here we tell jQuery to select the parent
									function's selector (a.dd-toggle)
					
					.next("ul") 	<< .next is a method that looks for the
									next sibling of the given element, in
									this case, we specify a 'ul'
					
					.hasClass("dd-shown") << checks if the item we selected 
											(the next ul after the a.dd-toggle
											that was clicked) has the class of
											.dd-shown
				) 	<< If this is all true, it then moves on to the next step
		*/
		if ( $(this).next(".down").hasClass("dd-shown") ) {


			/*
				!! This is the case if our drop-down is already shown.

				Just like before, we are selecting the next ul after the 
				a.dd-toggle that was clicked on, and removing the class of
				.dd-shown, and adding the class of .dd-hidden
			*/
			$(this).next(".down").removeClass("dd-shown").addClass("dd-hidden");
		} 
		// Else means that this is the case if our drop-down is not shown
		else {

			// As a result, we do the reverse of what is listed above.
			$(this).next(".down").removeClass("dd-hidden").addClass("dd-shown");
		}
	});




});


$(document).ready( function() {

	/*
		Here we are running a function when a.dd-toggle is clicked
	*/
	$("a.dd-toggle").click( function(e) { 
		
		// preventDefault lets us prevent the <a> tag from linking through
		e.preventDefault();


		/*
			Here we are doing a couple things in this one line, so
			let's break it apart:

				if (  				<< This creates an if/then statement
					
					$(this) 		<< Here we tell jQuery to select the parent
									function's selector (a.dd-toggle)
					
					.next("ul") 	<< .next is a method that looks for the
									next sibling of the given element, in
									this case, we specify a 'ul'
					
					.hasClass("dd-shown") << checks if the item we selected 
											(the next ul after the a.dd-toggle
											that was clicked) has the class of
											.dd-shown
				) 	<< If this is all true, it then moves on to the next step
		*/
		if ( $(this).next("ul").hasClass("dd-shown") ) {


			/*
				!! This is the case if our drop-down is already shown.

				Just like before, we are selecting the next ul after the 
				a.dd-toggle that was clicked on, and removing the class of
				.dd-shown, and adding the class of .dd-hidden
			*/
			$(this).next("ul").removeClass("dd-shown").addClass("dd-hidden");
		} 
		// Else means that this is the case if our drop-down is not shown
		else {

			// As a result, we do the reverse of what is listed above.
			$(this).next("ul").removeClass("dd-hidden").addClass("dd-shown");
		}
	});


});


$(document).ready( function() {

	/*
		Here we are running a function when a.dd-toggle is clicked
	*/
	$("a.dd-toggle").click( function(e) { 
		
		// preventDefault lets us prevent the <a> tag from linking through
		e.preventDefault();


		/*
			Here we are doing a couple things in this one line, so
			let's break it apart:

				if (  				<< This creates an if/then statement
					
					$(this) 		<< Here we tell jQuery to select the parent
									function's selector (a.dd-toggle)
					
					.next("ul") 	<< .next is a method that looks for the
									next sibling of the given element, in
									this case, we specify a 'ul'
					
					.hasClass("dd-shown") << checks if the item we selected 
											(the next ul after the a.dd-toggle
											that was clicked) has the class of
											.dd-shown
				) 	<< If this is all true, it then moves on to the next step
		*/
		if ( $(this).next("a.icon-like-click").hasClass("dd-shown") ) {


			/*
				!! This is the case if our drop-down is already shown.

				Just like before, we are selecting the next ul after the 
				a.dd-toggle that was clicked on, and removing the class of
				.dd-shown, and adding the class of .dd-hidden
			*/
			$(this).next("a.icon-like-click").removeClass("dd-shown").addClass("dd-hidden");
		} 
		// Else means that this is the case if our drop-down is not shown
		else {

			// As a result, we do the reverse of what is listed above.
			$(this).next("a.icon-like-click").removeClass("dd-hidden").addClass("dd-shown");
		}
	});


});


