import {Request, Response} from "express";
import {PrivateProfileSchema} from "./profile.validator";
import {zodErrorResponse} from "../../utils/response.utils";
import {PrivateProfile, selectPrivateProfileByProfileId, updateProfile} from "./profile.model";
import {Status} from "../../utils/interfaces/Status";


export async function putProfileController(request: Request, response: Response): Promise<Response<Status>> {
    try {
        const validationResultForRequestBody = PrivateProfileSchema.safeParse(request.body)

        if(!validationResultForRequestBody.success) {
            return zodErrorResponse(response, validationResultForRequestBody.error)
        }

        const validationResultForRequestParams = PrivateProfileSchema.pick({profileId: true}).safeParse(request.params)

        if(!validationResultForRequestParams.success) {
            return zodErrorResponse(response, validationResultForRequestParams.error)
        }

        const profileFromSession = request.session?.profile
        const profileIdFromSession = profileFromSession?.profileId

        const {profileId} = validationResultForRequestParams.data

        if (profileIdFromSession !== profileId) {
            return response.json({status: 400, message: "you cannot update a profile that is not yours", data: null})
        }

        const { profileName, profileIsTruckOwner} = validationResultForRequestBody.data

        const profile: PrivateProfile|null = await selectPrivateProfileByProfileId(profileId)

        if(profile === null) {
            return response.json({status: 400, message: "profile does not exist", data: null})
        }

        profile.profileName = profileName
        profile.profileIsTruckOwner = profileIsTruckOwner

        //update the profile in the database
        await updateProfile(profile)

        return response.json({status: 200, message: "profile successfully updated", data: null})


    } catch (error: unknown) {
        return response.json({status: 500,message: "internal server error", data: null})
    }
}