import { Link } from "react-router-dom";
import "./searchItem.css";



const SearchItem = (props) => {
  console.log(props.data);
  const path = props.data.URLPath;
  const fileName = path;
  console.log(fileName);
  return (
    <div className="searchItem">
      <img
        src={`${fileName}`}
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">{props.data.Name}</h1>
        <span className="siTaxiOp">{props.data.Amenties}</span>
        <span className="siSubtitle">
        {props.data.Description}
        <br></br>
       <h1> {props.data.ResortType}</h1>
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
      </div>
      <div className="siDetails">
        <div className="siDetailTexts">
         
          <Link to={`/hotels/${props.data.id}`}>
          <button className="siCheckButton" >Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
