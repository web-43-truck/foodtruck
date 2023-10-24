import {Request, Response} from 'express'
import {
    Truck,
    selectTruckByTruckId,
    selectTruckByTruckName,
    selectTrucksByProfileId,
    selectTrucksByTruckName,
    insertTruck,
    updateTruck, selectAllTrucks, deleteTruckByTruckId
} from "./truck.model"
import {zodErrorResponse} from "../../utils/response.utils"
import {TruckSchema} from "./truck.validator"
import {Status} from "../../utils/interfaces/Status";
import {z} from "zod";
import {PublicProfile} from "../profile/profile.model";


export async function putTruckController(request: Request, response: Response): Promise<Response<Status>> {
    try {
        const bodyValidationResult = TruckSchema.safeParse(request.body)

        if(!bodyValidationResult.success) {
            return zodErrorResponse(response, bodyValidationResult.error)
        }

        const paramsValidationResult = TruckSchema.pick({truckId: true}).safeParse(request.params)

        if(!paramsValidationResult.success) {
            return zodErrorResponse(response, paramsValidationResult.error)
        }

        const {truckId} = paramsValidationResult.data

        const truck: Truck | null = await selectTruckByTruckId(truckId)

        if (truck === null) {
            return response.json({status: 404, data: null, message: 'truck does not exist'})
        }

        const profile = request.session?.profile
        const truckProfileId = profile?.profileId

        if (truckProfileId === null || truck.truckProfileId !== truckProfileId) {
            return response.json({status: 404, data: null, message: 'you are not allowed to perform this task'})
        }

        const {truckDescription, truckFoodCategory, truckName} = bodyValidationResult.data

        truck.truckDescription = truckDescription
        truck.truckFoodCategory = truckFoodCategory
        truck.truckName = truckName

        const message = await updateTruck(truck)

        return response.json({status: 200, data: null, message})

    }catch (error: unknown) {
        console.error(error)
        return response.json({status: 500, message: 'internal server', data: null})
    }
}

export async function getTruckByTruckIdController (request: Request, response: Response): Promise<Response<Status>> {
    try {

        const validationResult = z.object({
            truckId: z.string().uuid('please provide a valid projectId')
        }). safeParse(request.params)

        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        const { truckId } = validationResult.data

        const data: Truck|null = await selectTruckByTruckId(truckId)

        const status: Status = { status: 200, message: null, data }
        return response.json(status)

    } catch (error) {
        return response.json({
            status: 500,
            message: 'internal server error',
            data: null
        })
    }
}

export async function postTruckController (request: Request, response: Response): Promise<Response> {
    try {

        const validationResult = TruckSchema.safeParse(request.body)

        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        const {truckDescription, truckFoodCategory, truckName} = validationResult.data


        const profile = request.session?.profile
        const truckProfileId = profile?.profileId

        if(truckProfileId === undefined || truckProfileId === null) {
            return response.json({ status: 400, data: null, message: 'You are not allowed to preform this task' })
        }

        const truck: Truck = { truckId: null, truckProfileId, truckDescription, truckFoodCategory, truckName }

        const message: string = await insertTruck(truck)

        return response.json({ status: 200, data: null, message })

    } catch (error) {
        return response.json({
            status: 500,
            message: 'internal server error',
            data: null
        })
    }
}

export async function getTrucksByTruckProfileIdController (request: Request, response: Response): Promise<Response<Status>> {
    try {

        const validationResult = z.object({
            truckProfileId: z
                .string()
                .uuid('please provide a valid projectProfileId')
        }).safeParse(request.params)

        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)

        }

        const { truckProfileId } = validationResult.data

        const profile = request.session?.profile
        const profileIdFromSession = profile?.profileId

        if (profileIdFromSession || truckProfileId !== profileIdFromSession) {
            return response.json({ status: 400, data: null, message: 'You are not allowed to preform this task' })
        }

        const data: Truck | null = await selectTrucksByProfileId(truckProfileId)

        const status: Status = { status: 200, message: null, data }
        return response.json(status)
    } catch (error) {
        console.log()
        return response.json({

            status: 500,
            message: 'internal server error',
            data: []
        })
    }
}

export async function getAllTrucks(request: Request, response: Response): Promise<Response<Status>> {
    try {

        const data = await selectAllTrucks()

        const status: Status = {status: 200, message: null, data}
        return response.json(status)

    } catch (error) {
        console.error(error)
        return response.json({
            status: 500,
            message: 'Error getting trucks. Try again.',
            data: []
        })
    }
}

export async function getTruckByTruckNameController (request: Request, response: Response): Promise<Response<Status>> {
    try {

        const validationResult = TruckSchema.pick({truckName: true}).safeParse(request.params)

        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        const {truckName} = validationResult.data

        const data = await selectTruckByTruckName(truckName)

        return response.json({status: 200, message: null, data})

    } catch (error) {
        return response.json({
            status: 500,
            message: '',
            data: []
        })
    }
}


export async function getTrucksByNameController(request: Request, response: Response) : Promise<Response<Status>>  {
    try {

        const validationResult = TruckSchema.pick({truckName: true}).safeParse(request.params)

        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        const {truckName} = validationResult.data

        const data = await selectTrucksByTruckName(truckName)

        return response.json({status: 200, message: null, data})

    } catch (error: unknown) {

        return response.json({status: 500,message: "internal server error", data: null})
    }
}

export async function deleteTruckByTruckIdController (request: Request, response: Response): Promise<Response<Status>> {
    try {

        const validationResult = z.string().uuid({message: 'please provide a valid truck Id'}).safeParse(request.params.threadId)

        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        const profile: PublicProfile = request.session.profile as PublicProfile

        const truckProfileId: string = profile.profileId as string

        const truckId = validationResult.data

        const truck = await selectTruckByTruckId(truckId)

        if(truck?.truckProfileId !== truckProfileId) {
            return response.json({
                status: 403,
                message: 'you are not allowed to delete this truck',
                data: null
            })
        }

        const result = await deleteTruckByTruckId(truckId)

        return response.json({status: 200, message: result, data: null})

    } catch (error) {
        return response.json({
            status: 500,
            message: '',
            data: []
        })
    }
}