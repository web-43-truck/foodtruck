import {LocationSchema} from "./location.validator"
import {Request, Response} from "express";
import {zodErrorResponse} from "../../utils/response.utils";
import {Status} from "../../utils/interfaces/Status";
import {Location, selectLocationByLocationSunset} from "./location.model"
import axios from "axios";


import {string, z} from "zod";
import {
    insertLocation,
    updateLocationByLocationId,
    updateLocationByTruckId,
    selectLocationByLocationId,
    selectLocationByLocationTruckId,
    selectLocationByLocationLat,
    selectLocationByLocationLng,
    selectLocationByLocationAddress, selectLocationByLocationSunrise
} from "./location.model";




export async function putLocationController(request: Request, response: Response): Promise<Response<Status>> {
    try {
        const bodyValidationResult = LocationSchema.safeParse(request.body);

        if (!bodyValidationResult.success) {
            return zodErrorResponse(response, bodyValidationResult.error);
        }

        const paramsValidationResult = LocationSchema.pick({ locationId: true }).safeParse(request.params);

        if (!paramsValidationResult.success) {
            return zodErrorResponse(response, paramsValidationResult.error);
        }

        const locationTruckId = paramsValidationResult.data.locationId; // Correct the variable name

        // Assuming you have a function to fetch the location by ID
        const [location] = await Promise.all([selectLocationByLocationId(locationTruckId)]);

        if (!location) {
            return response.json({ status: 404, data: null, message: 'Location does not exist' });
        }

        if (location.locationId !== locationTruckId) {
            return response.json({ status: 404, data: null, message: 'You are not allowed to perform this task' });
        }

        const { locationLat, locationLng, locationSunrise, locationSunset } = bodyValidationResult.data;

        // Assuming you have a function to update the location
        const message = await updateLocationByLocationId(locationTruckId, {
            locationLat,
            locationLng,
            locationSunset,
            locationSunrise
        });

        return response.json({ status: 200, data: null, message });
    } catch (error) {
        console.error(error);
        return response.json({ status: 500, message: 'Internal server error', data: null });
    }
}


export async function postLocationController(request: Request, response: Response): Promise<Response> {
    try {
        const validationResult = LocationSchema.safeParse(request.body);

        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error);
        }

        const {
            locationId,
            locationIsActive,
            locationLat,
            locationLng,
            locationSunrise,
            locationSunset,
            locationAddress // Assuming you have locationAddress in your schema
        } = validationResult.data;

        let truck: any;
        truck = request.session ? request.session.truck : undefined;
        const locationTruckId = truck?.truckId;

        if (locationTruckId === undefined || locationTruckId === null) {
            return response.json({ status: 400, data: null, message: 'You are not allowed to perform this task' });
        }

        async function addressConverter(address: string | null) {
            if (address) {
                const formattedAddress = encodeURIComponent(address.split(' ').join('+'));
                console.log(formattedAddress);
                const GEOCODING_API_KEY = process.env.GEOCODING_API_KEY as string;

                const response = await axios.get(`https://api.geocod.io/v1.7/geocode?api_key=${GEOCODING_API_KEY}&q=${formattedAddress}`);

                const latitude = response.data.results[0].location.lat;
                const longitude = response.data.results[0].location.lng;

                return { lat: latitude, lng: longitude };
            }

            return null;
        }

        const truckCoordinates = await addressConverter(locationAddress); // Pass the locationAddress variable

        const location: { locationLat: number; locationSunset: number | null; locationTruckId: any; locationSunrise: number | null; locationId: string | null; locationLng: number } = {
            locationId, // Use the provided locationId
            locationTruckId,
            locationLat,
            locationLng,
            locationSunrise,
            locationSunset
        };

        const message: string = await insertLocation(location);

        return response.json({ status: 200, data: null, message });
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
            const validationResult = LocationSchema.safeParse(request.params)

            if (!validationResult.success) {
                return zodErrorResponse(response, validationResult.error)
            }

            const data = await selectLocationByLocationId(request, response)

            return response.json({status: 200, message: null, data: null})
        } catch (error: any) {
            console.error(error)
            return response.json({status: 500, data: null, message: 'cannot locate'})

        }

    }


export async function getLocationByLocationTruckIdController(request: Request, response: Response):Promise<Response<Status>> {

    async function selectLocationByTruckId(locationTruckId: string) {

    }

    try {
        const validationResult = LocationSchema.safeParse(request.params)

        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }
        const {locationTruckId} = validationResult.data


        const data = await selectLocationByTruckId(locationTruckId)

        const status: Status= {status:200, message: null, data}




        return response.json({status: 200, message: null, data: null})
    } catch (error: any) {
        console.error(error)
        return response.json({status: 500, data: null, message: 'cannot locate'})

    }
}



export async function getLocationByLocationAddressController(request: Request, response: Response): Promise<Response<Status>> {
    try {
        const validationResult = LocationSchema.safeParse(request.params)

        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        const data = await selectLocationByLocationAddress(request, response)

        return response.json({status: 200, message: null, data: null})

    } catch (error: any) {
        console.error(error)
        Response.json({status: 500, data: null, message: 'cannot locate'})
        return response.json({status: 500, message: 'internal server', data: null})

    }
}


export async function getLocationByLocationSunsetController(request: Request, response: Response): Promise<Response<Status>> {
        try {
            const validationResult = LocationSchema.safeParse(request.params)

            if (!validationResult.success) {
                return zodErrorResponse(response, validationResult.error)
            }

            const data = await selectLocationByLocationSunset(request)

            return response.json({status: 200, message: null, data: null})

        } catch (error: any) {
            console.error(error)
            Response.json({status: 500, data: null, message: 'cannot locate'})
            return response.json({status: 500, message: 'internal server', data: null})
        }
    }


export async function getLocationByLocationSunrise(request: Request, response: Response): Promise<Response<Status>> {
    try {
        const validationResult = LocationSchema.safeParse(request.params)

        if (validationResult.success) {
            const data = await getLocationByLocationSunrise(request, response)
            return response.json({status: 200, message: null, data: null})
        } else {
            return zodErrorResponse(response, validationResult.error)
        }
    } catch (error: any) {
        console.error(error)
        Response.json({status: 500, data: null, message: 'cannot locate'})
        return response.json({status: 500, message: 'internal server', data: null})

    }
}





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
//     }
// }


