
import ReactDom from  'react-dom'
import React from 'react'
import './index.css'

let curDate=new Date()
curDate=curDate.getHours()
let greetings=""
const cssStyle={}
if(curDate>=1 && curDate<12){
  greetings='good morning'
  cssStyle.color='white'
}
else if(curDate>=12 && curDate<=16){
  greetings="good afternon "
  cssStyle.color='red'
}
else{
  greetings="good evening "
  cssStyle.color='orange'
}
ReactDom.render(
  <>
   <h1>welcome to css world in react </h1>
   <h2 style={cssStyle}>{greetings}</h2>
  </>,
  document.getElementById('root')











)