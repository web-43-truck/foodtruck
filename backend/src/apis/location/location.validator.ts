import { z } from 'zod'

export const LocationSchema = z.object({
    locationLat: z.string({required_error: 'Unable to locate'}),
    locationLng: z.string({required_error: 'Unable to locate'}),
})

