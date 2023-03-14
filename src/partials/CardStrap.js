import {Card, CardBody, CardText, CardSubtitle, Button, CardImg, CardTitle } 
from 'reactstrap';
import Img from './bank.png';



function CardStrap(props){
   
 return(
    <>
    <h1 style={{ textAlign: "center" }}>Welcome To The Banking App</h1>
       <Card  color="light" style={{ textAlign: "center" }}>
            <CardBody>
                <CardTitle tag="h5">BadBank Landing Module</CardTitle>
                <CardSubtitle>Welcome to the bank</CardSubtitle>
                <CardImg 
                    src={Img}
                    alt="Card Image Caption"
                    style={{ width: "20rem" }}
                />
                <CardText>You can move around using the navigation bar</CardText>

                <div className="home-buttons">
                <CardText>Please Create an Account or Login to get started</CardText>
                <a href="/createaccount"><Button style={{ marginRight: "20px", backgroundColor:"#0275d8" }} >Create Account</Button></a>
                <a href="/login"><Button style={{ backgroundColor: "#0275d8" }} >Login</Button></a>
                </div>
            </CardBody>
        </Card>
        </>
        )
    }
  

export default CardStrap;