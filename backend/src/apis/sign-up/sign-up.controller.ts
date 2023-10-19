import { Request, Response } from 'express'
import { Status } from '../../utils/interfaces/Status'
import formData from 'form-data'
import Mailgun from 'mailgun.js'
import { setActivationToken, setHash } from '../../utils/auth.utils'
import { zodErrorResponse } from '../../utils/response.utils'
import {insertProfile, PrivateProfile} from '../profile/profile.model'
import {SignUpProfileSchema} from "./sign-up.validator";



export async function signupProfileController (request: Request, response: Response): Promise<Response | undefined> {
    try {
        console.log(request.body)
        //const validationResult = SignUpProfileSchema.safeParse(request.body)
        // if (!validationResult.success) {
        //     return zodErrorResponse(response, validationResult.error)
        // }
        const mailgun: Mailgun = new Mailgun(formData)
        const mailgunClient = mailgun.client({username: 'api', key: process.env.MAILGUN_API_KEY as string})

        const {profileName, profileEmail, profilePassword, profileIsTruckOwner} = request.body

        const profileHash = await setHash(profilePassword)

        const profileActivationToken = setActivationToken()

        // const profileImageUrl = 'http://placekitten.com/300/300'

        const basePath: string = `${request.protocol}://${request.hostname}:8080${request.originalUrl}activation/${profileActivationToken}`

        const message = `<h2>Welcome to Truck Hunter, happy hunting!</h2>
            <p>Confirm your account.</p>
            <p><a href="${basePath}">${basePath}</a></p>`

        const mailgunMessage = {
            from: `Mailgun Sandbox <postmaster@${process.env.MAILGUN_DOMAIN as string}>`,
            to: profileEmail,
            subject: 'One step closer to Sticky Head -- Account Activation',
            html: message
        }

        const profile: PrivateProfile = {
            profileId: '',
            profileActivationToken,
            profileEmail,
            profileHash,
            profileName,
            profileIsTruckOwner
        }

        await insertProfile(profile)

        await mailgunClient.messages.create(process.env.MAILGUN_DOMAIN as string, mailgunMessage)

        const status: Status = {
            status: 200,
            message: 'Profile successfully created please check your email.',
            data: null
        }

        return response.json(status)

    } catch (error: any) {
      const status: Status = {
          status: 500,
          message: error.message,
          data: null
      }

      return response.json(status)
    }
}
