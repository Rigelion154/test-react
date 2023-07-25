import React, {InputHTMLAttributes} from 'react';

const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
    const { className } = props;
    return (
        <input {...props} className={`px-2 py-1 rounded-lg border-primary border-2 hover:bg-primary-light ${className ? className : ''}`}/>
    );
};

export default Input;