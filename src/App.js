import './App.css';
import React from 'react';

function App() {
  var curDay=new Date()
  var cday=curDay.getDay()
  var day =''
  if(cday=='1'){
    day='Today is monday'
  }else if(cday=='2'){
    day='Today is Tuesday'

  }
  else if(cday=='3'){
    day='Today is Wednesday'

  }
  else if(cday=='4'){
    day='Today is Thurday'

  
  }else if(cday=='5'){
    day='Today is Friday'

  }
  return <>
  <h1>Learning components</h1>
  <h2>{day}</h2>
  </>
  
  

}
export default App;
