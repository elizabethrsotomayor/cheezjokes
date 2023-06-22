import React, { Component } from 'react';
import Joke from './Joke';

class JokeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jokes: [],
        }
    }

    // generateMarkup() {
    //     for(let i = 0; i < 10; i++) {

    //     }
    // }


    render() {
        // let markup = generateMarkup();
        
        return (
            <div>
                <Joke/>
                <Joke/>
                <Joke/>
            </div>

        )
    }
}

export default JokeList