import React from 'react';
import { useState } from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import Container from 'react-bootstrap/Container';
import {UserContext, currentUserContext} from 'react';




function Deposit() {
  const [depositAmount, setDepositAmount] = useState('');
  const [accountBalance, setAccountBalance] = useState(0); // initial balance of $0


  const balance = {
accountBalance
  }
console.log(balance)

window.localStorage.setItem('balance', JSON.stringify(balance))

const deposit = {
  depositAmount : depositAmount
}


window.localStorage.setItem('deposit', JSON.stringify(deposit))

  const handleDeposit = (event) => {
    event.preventDefault();
    setAccountBalance(accountBalance + depositAmount);
    alert(`Deposit successful. New balance: $${accountBalance + depositAmount}`);
  };

console.log({depositAmount}, {accountBalance} );

const localBalances = localStorage.getItem('balance')
const jsonBalance = JSON.parse(localBalances)

  return (
    <>
      <Container className="d-outside-card">
        <Card color="success" className="center-card" style={{ maxWidth: "20rem"}}>
          <CardBody>
            <CardTitle className="d-white-text" tag="h4">
              Deposit Amount
            </CardTitle>
            <hr className="line"></hr>
            <CardSubtitle className="d-white-text">
              Account Balance: ${accountBalance}
            </CardSubtitle>
            <br />

            <form onSubmit={handleDeposit}>
              <input
              className="box"
                type="number"
                width="200"
                name="deposit amount"
                value={depositAmount}
                onChange={(event) => setDepositAmount(Number(event.target.value))}
                placeholder="$ Enter Deposit Amount Here"
              ></input>
              <br/> <br/>
              <input className="submit" type="submit" width="200" value="Submit"></input>
            </form>
          </CardBody>
        </Card>
      </Container>
    </>
  );
}

export default Deposit;






/*import {Card, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

 function Deposit() {
  
  return (
    <>
    <div className="d-outside-card">
      <Card color="success"  className="center-card"   style={{ width: "20rem" }}>
        <CardBody>
          <CardTitle className="d-white-text" tag="h4">Deposit Amount</CardTitle>
          <hr className="line"></hr>
          <CardSubtitle className="d-white-text" >Account Balance $0</CardSubtitle>
          <br/>
      

       <input
         type="number"
         width="200"
         /*onChange={onChange}*/
        /* placeholder="$ Enter Deposit Amount Here"
       ></input>
       <br/> <br/>
       <input
         className="submit"
         type="submit"
         width="200"
         value="Submit"
       ></input>

       /* value="deposit" */ 
    /*  
  </CardBody>
     </Card>
     </div>
      </>
 
         )
        };


export default Deposit;*/