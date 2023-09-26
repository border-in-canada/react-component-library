import React from "react";

export interface InputProps {
    label: string;
}

const Input = (props: InputProps) => {
    return <input>{props.label}</input>;
};

export default Input;