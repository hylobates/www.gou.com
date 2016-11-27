$(function  () {
	var $mianPanel = $("#panel-pic .mian-panel li");
	var $mainMin = $("#panel-pic .main-min li");
	var $indexMain = $("#index-main");

	//开始轮播
	var $index = 0;
	var mainPic_timer;
	function mainPicMove($index) {
		var $length = $mianPanel.length;
		mainPic_timer = setInterval(function () {
			StarMove($index);
			$index++;
			if ($index >= $length) {
				$index = 0;
			};
		},1500)
	}
	//图片切换效果，切换到index张
	function StarMove($index) {
		$mainMin.stop().animate({
			 	marginTop:0,
		},400);
		$mainMin.eq($index).stop().animate({
			 	marginTop:-10,
		},400);
		$mianPanel.eq($index).stop().animate({
				opacity:1,
		}, 400).siblings('li').stop().animate({
				opacity:0,
		}, 400);
		var mianbg = 'mainbg' + $index;
		$indexMain.removeClass().addClass( mianbg );
	}
	 mainPicMove($index);
	//鼠标移动事件
	$mainMin.on("mouseover",function (e) {
		window.clearInterval(mainPic_timer);
		$index = $(this).index();
		StarMove($index);
		$index++;
		$(this).on("mouseout",function(e){
			mainPicMove($index);
			e.stopPropagation();
		})
		e.stopPropagation();
	})

	//整点抢购
	var $rushPrev = $("#rushPus .rush-list .prev");
	var $rushNext = $("#rushPus .rush-list .next");
	var $rushContent = $("#rushPus .rush-content")
	var _left = $rushContent.offset().left;
	function rushMove (_left){
		console.log(_left);
		$rushContent.stop().animate({
			left: _left - 80,
		});
	}
	//下一页
	$rushNext.on("click",function(e){
		if(_left <= -2320){
			_left = 1280;
		}
		_left -= 1200;
		rushMove (_left);
		e.stopPropagation()
	})
	//上一页
	$rushPrev.on("click",function(e){
		if(_left >= 79){
			_left = -3520;
		}
		_left += 1200;
		rushMove (_left);
		e.stopPropagation()
	})
})