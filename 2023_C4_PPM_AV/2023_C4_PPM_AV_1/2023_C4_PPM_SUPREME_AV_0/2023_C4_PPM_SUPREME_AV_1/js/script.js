"use strict";

var CIA = CIA || {};

CIA.Overlays = {
	openOl: function() {
		$(".overlay-cta").bind('click', function(event) {
			event.preventDefault();
			var tOverlayId = $(this).attr("href");
			var tabtoshow = $(this).data('show');
			$('.tab-content', "#Overlays").removeClass('tab-active');
			$(tabtoshow, "#Overlays").addClass('tab-active');
			$('#Overlays').addClass('active');
			$('.overlay-active', '#Overlays').removeClass('overlay-active');
            $(tOverlayId).addClass('overlay-active');
			
			//var subS = tOverlayId.substring(1,4);
			var oaID = $('.overlay-active').attr('id');
			var tHeight = $('.overlay-active').find('img').height();
			if ($('#Overlays').hasClass('active')) {
				$('#Overlays').css('height', tHeight + 52);
			}
		});
	},
	closeOl: function() {
		$(".overlay-close").bind('click', function(event){
			event.preventDefault();
			$('#Overlays').removeClass('active');
			setTimeout(function() {
				$('.overlay-active', '#Overlays').removeClass('overlay-active');
				$('#Overlays').css('height', '0');
			}, 400);
		});
	},
	init: function() {
		CIA.Overlays.openOl();
		CIA.Overlays.closeOl();
	}	
},	

CIA.References = {
	openRef: function() {
		$(".reference-cta").bind('click', function(event){
			event.preventDefault();
			var tReferenceId = $(this).attr("href");
			$("#References").addClass('active');
		    $(tReferenceId).addClass('reference-active');
		});
	},
	closeRef: function() {
		$(".reference-close").bind('click', function(event){
			event.preventDefault();
			$('#References').removeClass('active');
			setTimeout(function() {
				$('.reference-active', '#References').removeClass('reference-active');
			}, 300);
		});
		
	},
	init:function() {
		CIA.References.openRef();
		CIA.References.closeRef();
	}
},

CIA.Slides = {
		cCount: null,
		oScroller: null,
		oSlideScrollTo: null,
		oSlideWidth: 1024,
		$indicator: null,
		$slides: null,
		$slide: null,
		scrollEl: null,
		// Add iScroll.
		addScroll: function () {
			var t = this;
			// Count the total number of slide and mulitply 
			// by slide width to set slide container width.
			t.$slides.css('width', t.cCount * t.oSlideWidth + 'px');
			// Add `translate3d` to prevent flicker.
			t.$slide[0].style.webkitTransform = 'translate3d(0px, 0px, 0px)';
			// Create new iScroll instance and set options.
			t.oScroller = new iScroll(t.scrollEl, {
			snap: '.slide',
            momentum: false,
            hScrollbar: false,
            vScrollbar: false,
            bounce: false,
				onScrollEnd: function () {
					t.scrollEnd();
				}
			});
		},
		// Populate slide indicator.
		populateIndicator: function () {
			var t = this;			
			for (var i = 0; i < t.cCount; i++) {
				$('<li></li>').appendTo(t.$indicator);
			}
			t.$indicator.find('li').eq(0).addClass('active');
		},
		// On scroll end update slide indicator 
		// and call onScrollEndCallback.
		scrollEnd: function () {
			var cSlide = CIA.Slides.oScroller.currPageX;
			// Call onScrollEndCallback
			// Update slide indicator if `#Indicator` exists.
			if (CIA.ASlides.$indicator.length) {
				CIA.Slides.$indicator.find('li').removeClass('active');
				CIA.Slides.$indicator.find('li').eq(cSlide).addClass('active');
			}
		},
		getSlideHash: function () {
			var getHash = parseInt(window.location.hash.toLowerCase().split('#slide')[1], 10);
			if (!getHash) { return false; }
			return getHash;
		},
		init: function () {
			var t = this,
				scrollX,
				slideHash = t.getSlideHash();
			// Assign dom elements.
			t.$indicator = $('.indicators'); // Indicator container.
			t.$slides = $('#scroller'); // Slide container.
			t.$slide = $('.slide'); // Individual slide.
			t.scrollEl = "scroll-wrapper"; // iScroll element.
			// Get number of slides.
			t.cCount = $('.slide').length;			
			// If `.slide` is present more than once
			// **intialise iScroll**.
			if (t.cCount > 1) {
				t.addScroll();
				t.populateIndicator();
			}
			// If `#` exists, **load iScroll at correct slide**.
			if (slideHash) {
				scrollX = -t.oSlideWidth * (slideHash - 1);
				t.oScroller.currPageX = slideHash - 1;
				t.oScroller.scrollTo(scrollX, 0);
				// Remove hash to re-apply slide to.
				window.location.hash = '';
			}
			// **Slide to** - Watch for hashchange and slide to.
			$(window).bind('hashchange', function (e) {
				// Make sure we've got a slide.
				if (t.getSlideHash()) {
					// Slide iScroll to new slide.
					t.oScroller.scrollToPage((t.getSlideHash() - 1));
					// Remove hash to re-apply slide to.
					window.location.hash = '';
				}
			});
		}
	},

CIA.Nav = {
	active: null,
	toggle: function(){
		if(!$('nav.active').length) {
			$('nav').addClass('active');
		}
		else {
			$('nav, .subnav, nav li div').removeClass('active');
			$('nav li').removeClass('clicked');
			$('nav li.parent').eq(CIA.Nav.active).addClass('active');
		}
		$('.myScrollbarH').remove();
	},
	init:function() {
		
		CIA.Nav.active = $('.nav li.active').index(); //need to remember the active item

		$('.handle').on('tap', CIA.Nav.toggle);
		
		var clicks = 0, delay = 500, timer = null;
		$('.nav li.parent').on("tap", function(event){
			var loc = $(this).data('link');
	        clicks++;  //count clicks
	        if(clicks === 1) {
	            timer = setTimeout(function() {
	                window.location = loc; 
	                clicks = 0
	            }, delay);
	        } else {
	            clearTimeout(timer);
	            clicks = 0;
	            var edScroll, qolScroll;
	            $('nav li.parent.active').removeClass('active');
				$(this).addClass('clicked').siblings().removeClass('clicked');
				$(".subnav").removeClass('active');
				$('.subnav', this).addClass('active');
				if( $('#ed-scroll-wrapper', this).length) {
					$('#ed-scroll-wrapper').addClass('active');
					setTimeout(function() {
						edScroll = new iScroll('ed-scroll-wrapper', { hScroll: true, vScroll: false, hScrollbar: true, vScrollbar: false,  scrollbarClass: 'myScrollbar' });
					}, 0);
					edScroll.refresh();
				}
				else if( $('#qol-scroll-wrapper', this).length) {
					$('#qol-scroll-wrapper').addClass('active');
					setTimeout(function() {
						qolScroll = new iScroll('qol-scroll-wrapper', { hScroll: true, vScroll: false, hScrollbar: true, vScrollbar: false,  scrollbarClass: 'myScrollbar' });
					}, 0);
					qolScroll.refresh();
				}
				else {
					$('#ed-scroll-wrapper, #qol-scroll-wrapper').removeClass('active');
				}
	        }
    	}).on("dblclick", function(event){
       	 event.preventDefault();  //cancel system double-click event
    	});
	}
},

CIA.Tabs = {
	init: function(){
		$('.tab-content:first-child').addClass('tab-active');
		CIA.Tabs.showTab();
	},
	showTab: function() { 
		$('.tabs').find('span').bind('click', function(e){
			e.preventDefault();
			var toShow = $(this).data('show');
			$('div').removeClass('tab-active');
			$(toShow).addClass('tab-active');
		});
	}
}; 

// Global Literal Object: Site-wide functions 
	// -------------------------------------------
	CIA.G = {
		touchEvent: null,
		// Include navigation functionality here.
		navigation: function() { /* Navigation functionality here. */
		},
		// Sets `touchstart` touch event as a string
		// if viewing on an iPad and `click` if using a
		// browser. Note that `touchstart` is noticeably 
		// faster on the iPad.
		renderTouchEvent: function() {
			if (navigator.userAgent.match(/iPad/i)) {
				CIA.G.touchEvent = "touchstart";
			} else {
				CIA.G.touchEvent = "click";
			}
		},
		// Exit application in PM3 by adding `[data-role="exit"]`
		// to DOM element.
		exitApp: function() {
			var $exitApp = $('[data-role="exit"]'),
				exit;
			exit = function(e) {
				e.preventDefault();
				window.setTimeout(function() {
					window.location = 'call?cmd=exit';
				}, 200);
			};
			$exitApp.bind(CIA.G.touchEvent, exit);
		},
		init: function() {
			var t = this;
			t.navigation();
			t.renderTouchEvent();
			t.exitApp();
		}
	};

$(function(){
	$(document).on('touchmove', function(e) { e.preventDefault(); });
	CIA.Nav.init();
	CIA.Tabs.init();
	CIA.Overlays.init();
	CIA.References.init();
	CIA.G.init();
	//hide nav if body is clicked & it shows
	$("#Content").on('tap', function(e){
		e.preventDefault();
		if($(".showing").length) {
			CIA.Nav.hideNav();
		}
	});
	if ($("#scroll-wrapper").length) {
		CIA.Slides.init();
	}
	if(typeof CIA.loadCallback === 'function'){
		CIA.loadCallback();
	}
	
});


function jumptoSlide (zip, presentation) {
    document.location = "veeva:gotoSlide(" + zip + "," + presentation + ")";
}

function JSnextSlide(){
	com.veeva.clm.nextSlide();
}

  function showRef(){
  	$('.refWrapper').slideToggle();
  }


  function closeRef(){
  	$('.refWrapper').slideDown('slow');
  }

