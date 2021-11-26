import { getBeers } from "../services/beerService";

export default async ({ response }) => {
    response.body = await getBeers();
};