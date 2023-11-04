import {z} from 'zod'

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
        .max(32, {message: 'please provide a valid truck name that is max 32 characters in length'
    }),

    truckIsActive: z.boolean({
        required_error: 'Please let us know if true or false if truck is active',
        invalid_type_error: 'Please provide true or false for truck is active'
    }),

    truckAddress: z.string({
        required_error: 'locationAddress is required',
        invalid_type_error: 'please provide a valid locationAddress'
    })
        .nullable(),

    truckLat: z.coerce.number({required_error: 'Unable to locate'
    }),

    truckLng: z.coerce.number({required_error: 'Unable to locate'
    }),

    truckSunrise: z.number({
        required_error: 'locationSunrise is required',
        invalid_type_error: 'please provide a valid locationSunrise'
    })
        .nullable(),

    truckSunset: z.number({
        required_error: 'locationSunset is required',
        invalid_type_error: 'please provide a valid locationSunset'
    })
        .nullable()

})