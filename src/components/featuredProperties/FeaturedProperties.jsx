import "./featuredProperties.css";
import { useNavigate } from "react-router-dom";
const FeaturedProperties = (props) => {
  const navigate = useNavigate();
  const handleClick = (HotelId) => {
    navigate(`/hotels/${HotelId}`);
  };
  return (
    <div className="fp">
      {props.data.slice(0, 4).map((Obj) => {
        return (
          <div className="fpItem" onClick={() => handleClick(Obj.id)}>
            <img src={Obj.URLPath} alt="" className="fpImg" />
            <span className="fpName">{Obj.Name}</span>
            <span className="fpCity">{Obj.City}</span>
          </div>
        );
      })}
    </div>
  );
};

export default FeaturedProperties;
