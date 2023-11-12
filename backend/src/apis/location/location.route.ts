import {Router} from 'express'
import {
    deleteLocationByLocationIdController,

    getLocationByLocationIdController,
    getLocationByLocationSunrise,
    getLocationsByLocationTruckIdController,
    postLocationController,
    putLocationController
    } from "./location.controller"

import {isLoggedInController} from "../../utils/controllers/isLoggedIn.controller";

const basePath = '/apis/location'

const router = Router()

router.route('/')
    .post(isLoggedInController, postLocationController)


router.route('/locationSunrise')
    .get(getLocationByLocationSunrise)


router.route('/locationId/:locationId')
    .get(getLocationByLocationIdController)
    .put(isLoggedInController, putLocationController)
    .delete(isLoggedInController, deleteLocationByLocationIdController)


router.route('/locationTruckId/:locationTruckId')
    .get(getLocationsByLocationTruckIdController)


export const locationRoute = {basePath, router}

