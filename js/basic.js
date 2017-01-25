///vauprazdnik.ru
//2017 © tegra.pro

$().ready(function() {
	$.ajaxSetup({type:"POST"});
	$("input[name=phone]").mask("+7 (999) 999-99-99");	
	$(".ms-top-menu a, .ms-bottom-menu a").hover(
		function() {$(this).animate({"border-bottom-color":"rgba(220,14,133,1)"},250);},
		function() {$(this).animate({"border-bottom-color":"rgba(220,14,133,0)"},250);}
	);
	$(".ms-logo").hover(
		function() {$(this).animate({"rotate":"3deg","scale":1.1},250);},
		function() {$(this).animate({"rotate":"0deg","scale":1},250);}
	);
	$(document).on("mouseenter",".ms-button", function() {if(!$(this).hasClass("disabled")) {$(this).animate({"background-color":"#b6086d"},250);}});
	$(document).on("mouseleave",".ms-button", function() {if(!$(this).hasClass("disabled")) {$(this).animate({"background-color":"#dc0e85"},250);}});
	
	$(".ms-index-holidays-block-pic, .ms-index-make-block-pic, .ms-index-insta-pic, .ms-works-block-pic").mouseenter(function() {
		$(this).animate({"rotate":"3deg"},150);
		$(this).animate({"rotate":"-3deg"},150);
		$(this).animate({"rotate":"0deg"},150);
	});
	
	$(document).on("mouseenter",".ms-index-insta-social a, .overlay-done-social a, .overlay-close", function() {
		$(this).animate({"opacity":0.3},150);
		$(this).animate({"opacity":1},150);
	});
	$(".ms-holiday-faq-what").click(function() {
		$(this).next(".ms-holiday-faq-that").is(":hidden") ? $(this).next(".ms-holiday-faq-that").slideDown(300) : $(this).next(".ms-holiday-faq-that").slideUp(300);
	});
	
	//live menu
	$(window).on("scroll", function() {
		$(this).scrollTop()>=70 ? $(".ms-navi div").css({"position":"fixed","top":"0px","left":"0px"}) : $(".ms-navi div").css({"position":"absolute"});
	});
	$(document).on("click", ".ms-navi a", function() {
		var id = $(this).attr("id").substr(1)*1;
		$("html, body").animate({scrollTop:$(".b"+id).offset().top}, 1000);
		//close_mobilemenu();		
	});
	

	//overlays
	function overlay_close() {
		$("body").css("overflow","auto"); 
		$(".overlay").fadeOut(300,function() {$(this).detach();});
	}
	$(document).keydown(function() {if(event.keyCode==27) {overlay_close();};});	
	$(document).on("click", ".overlay, .overlay-close, .overlay-done-top-back a", function() {overlay_close();});
	$(document).on("click", ".overlay-block, .overlay-done", function(event) {event.stopPropagation();});
	$(".ms-top-recall, .ms-center-reserve, .ms-order").click(function() {
		if($(this).hasClass("ms-top-recall")) {var h1 = "Обратный звонок";}
		else if($(this).hasClass("ms-center-reserve")) {var h1 = "Забронировать детский центр";}
		else {var h1 = "Пакет «"+$(this).parent().find(".ms-holiday-fill-block-h1").text()+"»";}
		$("body").css("overflow","hidden");
		var html = "<div class='overlay'><div class='overlay-cell'><div class='overlay-block'>"
			+"<div class='overlay-close' title='Закрыть окно'></div>"
				+"<div class='overlay-h1'>"+h1+"</div>"
				+"<div class='overlay-about'>Оставьте нам контактные данные и мы перезвоним в ближайшее время</div>"
				+"<input type='text' name='name' placeholder='Ваше имя' />"
				+"<input type='text' name='phone' placeholder='Номер телефона' />"
				+"<div class='ms-button' id='but_recall'>Оставить заявку</div>"
		+"</div></div></div>";
		$("body").prepend(html);
		$(".overlay").animate({"opacity":1},300);
		$("input[name=phone]").mask("+7 (999) 999-99-99");	
	});	

	//mobile menu
	$(".mobile-top__menu").on("click", function(e) {
		e.preventDefault();
		$("body").toggleClass("mobile-open");
	});
});