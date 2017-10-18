function updateMatch(){
	let r = $('input[name="tournamentName"]').val();
	let m = $('textarea[name="tournamentDesc"]').val();
	let t = 

	console.log(m);

	// console.log($('div[data-roundNum="' + (r-1) + '"]').children()[parseInt($('#tournamentSelect').val())- 1]);

	var winner = {
		tournament: tournamentName,
		round: r,
		match: m,
		team: $('div[data-roundNum="' + (r-1) + '"]').children('div[data-matchNum="' + m + '"]').children().eq(parseInt($('#tournamentSelect').val())- 1).text()
	}

	console.log(winner);

	$.ajax({
		method: "PUT",
		url: "/api/games",
		data: winner
	})
	.done(function(err, data) {
		console.log(parseInt($('#tournamentSelect').val())- 1);
			if(m % 2 === 1){
				$('div[data-roundNum="' + (r) + '"]').children('div[data-matchNum="' + Math.ceil(m/2) + '"]').children().eq(0).text(winner.team);
			} else {
				$('div[data-roundNum="' + (r) + '"]').children('div[data-matchNum="' + Math.ceil(m/2) + '"]').children().eq(1).text(winner.team);
			}
		});
}

function upScInit(){
	console.log("upScInit");
	$('#label1').text("Round #");
	$('#label2').text("Match #");
	$('#label3').text("Winning Team");
	$('#tournamentSelect').html('<option>1</otion><option>2</otion>');

	$(".footer").off();
	$(".footer").on("click", updateMatch);
}