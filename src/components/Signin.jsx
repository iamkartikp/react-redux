import React, { Component } from 'react';

class Signin extends Component {
    render() {
        return (
            <div className="signin">
                <div className="entry-popup">
                    <i className="fa fa-times" />
                    <h1>Welcome Back!</h1>
                    <form className="entry-form">
                        <input type="text" placeholder="Enter Username" />
                        <input type="password" placeholder="Enter Password" />
                        <button type="submit">Sign in</button>
                    </form>
                </div>   
            </div>
        )
    }
}

export default Signin;
