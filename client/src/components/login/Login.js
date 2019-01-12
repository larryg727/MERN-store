import React, { Component } from 'react';

class Login extends Component {
    state = {
        success: false,
        error: false
    };

    usernameRef = React.createRef();
    passwordRef = React.createRef();

    handleLoginSubmit = e => {
        e.preventDefault();
        fetch('/api/user/authenticate', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: this.usernameRef.current.value,
                password: this.passwordRef.current.value
            })
        })
            .then(response => response.json())
            .then(result => {
                console.log(result);
                if (result) {
                    this.setState({ success: true });
                } else {
                    this.setState({ error: true });
                }
            });
    };

    render() {
        return (
            <div>
                <h2>Login</h2>
                {this.state.error ? <span className="error">Login Failed. Please try again.</span> : null}
                <form onSubmit={this.handleLoginSubmit}>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" className="formInput" ref={this.usernameRef} required />

                    <label htmlFor="password">password</label>
                    <input type="password" name="password" className="formInput" ref={this.passwordRef} required />

                    <button type="submit">Login</button>
                </form>
            </div>
        );
    }
}

export default Login;
