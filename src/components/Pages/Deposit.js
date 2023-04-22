import React from 'react';
import { useState, useEffect } from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import Container from 'react-bootstrap/Container';
import {UserContext, currentUserContext} from 'react';




function Deposit() {
  const [depositAmount, setDepositAmount] = useState('');
  const [accountBalance, setAccountBalance] = useState(0); // initial balance of $0


  const balance = (accountBalance);
 
console.log(balance)

localStorage.setItem('balance', JSON.stringify(balance))


const localBalances = localStorage.getItem('balance')
const jsonBalance = JSON.parse(localBalances)



const total = (accountBalance + depositAmount)

  const handleDeposit = (event) => {
    event.preventDefault();
    setAccountBalance(total);
    localStorage.setItem('depositAmount', depositAmount);
    localStorage.setItem('accountBalance', total);
    alert(`Deposit successful. New balance: $${total}`);
  };

  
  const localBalance = localStorage.getItem('accountBalance');

console.log({depositAmount}, {accountBalance} );



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
              Account Balance: ${jsonBalance}
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

/* setAccountBalance(newAmount);
    alert(`Deposit successful. New balance: $${total}`);*/
















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