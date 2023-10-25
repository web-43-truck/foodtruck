import {sql} from "../../utils/database.utils"
import {z} from "zod"
import {LocationSchema} from "./location.validator"


export type Location = z.infer<typeof LocationSchema>




export async function insertLocation (location: Location): Promise<any> {
    const {locationId, locationTruckId, locationIsActive, locationAddress, locationLat, locationLng, locationSunrise, locationSunset} = location

    await sql `INSERT INTO location(location_id, location_truck_id, location_is_active, location_address, location_Lat, location_Lng, location_sunrise, location_sunset) VALUES (gen_random_uuid())`
}
export async function updateLocation (location: Location):Promise<string> {

    const {locationId, locationTruckId, locationIsActive, locationAddress, locationLat, locationLng, locationSunrise, locationSunset} = location

    await sql`UPDATE location SET location_id, location_truck_id, location_is_active, location_address, location_Lat, location_Lng, location_sunrise, location_sunset
                              FROM location
                              WHERE location_id = {$locationId}`

    return 'Location updated successfully'


     async function updateLocationByLocationId (location: Location):Promise<string> {

        const {locationId, locationTruckId, locationIsActive, locationAddress, locationLat, locationLng, locationSunrise, locationSunset} = location

        await sql`UPDATE location
                  SET location_id,
                      location_truck_id,
                      location_is_active,
                      location_address,
                      location_Lat,
                      location_Lng,
                      location_sunrise,
                      location_sunset
                  FROM location
                  WHERE location_id = {$locationId}`

        return 'Location updated successfully'
    }}


















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
