import {SearchItem} from "@/components/SearchItem";
import React from "react";
import {Picture} from "@/components/Picture";

export function GridFavorites() {
    return(

        <div className="grid grid-cols-3 gap-3  items-center group md:lg:xl:border-r md:lg:xl:border-b mt-4 text-gray-950 mb-2 py-2 px-2 h-60 text-sm">


            <SearchItem truckName={"Cake Shop"} truckDescription={"Cookie croissant jelly cake carrot cake cotton candy caramels cotton candy. Icing oat souffle. Gingerbread oat cake sweet roll powder jelly-o."}/>

            <Picture text={"https://placekitten.com/400/400"} alt={"placeholder"}/>
        </div>
            )
            }