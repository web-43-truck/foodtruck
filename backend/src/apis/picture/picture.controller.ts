import {Request, response, Response} from 'express'
import {
    deletePicture,
    insertPicture,
    Picture,
    selectPictureByPictureId,
    selectPictureByPictureTruckId,
    updatePicture
} from "./picture.model";
import {Status} from "../../utils/interfaces/Status";
import {zodErrorResponse} from "../../utils/response.utils";
import {z} from "zod";
import {PictureSchema} from "./picture.validator";
import {request} from "http";
import {selectTruckByTruckId, Truck, updateTruck} from "../truck/truck.model"
import {Profiler} from "inspector";
import {PublicProfile} from "../profile/profile.model"
import {TruckSchema} from "../truck/truck.validator";


export async function postPictureController(request: Request, response:Response): Promise<Response | undefined> {
    try {
        const validation = PictureSchema.safeParse(request.body)
        if (!validation.success) {
            return zodErrorResponse(response, validation.error)
        }

        const{ pictureUrl, pictureType } = validation.data

        const truck : Truck = request.session.truck as Truck

        const pictureTruckId: string = truck.truckId as string

        const picture: Picture = {
            pictureId: null,
            pictureTruckId,
            pictureUrl,
            pictureType
        }

        const result = await insertPicture(picture)

        const status: Status = {status: 200, message: result, data: null}
        return response.json(status)

    } catch (error) {
        console.log(error)
        return response.json({status: 500, message: 'Error uploading picture. Try again.', data: null})
    }
}

export async function getPictureByPictureTruckIdController(request: Request, response: Response): Promise<Response<Status>> {
    try {
        const validationResult = z.object({
            pictureTruckId: z
                .string()
                .uuid('please provide a valid projectProfileId')
        }).safeParse(request.params)

        if (!validationResult.success) {
        return zodErrorResponse(response, validationResult.error)
        }

        const {pictureTruckId} = validationResult.data

        const data = await selectPictureByPictureTruckId(pictureTruckId)

        return response.json({status: 200, message: null, data})
    } catch (error) {
        return response.json({
            status: 500,
            message: '',
            data: []
        })
    }
}

export async function getPictureByPictureIdController(request: Request, response: Response): Promise<Response<Status>> {
    try {

        const validationResult = z.string().uuid({message: 'please provide a valid pictureId'}).safeParse(request.params.pictureId)

        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }
            const pictureId = validationResult.data

            const data = await selectPictureByPictureId(pictureId)

            return response.json({status: 200, message: null, data})


      }catch (error) {
            return response.json({
                status: 500,
                message: '',
                data: []
        })
    }
}

export async function deletePictureByPictureIdController(request: Request, response: Response): Promise<Response<Status>>  {
    try {

        const validationResult = z.string().uuid({message: 'please provide a valid pictureId'}).safeParse(request.params.pictureId)

        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        const profile: PublicProfile = request.session.profile

        const profileId: string = profile.profileId as string


        const pictureId =  validationResult.data

        const picture = await selectPictureByPictureId(pictureId)

        if (picture?.pictureId !== pictureId) {
            return response.json({
                status: 403,
                message: 'unable to delete picture',
                data: null
            })
        }
        const truck : Truck | null = await selectTruckByTruckId(picture.pictureTruckId)

        if(truck?.truckProfileId !== profileId) {
            return response.json({
                status: 401,
                message: 'not authorized to delete this picture',
                data: null
            })
        }

        const result = await deletePicture(pictureId)

        return response.json({status: 200, message: result, data: null})
    } catch (error) {
        return response.json({
            status: 500,
            message: '',
            data: []
        })
    }
}

export async function putPictureController(request: Request, response: Response): Promise<Response<Status>> {
    try {
        const bodyValidationResult = PictureSchema.safeParse(request.body)

        if(!bodyValidationResult.success) {
            return zodErrorResponse(response, bodyValidationResult.error)
        }

        const paramsValidationResult = PictureSchema.pick({pictureId: true}).safeParse(request.params)

        if(!paramsValidationResult.success) {
            return zodErrorResponse(response, paramsValidationResult.error)
        }

        const {pictureId} = paramsValidationResult.data

        const picture: Picture | null = await selectTruckByTruckId(pictureId)

        if (picture === null) {
            return response.json({status: 404, data: null, message: 'picture does not exist'})
        }

        const truck = request.session?.truck
        const pictureTruckId = profile?.truckId

        if ( pictureTruckId === null || picture.pictureTruckId !== pictureTruckId) {
            return response.json({status: 404, data: null, message: 'you are not allowed to perform this task'})
        }

        const {pictureUrl, pictureType} = bodyValidationResult.data

        picture.pictureUrl = pictureUrl
        picture.pictureType = pictureType

        const message = await updateTruck(truck)

        return response.json({status: 200, data: null, message})

    }catch (error: unknown) {
        console.error(error)
        return response.json({status: 500, message: 'internal server', data: null})
    }
}
