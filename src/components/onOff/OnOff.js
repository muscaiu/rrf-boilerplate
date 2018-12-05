import React, { Component } from 'react'
import { connect } from 'react-redux';

import { login } from '../../store/actions/authActions';

class OnOff extends Component {

    handleClick = () => {
        console.log('onoff');
        const credentials = {
            email: 'admin@yahoo.com',
            password: 'qwer123'
        }
        this.props.login(credentials)
    }

    render() {
        return (
            <div className="switch">
                <label>
                    Off
                <input onClick={this.handleClick} type="checkbox" />
                    <span className="lever"></span>
                    On
                </label>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (creds) => dispatch(login(creds))
    }
}


export default connect(null, mapDispatchToProps)(OnOff);

