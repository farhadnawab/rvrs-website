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
        //$("body").addClass("scrolling");


        // animated top scrolling
        $('body, html').animate({scrollTop: pos}, 400, function(){
            //$("body").removeClass("scrolling");
        });
    });

    
    $(document).on('click', '.tabs a', function(e) {
        // target element id
        
        var id = $(this).attr('data-tab-open');
        
        // target element
        var $id = $(id);

        //Tab link Functionality
        $(".tabs a").removeClass("bg-white");
        $(this).addClass("bg-white");

        if(id == "#yearly"){
            $(this).addClass("text-design-orange");
            $("#yearly-mark").addClass("active");
            $(".tab-wrapper").addClass("is-flipped");
        }
        else{
            $(".tabs a").removeClass("text-design-orange");
            $("#yearly-mark").removeClass("active");
            $(".tab-wrapper").removeClass("is-flipped");
        }
        
        
        $(".tab-wrapper").css("padding-top", $id.outerHeight());
    });

    $(".tab-wrapper").css("padding-top", $("#monthly").outerHeight());
    
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