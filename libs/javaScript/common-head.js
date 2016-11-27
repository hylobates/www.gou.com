$(function () {
	//点击关闭头部的广告
	$("#adv-close").on("click",function () {
		$("#header-adv").hide();
	})
	//头部的小滑块
	var $slip = $("#header-list .block")
	var $locally = $("#header-list .item li:not(':last')"); 
	$locally.on("mouseover",function (event) {
		//event.preventDefault();
		var _left = $(this).offset().left - 220;
		var _width = $(this).children('a').width();
		$slip.stop().animate({
 			left:_left,
 			width:_width,
		},200);
	});
	//鼠标移除是回到原位
	//$("#header-list .item").on('mouseout', function(event) {
			//event.preventDefault();
			//console.log(12)
			// $slip.animate({
 		// 		left:8,
 		// 		width:33,
			// },200);
	//	});

	//鼠标移动到商品分类显示分类
	$("#header-list .allGoods,#header-list .sidebarIfy,#header-list .goodsList").on("mouseover",function () {
		$("#header-list .sidebarIfy").show();
	}).on("mouseout",function () {
		$("#header-list .sidebarIfy").hide();
	})
	//商品分类列表
	$("#header-list .sidebarIfy li").on("mouseover",function(){
		$(this).stop().animate({
			paddingLeft:25,
		},300);
		$("#header-list .goodsList li").eq($(this).index()).show();
	}).on("mouseout",function(){
			$(this).stop().animate({
				paddingLeft:15,
			},300);
			$("#header-list .goodsList li").eq($(this).index()).hide();
		});
	//商品列表
	$("#header-list .goodsList li").on("mouseover",function(){
		$(this).show();
		$("#header-list .sidebarIfy").show();
	}).on("mouseout",function(){
		$(this).hide();
		$("#header-list .sidebarIfy").hide();
	})

	var $iconDwnd = $("#bar-Left .iconDwnd .iconB");
	$iconDwnd.on('mouseover',function () {
		$(this).next().show();
	}).on('mouseout',function () {
		$(this).next().hide();
	})

	//点击购物车弹出侧边
	$("#bar-Left .iconUp .barCar").on("click",function  () {
		if($("#bar-right").width() == 0){
			$("#bar-right").show().stop().animate({
                 width:292,
			}, 300);
		}else if($("#bar-right").width() == 292){
			$("#bar-right").stop().animate({
                 width:0,
			}, 300,function () {
				$("#bar-right").hide();
			});
		}
	})
})