CREATE TABLE infoNone(
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  description VARCHAR(255),
  grupo VARCHAR(255),
  fecha VARCHAR(200),
  infoType VARCHAR(100)
);

CREATE TABLE infoImage(
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  description VARCHAR(1000),               
  images JSON,
  grupo VARCHAR(255),
  fecha VARCHAR(100),
  infoType VARCHAR(100)
);

CREATE TABLE infoVideo(
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  description VARCHAR(1000),
  video JSON,
  grupo VARCHAR(255),
  fecha VARCHAR(100),
  infoType VARCHAR(100)
);

CREATE TABLE infoLink(
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  description VARCHAR(1000),
  link VARCHAR(10000),
  grupo VARCHAR(255),
  fecha VARCHAR(100),
  infoType VARCHAR(100)
);

CREATE TABLE infoPDF(
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  description VARCHAR(1000),
  pdf JSON,
  grupo VARCHAR(255),
  fecha VARCHAR(100),
  infoType VARCHAR(100)
);

CREATE TABLE infoAudio(
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  description VARCHAR(1000),
  audio JSON,
  grupo VARCHAR(255),
  fecha VARCHAR(100),
  infoType VARCHAR(100)
);