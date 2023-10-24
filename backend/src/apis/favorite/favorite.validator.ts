import {z} from 'zod'

export const FavoriteSchema = z.object({
    favoriteId: z.string({required_error: 'please provide a valid favoriteId'}).uuid({message: 'please provide a valid uuid for favoriteId'}),
    favoriteProfileId: z.string({required_error: 'please provide a valid favoriteProfileId'}).uuid({message: 'please provide a valid uuid for favoriteProfileId'}),
})
