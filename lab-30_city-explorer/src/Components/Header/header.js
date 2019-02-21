import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header>
                <h1>City Explorer</h1>
                <label>WHERE WOULD YOU LIKE TO EXPLORE?</label>
                <p>
                    Enter any City and State below to learn about local weather, events,
                    restaurants, movies being shown, and hiking areas.
                </p>
            </header>
        );
    }
}

export default Header;