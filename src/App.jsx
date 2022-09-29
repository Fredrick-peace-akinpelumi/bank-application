import { Route, Routes } from "react-router";
import Dashboard from "./component/Dashboard";
import Navbar from "./component/Navbar";
import Signin from "./component/Signup/Signin/Signin";
import Signup from "./component/Signup/Signup";

export default function App() {
  
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="signup" element={<Signup/>}/>
      <Route path="signin" element={<Signin/>}/>
    </Routes>
    </>
  )
}
