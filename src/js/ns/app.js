var NeonSines = function(){
		this.win 				= $(window);
		this.body 				= $('body');
		this.winHeight 			= window.innerHeight;
		this.winWidth 			= window.innerWidth; 
		this.sections 			= $('.slide');
		this.content 			= $('.section');
		this.menuToggle 		= $('.nav-icon');
		this.nav 				= $('.nav-fullscreen');
		this.isMobile 			= /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? true : false;
		this.init();
}; 

NeonSines.prototype =  {  
	init: function() { 
		// sets each sectio to the window's height
		this.sections.css({
			'min-height': this.winHeight
		});
		//vertical center content
		this.content.each(function(index, el) {
			var self = $(el),
				myHeight = self.height()
			;
			self.css({
				'padding-top': (window.innerHeight / 2) - (myHeight / 2)
			});

		});
		// Menu Toggle
		this.menuToggle.on('click', function(){
			$(this).toggleClass('active');
			$('.nav-fullscreen').toggleClass('open');
		});

	} 
}