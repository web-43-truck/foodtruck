DROP TABLE IF EXISTS profile;
CREATE TABLE IF NOT EXISTS profile(
    profile_id UUID NOT NULL PRIMARY KEY,
    profile_activation_token CHAR(32) NOT NULL,
    profile_email VARCHAR(125) NOT NULL UNIQUE,
    profile_hash CHAR(97) NOT NULL,
    profile_name VARCHAR(64) NOT NULL,
    profile_is_truck_owner BOOLEAN NOT NULL
)

