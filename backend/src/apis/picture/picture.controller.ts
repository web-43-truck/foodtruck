import {Request, response, Response} from 'express'
import {insertPicture, Picture, selectPictureByPictureId, updatePicture} from "./picture.model";
import {Status} from "../../utils/interfaces/Status";
import {zodErrorResponse} from "../../utils/response.utils";
import {z} from "zod";
import {PictureSchema} from "./picture.validator";
import {request} from "http";
import {Truck} from "./"


export async function postPictureController(request: Request, response:Response): Promise<Response>
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

export async function getPictureByPictureTruckIdController(pictureTruckId: string): Promise<Response<Status>> {
    try {
        const validationResult = z.string().uuid({message: 'please provide a valid threadProfileId'}).safeParse(request.params.pictureTruckId)

        if (!validationResult.success) {
        return zodErrorResponse(response, validationResult.error)
        }

        const truckPictureId = validationResult.data

        const data = await getPictureByPictureTruckIdController(truckPictureId)

        return response.json({status: 200, message: null, data})
    } catch (error) {
        return response.json({
            status: 500,
            message: '',
            data: []
        })
    }
}

export async function getPictureByPictureIdController(pictureId: string): Promise<Response<Status>> {
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
    const truck: Truck =  request.session.truck as Truck

    const pictureTruckId: string = truck.truckId as string

    const pictureId =  validationResult.data

    const picture = await selectPictureByPictureId(pictureId)

        if(picture?.pictureTruckId !== pictureTruckId) {
            return response.json({
                status: 403,
                message: 'unable to delete picture',
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

export async function putPictureByPictureIdController(pictureId: string): {
    try{

        const validationResultForRequestBody = PictureSchema.safeParse(request.body)

    if(!validationResultForRequestBody.success) {
        return zodErrorResponse(response, validationResultForRequestBody.error)
    }

    const pictureFromSession = request.session?.picture
    const pictureIdFromSession = pictureFromSession?.pictureId

    const {pictureId} = validationResultForRequestParams.data

    if (pictureIdFromSession !== pictureId) {
        return response.json({status: 400, message: "you cannot update a picture that is not yours", data: null})
    }

    const {pictureId, pictureTruckId,, pictureType} = validationResultForRequestBody.data

    const truck: picture|null = await selectPictureByPictureId(pictureId)

    if(truck === null) {
        return response.json({status: 400, message: "profile does not exist", data: null})
    }

    truck.pictureId= pictureId
    truck.pictureTruckId = pictureTruckId
    truck.pictureUrl = pictureUrl
    truck.pictureType = pictureType
    
    await updatePicture(picture)
    
    return response.json({status: 200, message: "picture successfully updated", data:null})

  } catch (error: unknown) {
        return response.json({status: 500,message: "internal server error", data: null})
    }

}
}