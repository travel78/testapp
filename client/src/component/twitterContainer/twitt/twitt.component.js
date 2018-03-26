import React, {Component} from 'react';
import Like from 'react-icons/lib/fa/heart-o';
import Retwitt from 'react-icons/lib/fa/share-square-o';

import './twitt.component.css';

export default class Twitt extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="twitt">
                <div dangerouslySetInnerHTML={{__html: this.props.data.source}}></div>
                <p>{this.props.data.text}</p>
                <img src={this.props.data.foto} alt=""/>
                <div className="twitt_fotter">
                    <span><Like/></span>
                    <span>{this.props.data.favorite_count}</span>
                    <span><Retwitt/></span>
                    <span>{this.props.data.retweet_count}</span>
                </div>
            </div>
        );
    }
}