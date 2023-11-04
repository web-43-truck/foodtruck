import { z } from 'zod'

export const LocationSchema = z.object({
    locationId: z.string({
        required_error: 'locationId is required',
        invalid_type_error: 'please provide a valid truckId'
    })
        .uuid({message: 'please provide a valid locationId'})
        .nullable(),

    locationTruckId: z.string({
        required_error: 'locationTruckId is required',
        invalid_type_error: 'please provide a valid locationTruckId'
    })
        .uuid({message: 'please provide a valid truckProfileId'}),

    locationIsActive: z.boolean({
        required_error: 'locationIsActive is required',
        invalid_type_error: 'please provide a valid locationIsActive'
    }),

    locationAddress: z.string({
        required_error: 'locationAddress is required',
        invalid_type_error: 'please provide a valid locationAddress'
    })
        .nullable(),

    locationLat: z.coerce.number({required_error: 'Unable to locate'
    }),

    locationLng: z.coerce.number({required_error: 'Unable to locate'
    }),

    locationSunrise: z.number({
        required_error: 'locationSunrise is required',
        invalid_type_error: 'please provide a valid locationSunrise'
    })
        .nullable(),

    locationSunset: z.number({
        required_error: 'locationSunset is required',
        invalid_type_error: 'please provide a valid locationSunset'
    })
        .nullable()

})

