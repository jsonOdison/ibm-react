
import ReactDom from  'react-dom'
import React from 'react'

const name = prompt("Enter the name")
const age = prompt("Enter the age")

const currDate=new Date()

const dt=currDate.getDate()
const mt=currDate.getMonth()
const yr=currDate.getFullYear()

const date=dt+"/"+mt+"/"+yr

let result=""

if (age<18){
  result="Not eligible to Drive"
}else{
  result= name+" is eligible to Drive"
}

ReactDom.render(
  <>
  <h1>DRIVER'S LICENSE</h1>
  <table border="1px" cellSpacing={1}>
    <tr>
      <th>Date</th>
      <th>Name</th>
      <th>Age</th>
      <th>Results</th>
    </tr>
    <tr>
      <td>{date}</td>
      <td>{name}</td>
      <td>{age}</td>
      <td>{result}</td>
    </tr>
  </table>
  </>,
  document.getElementById('root')
)