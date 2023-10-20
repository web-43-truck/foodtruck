import {z} from 'zod'

export const truckSchema = z.object({
    truck_id: z.string({
        required_error: 'truckId is required',
        invalid_type_error: 'please provide a valid truckId'
    })
        .uuid({message: 'please provide a valid truckId'}),

    truck_profile_id: z.string({
        required_error: 'truckProfileId is required',
        invalid_type_error: 'please provide a valid truckProfileId'
    })
        .uuid({message: 'please provide a valid truckProfileId'}),

    truck_food_category: z.string({
        required_error: 'please provide a truckFoodCategory',
        invalid_type_error: 'please provide a valid foodTruckCategory'
    }),

    truck_name: z.string()
        .trim()
        .min(1, {message: 'please provide a valid name that is min 1 character in length'})
        .max(32, {message: 'please provide a valid name that is max 32 characters in length'})
})

