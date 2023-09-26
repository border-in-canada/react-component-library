import React from "react";
import "./Input.css";

export interface InputProps {
    label: string;
}

const Input = (props: InputProps) => {
    return (
        <div className="input-box">
            <label>
                {props.label}
                <input />
            </label>
        </div>
    )
};

export default Input;