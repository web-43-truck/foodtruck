import { Request, Response } from "express";
import { insertPicture, selectPictureByPictureTruckId, deletePicture, updatePicture } from "picture.model";
import {zodErrorResponse} from "../../utils/response.utils";


import {Status} from "../../utils/interfaces/Status";

export async function insertPictureController(picture: PublicProfileSchema): Promise<Status>> {
    const validationResult = PictureSchema.({picture: true}).safeParse(request.params)
    if (!validationResult.success) {
        return zodErrorResponse(response, validationResult.error)
    }
}


export async function selectPictureByPictureTruckIdController(pictureTruckId: string): Promise<Status>
{

}

export async function selectPictureByPictureIdController(pictureId: string): Promise<Status>{

}

export async function deletePictureByPictureIdController(pictureId: string): Promise<Status>{

}
export async function updatePictureByPictureIdController(pictureId: string): Promise<Status>{

}