$(document).ready(function() {

	$("#loginButton").on("click",function(){
		var username = $("#user").val().trim();
		var password = $("#pass").val().trim();
	 	loginUser(username, password);
	});

	$("#userButton").on("click",function(){

		var username = $("#user").val().trim();
		var password = $("#pass").val().trim();
		if (username === "" || password === ""){
			alert("Please enter a unique Username and Password")
		}else {
			signUpUser(username, password);
	};

   		$("#user").val("");
   		$("#pass").val("");
	});

	$("#continueButton").on("click",function(){
		window.location = "/create";
	});

	$("#homeButton").on("click",function(){
		window.location = "/";
	});


	function loginUser(username, password) {
	    $.post("/api/login", {
	      username: username,
	      password: password
	    }).then(function(data) {
	    	window.location.replace(data);
	    }).catch(function(err) {
	      console.log(err);
	    });
	  };

	function signUpUser(username, password) {
		$.post("/api/signup", {
		  username: username,
		  password: password
		}).then(function(data) {
			alert("Account Created!")
		}).catch(handleLoginErr);

	};


	function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
	
});