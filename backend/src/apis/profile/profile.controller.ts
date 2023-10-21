import {Response} from 'express'
import {ZodError} from 'zod/lib'
import {Status} from "../../utils/interfaces/Status";



export function createStatus (status: number, data: unknown, message: string | null): Status {
    return { status, data, message }
}

export function zodErrorResponse (response: Response, error: ZodError): Response<Status> {
    const message = error.issues[0].message
    return errorResponse(response, createStatus(418, null, message))
}

export function errorResponse (response: Response, status: Status): Response<Status> {
    return response.json(status)
}

export function serverErrorResponse (response: Response, defaultDataValue: unknown = null): Response<Status> {
    return errorResponse(response, createStatus(500, defaultDataValue, 'internal server error occurred try again later'))
}