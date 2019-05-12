(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

$(function () {
    "use strict";
    /*  =====  On responsive swatch left to right colunm  =====  */

    function left_colunm_swetch() {
        if ($(window).width() <= 767) {
            localStorage.setItem('display', 'wrapper');
            $('#column-right:parent').each(function () {
                $(this).insertBefore($(this).prev('#column-left'));
            });
        }
        if ($(window).width() > 767) {
            localStorage.setItem('display', 'wrapper');
            $('#column-left:parent').each(function () {
                $(this).insertBefore($(this).prev('#column-right'));
            });
        }
    }
    /*  =====  magnificPopup  =====  */
    function m_popup_select() {
        $('#product-thumbnail').magnificPopup({
            delegate: 'a',
            type: 'image',
            closeOnContentClick: false,
            closeBtnInside: false,
            mainClass: 'mfp-with-zoom mfp-img-mobile',
            image: {
                verticalFit: true
            },
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true,
                duration: 300, // don't foget to change the duration also in CSS
                opener: function opener(element) {
                    return element.find('img');
                }
            }

        });
    }
    /* ===== Search  =====   */
    function search() {
        var i = $("#search-overlay-btn");
        var a = $(".search-overlay, .search-overlay .search-overlay-close");
        i.on('click', function (event) {
            $(".search-overlay").addClass("open"), $('.search-overlay > form > input[type="search"]').focus();
        });
        a.on('click', function (event) {
            event.target != this && "search-overlay-close" != event.target.className && 32 != event.keyCode || $(this).removeClass("open");
        });
    }
    /* ===== Grid list active  =====   */
    function gl_active() {
        $('.btn-list-grid button').on('click', function () {
            if ($(this).hasClass('grid-view')) {
                $('.btn-list-grid button').addClass('active');
                $('.btn-list-grid button.list-view').removeClass('active');
            } else if ($(this).hasClass('list-view')) {
                $('.btn-list-grid button').addClass('active');
                $('.btn-list-grid button.grid-view').removeClass('active');
            }
        });
    }
    /* ===== Grid list View  =====   */
    function gl_view() {
        // Product List
        $('#list-view').on('click', function () {
            $('.product-layout > .clearfix').remove();
            $('.product-layout').attr('class', 'product-layout product-list col-xs-12');
            $('#column-left .product-layout').attr('class', 'product-layout mb_20');
            $('#column-right .product-layout').attr('class', 'product-layout mb_20');
        });
        // Product Grid
        $('#grid-view').on('click', function () {
            $('.product-layout').attr('class', 'product-layout product-grid col-md-4 col-sm-6 col-xs-12');
        });
    }
    /* ===== Timer  =====   */
    function makeTimer() {
        var endTime = new Date("August 10, 2018 12:00:00 PDT");
        var endTime = Date.parse(endTime) / 1000;
        var now = new Date();
        var now = Date.parse(now) / 1000;
        var timeLeft = endTime - now;
        var days = Math.floor(timeLeft / 86400);
        var hours = Math.floor((timeLeft - days * 86400) / 3600);
        var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
        var seconds = Math.floor(timeLeft - days * 86400 - hours * 3600 - minutes * 60);

        if (hours < "10") {
            hours = "0" + hours;
        }
        if (minutes < "10") {
            minutes = "0" + minutes;
        }
        if (seconds < "10") {
            seconds = "0" + seconds;
        }

        $(".days").html(days + "<span>Days</span>");
        $(".hours").html(hours + "<span>Hours</span>");
        $(".minutes").html(minutes + "<span>Min</span>");
        $(".seconds").html(seconds + "<span>Sec</span>");
    }
    setInterval(function () {
        makeTimer();
    }, 1000);
    /* ===== Login Register Tab  =====   */
    function log_reg_tab() {
        $('#login-form-link').on('click', function (e) {
            $("#login-form").delay(100).fadeIn(100);
            $("#register-form").fadeOut(100);
            $('#register-form-link').removeClass('active');
            $(this).addClass('active');
            e.preventDefault();
        });
        $('#register-form-link').on('click', function (e) {
            $("#register-form").delay(100).fadeIn(100);
            $("#login-form").fadeOut(100);
            $('#login-form-link').removeClass('active');
            $(this).addClass('active');
            e.preventDefault();
        });
    }
    /*  footer toggle */
    function footerToggle() {
        if ($(window).width() < 991) {
            $(".footer .toggle_div").remove();
            $(".footer-title").append("<a class='toggle_div'>&nbsp;</a>");
            $(".footer-title").addClass('toggle');
            $(".footer-title").addClass('active');
            $(".footer .toggle_div").on('click', function () {
                $(this).parent().toggleClass('active').parent().find('ul').slideToggle('slow');
            });
        } else {
            $(".footer-title").parent().find('ul').removeAttr('style');
            $(".footer-title").removeClass('active');
            $(".footer-title").removeClass('toggle');
            $(".footer .toggle_div").remove();
        }
    }

    function owl_carousel() {
        $('.main-banner').owlCarousel({
            autoplay: false,
            responsiveClass: true,
            dots: true,
            items: 1, //10 items above 1000px browser width
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                600: {
                    items: 1,
                    nav: false
                },
                1000: {
                    items: 1,
                    nav: false
                }
            }
        });

        $('.nArrivals , .Bestsellers , .Featured').owlCarousel({
            autoplay: false,
            responsiveClass: true,
            items: 4, //10 items above 1000px browser width
            responsive: {
                0: {
                    items: 2,
                    nav: true
                },
                400: {
                    items: 2,
                    nav: true
                },
                600: {
                    items: 3,
                    nav: true
                },
                1000: {
                    items: 4,
                    nav: true
                }
            }
        });

        $('#featu-pro , #bests-pro , #new-pro').owlCarousel({
            autoplay: false,
            responsiveClass: true,
            items: 1, //10 items above 1000px browser width
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                480: {
                    items: 2,
                    nav: true
                },
                767: {
                    items: 2,
                    nav: true
                },
                1000: {
                    items: 1,
                    nav: true
                }
            }
        });
        /* ===== Specials and client carousel =====   */
        $('.client').owlCarousel({
            autoplay: false,
            responsiveClass: true,
            items: 1, //10 items above 1000px browser width
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                600: {
                    items: 1,
                    nav: false
                },
                1000: {
                    items: 1,
                    nav: false
                }
            }
        });
        /* ===== left-special carousel =====   */
        $('#left-special').owlCarousel({
            autoplay: false,
            responsiveClass: true,
            items: 1, //10 items above 1000px browser width
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                480: {
                    items: 2,
                    nav: true
                },
                768: {
                    items: 1,
                    nav: true
                },
                1000: {
                    items: 1,
                    nav: true
                }
            }
        });

        /* ===== Offers carousel =====   */
        $('.offers').owlCarousel({
            loop: true,
            autoplay: true,
            responsiveClass: true,
            items: 3, //10 items above 1000px browser width
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                600: {
                    items: 1,
                    nav: false
                },
                1200: {
                    items: 2,
                    nav: false
                },
                1360: {
                    items: 3,
                    nav: false
                }
            }
        });
        $('.related-pro').owlCarousel({
            autoplay: false,
            responsiveClass: true,
            items: 3, //10 items above 1000px browser width
            responsive: {
                0: {
                    items: 2,
                    nav: false
                },
                600: {
                    items: 2,
                    nav: false
                },
                1000: {
                    items: 3,
                    nav: true
                },
                1200: {
                    items: 3,
                    nav: true
                }
            }
        });

        /* ===== Product Thumbnail =====   */
        $('#product-thumbnail').owlCarousel({
            loop: false,
            thumbs: true,
            autoplay: false,
            items: 5, //10 items above 1000px browser width
            nav: true
        });

        /* ===== Brand carousel =====   */
        $('.brand').owlCarousel({
            loop: true,
            autoplay: true,
            responsiveClass: true,
            items: 6, //10 items above 1000px browser width
            responsive: {
                0: {
                    items: 2,
                    nav: false
                },
                400: {
                    items: 3,
                    nav: false
                },
                600: {
                    items: 4,
                    nav: false
                },
                1000: {
                    items: 6,
                    nav: false,
                    loop: true
                }
            }
        });
        /* ===== Blog carousel =====   */
        $('.blog').owlCarousel({
            autoplay: false,
            responsiveClass: true,
            items: 2, //10 items above 1000px browser width
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 2,
                    nav: true
                },
                1000: {
                    items: 2,
                    nav: true
                }
            }
        });

        /* ===== Team carousel =====   */
        $('.team3col').owlCarousel({
            autoplay: false,
            responsiveClass: true,
            items: 3, //10 items above 1000px browser width
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                600: {
                    items: 2,
                    nav: true
                },
                1000: {
                    items: 3,
                    nav: true
                }
            }
        });
    }
    /* ---- Page Scrollup JS Start ---- */
    //When distance from top = 250px fade button in/out

    $(window).scroll(function () {
        if ($(this).scrollTop() > 250) {

            $('#scrollup').fadeIn(300);
        } else {
            $('#scrollup').fadeOut(300);
        }
    });
    $('#scrollup').on('click', function () {
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
    });

    /* ===== Event for windows and document =====   */

    $(document).ready(function () {
        gl_active();
        gl_view();
        search();
        footerToggle();
        // m_popup_select ();
        log_reg_tab();
    });

    $(window).ready(function () {
        $('[data-toggle="tooltip"]').tooltip();
        owl_carousel();
        left_colunm_swetch();
    });

    $(window).resize(function () {
        left_colunm_swetch();
        gl_active();
        gl_view();
        search();
        footerToggle();
    });
});
jQuery(window).on("load", function () {
    $(".loder").fadeOut("slow");
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjdXN0b20uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLEVBQUUsWUFBVztBQUNiO0FBQ0M7O0FBQ0QsYUFBUyxrQkFBVCxHQUErQjtBQUMzQixZQUFJLEVBQUcsTUFBSCxFQUFZLEtBQVosTUFBdUIsR0FBM0IsRUFBZ0M7QUFDNUIseUJBQWEsT0FBYixDQUFxQixTQUFyQixFQUFnQyxTQUFoQztBQUNBLGNBQUUsc0JBQUYsRUFBMEIsSUFBMUIsQ0FBK0IsWUFBWTtBQUMzQyxrQkFBRSxJQUFGLEVBQVEsWUFBUixDQUFxQixFQUFFLElBQUYsRUFBUSxJQUFSLENBQWEsY0FBYixDQUFyQjtBQUNDLGFBRkQ7QUFHSDtBQUNELFlBQUksRUFBRSxNQUFGLEVBQVUsS0FBVixLQUFvQixHQUF4QixFQUE2QjtBQUN6Qix5QkFBYSxPQUFiLENBQXFCLFNBQXJCLEVBQWdDLFNBQWhDO0FBQ0EsY0FBRSxxQkFBRixFQUF5QixJQUF6QixDQUE4QixZQUFZO0FBQzFDLGtCQUFFLElBQUYsRUFBUSxZQUFSLENBQXFCLEVBQUUsSUFBRixFQUFRLElBQVIsQ0FBYSxlQUFiLENBQXJCO0FBQ0MsYUFGRDtBQUdIO0FBQ0o7QUFDQTtBQUNBLGFBQVMsY0FBVCxHQUEyQjtBQUN4QixVQUFFLG9CQUFGLEVBQXdCLGFBQXhCLENBQXNDO0FBQ3RDLHNCQUFVLEdBRDRCO0FBRXRDLGtCQUFNLE9BRmdDO0FBR3RDLGlDQUFxQixLQUhpQjtBQUl0Qyw0QkFBZ0IsS0FKc0I7QUFLdEMsdUJBQVcsOEJBTDJCO0FBTXRDLG1CQUFPO0FBQ0wsNkJBQWE7QUFEUixhQU4rQjtBQVN0QyxxQkFBUztBQUNQLHlCQUFTO0FBREYsYUFUNkI7QUFZdEMsa0JBQU07QUFDSix5QkFBUyxJQURMO0FBRUosMEJBQVUsR0FGTixFQUVXO0FBQ2Ysd0JBQVEsZ0JBQVMsT0FBVCxFQUFrQjtBQUN4QiwyQkFB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b290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIiQoZnVuY3Rpb24oKSB7XHJcblwidXNlIHN0cmljdFwiO1xyXG4gLyogID09PT09ICBPbiByZXNwb25zaXZlIHN3YXRjaCBsZWZ0IHRvIHJpZ2h0IGNvbHVubSAgPT09PT0gICovXHJcbmZ1bmN0aW9uIGxlZnRfY29sdW5tX3N3ZXRjaCAoKSB7XHJcbiAgICBpZiAoJCggd2luZG93ICkud2lkdGgoKSA8PSA3NjcpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGlzcGxheScsICd3cmFwcGVyJyk7XHJcbiAgICAgICAgJCgnI2NvbHVtbi1yaWdodDpwYXJlbnQnKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLmluc2VydEJlZm9yZSgkKHRoaXMpLnByZXYoJyNjb2x1bW4tbGVmdCcpKTtcclxuICAgICAgICB9KTsgICAgIFxyXG4gICAgfVxyXG4gICAgaWYgKCQod2luZG93KS53aWR0aCgpID4gNzY3KSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Rpc3BsYXknLCAnd3JhcHBlcicpO1xyXG4gICAgICAgICQoJyNjb2x1bW4tbGVmdDpwYXJlbnQnKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLmluc2VydEJlZm9yZSgkKHRoaXMpLnByZXYoJyNjb2x1bW4tcmlnaHQnKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIC8qICA9PT09PSAgbWFnbmlmaWNQb3B1cCAgPT09PT0gICovXHJcbiBmdW5jdGlvbiBtX3BvcHVwX3NlbGVjdCAoKSB7XHJcbiAgICAkKCcjcHJvZHVjdC10aHVtYm5haWwnKS5tYWduaWZpY1BvcHVwKHtcclxuICAgIGRlbGVnYXRlOiAnYScsXHJcbiAgICB0eXBlOiAnaW1hZ2UnLFxyXG4gICAgY2xvc2VPbkNvbnRlbnRDbGljazogZmFsc2UsXHJcbiAgICBjbG9zZUJ0bkluc2lkZTogZmFsc2UsXHJcbiAgICBtYWluQ2xhc3M6ICdtZnAtd2l0aC16b29tIG1mcC1pbWctbW9iaWxlJyxcclxuICAgIGltYWdlOiB7XHJcbiAgICAgIHZlcnRpY2FsRml0OiB0cnVlLFxyXG4gICAgfSxcclxuICAgIGdhbGxlcnk6IHtcclxuICAgICAgZW5hYmxlZDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHpvb206IHtcclxuICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgZHVyYXRpb246IDMwMCwgLy8gZG9uJ3QgZm9nZXQgdG8gY2hhbmdlIHRoZSBkdXJhdGlvbiBhbHNvIGluIENTU1xyXG4gICAgICBvcGVuZXI6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgICByZXR1cm4gZWxlbWVudC5maW5kKCdpbWcnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgfSlcclxufVxyXG4vKiA9PT09PSBTZWFyY2ggID09PT09ICAgKi9cclxuZnVuY3Rpb24gc2VhcmNoKCl7XHJcbiAgIHZhciBpID0gJChcIiNzZWFyY2gtb3ZlcmxheS1idG5cIik7XHJcbiAgIHZhciBhID0gJChcIi5zZWFyY2gtb3ZlcmxheSwgLnNlYXJjaC1vdmVybGF5IC5zZWFyY2gtb3ZlcmxheS1jbG9zZVwiKTtcclxuICAgIGkub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAkKFwiLnNlYXJjaC1vdmVybGF5XCIpLmFkZENsYXNzKFwib3BlblwiKSxcclxuICAgICAgICAkKCcuc2VhcmNoLW92ZXJsYXkgPiBmb3JtID4gaW5wdXRbdHlwZT1cInNlYXJjaFwiXScpLmZvY3VzKCk7XHJcbiAgICB9KTtcclxuICAgIGEub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICBldmVudC50YXJnZXQgIT0gdGhpcyAmJiBcInNlYXJjaC1vdmVybGF5LWNsb3NlXCIgIT0gZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSAmJiAzMiAhPSBldmVudC5rZXlDb2RlIHx8ICQodGhpcykucmVtb3ZlQ2xhc3MoXCJvcGVuXCIpO1xyXG4gICAgfSk7XHJcbn1cclxuLyogPT09PT0gR3JpZCBsaXN0IGFjdGl2ZSAgPT09PT0gICAqL1xyXG5mdW5jdGlvbiBnbF9hY3RpdmUoKXtcclxuICAgICQoJy5idG4tbGlzdC1ncmlkIGJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmKCQodGhpcykuaGFzQ2xhc3MoJ2dyaWQtdmlldycpKSB7XHJcbiAgICAgICAgICAkKCcuYnRuLWxpc3QtZ3JpZCBidXR0b24nKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAkKCcuYnRuLWxpc3QtZ3JpZCBidXR0b24ubGlzdC12aWV3JykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKCQodGhpcykuaGFzQ2xhc3MoJ2xpc3QtdmlldycpKSB7XHJcbiAgICAgICAgXHQkKCcuYnRuLWxpc3QtZ3JpZCBidXR0b24nKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgXHQkKCcuYnRuLWxpc3QtZ3JpZCBidXR0b24uZ3JpZC12aWV3JykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbi8qID09PT09IEdyaWQgbGlzdCBWaWV3ICA9PT09PSAgICovXHJcbmZ1bmN0aW9uIGdsX3ZpZXcoKSB7XHJcbiAgICAvLyBQcm9kdWN0IExpc3RcclxuICAgICQoJyNsaXN0LXZpZXcnKS5vbignY2xpY2snLGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQoJy5wcm9kdWN0LWxheW91dCA+IC5jbGVhcmZpeCcpLnJlbW92ZSgpO1xyXG4gICAgICAgICQoJy5wcm9kdWN0LWxheW91dCcpLmF0dHIoJ2NsYXNzJywgJ3Byb2R1Y3QtbGF5b3V0IHByb2R1Y3QtbGlzdCBjb2wteHMtMTInKTtcclxuICAgICAgICAkKCcjY29sdW1uLWxlZnQgLnByb2R1Y3QtbGF5b3V0JykuYXR0cignY2xhc3MnLCAncHJvZHVjdC1sYXlvdXQgbWJfMjAnKTtcclxuICAgICAgICAkKCcjY29sdW1uLXJpZ2h0IC5wcm9kdWN0LWxheW91dCcpLmF0dHIoJ2NsYXNzJywgJ3Byb2R1Y3QtbGF5b3V0IG1iXzIwJyk7XHJcblxyXG4gICAgfSk7XHJcbiAgICAvLyBQcm9kdWN0IEdyaWRcclxuICAgICQoJyNncmlkLXZpZXcnKS5vbignY2xpY2snLGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQoJy5wcm9kdWN0LWxheW91dCcpLmF0dHIoJ2NsYXNzJywgJ3Byb2R1Y3QtbGF5b3V0IHByb2R1Y3QtZ3JpZCBjb2wtbWQtNCBjb2wtc20tNiBjb2wteHMtMTInKTtcclxuICAgIH0pO1xyXG59XHJcbi8qID09PT09IFRpbWVyICA9PT09PSAgICovXHJcbmZ1bmN0aW9uIG1ha2VUaW1lcigpIHtcclxuICAgIHZhciBlbmRUaW1lID0gbmV3IERhdGUoXCJBdWd1c3QgMTAsIDIwMTggMTI6MDA6MDAgUERUXCIpOyAgICAgICAgIFxyXG4gICAgdmFyIGVuZFRpbWUgPSAoRGF0ZS5wYXJzZShlbmRUaW1lKSkgLyAxMDAwO1xyXG4gICAgdmFyIG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICB2YXIgbm93ID0gKERhdGUucGFyc2Uobm93KSAvIDEwMDApO1xyXG4gICAgdmFyIHRpbWVMZWZ0ID0gZW5kVGltZSAtIG5vdztcclxuICAgIHZhciBkYXlzID0gTWF0aC5mbG9vcih0aW1lTGVmdCAvIDg2NDAwKTsgXHJcbiAgICB2YXIgaG91cnMgPSBNYXRoLmZsb29yKCh0aW1lTGVmdCAtIChkYXlzICogODY0MDApKSAvIDM2MDApO1xyXG4gICAgdmFyIG1pbnV0ZXMgPSBNYXRoLmZsb29yKCh0aW1lTGVmdCAtIChkYXlzICogODY0MDApIC0gKGhvdXJzICogMzYwMCApKSAvIDYwKTtcclxuICAgIHZhciBzZWNvbmRzID0gTWF0aC5mbG9vcigodGltZUxlZnQgLSAoZGF5cyAqIDg2NDAwKSAtIChob3VycyAqIDM2MDApIC0gKG1pbnV0ZXMgKiA2MCkpKTtcclxuXHJcbiAgICBpZiAoaG91cnMgPCBcIjEwXCIpIHsgaG91cnMgPSBcIjBcIiArIGhvdXJzOyB9XHJcbiAgICBpZiAobWludXRlcyA8IFwiMTBcIikgeyBtaW51dGVzID0gXCIwXCIgKyBtaW51dGVzOyB9XHJcbiAgICBpZiAoc2Vjb25kcyA8IFwiMTBcIikgeyBzZWNvbmRzID0gXCIwXCIgKyBzZWNvbmRzOyB9XHJcblxyXG4gICAgJChcIi5kYXlzXCIpLmh0bWwoZGF5cyArIFwiPHNwYW4+RGF5czwvc3Bhbj5cIik7XHJcbiAgICAkKFwiLmhvdXJzXCIpLmh0bWwoaG91cnMgKyBcIjxzcGFuPkhvdXJzPC9zcGFuPlwiKTtcclxuICAgICQoXCIubWludXRlc1wiKS5odG1sKG1pbnV0ZXMgKyBcIjxzcGFuPk1pbjwvc3Bhbj5cIik7XHJcbiAgICAkKFwiLnNlY29uZHNcIikuaHRtbChzZWNvbmRzICsgXCI8c3Bhbj5TZWM8L3NwYW4+XCIpOyAgICAgICBcclxufVxyXG5zZXRJbnRlcnZhbChmdW5jdGlvbigpIHsgbWFrZVRpbWVyKCk7IH0sIDEwMDApO1xyXG4vKiA9PT09PSBMb2dpbiBSZWdpc3RlciBUYWIgID09PT09ICAgKi9cclxuZnVuY3Rpb24gbG9nX3JlZ190YWIoKSB7XHJcbiAgICAkKCcjbG9naW4tZm9ybS1saW5rJykub24oJ2NsaWNrJyxmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgJChcIiNsb2dpbi1mb3JtXCIpLmRlbGF5KDEwMCkuZmFkZUluKDEwMCk7XHJcbiAgICAgICAgJChcIiNyZWdpc3Rlci1mb3JtXCIpLmZhZGVPdXQoMTAwKTtcclxuICAgICAgICAkKCcjcmVnaXN0ZXItZm9ybS1saW5rJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pO1xyXG4gICAgJCgnI3JlZ2lzdGVyLWZvcm0tbGluaycpLm9uKCdjbGljaycsZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICQoXCIjcmVnaXN0ZXItZm9ybVwiKS5kZWxheSgxMDApLmZhZGVJbigxMDApO1xyXG4gICAgICAgICQoXCIjbG9naW4tZm9ybVwiKS5mYWRlT3V0KDEwMCk7XHJcbiAgICAgICAgJCgnI2xvZ2luLWZvcm0tbGluaycpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxufVxyXG4vKiAgZm9vdGVyIHRvZ2dsZSAqL1xyXG5mdW5jdGlvbiBmb290ZXJUb2dnbGUoKXtcclxuICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8IDk5MSlcclxuICAgIHtcclxuICAgICAgICAkKFwiLmZvb3RlciAudG9nZ2xlX2RpdlwiKS5yZW1vdmUoKTtcclxuICAgICAgICAkKFwiLmZvb3Rlci10aXRsZVwiKS5hcHBlbmQoIFwiPGEgY2xhc3M9J3RvZ2dsZV9kaXYnPiZuYnNwOzwvYT5cIiApO1xyXG4gICAgICAgICQoXCIuZm9vdGVyLXRpdGxlXCIpLmFkZENsYXNzKCd0b2dnbGUnKTtcclxuICAgICAgICAkKFwiLmZvb3Rlci10aXRsZVwiKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgJChcIi5mb290ZXIgLnRvZ2dsZV9kaXZcIikub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKS5wYXJlbnQoKS5maW5kKCd1bCcpLnNsaWRlVG9nZ2xlKCdzbG93Jyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICAkKFwiLmZvb3Rlci10aXRsZVwiKS5wYXJlbnQoKS5maW5kKCd1bCcpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XHJcbiAgICAgICAgJChcIi5mb290ZXItdGl0bGVcIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICQoXCIuZm9vdGVyLXRpdGxlXCIpLnJlbW92ZUNsYXNzKCd0b2dnbGUnKTtcclxuICAgICAgICAkKFwiLmZvb3RlciAudG9nZ2xlX2RpdlwiKS5yZW1vdmUoKTtcclxuICAgIH0gICBcclxufVxyXG5cclxuZnVuY3Rpb24gb3dsX2Nhcm91c2VsICgpIHtcclxuICAgICQoJy5tYWluLWJhbm5lcicpLm93bENhcm91c2VsKHtcclxuICAgICAgICBhdXRvcGxheTpmYWxzZSxcclxuICAgICAgICByZXNwb25zaXZlQ2xhc3M6dHJ1ZSxcclxuICAgICAgICBkb3RzOnRydWUsXHJcbiAgICAgICAgaXRlbXMgOiAxLCAvLzEwIGl0ZW1zIGFib3ZlIDEwMDBweCBicm93c2VyIHdpZHRoXHJcbiAgICAgICAgcmVzcG9uc2l2ZTp7XHJcbiAgICAgICAgICAgIDA6e1xyXG4gICAgICAgICAgICAgICAgaXRlbXM6MSxcclxuICAgICAgICAgICAgICAgIG5hdjpmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICA2MDA6e1xyXG4gICAgICAgICAgICAgICAgaXRlbXM6MSxcclxuICAgICAgICAgICAgICAgIG5hdjpmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAxMDAwOntcclxuICAgICAgICAgICAgICAgIGl0ZW1zOjEsXHJcbiAgICAgICAgICAgICAgICBuYXY6ZmFsc2UsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcubkFycml2YWxzICwgLkJlc3RzZWxsZXJzICwgLkZlYXR1cmVkJykub3dsQ2Fyb3VzZWwoe1xyXG4gICAgICAgIGF1dG9wbGF5OmZhbHNlLFxyXG4gICAgICAgIHJlc3BvbnNpdmVDbGFzczp0cnVlLFxyXG4gICAgICAgIGl0ZW1zIDogNCwgLy8xMCBpdGVtcyBhYm92ZSAxMDAwcHggYnJvd3NlciB3aWR0aFxyXG4gICAgICAgIHJlc3BvbnNpdmU6e1xyXG4gICAgICAgICAgICAwOntcclxuICAgICAgICAgICAgICAgIGl0ZW1zOjIsXHJcbiAgICAgICAgICAgICAgICBuYXY6dHJ1ZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICA0MDA6e1xyXG4gICAgICAgICAgICAgICAgaXRlbXM6MixcclxuICAgICAgICAgICAgICAgIG5hdjp0cnVlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDYwMDp7XHJcbiAgICAgICAgICAgICAgICBpdGVtczozLFxyXG4gICAgICAgICAgICAgICAgbmF2OnRydWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgMTAwMDp7XHJcbiAgICAgICAgICAgICAgICBpdGVtczo0LFxyXG4gICAgICAgICAgICAgICAgbmF2OnRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgICQoJyNmZWF0dS1wcm8gLCAjYmVzdHMtcHJvICwgI25ldy1wcm8nKS5vd2xDYXJvdXNlbCh7XHJcbiAgICAgICAgYXV0b3BsYXk6ZmFsc2UsXHJcbiAgICAgICAgcmVzcG9uc2l2ZUNsYXNzOnRydWUsXHJcbiAgICAgICAgaXRlbXMgOiAxLCAvLzEwIGl0ZW1zIGFib3ZlIDEwMDBweCBicm93c2VyIHdpZHRoXHJcbiAgICAgICAgcmVzcG9uc2l2ZTp7XHJcbiAgICAgICAgICAgIDA6e1xyXG4gICAgICAgICAgICAgICAgaXRlbXM6MSxcclxuICAgICAgICAgICAgICAgIG5hdjp0cnVlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDQ4MDp7XHJcbiAgICAgICAgICAgICAgICBpdGVtczoyLFxyXG4gICAgICAgICAgICAgICAgbmF2OnRydWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgNzY3OntcclxuICAgICAgICAgICAgICAgIGl0ZW1zOjIsXHJcbiAgICAgICAgICAgICAgICBuYXY6dHJ1ZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAxMDAwOntcclxuICAgICAgICAgICAgICAgIGl0ZW1zOjEsXHJcbiAgICAgICAgICAgICAgICBuYXY6dHJ1ZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLyogPT09PT0gU3BlY2lhbHMgYW5kIGNsaWVudCBjYXJvdXNlbCA9PT09PSAgICovXHJcbiAgICAkKCcuY2xpZW50Jykub3dsQ2Fyb3VzZWwoe1xyXG4gICAgICAgIGF1dG9wbGF5OmZhbHNlLFxyXG4gICAgICAgIHJlc3BvbnNpdmVDbGFzczp0cnVlLFxyXG4gICAgICAgIGl0ZW1zIDogMSwgLy8xMCBpdGVtcyBhYm92ZSAxMDAwcHggYnJvd3NlciB3aWR0aFxyXG4gICAgICAgIHJlc3BvbnNpdmU6e1xyXG4gICAgICAgICAgICAwOntcclxuICAgICAgICAgICAgICAgIGl0ZW1zOjEsXHJcbiAgICAgICAgICAgICAgICBuYXY6ZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgNjAwOntcclxuICAgICAgICAgICAgICAgIGl0ZW1zOjEsXHJcbiAgICAgICAgICAgICAgICBuYXY6ZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgMTAwMDp7XHJcbiAgICAgICAgICAgICAgICBpdGVtczoxLFxyXG4gICAgICAgICAgICAgICAgbmF2OmZhbHNlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvKiA9PT09PSBsZWZ0LXNwZWNpYWwgY2Fyb3VzZWwgPT09PT0gICAqL1xyXG4gICAgJCgnI2xlZnQtc3BlY2lhbCcpLm93bENhcm91c2VsKHtcclxuICAgICAgICBhdXRvcGxheTpmYWxzZSxcclxuICAgICAgICByZXNwb25zaXZlQ2xhc3M6dHJ1ZSxcclxuICAgICAgICBpdGVtcyA6IDEsIC8vMTAgaXRlbXMgYWJvdmUgMTAwMHB4IGJyb3dzZXIgd2lkdGhcclxuICAgICAgICByZXNwb25zaXZlOntcclxuICAgICAgICAgICAgMDp7XHJcbiAgICAgICAgICAgICAgICBpdGVtczoxLFxyXG4gICAgICAgICAgICAgICAgbmF2OnRydWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgNDgwOntcclxuICAgICAgICAgICAgICAgIGl0ZW1zOjIsXHJcbiAgICAgICAgICAgICAgICBuYXY6dHJ1ZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICA3Njg6e1xyXG4gICAgICAgICAgICAgICAgaXRlbXM6MSxcclxuICAgICAgICAgICAgICAgIG5hdjp0cnVlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDEwMDA6e1xyXG4gICAgICAgICAgICAgICAgaXRlbXM6MSxcclxuICAgICAgICAgICAgICAgIG5hdjp0cnVlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLyogPT09PT0gT2ZmZXJzIGNhcm91c2VsID09PT09ICAgKi9cclxuICAgICQoJy5vZmZlcnMnKS5vd2xDYXJvdXNlbCh7XHJcbiAgICAgICAgbG9vcDp0cnVlLFxyXG4gICAgICAgIGF1dG9wbGF5OnRydWUsXHJcbiAgICAgICAgcmVzcG9uc2l2ZUNsYXNzOnRydWUsXHJcbiAgICAgICAgaXRlbXMgOiAzLCAvLzEwIGl0ZW1zIGFib3ZlIDEwMDBweCBicm93c2VyIHdpZHRoXHJcbiAgICAgICAgcmVzcG9uc2l2ZTp7XHJcbiAgICAgICAgICAgIDA6e1xyXG4gICAgICAgICAgICAgICAgaXRlbXM6MSxcclxuICAgICAgICAgICAgICAgIG5hdjpmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICA2MDA6e1xyXG4gICAgICAgICAgICAgICAgaXRlbXM6MSxcclxuICAgICAgICAgICAgICAgIG5hdjpmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAxMjAwOntcclxuICAgICAgICAgICAgICAgIGl0ZW1zOjIsXHJcbiAgICAgICAgICAgICAgICBuYXY6ZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgMTM2MDp7XHJcbiAgICAgICAgICAgICAgICBpdGVtczozLFxyXG4gICAgICAgICAgICAgICAgbmF2OmZhbHNlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAkKCcucmVsYXRlZC1wcm8nKS5vd2xDYXJvdXNlbCh7XHJcbiAgICAgICAgYXV0b3BsYXk6ZmFsc2UsXHJcbiAgICAgICAgcmVzcG9uc2l2ZUNsYXNzOnRydWUsXHJcbiAgICAgICAgaXRlbXMgOiAzLCAvLzEwIGl0ZW1zIGFib3ZlIDEwMDBweCBicm93c2VyIHdpZHRoXHJcbiAgICAgICAgcmVzcG9uc2l2ZTp7XHJcbiAgICAgICAgICAgIDA6e1xyXG4gICAgICAgICAgICAgICAgaXRlbXM6MixcclxuICAgICAgICAgICAgICAgIG5hdjpmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICA2MDA6e1xyXG4gICAgICAgICAgICAgICAgaXRlbXM6MixcclxuICAgICAgICAgICAgICAgIG5hdjpmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAxMDAwOntcclxuICAgICAgICAgICAgICAgIGl0ZW1zOjMsXHJcbiAgICAgICAgICAgICAgICBuYXY6dHJ1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIDEyMDA6e1xyXG4gICAgICAgICAgICAgICAgaXRlbXM6MyxcclxuICAgICAgICAgICAgICAgIG5hdjp0cnVlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLyogPT09PT0gUHJvZHVjdCBUaHVtYm5haWwgPT09PT0gICAqL1xyXG4gICAgJCgnI3Byb2R1Y3QtdGh1bWJuYWlsJykub3dsQ2Fyb3VzZWwoe1xyXG4gICAgICAgIGxvb3A6ZmFsc2UsXHJcbiAgICAgICAgdGh1bWJzOiB0cnVlLFxyXG4gICAgICAgIGF1dG9wbGF5OmZhbHNlLFxyXG4gICAgICAgIGl0ZW1zIDogNSwgLy8xMCBpdGVtcyBhYm92ZSAxMDAwcHggYnJvd3NlciB3aWR0aFxyXG4gICAgICAgIG5hdjp0cnVlLFxyXG4gICAgfSlcclxuXHJcbiAgICAvKiA9PT09PSBCcmFuZCBjYXJvdXNlbCA9PT09PSAgICovXHJcbiAgICAkKCcuYnJhbmQnKS5vd2xDYXJvdXNlbCh7XHJcbiAgICAgICAgbG9vcDp0cnVlLFxyXG4gICAgICAgIGF1dG9wbGF5OnRydWUsXHJcbiAgICAgICAgcmVzcG9uc2l2ZUNsYXNzOnRydWUsXHJcbiAgICAgICAgaXRlbXMgOiA2LCAvLzEwIGl0ZW1zIGFib3ZlIDEwMDBweCBicm93c2VyIHdpZHRoXHJcbiAgICAgICAgcmVzcG9uc2l2ZTp7XHJcbiAgICAgICAgICAgIDA6e1xyXG4gICAgICAgICAgICAgICAgaXRlbXM6MixcclxuICAgICAgICAgICAgICAgIG5hdjpmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICA0MDA6e1xyXG4gICAgICAgICAgICAgICAgaXRlbXM6MyxcclxuICAgICAgICAgICAgICAgIG5hdjpmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICA2MDA6e1xyXG4gICAgICAgICAgICAgICAgaXRlbXM6NCxcclxuICAgICAgICAgICAgICAgIG5hdjpmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAxMDAwOntcclxuICAgICAgICAgICAgICAgIGl0ZW1zOjYsXHJcbiAgICAgICAgICAgICAgICBuYXY6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBsb29wOnRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAvKiA9PT09PSBCbG9nIGNhcm91c2VsID09PT09ICAgKi9cclxuICAgICQoJy5ibG9nJykub3dsQ2Fyb3VzZWwoe1xyXG4gICAgICAgIGF1dG9wbGF5OmZhbHNlLFxyXG4gICAgICAgIHJlc3BvbnNpdmVDbGFzczp0cnVlLFxyXG4gICAgICAgIGl0ZW1zIDogMiwgLy8xMCBpdGVtcyBhYm92ZSAxMDAwcHggYnJvd3NlciB3aWR0aFxyXG4gICAgICAgIHJlc3BvbnNpdmU6e1xyXG4gICAgICAgICAgICAwOntcclxuICAgICAgICAgICAgICAgIGl0ZW1zOjEsXHJcbiAgICAgICAgICAgICAgICBuYXY6dHJ1ZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICA2MDA6e1xyXG4gICAgICAgICAgICAgICAgaXRlbXM6MixcclxuICAgICAgICAgICAgICAgIG5hdjp0cnVlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDEwMDA6e1xyXG4gICAgICAgICAgICAgICAgaXRlbXM6MixcclxuICAgICAgICAgICAgICAgIG5hdjp0cnVlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICAvKiA9PT09PSBUZWFtIGNhcm91c2VsID09PT09ICAgKi9cclxuICAgICQoJy50ZWFtM2NvbCcpLm93bENhcm91c2VsKHtcclxuICAgICAgICBhdXRvcGxheTpmYWxzZSxcclxuICAgICAgICByZXNwb25zaXZlQ2xhc3M6dHJ1ZSxcclxuICAgICAgICBpdGVtcyA6IDMsIC8vMTAgaXRlbXMgYWJvdmUgMTAwMHB4IGJyb3dzZXIgd2lkdGhcclxuICAgICAgICByZXNwb25zaXZlOntcclxuICAgICAgICAgICAgMDp7XHJcbiAgICAgICAgICAgICAgICBpdGVtczoxLFxyXG4gICAgICAgICAgICAgICAgbmF2OmZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDYwMDp7XHJcbiAgICAgICAgICAgICAgICBpdGVtczoyLFxyXG4gICAgICAgICAgICAgICAgbmF2OnRydWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgMTAwMDp7XHJcbiAgICAgICAgICAgICAgICBpdGVtczozLFxyXG4gICAgICAgICAgICAgICAgbmF2OnRydWUsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG4vKiAtLS0tIFBhZ2UgU2Nyb2xsdXAgSlMgU3RhcnQgLS0tLSAqL1xyXG4gICAvL1doZW4gZGlzdGFuY2UgZnJvbSB0b3AgPSAyNTBweCBmYWRlIGJ1dHRvbiBpbi9vdXRcclxuXHJcbiAgICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe1xyXG4gICAgaWYgKCQodGhpcykuc2Nyb2xsVG9wKCkgPiAyNTApIHtcclxuICAgICAgICBcclxuICAgICAgICAkKCcjc2Nyb2xsdXAnKS5mYWRlSW4oMzAwKTtcclxuICAgICAgICB9IFxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgJCgnI3Njcm9sbHVwJykuZmFkZU91dCgzMDApO1xyXG4gICAgICAgIH1cclxuICAgfSk7IFxyXG4gICAgICAgICQoJyNzY3JvbGx1cCcpLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuICAgICAgICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAwIH0sIDEwMDApO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pOyAgXHJcblxyXG4vKiA9PT09PSBFdmVudCBmb3Igd2luZG93cyBhbmQgZG9jdW1lbnQgPT09PT0gICAqL1xyXG5cclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7ICAgICBcclxuICAgICAgICBnbF9hY3RpdmUoKTtcclxuICAgICAgICBnbF92aWV3KCk7XHJcbiAgICAgICAgc2VhcmNoKCk7XHJcbiAgICAgICAgZm9vdGVyVG9nZ2xlKCk7IFxyXG4gICAgICAgLy8gbV9wb3B1cF9zZWxlY3QgKCk7XHJcbiAgICAgICAgbG9nX3JlZ190YWIoKTtcclxuXHJcbiAgICB9KTtcclxuICAgXHJcbiAgICAkKCB3aW5kb3cgKS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgICAgICAkKCdbZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJdJykudG9vbHRpcCgpO1xyXG4gICAgICAgIG93bF9jYXJvdXNlbCAoKTtcclxuICAgICAgICBsZWZ0X2NvbHVubV9zd2V0Y2ggKCk7ICAgICAgXHJcbiAgICB9KTtcclxuICAgXHJcbiAgICAkKCB3aW5kb3cgKS5yZXNpemUoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgbGVmdF9jb2x1bm1fc3dldGNoICgpO1xyXG4gICAgICAgIGdsX2FjdGl2ZSgpO1xyXG4gICAgICAgIGdsX3ZpZXcoKTtcclxuICAgICAgICBzZWFyY2goKTtcclxuICAgICAgICBmb290ZXJUb2dnbGUoKTtcclxuICAgIH0pO1xyXG59KTtcclxualF1ZXJ5KCB3aW5kb3cgKS5vbihcImxvYWRcIixmdW5jdGlvbigpIHtcclxuICAgICAkKFwiLmxvZGVyXCIpLmZhZGVPdXQoXCJzbG93XCIpOyAgICBcclxufSk7XHJcblxyXG4iXX0=
