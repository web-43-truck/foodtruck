import {sql} from "../../utils/database.utils";
import {z} from "zod";
import {PrivateProfileSchema} from "./profile.validator";


export type PrivateProfile =  z.infer<typeof PrivateProfileSchema>;

export async function insertProfile (profile : PrivateProfile): Promise<string> {

    const {profileId, profileActivationToken, profileEmail, profileHash, profileName, profileIsTruckOwner} = profile
    await sql`INSERT INTO profile (profile_id, profile_activation_token, profile_email, profile_hash, profile_name, profile_is_truck_owner) VALUES (gen_random_uuid(), ${profileActivationToken} , ${profileEmail}, ${profileHash}, ${profileName}, ${profileIsTruckOwner})`
    return 'Profile Successfully Created'
}



