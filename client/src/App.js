import React, { Component } from 'react';
import Products from './components/products/Prouducts';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home/Home';
import Admin from './components/admin/Admin';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import Register from './components/register/Register';
import Login from './components/login/Login';
import AuthContext from './AuthContext';

class App extends Component {
    state = {
        isAdmin: false,
        isAuthenticated: false,
        token: ''
    };

    init = () => {
        const token = sessionStorage.getItem('token') || '';
        const isAuthenticated = token ? true : false;
        const isAdmin = sessionStorage.getItem('isAdmin') === 'true';
        this.setState({
            token: token,
            isAuthenticated: isAuthenticated,
            isAdmin: isAdmin
        });
    };

    login = auth => {
        console.log(auth);
        sessionStorage.setItem('token', auth.token);
        sessionStorage.setItem('isAdmin', auth.isAdmin);
        this.init();
    };

    componentDidMount() {
        this.init();
    }

    render() {
        return (
            <Router>
                <AuthContext.Provider value={this.state}>
                    <div>
                        <Navbar isAdmin={this.state.isAdmin} />
                        <div className="bodyContainer">
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route path="/products" component={Products} />
                                {this.state.isAdmin ? <Route path="/admin" component={Admin} /> : null}
                                <Route path="/register" component={Register} />
                                <Route path="/login" render={props => <Login {...props} login={this.login} />} />
                                <Route component={NotFound} />
                            </Switch>
                        </div>
                        <Footer />
                    </div>
                </AuthContext.Provider>
            </Router>
        );
    }
}

export default App;
