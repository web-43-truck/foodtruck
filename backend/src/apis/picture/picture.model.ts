import {z} from 'zod'
import {PictureSchema} from './picture.validator';
import {sql} from "../../utils/database.utils";

export type Picture = z.infer<typeof PictureSchema>;

export async function insertPicture(picture: Picture): Promise<string> {
    const {pictureTruckId, pictureUrl, pictureType} = picture
    await sql `INSERT INTO (picture_truck_id, picture_url, picture_type)
            VALUES (${pictureTruckId},${pictureUrl},${pictureType})`
    return 'Picture successfully uploaded'
}
export async function selectPictureByPictureTruckId(pictureTruckId: string): Promise<Picture[]> {
    const rowList = await sql`SELECT picture_truck_id, picture_url, picture_type FROM picture WHERE pictureTruck_id = ${pictureTruckId}`
    return PictureSchema.array().parse(rowList)
}
export async function selectPictureByPictureId(picture: Picture): Promise<Picture[]> {
    const rowList = await sql`SELECT picture_truck_id, picture_url, picture_type FROM picture WHERE picture_id = ${pictureId}`
    return PictureSchema.array().parse(rowList)
}
export async function deletePicture(picture: string): Promise<string> {
    await sql`DELETE FROM picture WHERE picture_id = ${picture}`
    return 'picture successfully deleted'
}
export async function updatePicture(picture: Picture): Promise<string> {
    const {pictureTruckId, pictureUrl, pictureType} = picture
    await sql`UPDATE picture SET picture_truck_id = ${pictureTruckId}, picture_url = ${pictureUrl}, picture_type= ${pictureType}`
    return 'Picture successfully updated'
}




