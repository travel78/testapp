import React, { Component } from 'react';
import { StateProvider } from 'react-state-provider';

import './twitter.container.css';
import Twitt from './twitt/twitt.component';

export default class TwitterContainer extends Component {

    constructor() {
        super();
        this.state = {twitts: []};
        this.twittsState = StateProvider.getState('twitts');
    }

    componentDidMount() {
        this.twittsState.observe('twitts', (twitts) => {
            console.log(twitts);
            this.setState({twitts: twitts});
        });
    }


    componentWillUnmount() {
        this.twittsState.destroy('twitts');
    }

    render() {
        return (
            <div className="twitter_container">
                {this.state.twitts.map((item, id) => {
                    return <Twitt key={id} data={item}></Twitt>
                })}
            </div>
        );
    }
}