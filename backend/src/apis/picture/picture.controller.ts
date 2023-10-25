import {Request, Response} from 'express'
import {
} from "./picture.model";
import {Status} from "../../utils/interfaces/Status";
import {PictureSchema} from "./picture.validator";
import {zodErrorResponse} from "../../utils/response.utils";
import {z} from "zod";
import {PictureSchema} from "../picture/picture.validator";
import {request} from "http";
import {Truck} from "..truck"


export async function postPictureController(request: Request, response:Response): Promise<Response | undefined>
    try {
        const validation = PictureSchema.safeParse(request.body)
        if (!validation.success) {
            return zodErrorResponse(response, validation.error)
        }

        const { pictureTruckId, pictureUrl, pictureType} = validation.data


        const truck : Truck = request.session.truck as Truck

        const pictureTruckId: string = truck.truckId as string

        const

    }
}

export async function getPictureByPictureTruckIdController(pictureTruckId: string): Promise<>{

}

export async function getPictureByPictureIdController(pictureId: string): Promise<>{

}

export async function deletePictureByPictureIdController(pictureId: string): {

}

export async function putPictureByPictureIdController(pictureId: string): {

}