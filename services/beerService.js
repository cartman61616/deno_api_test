import beerRepo from "../repositories/beerRepo.js";

export const getBeers = async () => {
    const beers = await beerRepo.selectAll();

    var result = new Array();

    beers.rows.map((beer) => {
        var obj = new Object();

        beers.rowDescription.columns.map((el, i) => {
            obj[el.name] = beer[i];
        });
        result.push(obj);
    });

    return result;
};