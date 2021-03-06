import React from 'react';

const Weather = props => {
    return (
        <section className="container">
            <h3>Here are your local Weather reports</h3>
            <ul className="results">
                {props.data &&
                props.data.map((item, key) => {
                    return (
                        <li key={key}>
                            The forecast for {item.time} is {item.forecast}
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

export default Weather;