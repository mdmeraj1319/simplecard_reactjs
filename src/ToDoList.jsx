import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import './index.css';
const ToDoList = () => {
  const [val , updateVal] = useState(0);

  const Increm = () =>{
     updateVal(val+1);
  };

  const Decrem = () =>{
    if(val >=1){ updateVal(val-1); }
    else{
      alert("Sorry ,Zero limit reached");
    }
  };

  return(
     <>
      <div className="main_div">
         <div className="centre_div">
           <h1> {val} </h1>
           <div className="btn-div">
           <Tooltip title="ADD">
              <Button onClick = {Increm}  className="btn_green"> <AddIcon/></Button>
          </Tooltip>
          <Tooltip title="Delete">
              <Button onClick= {Decrem} className="btn_red"> <RemoveIcon/></Button>
          </Tooltip>
           </div>
         </div>

      </div>

     </>
  );
}

export default ToDoList;