import {Router} from "express"
import {getProfileByProfileIdController, putProfileController} from './profile.controller'
import {isLoggedInController} from '../../utils/controllers/isLoggedIn.controller'


const basePath = '/apis/profile'

const router: Router = Router()

router.route('/:profileId')
    .get(getProfileByProfileIdController)
    .put(isLoggedInController, putProfileController)

export const profileRoute = {basePath, router}