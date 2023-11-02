import {Router} from 'express'
import {


} from "./location.controller"

const basePath = '/apis/location'

const router = Router()



router.route('/locationAddress')
    .get(selectLocationByLocationAddress)
router.route('/locationSunrise')
    .get(selectLocationByLocationSunrise)
router.route('/locationSunset')
    .get(selectLocationByLocationSunset)

router.route('/locationId')
    .get(selectLocationByLocationId)

router.route('/locationTruckId')
    .get(selectLocationByLocationTruckId)







export const locationRoute = {basePath, router}

