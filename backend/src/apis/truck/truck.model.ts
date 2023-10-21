import {z} from 'zod'
import {TruckSchema} from './truck.validator'
import {sql} from '../../utils/database.utils'

export type TruckProfile = z.infer<typeof TruckSchema>

export async function insertTruck (tuck: TruckProfile): Promise

