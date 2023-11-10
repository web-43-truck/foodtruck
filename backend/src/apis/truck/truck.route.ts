import {Router} from 'express'
import {
    deleteTruckByTruckIdController,
    getAllTrucks,
    getTruckByTruckIdController,
    getTruckByTruckNameController, getTrucksByLocationTruckIdController,
    getTrucksByNameController,
    getTrucksByTruckProfileIdController,
    postTruckController,
    putTruckController, searchTruckByNameController
} from './truck.controller'
import {isLoggedInController} from '../../utils/controllers/isLoggedIn.controller'


const basePath = '/apis/truck'

const router = Router()


router.route('/')
    .post(isLoggedInController, postTruckController)
    .get(getAllTrucks)

router.route('/:truckId')
    .get(getTruckByTruckIdController)
    .put(isLoggedInController, putTruckController)
    .delete(isLoggedInController, deleteTruckByTruckIdController)

router.route('/truckId/:truckId')
    .get(getTrucksByLocationTruckIdController)

router.route('/truckProfileId/:truckProfileId')
    .get(getTrucksByTruckProfileIdController)

router.route('/truckName/:truckName')
    .get(getTruckByTruckNameController)

router.route('/truckSearch/:truckName')
    .get(searchTruckByNameController)

router.route('/truckNames/:truckName')
    .get(getTrucksByNameController)




export const truckRoute = {basePath, router}