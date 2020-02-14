import React from "react";

function TextArea(props) {
  return (
    <div className="control-group">
      <div className="form-group">
        <label htmlFor="">{props.label}</label>
        <textarea className="form-control" 
            cols={props.cols}
            rows={props.rows}
            value={props.value}
            name={props.name}
            onChange={props.change}
        ></textarea>
      </div>
    </div>
  );
}

export default TextArea;

