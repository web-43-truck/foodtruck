import React from "react";

type FoodTypeProps = {
    onCuisineSelect: (cuisine: string) => void;
}

export function FoodType({ onCuisineSelect }: FoodTypeProps) {
    return (
        <div>
            <button
                className="hover:bg-accent-focus hover:rounded-xl"
                onClick={() => onCuisineSelect("American")}
            >
                American
            </button>
            <button
                className="hover:bg-accent-focus hover:rounded-xl"
                onClick={() => onCuisineSelect("Asian")}
            >
                Asian
            </button>
            <button
                className="hover:bg-accent-focus hover:rounded-xl"
                onClick={() => onCuisineSelect("Italian")}
            >
                Italian
            </button>
            <button
                className="hover:bg-accent-focus hover:rounded-xl"
                onClick={() => onCuisineSelect("Mexican")}
            >
                Mexican
            </button>
            <button
                className="hover:bg-accent-focus hover:rounded-xl"
                onClick={() => onCuisineSelect("Other")}
            >
                Other
            </button>
        </div>
    );
}


