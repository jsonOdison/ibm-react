
import ReactDom from  'react-dom'
import React from 'react'

const heading={
  color:"red",
  fontFamily:"arial",
  backgroundColor:"yellow"
}
ReactDom.render(
  <>
    <h1 style={heading}>Welcome to css world in react </h1>
  </>,
  document.getElementById('root')
)