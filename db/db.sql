CREATE TABLE IF NOT EXISTS beers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) not null,
    brand varchar(50) not null,
    is_premium boolean,
    registration_date timestamp
)