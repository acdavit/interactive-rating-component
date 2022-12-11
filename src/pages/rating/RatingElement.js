import React, {useState} from "react";
import RatingButton from "./RatingButton";
import Submit from "./Submit";
import "../../assets/rating-element.css";
import "../../assets/card-component.css";
import star from "../../assets/icon-star.svg";


export default function RatingElement(){
    const [rating, setRating] = useState(0);

    function ratingButtonClickHandler(rating){
        setRating(rating);
    }

    return (<div className="card" id="rate">
        <img src={star} id="star" alt=""></img>
        <h1>How did we do?</h1>
        <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
        
        <div id="buttons">
            {
                [...Array(5)].map((x, i) =>
                    <RatingButton onClick={ratingButtonClickHandler} rating={i+1} currentRating={rating} />
                )
            }
        </div>

        <Submit currentRating={rating} />        
    </div>)
}