import HotelByRegion from "../../components/featured/HotelByRegion";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import HotelByType from "../../components/propertyList/HotelByType";
import useFetch from "../../hooks/usefetch";
import WelcomeUser from "./WelcomeUser"
import { AuthContext } from "../../Context/AuthContext";
import {useContext} from "react"
import "./home.css";



const Home = () => {
  const { user } = useContext(AuthContext);
  const {data, loading, error,refetchData} = useFetch("http://54.234.178.57:8800/api/hotels");
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
        {<WelcomeUser Name="{ffff}"/>}
      </div>
    </div>
  );
};

export default Home;
