import {LocationSchema} from "./location.validator"
import {Request, Response} from "express";
import {zodErrorResponse} from "../../utils/response.utils";
import {Status} from "../../utils/interfaces/Status";

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
import axios from "axios/index";



export async function putLocationController(request: Request, response: Response): Promise<Response<Status>> {
    try {
        const bodyValidationResult = LocationSchema.safeParse(request.body)

        if(!bodyValidationResult.success) {
            return zodErrorResponse(response, bodyValidationResult.error)
        }

        const paramsValidationResult = LocationSchema.pick({locationId: true}).safeParse(request.params)

        if(!paramsValidationResult.success) {
            return zodErrorResponse(response, paramsValidationResult.error)
        }

        const {locationTruckId} = paramsValidationResult.data

        const location: Location | null = await selectLocationByLocationId(request, response)

        if(location === null) {
            return response.json({status: 404, data: null, message: 'location does not exist'})
        }

        const location = request.session ? request.session.location : undefined
        const locationTruckId = location?.locationId

        if (!(location.locationId === locationId && locationId !== null)) {
            return response.json({status: 404, data: null, message: 'you are not allowed to preform this task'})
        }

        const { locationIsActive:boolean, locationLat: locationLng} = bodyValidationResult.data


        locationTruckId.locationLat = selectLocationByLocationLat
        locationTruckId.locationLng = selectLocationByLocationLng
        locationTruckId.locationSunrise = selectLocationByLocationSunrise
        locationTruckId.locationSunset = selectLocationByLocationSunset

        const message = await updateLocationTruckId(locationTruckId)

        return response.json({status: 200, data: null, message})

    } catch (error: unknown) {
        console.error(error)
        return response.json({status: 500, message: 'internal server error', data: null})
    }


}


export async function postLocationController (request: Request, response: Response): Promise<Response> {
    try {

        const validationResult = LocationSchema.safeParse(request.body)

        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        const {
            locationId,
            locationIsActive,
            locationLat,
            locationLng,
            locationSunset,
            locationSunrise
        } = validationResult.data


        const truck = request.session?.truck
        const locationTruckId = truck?.truckId

        if (locationTruckId === undefined || locationTruckId === null) {
            return response.json({status: 400, data: null, message: 'You are not allowed to preform this task'})
        }

        async function addressConverter(address: string | null) {
            let formattedAddress = encodeURIComponent(address.split('').join('+'))
            console.log(formattedAddress)
            const GEOCODING_API_KEY = process.env.GEOCODING_API_KEY as string

            const result = await axios({
                method: 'get,' +
                    `url: \`https://api.geocod.io/v1.7/geocode?api_key=${GEOCODING_API_KEY}&q=${formattedAddress}`,
            })
                .then(function (response) {
                    const latitude = response.data.results[0].location.lat
                    const longitude = response.data.results[0].location.lng
                    return {lat: latitude, lng: longitude}
                })
            return (result)
        }

        const truckCoordinates = await addressConverter(truckAddress)

        const location: location = {
            locationTruckId: locationTruckId,
            locationLat,
            locationLng,
            locationSunrise,
            locationSunset
        }



        const message: string = await insertLocation(locationId)

        return response.json({status: 200, data: null, message})

    } catch (error) {
        return response.json({
            status: 500,
            message: 'internal server error',
            data: null
        })
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

    try {
        const validationResult = LocationSchema.safeParse(request.params)

        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }
        const {locationTruckId} = validationResult.data


        const data = await selectLocationByTruckId(locationTruckId)

        const status: Status= {status:200, message: null, data}

        const data = await selectLocationByLocationTruckId(request, response)


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


export async function putLocationController(request: Request, response: Response): Promise<Response<Status>> {
    try {
        const bodyValidationResult = LocationSchema.safeParse(request.body)

        if (!bodyValidationResult.success) {

            return zodErrorResponse(response, bodyValidationResult.error)
        }

        const paramsValidationResult = LocationSchema.pick({locationTruckId: true}).safeParse(request.params)

        return response.json({status: 200, data: null, onmessage})

        } catch (error: unknown) {
        console.error(error)
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


