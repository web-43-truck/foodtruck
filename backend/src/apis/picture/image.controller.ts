// storing
import { Request, Response } from 'express'
import { uploadToCloudinary } from '../../utils/cloudinary.utils'

export async function imageUploadController (request: Request, response: Response): Promise<Response> {
    try {
      if (request.file === undefined) {
        throw new Error('Please provide a valid file type')
        }

      const message: string = await uploadToCloudinary(request.file)
      return response.json({status: 200, data: null, message: message})
    } catch (error: any) {
      return response.json({status: 400, data: null, message: error.message})
    }
}