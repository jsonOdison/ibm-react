import './App.css';
const data=[
  {name:'Suresh',age:22,gender:"Male",place:'Chennai'}
]
function App(){
  return(
    <>
      {data.map((val,key)=>{
        return (
          <ul>
            <li>{val.name}</li>
            <li>{val.age}</li>
            <li>{val.place}</li>
            <li>{val.gender}</li>
          </ul>
        )
      })}
        </>
  )
}

export default App;