///vauprazdnik.ru
//2017 © tegra.pro

$().ready(function() {
	$(".ms-index-calc-form-radio input[name=time]").click(function() {
		$("#calc-2").animate({"opacity":1},300);
		$("#calc-2 input").removeAttr("disabled");
	});
	$(".ms-index-calc-form-radio input[name=show]").click(function() {
		$("#calc-3").animate({"opacity":1},300);
		$("#calc-3 input").removeAttr("disabled");
	});
	$(".ms-index-calc-form-radio input[name=children]").click(function() {
		$(".ms-index-calc-call").slideDown(300);
		setTimeout(function() {
			$(".ms-index-calc-call-loader").slideUp(300, function() {
				$(".ms-index-calc-call-form").slideDown(300);
				$(".ms-index-calc-call-form input[name=phone]").focus();
			});
		}, 3000);
	});
	$("input[name=phone]").on("change keydown keyup blur", function() {
		$(".ms-index-calc-call-form input[type=button]").removeClass("disabled");
	});
});