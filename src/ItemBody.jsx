import React from "react";
import './index.css'

function Body ({nama, date, location, info}) {
    return(
        <div className="container-event">
            <div className="event-date">{date}</div>
            <div className="event-name">{nama}</div>
            <div className="event-location">📍 {location}</div>
            <div className="event-info">{info}</div>
        </div>
    )
}

export default Body;