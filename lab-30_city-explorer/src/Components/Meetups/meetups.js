import React from 'react';

const Meetups = props => {
    return (
        <section className="container">
            <h3>Here are your results for your local Meetups</h3>
            <ul className="results">
                {props.data &&
                props.data.map((item, key) => {
                    return (
                        <li key={key}>
                            <a href="{ item.link }">{item.name}</a>
                            <p className="results">Hosted by: {item.host}</p>
                            <p className="results">Created on: {item.creation_date}</p>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

export default Meetups;