import React from "react";
import "./index.css";
import Body from "./ItemBody";
import DeleteButton from "./DeleteButton";

function Data ({name, date, location, info, id, onDelete}) {
    return(
        <div className="container" style={{display:"flex"}}>
            
            <div className="event-item">
                <DeleteButton id={id} onDelete={onDelete}/>
                <Body date={date} name={name} location={location} info={info}/>
            </div>
            {/* checlist button */}
        </div>
    )
}

export default Data;