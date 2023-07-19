
import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AuthContext } from "../../Context/AuthContext";


const ForgotPass = () => {
    const [Data, setData] = useState({
        email: undefined,
        DOB: undefined
    });
    
      const { loading, error, dispatch } = useContext(AuthContext);


      const navigate = useNavigate();

      const handleChange = (e) => {
        setData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
      };
      console.log(Data);

  

      const handleClick = async (e) => {
        e.preventDefault();
     
        try {
          const res = await axios.post("http://54.234.178.57:8800/api/auth/forgotPassword", Data);

          
        } catch (err) {
        
        }
      };

    return (
        <div className="login">
           
        <div className="lContainer">
        <h1 style={{fontSize:"30px"}}>Password Reset</h1>
        <p>Enter your Email</p>
          <input
            type="text"
            placeholder="Email"
            id="email"
            onChange={handleChange}
            className="lInput"
          />
          <p>Enter Date of Birth</p>
          <input
            type="date"
            placeholder="Date of Birth"
            id="DOB"
            onChange={handleChange}
            className="lInput"
          />
          
          <button disabled={loading} onClick={handleClick} className="lButton">
            Reset Password
          </button>

          {error && <span>{error.message}</span>}
        </div>
      </div>
    )
}

export default ForgotPass;