import React, { Component } from 'react';
import { StateProvider } from 'react-state-provider';

import './App.css';
import Header from './component/header/header.component';
import TwitterContainer from './component/twitterContainer/twitter.container';


class App extends Component {

    componentWillMount() {
        StateProvider.createState('twitts', {twitts: []});
        StateProvider.createState('spinner', {spinner: false});
    }

    componentWillUnmount() {
        StateProvider.destroy('twitts');
        StateProvider.destroy('spinner');
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
