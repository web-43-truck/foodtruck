export function SearchItem(searchItemDescriptors: SearchItemDescriptors){
    const {truckName, truckDescription} = searchItemDescriptors
    return (
        <>
            <section className="py-6 px-14">
                <h2 className="text-xl underline">{truckName}</h2>
                <p className="text-lg">{truckDescription}</p>
            </section>
        </>
    )
}


type SearchItemDescriptors = {
    truckName: string,
    truckDescription: string
}

