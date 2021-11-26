//service

$(function(){
    new WOW().init()
    //$(".owl-carousel").owlCarousel();
});

//work section
$(function(){
    $('#work').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery:{
            enabled:true
        }   
    });

});
//=========== Team ==============
$(function(){
    $("#tem-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
});

//=========== testimonials ==============
$(function(){
    $("#customers-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
})

//=========== Client ==============
$(function(){
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
});




//=========== Stats ==============
// not working this function
$(function(){
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });

});


