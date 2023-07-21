import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import { Login } from "./pages/Login/NewLogin";
import ForgotPass from "./pages/Login/forgotPass";
import Register from "../src/pages/Register/Register";
import NavBar from "../src/components/NewNav/NavBar";

// Data Fetching 
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";

import WhyUsPage from "./pages/WhyUsPage/WhyUsPage";
import AboutUs from "../src/pages/AboutUs/AboutUs";
import Intro from "../src/pages/Intro/Intro";
import UserDashboard from "./pages/UserDashboard/UserDashboard";
import EditUserData from "../src/pages/UserDashboard/Profile/EditUserData";
import Footer from "../src/components/footer/Footer";
import ViewTable from "./pages/UserDashboard/Table/ViewTable";

function App() {
  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    if (!user) {
      return <Navigate to="/login" />;
    }
    return children;
  };
  const { user } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/WhyUs" element={<WhyUsPage />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Intro" element={<Intro />} />
        <Route path="/hotels/:SortBy/:Region" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        
        <Route path="/userDashboard" element={<ProtectedRoute><UserDashboard /></ProtectedRoute>} />
        <Route path="/userDashboard/booking/:id" element={<ProtectedRoute><ViewTable /></ProtectedRoute>} />
        <Route path="/userDashboard/update/:id" element={<ProtectedRoute><EditUserData /></ProtectedRoute>} />

        <Route path="/login" element={user?<Home/>:<Login />} />
        <Route path="/register" element={user?<Home/>:<Register />} />
        <Route path="/forgotPassword" element={<ForgotPass />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

