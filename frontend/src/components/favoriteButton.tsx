"use client"

import React from 'react';
import {Favorite} from "@/utils/models/Favorite";
import {Session} from "@/utils/FetchSession";
import {useRouter} from "next/navigation";



type favoriteButtonProps= {
    favorites: Favorite[]
    truckId: string
    session : Session
}
export function FavoriteButton (props:favoriteButtonProps) {
 const router= useRouter()

    const {favorites, session, truckId} = props

    const {profile, authorization} = session
    function submitFavorite() {

        if (favorites.length){
            const result = fetch(`/apis/favorite/favoriteProfileId/${favorites[0].favoriteProfileId}/favoriteTruckId/${favorites[0].favoriteTruckId}`, {
                method: "DELETE",
                headers: {
                    "authorization": authorization,

                },

            }).then(response => response.json()).then(json => {

                if (json.status === 200) {
                router.refresh()

                }

            })
        }
        else {
            console.log(favorites)
            const result = fetch('/apis/favorite', {
                method: "POST",
                headers: {
                    "authorization": authorization,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({favoriteProfileId: profile.profileId, favoriteTruckId : truckId})
            }).then(response => response.json()).then(json => {

                if (json.status === 200) {
                router.refresh()

                }

            })
        }
    }


    return (
        <>
            <button className="btn btn-accent" onClick={submitFavorite}>
                {favorites.length ? "Unfavorite" : "favorite"}

            </button>
        </>
    )

}

