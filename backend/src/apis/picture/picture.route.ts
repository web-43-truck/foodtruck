import { Router } from 'express'
import { pictureUploader } from '../../utils/controllers/multer.controller'
import { pictureUploadController } from './picture.contoller'

const basePath = '/apis/picture'

const router = Router()

router.route('/')
    .post(pictureUploader, pictureUploadController)

export const imageRoute = { basePath, router }