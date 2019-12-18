import React from 'react';
import { HomePage } from '../homePage/HomePage';
import User from '../createUser/createUser';
import PrintButton from './nave';

function Sample() {
    return(
       

<div className="bg-black-80 w-100 pv5">
  <div className="white mt3 tc f3">Single Page Mode</div>
  <PrintButton id={"singlePage"} label={"Print single page"} />
  <User id={"singlePage"} label={"Print single page"}/>

        </div>
    )
  }
  export default Sample;