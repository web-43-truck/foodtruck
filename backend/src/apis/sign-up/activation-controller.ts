import {NextFunction, Request, Response} from 'express'
import { selectPrivateProfileByActivationToken, updateProfile} from '../profile/profile.model'
import {Status} from '../../utils/interfaces/Status'
import {zodErrorResponse} from '../../utils/response.utils'
import {activationProfileSchema} from './activation.validator'


export async function activationController(request: Request, response: Response, ): Promise<Response<Status>> {
    try {
        const validationResult = activationProfileSchema.safeParse(request.params)
        if (!validationResult.data) {
            return zodErrorResponse(response, validationResult.error)
        }

        const {activation} = validationResult.data

        const profile = await selectPrivateProfileByActivationToken(activation)

        if (profile === null) {
            return response.json({
                status: 400,
                data: null,
                message: 'Account activation has failed. Have you already activated this account?'
            })
        }

        profile.profileActivationToken = null
        await updateProfile(profile)
        return response.json({
            status: 200,
            data: null,
            message: 'Account activated successfully'
        })
    } catch (error: any) {
        return response.json({status: 500, data: null, message: error.message})
    }
}