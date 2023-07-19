import "./hotel.css";
import Header from "../../components/header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import useFetch from "../../hooks/usefetch";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import Reserve from "../../components/reserve/reserve";
import axios from "axios";



const Hotel = () => {
  
  const location = useLocation();
  const pathname = location.pathname;
  const pathsplit = pathname.split("/");
  const hotelId = pathsplit[2];
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  // User

  const {user} = useContext(AuthContext);
  
  const {data, loading,error,refetchData} = useFetch(`http://54.234.178.57:8800/api/hotels/${hotelId}`);
console.log(data);
const [fileName, setFileName] = useState("");
const [fileName2, setFileName2] = useState("");
const [fileName3, setFileName3] = useState("");
const [fileName4, setFileName4] = useState("");

//Lead, Joined rendering
const [LeadType, setLeadType] = useState("");
  
useEffect(()=>{
  if(data.length!= 0){
     setFileName(data[0].URLPath);
     setFileName2(data[0].URLPath2);
     setFileName3(data[0].URLPath3);
     setFileName4(data[0].URLPath4);
  }
},[data.length])

useEffect(()=>{
if(user){
  setLeadType(user.LeadType);
}
},[user])


  useEffect(()=>{
    refetchData();
  },[]);
  const photos = [
    {
      src: `${fileName}`,
    },
    {
      src: `${fileName2}`,
    },
    {
      src: `${fileName3}`,
    },
    {
      src: `${fileName4}`,
    }
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };
 
  
 
  
  const navigate = useNavigate();
  const handleClick = ()=>{
   if(user){
    setOpenModal(true);
   }else{
    navigate("/login");
   }
  }
  return (
    <div>
 
      {
        data.length == 0 ?( "Loading" ):(
          <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <div className="HotelHeaderWraper">
          
       <div>
       <h1 className="hotelTitle">{data[0].Name}</h1>
       </div>
    
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>{data[0].City},{data[0].State}</span>
          </div>
          <div>
          
        
          {LeadType == 'Lead'?<p>Become member to book hotel, Contact us now!</p>:
          <button onClick={handleClick} className="bookNow">Reserve or Book Now!</button>
          }
         
          </div>
          </div>
   
        
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Description</h1>
              <p className="hotelDesc">
              {data[0].Description}
              </p>
              
            </div>
            <div className="hotelDetailsTexts">
            <h2 className="hotelTitle">Highlights</h2>
              <p className="hotelDesc">
              {data[0].Amenties}
              </p>
              
            </div>
            
          </div>
        </div>

      </div>
        )
      }
     {openModal && <Reserve setOpen={setOpenModal} hotelId={hotelId} data = {data}/> }
    </div>
  );
};

export default Hotel;
