import React from "react";
import Data from "./ItemData";
import './index.css'

function List ({ dataList, onDelete}) {
    return(
        <div className="data-list">
            {
                dataList.length === 0 ? (
                    <p className="no-data" align="center"> No data available !! </p>
                ) : (
                    dataList.map ((event) => (
                        <Data
                        key={event.id}
                        id={event.id}
                        onDelete={onDelete}
                        {...event}
                        />  
                      ))
                    )
            }
        </div>
    )
}

export default List;