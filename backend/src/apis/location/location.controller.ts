import {LocationSchema} from "./location.validator"
import {Request, Response} from "express";
import {zodErrorResponse} from "../../utils/response.utils";
import {Status} from "../../utils/interfaces/Status";
import {deleteByLocationId, Location} from "./location.model"

import {
    insertLocation,
    updateLocationByLocationId,
    updateLocationByTruckId,
    selectLocationByLocationId,
    selectLocationByLocationTruckId,
    selectLocationByLocationLat,
    selectLocationByLocationLng,
    selectLocationByLocationAddress,
    selectLocationByLocationSunrise
} from "./location.model";
import {z} from "zod";
import {PublicProfile} from "../profile/profile.model";
import { selectTruckByTruckId, Truck} from "../truck/truck.model";
import axios from "axios";



export async function putLocationController(request: Request, response: Response): Promise<Response<Status>> {
    try {
        const bodyValidationResult = LocationSchema.safeParse(request.body);

        if (!bodyValidationResult.success) {
            return zodErrorResponse(response, bodyValidationResult.error);
        }

        const paramsValidationResult = z.string().uuid("Please provide a valid UUID").safeParse(request.params.locationId)

        if (!paramsValidationResult.success) {
            return zodErrorResponse(response, paramsValidationResult.error);
        }

        const {locationTruckId, locationLat, locationLng, locationSunrise, locationSunset, locationIsActive } = bodyValidationResult.data;

        const profile: PublicProfile  = request.session.profile as PublicProfile
        const profileId: string = profile.profileId as string

        const truck : Truck | null = await selectTruckByTruckId(locationTruckId)

        const locationId = paramsValidationResult.data;
        const location: Location | null = await selectLocationByLocationId(locationId)

        if (truck?.truckProfileId !== profileId) {
            return response.json({status: 401, message: 'Not authorized to post a location.', data: null})
        }


        if (location === null) {
            return response.json({ status: 404, data: null, message: 'Location does not exist' });
        }

        location.locationLat = locationLat
        location.locationLng = locationLng
        location.locationSunrise = locationSunrise
        location.locationSunset = locationSunset
        location.locationIsActive = locationIsActive


        const message = await updateLocationByLocationId(location)

        return response.json({ status: 200, data: null, message });
    } catch (error) {
        console.error(error);
        return response.json({ status: 500, message: 'Internal server error', data: null });
    }
}


export async function postLocationController(request: Request, response: Response): Promise<Response | undefined> {
    try {
        const validationResult = LocationSchema.safeParse(request.body);

        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error);
        }


        const {
            locationTruckId,
            locationIsActive,
            locationLat,
            locationLng,
            locationSunrise,
            locationSunset,
            locationAddress
        } = validationResult.data;

        const profile: PublicProfile  = request.session.profile as PublicProfile
        const profileId: string = profile.profileId as string

        const truck : Truck | null = await selectTruckByTruckId(locationTruckId)
        if (truck?.truckProfileId !== profileId) {
            return response.json({status: 401, message: 'Not authorized to post a location.', data: null})
        }

        async function addressConverter(address: string ) {

            const formattedAddress = encodeURIComponent(address.split(' ').join('+'));
            console.log(formattedAddress);
            const GEOCODING_API_KEY = process.env.GEOCODING_API_KEY as string;

            const result = await axios.get(`https://api.geocod.io/v1.7/geocode?api_key=${GEOCODING_API_KEY}&q=${formattedAddress}`).then(function(response){
                const latitude = response.data.results[0].location.lat;
                const longitude = response.data.results[0].location.lng;
                return { lat: latitude, lng: longitude };
            })
            console.log(result)
            return (result);
        }
        let truckCoordinates

        if (locationAddress && locationLat === null && locationLng === null) {
            truckCoordinates = await addressConverter(locationAddress)
        }


        const location : Location = {
            locationId: null,
            locationTruckId,
            locationIsActive,
            locationLat: truckCoordinates?.lat ?? locationLat,
            locationLng: truckCoordinates?.lng ?? locationLng,
            locationSunrise,
            locationSunset,
            locationAddress

        }

        const result = await insertLocation(location)

        const status: Status = {status: 200, message: result, data: null}
        return response.json(status)

    } catch (error) {
        console.error(error);
        return response.json({
            status: 500,
            message: 'Internal server error',
            data: null
        });
    }
}


export async function getLocationByLocationIdController(request: Request, response: Response):Promise<Response<Status>> {
        try {
            const validationResult = z.object({
                locationId: z
                    .string()
                    .uuid('please provide a valid locationID')
            }).safeParse(request.params)

            if (!validationResult.success) {
                return zodErrorResponse(response, validationResult.error)
            }

            const {locationId} = validationResult.data

            const data = await selectLocationByLocationId(locationId)

            const status: Status = { status: 200, message: null, data }
            return response.json(status)
        } catch (error: any) {
            console.error(error)
            return response.json({status: 500, data: null, message: 'cannot locate'})

        }

    }


export async function getLocationsByLocationTruckIdController(request: Request, response: Response):Promise<Response<Status>> {
    try {
        const validationResult = z.object({
            locationTruckId: z
                .string()
                .uuid('please provide a valid location truck id')
        }).safeParse(request.params)

        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)

        }
        const {locationTruckId} = validationResult.data


        const data: Location[] | null = await selectLocationByLocationTruckId(locationTruckId)

        const status: Status = { status: 200, message: null, data }
        return response.json(status)


    } catch (error: any) {
        console.error(error)
        return response.json({status: 500, data: null, message: 'cannot locate'})

    }
}





export async function getLocationByLocationSunrise(request: Request, response: Response): Promise<Response<Status>> {
    try {
        const validationResult = z.object({
            locationSunrise: z.string().uuid('please provide a valid location sunrise')
        }). safeParse(request.params)

        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        const { locationSunrise } = validationResult.data

        const data = await selectLocationByLocationSunrise(locationSunrise)

        const status: Status = { status: 200, message: null, data }
        return response.json(status)

    } catch (error: any) {
        console.error(error)
        Response.json({status: 500, data: null, message: 'cannot locate'})
        return response.json({status: 500, message: 'internal server', data: null})

    }
}


export async function deleteLocationByLocationIdController(request: Request, response: Response): Promise<Response> {
    try {
        const validationResult = z.string().uuid({ message: 'please provide a valid location Id' }).safeParse(request.params.locationId);

        if (!validationResult.success) {
            return response.status(400).json({ status: 400, message: validationResult.error.errors.join(', '), data: null });
        }

        const profile: PublicProfile = request.session.profile as PublicProfile;
        const profileId: string = profile.profileId as string;
        const locationId: string = request.params.locationId;
        const truckId = validationResult.data
        const truck: Truck | null = await selectTruckByTruckId(truckId);
        if (truck?.truckProfileId !== profileId) {
            return response.status(401).json({ status: 401, message: 'Not authorized to delete the location.', data: null });
        }

        const result = await deleteByLocationId(locationId)

        return response.status(200).json({ status: 200, message: result, data: null });

    } catch (error) {
        console.error(error);
        return response.status(500).json({
            status: 500,
            message: 'Internal Server Error',
            data: null,
        });
    }
}

// async function addressConverter(address: string | null) {
//     if (address) {
//         const formattedAddress = encodeURIComponent(address.split(' ').join('+'));
//         console.log(formattedAddress);
//         const GEOCODING_API_KEY = process.env.GEOCODING_API_KEY as string;
//
//         const response = await axios.get(`https://api.geocod.io/v1.7/geocode?api_key=${GEOCODING_API_KEY}&q=${formattedAddress}`);
//
//         const latitude = response.data.results[0].location.lat;
//         const longitude = response.data.results[0].location.lng;
//
//         return { lat: latitude, lng: longitude };
//     }
//
//     return null;
// }
//
// const truckCoordinates = await addressConverter(locationAddress)


// export async function getLocationByActiveLocation(request: Request, response: Response){
//
// }


// export async function getLocationByLocationAddress(request: Request, response: Response): Promise<Response<Status>> {
//     try {
//         const validationResult = LocationSchema.safeParse(request.params)
//
//         if (!validationResult.success) {
//             return zodErrorResponse(response, validationResult.error)
//         }
//
//         const data = await selectLocationByLocationAddress(request)
//
//         return response.json({status: 200, message: null, data: null})
//
//     } catch (error: any) {
//         console.error(error)
//         Response.json({status: 500, data: null, message: 'cannot locate'})
//         return response.json({status: 500, message: 'internal server', data: null})
//
//     }
// }


// export async function getLocationByLocationSunsetController(request: Request, response: Response): Promise<Response<Status>> {
//         try {
//             const validationResult = LocationSchema.safeParse(request.params)
//
//             if (!validationResult.success) {
//                 return zodErrorResponse(response, validationResult.error)
//             }
//
//             const data = await selectLocationByLocationSunset(request)
//










// async function getLocationByLocationLat() {
//     new Promise((resolve, reject) => {
//         if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition(function (position) {
//
//                 console.log(position.coords.latitude)
//             })
//         }
//     })
//
// }
//
//
// function getLocationByLocationLng() {
//     new Promise((resolve, reject) => {
//         if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition(function (position) {
//
//
//                 console.log(position.coords.longitude)
//             })
//         }
//     })
// }


