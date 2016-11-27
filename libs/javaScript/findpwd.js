var enroll_form = {
	 vdrEnroll:{},
	 randomNum:'',
};
		$(function () {
			//随机的验证码
			random ();
			//表单验证validate
			enroll_form.vdrEnroll = $("#enrollForm").validate({
				rules:{
					cellPhone:{
						required:true,
						mobileCell:"输入的手机号码",
					},
					verifyCode:{
						required:true,
						NumVerify:'',
					}
				},
				messages:{
					cellPhone:{
						required:'请输入邮箱/手机号码',
					},
					verifyCode:{
						required:'请输入验证码',
						NumVerify:'您输入的验证码有误，请重新输入'
					}
				},
				submitHandler:function() {
						window.location.href="index.html";
						//$(form).ajaxSubmit();
				}
			});
			//手机号码验证规则
			$.validator.addMethod("mobileCell",function(value,element,params){
					var mobileCell =  /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0-9]|170)\d{8}$/;
					return this.optional(element) || (mobileCell.test(value));
			},"您输入的手机号码格式错误，请重新输入!");

			//验证码规则
			$.validator.addMethod("NumVerify",function(value,element,params){
				return value == $("#verifyImg").text();
			},"验证码有误，请重新输入")

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
