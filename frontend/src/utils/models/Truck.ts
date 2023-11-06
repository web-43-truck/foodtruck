import {z} from "zod";

export const TruckSchema = z.object({
    truckId: z.string({
        required_error: 'truckId is required',
        invalid_type_error: 'please provide a valid truckId'
    })
        .uuid({message: 'please provide a valid truckId'})
        .nullable(),

    truckProfileId: z.string({
        required_error: 'truckProfileId is required',
        invalid_type_error: 'please provide a valid truckProfileId'
    })
        .uuid({message: 'please provide a valid truckProfileId'}),

    truckDescription: z.string({
        required_error: 'truckDescription is a required field',
        invalid_type_error: 'please provide a valid truckDescription'
    })
        .max(1025, {message: 'truck description is too long'})
        .nullable(),

    truckFoodCategory: z.string({
        required_error: 'please provide a truckFoodCategory',
        invalid_type_error: 'please provide a valid foodTruckCategory'
    })
        .max(64, {message: 'truckFoodCategory is too long'}),

    truckName: z.string()
        .trim()
        .min(1, {message: 'please provide a valid truck name that is min 1 character in length'})
        .max(32, {message: 'please provide a valid truck name that is max 32 characters in length'})
})

export type Truck = z.infer<typeof TruckSchema>