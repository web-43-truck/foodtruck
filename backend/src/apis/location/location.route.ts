import {Router} from 'express'
import {
    getLocationByLocationAddress,
    getLocationByLocationIdController,
    getLocationByLocationSunrise,
    getLocationByLocationTruckIdController


} from "./location.controller"

const basePath = '/apis/location'

const router = Router()



router.route('/locationAddress')
    .get(getLocationByLocationAddress)
router.route('/locationSunrise')
    .get(getLocationByLocationSunrise)


router.route('/locationId')
    .get(getLocationByLocationIdController)

router.route('/locationTruckId')
    .get(getLocationByLocationTruckIdController)


export const locationRoute = {basePath, router}

