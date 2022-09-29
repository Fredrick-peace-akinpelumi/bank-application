import { Link, useNavigate } from 'react-router-dom'

const logo = './images/kudalogo-removebg-preview.png'
export default function Navbar() {
    const navigate = useNavigate()
    const getKuda=()=>{
        navigate('/signup')
    }
  return (
    <>
     <nav className="navbar navbar-expand-lg navbar-dark bg-white fixed-top ">
 <div className="container-fluid shift " style={{marginLeft:"20vh"}}>
  <a className="navbar-brand "><img className=" ms-5" style={{ width:"13vh"}} src={logo} alt="" /></a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav"  aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="main_nav">
	<ul className="navbar-nav p-2 col-lg-12">
  <li className="nav-item dropdown">
		   <a className="nav-link  dropdown-toggle ms-5" style={{color:"rgb(64,25,109)"}} href="#" data-bs-toggle="dropdown">  <b>Features</b>  </a>
		    <ul className="dropdown-menu ">
			  <li><a className="dropdown-item" href="#"><i className="fa-sharp fa-solid fa-money-bills rounded-circle p-2" style={{color:"rgb(64,25,109)", backgroundColor:"rgb(223,227,255)"}}></i> Kuda card</a></li>
			  <li><a className="dropdown-item" href="#"> <i className="fa-solid fa-paper-plane rounded-circle p-2" style={{color:"rgb(64,25,109)", backgroundColor:"rgb(223,227,255)"}}></i> Spend </a></li>
			  <li><a className="dropdown-item" href="#"> <i class="fa-sharp fa-solid fa-piggy-bank rounded-circle p-2" style={{color:"rgb(64,25,109)", backgroundColor:"rgb(223,227,255)"}}></i> Save </a></li>
			  <li><a className="dropdown-item" href="#"> <i class="fa-sharp fa-solid fa-comments-dollar rounded-circle p-2" style={{color:"rgb(64,25,109)", backgroundColor:"rgb(223,227,255)"}}></i> Budget </a></li>
			  <li><a className="dropdown-item" href="#"> <i className="fa-sharp fa-solid fa-sack-dollar rounded-circle p-2" style={{color:"rgb(64,25,109)", backgroundColor:"rgb(223,227,255)"}}></i> Borrow </a></li>
		    </ul>
		</li>
		<li className="nav-item active"> <a className="nav-link ms-5" style={{color:"rgb(64,25,109)"}} href="#"><b>Business</b> </a> </li>
		<li className="nav-item dropdown">
		   <a className="nav-link  dropdown-toggle ms-5" style={{color:"rgb(64,25,109)"}} href="#" data-bs-toggle="dropdown"> <b> Company</b>  </a>
		    <ul className="dropdown-menu ">
			  <li><a className="dropdown-item" href="#"> Blog</a></li>
			  <li><a className="dropdown-item" href="#"> Press </a></li>
			  <li><a className="dropdown-item" href="#"> Join our team </a></li>
			  <li><a className="dropdown-item" href="#"> About us </a></li>
		    </ul>
		</li>
		<li className="nav-item dropdown">
		   <a className="nav-link  dropdown-toggle ms-5" style={{color:"rgb(64,25,109)"}} href="#" data-bs-toggle="dropdown">  <b>Help</b>  </a>
		    <ul className="dropdown-menu">
			  <li><a className="dropdown-item" href="#"> Get Help</a></li>
			  <li><a className="dropdown-item" href="#"> FAQs </a></li>
			  <li><a className="dropdown-item" href="#"> Security </a></li>
			  <li><a className="dropdown-item" href="#"> Contact Us </a></li>
		    </ul>
		</li>

	</ul>
  <ul className="navbar-nav sign col-lg-6">
   <li className="nav-item active"> <Link className="nav-link" style={{color:"rgb(64,25,109)"}} to={'/signin'}><b>Sign in</b></Link> </li>
    <button className="btn text-white p-2 butt ms-5" onClick={getKuda}>Get Kuda</button>
  </ul>
  </div> 
 </div> 
</nav>
    </>
  )
}
