import {Request, Response} from "express";
import {PublicProfileSchema} from "./profile.validator";
import {zodErrorResponse} from "../../utils/response.utils";
import {
    PrivateProfile, PublicProfile, selectPrivateProfileByProfileId, selectPublicProfileByProfileId,
    selectPublicProfileByProfileName, updateProfile
} from "./profile.model";
import {Status} from "../../utils/interfaces/Status";
import {z} from "zod";


export async function getPublicProfileByProfileIdController(request: Request, response: Response): Promise<Response<Status>> {
    try {
        const validationResult = PublicProfileSchema.pick({profileId: true}).safeParse(request.params)

        if(!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        const {profileId} = validationResult.data

        const data  = await selectPublicProfileByProfileId(profileId)

        return response.json({status:200, message: null, data})

    } catch (error: any) {
        console.error(error)
        return response.json({status: 500, data: null, message: 'internal server error'})
    }
}

export async function getPublicProfileByProfileNameController(request: Request, response: Response): Promise<Response<Status>> {
    try {
        const validationResult = PublicProfileSchema.pick({profileName: true}).safeParse(request.params)

        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        const {profileName} = validationResult.data

        const data= await selectPublicProfileByProfileName(profileName)

        return response.json({status: 200, message: null, data})

    } catch (error: unknown) {

        return response.json({status: 500,message: "internal server error", data: null})
    }
}


export async function putProfileController(request: Request, response: Response): Promise<Response<Status>> {
    try {

        const validationResultForRequestBody = PublicProfileSchema.safeParse(request.body)

        if(!validationResultForRequestBody.success) {
            return zodErrorResponse(response, validationResultForRequestBody.error)
        }

        const validationResultForRequestParams = PublicProfileSchema.pick({profileId: true}).safeParse(request.params)

        if(!validationResultForRequestParams.success) {
            return zodErrorResponse(response, validationResultForRequestParams.error)
        }

        const profileFromSession = request.session?.profile
        const profileIdFromSession = profileFromSession?.profileId

        const {profileId} = validationResultForRequestParams.data

        if (profileIdFromSession !== profileId) {
            return response.json({status: 400, message: "you cannot update a profile that is not yours", data: null})
        }

        const {profileIsTruckOwner, profileName} = validationResultForRequestBody.data

        //grab the profile by profileId
        const profile: PrivateProfile|null = await selectPrivateProfileByProfileId(profileId)

        if(profile === null) {
            return response.json({status: 400, message: "profile does not exist", data: null})
        }

        profile.profileIsTruckOwner = profileIsTruckOwner
        profile.profileName = profileName

        await updateProfile(profile)

        return response.json({status: 200, message: "profile successfully updated", data: null})


    } catch (error: unknown) {
        console.error(error)
        return response.json({status: 500,message: "internal server error", data: null})
    }
}

