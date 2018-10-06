import {Main} from '../components/Main'
import React from 'react';
import {User} from '../components/User'
import {connect} from 'react-redux'
import {setName} from '../actions/userActions'
class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Main changeUsername={ () => this.props.setName("Omega")}/>
                <User username={this.props.user.name}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        math: state.math
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setName: (name) => {
            dispatch(setName(name));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);