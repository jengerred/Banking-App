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
//const localBalances = localStorage.getItem('balance')
//const jsonBalance = JSON.parse(localBalances)

const localStatuses = localStorage.getItem('status')
const jsonStatus = JSON.parse(localStatuses)

const localAccountBalances = localStorage.getItem('accountBalance')
const jsonAccountBalance = JSON.parse(localAccountBalances)

const localTotals = localStorage.getItem('total')
const jsonTotal = JSON.parse(localTotals)


const localWithdrawals = localStorage.getItem('withdrawalAmount')
const jsonWithdrawal = JSON.parse(localWithdrawals)

var balances=JSON.parse(localStorage.getItem("balance"));
   
    return (
        <Card>
          
            <CardBody className="card-body">
            
            <Table striped bordered hover responsive="sm">
      <thead>
        <tr>
          <th>Username: </th>
          <th>Email: </th>
          <th>Password:</th>
          <th>Account type:</th>
          <th>Total Deposits:</th>
          <th>Balance: </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>{localUsers}</td>
          <td>{localMails}</td>
          <td> {localPasses}</td>
          <td> {localAccountTypes}</td>
          <td> ${balances}</td>
          <td>${localAccountBalances}</td>       
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