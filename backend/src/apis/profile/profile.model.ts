import {sql} from "../../utils/database.utils";
import {z} from "zod";
import {PrivateProfileSchema} from './profile.validator';


export type PrivateProfile =  z.infer<typeof PrivateProfileSchema>;



export async function insertProfile (profile : PrivateProfile): Promise<string> {

    const {profileActivationToken, profileEmail, profileHash, profileName, profileIsTruckOwner} = profile
    await sql`INSERT INTO profile (profile_id, profile_activation_token, profile_email, profile_hash, profile_name, profile_is_truck_owner) VALUES (gen_random_uuid(), ${profileActivationToken} , ${profileEmail}, ${profileHash}, ${profileName}, ${profileIsTruckOwner})`
    return 'Profile Successfully Created'
}

export async function updateProfile (profile: PrivateProfile): Promise<string> {
    const {profileId, profileActivationToken, profileEmail, profileHash, profileName, profileIsTruckOwner } = profile
    await sql`UPDATE profile SET profile_activation_token = ${profileActivationToken}, profile_email = ${profileEmail}, profile_hash = ${profileHash}, profile_name = ${profileName},
               profile_is_truck_owner = ${profileIsTruckOwner} WHERE profile_id = ${profileId}`
    return 'Profile successfully updated'

}

export async function selectPrivateProfileByProfileEmail (profileEmail: string): Promise<PrivateProfile | null> {
    const rowList
        = await sql`SELECT profile_id, profile_activation_token, profile_email, profile_hash, profile_name, profile_is_truck_owner
                    FROM profile
                    WHERE profile_email = ${profileEmail}`

    const result = PrivateProfileSchema.array().max(1).parse(rowList)

return result?.length === 1 ? result[0] : null
}

export async function selectPrivateProfileByProfileId(profileId: string | null): Promise<PrivateProfile | null> {
    const rowList = await sql`SELECT profile_id, profile_activation_token, profile_email, profile_hash, profile_name, profile_is_truck_owner FROM profile WHERE profile_id = ${profileId}`

    const result = PrivateProfileSchema.array().max(1).parse(rowList)

    return result?.length === 1 ? result[0] : null
}

export async function selectPrivateProfileByProfileActivationToken (profileActivationToken: string): Promise<PrivateProfile|null> {

    const rowList = await sql`SELECT profile_id, profile_activation_token, profile_email, profile_hash, profile_name, profile_is_truck_owner
                              FROM profile
                              WHERE profile_activation_token = ${profileActivationToken}`

    const result = PrivateProfileSchema.array().max(1).parse(rowList)
    return result?.length === 1 ? result[0] : null
}
