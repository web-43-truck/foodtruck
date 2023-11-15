'use client'
import React, {ReactNode} from "react"
import { Formik, FormikHelpers, FormikProps} from 'formik'

import {toFormikValidationSchema} from "zod-formik-adapter"
import {FormDebugger} from "@/components/signup/FormDebugger";
import {DisplayStatus} from "@/components/signup/DisplayStatus";
import {DisplayError} from "@/components/signup/DisplayErrors";
import {Location, LocationSchema} from "@/utils/models/Location";
import {boolean} from "zod";


export default function LocationForm() {
    const initialValues : any = {
        locationAddress: '',
        locationLat: '',
        locationLng: '',
        locationSunset: '',
        locationSunrise: '',
        locationIsActive: boolean,
    }
const handleSubmit = ()}