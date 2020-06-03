(function($) {
    'use strict';

    $(document).ready(function() {
        // Only load these carousel if we are in home page
        if ($('div').is('.home')) {
            new Glide('.featured-slider', {
                type: 'carousel',
                autoplay: 7000,
                keyboard: false,
                hoverpause: true,
                startAt: 0,
                perView: 3,
                breakpoints: ({
                    575: {
                        autoplay: 3000,
                        perView: 1
                    },
                    767: {
                        autoplay: 5000,
                        perView: 2
                    },
                    991: {
                        perView: 3
                    },
                })
            }).mount()

            new Glide('.editorial-slider', {
                type: 'carousel',
                autoplay: 8000,
                keyboard: false,
                hoverpause: true,
                startAt: 0,
                perView: 3,
                breakpoints: ({
                    575: {
                        autoplay: 5000,
                        perView: 1
                    },
                    767: {
                        autoplay: 7000,
                        perView: 2
                    },
                    991: {
                        perView: 3
                    },
                })
            }).mount()
        }

        $('[data-background]').each(function() {
            $(this).css({
                'background-image': 'url(' + $(this).data('background') + ')'
            });
        });

        if ($('form').is('#bootstrapForm')) {
            $('#bootstrapForm').submit(function(event) {
                event.preventDefault()
                var extraData = {}
                $('#bootstrapForm').ajaxSubmit({
                    data: extraData,
                    dataType: 'jsonp',
                    error: function() {
                        alert('Form Submitted. Thank you.')
                    }
                })
            })
        }

        hidePreloader();
        hidePlaceholder();
        lazyLoadImages();

        if ($('div').is('#fb-comments')) {
            FB.XFBML.parse();
        }

        (function(i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r;
            i[r] = i[r] || function() {
                (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date();
            a = s.createElement(o),
                m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m)
        })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
        ga('create', 'UA-156100338-1', 'auto');
        ga('send', 'pageview');

    });

    // headroom js
    $('.navigation').headroom();

    // Masonry
    setTimeout(function() {
        $('.masonry-container').masonry({
            itemSelector: '.masonry-container > div',
            columnWidth: 1
        });
    }, 500);

})(jQuery);