$(function () {
	//加载页面
	$("#public-head").load("common-head.html?"+Math.random());
	$("#public-footer").load("common-footer.html?"+Math.random());
	//hover切换主图
	var $minImg = $(".minImg-list li");
	var $bigImg = $(".lan-lead>img");
	$minImg.hover(function() {
		var $src = $(this).children('img').attr("src")
		$bigImg.attr({
			"src":$src,
			jqimg:$src,
		});
	});
	//放大功能
	$(".lan-lead").jqueryzoom({
		xzoom: 500,//放大区域宽度
		yzoom: 500,//放大区域高度
		preload: 1,//是否显示预加载
		offset:10,//放大区域偏离小图的距离
		position: "right",//放大区域显示的位置（left,right）
		lens:true //是否显示小图上的透明区域
	});
	//加入购物车按钮
	var $joinCar = $(".joinCar");
	//商品图
	var $goodsImg = $(".lan-lead img").attr("src");
	//商品名
	var $goodsName = $(".goodsName h1").text();
	//单价
	var $place = $("#price b").text();
	//商品数量
	var $goodsNum = $("#goodsNum input:text").val();

	function addTrolley(goodsImg,goodsName,place,goodsNum) {
		//判断是数量
		if (goodsNum == undefined) {
			return false;
		}
		var cookieSet = {expires:7,path:'/'};//设置cookie路径的
			var Jgoods = '[{"goodsImg":"'+ goodsImg +'","goodsName":"'+goodsName+'","place":"'+ place+'","goodsNum":"'+goodsNum+'"}]';
				console.log(Jgoods)
			 	$.cookie("laneige",Jgoods,cookieSet);//没有这个cookie就设置它
		}
	$joinCar.on("click",function() {
		addTrolley($goodsImg,$goodsName,$place,$goodsNum);
		window.location.href="shopping-trolley.html";
	})
})