var banner = document.getElementById('banner');
var legal = document.getElementById('roll-cta');

var tl = new TimelineMax({repeat:1, repeatDelay:2});

window.onload = function() {   
    
	tl.set(banner, {visibility: "visible"})

	/*frame one*/	
	.add("frame1")
	.from(".frame-1-text,.dell_logo,.cta, .vendor_text,.funding_logo", .3, {alpha:0, ease:Linear.easeIn}, "frame1+=.2")
	.to(".frame-1-text,.dell_logo,.bg, .vendor_text,.funding_logo", .3, {alpha:0, ease:Power4.easeOut}, "frame1+=3")

	/*frame two*/
	.add("frame2","frame1+=3")
	.from(".dell_logo2", .3, {alpha:0, ease:Linear.easeIn}, "frame2")
	.from(".frame-2-text, .product_f2_name, .vendor_text2,.funding_logof1, .dell_logo3", .3, {alpha:0, ease:Linear.easeIn}, "frame2")
	.from(".product_f2", .3, {alpha:0, x:300, ease:Linear.easeIn}, "frame2")
	.to(".frame-2-text,.dell_logo2", .3, {alpha:0, ease:Power4.easeOut}, "frame2+=3")
	.to(".product_f2, .product_f2_name", .3, {alpha:0, x:-200, ease:Power4.easeOut}, "frame2+=3")

	/*frame three*/
	.add("frame3","frame2+=3")
	.from(".frame-3-text, .product_f3_name, .bg2", .3, {alpha:0, ease:Linear.easeIn}, "frame3")	
	.from(".product_f3", .3, {alpha:0, x:300, ease:Linear.easeIn}, "frame3")
	.to(".frame-3-text", .3, {alpha:0, ease:Power4.easeOut}, "frame3+=3")
	.to(".product_f3, .product_f3_name", .3, {alpha:0, x:-200, ease:Power4.easeOut}, "frame3+=3")

	/*frame four*/
	.add("frame4","frame3+=2.9")
	.from(".product_f6,.product_f5_name", .3, {alpha:0, x:-150, ease:Linear.easeIn}, "frame4+=.3")
	.from(".frame-6-text,.f6-price, .f5text", .3, {alpha:0, ease:Power4.easeIn}, "frame4")

	/*roll over*/
	.from("#roll-cta", .3, {alpha:0, x:-300, ease:Power4.easeout}, "frame4+=0.7")
	.from("#rolltext", .3, {alpha:0, ease:Power4.easeout}, "frame4+=0.7")
	.from("#legal-text", .3, {alpha:0, ease:Power4.easeout}, "frame4+=0.7")

	legal.addEventListener("mouseover",legalHover);
	function legalHover(){
		tl.pause();
		TweenMax.to("#legal", .5, {top:0, ease:Power1.easeOut})  
	}

	legal.addEventListener("mouseout",legalOut);
	function legalOut(){
		tl.play();
		TweenMax.to("#legal", .5, {top:-1000, ease:Power1.easeIn})
	}

	;

  // tl.seek("loop")

  var currentDuration = tl.duration();
  console.log(currentDuration);  
  
}