import {Router} from "express";
import {
    insertPicture, selectPictureByPictureTruckId, selectPictureByPictureId, deletePictureByPictureId, updatePicture
} from "./picture.controller"
import {}

const basePath = '/apis/picture'
const router = Router()

router.route('/:pictureTruckId').post(insertPicture)
    .get(selectPictureByPictureTruckIdController)

router.route('')

export const pictureRoute = {basePath, router}