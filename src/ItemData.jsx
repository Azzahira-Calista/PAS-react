import React from "react";
import "./index.css";
import Body from "./ItemBody";
import DeleteButton from "./DeleteButton";

function Data ({nama, date, location, info, id, onDelete}) {
    return(
        <div className="container" style={{display:"flex"}}>
            
            <div className="event-item">
                <DeleteButton id={id} onDelete={onDelete}/>
                <Body date={date} nama={nama} location={location} info={info}/>
            </div>
        </div>
    )
}

export default Data;