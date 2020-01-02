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