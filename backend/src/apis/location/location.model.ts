import {sql} from "../../utils/database.utils"
import {z} from "zod"
import {LocationSchema} from "./location.validator"



export type Location = z.infer<typeof LocationSchema>



export async function insertLocation(location: Location): Promise<string> {
    const { locationTruckId, locationIsActive, locationAddress, locationLat, locationLng, locationSunrise, locationSunset} = location

    await sql `INSERT INTO location(location_id, location_truck_id, location_is_active, location_address, location_Lat, location_Lng, location_sunrise, location_sunset) VALUES (gen_random_uuid(), ${locationTruckId}, ${locationIsActive}, ${locationAddress}, ${locationLat}, ${locationLng}, ${locationSunrise}, ${locationSunset})`

    return 'Location updated successfully'
}



export async function updateLocationByLocationId (location: Location):Promise<string> {

    const {locationId, locationIsActive, locationAddress, locationLat, locationLng, locationSunrise, locationSunset} = location

    await sql`UPDATE location
              SET
                  location_is_active = ${locationIsActive},
                  location_address = ${locationAddress},
                  location_Lat     = ${locationLat},
                  location_Lng     = ${locationLng},
                  location_sunrise = ${locationSunrise},
                  location_sunset  = ${locationSunset}
              WHERE location_id = ${locationId}`

    return 'Location updated successfully'
}

export async function updateLocationByTruckId (location: Location):Promise<string> {

    const {locationTruckId, locationIsActive, locationAddress, locationLat, locationLng, locationSunrise, locationSunset} = location

    await sql`UPDATE location
              SET
                  location_is_active = ${locationIsActive},
                  location_address = ${locationAddress},
                  location_Lat     = ${locationLat},
                  location_Lng     = ${locationLng},
                  location_sunrise = ${locationSunrise},
                  location_sunset  = ${locationSunset}
              WHERE location_truck_id = ${locationTruckId}`

    return 'Location updated successfully'
}

export async function selectLocationByLocationId(locationId: string | null): Promise<Location|null> {

    const rowList = await sql `SELECT location_id, location_truck_id, location_is_active, location_address, location_Lat, location_Lng, location_sunrise, location_sunset FROM location WHERE location_id = ${locationId}`

    const result = LocationSchema.array().max(1).parse(rowList)

    return result?.length === 1 ? result[0]:null
}

export async function selectLocationByLocationTruckId(locationTruckId: string): Promise<Location|null> {

    const rowList = await sql `SELECT location_id, location_truck_id, location_is_active, location_address, location_Lat, location_Lng, location_sunrise, location_sunset FROM location WHERE location_truck_id = ${locationTruckId}`

    const result = LocationSchema.array().max(1).parse(rowList)

    return result?.length === 1 ? result[0]:null
}



export async function selectLocationByLocationIsActive(locationIsActive: null): Promise<Location|null> {

    const rowList = await sql `SELECT location_id, location_truck_id, location_is_active, location_address, location_Lat, location_Lng, location_sunrise, location_sunset FROM location WHERE location_is_active = ${locationIsActive}`

    const result = LocationSchema.array().max(1).parse(rowList)

    return result?.length === 1 ? result[0]:null
}


export async function selectLocationByLocationAddress(locationAddress: string): Promise<Location | null> {

    const rowList = await sql `SELECT location_id, location_truck_id, location_is_active, location_address, location_Lat, location_Lng, location_sunrise, location_sunset FROM location WHERE location_address = ${locationAddress}`


    const result = LocationSchema.array().max(1).parse(rowList)

    return result?.length === 1 ? result[0]:null
}

export async function selectLocationByLocationLat(locationLat: string): Promise<Location|null> {

    const rowList = await sql `SELECT location_id, location_truck_id, location_is_active, location_address, location_Lat, location_Lng, location_sunrise, location_sunset FROM location WHERE location_lat = ${locationLat}`


    const result = LocationSchema.array().max(1).parse(rowList)

    return result?.length === 1 ? result[0]:null
}

export async function selectLocationByLocationLng(locationLng: string): Promise<Location|null> {

    const rowList = await sql `SELECT location_id, location_truck_id, location_is_active, location_address, location_Lat, location_Lng, location_sunrise, location_sunset FROM location WHERE location_lng = ${locationLng}`


    const result = LocationSchema.array().max(1).parse(rowList)

    return result?.length === 1 ? result[0]:null
}

export async function selectLocationByLocationSunrise(locationSunrise: string): Promise<Location|null> {

    const rowList = await sql `SELECT location_id, location_truck_id, location_is_active, location_address, location_Lat, location_Lng, location_sunrise, location_sunset FROM location WHERE location_sunrise = ${locationSunrise}`


    const result = LocationSchema.array().max(1).parse(rowList)

    return result?.length === 1 ? result[0]:null
}


export async function selectLocationByLocationSunset(locationSunset: string): Promise<Location|null> {

    const rowList = await sql `SELECT location_id, location_truck_id, location_is_active, location_address, location_Lat, location_Lng, location_sunrise, location_sunset FROM location WHERE location_sunset = ${locationSunset}`

    const result = LocationSchema.array().max(1).parse(rowList)

    return result?.length === 1 ? result[0]:null
}


export async function deleteLocationId(locationId: string): Promise<string> {
    await sql `DELETE FROM location WHERE location_id = ${locationId}`


    return 'Location deleted'
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