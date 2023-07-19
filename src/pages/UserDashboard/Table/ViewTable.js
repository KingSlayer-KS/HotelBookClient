import "./ViewTable.css";

import { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import useFetch from "../../../hooks/usefetch";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthContext";


const bookingInputs = [
   
  {
    id: "BookingNo",
    label: "Booking No",
    type: "number",
    placeholder: "1",
  },
    {
      id: "BookingDate",
      label: "Booking Date",
      type: "text",
      placeholder: "27-2-2023",
    },
    {
      id: "Name",
      label: "Hotel Name",
      type: "text",
      placeholder: "Hayat International",
    },
    {
      id: "NoOfAdults",
      label: "No. of Adults",
      type: "number",
    },
    {
      id: "NoOfChildren",
      label: "No. of Children",
      type: "number",
    },
  
    {
      id: "NoOfDays",
      label: "No. of Days",
      type: "number",
    },
    {
        id: "City",
        label: "City",
        type: "text",
        placeholder: "Amritsar",
      },
    {
      id: "State",
      label: "State",
      type: "text",
      placeholder: "Punjab",
    },
    {
      id: "Type",
      label: "Type",
      type: "text",
      placeholder: "Hotel",
    },
    {
        id: "BookingStatus",
        label: "Booking Status",
        type: "text",
        placeholder: "Requested",
      },
  
   
  ];

const ViewTable = () => {

  const location = useLocation();
  const { user,dispatch } = useContext(AuthContext);


  const {data, loading,error,refetchData} = useFetch(`http://54.234.178.57:8800/api/booking/user/${user.id}`);
  console.log(data);

    useEffect(()=>{
      refetchData();
    })

    const [BookingNo, setBookingNo] =  useState("");
    const [BookingDate,setBookingDate] = useState("");
    const [Name, setName] = useState("");
    const [NoOfAdults, setNoOfAdults] = useState("");
    const [NoOfChildren, setNoOfChildren] = useState("");
    const [NoOfDays, setNoOfDays] = useState("");
    const [City, setCity] = useState("");
    const [State, setState] = useState("");
    const [Type, setType] = useState("");
    const [BookingStatus, setBookingStatus] = useState("");

      
  useEffect(()=>{
    if(data[0]!=null){
      setBookingNo(data[0].BookingNo);
      setBookingDate(data[0].BookingDate);
      setName(data[0].Name);
      setNoOfAdults(data[0].NoOfAdults);
      setNoOfChildren(data[0].NoOfChildren);
      setNoOfDays(data[0].NoOfDays);
      setCity(data[0].City);
      setState(data[0].State);
      setType(data[0].Type);
      setBookingStatus(data[0].BookingStatus);
    }
  },[data.length])


  return (
    <div className="edit">
 
      <div className="newContainer">

        <div className="top">
          <h1 className="Heading">Details</h1>
        </div>
        <div className="bottom">
          <div className="right"> 
          {
         <form  className="InputForm">
                <div className="formInput" key={bookingInputs[0].id}>
                  <label>{bookingInputs[0].label}</label>
                  <input value={BookingNo} disabled="disabled"  type={bookingInputs[0].type} placeholder={bookingInputs[0].placeholder} id={bookingInputs[0].id}/>
                </div>
                <div className="formInput" key={bookingInputs[1].id}>
                  <label>{bookingInputs[1].label}</label>
                  <input value={BookingDate} disabled="disabled" type={bookingInputs[1].type} placeholder={bookingInputs[1].placeholder} id={bookingInputs[1].id}/>
                </div>
                <div className="formInput" key={bookingInputs[2].id}>
                  <label>{bookingInputs[2].label}</label>
                  <input value={Name} disabled="disabled"   type={bookingInputs[2].type} placeholder={bookingInputs[2].placeholder} id={bookingInputs[2].id}/>
                </div>
                <div className="formInput" key={bookingInputs[3].id}>
                  <label>{bookingInputs[3].label}</label>
                  <input value={NoOfAdults}  disabled="disabled"  type={bookingInputs[3].type} placeholder={bookingInputs[3].placeholder} id={bookingInputs[3].id}/>
                </div>
                <div className="formInput" key={bookingInputs[4].id}>
                  <label>{bookingInputs[4].label}</label>
                  <input value={NoOfChildren}  disabled="disabled"  type={bookingInputs[4].type} placeholder={bookingInputs[4].placeholder} id={bookingInputs[4].id}/>
                </div>
                <div className="formInput" key={bookingInputs[5].id}>
                  <label>{bookingInputs[5].label}</label>
                  <input value={NoOfDays}  disabled="disabled"  type={bookingInputs[5].type} placeholder={bookingInputs[5].placeholder} id={bookingInputs[5].id}/>
                </div>
                <div className="formInput" key={bookingInputs[6].id}>
                  <label>{bookingInputs[6].label}</label>
                  <input value={City} disabled="disabled"   type={bookingInputs[6].type} placeholder={bookingInputs[6].placeholder} id={bookingInputs[6].id}/>
                </div>
                <div className="formInput" key={bookingInputs[7].id}>
                  <label>{bookingInputs[7].label}</label>
                  <input value={State}  disabled="disabled"  type={bookingInputs[7].type} placeholder={bookingInputs[7].placeholder} id={bookingInputs[7].id}/>
                </div>
                <div className="formInput" key={bookingInputs[8].id}>
                  <label>{bookingInputs[8].label}</label>
                  <input value={Type}  disabled="disabled"  type={bookingInputs[8].type} placeholder={bookingInputs[8].placeholder} id={bookingInputs[8].id}/>
                </div>
                <div className="formInput" key={bookingInputs[9].id}>
                  <label>{bookingInputs[9].label}</label>
                  <input value={BookingStatus}  disabled="disabled"  type={bookingInputs[9].type} placeholder={bookingInputs[9].placeholder} id={bookingInputs[9].id}/>
                </div>

            </form> 
          }  
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewTable;
