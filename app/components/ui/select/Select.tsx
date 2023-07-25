import React from 'react';
import {TypeSelect} from "@/app/types/types";

const Select = ({options, defaultValue, value, onChange} : TypeSelect) => {
    return (
        <select
            value={value}
            onChange={event => onChange(event.target.value)}
            className='w-1/5 px-3 py-1 rounded-lg border-primary border-2 hover:bg-primary-light'
        >
            <option disabled value="">{defaultValue}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default Select;