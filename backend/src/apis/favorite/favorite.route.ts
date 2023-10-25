import { Router } from 'express'
import {isLoggedInController} from "../../utils/controllers/isLoggedIn.controller"
import {
    deleteFavoriteController, getFavoritesByFavoriteProfileIdController,
    getFavoritesByFavoriteTruckIdController,
    postFavoriteController,
    toggleFavoriteController
} from "./favorite.controller"

const basePath = '/apis/favorite'

const router = Router()

router.route('/')
    .post(isLoggedInController, postFavoriteController)

router.route('/toggle')
    .post(isLoggedInController, toggleFavoriteController)

router.route('/favoriteTruckId/:favoriteTruckId')
    .get(getFavoritesByFavoriteTruckIdController)
    .delete(isLoggedInController, deleteFavoriteController)

router.route('/favoriteProfileId/:favoriteProfileId')
    .get(getFavoritesByFavoriteProfileIdController)


export const favoriteRoute = {basePath, router}
