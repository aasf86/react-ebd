import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Nav extends Component {
    state = {};
    
    constructor(props){
        super(props);
        this.state = {
            routeState: props.location.pathname
        }        
    }
    
    clickLink(route){
        this.setState({routeState: route});
    }
    render(){
        console.log('state', this.state);
        return (
        <div>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <Link className={this.state.routeState === '/professor/lista' ? 'nav-link active' : 'nav-link'} to="/professor/lista" onClick={e => this.clickLink('/professor/lista')}><strong>Lista</strong></Link>
                </li>
                <li className="nav-item">
                    <Link className={this.state.routeState === '/professor/cadastro' ? 'nav-link active' : 'nav-link'} to="/professor/cadastro" onClick={e => this.clickLink('/professor/cadastro')}><strong>Cadastro</strong></Link>
                </li>
            </ul>
        </div>
        );
    }
}

export default Nav;

