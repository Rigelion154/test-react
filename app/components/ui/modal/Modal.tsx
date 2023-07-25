import React from 'react';
import css from './Modal.module.css'

const Modal = ({children, visible, setVisible} : {children: React.ReactNode, visible: boolean, setVisible: Function}) => {

    const cssClasses = [css.modal]

    if (visible) {
        cssClasses.push(css.active);
    };

    return (
        <div className={cssClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={css.modal__content} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;