import ReactDom from  'react-dom';
import React from 'react'
class Test extends React.Component{
  render(){
    return <h1>Class components</h1>
  }
}
ReactDom.render(
  <Test/>,
  document.getElementById('root'))