import {sql} from "../../utils/database.utils"
import {z} from "zod"
import {LocationSchema} from "./location.validator"



export type Location = z.infer<typeof LocationSchema>





export async function insertLocation (location: Location): Promise<string> {
    const { locationTruckId, locationIsActive, locationAddress, locationLat, locationLng, locationSunrise, locationSunset} = location

    await sql `INSERT INTO location(location_truck_id, location_is_active, location_address, location_Lat, location_Lng, location_sunrise, location_sunset) VALUES (gen_random_uuid(), ${locationTruckId}, ${locationIsActive}, ${locationAddress}, ${locationLat}, ${locationLng}, ${locationSunrise}, ${locationSunset})`

    return 'Location updated successfully'
}




export async function updateLocation (location: Location):Promise<string> {

    const {locationId, locationTruckId, locationIsActive, locationAddress, locationLat, locationLng, locationSunrise, locationSunset} = location

    await sql`UPDATE location
              SET location_truck_id = ${locationTruckId}, location_address = ${locationAddress},
                  location_is_active = ${locationIsActive}
                  location_Lat     = ${locationLat},
                  location_Lng     = ${locationLng},
                  location_sunrise = ${locationSunrise},
                  location_sunset  = ${locationSunset}
              WHERE location_truck_id = ${locationTruckId}`


    return 'Location updated successfully'
}

export async function selectLocationByLocationTruckId(truckId: string): Promise<Location|null> {

    const rowList = await sql `SELECT location_id, location_truck_id, location_is_active, location_address, location_Lat,
                                   location_Lng, location_sunrise, location_sunset FROM location WHERE truck_id = ${truckId}`


    const result = LocationSchema.array().max(1).parse(rowList)

    return result?.length === 1 ? result[0]:null
}

export async function deleteLocationId(locationId: string): Promise<string> {
    await sql `DELETE FROM location WHERE location_id = ${locationId}`


    return 'Location deleted'
}

export async function selectLocationByLocationId(locationId: string): Promise<Location|null> {

    const rowList = await sql `SELECT location_id, location_truck_id, location_is_active, location_address, location_Lat,
                                   location_Lng, location_sunrise, location_sunset FROM location WHERE location_id = ${locationId}`


    const result = LocationSchema.array().max(1).parse(rowList)

    return result?.length === 1 ? result[0]:null
}























// new Promise((resolve, reject) => {
//     if(navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(function (position) {
//
//             console.log(position.coords.latitude, position.coords.longitude)
//         })
//     }})
//
//
// interface Coordinates {
//     longitude: number;
//     latitude: number;
// }
//
// type Properties = keyof Coordinates;
//Properties = "longitude" | "latitude"
