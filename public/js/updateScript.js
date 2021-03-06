function updateMatch(){
	let r = $('input[name="tournamentName"]').val();
	let m = $('input[name="tournamentDesc"]').val();

	if(Number.isInteger(parseInt(r)) && Number.isInteger(parseInt(m))){
		var winner = {
			tournament: tournamentName,
			round: r,
			match: m,
			team: $('div[data-roundNum="' + (r-1) + '"]').children('div[data-matchNum="' + m + '"]').children().eq(parseInt($('#tournamentSelect').val())- 1).children(".subText").text()
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
				var subText = $("<div class='subText'>").text(winner.team);
				$('div[data-roundNum="' + (r) + '"]').children('div[data-matchNum="' + Math.ceil(m/2) + '"]').children().eq(0).html(subText);
			} else {
				var subText = $("<div class='subText'>").text(winner.team);
				$('div[data-roundNum="' + (r) + '"]').children('div[data-matchNum="' + Math.ceil(m/2) + '"]').children().eq(1).html(subText);
			}
		});
	} else {
		alert("Invalid Match or Round #");
	}
}

function upScInit(){
	console.log("upScInit");
	$('#label1').text("Round #");
	$('#label2').text("Match #");
	$('#label3').text("Winning Team");
	$('#tournamentSelect').html('<option>1</otion><option>2</otion>');

	$("#tournamentSelect").off();
	$('.reset').off();
	$('.reset').hide();
	$(".footer").off();
	$(".footer").on("click", updateMatch);
}