import React, {Component} from 'react';
import './twitter.container.css';
import {injector} from 'react-services-injector';
import Twitt from "./twitt/twitt.component";

class TwitterContainer extends Component {
    TwitterService;
    subscription;

    constructor() {
        super();
        this.state = {tweets:[]};
    }

    componentWillMount() {
        this.TwitterService = this.services.TwitterService;
        this.subscription = this.TwitterService.getTwitterLine().subscribe((data) => {
            this.setState({tweets:data});
        });
    }

    componentWillUnmount() {
        this.subscription.unsubscribe();
    }

    render() {
        return (
            <div className="twitter_container">
                {this.state.tweets.map((item,id)=>{
                    return <Twitt key={id} data={item}></Twitt>
                })}
            </div>
        );
    }
}

export default injector.connect(TwitterContainer, {
    toRender: ['TwitterService']
});