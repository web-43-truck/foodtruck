import {Router} from 'express'
import {postTruckController} from "./truck.controller";
import {isLoggedInController} from '../../utils/controllers/'


const basePath = 'apis/truck'

const router = Router()


router.route('/')
    .post(isLoggedInController, postTruckController)