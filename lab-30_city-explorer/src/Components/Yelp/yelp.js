import React from 'react';

const Yelp = props => {
    return (
        <section className="container">
            <h3>Here are your local Yelp results</h3>
            <ul className="results">
                {props.data &&
                props.data.map((item, key) => {
                    return (
                        <li className="yelp" key={key}>
                            <a href="{ item.url }">{item.name}</a>
                            <p className="results">
                                The average rating is {item.rating} out of 5 and the average
                                cost is {item.price} out of 4
                            </p>
                            <img src={ item.image_url } alt="Yelp images" />
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

export default Yelp;