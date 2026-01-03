
import './App.css'
import Card from './components/Card'


function App() {

  let myObj ={
    usrename :"developer",
    age:21
  }
  
  let arr =[1,2,3]
  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Hello Developer</h1>
     <Card username="Purvesh" btnText="visit me"/>
     <Card username="Developer" />
    </>
  )
}

export default App
