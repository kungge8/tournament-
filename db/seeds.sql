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

select * from matches;

select * from teams;