$(function () {
	var $maquCla = $(".maqu-classify h2 i");
	$maquCla.on("click",function(){
		$(this).parent("h2").next().toggle();
		if($(this).text() == "-"){
			$(this).text("+");
		}else{
			$(this).text("-");
		}
	})
	//列表图移动效果
	var $panelList = $(".maqu-panel-list > li");
	$panelList.hover(function() {
		$(this).children('.panelBtn').show().animate({
			opacity:1,
		}, 400);
		
	}, function() {
		$(this).children('.panelBtn').hide().animate({
			opacity:0,
		}, 400)
	});
})