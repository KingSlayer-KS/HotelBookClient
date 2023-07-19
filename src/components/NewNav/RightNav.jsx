import React from 'react';
import styled from 'styled-components';
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  
  align-items: center;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;

  }
  .navButton{
    padding:0 10px
  }
  @media (max-width: 768px) {
    flex-direction: column;
    flex-flow: column nowrap;
    background-color: #63cae1;
    color: white;
    position: fixed;
    z-index:5;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 400px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
    const navigate = useNavigate();
    const { user,dispatch } = useContext(AuthContext);
    const handleClick = () => {
      dispatch({ type: "LOGOUT" });
    }
  
  
    const HandleClick = (route)=>{
      navigate(`${route}`);
    }
  return (
    <Ul open={open}>
       {
          user ?(<div className="WelcomeLogoutContainer"> 
          <button className="navButton" onClick={()=>HandleClick("AboutUs")}>About Us</button>
            <button className="navButton" onClick={()=>HandleClick("WhyUs")}>Why Us</button>
            <button className="navButton" onClick={()=>HandleClick("Intro")}>Intro</button>
          <button className="LogoutBtn" style={{backgroundColor:"white",border:"0.5px solid #63cae1",color:"#63cae1", padding:"5px",borderRadius:"5px",margin:"0 5px"}} onClick={()=>HandleClick("/userDashboard")}>Dashboard</button>
          <button className="LogoutBtn" style={{backgroundColor:"#63cae1",color:"white", padding:"5px",borderRadius:"5px"}} onClick={handleClick}>Log out</button></div>
          ):(
            <div className="navItems">
            <button className="navButton" onClick={()=>HandleClick("AboutUs")}>About Us</button>
            <button className="navButton" onClick={()=>HandleClick("WhyUs")}>Why Us</button>
            <button className="navButton" onClick={()=>HandleClick("Intro")}>Intro</button>
          <button className="navButton" style={{backgroundColor:"#63cae1",color:"white", padding:"5px",borderRadius:"5px"}} onClick={()=>HandleClick("login")}>Login</button>
        </div>
          )
        }
    </Ul>
  )
}

export default RightNav