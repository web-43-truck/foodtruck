import React from "react";

type FoodTypeProps = {
    onCuisineSelect: (cuisine: string) => void;
}

export function FoodType({ onCuisineSelect }: FoodTypeProps) {
    return (
        <ul>
            <li
                className="hover:bg-accent-focus hover:rounded-xl"
                onClick={() => onCuisineSelect("American")}
            >
                American
            </li>
            <li
                className="hover:bg-accent-focus hover:rounded-xl"
                onClick={() => onCuisineSelect("Asian")}
            >
                Asian
            </li>
            <li
                className="hover:bg-accent-focus hover:rounded-xl"
                onClick={() => onCuisineSelect("Italian")}
            >
                Italian
            </li>
            <li
                className="hover:bg-accent-focus hover:rounded-xl"
                onClick={() => onCuisineSelect("Mexican")}
            >
                Mexican
            </li>
            <li
                className="hover:bg-accent-focus hover:rounded-xl"
                onClick={() => onCuisineSelect("Other")}
            >
                Other
            </li>
        </ul>
    );
}


