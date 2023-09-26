import React from "react";
import { useState } from 'react';
import "./Input.css";

export interface InputProps {
    label: string;
    name: string;
    required?: boolean;
}

const Input = ({ label, name, required = false }: InputProps) => {
    const [inputValue, setInputValue] = useState('');

    return (
        <div className="input-box">
            <label>
                {label}
                <input
                    name={name}
                    required={required}
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                />
            </label>
        </div>
    )
};

export default Input;