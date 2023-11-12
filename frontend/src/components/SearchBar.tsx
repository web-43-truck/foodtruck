'use client'

import { useRouter } from "next/navigation";

type SearchBarProps = {
    initialSearch: string
}

export function SearchBar({initialSearch}: SearchBarProps){
    const router = useRouter()
    const handleSearchChange =(event: React.ChangeEvent<HTMLInputElement>) => {
        router.push(`/?name=${event.target.value}`)
    }
    return(
        <>
            <div className={"grid align-self-center px-6 md:px-0"}>
            <label className="label">
                <span className="label-text">Search For A Food Truck</span>
            </label>
            <input
                type={"text"}
                placeholder={"Type here"}
                className={"input input-bordered w-2xl"}
                value={initialSearch}
                onChange={handleSearchChange}
            />
        </div>
        </>
    )
}