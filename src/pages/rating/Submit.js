import React from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/submit.css"


export default function Submit({currentRating}){
    const navigate = useNavigate();

    function clickHandler(){
        if (!currentRating) return;
        navigate("/thank-you", {
            state: {
                rating: currentRating
            }
        })
    }

    return (
        <button onClick={clickHandler} id="submit"> SUBMIT </button>
    )
}