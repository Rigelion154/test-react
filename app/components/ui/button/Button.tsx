import React from 'react';

type ButtonProps = {
    children: React.ReactNode;
    className?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({className, children, ...props}: ButtonProps) => {
    return (
        <button {...props} className={`border-2 border-primary px-2 py-1 rounded-lg hover:bg-primary hover:text-white transition duration-300  ${className ? className : ''}`}>
            {children}
        </button>
    );
};

export default Button;