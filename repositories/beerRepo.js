import client from "../db/database.js";

class BeerRepo {
    create(beer) {
        return client.queryObject(
            "INSERT INTO beers (name, brand, is_premium, registration_date) VALUES ($1, $2, $3, $4)",
            beer.name,
            beer.brand,
            beer.is_premium,
            beer.registration_date
        );
    }

    selectAll() {
        return client.queryArray("SELECT * FROM beers ORDER BY id");
    }
}