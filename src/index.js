import React from 'react'
import ReactDom from 'react-dom'
// const currDate=new Date()
// const h=currDate.getHours()
// const m=currDate.getMinutes()
// const s=currDate.getSeconds()
// const time=h+":"+m+":"+s

// const dt=currDate.getDate()
// const mt=currDate.getMonth()
// const yr=currDate.getFullYear()

// 
let result=""
const marks=prompt("enter marks here ")
if(marks<=35){
    result="Failed"
}
else{
    result="passed"
}
ReactDom.render(

<>
    <h1>welcome to react js</h1>
    <h3>{result}</h3>
</>,
    
  
   
    document.getElementById('root')

)
