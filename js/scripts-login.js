
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





    // submit
    $('.registration-form').on('submit', function(e) {
        var valid = true ;

        if ( $("#form-user-name").val() =="" ) {
            $("#form-user-name").addClass('input-error');
            $("#form-user-name-feed").show();
            valid = false;
        }else {
            $("#form-user-name").removeClass('input-error');
            $("#form-user-name-feed").hide();
        }


        if ( $("#form-password").val() =="" ) {
            $("#form-password").addClass('input-error');
            $("#form-password-feed").show();
            valid = false;
        }else {
            $("#form-password").removeClass('input-error');
            $("#form-password-feed").hide();
        }


        if(!valid) {
            e.preventDefault();
        } else {
            $(".invalid-feedback").hide();
            $('.registration-form input[type="text"], .registration-form input[type="password"], .registration-form textarea')
                .removeClass('input-error');
        }




    });


});
