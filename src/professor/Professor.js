import React, { Component } from 'react';
import Nav from './Provessor.nav';

class ProfessorCrud extends Component {
    state = {}
    render() { 
        return (
           <div>   
               <Nav {...this.props}/> 
               <hr/>
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
               <Nav {...this.props}/>
               <hr/>
               <form>
               <table className="table table-hover table-striped table-dark">
                 <thead>
                   <tr>
                     <th scope="col">#</th>
                     <th scope="col">First Name</th>
                     <th scope="col">Last Name</th>
                     <th scope="col">Username</th>
                   </tr>
                 </thead>
                 <tbody>
                   <tr>
                     <th scope="row">1</th>
                     <td>Mark</td>
                     <td>Otto</td>
                     <td>@mdo</td>
                   </tr>
                   <tr>
                     <th scope="row">2</th>
                     <td>Jacob</td>
                     <td>Thornton</td>
                     <td>@fat</td>
                   </tr>
                   <tr>
                     <th scope="row">3</th>
                     <td colSpan="2">Larry the Bird</td>
                     <td>@twitter</td>
                   </tr>
                   <tr>
                     <th scope="row">1</th>
                     <td>Mark</td>
                     <td>Otto</td>
                     <td>@mdo</td>
                   </tr>
                   <tr>
                     <th scope="row">2</th>
                     <td>Jacob</td>
                     <td>Thornton</td>
                     <td>@fat</td>
                   </tr>
                   <tr>
                     <th scope="row">3</th>
                     <td colSpan="2">Larry the Bird</td>
                     <td>@twitter</td>
                   </tr>
                   <tr>
                     <th scope="row">1</th>
                     <td>Mark</td>
                     <td>Otto</td>
                     <td>@mdo</td>
                   </tr>
                   <tr>
                     <th scope="row">2</th>
                     <td>Jacob</td>
                     <td>Thornton</td>
                     <td>@fat</td>
                   </tr>
                   <tr>
                     <th scope="row">3</th>
                     <td colSpan="2">Larry the Bird</td>
                     <td>@twitter</td>
                   </tr>
                   <tr>
                     <th scope="row">1</th>
                     <td>Mark</td>
                     <td>Otto</td>
                     <td>@mdo</td>
                   </tr>
                   <tr>
                     <th scope="row">2</th>
                     <td>Jacob</td>
                     <td>Thornton</td>
                     <td>@fat</td>
                   </tr>
                   <tr>
                     <th scope="row">3</th>
                     <td colSpan="2">Larry the Bird</td>
                     <td>@twitter</td>
                   </tr>            
                 </tbody>
               </table>
               </form>
            </div>
          );
    }
}

export { ProfessorCrud, ProfessorLista };