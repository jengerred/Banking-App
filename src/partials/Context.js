import { useState } from "react";
import { useNavigate, useLocation} from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import React from 'react';
import {UserContext, currentUserContext} from 'react';
import {Card, CardBody, } from 'reactstrap';







function CardBootstrap(props) {

    const navigate = useNavigate();
    const location = useLocation();

    let { from } = location.state || { from: {pathname: '/'} }

    const localUsers = localStorage.getItem('user')
    const jsonUser = JSON.parse(localUsers)


   
    return (
        <Card>
          
            <CardBody className="card-body">
            
            <Table striped bordered hover>
   
      <tbody>
        <tr>
          
          <td>{localUsers}</td>
       
        </tr>
        </tbody>
    </Table>
            </CardBody>
        </Card>
    );
}
const contextExports = {
    CardBootstrap,
    UserContext,
    currentUserContext
}
export default CardBootstrap;




                   /* <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Account Type</th>
                    <th>Account Balance</th>
                  </tr>
                  */