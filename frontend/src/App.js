import './App.css';
import './semantic/dist/semantic.min.css';

import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { Container } from 'semantic-ui-react';

import Home from "./pages/Home";
import Workout from './pages/Workout';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Editor from './pages/Editor/Editor';
import Account from './pages/Account/index';

import { Navbar, Footer } from './pages/Layout';
import Record from "./pages/Record";
import PrivateRoute from "./pages/Utility/PrivateRoute";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        user: state.user,
        authenticated: state.authenticated
    }
}

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <header className="App-header">
                <Navbar/>
                <Container style={{ marginTop: '5em' }}>
                    <Route exact path="/" component={Home}/>
                    <Route path="/workout/:username/:name" component={Workout}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/register" component={Register}/>

                    <PrivateRoute exact path="/dashboard" authenticated={this.props.authenticated} component={Dashboard}/>
                    <PrivateRoute exact path="/create" authenticated={this.props.authenticated} component={Editor}/>
                    <PrivateRoute exact path="/account" authenticated={this.props.authenticated} component={Account}/>
                    <PrivateRoute path="/record/:username/:name" authenticated={this.props.authenticated} component={Record}/>
                </Container>
                <Footer />
            </header>
        </BrowserRouter>
    );
  }
}

export default connect(mapStateToProps, null)(App);
