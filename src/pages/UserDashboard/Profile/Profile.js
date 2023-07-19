import React from 'react';
import './Profile.css';
import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../../../Context/AuthContext";

const Profile = () => {
    const navigate = useNavigate();
    const { user,dispatch } = useContext(AuthContext);

    return (
        <div className="Profile">
        <div className='ProfilePic'>
        <img className='ProfilePicImg' style={{borderRadius:"100%"}} src="https://www.svgrepo.com/download/170303/avatar.svg"></img>
        </div> 
        <div className='UserData'>
        <h1 className='Name-Heading'> {user.Name} </h1>
        <h1 className='DataPara'>Email: {user.Email}</h1>
        <h1 className='DataPara'>Phone: {user.MobNo} </h1>
        <h1 className='DataPara'>Address: {user.Address}</h1>
        <h1 className='DataPara'>Date of Birth: {user.DOB}</h1>
        <h1 className='DataPara'>Joining Date: {user.JoiningDate}</h1>
        <div className='ActionBtn'>
        <button className='EditBtn' onClick={()=>{navigate(`/userDashboard/update/${user.id}`)}}>View</button>
        </div>
        </div>
        </div>
    )
}

    
export default Profile;