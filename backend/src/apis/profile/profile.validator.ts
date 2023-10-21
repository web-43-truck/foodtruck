import { z } from 'zod'

export const PrivateProfileSchema = z.object({
    profileId: z.string({
        required_error: 'profileId is required',
        invalid_type_error: 'Please provide a valid profileId'
    })
        .uuid({message: 'please provide a valid profileId'})
        .nullable(),
    profileActivationToken: z.string({
        required_error: 'Token is required',
        invalid_type_error: 'Please provide a valid token'
    })
        .nullable(),
    profileEmail: z.string({
        required_error: 'profileEmail is required',
        invalid_type_error: 'Please provide a valid profileEmail'
    })
        .email({message: 'Please provide a valid email'})
        .max(128, {message: 'profileEmail is too long'}),
    profileHash: z.string({
        required_error: 'profileHash is required',
        invalid_type_error: 'Please provide a valid profileHash'
    })
        .length(97, {message: 'profileHash must be 97 characters'}),
    profileIsTruckOwner: z.boolean({
        required_error: 'Please let us know if profile is a truck owner',
        invalid_type_error: 'Please provide true or false for is profile a truck owner'
    }),
    profileName: z.string()
        .trim()
            .min(1, { message: 'please provide a valid profile name (min 1 characters)' })
            .max(32, { message: 'please provide a valid profile name (max 32 characters)' })
})

