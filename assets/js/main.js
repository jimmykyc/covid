/**
*
* -----------------------------------------------------------------------------
*
* Template : Solvency - Credit Repair & Finance HTML Template
* Author : rs-theme
* Author URI : http://www.rstheme.com/
*
* -----------------------------------------------------------------------------
*
**/
(function($) {
	"use strict";

    // Add Class
    $(".add-class").click(function(){
        $(".class-here").addClass("active");
    });
    $(".add-class2").click(function(){
        $(".class-here").toggleClass("active");
    });
    
    // sticky menu
    var header = $('.menu-sticky');
    var win = $(window);

    win.on('scroll', function() {
       var scroll = win.scrollTop();
       if (scroll < 1) {
           header.removeClass("sticky");
       } else {
           header.addClass("sticky");
       }

        $("section").each(function() {
        var elementTop = $(this).offset().top - $('#rs-header').outerHeight();
            if(scroll >= elementTop) {
                $(this).addClass('loaded');
            }
        });

    });
	
    //window load
   $(window).on( 'load', function() {
        $("#loading").delay(1500).fadeOut(500);
        $("#loading-center").on( 'click', function() {
        $("#loading").fadeOut(500);
        })
    })

   // onepage nav
   var navclose = $('#onepage-menu');
   if(navclose.length){
       $(".nav-menu li a").on("click", function () {
           if ($(".showhide").is(":visible")) {
               $(".showhide").trigger("click");
           }
       });
       
       if ($.fn.onePageNav) {
           $(".nav-menu").onePageNav({
               currentClass: "current-menu-item"
           });
       }
   }
   
    // Slider Custom jQuery
    var nivo_slider = $('#nivoSlider');
        if(nivo_slider.length){
        $('#nivoSlider').nivoSlider({
            effect: 'random',
            slices: 15,
            boxCols: 8,
            boxRows: 4,
            animSpeed: 600,
            pauseTime: 5000000000,
            startSlide: 0,
            directionNav: true,
            controlNavThumbs: false,
            pauseOnHover: true,
            manualAdvance: false
        });
    } 
   
    // collapse hidden  
     var navMain = $(".navbar-collapse");
     navMain.on("click", "a:not([data-toggle])", null, function () {
         navMain.collapse('hide');
     }); 
    

    //Project Slider
    if ($('.project-slide-1').length) {
        $('.project-slide-1').slick({
            autoplay: true,
            infinite: true,
            centerMode: false,
            arrows: true,
            dots: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
              {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
              },
              {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
              },
              {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
              },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
            ]
       });
    }

    // wow init
    new WOW().init();


    // image loaded portfolio init
    var gridfilter = $('.grid');
        if(gridfilter.length){
        $('.grid').imagesLoaded(function() {
            $('.gridFilter').on('click', 'button', function() {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });
            var $grid = $('.grid').isotope({
                itemSelector: '.grid-item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.grid-item',
                }
            });
        });
    }   
        
    // project Filter
    if ($('.gridFilter button').length) {
        var projectfiler = $('.gridFilter button');
            if(projectfiler.length){
            $('.gridFilter button').on('click', function(event) {
                $(this).siblings('.active').removeClass('active');
                $(this).addClass('active');
                event.preventDefault();
            });
        }
    }
    
    // magnificPopup init
    var imagepopup = $('.image-popup');
    if(imagepopup.length){
        $('.image-popup').magnificPopup({
            type: 'image',
            callbacks: {
                beforeOpen: function() {
                   this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure animated zoomInDown');
                }
            },
            gallery: {
                enabled: true
            }
        });
    }

    // Get a quote popup
    var popupquote = $('.popup-quote');
    if(popupquote.length){
        $('.popup-quote').magnificPopup({
            type: 'inline',
            preloader: false,
            focus: '#qname',
            removalDelay: 500,
            callbacks: {
                beforeOpen: function() {
                    this.st.mainClass = this.st.el.attr('data-effect');
                    if(win.width() < 800) {
                        this.st.focus = false;
                    } else {
                        this.st.focus = '#qname';
                    }
                }
            }
        });
    }
    
    //preloader
          $(window).on( 'load', function() {
              $("#pre-load").delay(600).fadeOut(500);
              $(".pre-loader").delay(600).fadeOut(500);

          if($(window).width() < 992) {
            $('.rs-menu').css('height', '0');
            $('.rs-menu').css('opacity', '0');
            $('.rs-menu').css('z-index', '-1');
            $('.rs-menu-toggle').on( 'click', function(){
               $('.rs-menu').css('opacity', '1');
               $('.rs-menu').css('z-index', '1');
           });
          }
      })
       
    
    /*-------------------------------------
        OwlCarousel
    -------------------------------------*/
    $('.rs-carousel').each(function() {
        var owlCarousel = $(this),
        loop = owlCarousel.data('loop'),
        items = owlCarousel.data('items'),
        margin = owlCarousel.data('margin'),
        stagePadding = owlCarousel.data('stage-padding'),
        autoplay = owlCarousel.data('autoplay'),
        autoplayTimeout = owlCarousel.data('autoplay-timeout'),
        smartSpeed = owlCarousel.data('smart-speed'),
        dots = owlCarousel.data('dots'),
        nav = owlCarousel.data('nav'),
        navSpeed = owlCarousel.data('nav-speed'),
        xsDevice = owlCarousel.data('mobile-device'),
        xsDeviceNav = owlCarousel.data('mobile-device-nav'),
        xsDeviceDots = owlCarousel.data('mobile-device-dots'),
        smDevice = owlCarousel.data('ipad-device'),
        smDeviceNav = owlCarousel.data('ipad-device-nav'),
        smDeviceDots = owlCarousel.data('ipad-device-dots'),
        smDevice2 = owlCarousel.data('ipad-device2'),
        smDeviceNav2 = owlCarousel.data('ipad-device-nav2'),
        smDeviceDots2 = owlCarousel.data('ipad-device-dots2'),
        mdDevice = owlCarousel.data('md-device'),
        centerMode = owlCarousel.data('center-mode'),
        HoverPause = owlCarousel.data('hoverpause'),
        mdDeviceNav = owlCarousel.data('md-device-nav'),
        mdDeviceDots = owlCarousel.data('md-device-dots');
        owlCarousel.owlCarousel({
            loop: (loop ? true : false),
            items: (items ? items : 4),
            lazyLoad: true,
            center: (centerMode ? true : false),
            autoplayHoverPause: (HoverPause ? true : false),
            margin: (margin ? margin : 0),
            //stagePadding: (stagePadding ? stagePadding : 0),
            autoplay: (autoplay ? true : false),
            autoplayTimeout: (autoplayTimeout ? autoplayTimeout : 1000),
            smartSpeed: (smartSpeed ? smartSpeed : 250),
            dots: (dots ? true : false),
            nav: (nav ? true : false),
            navText: ["<i class='fa-light fa-arrow-left'></i>", "<i class='fa-light fa-arrow-right'></i>"],
            navSpeed: (navSpeed ? true : false),
            responsiveClass: true,
            responsive: {
                0: {
                    items: (xsDevice ? xsDevice : 1),
                    nav: (xsDeviceNav ? true : false),
                    dots: (xsDeviceDots ? true : false),
                    center: false,
                },
                768: {
                    items: (smDevice2 ? smDevice2 : 2),
                    nav: (smDeviceNav2 ? true : false),
                    dots: (smDeviceDots2 ? true : false),
                    center: false,
                },
                992: {
                    items: (smDevice ? smDevice : 3),
                    nav: (smDeviceNav ? true : false),
                    dots: (smDeviceDots ? true : false),
                    center: false,
                },
                1200: {
                    items: (mdDevice ? mdDevice : 4),
                    nav: (mdDeviceNav ? true : false),
                    dots: (mdDeviceDots ? true : false),
                }
            }
        });
    });

    // Skill bar 
    var skillbar = $('.skillbar');
    if(skillbar.length) {
        $('.skillbar').skillBars({  
            from: 0,    
            speed: 4000,    
            interval: 100,  
            decimals: 0,    
        });
    }

    // Rs Pic 
    var rs_pie = $('.rs-pie-content');
    if(rs_pie.length) {
        $('.rs-pie').easyPieChart({
            size: 170,
            barColor: "#FF6D00",
            scaleLength: 0,
            lineWidth: 8,
            trackColor: "#0a2fa5",
            lineCap: "circle",
            animate: 2000,
        });
    }
		
    // Counter Up
    var counter = $('.rs-count');
    if(counter.length) {  
        $(".rs-count").counterUp({time:3000});
    }
    
    // scrollTop init	
    var totop = $('#scrollUp');    
    win.on('scroll', function() {
        if (win.scrollTop() > 150) {
            totop.fadeIn();
        } else {
            totop.fadeOut();
        }
    });
    totop.on('click', function() {
        $("html,body").animate({
            scrollTop: 0
        }, 500)
    });

    //canvas menu
    var navexpander = $('#nav-expander');
    if(navexpander.length){
        $('#nav-expander, #nav-close, #nav-close2, .offwrap').on('click',function(e){
            e.preventDefault();
            $('body').toggleClass('nav-expanded');
        });
    }

	
	/*----------------------------
    single-productjs active
    ------------------------------ */
    var singleproductimage = $('.single-product-image');
    if(singleproductimage.length){
        $('.single-product-image').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.single-product-nav'
        });
    }

    var singleproductnav = $('.single-product-nav');
    if(singleproductnav.length){
        $('.single-product-nav').slick({
            slidesToShow: 3,
            asNavFor: '.single-product-image',
            dots: false,
            focusOnSelect: true,
            centerMode:false,
            responsive: [
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 2
                  }
                },
                {
                  breakpoint: 591,
                  settings: {
                    slidesToShow: 2
                  }
                }
              ] 
        });
    }

    // Offcanvas btn
    $('.menu-wrap-off a').each(function(){
        var href = $(this).attr("href");
        if(href == "#"){
            $(this).addClass('hash');
        }else{
            $(this).removeClass('hash');
        }
    });


   /******** Mobile Menu Start ********/
   
   $('.mobile-navbar-menu a').each(function(){
       var href = $(this).attr("href");
       if(href ="#"){
           $(this).addClass('hash');
       }else{
           $(this).removeClass('hash');
       }
   });

   $.fn.menumaker = function(options) {
     var mobile_menu = $(this), settings = $.extend({
       format: "dropdown",
       sticky: false
     }, options);

       return this.each(function() {
       mobile_menu.find('li ul').parent().addClass('has-sub');
       var multiTg = function() {
           mobile_menu.find(".has-sub").prepend('<span class="submenu-button"><em></em></span>');
           mobile_menu.find(".hash").parent().addClass('hash-has-sub');
           mobile_menu.find('.submenu-button').on('click', function() {
               $(this).toggleClass('submenu-opened');
               if ($(this).siblings('ul').hasClass('open-sub')) {
                   $(this).siblings('ul').removeClass('open-sub').hide('fadeIn');
                   $(this).siblings('ul').hide('fadeIn');                                     
               }
               else {
                   $(this).siblings('ul').addClass('open-sub').hide('fadeIn');
                   $(this).siblings('ul').slideToggle().show('fadeIn');
               }
           });
       };

       if (settings.format === 'multitoggle') multiTg();
       else mobile_menu.addClass('dropdown');
       if (settings.sticky === true) mobile_menu.css('position', 'fixed');
      var resizeFix = function() {
           if ($( window ).width() > 991) {
               mobile_menu.find('ul').show('fadeIn');
               mobile_menu.find('ul.sub-menu').hide('fadeIn');
           }          
       };
       resizeFix();
       return $(window).on('resize', resizeFix);
       });
   };

   $(document).ready(function(){
       $("#mobile-navbar-menu").menumaker({
       format: "multitoggle"
       });
   });

    // Creator Available Tab By Date
    let customTab = document.querySelectorAll('.custom-tab-content');
    if(customTab.length){
        function hideAll() {
          customTab.forEach((tab) => {
            tab.style.display = "none";
          });
        }
        hideAll();
        let customtab1 = document.querySelector('#custom-tab-1');
        customtab1.style.display = "block";
        let selectBox = document.querySelector('#select-box');
        selectBox.addEventListener('change', () => {
            let dropdown = selectBox.value;
            hideAll();      
            document.getElementById('custom-tab-'+dropdown).style.display = "block";
        });
    }

    // swiper progressbar Slider
    var swiper = new Swiper('.slider-style1', {
        spaceBetween: 0,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        centeredSlides: false,
        mousewheel: false,
        direction: 'horizontal',
        grabCursor: true,
        speed: 1000,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        autoplay: {
            delay: 8000,
            disableOnInteraction: false,
        },
        // pagination: {
        //   el: ".swiper-pagination",
        //   type: "progressbar",
        // },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // scrollbar: {
        //   el: ".swiper-scrollbar",
        //   hide: true,
        // },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            481: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            576: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            992: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
        }
    });
    $(".slider-style1").hover(function() {
        (this).swiper.autoplay.stop();
    }, function() {
        (this).swiper.autoplay.start();
    });

    // Swiper Product Single slider
    var itemswiper = new Swiper(".myswiper", {
        spaceBetween: 30,
        slidesPerView: 3,
        freeMode: false,
        loop: true,
        watchSlidesProgress: true,
    });
    var itemswiper2 = new Swiper(".myswiper2", {
        spaceBetween: 30,
        loop: true,
        thumbs: {
            swiper: itemswiper,
        },
    });

    //CountDown Timer
    var CountTimer = $('.CountDownTimer');
    if(CountTimer.length){ 
        $(".CountDownTimer").TimeCircles({
            fg_width: 0.030,
            bg_width: 0.8,
            circle_bg_color: "#009ff9",
            circle_fg_color: "#009ff9",
            time: {
                Days:{
                    color: "#fbc02d"
                },
                Hours:{
                    color: "#fbc02d"
                },
                Minutes:{
                    color: "#fbc02d"
                },
                Seconds:{
                    color: "#fbc02d"
                }
            }
        }); 
    }

    // Copy to clipboard
    var copyText = $('.copy-text');
    if(copyText.length){
       var clipboard = new ClipboardJS('.copy-text');
    }

    // Magnify glass
    (function(){
        function roundToPlace(num, place) {
            return Math.round(num*Math.pow(10, place))/Math.pow(10, place);
        }
        $('.js-loupe').each(function() {
          var $this = $(this);
          var $image = $('.js-loupe-image', $this);
          var imgBigUrl = $image.attr('data-image-full');
          var $loupe = $('.js-loupe-element', $this).css('background-image', 'url('+imgBigUrl+')');
          var loupeSize = [$loupe.width(), $loupe.height()];
          var bigImgSize = [0,0];
          var zoomLvl = 1;
          var bigImg = document.createElement('img');
          bigImg.onload = function(){
            bigImgSize = [bigImg.width, bigImg.height]
          }
          bigImg.src = imgBigUrl;
          
          $this.on('mousemove', function(e) {
            var positionRatio = [
              Math.round(e.offsetX/$image.width() * 1000) / 1000,
              Math.round(e.offsetY/$image.height() * 1000) / 1000
            ];
            
            var offset = [
              (loupeSize[0] * positionRatio[0]) - (loupeSize[0] / 2),
              (loupeSize[1] * positionRatio[1]) - (loupeSize[1] / 2),
            ]
            
            var positionPercent = [
              'calc('+positionRatio[0]*100+'% - '+offset[0]+'px)',
              'calc('+positionRatio[1]*100+'% - '+offset[1]+'px)'
            ];
            
            $loupe.css({
              'background-position':  positionPercent.join(' '),
              'top': e.offsetY,
              'left': e.offsetX
            })
          });
          
          $this.on('mousewheel DOMMouseScroll', function(event){
            event.preventDefault();
            if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
              if(zoomLvl < 2) {
                zoomLvl += 0.1;
                $loupe.css('background-size', bigImgSize[0]*zoomLvl+'px '+bigImgSize[1]*zoomLvl+'px');
              }
            }
            else {
                if(zoomLvl > 0.5) {
                  zoomLvl -= 0.1;
                  $loupe.css('background-size', bigImgSize[0]*zoomLvl+'px '+bigImgSize[1]*zoomLvl+'px');
              }
            }
          });
        });
    }());

    // scheme-switcher
    var schemeSwitcher = $('.scheme-switcher');
    if(schemeSwitcher.length){

        // Start by getting the current theme value in localStorage
        let theme = localStorage.getItem('theme');
                    
        // Grab the class of the element that you want users to click to toggle dark and light theme/modes
        const goDarkBtn   = document.querySelector('.js-go-dark')
        const goLightBtn  = document.querySelector('.js-go-light')

        // Adds ".dark" to the <html> element, and adds "theme: dark" to localStorage
        const darkTheme = function() {
            // Applying the theme
            document.documentElement.classList.add('dark-scheme');
            localStorage.setItem('theme', 'dark-scheme');
        }

        // Adds ".dark" to the <html> element, and adds "theme: dark" to localStorage
        const lightTheme = function() {
            // Applying the theme
            document.documentElement.classList.remove('dark-scheme');
            localStorage.setItem('theme', 'light-scheme');
        }

        // Apply button color on load
        // NOW MAKE IT LIVE
        document.addEventListener('DOMContentLoaded', function() {
            localStorage.getItem('theme');    
            if (localStorage.theme === 'dark-scheme') {
            darkTheme();
            } else if (localStorage.theme === 'light-scheme') {
            lightTheme();
            } else {
            lightTheme();
            }
        });

        // Toggling the theme when `themeDark` is clicked
        goDarkBtn.addEventListener('click', function() {
            darkTheme();
        });

        // Toggling the theme when `themeLight` is clicked
        goLightBtn.addEventListener('click', function() {
            lightTheme();
        });
    }

})(jQuery);