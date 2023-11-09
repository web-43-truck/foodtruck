import {SearchItem} from "@/components/SearchItem";
import {Picture} from "@/components/Picture";
import EditButton from "@/components/button";

export function EditTrucksGrid() {
    return (
        <div className="grid grid-cols-3 items-center">
            <SearchItem truckName={"Joe's Tacos"} truckDescription={"Cookie croissant jelly cake carrot cake cotton candy caramels cotton candy. Icing oat souffle. Gingerbread oat cake sweet roll powder jelly-o."}/>

            <Picture text={"https://placekitten.com/400/400"} alt={"placeholder"}/>

            <EditButton/>

            <SearchItem truckName={"Cake Shop"} truckDescription={"Cookie croissant jelly cake carrot cake cotton candy caramels cotton candy. Icing oat souffle. Gingerbread oat cake sweet roll powder jelly-o."}/>

            <EditButton/>

            <Picture text={"https://placekitten.com/400/400"} alt={"placeholder"}/>

            <SearchItem truckName={"Tanya's Soul Food"} truckDescription={"Cookie croissant jelly cake carrot cake cotton candy caramels cotton candy. Icing oat souffle. Gingerbread oat cake sweet roll powder jelly-o."}/>

            <Picture text={"https://placekitten.com/400/400"} alt={"placeholder"}/>

            <EditButton/>
        </div>
    )
}

