import {Login} from './components/login/login'
import {Nav} from './components/nav/nav'
import {Register} from './components/register/register'
import {Rout} from './components/dashboard/rout'
import {BrowserRouter} from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
    <BrowserRouter>
    {/* <Register></Register> */}
    <Nav/>
    <Rout/>  
    </BrowserRouter>
    </>
  )
}


export default App
