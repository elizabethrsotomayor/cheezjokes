import React, { Component } from 'react';
import axios from 'axios';
const API_URL = "https://icanhazdadjoke.com/";

class Joke extends Component {
    constructor(props) {
        super(props);
        this.state = {
            joke: ""
        }
    }

    async componentDidMount() {
        let joke = await axios.get(`${API_URL}`,  {
            headers: {
                'Accept': 'application/json'
            }
        });
        this.setState({ joke: joke.data.joke })
    }

    render() {
        return (
        <div>
            <h1>{this.state.joke}</h1>
        </div>
        );
    }
}

export default Joke;