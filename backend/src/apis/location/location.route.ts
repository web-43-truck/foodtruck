import {Router} from 'express'
import {


} from "./location.controller"

const basePath = '/apis/location'

const router = Router()



router.route('/locationAddress')
    .get()
router.route('/locationSunrise')
    .get()
router.route('/locationSunset')
    .get()

router.route('/locationId')
    .get()

router.route('/locationTruckId')
    .get()


export const locationRoute = {basePath, router}

