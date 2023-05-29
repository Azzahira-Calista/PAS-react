import React from "react";
import './index.css'

function DeleteButton ({id, onDelete}){
    return(
        <button className="btnDelete" onClick={() => onDelete(id)}> x </button>
    )
}

export default DeleteButton;
