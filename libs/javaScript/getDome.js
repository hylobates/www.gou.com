$(function () {
	$("#btn").on("click",function () {
		var data = {
			account:"Ge",
			password:"123456",
			phone:"1514545115",
			mail:"hylobates@163.com",
			username:"GU"
		}
		$.post('http://10.3.136.12//course/api/api/student/Register',data,function(response){
			console.log(response);
		});
	})
	
})