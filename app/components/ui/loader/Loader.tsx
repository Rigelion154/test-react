import React from 'react';
import cssClass from './Loader.module.css'

const Loader = () => {
    return (
        <div>
            <h2 className='text-center'>Loading...</h2>
            <div className={cssClass.loader}></div>
        </div>

    );
};

export default Loader;