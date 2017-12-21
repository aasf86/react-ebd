import React, { Component } from 'react';
import { Switch, Route,  } from 'react-router-dom';
//import { ProfessorLista } from './professor/Professor';
import ProferssorRouter from './professor/Professor.router';

class AppRouter extends Component {
    state = {}
    render() { 
        return (
            <div>
                <Switch>
                    <Route exact path="/" />
                </Switch>
                <ProferssorRouter />
            </div>
         );
    }
}
 
export default AppRouter;
