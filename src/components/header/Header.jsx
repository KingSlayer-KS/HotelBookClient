import "./header.css";
import { AuthContext } from "../../Context/AuthContext";
import { useContext } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {
  const { user,dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const HandleClick = (route)=>{
    navigate(`${route}`);
  }
  return (
    <div className="header">
      <div 
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        {type !== "list" && (
          <>
          {
            user? <h1 className="headerTitle">Welcome {user.Name}</h1>:
            <div>
            <h1 className="headerTitle">
             Want to Travel the world?<br></br>
            </h1>
            <h1 style={{color:"white"}}>Be our <a >Member.</a></h1>
            <button className="navButton" style={{backgroundColor:"transparent",border:"0.5px solid white",color:"white", padding:"5px",borderRadius:"5px",margin:"10px 0"}} onClick={()=>HandleClick("register")}>Register</button>
            </div>
          }
         
           
            
        
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
