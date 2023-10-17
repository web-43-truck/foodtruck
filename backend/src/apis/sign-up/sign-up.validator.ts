import {z} from "zod";
import {PrivateProfileSchema} from "../profile/profile.validator";

export const SignUpProfileSchema = PrivateProfileSchema
.omit( { profileHash:
true})
.extend({
    profilePasswordConfirm: z.string()
        .min(8, {message: 'Please provide a valid password(min 8 characters)'})
        .max(64, {message: 'Please provide a valid password(max 64 characters)'}),
    profilePassword: z.string()
        .min(8, {message: 'Please provide a valid password(min 8 characters)'})
        .max(64, {message: 'Please provide a valid password (max 64 characters)'})
  })
    .refine(data => data
        .profilePassword === data.profilePasswordConfirm,
        {message: 'Passwords do not match'}
    )