import React from "react";

type ImagesProps = {
    text: string,
    alt: string
}
export function Picture(props: ImagesProps) {
    const {text, alt} = props
    return (
        <div >
            <img src={text} alt={alt} className="rounded-2xl w-80 h-96"/>
        </div>
    )
}