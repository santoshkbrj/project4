$(function(){
	//cache the window object
	var window=$(window);

	//parallex background effect
	$('section[data-type="background"]').each(function(){
			var $bgobj= $this();//asigning the obect
			$(window).scroll(function(){
				//scroll the background at var speed
				//ypos is negative value becouse we are scrolling up
				var yPos=-($window.scrollTop()/$bgobj.data('speed'));
				//put together with our final background position
					var coords= '50% '+ yPos + 'px'
				//move the background
				$bgobj.css({backgroundposition:coords})
			});//end window scroll


	});

});