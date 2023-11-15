'use client'
import React, {ReactNode} from "react"
import { Formik, FormikHelpers, FormikProps} from 'formik'

import {toFormikValidationSchema} from "zod-formik-adapter"
import {FormDebugger} from "@/components/signup/FormDebugger";
import {DisplayStatus} from "@/components/signup/DisplayStatus";
import {DisplayError} from "@/components/signup/DisplayErrors";
import {Location, LocationSchema} from "@/utils/models/Location";


export default function LocationForm() {
    const initialValues : any = {
        locationAddress: '',
        locationLat: decimal,
        locationLng: decimal,
        locationSunset: time,
        locationSunrise: time,
        locationIsActive: boolean,
    }
const handleSubmit = ()}