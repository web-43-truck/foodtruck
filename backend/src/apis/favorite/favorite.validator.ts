import {z} from 'zod'


export const FavoriteSchema = z.object({

    favoriteProfileId: z.string({
        required_error: 'please provide a valid favoriteProfileId'
    })
        .uuid({message: 'please provide a valid uuid for favoriteProfileId'}),

    favoriteTruckId: z.string({
        required_error: 'Please provide a valid favoriteTruckId'
    })
        .uuid({message: "please enter a valid uuid for favoriteTruckId"}),
    })
