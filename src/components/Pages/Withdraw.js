
import { useState } from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";

function Withdraw(){
  const localBalances = localStorage.getItem('balance')
  const jsonBalance = JSON.parse(localBalances)

  const [withdrawalAmount, setWithdrawalAmount] = useState('');
  const [accountBalance, setAccountBalance] = useState(''); // initial balance of $0

  const status = (localBalances - withdrawalAmount)


  window.localStorage.setItem('status', JSON.stringify(status))

  window.localStorage.setItem('accountBalance', JSON.stringify(accountBalance))



  const handleWithdrawal = (event) => {
    event.preventDefault();
    if (withdrawalAmount > localBalances) {
      alert("Insufficient funds!");
    } else {
      setAccountBalance(accountBalance - withdrawalAmount);
      alert(`Withdrawal successful. New balance: $${localBalances - withdrawalAmount}`);
    }
  };
  console.log({withdrawalAmount}, {localBalances});

  return (
    <>
      <div className="outside-card">
        <Card color="danger" className="center-card" style={{ maxWidth: "20rem" }}>
          <CardBody>
            <CardTitle className="w-white-text" tag="h4">
              Withdraw Amount
            </CardTitle>
            <hr className="line"></hr>
            <CardSubtitle className="w-white-text">
              Account Balance ${status}
            </CardSubtitle>
            <br />

            <form onSubmit={handleWithdrawal}>
              <input
                type="number"
                width="200"
                className="box"
                value={withdrawalAmount}
                onChange={(event) => setWithdrawalAmount(Number(event.target.value))}
                placeholder="$ Enter Withdrawal Amount Here"
              ></input>
              <br /> <br />
              <input className="submit" type="submit" width="200" value="Submit"></input>
            </form>
          </CardBody>
        </Card>
      </div>
    </>
  );
}

export default Withdraw;




/*
import {Card, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

 function Withdraw() {
  
  return (
    <>
    <div className="outside-card">
      <Card color="danger"  className="center-card"   style={{ width: "20rem" }}>
        <CardBody>
          <CardTitle className="w-white-text" tag="h4">Withdraw Amount</CardTitle>
          <hr className="line"></hr>
          <CardSubtitle className="w-white-text" >Account Balance $0</CardSubtitle>
          <br/>
      

       <input
         type="number"
         width="200"
         /*onChange={onChange}*/
         /*
         placeholder="$ Enter Withdrawal Amount Here"
       ></input>
       <br/> <br/>
       <input
         className="submit"
         type="submit"
         width="200"
         value="Submit"
       ></input>
      
  </CardBody>
     </Card>
     </div>
      </>
 
         )
        };


export default Withdraw;*/













/*import {Card, CardBody, CardTitle, CardSubtitle } 
from 'reactstrap';

function Withdraw(){

    return(
        <Card  className="center-card" color="danger"  style={{ width: "20rem" }}>
            <CardBody>
                <CardSubtitle className="w-white-text" >Account Balance $0</CardSubtitle>
                <hr className="line"></hr>
                    <CardTitle className="w-white-text" style={{ paddingBottom: "10px" }} tag="h5">Withdraw Amount</CardTitle>            
                         <label className="label huge">
                             <input
                                 type="number"
                                 width="200"
                                 placeholder="$ Enter Amount Here"
                             ></input>
                                <br/><br/>
                            <input
                                className="submit"
                                type="submit"
                                width="200"
                                value="Submit"
                            ></input>
                        </label>
            </CardBody>
        </Card>
            )
        
        }
export default Withdraw;*/