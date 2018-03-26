import React, { Component } from 'react';
import { StateProvider } from 'react-state-provider';
import { RingLoader } from 'react-spinners';

import './twitter.container.css';
import Twitt from './twitt/twitt.component';

export default class TwitterContainer extends Component {

    constructor() {
        super();
        this.state = {twitts: [],spinner: false};
        this.twittsState = StateProvider.getState('twitts');
        this.spinnerState = StateProvider.getState('spinner');
    }

    componentDidMount() {
        this.twittsState.observe('twitts', (twitts) => {
            this.setState({twitts: twitts});
        });
        this.spinnerState.observe('spinner', (spinner) => {
            this.setState({spinner: spinner});
        });
    }


    componentWillUnmount() {
        this.twittsState.destroy('twitts');
        this.spinnerState.destroy('spinner');
    }

    render() {
        return (
            <div className="twitter_container">
                {this.state.twitts.map((item, id) => {
                    return <Twitt key={id} data={item}></Twitt>
                })}
                <RingLoader
                    color={'#123abc'}
                    loading={this.state.spinner}
                />
            </div>
        );
    }
}