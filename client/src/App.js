import React, {Component} from 'react';
import './App.css';
import Header from "./component/header/header.component";
import TwitterContainer from "./component/twitterContainer/twitter.container";

import {injector} from 'react-services-injector';
import services from './shared/service/services';

injector.register(services);

class App extends Component {
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
