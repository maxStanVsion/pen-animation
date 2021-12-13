$(document).ready(function(){

 	// Init ScrollMagic Controller
 	var controller = new ScrollMagic.Controller();

 	// Create a Scene - move the pen body back to start
 	var pinBody = new ScrollMagic.Scene({
 		triggerElement: '.part1',
 		triggerHook: 1,
 		offset: 287,
 		duration: 572
 	})
 	.setPin('.part3')
 	.addTo(controller);

 	// Create a Scene - fix part 6 to bottom of viewport
 	var pinCap = new ScrollMagic.Scene({
 		triggerElement: '.part1',
 		triggerHook: 1,
 		offset: 1250,
 		duration: 846
 	})
 	.setPin('.part6', {pushFollowers: false})
 	.addTo(controller);

 	// Create a Scene - fix part 5 to bottom of viewport
 	var pinNib = new ScrollMagic.Scene({
 		triggerElement: '.part1',
 		triggerHook: 1,
 		offset: 1250,
 		duration: 726
 	})
 	.setPin('.part5', {pushFollowers: false})
 	.addTo(controller);

 	// Create a Scene - fix part 4 to bottom of viewport
 	var pinInk = new ScrollMagic.Scene({
 		triggerElement: '.part1',
 		triggerHook: 1,
 		offset: 1250,
 		duration: 557
 	})
 	.setPin('.part4', {pushFollowers: false})
 	.addTo(controller);



 	// FADE IN TEXT SCENES
 	var fadeInText1 = new ScrollMagic.Scene({ triggerElement: '.part1', triggerHook: 0.55 }).setClassToggle('.part1', 'fade-in').addTo(controller);
 	var fadeInText2 = new ScrollMagic.Scene({ triggerElement: '.part2', triggerHook: 0.55 }).setClassToggle('.part2', 'fade-in').addTo(controller);
 	var fadeInText3 = new ScrollMagic.Scene({ triggerElement: '.part3', triggerHook: 0.55, offset: 580 }).setClassToggle('.part3', 'fade-in').addTo(controller);
 	var fadeInText4 = new ScrollMagic.Scene({ triggerElement: '.part4', triggerHook: 0.55, offset: 557 }).setClassToggle('.part4', 'fade-in').addTo(controller);
 	var fadeInText5 = new ScrollMagic.Scene({ triggerElement: '.part5', triggerHook: 0.55, offset: 726 }).setClassToggle('.part5', 'fade-in').addTo(controller);
 	var fadeInText6 = new ScrollMagic.Scene({ triggerElement: '.part6', triggerHook: 0.55, offset: 846 }).setClassToggle('.part6', 'fade-in').addTo(controller);

});
