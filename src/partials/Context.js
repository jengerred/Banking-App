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

    // user data
    const localUsers = localStorage.getItem('username')
    const jsonUser = JSON.parse(localUsers)

    const localMails = localStorage.getItem('email')
    const jsonMail = JSON.parse(localMails)

    const localPasses = localStorage.getItem('password')
    const jsonPass = JSON.parse(localPasses)

    const localAccountTypes = localStorage.getItem('type')
    const jsonAccountType = JSON.parse(localAccountTypes)



    // user balance
const localBalances = localStorage.getItem('balance')
const jsonBalance = JSON.parse(localBalances)



   
    return (
        <Card>
          
            <CardBody className="card-body">
            
            <Table striped bordered hover>
   
      <tbody>
        <tr>
          
          <td>Username: {localUsers}</td>
          <td>Email: {localMails}</td>
          <td>Password: {localPasses}</td>
          <td>Account type: {localAccountTypes}</td>
          <td>Balance: {localBalances}</td>
        
       
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