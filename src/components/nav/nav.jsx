import React from 'react'
import { MdLocalShipping } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import { useAuth0 } from "@auth0/auth0-react";

import './nav.css'

export const Nav = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
    <div className='header'>
       <div className='top_header'>
        <div className='icon'>
            <MdLocalShipping />
        </div>
        <div className='info'>
            <p>Envío gratis al comprar hasta $150000</p>
        </div>
       </div>
       <div className='mid_header'>
        <div className='logo'>
          <img src="image/Logo.png" alt="Logo" />
        </div>
        <div className='search_box '>
          <input type="text" value=''placeholder='Buscar' />
          <button><AiOutlineSearch/></button>
        </div>
        <div className='user'>
          <div className='icon'>
          <FiLogIn />
          </div>
          <div className='btn'>
            <button onClick={() => loginWithRedirect()}>Login</button>
          </div>
        </div>
       </div>
    </div>
    </>
  )
}
export default Nav