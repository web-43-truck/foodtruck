import {Request, Response} from 'express'
import {
    deleteFavorite,
    insertFavorite,
    Favorite,
    selectFavoriteByFavoriteId,
    selectFavoriteByFavoriteProfileId,
    selectFavoriteByFavoriteTruckId
} from "./favorite.model";
import {PublicProfile} from "../profile/profile.model";
import {Status} from "../../utils/interfaces/Status";
import {FavoriteSchema} from "./favorite.validator";
import {zodErrorResponse} from "../../utils/response.utils";
import {z} from "zod";



export async function selectFavoritesByFavoriteTruckId(request: Request, response: Response): Promise<Response> {
    try {

        // validate the favoriteProfileId coming from the request parameters
        const validationResult = z.string().uuid("Please provide a valid favoriteTruckId").safeParse(request.params.favoriteTruckId)

        // if the validation fails, return a response to the client
        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        // if the validation succeeds, continue

        // deconstruct the favorite thread id from the request parameters
        const favoriteTruckId = validationResult.data

        // select the favorites by favorite thread id
        const data = await selectFavoriteByFavoriteTruckId(favoriteTruckId)

        // return the status and the favorites associated with the thread
        return response.json({status: 200, message: null, data})

        // if an error occurs, return the error to the user
    } catch (error) {
        return response.json({
            status: 500,
            message: '',
            data: []
        })
    }
}

/**
 * Handles GET request for all favorites associated with a profile
 * @param request object containing the favorite profile id
 * @param response object containing the status of the request and the favorites associated with the profile
 * @returns status object containing the status of the request and the favorites associated with the profile
 */
export async function getFavoritesByFavoriteProfileIdController(request: Request, response: Response): Promise<Response> {
    try {

        // validate the favoriteProfileId coming from the request parameters
        const validationResult = z.string().uuid("Please provide a valid favoriteProfileId").safeParse(request.params.favoriteProfileId)

        // if the validation fails, return a response to the client
        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        // if the validation succeeds, continue

        // deconstruct the favorite Profile id from the request parameters
        const favoriteProfileId = validationResult.data

        // select the favorites by favorite profile id
        const data = await selectFavoriteByFavoriteProfileId(favoriteProfileId)

        // return the status and the favorites associated with the profile
        return response.json({status: 200, message: null, data})

        // if an error occurs, return the error to the user
    } catch (error) {
        return response.json({
            status: 500,
            message: '',
            data: []
        })
    }
}

/**
 * Handles POST request to toggle a favorite on a thread by inserting or deleting a favorite from the favorite table
 * @param request object containing the favorite thread id
 * @param response object containing the status of the request
 * @returns status object indicating whether the favorite was inserted or deleted
 */
export async function toggleFavoriteController(request: Request, response: Response): Promise<Response<Status>> {
    try {

        // validate the incoming request with the favorite schema
        const validationResult = FavoriteSchema.safeParse(request.body)

        // if the validation fails, return a response to the client
        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        // if the validation succeeds, continue

        // deconstruct the favorite thread id from the validation result
        const {favoriteTruckId} = validationResult.data

        // deconstruct the profile from the session
        const profile = request.session.profile

        // @ts-ignore
        // deconstruct the profile id from the profile
        const favoriteProfileId = profile.profileId

        // create a favorite object
        // @ts-ignore
        // @ts-ignore
        const favorite: Favorite = {
            favoriteProfileId,
            favoriteTruckId
        }

        // create a status object
        const status: Status = {
            status: 200,
            message: '',
            data: null
        }

        // select the favorite by favorite id to determine if the favorite should be inserted or deleted
        const selectedFavorite: Favorite | null = await selectFavoriteByFavoriteId(favorite)

        // if the favorite is null, insert the favorite into the favorite table
        if (selectedFavorite === null) {
            status.message = await insertFavorite(favorite)
            // if the favorite is not null, delete the favorite from the favorite table
        } else {
            status.message = await deleteFavorite(favorite)
        }

        // return the status to the user
        return response.json(status)

        // if an error occurs, return the error to the user
    } catch (error: any) {
        return (response.json({status: 500, data: null, message: error.message}))
    }
}

/**
 * Handles POST request to insert a favorite into the favorite table
 * @param request object containing the favorite thread id and the profile id
 * @param response object containing the status of the request
 * @returns status object indicating if the favorite was inserted
 */
export async function postFavoriteController(request: Request, response: Response): Promise<Response<Status>> {
    try {

        // validate the incoming request with the favorite schema
        const validationResult = FavoriteSchema.safeParse(request.body)

        // if the validation fails, return a response to the client
        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        // if the validation succeeds, continue

        // deconstruct the favorite thread id from the validation result
        const {favoriteTruckId} = validationResult.data

        // deconstruct the profile from the session
        const profile = request.session.profile as PublicProfile

        // deconstruct the profile id from the profile
        const favoriteProfileId = profile.profileId as string

        // create a favorite object
        const favorite: Favorite = {
            favoriteProfileId,
            favoriteTruckId,
        }

        // create a status object
        const status: Status = {
            status: 200,
            message: '',
            data: null
        }

        // insert the favorite into the favorite table
        status.message = await insertFavorite(favorite)

        // return the status to the user
        return response.json(status)

        // if an error occurs, return the error to the user
    } catch (error: any) {
        return (response.json({status: 500, data: null, message: error.message}))
    }
}

/**
 * Handles DELETE request to delete a favorite from the favorite table
 * @param request object containing the favorite thread id
 * @param response object containing the status of the request
 * @returns status object indicating if the favorite was deleted
 */
export async function deleteFavoriteController(request: Request, response: Response): Promise<Response<Status>> {
    try {

        // validate the incoming request with the favorite schema
        const validationResult = FavoriteSchema.safeParse(request.body)

        // if the validation fails, return a response to the client
        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        // if the validation succeeds, continue

        // deconstruct the favorite thread id from the validation result
        const {favoriteTruckId} = validationResult.data

        // deconstruct the profile from the session
        const profile = request.session.profile as PublicProfile

        // deconstruct the profile id from the profile
        const favoriteProfileId = profile.profileId as string

        // create a favorite object
        const favorite: Favorite = {
            favoriteProfileId,
            favoriteTruckId,
        }

        // create a status object
        const status: Status = {
            status: 200,
            message: '',
            data: null
        }

        // delete the favorite from the favorite table
        status.message = await deleteFavorite(favorite)

        // return the status to the user
        return response.json(status)

        // if an error occurs, return the error to the user
    } catch (error: any) {
        return (response.json({status: 500, data: null, message: error.message}))
    }
}