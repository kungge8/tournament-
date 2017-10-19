$(document).ready(function() {




	$("#loginButton").on("click",function(){
		var username = $("#user").val().trim();
		var password = $("#pass").val().trim();
	 	loginUser(username, password);

	});

	$("#userButton").on("click",function(){

		var username = $("#user").val().trim();
		var password = $("#pass").val().trim();

		signUpUser(username, password);

   		$("#user").val("");
   		$("#pass").val("");
	});

	$("#continueButton").on("click",function(){
		window.location = "/create";
	});


	function loginUser(username, password) {
	    $.post("/api/login", {
	      userName: username,
	      passWord: password
	    }).then(function(data) {
	    	window.location = "/create";
	    }).catch(function(err) {
	      console.log(err);
	    });
	  };

	function signUpUser(username, password) {
		$.post("/api/signup", {
		  userName: username,
		  passWord: password
		}).then(function(data) {
			alert("Account Created!")
		}).catch(handleLoginErr);

	};


	function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
	
});