import React, { Component } from 'react';
import { HashRouter, BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from "./components/layouts/Navbar";
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateProject from './components/projects/CreateProject'
// CONTAINER COMPONENT
// holds state / hooks state from internet and feeds to UI COMPONENT (like navbar)
class App extends Component {
    render() {
        return (
            <HashRouter>
                <div className="App">
                    <Navbar />
                    <Switch>
                      <Route exact path='/' component={Dashboard}/>
                      <Route path='/project/:id' component={ProjectDetails}/>
                      <Route path='/signin' component={SignIn}/>
                      <Route path='/signup' component={SignUp}/>
                      <Route path='/create' component={CreateProject}/>
                    </Switch>
                </div>
            </HashRouter>

        );
    }
}

export default App;