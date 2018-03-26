import React, { Component } from 'react';
import { StateProvider } from 'react-state-provider';

import './App.css';
import Header from './component/header/header.component';
import TwitterContainer from './component/twitterContainer/twitter.container';


class App extends Component {

    componentWillMount() {
        this.counterState = StateProvider.createState('twitts', {twitts: []});
    }

    componentWillUnmount() {
        StateProvider.destroy('twitts');
    }

    render() {
        return (
            <div className="App">
                <Header></Header>
                <TwitterContainer></TwitterContainer>
            </div>
        );
    }
}

export default App;
