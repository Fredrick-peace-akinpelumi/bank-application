
import{React,useState} from "react"
import NavbarTwo from '../NavbarTwo'
// import { Link } from 'react-router-dom'
import '../UserDashboard/UserDashboard.css'
const  borrow = './images/borrow.PNG'
const logo = './images/kudalogo-removebg-preview.png'

export default function UserDashboard() {
  // const [switch,setSwitch]=useState()
  const [Switch, setSwitch] = useState("spend")
  return (
    <>
    <NavbarTwo/>
  <div className="p-3" style={{backgroundColor:"rgb(18,18,18)", height:"950px",  width:"100%", marginTop:"70px"}}>
    <div className=" mx-auto text-light col-lg-6 col-sm-12 col-md-6 "  >

    {Switch==="spend"? <div className="d-flex justify-content-between p-3 ">
     <div >
      <span>Account Balance</span>
      <h1>#0.00</h1>
      </div>
      <button className=" btn  text-white rounded-4 mt-3 " style={{backgroundColor: "rgb(64,25,109)", height:"50px"}}>Add Money</button>
    </div>:<>{
      Switch==="save"?<div className="d-flex justify-content-between text-success p-3 ">
     <div>
      <span>Savings account</span>
      <h1>#0.00</h1>
      </div>
      <button className=" btn  text-white rounded-4 btn-success mt-3" style={{height:"50px"}}>Save Now</button>
    </div>:<div className="d-flex justify-content-between p-3  text-info">
     <div >
      <span>Account Balance</span>
      <h1>#0.00</h1>
      </div>
      <button className=" btn  text-white rounded-4 btn-info mt-3" style={{height:"50px"}}>Get a loan</button>
    </div>
    }
    </>}

      <div className='d-flex justify-content-between p-3' style={{backgroundColor: "rgb(24,24,24)"}}>
        <button className='text-white btn border-0 fs-4' onClick={()=>setSwitch("spend")}>Spend</button>
        <button className='text-white btn border-0 fs-4' onClick={()=>setSwitch("save")}>Save</button>
        <button className='text-white btn border-0 fs-4' onClick={()=>setSwitch("borrow")}>Borrow</button>
      </div>
      
     <div className="d-flex justify-content-between">
      <div className={ Switch==="spend"?`bg-white`:"bg-dark"} style={{width:"200px", height:"2px"}}></div>
      <div className={ Switch==="save"?`bg-white`:"bg-dark"} style={{width:"200px", height:"2px"}}></div>
      <div className={ Switch==="borrow"?`bg-white`:"bg-dark"} style={{width:"200px", height:"2px"}}></div>

     </div>

      {/* starting of transaction history */}
   {Switch==="spend"? <div >
      <input type="text" placeholder='Search Transactions' className='form-control shadow-none text-white mt-3 border-0 p-3' style={{backgroundColor: "rgb(24,24,24)"}}/>
    <div className="d-flex justify-content-between">
    <div className="d-flex mt-4">
      <img className=" bg-white rounded-circle" style={{width:"30px", height:"30px"}} src={logo} alt="" />
      <p className="ms-1">Peace akinpelumi fredrick</p>
      </div>
      <p className="mt-4">#50,000</p>
    </div>
    <hr className="text-white " />
    <div className="d-flex justify-content-between">
    <div className="d-flex mt-4">
      <img className=" bg-white rounded-circle" style={{width:"30px", height:"30px"}} src={logo} alt="" />
      <p className="ms-1">Peace akinpelumi fredrick</p>
      </div>
      <p className="mt-4">#50,000</p>
    </div>
    <hr className="text-white " />
    <div className="d-flex justify-content-between">
    <div className="d-flex mt-4">
      <img className=" bg-white rounded-circle" style={{width:"30px", height:"30px"}} src={logo} alt="" />
      <p className="ms-1">Peace akinpelumi fredrick</p>
      </div>
      <p className="mt-4">#50,000</p>
    </div>
    <hr className="text-white " />
    <div className="d-flex justify-content-between">
    <div className="d-flex mt-4">
      <img className=" bg-white rounded-circle" style={{width:"30px", height:"30px"}} src={logo} alt="" />
      <p className="ms-1">Peace akinpelumi fredrick</p>
      </div>
      <p className="mt-4">#50,000</p>
    </div>
    <hr className="text-white " />
    <div className="d-flex justify-content-between">
    <div className="d-flex mt-4">
      <img className=" bg-white rounded-circle" style={{width:"30px", height:"30px"}} src={logo} alt="" />
      <p className="ms-1">Peace akinpelumi fredrick</p>
      </div>
      <p className="mt-4">#50,000</p>
    </div>
    <hr className="text-white " />
    <div className="d-flex justify-content-between">
    <div className="d-flex mt-4">
      <img className=" bg-white rounded-circle" style={{width:"30px", height:"30px"}} src={logo} alt="" />
      <p className="ms-1">Peace akinpelumi fredrick</p>
      </div>
      <p className="mt-4">#50,000</p>
    </div>
    <hr className="text-white " />
    <div className="d-flex justify-content-between">
    <div className="d-flex mt-4">
      <img className=" bg-white rounded-circle" style={{width:"30px", height:"30px"}} src={logo} alt="" />
      <p className="ms-1">Peace akinpelumi fredrick</p>
      </div>
      <p className="mt-4">#50,000</p>
    </div>
    <hr className="text-white " />

    
    {/* starting of save  */}
    </div>:<>{
      Switch==="save"?<div className="p-5 mx-auto text-center col-lg-6 col-sm-12 mt-3" style={{backgroundColor: "rgb(24,24,24)", height:"200px" }}>
    <h2 className="mt-3 text-primary">Save Now <span className="fw-bold fs-1">+</span></h2>

    </div>: <div className="container col-lg-4">
      <img src={borrow} alt="" />
      <p className="text-center">Please use the bank often to be eligible for overdraft,😊 We love you😍😘</p>
    </div>
    }
    </>}
     </div>
  </div>
    </>
  )
}
