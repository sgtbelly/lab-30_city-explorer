import React, { Component } from "react";
import Header from "./Components/Header/header.js";
import Form from "./Components/Form/form.js";
import Map from "./Components/Map/map.js";
import Weather from "./Components/Weather/weather.js";
import Yelp from "./Components/Yelp/yelp.js";
import Meetups from "./Components/Meetups/meetups.js";
import Movies from "./Components/Movies/movies.js";
import Trails from "./Components/Hiking/hiking.js";
import "./App.css";

let superagent = require("superagent");

const API = "https://city-explorer-backend.herokuapp.com";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      location: {},
      data: {
        weather: [],
        yelp: [],
        meetups: [],
        movies: [],
        trails: [],
      }
    };
  }

  newCity = e => {
    let city = e.target.value;
    this.setState({ city });
  };

  findCity = async e => {
    e.preventDefault();

    try {
      let location = await this.myLocation();
      let serviceCalls = this.pullData(location);
      let [weather, yelp, meetups, movies, trails] = await Promise.all(
          serviceCalls
      );

      this.setState({
        location: location.body,
        data: {
          weather: weather.body,
          yelp: yelp.body,
          meetups: meetups.body,
          movies: movies.body,
          trails: trails.body
        }
      });
    } catch (e) {
      console.error("Fetch Error", e);
    }
  };

  myLocation = () => {
    return superagent.get(`${API}/location`).query({ data: this.state.city });
  };

  pullData = location => {
    let serviceCalls = [];

    Object.keys(this.state.data).forEach(service => {
      let url = `${API}/${service}`;
      serviceCalls.push(
          superagent
              .get(url)
              .query({ data: location.body })
              .ok(res => true)
      );
    });

    return serviceCalls;
  };

  render() {
    let validLocation = this.state.location && this.state.location.id;

    return (
        <React.Fragment>
          <Header />
          <Form handleChange={this.newCity} handleSubmit={this.findCity} />

          {!validLocation ? null : (
              <React.Fragment>
                <Map location={this.state.location} />

                <div className="column-container">
                  <Weather data={this.state.data.weather} />
                  <Yelp data={this.state.data.yelp} />
                  <Meetups data={this.state.data.meetups} />
                  <Movies data={this.state.data.movies} />
                  <Trails data={this.state.data.trails} />
                </div>
              </React.Fragment>
          )}
        </React.Fragment>
    );
  }
}

export default App;