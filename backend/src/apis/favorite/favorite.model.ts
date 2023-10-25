import {z} from 'zod'
import {sql} from "../../utils/database.utils";
import {FavoriteSchema} from "./favorite.validator";


export type Favorite = z.infer<typeof FavoriteSchema>


export async function insertFavorite(favorite: Favorite): Promise<string> {
    const {favoriteProfileId, favoriteTruckId} = favorite

    await sql`INSERT INTO favorite (favorite_profile_id, favorite_truck_id)
              VALUES (${favoriteProfileId}, ${favoriteTruckId})`

    return 'You made this truck a favorite'
}


export async function selectFavoriteByFavoriteTruckId(favoriteTruckId: string): Promise<Favorite[]> {

    const rowList = <Favorite[]>await sql`SELECT favorite_profile_id, favorite_truck_id FROM favorite WHERE favorite_truck_id = ${favoriteTruckId}`

    // parse the result into an array of s and return it
    return FavoriteSchema.array().parse(rowList)
}

export async function selectFavoriteByFavoriteProfileId(favoriteProfileId: string): Promise<Favorite[]> {

    const rowList = <Favorite[]>await sql`SELECT favorite_profile_id, favorite_truck_id FROM favorite WHERE favorite_profile_id = ${favoriteProfileId}`

    return FavoriteSchema.array().parse(rowList)
}

export async function deleteFavorite(favorite : Favorite): Promise<string> {

    const {favoriteProfileId, favoriteTruckId} = favorite
       await sql`DELETE FROM favorite
 WHERE favorite_profile_id = ${favoriteProfileId}
                AND favorite_truck_id = ${favoriteTruckId}`

    return 'Favorite removed'
}





