import React from 'react';
import Context from '../../partials/Context';
import {Card, CardBody, CardTitle, CardSubtitle,} from 'reactstrap';

 function AllData() {
  return (
  
    <>
    <Card color="light"  className="center-card"   style={{ width: "95%" }}>
         <CardBody>
           <CardTitle tag="h4">All Data</CardTitle>
           <CardSubtitle>This is where all the saved data will be.</CardSubtitle>
    <Context>
      
    </Context>
           </CardBody>
      </Card>
       </>
         )
        };


export default AllData;

  /*
<Context></Context>
*/






/*import React from 'react';
import Context from '../../partials/Context';
import {Card, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import React from 'react';



 function AllData() {


  return (
    <>
      <Card color="light"  className="center-card"   style={{ width: "95%" }}>
        <CardBody>
          <CardTitle tag="h4">All Data</CardTitle>
          <CardSubtitle>This is where all the saved data will be.</CardSubtitle>
   
          <Context>
       
          </Context>
      
  </CardBody>
     </Card>
      </>
 
         )
        };


export default AllData;



/*import React from 'react';
import { useContext, UserContext } from 'react';

  const ctx = React.useContext(UserContext)
   {JSON.stringify(ctx)}
   
function AllData(){
  const ctx = React.useContext(UserContext)
  return (
    <>
    <h5>All Data in Store</h5>
    {JSON.stringify(ctx)}<br/>
    </>
  );
}
export default AllData;*/
  
  
  
  /*const ctx = React.useContext(UserContext);
  {JSON.stringify(ctx)}<br/>*/
