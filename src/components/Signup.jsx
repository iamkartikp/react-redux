import React, { Component } from 'react';

class Signup extends Component {
    render() {
        return (
            <div className="signup">
                <div className="entry-popup">
                    <i className="fa fa-times" />
                    <h1>Create Your Account</h1>
                    <form className="entry-form">
                        <div className="entry-row">
                            <input type="text" placeholder="Email" />
                            <input type="text" placeholder="Username" />
                        </div>
                        <input type="password" placeholder="Password" />
                        <input type="password" placeholder="Confirm Password" />
                        <button type="submit">Sign up</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Signup;