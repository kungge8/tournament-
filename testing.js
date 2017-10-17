var tournamentName = "test";

function makeMatch(arr){
  return {
  	team1: "Asdfasdfasdf",
  	team2: "asdfasdfasdfasdf"
    // team1: teams[arr[0]-1],
    // team2: teams[arr[1]-1]
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
  console.log(makeRound(makePairs(makePlayers(numPlayers)),1));
}

otherSeeding(16);