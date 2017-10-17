$("#submit").on("click", function() {
	$(".bracket").empty();
	if($("#tournyName").val().trim() !== "") {
		name = $("#tournyName").val().trim();
		$.get("/api/tournaments/" + name, function(data) {
			console.log(data);
			printMatches(data);
		});
	}
	if($("#teamName").val().trim() !== "") {
		name = $("#teamName").val().trim();
		$.get("/api/teams/" + name, function(data) {
			console.log(data);
			printMatches(data);
		});
	}
});

function printMatches(data) {
	for (var i = 0; i < data.length; i++) {
		var match = $("<div>");
		match.attr("class", "match");
		// match.attr("id", "Round " + data[i].roundNum + " Match " + data[i].matchNum + " Winner");
		match.append("<p>Tournament: " + data[i].tournament + "<br>Match " + data[i].matchNum + "</p>");
		match.append("<p>" + data[i].team1 + "</p>");
		match.append("<p>" + data[i].team2 + "</p>");
		$(".bracket").append(match);
	}
}