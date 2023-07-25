import React from 'react';

type ContainerProps = {
    children: React.ReactNode;
    className?: string;
};

const Container = ({children, ...props}: ContainerProps) => {
    return (
        <div className={`container m-auto px-4 ${props.className}`}>
            {children}
        </div>
    );
};

export default Container;