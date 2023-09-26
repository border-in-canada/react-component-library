import React from "react";

export interface InputProps {
    label: string;
}

const Input = (props: InputProps) => {
    return <label>{props.label}<input /></label>;
};

export default Input;