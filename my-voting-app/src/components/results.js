import React from 'react'

export default class Results extends React.Component {

    constructor(props){
        super(props);
        this.store = this.props.store;   
    }

    votesAngular() {
        if (this.store.getState().angular) {
            return (this.store.getState().angular / (this.store.getState().angular + this.store.getState().react  + this.store.getState().vue) ) ;
        } else {
            return 0;
        }
    }

    votesReact() {
        if (this.store.getState().react) {
            return(this.store.getState().react / (this.store.getState().angular + this.store.getState().react + this.store.getState().vue) )
        } else {
            return 0;
        }
    }

    votesVue() {
        if (this.store.getState().vue) {
            return(this.store.getState().vue / (this.store.getState().angular + this.store.getState().react + this.store.getState().vue))
        } else {
            return 0;
        }
    }

    votesAngularStyle() {
        return {
            width: this.votesAngular() + '%'
        }
    }

    votesReactStyle() {
        return {
            width: this.votesReact() + '%'
        }
    }

    votesVueStyle() {
        return {
            width: this.votesVue() + '%'
        }
    }

    render() {
        return (
            <div>
                <span className="label label-danger">Angular: {this.votesAngular().toFixed(2) + '%'}</span>
                <div className="progress progress-striped active">
                    <div className="progress-bar progress-bar-danger" style={this.votesAngularStyle()}></div>
                </div>

                 <span className="label label-info">React: {this.votesReact().toFixed(2) + '%'}</span>
                <div className="progress progress-striped active">
                    <div className="progress-bar progress-bar-info" style={this.votesReactStyle()}></div>
                </div>

                 <span className="label label-success">Vue: {this.votesVue().toFixed(2) + '%'}</span>
                <div className="progress progress-striped active">
                    <div className="progress-bar progress-bar-success" style={this.votesVueStyle()}></div>
                </div>
            </div>
        )
    }
}