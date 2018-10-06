import React, { Component } from 'react'

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {createPosts} from '../actions/postActions'

class Postform extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            value:''
         }

         this.onChange = this.onChange.bind(this);
         this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const post ={
            title: this.state.title,
            body: this.state.body
        }
        this.props.createPosts(post);
    }
    render() {
    return (
      <div>
        <h1>Post Form</h1>
        <form onSubmit={this.onSubmit}>
            <div>
                <label>Title: </label>
                <input type="text" value={this.state.title}  name="title" onChange={this.onChange} />
            </div>
            <br/>
            <div>
                <label>Body: </label>
                <textarea name="body" value={this.state.body}  onChange={this.onChange} />
            </div>
            <br/>
            <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

Postform.propTypes = {
    createPosts: PropTypes.func.isRequired
}

export default connect(null, {createPosts})(Postform);