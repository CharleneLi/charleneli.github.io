
// carousel from main view

$(document).ready(function(){
        $('.carousel').carousel({
        });
    });

// fade in paragraphs

$(document).ready(function() {

    $(window).scroll( function(){
        $('.parawrite').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if( bottom_of_window > bottom_of_object ){          
                $(this).animate({'opacity':'1'},1500);}
            }); 
        });
    });
    
    