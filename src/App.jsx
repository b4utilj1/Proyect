import {Login} from './components/login/login'
import {Nav} from './components/nav/nav'
import {Register} from './components/register/register'
import {BrowserRouter} from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
    <BrowserRouter>
    {/* <Register></Register> */}
    <Nav></Nav>
    </BrowserRouter>
    </>
  )
}


export default App
