import {ProfileSchema} from "@/utils/models/Profile";
import {z} from "zod";

export const SignInSchema = z.object({
    profilePassword: z
        .string({required_error: "profile password is required", invalid_type_error: "please provide a valid password"})
        .min(8, {message: 'please provide a valid password (min 8 characters)'})
        .max(32, {message: 'please provide a valid password (max 32 characters)'}),
    profileEmail: z
        .string({required_error:"profileEmail is required", invalid_type_error: "please provide a valid profile email"})
        .email({ message: 'please provide a valid email' })
        .max(128, { message: 'please provide a valid email (max 128 characters)' })
})
export type SignIn = z.infer<typeof SignInSchema>