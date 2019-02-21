import React from 'react';

const Movies = props => {
    return (
        <section className="container">
            <h3>Here are the results for your local Movies</h3>
            <ul className="results">
                {props.data &&
                props.data.map((item, key) => {
                    return (
                        <li key={key}>
                            <p className="results">
                                <span>{item.title}</span> was relased on {item.released_on}.
                                Out of {item.total_votes} total votes, {item.title} has an
                                average vote of {item.average_votes} and a popularity score of{' '}
                                {item.popularity}.
                            </p>
                            <img src={item.image_url} alt="Movie presentation" />
                            <p className="results">{item.overview}</p>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

export default Movies;