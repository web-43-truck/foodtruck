import {z} from "zod";

export const PictureSchema = z.object({
    pictureId: z.string({
        required_error: 'pictureId is required',
        invalid_type_error: 'pictureId is not the correct type'
    })
        .uuid({message:'please provide a valid uuid for pictureId'})
        .nullable(),

    pictureTruckId: z.string({
        required_error: 'please provide a valid pictureTruckId',
        invalid_type_error: 'pictureTruckId is not the correct type',
    })
        .uuid({message: 'please provide a valid uuid for pictureTruckId'}),

    pictureUrl: z.string({
        required_error: 'please provide a valid pictureUrl',
        invalid_type_error: 'pictureUrl is not the correct type',
    }),

    pictureType: z.string({
        required_error: 'please provide a valid pictureType',
        invalid_type_error: 'pictureType is not valid',

    })
})

export type Picture = z.infer<typeof PictureSchema>