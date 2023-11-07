import {z} from 'zod'
import {TruckSchema} from './truck.validator'
import {sql} from '../../utils/database.utils'
import axios from "axios";

export type Truck = z.infer<typeof TruckSchema>

export async function insertTruck (truck: Truck): Promise<string> {
    const {truckProfileId, truckDescription, truckFoodCategory, truckName} = truck

    await sql`INSERT INTO truck(truck_id, truck_profile_id, truck_description, truck_food_category, truck_name, truck_is_active, truck_address, truck_lat, truck_lng, truck_sunrise, truck_sunset) VALUES (gen_random_uuid(), ${truckProfileId}, ${truckDescription}, ${truckFoodCategory}, ${truckName})`

    return 'Truck added successfully'
}

export async function updateTruck (truck: Truck): Promise<string> {

    const {truckId, truckDescription, truckFoodCategory, truckName } = truck

    await sql`UPDATE truck SET truck_description = ${truckDescription}, truck_food_category = ${truckFoodCategory}, truck_name = ${truckName} WHERE truck_id = ${truckId}`

    return 'profile updated successfully'
}

export async function selectTruckByTruckId(truckId: string | null): Promise<Truck | null> {
    const rowList = await sql`SELECT truck_id, truck_profile_id, truck_description, truck_food_category, truck_name, truck_is_active, truck_address, truck_lat, truck_lng, truck_sunrise, truck_sunset FROM truck WHERE truck_id = ${truckId}`

    const result = TruckSchema.array().max(1).parse(rowList)

    return result?.length === 1 ? result[0] : null
}

export async function selectTrucksByProfileId(truckProfileId: string): Promise<Truck | null> {
    const rowList = await sql`SELECT truck_id, truck_profile_id, truck_description, truck_food_category, truck_name, truck_is_active, truck_address, truck_lat, truck_lng, truck_sunrise, truck_sunset FROM truck WHERE truck_profile_id = ${truckProfileId}`

    const result = TruckSchema.array().max(1).parse(rowList)

    return result?.length === 1 ? result[0] : null
}



export async function selectTruckByTruckName (truckName: string) : Promise<Truck | null> {
    const rowList = await sql`SELECT truck_id, truck_profile_id, truck_description, truck_food_category, truck_name, truck_is_active, truck_address, truck_lat, truck_lng, truck_sunrise, truck_sunset FROM truck
                     WHERE truck_name = ${truckName}`

    const result = TruckSchema.array().max(1).parse(rowList)

    return result?.length === 1 ? result[0] : null
}

export async function selectTrucksByTruckName(truckName: string): Promise<Truck | null> {
    const truckNameWithWildcards = `%${truckName}%`

    const rowList = await sql`SELECT truck_id, truck_profile_id, truck_description, truck_food_category, truck_name
                              FROM truck
                              WHERE truck_name LIKE ${truckNameWithWildcards}`

    const result = TruckSchema.array().max(1).parse(rowList)

    return result?.length === 1 ? result[0] : null
}

export async function selectAllTrucks(): Promise<Truck[]> {

    const rowList = <Truck[]>await sql`SELECT truck_id, truck_profile_id, truck_description, truck_food_category, truck_name FROM truck ORDER BY truck_name DESC`

    return TruckSchema.array().parse(rowList)
}





export async function deleteTruckByTruckId(truckId: string): Promise<string> {
    await sql`DELETE
              FROM truck
              WHERE truck_id = ${truckId}`

    return 'Truck successfully deleted'
}

