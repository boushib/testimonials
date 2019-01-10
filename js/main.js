$(function () {

    // autoSlider
    (function autoSlider() {

        $('#reviews-carousel .review-box.active').each(function () {
            if (!$(this).is(':last-child')) {

                $(this).delay(4000).fadeOut(1000, function () {
                    $(this)
                        .removeClass('active')
                        .next()
                        .addClass('active')
                        .fadeIn();

                    autoSlider();
                });

            } else {
                $(this).delay(4000).fadeOut(1000, function () {

                    $(this).removeClass('active');
                    $('#reviews-carousel .review-box')
                        .eq(0)
                        .addClass('active')
                        .fadeIn();
                    autoSlider();
                });
            }

            var currentIndex = $(this).index();
            $('.nav-dots .nav-dot').removeClass('active');
            $('.nav-dots .nav-dot').eq(currentIndex).addClass('active');

            // $('.nav-dots .nav-dot').on('click', function () {
            //     currentIndex = $(this).index();
            //     console.log('dot index: ' + currentIndex);

            //     $('#reviews-carousel .review-box.active').removeClass('active');
            //     $('#reviews-carousel .review-box').eq(currentIndex).addClass('active');
            //     autoSlider();
            // });
        });

    }());

    // review popup
    $('#add-review').on('click', function(){
        $('#popup')
            .css('display', 'flex')
            .fadeIn()
    });

    $('#popup .btn-danger').on('click', function(){
        $('#popup').fadeOut();
    });

});