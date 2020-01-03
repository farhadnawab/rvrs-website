(function($){

    /** Trigger AOS  **/
    AOS.init();

    /** Sticky Header **/
    var stickyOffset = $("#header").outerHeight();
    $("body").css("padding-top", stickyOffset);

    var Scroll;
    function StickyHeader(){		
        Scroll = $(window).scrollTop();
        
        if (Scroll >= 80)
            $("body").addClass('sticked');
        else
            $("body").removeClass('sticked');
    }
    StickyHeader();
    $(window).scroll(function(){
        StickyHeader();
    });


    // handle links with @href started with '#' only
    $(document).on('click', 'a[href^="#"]', function(e) {
        // target element id
        var id = $(this).attr('href');

        // target element
        var $id = $(id);
        if ($id.length === 0) {
            return;
        }

        // prevent standard hash navigation (avoid blinking in IE)
        e.preventDefault();

        // top position relative to the document
        var pos = $id.offset().top;

        // animated top scrolling
        $('body, html').animate({scrollTop: pos});
    });
    
}(jQuery));

/** Nav Toggle **/
function openMenu(){
    var navMenuDiv = document.getElementById("nav-content");
    navMenuDiv.classList.add("active");
}
function closeMenu(){
    var navMenuDiv = document.getElementById("nav-content");
    navMenuDiv.classList.remove("active");
}