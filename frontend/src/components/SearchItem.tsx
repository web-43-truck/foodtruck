export function SearchItem(searchItemDescriptors: SearchItemDescriptors){
    const {truckName, truckDescription} = searchItemDescriptors
    return (
        <>
            <h2>{truckName}</h2>
            <p>{truckDescription}</p>
        </>
    )
}


type SearchItemDescriptors = {
    truckName: string,
    truckDescription: string
}

