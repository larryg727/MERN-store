import React, { Component } from 'react';
import Products from './components/Prouducts';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/Home';
import Admin from './components/Admin';
import NotFound from './components/NotFound';
import Footer from './components/Footer';

class App extends Component {
    state = {
        isAdmin: true
    };

    render() {
        return (
            <Router>
                <div>
                    <Navbar isAdmin={this.state.isAdmin} />
                    <div className="bodyContainer">
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/products" component={Products} />
                            {this.state.isAdmin ? <Route path="/admin" component={Admin} /> : null}

                            <Route component={NotFound} />
                        </Switch>
                    </div>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;
