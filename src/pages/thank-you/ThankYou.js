import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import "../../assets/card-component.css";
import "../../assets/thank-you.css"
import illustration from "../../assets/illustration-thank-you.svg"

export default function ThankYou(){
    const location = useLocation();

    if (!location.state) return <Navigate to="/" />
    

    return (<div className="card" id="thank-you">
        <img src={illustration} id="illustration" alt=""></img>
        <div id="selection">You selected {location.state.rating} out of 5</div>
        <h1>Thank you!</h1>
        <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
    </div>)
}