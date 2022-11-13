import React from "react";
import classes from './Select.module.css'

interface SelectProps {
    onChange?: ()=>void;
    id: string;
    options: Array<string>
}

export const Select: React.FC<SelectProps> = ({ onChange, id, options}) => (
    <div className={classes.Select}>
        <select
            onChange={onChange}
            data-id={id}
            size={1}
        >
            {options.map(( option, id ) => {
                return (
                    <option
                        value={option}
                        key={id}
                    >
                        {option}
                    </option>
                )
            })}
        </select>
    </div>
)
