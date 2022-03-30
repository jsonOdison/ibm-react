
import ReactDom from  'react-dom'
import React from 'react'
import course from './App'
ReactDom.render(<>
  <h2>Calling components named values</h2>
  <ul>
    <li>oracle</li>
    <li>Java</li>
    <li>{course}</li>
  </ul>
  </>,
  document.getElementById('root')











)