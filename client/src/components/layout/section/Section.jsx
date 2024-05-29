import React from 'react';

const Section = ({ custom, children }) => {
    return (
        <section className={`${custom ? custom : ""} flex flex-col gap-12 lg:gap-24`}>
            {children}
        </section>
    );
}

export default Section;
