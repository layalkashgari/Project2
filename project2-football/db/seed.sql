DROP DATABASE IF EXISTS loojteam;
CREATE DATABASE loojteam;
\c loojteam

-- add create tables here

CREATE TABLE players(
  id serial primary key,
  fname varchar,
  lname varchar,
  position varchar
  
);

CREATE TABLE games(
  id serial primary key,
  date varchar,
  location varchar
);

CREATE TABLE players_games( 
    id serial primary key 
    player_id int not null,
 foreign key(id) references players
  game_id int not null,
 foreign key(id) references games
);

-- create players 

INSERT INTO players 
(fname, lname, position)

VALUES 
('Lujain', 'Kashgari', 'RW'),
( 'Munira',  'Alhamdan', 'F'),
('Haifa', 'alOlayan', 'RF'),
('Wadha', 'Almasaari', 'M');



INSERT INTO games
(date, location)

 VALUES 
('12/11/2018', 'Al-Dammam'),
( '12/1/2018',  'Bahrain'),
('1/6/2018', 'Jeddah');


INSERT INTO players_games VALUES
(1, 1),
(1, 2), 
(2, 1); 



