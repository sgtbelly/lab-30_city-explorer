import React from 'react';

export default function Form(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <input className="inputBox"
                type="text"
                name="city"
                onChange={props.handleChange}
                placeholder="Please Enter Location"
            />
            <br>
            </br>
            <button type="submit">Find out your local information</button>
        </form>
    );
}