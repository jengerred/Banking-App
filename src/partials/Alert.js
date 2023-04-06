import {Card, CardBody, CardHeader, Button, CardTitle } 
from 'reactstrap';

function Alert(){
    return(
        <>
        <Card  className="card-radius" style={{ width: "20rem" }}>
        <CardHeader style={{backgroundColor: 'green'}}><h4 className="a-white-text">Success!</h4><h5 className="a-white-text">You have created a new account.</h5></CardHeader>
            <CardBody color="light">
                <CardTitle  tag="h6">You can choose to add another account or login to get started.</CardTitle>
                    <br/>
                    <div className="home-buttons">
                            <a href="/createaccount"><Button style={{ marginRight: "20px", backgroundColor:"#0275d8" }} >Add Another Account</Button></a>
                            <a href="/login"><Button  style={{ backgroundColor: "#0275d8" }} >Login</Button></a>
                    </div>
            </CardBody>
        </Card>
        </>
    )
}
export default Alert;