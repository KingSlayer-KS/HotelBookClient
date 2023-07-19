import "./EditUserData.css";

import { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import useFetch from "../../../hooks/usefetch";
import { useEffect } from "react";


const userInputs = [
   
  {
    id: "id",
    label: "id",
    type: "number",
    placeholder: "1",
  },
    {
      id: "Name",
      label: "Name and Surname",
      type: "text",
      placeholder: "John Doe",
    },
    {
      id: "Email",
      label: "Email",
      type: "mail",
      placeholder: "john_doe@gmail.com",
    },
    {
      id: "Password",
      label: "Password",
      type: "password",
    },
    {
      id: "MobNo",
      label: "Phone",
      type: "number",
      placeholder: "+91 8822663311",
    },
  
    {
      id: "DOB",
      label: "Date of Birth",
      type: "text",
      placeholder: "11/09/2012",
    },
    {
      id: "Address",
      label: "Address",
      type: "text",
      placeholder: "Elton St. 216 NewYork",
    },
    {
      id: "PanNo",
      label: "Pan No",
      type: "text",
      placeholder: "1299221121",
    },
  
   
  ];

const EditUserData = () => {

  const location = useLocation();

  const id = location.pathname.split("/")[3];
  console.log(id);
  const {data, loading,error,refetchData} = useFetch(`http://54.234.178.57:8800/api/users/${id}`);
  console.log(data);

    useEffect(()=>{
      refetchData();
    })

  const [editable,setEditable] = useState("disabled");
  const [file, setFile] = useState("");
  const [info,setInfo] = useState();
  const [Id, setId] = useState("");
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password,setPassword] = useState("");
  const [MobNo,setMobNo] = useState("");
  const [DOB,setDOB]= useState("");
  const [Address, setAddress] = useState("");
  const [PanNo, setPanNo] = useState("");
 
  
  useEffect(()=>{
    if(data[0]!=null){
      setId(data[0].id);
      setName(data[0].Name);
      setEmail(data[0].Email);
      setPassword(data[0].Password);
      setMobNo(data[0].MobNo);
      setDOB(data[0].DOB);
      setAddress(data[0].Address);
      setPanNo(data[0].PanNO);
    }
  },[data.length])

  
  
  
  const handleEditClick = ()=>{
    editable=="disabled"?setEditable(""):setEditable("disabled");
    
  }

  const UpdatedData ={
    // id:Id,
    Name:Name,
    Email:Email,
    Password:Password,
    MobNo:MobNo,
    DOB:DOB,
    Address:Address,
    PanNo:PanNo,
  }
  
  console.log(UpdatedData);

  const UpdateClick = async () => {
    try {
     await axios.put(`http://localhost:8800/api/users/${id}`,UpdatedData, {withCredentials: true})
    } catch (error){}
   }
  return (
    <div className="edit">
 
      <div className="newContainer">

        <div className="top">
          <h1 className="Heading">Details</h1>

          <button onClick={handleEditClick}  className="editbtn">Edit</button>
        </div>
        <div className="bottom">
          <div className="right"> 
          {
         <form  className="InputForm">
                {/* <div className="formInput" key={userInputs[0].id}>
                  <label>{userInputs[0].label}</label>
                  <input value={Id} disabled={editable}  onChange={(e)=>{setId(e.target.value)}} type={userInputs[0].type} placeholder={userInputs[0].placeholder} id={userInputs[0].id}/>
                </div> */}
                <div className="formInput" key={userInputs[1].id}>
                  <label>{userInputs[1].label}</label>
                  <input value={Name} disabled={editable}  onChange={(e)=>{setName(e.target.value)}} type={userInputs[1].type} placeholder={userInputs[1].placeholder} id={userInputs[1].id}/>
                </div>
                <div className="formInput" key={userInputs[2].id}>
                  <label>{userInputs[2].label}</label>
                  <input value={Email} disabled={editable}  onChange={(e)=>{setEmail(e.target.value)}} type={userInputs[2].type} placeholder={userInputs[2].placeholder} id={userInputs[2].id}/>
                </div>
                <div className="formInput" key={userInputs[3].id}>
                  <label>{userInputs[3].label}</label>
                  <input value={Password} disabled={editable}  onChange={(e)=>{setPassword(e.target.value)}} type={userInputs[3].type} placeholder={userInputs[3].placeholder} id={userInputs[3].id}/>
                </div>
                <div className="formInput" key={userInputs[4].id}>
                  <label>{userInputs[4].label}</label>
                  <input value={MobNo} disabled={editable}  onChange={(e)=>{setMobNo(e.target.value)}} type={userInputs[4].type} placeholder={userInputs[4].placeholder} id={userInputs[4].id}/>
                </div>
                <div className="formInput" key={userInputs[5].id}>
                  <label>{userInputs[5].label}</label>
                  <input value={DOB} disabled={editable}  onChange={(e)=>{setDOB(e.target.value)}} type={userInputs[5].type} placeholder={userInputs[5].placeholder} id={userInputs[5].id}/>
                </div>
                <div className="formInput" key={userInputs[6].id}>
                  <label>{userInputs[6].label}</label>
                  <input value={Address} disabled={editable}  onChange={(e)=>{setAddress(e.target.value)}} type={userInputs[6].type} placeholder={userInputs[6].placeholder} id={userInputs[6].id}/>
                </div>
                <div className="formInput" key={userInputs[7].id}>
                  <label>{userInputs[7].label}</label>
                  <input value={PanNo} disabled={editable}  onChange={(e)=>{setPanNo(e.target.value)}} type={userInputs[7].type} placeholder={userInputs[7].placeholder} id={userInputs[7].id}/>
                </div>
              {editable==""&& <button onClick={UpdateClick} className="UpdateUserDataBtn">Update User</button>} 
            </form> 
          }  
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUserData;
