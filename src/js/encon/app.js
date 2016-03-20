var EnconSite = function(){
		this.win 				= $(window);
		this.body 				= $('body');
		this.winHeight 			= window.innerHeight;
		this.winWidth 			= window.innerWidth;
		this.sections 			= $('.content-section, .parallax-layer');
		this.home 				= $('#home');
		this.enconHash			= $('.encon-hash');
		this.content 			= $('.section-content');
		this.contentHeight 		= this.content.height();
		this.navbar 			= $('#navWrapper');
		this.navbarHeight 		= this.navbar.height();
		this.navDistance		= this.navbar.offset().top;
		this.navPosition		= this.winHeight - this.navbarHeight;
		this.navLink 			= $(".navbar-nav a[href^='#'], a.nav-link[href^='#'], #nav-mobile a[href^='#']");
		this.animate 			= $('.animate'); 
		this.isMobile 			= /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? true : false;
		this.init();
}; 
 
EnconSite.prototype =  {  
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

		// Set position of navbar at the top
		this.navbar.css({
			'top' : this.navPosition,
		});

		// encon has position
		this.enconHash.css({
			'padding-top': ((window.innerHeight / 2) - (this.enconHash.height() / 2) - 100 )
		});

		// scrollspy
		this.body.scrollspy({  offset: 40 });
		// scroll animation
		this.navLink.on('click', function(e) {
		  	// prevent default anchor click behavior
		   	e.preventDefault();
		   	// store hash
		   	var hash = this.hash;
		   	// animate
		   	$('html, body').animate({
		       	scrollTop: $(hash).offset().top - 40
		    }, 700, function(){
		       	// when done, add hash to url
		       	window.location.hash = hash;
		    });

		});

	}, // end init:

	stickyNav: function() {
		if ( this.win.scrollTop() >= this.navPosition ) {
          	this.navbar.css({
				'position' : 'fixed',
				'top' : '0'
			});
        	this.navbar.addClass('fixey');
        } else if ( this.win.scrollTop() <= this.navPosition  ) {
	    	this.navbar.css({
				'position' : 'absolute',
				'top' : this.navPosition,
			});
			this.navbar.removeClass('fixey');
        }
	},

	addAnimation: function () {
		this.animate.each(function() {
		    var self = $(this),
		    	animationClass = self.attr('data-animation')
		    ;
		    if (self.visible(true) && self.hasClass('animated') == false) {
		    	setTimeout(function(){
		    		self.addClass('animated ' + animationClass);
		    	}, 500);
		    } 
		});
	}
		
};