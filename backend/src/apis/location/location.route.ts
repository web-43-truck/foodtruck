import {Router} from 'express'
import {
    getLocationByLocationAddress,
    getLocationByLocationIdController,
    getLocationByLocationSunrise,
    getLocationByLocationTruckIdController, postLocationController,  putLocationController


} from "./location.controller"

const basePath = '/apis/location'

const router = Router()



router.route('/locationAddress')
    .get(getLocationByLocationAddress)

router.route('/locationSunrise')
    .get(getLocationByLocationSunrise)


router.route('/:locationId')
    .get(getLocationByLocationIdController)
    .put(putLocationController)
    .post(postLocationController)

router.route('/locationTruckId')
    .get(getLocationByLocationTruckIdController)


export const locationRoute = {basePath, router}

