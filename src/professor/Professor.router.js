import React from 'react'
import { Switch, Route } from 'react-router-dom';
import { ProfessorCrud, ProfessorLista } from './Professor'

const ProferssorRouter = () => (
    <Switch>
        <Route path="/professor/lista" component={ProfessorLista} />
        <Route path="/professor/cadastro" component={ProfessorCrud} />
    </Switch>  
)

export default ProferssorRouter;