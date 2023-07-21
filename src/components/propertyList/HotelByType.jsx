import "./HotelByType.css";
import { useNavigate } from "react-router-dom";

const PropertyList = (props) => {
  const Navigate = useNavigate();

  const AllTypes = [...new Set(props.data.map((item) => item.Type))];
  const TypesCount = AllTypes.map((Type) => {
    const CountTypes = props.data.filter((e) => {
      return e.Type === Type;
    });
    return CountTypes.length;
  });
  const Images = [
    "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
    "https://unsplash.com/photos/rmvKPryg47I/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8YW1yaXRzYXJ8ZW58MHx8fHwxNjc0OTIxMTc5&force=true",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
  ];
  const TypeHomeObject = [];
  for (let i = 0; i < AllTypes.length; i++) {
    TypeHomeObject.push({
      Type: AllTypes[i],
      Count: TypesCount[i],
      ImageType: Images[i],
    });
  }

  const handleClick = (Type) => {
    Navigate(`/hotels/Type/${Type}`);
  };

  return (
    <div className="pList">
      {TypeHomeObject.map((Obj) => {
        return (
          <div className="pListItem" onClick={() => handleClick(Obj.Type)}>
            <img src={Obj.ImageType} alt="" className="pListImg" />
            <div className="pListTitles">
              <h1>{Obj.Type}</h1>
              <h2>{Obj.Count} hotels</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PropertyList;
