import React from 'react';
import { useState } from 'react';
import styles from "./Input.module.css";

export interface InputProps {
    label: string;
    name: string;
    required?: boolean;
}

const Input = ({ label, name, required = false }: InputProps) => {
    const [inputValue, setInputValue] = useState('');

    return (
        <div className={styles.input}>
            <input className={styles.input}
                id={name}
                name={name}
                placeholder={label}
                required={required}
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
            />
            <label htmlFor={name} className={styles.label}>{label}</label>
        </div>
    )
};

export default Input;