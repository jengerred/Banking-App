
import {Card, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

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
         placeholder="$ Enter Deposit Amount Here"
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


export default Deposit;