import React from 'react';

const Section = ({ custom, children }) => {
    return (
        <section className={`flex flex-col ${custom ? custom : "gap-24 lg:gap-48"}`}>
            {children}
        </section>
    );
}

export default Section;
