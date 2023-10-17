import {sql} from "../../utils/database.utils";
import {z} from "zod";
import {PrivateProfileSchema} from "./profile.validator";


export type PrivateProfile =  z.infer<typeof PrivateProfileSchema>