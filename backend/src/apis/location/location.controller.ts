import {LocationSchema} from "./location.validator"

export async function getLocationByLocationLat() {
    new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {

                console.log(position.coords.latitude)
            })
        }
    })

}

export async function getLocationByLocationLng() {
    new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {

                console.log( position.coords.longitude)
            })
        }
    })

}




