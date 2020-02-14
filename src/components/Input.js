import React from "react";

function Input(props) {
  return (
    <div className="control-group">
      <div className="form-group">
        <label htmlFor="">{props.label}</label>
        <input type={props.type} 
               name={props.name}
               className="form-control" 
               value={props.value}
               onChange={props.change}
               placeholder={props.placeholder}
               required={props.required}
        />
      </div>
    </div>
  );
}

export default Input;
