import React, {useEffect, useState} from "react";
import "../../assets/rating-button.css";

export default function RatingButton({onClick, rating, currentRating}){
    const [style, setStyle] = useState({});

    useEffect(() => {
        if (currentRating === rating) {
            setStyle({
                background: "#FC7614",
                color: "white"
            });
        } else {
            setStyle({})
        }
    }, [currentRating, rating])

    return (
        <button style={style} onClick={() => onClick(rating)} className="rating-button"> {rating} </button>
    )
}