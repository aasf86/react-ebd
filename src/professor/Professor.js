import React, { Component } from 'react';
import Nav from './Provessor.nav';

class ProfessorCrud extends Component {
    state = {}
    render() { 
        return (
           <div>   
               <Nav /> 
               <div className="card-body">                
                    <form>
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                        </div>
                        <div className="form-check">
                            <label className="form-check-label">
                            <input type="checkbox" className="form-check-input"/>
                            Check me out
                            </label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>           
           </div>
          );
    }
}

class ProfessorLista extends Component {
    state = {}
    render() { 
        return (
           <div>   
               <Nav /> 
               <div className="card-body">                
                    <form>
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                        </div>
                        <div className="form-check">
                            <label className="form-check-label">
                            <input type="checkbox" className="form-check-input"/>
                            Check me out
                            </label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>           
           </div>
          );
    }
}

export { ProfessorCrud, ProfessorLista };