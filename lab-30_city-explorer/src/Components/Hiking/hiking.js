import React from 'react';

const Hiking = props => {
    return (
        <section className="container">
            <h3>Here are your results for your local Hiking Trails</h3>
            <ul className="results">
                {props.data &&
                props.data.map((item, key) => {
                    return (
                        <li key={key}>
                            <p className="results">
                                Hike Name: <a href="{ item.trail_url }">{item.name}</a>,
                                Location: {item.location}, Distance: {item.length} miles
                            </p>
                            <p className="results">
                                On {item.condition_date} at {item.condition_time}, trail
                                conditions were reported as: {item.conditions}
                            </p>
                            <p className="results">
                                This hiking trail has a rating of {item.stars} stars (out of{' '}
                                {item.star_votes} votes)
                            </p>
                            <p className="results">{item.summary}</p>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

export default Hiking;