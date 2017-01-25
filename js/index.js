///vauprazdnik.ru
//2017 © tegra.pro

$().ready(function() {
	$.ajax({
			url: "/ajax/get_hello.php",
			data: {name:YMaps.location.city},
			context: $(this),
			success: function(msg) {
				hellos = msg.split("||");
				$("h1").html(hellos[0]);
				$(".index-video-text-more").html(hellos[1]);
			}
		});
});