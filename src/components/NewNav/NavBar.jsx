import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import { useNavigate } from "react-router-dom";
import logo from "../../pages/Assets/Logo.jpg";
const Nav = styled.nav`
  width: 100%;
  height: 80px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 15px 0;
  },
`

const Navbar = () => {
  const navigate = useNavigate();
  const HandleClick = (route)=>{
    navigate(`${route}`);
  }
  return (
    <Nav>
      <div className="logo" onClick={()=>{HandleClick("/")}} >
       <img src={logo} style={{width:"100px"}}></img>
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar