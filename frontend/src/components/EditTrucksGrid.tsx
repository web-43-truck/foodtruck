import {SearchItem} from "@/components/SearchItem";
import {Picture} from "@/components/Picture";
import EditButton from "@/components/button";
import CheckBox from "@/components/checkbox";

export function EditTrucksGrid() {
    return (

        <div className="grid grid-cols-3 gap-3  items-center group md:lg:xl:border-r md:lg:xl:border-b mt-4 text-gray-950 mb-2 py-2 px-2 h-60 text-sm">


            <SearchItem truck={}/>

            <Picture text={"https://placekitten.com/400/400"} alt={"placeholder"}/>

            <EditButton/>


            <SearchItem truck={}/>

            <Picture text={"https://placekitten.com/400/400"} alt={"placeholder"}/>

            <EditButton/>

            <SearchItem truck={}/>

            <Picture text={"https://placekitten.com/400/400"} alt={"placeholder"}/>

            <EditButton/>

            <SearchItem truck={}/>

            <Picture text={"https://placekitten.com/400/400"} alt={"placeholder"}/>

            <CheckBox/>
        <div/>
        )
}