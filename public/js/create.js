$("#teams").on("change", function() {
  addFields();
})

$("#submit").on("click", function() {
  teams = [];
  tournamentName = $("#name").val()
  number = $("#teams").val();

  var empty = false;
  for (var i = 1; i <= number; i++) {
    if ($("#team" + i).val().trim() === "") {
      empty = true;
    }
  }

  if ($("#name").val().trim() === "" || empty) {
    alert("Not Everything Filled");
  }
  else {
    console.log("Tournament Name: " + tournamentName);
    for (var i = 1; i <= number; i++) {
      teams.push($("#team" + i).val().trim())
      $("#team" + i).val("");
    }

    if($("#random").is(":checked")) {
      randomize(teams);
    }

    $("#name").val("");
    seeding(number);
  }
});

function addFields() {
  var number = $("#teams").val();
  
  $(".teamsInput").empty();
  for (var i = 1; i <= number; i++) {
    var line = $("<div>");
    line.attr("class", "inputLine");
    line.append("Team " + i + " ");
    var input = $("<input>");
    input.attr("type", "text");
    input.attr("id", "team" + i);
    line.append(input);
    $(".teamsInput").append(line);
  }
}

function kevin() {

  function makeMatch(arr){
    return {
      team1: teams[arr[0]-1],
      team2: teams[arr[1]-1]
    }
  }

  function makeDummyMatch(roundNum, n){
    return {
      team1: "Round " + roundNum + " Match " + n + " Winner",
      team2: "Round " + roundNum + " Match " + (n+1) + " Winner"
    }
  }

  function makeRound(matchArr, roundNum){
    return matchArr.map(function(n){
      let x = makeMatch(n);
      x.roundNum = roundNum;
      x.tournamentName = tournamentName;
      return x;
    }) 
  }

  function makeDummyRound(matchArr, roundNum){
    let i = 1;
    return matchArr.map(function(n){
      let x = makeDummyMatch(n, i);
      x.roundNum = roundNum;
      x.tournamentName = tournamentName;
      i++;
      return x;
    }) 
  }

  function makePlayers(int){
    var arr = []
    for(var i = 0; i <= int; i++){
      arr.push(i+1);
    }
    return arr;
  }

  function makePairs(arr){
    return arr.reduce(function(a, n, i, arr){
      if (i % 2 === 0){
        a.push(arr.slice(i, i+2));
      }

      return a;
    }, []);
  }

  function otherSeeding(numPlayers){
    var rounds = Math.log(numPlayers)/Math.log(2)-1;
    makeRound(makePairs(makePlayers(numPlayers)),1);
    makeDummyround(makePairs(makePlayers()))
  }

  function controller(numPlayers, roundNum){
    if(roundNum === 1){
      $.post("/api/games", makeRound(makePairs(makePlayers(numPlayers)),1));
    } else if (numPlayers / Math.pow(2, roundNum) === 1){
      $.post("/api/games", makeDummyRound(makeDummyMatch(roundNum,1)));
      return;
    } else {
      $.post("/api/games", makeDummyRound(makePairs(makePlayers(numPlayers / Math.pow(2, roundNum)))));
      controller(numPlayers, roundNum+1);
    }
  }
}

function seeding(numPlayers) {
  var rounds = Math.log(numPlayers)/Math.log(2)-1;
  var pls = [1,2];
  for (var i = 0; i < rounds; i++) {
    pls = nextLayer(pls);
  }
  for (var i = 0, j = 1; i < pls.length; i+=2, j++) {
    console.log("Match " + j + ": " + teams[(pls[i]-1)] + " vs " + teams[(pls[i+1]-1)]);
    var newMatch = {
      team1: teams[(pls[i]-1)],
      team2: teams[(pls[i+1]-1)],
      matchNum: j,
      roundNum: 1,
      tournament: tournamentName
    }
    $.post("/api/games", newMatch); 
  }
  for (var k = 1; pls.length/Math.pow(2,k) !== 1; k++) {
    for(var i = 1, j = 1; i < pls.length/Math.pow(2,k); i+=2, j++) {
      console.log("Round " + (k+1) + " - Match " + j + ": " + "Round " + k + " Match "+ i + " Winner" + " vs " + "Round " + k + " Match "+ (i+1) + " Winner");
      var newMatch = {
        team1: "Round " + k + " Match " + i + " Winner",
        team2: "Round " + k + " Match " + (i+1) + " Winner",
        matchNum: j,
        roundNum: (k+1),
        tournament: tournamentName
      }
      $.post("/api/games", newMatch);
    }
  }
  return pls;
  function nextLayer(pls) {
    var out=[];
    var length = pls.length*2+1;
    pls.forEach(function(d) {
      out.push(d);
      out.push(length-d);
    });
    return out;
  }
}

function randomize(array) {
  var i = 0;

  while (i < array.length) {
    num1 = Math.floor(Math.random() * array.length);
    num2 = Math.floor(Math.random() * array.length);

    tmp = array[num1];
    array[num1] = array[num2];
    array[num2] = tmp;

    i++;
  }

  return array;
}

addFields();