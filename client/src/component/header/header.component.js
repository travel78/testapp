import React, { Component } from 'react';

import './header.component.css';
import findAndPushTwitterLine from '../../shared/service/twitter.service';


export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {name: ''};
        this.onLoadTwitts = this.onLoadTwitts.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    onLoadTwitts() {
        if (this.state.name.length > 1) {
            findAndPushTwitterLine(this.state.name);
            this.setState({name: ''});
        }
    }

    handleChange(event) {
        this.setState({name: event.target.value});
    }

    render() {
        return (
            <header className='header'>
                <h1>Give me the best Name</h1>
                <div className='search_block'>
                    <input type='text' value={this.state.name} onChange={this.handleChange}
                           placeholder='Enter here username'/>
                    <button onClick={this.onLoadTwitts} disabled={this.state.name.length < 2}>Load twitts</button>
                </div>
            </header>
        );
    }
}