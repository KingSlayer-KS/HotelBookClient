import HotelByRegion from "../../components/featured/HotelByRegion";
import Header from "../../components/header/Header";
import HotelByType from "../../components/propertyList/HotelByType";
import useFetch from "../../hooks/usefetch";
import "./home.css";



const Home = () => {
  const {data,refetchData} = useFetch("http://54.234.178.57:8800/api/hotels");
const requiredHotelData = data;

 useFetch(()=>{
refetchData();
 },[])
  
  return (
    <div children="Content">
     
      <Header/>
      <div className="homeContainer">
        <h3 className="Heading">Hotels By Region</h3>
         <HotelByRegion data={requiredHotelData}/>
         <h3 className="Heading">Hotels By Type</h3>
        <HotelByType data={requiredHotelData}/>

      </div>
    </div>
  );
};

export default Home;
