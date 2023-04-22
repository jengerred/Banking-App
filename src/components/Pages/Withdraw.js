
import { useState } from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";

function Withdraw(){
  const localBalances = localStorage.getItem('balance')
  const jsonBalance = JSON.parse(localBalances)

  const [withdrawalAmount, setWithdrawalAmount] = useState('');
 const [accountBalance, setAccountBalance] = useState(''); // initial balance of $0

  const status = (localBalances - withdrawalAmount)


localStorage.setItem('status', JSON.stringify(status))

localStorage.setItem('accountBalance', JSON.stringify(accountBalance))



  const handleWithdrawal = (event) => {
    if (withdrawalAmount > localBalances) {
      alert("Insufficient funds!");
    } else {
      event.preventDefault();
      setAccountBalance(status);
      alert(`Withdrawal successful. New balance: $${status}`);
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
















