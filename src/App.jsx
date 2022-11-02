import { Route, Routes } from "react-router";
import Dashboard from "./component/Dashboard";
// import Navbar from "./component/Navbar";
import Signin from "./component/Signup/Signin/Signin";
import Error from "./component/Error/Error";
import UserDashboard from "./component/UserDashboard/UserDashboard"
import Signup from "./component/Signup/Signup";
import Notfound from "./component/Error/Notfound";

export default function App() {
  
  return (
    <>
    
    <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="signup" element={<Signup/>}/>
      <Route path="signin" element={<Signin/>}/>
      <Route path="dashboard" element={<UserDashboard/>}/>
      <Route path="error" element={<Error/>}/>
      <Route path="*" element={<Notfound/>}/>
    </Routes>
    </>
  )
}
