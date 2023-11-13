import {z} from "zod";

export const LocationSchema = z.object({
    locationId: z.string({
        required_error: 'locationId is required',
        invalid_type_error: 'please provide a valid locationId'
    })
        .uuid({message: 'please provide a valid locationId'})
        .nullable(),

    locationTruckId: z.string({
        required_error: 'locationTruckId is required',
        invalid_type_error: 'please provide a valid locationTruckId'
    })
        .uuid({message: 'please provide a valid locationTruckId'}),

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
    })
        .nullable(),

    locationLng: z.coerce.number({required_error: 'Unable to locate'
    })
        .nullable(),

    locationSunrise: z.coerce.number({
        required_error: 'locationSunrise is required',
        invalid_type_error: 'please provide a valid locationSunrise'
    })
        .nullable(),

    locationSunset: z.coerce.number({
        required_error: 'locationSunset is required',
        invalid_type_error: 'please provide a valid locationSunset'
    })
        .nullable()

})
    .refine(location => {
      const result =  location.locationAddress === null && location.locationLat === null && location.locationLng === null

        return (!result)
    }, {message:"You must provide your location or address to create a location"})



