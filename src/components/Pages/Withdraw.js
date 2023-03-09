import {Card, CardBody, CardTitle, CardSubtitle } 
from 'reactstrap';

function Withdraw(){

    return(
        <Card  color="danger">
            <CardBody>
                 <CardTitle tag="h5">Withdraw Amount</CardTitle>
                     <CardSubtitle>Account Balance $0</CardSubtitle>
                         <label className="label huge">
                             <input
                                 type="number"
                                 width="200"
                                 placeholder="$ Enter Amount Here"
                             ></input>
                                <br/><br/>
                                <Button>button here</Button>
                         </label>
            </CardBody>
        </Card>
            )
        
        }
export default Withdraw;