jQuery.noConflict(); var $ = jQuery;

$(function() {
$("#top").delay(800).fadeTo(400,1,function(){
		$("#r-bottom").delay(200).fadeTo(400,1);
});	

// FIXED NAVIGATION //
$(function() {
        $('.fixed-nav').waypoint('sticky');
    });
    $(function(){
       var section = $('section');
       var menuLink = $('nav ul li a')
       section.waypoint(function(direction) {
          var activeSection = $(this);
          if (direction === 'up') {
             activeSection = activeSection.prev();
          }
          var activeMenuLink = $('nav ul li a[href=#' + activeSection.attr('id') + ']');
          menuLink.removeClass('active');
          activeMenuLink.addClass('active');
       },{
          offset: '60'
       });
    });

// COLOR CHANGER //
$(function() {
        $('.page').waypoint(function (direction) {
            if (direction === 'down') {
                if ($(this).hasClass('green')) {

                    $('#fixed a').css({
                        'color' : '#b1feb1'
                    });
                }
                if ($(this).hasClass('red')) {

                    $('#fixed a').css({
                        'color' : '#fecaca'
                    });

                }
                if ($(this).hasClass('blue')) {

                    $('#fixed a').css({
                        'color' : '#b4e7ff'
                    });
                }
            }

        });
        // Change going up 
        $('.page').waypoint(function (direction) {
            // var pageHeight  =  parseInt($(this).height(), 10) + 'px';
            if (direction === 'up') {
                if ($(this).hasClass('green, active')) {

                    $('#fixed a').css({
                        'color' : '#b1feb1'
                    });
                }
                if ($(this).hasClass('red')) {

                    $('#fixed a').css({
                        'color' : '#fecaca'
                    });
                }
                if ($(this).hasClass('blue')) {

                    $('#fixed a').css({
                        'color' : '#b4e7ff'
                    });
                }
            }

        }, {

            'offset' : '-600px'
        });
});

//TOP PHOTO CHANGER// 
$(function() {
 var images = ['b.jpg','c.gif','d.jpg','e.jpg','h.jpg' ];
 $('#top').css({'background-image': 'url(img/' + images[Math.floor(Math.random() * images.length)] + ')'});
});

})

