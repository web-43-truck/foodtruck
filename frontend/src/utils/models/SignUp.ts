import {z} from "zod"
import {ProfileSchema} from "@/utils/models/Profile";


export const SignUpSchema = ProfileSchema.omit({profileId: true, profileIsTruckOwner: true}).extend({
    profilePasswordConfirm: z.string()
        .min(8, {message: 'Please provide a valid password(min 8 characters)'})
        .max(64, {message: 'Please provide a valid password(max 64 characters)'}),
    profileEmail: z.string({
        required_error: 'profileEmail is required',
        invalid_type_error: 'Please provide a valid profileEmail'
    }).email({message: 'Please provide a valid email'})
        .max(128, {message: 'profileEmail is too long'}),
    profilePassword: z.string()
        .min(8, {message: 'Please provide a valid password(min 8 characters)'})
        .max(64, {message: 'Please provide a valid password (max 64 characters)'})
})
    .refine(data => data
            .profilePassword === data.profilePasswordConfirm,
        {message: 'Passwords do not match'}
    )

export type SignUp = z.infer<typeof SignUpSchema>