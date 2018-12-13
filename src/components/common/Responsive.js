import React from 'react';

const Responsive = ({ children, className }) => {
    return (
        <section
            className={`Responsive ${
                className ? className : ''
            }`}
        >
            {children}
        </section>
    );
};

export default Responsive;
