use bracketGenerator;

-- very basic setup for the first round of a tournament
INSERT INTO tournaments (name, info)
VALUES ("test1", "blah");

INSERT INTO matches (tournamentId, RoundNumber)
Values (1,1);

INSERT INTO matches (tournamentId, RoundNumber)
Values (1,1);

INSERT INTO teams (name, teamInfo, matchId)
Values ("test", "testInfo", 1);

INSERT INTO teams (name, teamInfo, matchId)
Values ("test", "testInfo", 1);

INSERT INTO teams (name, teamInfo, matchId)
Values ("test", "testInfo", 2);

INSERT INTO teams (name, teamInfo, matchId)
Values ("test", "testInfo", 2);

select * from tournaments;

select * from rounds;

select * from matches;

select * from teams;

select * from tournaments
LEFT JOIN rounds on rounds.TournamentId
LEFT JOIN matches on matches.RoundId
LEFT JOIN teams on teams.MatchId;

select tournaments.id, 
tournaments.name as TournamentName,
matches.RoundId as Round,
matches.id as MatchID,
teams.id as TeamID from tournaments
LEFT JOIN rounds on rounds.TournamentId
LEFT JOIN matches on matches.RoundId
LEFT JOIN teams on teams.MatchId
WHERE tournaments.id = 1;