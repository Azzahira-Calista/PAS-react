import React from "react";
import Data from "./ItemData";
import './index.css'

function List ({ dataList, onDelete}) {
    return(
        <div className="data-list">
            {
                dataList.length === 0 ? (
                    <p align="center"> No data </p>
                ) : (
                    dataList.map ((event) => (
                        <Data
                        key={event.id}
                        id={event.id}
                        name={event.id}
                        date={event.id}
                        location={event.id}
                        info={event.id}
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