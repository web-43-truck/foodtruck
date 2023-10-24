import {Router} from 'express'
import {
    getLocationByLocationLng,
    getLocationByLocationLat
} from "./location.controller"
const basePath = '/apis/location'

const router = Router()




router.route('/')
    .get(getLocationByLocationLng)

router.route('/')
    .get(getLocationByLocationLat)

export const route = {basePath, location}

