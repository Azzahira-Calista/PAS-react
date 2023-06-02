import React from "react";

const CheckedList = ({ item, onCheckChange }) => {
    return (
      <div>
        <input
          type="checkbox"
          checked={item.isChecked}
          onChange={() => onCheckChange(item.id)}
        />
        <label>{item.label}</label>
      </div>
    );
  };
  
  export default CheckedList;