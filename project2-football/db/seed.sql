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
  day varchar,
  date varchar,
  time varchar,
  location varchar
);

CREATE TABLE players_games( 
    id serial primary key,
    player_id INT not null,
    game_id INT not null,
    foreign key(player_id) references players,
     foreign key(game_id) references games
);

-- create players 

INSERT INTO players 
(fname, lname, position)

VALUES 
('Lujain', 'Kashgari', 'RW'),
( 'Munira',  'Alhamdan', 'F'),
('Haifa', 'alOlayan', 'RF'),
('Wadha', 'Almasaari', 'M'),
('Sahar', 'alshareef', 'GK'),
('Farah', 'alwkayel', 'D'),
('Bnyah', 'alsaud', 'M'),
('Rand', 'alrashid', 'MD'),
('Sarah', 'alageel', 'D'),
('Haya', 'alrashid', 'RW'),
('Aisha', 'Aldahwila', 'LW');






INSERT INTO games
(day, date, time, location)

 VALUES 
-- ( '12/11/2018', '8:30 PM', 'Al-Dammam'),
-- ( '12/1/2018', '7:30 PM', 'Bahrain'),
-- ('1/6/2018', '3:30 PM', 'Jeddah'),
-- ('12/4/2018', '5:30 PM', 'Riyadh'),
-- ('20/5/2018', '6:00 PM', 'Riyadh');

('Sat', '12/11/2018', '8:30 PM', 'Al-Dammam'),
('Sun', '12/1/2018', '7:30 PM', 'Bahrain'),
('Mon', '1/6/2018', '3:30 PM', 'Jeddah'),
('Wed', '12/4/2018', '5:30 PM', 'Riyadh'),
('Sat', '20/5/2018', '6:00 PM', 'Riyadh');



INSERT INTO players_games(player_id, game_id) VALUES
(3, 1),
(4, 2), 
(3, 2),
(1, 2),
(1, 4),
(3, 3),
(4, 4), 
(3, 5),
(1, 3),
(1, 3),
(4, 5); 



