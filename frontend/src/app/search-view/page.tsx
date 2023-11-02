import {NavBar} from "@/components/NavBar";
import {SearchItem} from "@/components/SearchItem";
import {Picture} from "@/components/Picture";

export default function SearchPage(){
    return (
        <>
            <NavBar/>
            <Picture text={"https://placekitten.com/200/300"} alt={"placeholder"}/>
            <section className="container mx-auto">
                <SearchItem truckName={"Joes Tacos"} truckDescription={"Cookie croissant jelly cake carrot cake cotton candy caramels cotton candy. Icing oat cake pie marzipan carrot cake cupcake wafer toffee soufflé. Gingerbread oat cake sweet roll sweet roll powder jelly-o fruitcake sugar plum"}/>
                <SearchItem truckName={"Cake Shop"} truckDescription={"Apple pie danish candy marzipan ice cream ice cream. Gingerbread icing donut sugar plum icing dessert candy canes oat cake macaroon. Dragée caramels candy dessert chupa chups dessert lollipop bonbon. Soufflé tiramisu chocolate cake soufflé pie pastry icing liquorice."}/>
            </section>
        </>
    )
}