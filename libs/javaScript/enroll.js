var enroll_form = {
	 vdrEnroll:{},
	 randomNum:'',
	 mobileSuc:1,
	 MesCode:{},
};
		$(function () {
			//console.log(Math.random().toString());
			//随机的验证码
			random ();
			//表单验证validate
			enroll_form.vdrEnroll = $("#enrollForm").validate({
				rules:{
					cellPhone:{
						required:true,
						mobileCell:"输入的手机号码",
					},
					userPwd:{
						required:true,
						rangelength:'[6 20]',
					},
					confirmPwd:{
						required:true,
						equalTo:"#userPwd",
					},
					verifyCode:{
						required:true,
						NumVerify:'',
					}
				},
				messages:{
					cellPhone:{
						required:'请输入手机号码',
					},
					userPwd:{
						required:'请输入密码',
						rangelength:'密码长度必须为6-20个字符',
					},
					confirmPwd:{
						required:'请再次输入密码',
						equalTo:'两次输入的密码不一致，请重新输入'
					},
					verifyCode:{
						required:'请输入验证码',
					}
				},
				agree:{
					required:true,
				},
				submitHandler:function() {
					if($('#agree').is(':checked')) {
						var userName = $("input[name=cellPhone").val();
						var Pwd = $("input[name=userPwd").val();
						var random =  Math.random().toString();
						 var C_name ="C_name" + random;
						 var C_pwd ="C_pwd" + random;
						$.cookie(C_name,userName, { path: "/"});
						$.cookie(C_pwd,Pwd, { path: "/"}); 
						window.location.href="Login.html";
						//$(form).ajaxSubmit();
					}
				}
			});
			//手机号码验证规则
			$.validator.addMethod("mobileCell",function(value,element,params){
					var mobileCell =  /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0-9]|170)\d{8}$/;
					if(mobileCell.test(value)){
						enroll_form.mobileSuc = 0;
					}
					else{
						enroll_form.mobileSuc = 1;
					}
					return this.optional(element) || (mobileCell.test(value));
			},"您输入的手机号码格式错误，请重新输入!");

			//验证码规则
			$.validator.addMethod("NumVerify",function(value,element,params){
				return value == $("#verifyImg").text();
			},"验证码有误，请重新输入")

			//短信验证码
			$("#getMes").on("click",function(){
				if(enroll_form.mobileSuc == 0){
					enroll_form.MesCode = '';
					for(var i = 0; i<6; i++){
						enroll_form.MesCode += parseInt(Math.random()*10);
					}
					console.log(enroll_form.MesCode);
				}
			})

			//$("#enrollForm").validate({
				//验证成功之后
				
				//submitHandler:function() {
				///	console.log(123);
					//$(form).ajaxSubmit();
				//}
			//})
		})
		//产生随机验证码
		function random () {
			enroll_form.randomNum = '';
			for(var i = 0; i<4; i++){
				enroll_form.randomNum += parseInt(Math.random()*10);
			}
			$("#verifyImg").text('');
			$("#verifyImg").text(enroll_form.randomNum);
		}
