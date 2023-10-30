import {Router} from 'express'
import {


} from "./location.controller"
const basePath = '/apis/location'

const router = Router()





router.route('/locationId')
 //   .get(getLocationByLocationId)

router.route('/locationTruckId')
    .get(getLocationByLocationTruckId)







export const locationRoute = {basePath, router}

