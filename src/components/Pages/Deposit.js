
import { useState } from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";

function Deposit() {
  const [depositAmount, setDepositAmount] = useState();
  const [accountBalance, setAccountBalance] = useState(100); // initial balance of $100

  const handleDeposit = (event) => {
    event.preventDefault();
    setAccountBalance(accountBalance + depositAmount);
    alert(`Deposit successful. New balance: $${accountBalance + depositAmount}`);
  };
console.log({depositAmount}, {accountBalance} );
  return (
    <>
      <div className="d-outside-card">
        <Card color="success" className="center-card" style={{ maxWidth: "20rem" }}>
          <CardBody>
            <CardTitle className="d-white-text" tag="h4">
              Deposit Amount
            </CardTitle>
            <hr className="line"></hr>
            <CardSubtitle className="d-white-text">
              Account Balance ${accountBalance}
            </CardSubtitle>
            <br />

            <form onSubmit={handleDeposit}>
              <input
              className="box"
                type="number"
                width="200"
                value={depositAmount}
                onChange={(event) => setDepositAmount(Number(event.target.value))}
                placeholder="$ Enter Deposit Amount Here"
              ></input>
              <br/> <br/>
              <input className="submit" type="submit" width="200" value="Submit"></input>
            </form>
          </CardBody>
        </Card>
      </div>
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