import "./list.css";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/usefetch";
import { id } from "date-fns/locale";


const List = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const pathsplit = pathname.split("/");
  const Region =  pathsplit[3];
  const Type = pathsplit[3]
  const SortBy =  pathsplit[2];
 
 let RequiredData = [];
const {data, loading,error,refetchData} = useFetch(`http://54.234.178.57:8800/api/hotels`);

 if(SortBy == "Region"){
   RequiredData =  data.filter((item)=>{
    return item.Region == Region;
   })
 }else{
  RequiredData =  data.filter((item)=>{
    return item.Type == Type;
   })
 }
 

  useEffect(()=>{
   refetchData();
  },[])
   
  return (

    <div>
    
      
      
     {SortBy == "Region"?<h1 className="ListHeading">{Region}</h1>:<h1 className="ListHeading">{Type}</h1>} 
      <div className="listContainer">
        <div className="listWrapper">
          
          <div className="listResult">
          {loading ? ("Loading...") : <>
            
              <>
                {RequiredData.map((item) => (
                  <SearchItem data={item} key={item.id} />
                ))}
              </>
          </>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
