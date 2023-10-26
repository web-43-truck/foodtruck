import {LocationSchema} from "./location.validator"
import {Request, Response} from "express";
import {zodErrorResponse} from "../../utils/response.utils";
import {Status} from "../../utils/interfaces/Status";
import {updateLocation, insertLocation, selectLocationByTruckId, selectLocationByLocationId, deleteLocationId} from "./location.model"
import {string, z} from "zod";




export async function getLocationByTruckId(request: Request, response: Response):Promise<Response<Status>> {
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

    async function getLocationByLocationAddress(request: Request, response: Response): Promise<Response<Status>> {
        try {
            const validationResult = LocationSchema.safeParse(request.params)

            if (!validationResult.success) {
                return zodErrorResponse(response, validationResult.error)
            }

            const data = await getLocationByLocationAddress(request, response)

            return response.json({status: 200, message: null, data: null})
        } catch (error: any) {
            console.error(error)
            Response.json({status: 500, data: null, message: 'cannot locate'})
            return response.json({status: 500, message: 'internal server', data: null})
        }
    }

        async function getLocationByLocationSunset(request: Request, response: Response): Promise<Response<Status>> {
            try {
                const validationResult = LocationSchema.safeParse(request.params)

                if (!validationResult.success) {
                    return zodErrorResponse(response, validationResult.error)
                }

                const data = await getLocationByLocationSunset(request, response)

                return response.json({status: 200, message: null, data: null})
            } catch (error: any) {
                console.error(error)
                Response.json({status: 500, data: null, message: 'cannot locate'})
                return response.json({status: 500, message: 'internal server', data: null})


            }
        }

            async function getLocationByLocationSunrise(request: Request, response: Response): Promise<Response<Status>> {
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


                async function putLocationController(request: Request, response: Response): Promise<Response<Status>> {
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

                        async function getLocationByLocationLat() {
                            new Promise((resolve, reject) => {
                                if (navigator.geolocation) {
                                    navigator.geolocation.getCurrentPosition(function (position) {

                                        console.log(position.coords.latitude)
                                    })
                                }
                            })

                        }


                        function getLocationByLocationLng() {
                            new Promise((resolve, reject) => {
                                if (navigator.geolocation) {
                                    navigator.geolocation.getCurrentPosition(function (position) {

                                        console.log(position.coords.longitude)
                                    })
                                }
                            })
                        }
