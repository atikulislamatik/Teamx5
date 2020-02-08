(function($) {
    //preloader start
    $(document).on("scroll", function() {
        if ($(document).scrollTop() > 600) {
            $("header").addClass("black");
        }
        else {
            $("header").removeClass("black");
        }
    }
    );
    // magnific popup
    $('.foot-gall-pop').magnificPopup( {
        type: 'image', removalDelay: 300, gallery: {
           
            enabled: true
        }
        ,
    }
    );

    // isotope js
    $('.portfolio-list').isotope( {
        itemSelector: '.item'
    }
    );
    $('.all-portfolio li').click(function() {
        $('.all-portfolio li').removeClass('active-portfolio');
        $(this).addClass('active-portfolio');
        var selector=$(this).attr('data-filter');
        $('.portfolio-list').isotope( {
            filter: selector
        }
        );
        return false;
    }
    );
    // 
    $(".team-slider").owlCarousel( {
        dots: true, items:1, loop:true, autoplay:true, autoplayTimeout:2500
    }
    );
    //testimonial slider 
    $(".testimonial-slider").owlCarousel( {
        items:1, loop:true, autoplay:false, autoplayTimeout:2500, smartSpeed :1000, autoplayHoverPause:true, responsiveClass:true, responsive: {
            0: {
                items: 1
            }
            , 600: {
                items: 1
            }
            , 1000: {
                items: 1
            }
        }
    }
    );
    // woo js
    new WOW( {
        offset: 100, mobile: true
    }
    ).init();
    //
      $(document).ready(function(){
        $('#hello').slicknav({
            'label' : '',
        });
    });
}

(jQuery));