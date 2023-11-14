import {z} from 'zod'
import {PictureSchema} from './picture.validator';
import {sql} from "../../utils/database.utils";

export type Picture = z.infer<typeof PictureSchema>;

export async function insertPicture(picture: Picture): Promise<string> {
    const {pictureTruckId, pictureUrl, pictureType} = picture
    await sql `INSERT INTO picture (picture_id, picture_truck_id, picture_url, picture_type)
            VALUES (gen_random_uuid(), ${pictureTruckId},${pictureUrl},${pictureType})`
    return 'Picture successfully uploaded'
}
export async function selectPictureByPictureTruckId(pictureTruckId: string): Promise<Picture[] | null> {

    const rowList = await sql`SELECT picture_id, picture_truck_id, picture_url, picture_type FROM picture WHERE picture_truck_id = ${pictureTruckId}`

    return  PictureSchema.array().parse(rowList)
}
export async function selectPictureByPictureId(pictureId: string | null): Promise<Picture | null> {
    const rowList = await sql`SELECT picture_id, picture_truck_id, picture_url, picture_type FROM picture WHERE picture_id = ${pictureId}`
    const result = PictureSchema.array().max(1).parse(rowList)
    return result?.length === 1 ? result[0] : null
}
export async function deletePicture(pictureId: string): Promise<string> {
    await sql`DELETE FROM picture WHERE picture_id = ${pictureId}`
    return 'picture successfully deleted'
}
export async function updatePicture(picture: Picture): Promise<string> {
    const {pictureId, pictureTruckId, pictureUrl, pictureType} = picture
    await sql`UPDATE picture SET picture_id = ${pictureId}, picture_truck_id = ${pictureTruckId}, picture_url = ${pictureUrl}, picture_type= ${pictureType}`
    return 'Picture successfully updated'
}






