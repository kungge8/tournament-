create database bracketGenerator;

use bracketGenerator;

create table tournaments(

    tournament_id integer(5) not null auto_increment,
    tournament_name varchar(20) not null,
    tournament_info varchar(240),
    primary key(tournament_id)

);

create table rounds(

    round_id integer(5) not null auto_increment,
    tournament_id integer(5) not null,
    foreign key(tournament_id) references tournaments(tournament_id),
    primary key(round_id)

);

create table matches(

    match_id integer(5) not null auto_increment,
    round_id integer(5) not null,
    tournament_id integer(5) not null,
    foreign key(round_id) references rounds(round_id),
    foreign key(tournament_id) references tournaments(tournament_id),
    primary key(match_id)

);

create table teams(

    team_id integer(5) not null auto_increment,
    team_name varchar(20) not null,
    tournament_id integer(5) not null,
    match_id integer(5) not null,
    team_info varchar(240),
    foreign key(tournament_id) references tournaments(tournament_id),
    foreign key(match_id) references matches(match_id),
    primary key(team_id)

);

