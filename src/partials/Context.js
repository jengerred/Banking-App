import React from 'react';
import {Card, CardHeader, CardBody, CardTitle, }from 'reactstrap';

const UserContext = React.createContext(null);
const currentUserContext = React.createContext({name: '', email: '', password: '', balance: 0, index: 0, loginStatus: false});

function CardBootstrap(props) {
    function classes() {
        const bg = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
        const txt = props.txtcolor ? ' text-' + props.txtcolor : ' text-white';
        return 'card mb-3 ' + bg + txt;
    }
    
    return (
        <Card className={classes()} style={{maxWidth: props.cardWidth}}>
            <CardHeader className="card-header" style={{display: props.headerDisplay, justifyContent: props.headerJustifyContent, backgroundColor: props.headerBgColor, fontSize: props.fontSizeHeader + "em"}}>{props.header}</CardHeader>
            <CardBody className="card-body" style={{textAlign: props.bodyContentAlign}}>
                <div className='bodyContainer' style={props.bodyContainerWidth ? {display:'flex', width: props.bodyContainerWidth, position: 'relative', margin: "0 auto"}: {}}>
                    {props.title && (<CardTitle className="card-title" style={{fontSize: props.titleFontSize + 'em', display: props.titleDisplay, justifyContent: props.titleJustify}}>{props.title}</CardTitle>)}
                    <br/>
                    {props.text && (<p className="card-text">{props.text}</p>)}
                    {props.body && (<div style={{justifyContent: props.bodyContentAlign, textAlign: props.bodyAlign}}>{props.body}</div>)}
                    <div style={{display: props.imgDisplay, justifyContent: props.imgJustify}}>
                        {props.img && (<img src={props.img} alt="" className={props.imgClass}></img>)}
                    </div>
                </div>
                    {props.status && (<div id='createStatus'>{props.status}</div>)}
            </CardBody>
        </Card>
    );
    /*
    <>
   <Card color="light"  className="center-card"   style={{ width: "95%" }}>
        <CardBody>
          <CardTitle tag="h4">All Data</CardTitle>
          <CardSubtitle>This is where all the saved data will be.</CardSubtitle>
          
          </CardBody>
     </Card>
      </>*/
}
const contextExports = {
    CardBootstrap,
    UserContext,
    currentUserContext
}
export default CardBootstrap;