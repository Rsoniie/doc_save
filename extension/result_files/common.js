$(document).ready(function() {
    $(document).on('click', ".lattest-news a", function(e) {
        // e.preventDefault();
        $(this).toggleClass('active')
        $('.lattest-news-slider').toggleClass("lattest-news-slider_deactive");
    });

    $(".inner-accordion .acc-head").click(function() {
        parent = $(this).parents('.inner-accordion');
        $(parent).find(".acc-head").not(this).removeClass('active').stop().next('.acc-content').stop().slideUp();
        $(this).toggleClass('active').next('.acc-content').stop().slideToggle(function() {
            if ($(this).prev('.acc-head').hasClass('active')) {
                $('html, body').stop().animate({
                    scrollTop: $(this).prev('.acc-head').offset().top - 100
                }, 500);
            }
        });
    })


    //start home popup	
    $(".thumb1").click(function(e) {
        e.preventDefault()
        $('html').addClass('lock')
        $(".popup1,.overlay, body").show();

    });

    $(".thumb2").click(function(e) {
        e.preventDefault()
        $('html').addClass('lock')
        $(".popup2,.overlay, body").show();
    });
    //end home popup


    //start testimonial popup
    $(".testm-ms").click(function(e) {
        e.preventDefault()
        $('html').addClass('lock')
        $(".ms-popup,.overlay, body").show();
    });

    $(".testm-ss").click(function(e) {
        e.preventDefault()
        $('html').addClass('lock')
        $(".ss-popup,.overlay, body").show();
    });

    $(".testm-bj").click(function(e) {
        e.preventDefault()
        $('html').addClass('lock')
        $(".bj-popup,.overlay, body").show();
    });

    $(".testm-vs").click(function(e) {
        e.preventDefault()
        $('html').addClass('lock')
        $(".vs-popup,.overlay, body").show();
    });

    //end testimonial popup	


    //start sol popup
    $(".sol-1").click(function(e) {
        e.preventDefault()
        $('html').addClass('lock')
        $(".sol-1-popup,.overlay, body").show();
    });

    $(".sol-2").click(function(e) {
        e.preventDefault()
        $('html').addClass('lock')
        $(".sol-2-popup,.overlay, body").show();
    });

    $(".sol-3").click(function(e) {
        e.preventDefault()
        $('html').addClass('lock')
        $(".sol-3-popup,.overlay, body").show();
    });

    $(".sol-4").click(function(e) {
        e.preventDefault()
        $('html').addClass('lock')
        $(".sol-4-popup,.overlay, body").show();
    });
    //end sol popup	

    //start other popup
    $(".other-1").click(function(e) {
        e.preventDefault()
        $('html').addClass('lock')
        $(".other-1-popup,.overlay, body").show();
    });

    $(".other-2").click(function(e) {
        e.preventDefault()
        $('html').addClass('lock')
        $(".other-2-popup,.overlay, body").show();
    });

    $(".other-3").click(function(e) {
        e.preventDefault()
        $('html').addClass('lock')
        $(".other-3-popup,.overlay, body").show();
    });

    $(".other-4").click(function(e) {
        e.preventDefault()
        $('html').addClass('lock')
        $(".other-4-popup,.overlay, body").show();
    });

    $(".other-5").click(function(e) {
        e.preventDefault()
        $('html').addClass('lock')
        $(".other-5-popup,.overlay, body").show();
    });

    $(".other-6").click(function(e) {
        e.preventDefault()
        $('html').addClass('lock')
        $(".other-6-popup,.overlay, body").show();
    });

    $(".other-7").click(function(e) {
        e.preventDefault()
        $('html').addClass('lock')
        $(".other-7-popup,.overlay, body").show();
    });

    $(".other-8").click(function(e) {
        e.preventDefault()
        $('html').addClass('lock')
        $(".other-8-popup,.overlay, body").show();
    });

    $(".other-9").click(function(e) {
        e.preventDefault()
        $('html').addClass('lock')
        $(".other-9-popup,.overlay, body").show();
    });

    $(".other-10").click(function(e) {
        e.preventDefault()
        $('html').addClass('lock')
        $(".other-10-popup,.overlay, body").show();
    });

    $(".other-11").click(function(e) {
        e.preventDefault()
        $('html').addClass('lock')
        $(".other-11-popup,.overlay, body").show();
    });

    $(".other-12").click(function(e) {
        e.preventDefault()
        $('html').addClass('lock')
        $(".other-12-popup,.overlay, body").show();
    });

    $(".other-13").click(function(e) {
        e.preventDefault()
        $('html').addClass('lock')
        $(".other-13-popup,.overlay, body").show();
    });

    $(".other-14").click(function(e) {
        e.preventDefault()
        $('html').addClass('lock')
        $(".other-14-popup,.overlay, body").show();
    });
    $(".other-15").click(function(e) {
        e.preventDefault()
        $('html').addClass('lock')
        $(".other-15-popup,.overlay, body").show();
    });
    $(".other-16").click(function(e) {
        e.preventDefault()
        $('html').addClass('lock')
        $(".other-16-popup,.overlay, body").show();
    });
    $(".other-17").click(function(e) {
        e.preventDefault()
        $('html').addClass('lock')
        $(".other-17-popup,.overlay, body").show();
    });
    $(".other-18").click(function(e) {
        e.preventDefault()
        $('html').addClass('lock')
        $(".other-18-popup,.overlay, body").show();
    });
    $(".other-19").click(function(e) {
        e.preventDefault()
        $('html').addClass('lock')
        $(".other-19-popup,.overlay, body").show();
    });
    $(".other-20").click(function(e) {
        e.preventDefault()
        $('html').addClass('lock')
        $(".other-20-popup,.overlay, body").show();
    });
    $(".other-21").click(function(e) {
        e.preventDefault()
        $('html').addClass('lock')
        $(".other-21-popup,.overlay, body").show();
    });
    $(".other-22").click(function(e) {
        e.preventDefault()
        $('html').addClass('lock')
        $(".other-21-popup,.overlay, body").show();
    });
    $(".other-23").click(function(e) {
        e.preventDefault()
        $('html').addClass('lock')
        $(".other-21-popup,.overlay, body").show();
    });
    $(".other-24").click(function(e) {
        e.preventDefault()
        $('html').addClass('lock')
        $(".other-21-popup,.overlay, body").show();
    });
    $(".other-25").click(function(e) {
        e.preventDefault()
        $('html').addClass('lock')
        $(".other-21-popup,.overlay, body").show();
    });
    $(".other-26").click(function(e) {
        e.preventDefault()
        $('html').addClass('lock')
        $(".other-21-popup,.overlay, body").show();
    });
    $(".other-27").click(function(e) {
        e.preventDefault()
        $('html').addClass('lock')
        $(".other-21-popup,.overlay, body").show();
    });
    $(".other-28").click(function(e) {
        e.preventDefault()
        $('html').addClass('lock')
        $(".other-21-popup,.overlay, body").show();
    });


    //end other popup	


    $(".closebtn").click(function(e) {
        e.preventDefault()
        $('html').removeClass('lock')
        $(".popup1,.popup2,.ms-popup,.ss-popup,.bj-popup,.vs-popup,.sol-1-popup,.sol-2-popup,.sol-3-popup,.sol-4-popup,.other-1-popup,.other-2-popup,.other-3-popup,.other-4-popup,.other-5-popup,.other-6-popup,.other-7-popup,.other-8-popup,.other-9-popup,.other-10-popup,.other-11-popup,.other-12-popup,.other-13-popup,.other-14-popup,.other-15-popup,.other-16-popup,.other-17-popup,.other-18-popup,.other-19-popup,.other-20-popup,.other-21-popup,.other-22-popup,.other-23-popup,.other-24-popup,.other-25-popup,.other-26-popup,.other-27-popup,.other-28-popup,.overlay,").hide();
    });



    //start vedio popup
    $(".video").click(function(e) {
        e.preventDefault();
        $("#sbiplayer").attr('src', 'https://www.youtube.com/embed/WWLyF_kJX9U?autoplay=1');
        $('html').addClass('lock')
        $(".video-popup,.overlay, body").show();
    });

    $(".md1-video").click(function(e) {
        e.preventDefault();
        $("#md1player").attr('src', 'https://www.youtube.com/embed/MpLV5iuT-k0?autoplay=1');
        $('html').addClass('lock')
        $(".md1-popup,.overlay, body").show();
    });

    $(".md2-video").click(function(e) {
        e.preventDefault();
        $("#md2player").attr('src', 'https://www.youtube.com/embed/6h_Ax3axb8w?autoplay=1');
        $('html').addClass('lock')
        $(".md2-popup,.overlay, body").show();
    });

    $(".md3-video").click(function(e) {
        e.preventDefault();
        $("#md3player").attr('src', 'https://www.youtube.com/embed/WWLyF_kJX9U?autoplay=1');
        $('html').addClass('lock')
        $(".md3-popup,.overlay, body").show();
    });

    $(".md4-video").click(function(e) {
        e.preventDefault();
        $("#md4player").attr('src', 'https://www.youtube.com/embed/poaX3CKfXkU?autoplay=1');
        $('html').addClass('lock')
        $(".md4-popup,.overlay, body").show();
    });


    $(".close").click(function(e) {
        e.preventDefault()
        $('html').removeClass('lock')
        $(".video-popup,.md1-popup,.md2-popup,.md3-popup,.md4-popup,.overlay").hide();
    });


    //end vedio popup	


    //start top menu dropdown
    $(document).on('mouseenter', ".menu > li", function() {
            w = $(this).outerWidth();
            showContainer = $(this).find('.inner');
            W = showContainer.outerWidth();
            $(showContainer).css({
                "left": (w / 2) - (W / 2)
            })
        })
        //end top menu dropdown	


    $('.homebxslider').bxSlider({ speed: 1000, auto: true, mode: 'fade', zoom: true, pause: 8000, pager: false });

    $('.contentslider').bxSlider({
        pager: true,
    });



    home_slider1 = $("#home-slider1").bxSlider({
        auto: false,
        infiniteLoop: false,
        autoControls: false,
        responsive: true,
        controls: true,
        hideControlOnEnd: true,
        pagerCustom: '.bx-pager',
        speed: 1500,
        startSlide: 0,
        hideControlOnEnd: true,
        onSlideBefore: function($slideElement, oldIndex, newIndex) {
            home_slider2.goToSlide(newIndex);
        }

    })
    home_slider2 = $("#home-slider2").bxSlider({
        auto: false,
        infiniteLoop: false,
        autoControls: false,
        responsive: true,
        controls: false,
        speed: 500,
        hideControlOnEnd: true,
        pagerCustom: '.bx-pager',
        onSlideBefore: function($slideElement, oldIndex, newIndex) {
            home_slider1.goToSlide(newIndex);

            $("#home-slider2").find("li").show().addClass("slideInUp animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                $(this).removeClass("slideInUp animated");
            });

        }
    })


    // $('.carousel').bxSlider({speed:1000, auto:true, startSlide:0, responsive:true, neToOneTouch:true,swipeThreshold:50, pause: 4000, pager:false, });
    //	

    var userAgent = navigator.userAgent.toLowerCase();
    if (/msie/.test(userAgent) && parseFloat((userAgent.match(/.*(?:rv|ie)[\/: ](.+?)([ \);]|$)/) || [])[1]) < 9) {
        $('#wrapper').html("<div class='browser'>Get the latest version of IE for a superior experience.<div>To upgrade your IE, <a href='http://download.microsoft.com/download/A/C/9/AC924EA1-9F39-4DFD-99DF-2C1DEB922174/EIE11/WOL/EIE11_EN-US_WOL_WIN7.EXE' target='_blank'>click here.</a></div></div>");

        return false;
    }

    $(".link-pages ul li a").click(function(e) {
        //		e.preventDefault();
        id = $(this).attr("href");
        if (id == "#") {
            return false;
        }
        $("#home").hide();
        $(this).parents("ul").find('li').removeClass("active");
        $(this).parent("li").addClass("active");

        $("#pageTitle").html($(this).text())

        // animPages(id)

        $("body").removeClass('hamburger-visible');

    });

    $(".link-pages ul li.active a").click();

    $(".logo").click(function(e) {
        $("#pageTitle").html("");
        $(".page-content").hide();
        $("#home").show();
        //e.preventDefault();
        $(".link-pages ul li").removeClass('active')
        id = $(this).attr("href");

        // animPages(id);
        $("body").removeClass('hamburger-visible');
    })
    $(".logo").click();


    $(document).on('click', '.icon-hamburger', function() {
        $(".hamburger-overlay").remove();
        $(".hide-mobile").toggle();
        $("body").toggleClass('hamburger-visible').append("<div class='hamburger-overlay'></div>");
    });

    $(document).on('click', '.hamburger-overlay', function() {
        $(this).remove();
        $("body").toggleClass('hamburger-visible');
    })



    $(".tabs .tab-links li a").click(function(e) {
        e.preventDefault();

        var tabContentId = $(this).attr('href').toString();
        var tabWrapper = $(this).parents('.tabs').eq(0);

        $(this).parents('.tab-links').eq(0).find('li').removeClass('active');
        $(this).parent('li').addClass('active');

        $(tabWrapper).children('.tab-content').hide()
        $(tabWrapper).children(tabContentId).show();

    })

    $(".tabs .tab-links li.active a").click();


    $(".mobile-num-only, .mmyy").keydown(function(e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
            // Allow: Ctrl+A, Command+A
            (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) ||
            // Allow: home, end, left, right, down, up
            (e.keyCode >= 35 && e.keyCode <= 40)) {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });


    //syntax highlighter
    hljs.tabReplace = '';
    hljs.initHighlightingOnLoad();

    $.fn.slideFadeToggle = function(speed, easing, callback) {
        return this.animate({ opacity: 'toggle', height: 'toggle' }, speed, easing, callback);
    };

    //accordion
    // $('.accordion').accordion({
    //     defaultOpen: ' ',
    //     cookieName: 'accordion_nav',
    //     speed: 'slow',
    //     animateOpen: function (elem, opts) { //replace the standard slideUp with custom function
    //         elem.next().stop(true, true).slideFadeToggle(opts.speed, function(){
    // 				console.log($(elem).offset().top)
    // 				$('html, body').stop().animate({
    // 					scrollTop:$(elem).offset().top - 100
    // 				}, 500);
    // 			});
    //     },
    //     animateClose: function (elem, opts) { //replace the standard slideDown with custom function
    //         elem.next().stop(true, true).slideFadeToggle(opts.speed);
    // 	},
    // });



    //fix for IE7 and IE8
    $(function() {
        if (!$.support.placeholder) {
            $("[placeholder]").focus(function() {
                if ($(this).val() == $(this).attr("placeholder")) $(this).val("");
            }).blur(function() {
                if ($(this).val() == "") $(this).val($(this).attr("placeholder"));
            }).blur();

            $("[placeholder]").parents("form").submit(function() {
                $(this).find('[placeholder]').each(function() {
                    if ($(this).val() == $(this).attr("placeholder")) {
                        $(this).val("");
                    }
                });
            });
        }
    });


})


$('.tab-content').slice(1).hide();
$('.tab-links ul li').eq(0).addClass('active');
$('.tab-links ul li a').click(function(e) {
    e.preventDefault();
    var content = $(this).attr('href');
    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');
    $(content).show();
    $(content).siblings('.tab-content').hide();
});

$(".tab-content .accordion").click(function() {
    $(this).next().slideToggle()
        .siblings(".tab-content .accordion-content:visible").slideUp();
});



// function animPages(mainWrap){
// 	id = mainWrap;
// 	$(".page-content").hide();
// 	$(id).show();
// 	$(id).scrollTop(0);
// 	}

function getHashAndScroll(h) {
    $id = window.location.hash.substr(0);
    if ($id.length > 0) {
        scrollTill($id, h);
    }
}

function scrollTill(thisEl, h) {
    $('html, body').stop().animate({
        scrollTop: $(thisEl).offset().top - h
    }, 500);
}

$(function() {

    $(document).on('click', '.box-shadow a, .scroll-wrap a, .box-shadow2 a, .scroll-wrap1 a[href*=\\#]:not([href=\\#])', function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {

                h = 74;
                if ($(window).width() < 1024) {
                    h = 116;
                }
                //if($(window).width() < )  
                $('html,body').animate({
                    scrollTop: target.offset().top - h
                }, 1000);
                return false;
            }


        }
    });
});


//show select dropdown div content//
function show(select_item) {
    if (select_item == "Other") {
        hiddenDiv.style.visibility = 'visible';
        hiddenDiv.style.display = 'block';
        Form.fileURL.focus();
    } else {
        hiddenDiv.style.visibility = 'hidden';
        hiddenDiv.style.display = 'none';
    }
}

/* start Disable right click and few click */
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    alert("Right-click functionality is disabled on this website.");
}, false);
function ctrlShiftKey(e, keyCode) {
    return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}

document.onkeydown = (e) => {
    // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
    if (
        event.keyCode === 123 || event.keyCode == 18 ||
        ctrlShiftKey(e, 'I') ||
        ctrlShiftKey(e, 'J') ||
        ctrlShiftKey(e, 'C') ||
        (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
    )
        return false;
};
/* end Disable right click and few click */