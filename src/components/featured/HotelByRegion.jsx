import "./HotelByRegion.css";
import { useNavigate } from "react-router-dom";

const HotelByRegion = (props) => {
const AllRegion = [...new Set(props.data.map(item => item.Region))]; 
const propertyCount =  AllRegion.map((Region)=>{
    const CountProperties =  props.data.filter((e)=>{
      return e.Region === Region;
     })
     return CountProperties.length;
  })

const Images = ["https://unsplash.com/photos/sDukZZZ1URg/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8c291dGglMjBpbmRpYXxlbnwwfHx8fDE2NzUxNTgwOTk&force=true","https://unsplash.com/photos/WCgioEcEVNc/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NXx8bm9ydGglMjBpbmRpYXxlbnwwfHx8fDE2NzUxODUzODk&force=true","https://unsplash.com/photos/rmvKPryg47I/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8YW1yaXRzYXJ8ZW58MHx8fHwxNjc0OTIxMTc5&force=true","https://unsplash.com/photos/7RRx_hNBoe8/download?force=true","https://images.unsplash.com/photo-1570900808791-d530855f79e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHJlc29ydHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"]
const RegionHomeObject = [];

for(let i=0; i<AllRegion.length; i++){
  RegionHomeObject.push({
    Region:AllRegion[i],
    Count:propertyCount[i],
    ImageRegion: Images[i],
  })
}

const Navigate = useNavigate();
 const HandleClick = (Region) => {
  Navigate(`/hotels/Region/${Region}`);
 }


  return (
    <div className="featured">
    
    {RegionHomeObject.map((Obj)=>{
     return (
      <div className="featuredItem" onClick={()=>HandleClick(Obj.Region)}>
        <img
          src={Obj.ImageRegion}
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles" >
          <h1>{Obj.Region}</h1>
          <h2>{Obj.Count} properties</h2>
        </div>
        </div>
     )
    }) }
      
      </div>
    
  );
};

export default HotelByRegion;

