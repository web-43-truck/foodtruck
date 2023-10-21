import {Router} from "express"
import {putProfileController} from './profile.controller'
import {isLoggedInController} from '../../utils/controllers/isLoggedIn.controller'


const basePath = '/apis/profile'

const router: Router = Router()

router.route('/:profileId')
    .put(isLoggedInController, putProfileController)

export const profileRoute = {basePath, router}