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
						// mobileCell:"",
					},
					userPwd:{
						required:true,
					},
					verifyCode:{
						required:true,
						NumVerify:'',
					}
				},
				messages:{
					cellPhone:{
						required:'请输入账号',
					},
					userPwd:{
						required:'请输入密码',
					},
					verifyCode:{
						required:'请输入验证码',
					}
				},
				 submitHandler:function() {
				var name = $("input[name=cellPhone]").val();
					var Pwd = $("input[name=userPwd]").val();
					//
					var aCookie = document.cookie.split(";"); 
					
					  var name_code = '';
					  var Pwd_code = '';  
					  for (var i = 0; i < aCookie.length; i++) {  
					      var aCrumb = aCookie[i].split("=");

					      if (name == aCrumb[1]) {
					      		name_code = aCrumb[0].replace("C_name","");
					      		console.log(name_code) 
					      }
					      if (Pwd == aCrumb[1]) {
					      		Pwd_code = aCrumb[0].replace("C_pwd","");
					      }
					  } 
					  if (name_code.length != 0 && Pwd_code.length != 0) {
					  		if(name_code == Pwd_code) {
					  			window.location.href="index.html";
					  		}else {
					  			return false;
					  		}
					  }else{
					  	console.log(13)
					  	return false;
					  }

				}
			});

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
