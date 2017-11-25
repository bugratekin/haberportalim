(function($) {
    "use strict";

    $(document).ready(function() {
        /* -------------------------------------------------------------
            Menu Dropdown
        ------------------------------------------------------------- */
        if($(window).width() > 768) {
            $("#header-sticky").headroom({
              "offset": 150,
              "tolerance": 5,
              "classes": {
                "initial": "animated",
                "pinned": "slideInDown",
                "unpinned": "slideOutUp"
              }
            });

            $('#main-navbar .dropdown').on('mouseenter',function(){
                $(this).find('.dropdown-menu').first().stop(true, true).delay(300).slideDown();
            });

            $('#main-navbar .dropdown').on('mouseleave',function(){
                $(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideUp();
            });
        } else {
            $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
                event.preventDefault(); 
                event.stopPropagation(); 
                $(this).parent().siblings().removeClass('open');
                $(this).parent().toggleClass('open');
            });
        }

        /* -------------------------------------------------------------
            Variables
        ------------------------------------------------------------- */
            var leftArrow = '<i class="fa fa-chevron-left"></i>';
            var rightArrow = '<i class="fa fa-chevron-right"></i>';

        /* -------------------------------------------------------------
            top-news Slider
        ------------------------------------------------------------- */
        if ($('.top-news-slider').length){
            $('.top-news-slider').owlCarousel({
                nav:true,
                items: 1
            });
        }

        /* -------------------------------------------------------------
            most read slider
        ------------------------------------------------------------- */
        if ($('.most-read-slider').length){
            $('.most-read-slider').owlCarousel({
                nav:true,
                items: 1,
                navText: [leftArrow, rightArrow],
            });
        }
        /* -------------------------------------------------------------
            heighlights slider
        ------------------------------------------------------------- */
        if ($('.heighlights-slider').length){
            $('.heighlights-slider').owlCarousel({
                nav:true,
                items: 1,
                navText: [leftArrow, rightArrow],
            });
        }

        /* -------------------------------------------------------------
            category slider
        ------------------------------------------------------------- */
        if ($('.category-slider').length){
            $('.category-slider').owlCarousel({
                nav:true,
                items: 1,
                navText: [leftArrow, rightArrow],
            });
        }

        /* -------------------------------------------------------------
            video-news-slider
        ------------------------------------------------------------- */
        if ($('.video-news-slider').length){
            $('.video-news-slider').owlCarousel({
                nav:true,
                items: 1,
                navText: [leftArrow, rightArrow],
            });
        }

        /* -------------------------------------------------------------
            header-trending
        ------------------------------------------------------------- */
        if ($('.scoll-header .header-treanding-slider').length){
            $('.scoll-header .header-treanding-slider').owlCarousel({
                nav:true,
                items: 1,
                navText: [leftArrow, rightArrow],
            });
        }

        /* -------------------------------------------------------------
            header-trending
        ------------------------------------------------------------- */
        if ( $('.header-close-wrap').length){ 
            $('.header-close-wrap .header-close-btn').on('click', function () {
                $('.scoll-header').slideToggle("slow");

                if ($(this).text() == "CLOSE TOP SECTION")
                   $(this).text("OPEN TOP SECTION").addClass("header-close-btn-2")
                else
                   $(this).text("CLOSE TOP SECTION").removeClass("header-close-btn-2").addClass("header-close-btn");
            });
        }

        /* -------------------------------------------------------------
            push-menu-bar
        ------------------------------------------------------------- */
        if ( $('.push-menu-btn').length){ 
	        $('.push-menu-btn').on('click', function () {
	            $('.push-menu-bar').slideToggle("slow");
	            $(this).toggleClass("actives");
	            $('.push-menu-btn .push-buttom > i').toggleClass("fa-bars fa-times");
	        });
	    }

        /* -------------------------------------------------------------
            search-menu-bar
        ------------------------------------------------------------- */
        if ( $('.search-menu-btn').length){
	        $('.search-menu-btn').on('click', function () {
	            $('.search-bar').slideToggle("slow");
	            $(this).toggleClass("actives");
	            $('.search-menu-btn .search-buttom > i').toggleClass("fa-seach fa-times");
	        });
	    }

        /* -------------------------------------------------------------
            Push Menu & Search bar Close
        ------------------------------------------------------------- */
        $('body').on('click', function(event) {
            if (!$(event.target).closest('.search-menu-btn').length && !$(event.target).closest('.search-bar').length) {
                $('.search-bar').slideUp("slow");
                $('.search-menu-btn .search-buttom > i').removeClass("fa-times").addClass("fa-seach");
            }

            if (!$(event.target).closest('.push-menu-btn').length && !$(event.target).closest('.push-menu-bar').length) {
                $('.push-menu-bar').slideUp("slow");
                $('.push-menu-btn .push-buttom > i').removeClass("fa-times").addClass("fa-bars");
            }
        });
            

        /* -------------------------------------------------------------
            recent-scroll-pane
        ------------------------------------------------------------- */
        if ( $('.recent-scroll-pane').length){
            $(".recent-scroll-pane").mCustomScrollbar({
                setWidth: false,
                setHeight: 535,
            });
        }
        /* -------------------------------------------------------------
            editor-room-scroll
        ------------------------------------------------------------- */
        if ( $('.editor-room-scroll').length){
            $(".editor-room-scroll").mCustomScrollbar({
                setWidth: false,
                setHeight: 765,
            });
        }

        /* -------------------------------------------------------------
            most-read-scroll
        ------------------------------------------------------------- */
        if ( $('.most-read-scroll').length){
            $(".most-read-scroll").mCustomScrollbar({
                setWidth: false,
                setHeight: 590,
            });
        }

        /* -------------------------------------------------------------
            about-page-scroll
        ------------------------------------------------------------- */
        if ( $('.terms-condition').length){
            $(".terms-condition").mCustomScrollbar({
                setWidth: false,
                setHeight: 750,
            });
        }


        /* -------------------------------------------------------------
            trending-item-scroll
        ------------------------------------------------------------- */
        if ( $('.trending-item-scroll').length){
            $(".trending-item-scroll").mCustomScrollbar({
                setWidth: false,
                setHeight: 790,
            });
        }


        /* -------------------------------------------------------------
            flex-slider
        ------------------------------------------------------------- */
        if ( $('#carousel').length){
            $('#carousel').flexslider({
                animation: "slide",
                controlNav: false,
                animationLoop: false,
                slideshow: false,
                itemWidth: 160,
                asNavFor: '#slider',
                prevText: ['<i class="fa fa-chevron-left"></i>'],
                nextText: ['<i class="fa fa-chevron-right"></i>'],
            });
        }

        if ( $('#slider').length){
            $('#slider').flexslider({
                animation: "slide",
                controlNav: false,
                directionNav: true,
                sync: "#carousel",
                prevText: ['<i class="fa fa-chevron-left"></i>'],
                nextText: ['<i class="fa fa-chevron-right"></i>'],
            });
        }

        /* -------------------------------------------------------------
            Scroll To Top
        ------------------------------------------------------------- */
        $.scrollUp({
            scrollText: '<i class="fa fa-arrow-up"></i>',
        });

        /* -------------------------------------------------------------
            faqs-accordion
        ------------------------------------------------------------- */
        if ( $('.faqs-accordion').length){
            $( ".faqs-accordion" ).accordion({
                collapsible: true,
                heightStyle: "content",
                icons: { "header": "fa fa-plus", "activeHeader": "fa fa-minus"}
            });
        }


        /* -------------------------------------------------------------
            Sticky Sidebar
        ------------------------------------------------------------- */
        function newsboxer_sticky_sidebar(selector, offsetTop){
            if ( $(selector).length && $(window).width() > 767){
                $(selector).stick_in_parent({offset_top: offsetTop});
                $(selector)
                .on('sticky_kit:bottom', function(e) {
                    $(this).parent().css('position', 'static');
                })
                .on('sticky_kit:unbottom', function(e) {
                    $(this).parent().css('position', 'relative');
                })
            }
        } 
        
        if ( $('.single-post-leftbar').length){
            newsboxer_sticky_sidebar('.single-post-leftbar',20);
        }
        
        /* -------------------------------------------------------------
            Google Map
        ------------------------------------------------------------- */
        var map;
        window.initMap = function() {
            if ( $('#map').length){
                map = new google.maps.Map(document.getElementById('map'), {
                center: {lat: -34.397, lng: 150.644},
                zoom: 8
                });
            }
        }

    });
})(jQuery);
