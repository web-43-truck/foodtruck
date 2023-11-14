import {z} from "zod";


export const ProfileSchema = z.object({
    profileId: z.string({
        required_error: 'profileId is required',
        invalid_type_error: 'Please provide a valid profileId'
    })
        .uuid({message: 'please provide a valid profileId'})
        .nullable(),

    profileIsTruckOwner: z.boolean({
        required_error: 'Please let us know if profile is a truck owner',
        invalid_type_error: 'Please provide true or false for is profile a truck owner'
    }),
    profileName: z.string()
        .trim()
        .min(1, { message: 'please provide a valid profile name (min 1 characters)' })
        .max(32, { message: 'please provide a valid profile name (max 32 characters)' })
})

export type Profile = z.infer<typeof ProfileSchema>