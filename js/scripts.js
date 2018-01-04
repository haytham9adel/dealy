
jQuery(document).ready(function() {
    var currentStep  = 1 ;

    /*
        Fullscreen background
    */
    $.backstretch("images/back10.jpg");
    
    $('#top-navbar-1').on('shown.bs.collapse', function(){
    	$.backstretch("resize");
    });
    $('#top-navbar-1').on('hidden.bs.collapse', function(){
    	$.backstretch("resize");
    });
    
    /*
        Form
    */
    $('.registration-form fieldset:first-child').fadeIn('slow');
    
    $('.registration-form input[type="text"], .registration-form input[type="password"], .registration-form textarea').on('focus', function() {
    	$(this).removeClass('input-error');

    });

	$(".invalid-feedback").hide();


	// next step
    $('.registration-form .btn-next').on('click', function() {
    	var parent_fieldset = $(this).parents('fieldset');
      	var next_step = true;

		if(currentStep==1) {

			if ( $("#form-first-name").val() =="" ) {
				$("#form-first-name").addClass('input-error');
				$("#form-first-name-feed").show();
				next_step = false;
			}else {
				$("#form-first-name").removeClass('input-error');
				$("#form-first-name-feed").hide();
			}



		} else if(currentStep==2) {

		}


    	if( next_step ) {
			currentStep++ ;
    		parent_fieldset.fadeOut(400, function() {
	    		$(this).next().fadeIn();
	    	});
    	}
    	
    });
    
    // previous step
    $('.registration-form .btn-previous').on('click', function() {
		currentStep-- ;

		$(this).parents('fieldset').fadeOut(400, function() {
    		$(this).prev().fadeIn();
    	});
    });
    
    // submit
    $('.registration-form').on('submit', function(e) {
    	
    	$(this).find('input[type="text"], input[type="password"], textarea').each(function() {
    		if( $(this).val() == "" ) {
    			e.preventDefault();
    			$(this).addClass('input-error');
    		}
    		else {
    			$(this).removeClass('input-error');
    		}
    	});
    	
    });
    
    
});
