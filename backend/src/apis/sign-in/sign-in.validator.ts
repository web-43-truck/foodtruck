import {z} from 'zod'

export const signInProfileSchema= z.object({
    profilePassword: z.string()
        .min(8, {message:'please provide a valid password with at least 8 characters'})
        .max(32, {message: 'please provide a valid password with a maximum of 32 characters'}),
    profileEmail: z.string()
        .email({message:"please provide a valid email"})
        .max(128, {message: 'please provide a valid email with fewer than 128 characters'})
})
