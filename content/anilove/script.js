
$(window).on('resize', function(){header();});

$(function(){header();});

function header(){
	if($(window).width() < 910){
		$("header,#close_top").css('display','none');
		$("#open_top").show();
		$("#header").css('display','flex');
	}else{
		$("header").css('display','flex');
		$("#header,#open_top,#close_top").css('display','none');
	}
}

$(function(){
	$("#open_top, #close_top").click(function(){
		$("#open_top, #close_top").toggle();
		$("header").toggle();
	});
});

var slide = 1;
setInterval(function(){
	$('#imgslider1').animate({'margin-left':'-=100%'},500, function(){
		slide++;
		if(slide === 4){
			slide = 1;
			$('#imgslider1').css('margin-left','0')
		}
	});
},4000)

setInterval(function(){
	$('#crown,#crown_3,#crown_5,#crown_6').animate({opacity:'0.1'},3000);
	$('#wave,#wave_3,#wave_5,#wave_6').animate({opacity:'0.1'},5000);
	$('#crown,#crown_3,#crown_5,#crown_6').animate({opacity:'0.8'},4000);
	$('#wave,#wave_3,#wave_5,#wave_6').animate({opacity:'0.8'},4000);
	$('#plain').animate({opacity:'1',right:'20px'},1000);
	$('#spiral,#spiral_3,#spiral_5,#spiral_6').animate({opacity:'0.1'},3000);
	$('#tringle,#tringle_3,#tringle_5,#tringle_6').animate({opacity:'0.1'},4500);
	$('#spiral,#spiral_3,#spiral_5,#spiral_6').animate({opacity:'0.8'},4000);
	$('#tringle,#tringle_3,#tringle_5,#tringle_6').animate({opacity:'0.7'},3500);
	$('#spiral_4').animate({opacity:'0.1','left':'-=50px','top':'+=50px'},8500);
	$('#spiral_4').animate({opacity:'1','left':'+=50px','top':'-=50px'},8500);
	$('#circle_4').animate({opacity:'0.3',left:'-=50px'},6500);
	$('#circle_4').animate({opacity:'0.1',left:'+=50px'},6500);
},2000)

