import {Card, CardBody, CardText, CardSubtitle, Button, CardImg, CardTitle } 
from 'reactstrap';
import Img from './bank.png';

function CardStrap(props){
   
 return(
    <>
    <h1>Welcome To The Banking App</h1>
       <Card  color="light">
            <CardBody>
                <CardTitle tag="h5">BadBank Landing Module</CardTitle>
                <CardSubtitle>Welcome to the bank</CardSubtitle>
                <CardImg 
                    src={Img}
                    alt="Card Image Caption"
                    style={{ width: "20rem" }}
                />
                <CardText>You can move around using the navigation bar</CardText>
                <CardText>Please Create an Account or Login to get started</CardText>
                <Button>Create Account</Button><p> </p>
                <Button>Login</Button>
            </CardBody>
        </Card>
        </>
        )
    }
  

export default CardStrap;