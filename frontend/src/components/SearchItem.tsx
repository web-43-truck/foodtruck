export function SearchItem(searchItemDescriptors: SearchItemDescriptors){
    const {truckName, truckDescription} = searchItemDescriptors
    return (
        <>
            <section className="py-6 px-20">
                <h2 className="text-2xl underline text-accent-content">{truckName}</h2>
                <p className="text-lg">{truckDescription}</p>
            </section>
        </>
    )
}


type SearchItemDescriptors = {
    truckName: string,
    truckDescription: string
}

