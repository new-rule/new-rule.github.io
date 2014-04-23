jQuery.noConflict(); var $ = jQuery;

$(function() {
//FIXED NAVI//
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

//TOP PHOTO// 
$(function() {
 var images = ['../img/top/goal-1.gif','../img/top/goal-2.gif','../img/top/goal-3.gif'];
 $('#i-4').css({'background-image': 'url(img/' + images[Math.floor(Math.random() * images.length)] + ')'});
});

//TOGGLE// 
$(function() {
	$(".selector-btn a").click(function(){
		var tgt = $(this).parent().parent().find(".selector-more");
		
		tgt.slideToggle(600);
		return false;
	});
	$("body").data('lng','j');
})


//LANGUAGE//
$(function() {
	$("body").data('lng','j');
})

$("#lng a").click(function(){
			$("body").animate({opacity:0},function(){
				if($(this).data('lng')=="j"){
					$(".j").hide();
					$(".e").show();
					$(this).data('lng','e');			
				}else{
					$(".e").hide();
					$(".j").show();										
					$(this).data('lng','j');			
				}
				$(this).animate({opacity:1});
			});			
	return false;
});

})