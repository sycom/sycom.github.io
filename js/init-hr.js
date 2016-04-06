(function($) {
	$(function() {

		var	$window = $(window),
			$body = $('body');
	/* Colorize from date */
		var t=0; // color teint
		var today=new Date();
		var fDay=new Date(today.getFullYear(),0,0);
		// get the teint from date : spring > green, summer > yellow, autumn > red, winter > blue...
		var ts=256, tm=60, jd=8000, ji=272, nj=(today.getTime()-fDay.getTime())/1000/3600/24;
		t=Math.round(ts-nj+tm*Math.exp(-(ji-nj)*(ji-nj)/jd));
		if (t<0) t+=360;
        //t=220;
		// apply t to page elements
        // dark color
        var color='hsla('+t+',80%,20%,.75)';
        $('a,.fa-stack:hover').css('color',color);
        // light color
        color='hsla('+t+',50%,70%,1)';
        $('a:visited,.high nav .buttons li a,.fa-stack').css('color',color);
        $('.high nav .buttons li:hover').css('background-color',color);
        $('.high nav .buttons li').css('border-color',color);
        $('.c3').css('box-shadow','0px 4px 9px '+color);
        $('.header,.footer').css('background-image','linear-gradient(125deg,white,'+color+','+color+','+color+')');
		});
	})(jQuery);
