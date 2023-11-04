import {Router} from "express";
import {
   postPictureController, getPictureByPictureTruckIdController, getPictureByPictureIdController, deletePictureByPictureIdController
} from "./picture.controller"
import {isLoggedInController} from "../../utils/controllers/isLoggedIn.controller";

const basePath = 'apis/picture'

const router: Router = Router()

router.route('/')
    .post(isLoggedInController, postPictureController)

router.route('/pictureTruckId')
    .get(getPictureByPictureTruckIdController)

router.route('/pictureId/:pictureId')
    .get(getPictureByPictureIdController)
    .delete(isLoggedInController,deletePictureByPictureIdController)

export const pictureRoute = {basePath, router}


