DROP TABLE IF EXISTS favorite;
DROP TABLE IF EXISTS picture;
DROP TABLE IF EXISTS location;
DROP TABLE IF EXISTS truck;
DROP TABLE IF EXISTS profile;
CREATE TABLE IF NOT EXISTS profile(
                                      profile_id UUID NOT NULL PRIMARY KEY,
                                      profile_activation_token CHAR(32),
                                      profile_email VARCHAR(128) NOT NULL UNIQUE,
                                      profile_hash CHAR(97) NOT NULL,
                                      profile_name VARCHAR(64) NOT NULL UNIQUE,
                                      profile_is_truck_owner BOOLEAN NOT NULL
);


create table if not exists truck(
                                    truck_id UUID NOT NULL PRIMARY KEY,
                                    truck_profile_id UUID NOT NULL,
                                    truck_description VARCHAR(1025),
                                    truck_food_category VARCHAR(64) NOT NULL,
                                    truck_name VARCHAR(64) NOT NULL,
                                    FOREIGN KEY (truck_profile_id) references profile (profile_id)
);

create table if not exists location(
                                       location_id UUID NOT NULL PRIMARY KEY,
                                       location_truck_id UUID NOT NULL,
                                       location_is_active BOOLEAN NOT NULL,
                                       location_address VARCHAR (64),
                                       location_Lat DECIMAL (7,5),
                                       location_Lng DECIMAL (8,5),
                                       location_sunrise TIMESTAMPTZ,
                                       location_sunset TIMESTAMPTZ,
                                       FOREIGN KEY (location_truck_id) references truck(truck_id)
);

create table if not exists picture(
                                      picture_id UUID NOT NULL PRIMARY KEY,
                                      picture_truck_id UUID NOT NULL,
                                      picture_url VARCHAR (125),
                                      picture_type VARCHAR (32),
                                      FOREIGN KEY (picture_truck_id) references truck(truck_id)
);

create table if not exists favorite(
                                       favorite_truck_id UUID NOT NULL,
                                       favorite_profile_id UUID NOT NULL,
                                       FOREIGN KEY (favorite_truck_id) references truck(truck_id),
                                       FOREIGN KEY (favorite_profile_id) references profile(profile_id)
);