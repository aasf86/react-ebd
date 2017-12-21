import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import { ProfessorCrud, ProfessorLista } from './Professor'

const ProferssorRouter = () => (
    <Switch>
        <Route path="/professor/lista" component={ProfessorLista} />
        <Route path="/professor/cadastro" component={ProfessorCrud} />
        <Redirect from='/professor' to='/professor/lista'/>
    </Switch>  
)

export default ProferssorRouter;