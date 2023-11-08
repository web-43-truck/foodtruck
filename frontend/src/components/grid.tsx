import CheckBox from "./checkbox";

import {SearchItem} from "@/components/SearchItem";
import {Picture} from "@/components/Picture";
import Button from "@/components/button";

export function Grid() {
    return (

        <div className="grid grid-cols-3 gap-3  items-center group md:lg:xl:border-r md:lg:xl:border-b mt-4 text-gray-950 mb-2 py-2 px-2 h-60 text-sm">

            <SearchItem truckName={"Joes Tacos"} truckDescription={"Cookie croissant jelly cake carrot cake cotton candy caramels cotton candy. Icing oat souffle. Gingerbread oat cake sweet roll powder jelly-o."}/>

            <Picture text={"https://placekitten.com/400/400"} alt={"placeholder"}/>

            <Button/>

            <SearchItem truckName={"Cake Shop"} truckDescription={"Cookie croissant jelly cake carrot cake cotton candy caramels cotton candy. Icing oat souffle. Gingerbread oat cake sweet roll powder jelly-o."}/>

                <Picture text={"https://placekitten.com/400/400"} alt={"placeholder"}/>

            <Button/>


            <SearchItem truckName={"Honey Bee Ice Cream"} truckDescription={"Cookie croissant jelly cake carrot cake cotton candy caramels cotton candy. Icing oat souffle. Gingerbread oat cake sweet roll powder jelly-o."}/>

                <Picture text={"https://placekitten.com/400/400"} alt={"placeholder"}/>

            <Button/>

            <SearchItem truckName={"Tanya's Soul Food"} truckDescription={"Cookie croissant jelly cake carrot cake cotton candy caramels cotton candy. Icing oat souffle. Gingerbread oat cake sweet roll powder jelly-o."}/>

            <Picture text={"https://placekitten.com/400/400"} alt={"placeholder"}/>

            <Button/>
        </div>)

}