import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import Modal from '../Modal/Modal'
import "./reserve.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import axios from 'axios';


import { useNavigate } from "react-router-dom";
const Reserve = ({ setOpen, hotelId, data }) => {
  const { user,dispatch } = useContext(AuthContext);
  const [info,setInfo] = useState({});
  const [opened, setOpened] = useState(false);
  const [Message, setMessage] = useState("");
  const handleChange = (e)=> {
    setInfo((prev)=> ({...prev, [e.target.id]:e.target.value}))
  }
  const NewBooking ={
    ...info,
    ResortId:data[0].id,
    UserEmail: user.Email,
  }
  console.log(NewBooking);

  const navigate = useNavigate();

  const bookingClick = async () => {
    try {
    const response = await axios.post(`http://54.234.178.57:8800/api/booking`,NewBooking, {withCredentials: true});
     console.log(response);
     setOpen(false);
     setOpened(true);
     setMessage("Booking requested, Check your dashboard for more information");
     setTimeout(() => {
      setOpened(false);
     }, 4000);
    } catch (error){}
   }
  

  // const handleClick = async () => {
  //   try {
  //     await Promise.all(
        
  //       )
  //     ;
  //     setOpen(false);
  //     navigate("/");
  //   } catch (err) {}
  // };

  return (
    <div className="reserve">
 
      <div className="rContainer">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="rClose"
          onClick={() => setOpen(false)}
        />
        <h1>Want to book <span className="HotelName">{data[0].Name} </span>?</h1>
        <p>Fill the following details:</p>
        <div className="bookingInput">
        <label>No of Adults</label>
        <input onChange={handleChange} id="NoOfAdults" ></input>
        <label>No of Children</label>
        <input onChange={handleChange} id="NoOfChildren" ></input>
        <label>No of Rooms</label>
        <input onChange={handleChange} id="NoOfRooms"></input>
        <label>No of Days</label>
        <input onChange={handleChange} id="NoOfDays" ></input>
        <label>Check In Date</label>
        <input type="date" onChange={handleChange} id="CheckInDate" ></input>
        <label>Check Out Date</label>
        <input type="date" onChange={handleChange} id="CheckOutDate" ></input>
        </div>
        <button onClick={bookingClick} className="rButton">
          Request Booking
        </button>
      </div>
      <Modal
             opened={opened}
        onClose={() => setOpened(false)}
        text= {Message&& <p style={{color:'red'}}>{Message}</p>}>
        
             </Modal>
    </div>
  );
};

export default Reserve;