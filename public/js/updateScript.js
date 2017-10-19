function updateMatch(){
	let r = $('#roundSelect').val();
	let m = $('#matchSelect').val();

	var winner = {
		tournament: tournamentName,
		round: r,
		match: m,
		team: $("#teamSelect").val()
	}

	$.ajax({
		method: "PUT",
		url: "/api/games",
		data: winner
	})
	.done(function(err, data) {
		console.log("sfasdf");
		if(m % 2 === 1){
			var subText = $("<div class='subText'>").text(winner.team);
			$('div[data-roundNum="' + (r) + '"]').children('div[data-matchNum="' + Math.ceil(m/2) + '"]').children().eq(0).append(subText);
		} else {
			var subText = $("<div class='subText'>").text(winner.team);
			$('div[data-roundNum="' + (r) + '"]').children('div[data-matchNum="' + Math.ceil(m/2) + '"]').children().eq(1).append(subText);
		}
	});
}
}
