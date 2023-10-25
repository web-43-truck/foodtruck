import {Request, Response} from 'express'
import {
    deleteFavorite,
    insertFavorite,
    Favorite,
    selectFavoriteByFavoriteProfileId,
    selectFavoriteByFavoriteTruckId
} from "./favorite.model";
import {PublicProfile} from "../profile/profile.model"
import {Status} from "../../utils/interfaces/Status"
import {FavoriteSchema} from "./favorite.validator"
import {zodErrorResponse} from "../../utils/response.utils"
import {z} from "zod";



export async function getFavoritesByFavoriteTruckIdController(request: Request, response: Response): Promise<Response> {
    try {

        const validationResult = z.string().uuid("Please provide a valid favoriteTruckId").safeParse(request.params.favoriteTruckId)

        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        const favoriteTruckId = validationResult.data

        const data = await selectFavoriteByFavoriteTruckId(favoriteTruckId)

        return response.json({status: 200, message: null, data})

    } catch (error) {
        return response.json({
            status: 500,
            message: '',
            data: []
        })
    }
}

export async function getFavoritesByFavoriteProfileIdController(request: Request, response: Response): Promise<Response> {
    try {

        const validationResult = z.string().uuid("Please provide a valid favoriteProfileId").safeParse(request.params.favoriteProfileId)

        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        const favoriteProfileId = validationResult.data

        const data = await selectFavoriteByFavoriteProfileId(favoriteProfileId)

        return response.json({status: 200, message: null, data})

    } catch (error) {
        console.error(error)
        return response.json({
            status: 500,
            message: '',
            data: []
        })
    }
}


export async function toggleFavoriteController(request: Request, response: Response): Promise<Response<Status>> {
    try {

        const validationResult = FavoriteSchema.safeParse(request.body)

        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        const {favoriteTruckId} = validationResult.data

        const profile = request.session.profile as PublicProfile

        const favoriteProfileId = profile.profileId as string

        const favorite: Favorite = {
            favoriteProfileId,
            favoriteTruckId
        }

        const status: Status = {status: 200, message: '', data: null}

        status.message = await insertFavorite(favorite)
        return response.json(status)

    }catch (error: any) {
        return (response.json({status: 500, data: null, message: error.message}))
    }
}



export async function postFavoriteController(request: Request, response: Response): Promise<Response<Status>> {
    try {

        const validationResult = FavoriteSchema.safeParse(request.body)

        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        const {favoriteTruckId} = validationResult.data

        const profile = request.session.profile as PublicProfile

        const favoriteProfileId = profile.profileId as string

        const favorite: Favorite = {
            favoriteProfileId,
            favoriteTruckId,
        }

        const status: Status = {status: 200, message: '', data: null
        }

        status.message = await insertFavorite(favorite)

        return response.json(status)

    } catch (error: any) {
        return (response.json({status: 500, data: null, message: error.message}))
    }
}


export async function deleteFavoriteController(request: Request, response: Response): Promise<Response<Status>> {
    try {
        const deleteValidationResult = FavoriteSchema.safeParse(request.params)

        if (!deleteValidationResult.success) {
            return zodErrorResponse(response, deleteValidationResult.error)
        }

        const {favoriteTruckId} = deleteValidationResult.data

        const profile = request.session.profile as PublicProfile

        const favoriteProfileId = profile.profileId as string

        const favorite: Favorite = {
            favoriteProfileId,
            favoriteTruckId,
        }

        const status: Status = {status: 200, message: '', data: null}

        status.message = await deleteFavorite(favorite)

        return response.json(status)

    } catch (error: any) {
        return (response.json({status: 500, data: null, message: error.message}))
    }
}