$(function () {
	//商品数量
	//加减
	var $addnum = $(".add-num");
	var $subnum = $(".sub-num");
	$($addnum).on("click",function () {
		//$(this).next().val(Number($(this).prev().val())+1);
		var goodsNum = $(this).prev().val();
		var minCount = $(this).parent(".goods-Number").next(".count-min");
		var unitPrice =parseInt( $(this).parents(".goods-Number").prev(".unit-price").text().trim().split("￥")[1]);
		$(goodsNum).val(parseInt(goodsNum)+1);
		$(minCount).text("￥" + unitPrice*goodsNum.val());
	})
	$($subnum).on("click",function () {
		if ($(this).next().val() == 0) {
			return false;
		}
		//$(this).next().val(Number($(this).next().val())-1);
		//$(goodsNum).val(parseInt(goodsNum)-1);
		// var goodsNum = parseInt($(this).next().val()) - 1;
		// $(this).next().val(goodsNum);
	})
	function changeNum() {
		
	}
	//新加入的商品
	if ($.cookie("laneige")) {
		var jsonObj = eval('('+$.cookie("laneige")+')')
		console.log(jsonObj[0].goodsImg);
		var goodsImg = jsonObj[0].goodsImg;
		var goodsName = jsonObj[0].goodsName;
		var place = jsonObj[0].place;
		var goodsNum = jsonObj[0].goodsNum;
		var money = Number(place)*Number(goodsNum);
		console.log(Number(place));
		createTR(goodsImg,goodsName,place,goodsNum);
	}
	function createTR(goodsImg,goodsName,place,goodsNum) {
		var TR = '';
		TR += '<td><div><input type="checkbox" name="" checked="checked"></div><div class="goodsImg"><img src="'+goodsImg+'"></div>';
		TR += '<div><p class="goodsName">'+'goodsName+</p><p>规格：瓶</p></div></td>';
		TR += '<td class="unit-price">'+place+'</td><td class="goods-Number"><a class="sub-num" href="javascript:;">-</a><input type="text" name="" value="'+goodsNum+'"><a class="add-num" href="javascript:;">+</a>';
		TR += '</td><td class="count-min">'+money+'</td><td class="del-goods"><a href="">删除</a></td>'
		$("<tr>").appendTo('tbody');
		$("tr:last").html(TR);
	}
})
				