import "./Signin.css"
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import * as yup from 'yup'
const img = './images/signin.PNG'
export default function Signin() {
  const formik = useFormik({
    initialValues:{
      email:"",
      password:""
    },
    onSubmit:(values)=>{
      console.log(values);
    },
    validationSchema : yup.object({
      email : yup.string().required('This field is required').email('Invalid email input'),
      password : yup.string().required('This field is required').min(7,'Must be up to 7 characters'),
    })
  })
  return (
      <>
       <div className="container-fluid d-lg-flex cont">
              <div className="col-lg-4 col-sm-12 col-md-6 p-5 mt-5">
              <div className="alert alert-primary"> 
                <p className="theColor"><i className="fa-solid fa-lock" style={{color:"rgb(72,211,138)"}}></i> Please, check your browser’s address bar to be sure you’re on</p>
                </div>
                <div className="p-5 shadow">
                <h3>Sign in to Kuda</h3>
                <p>To sign in make sure your email is the same as the one used while opening kuda account</p>
             <form action="" onSubmit={formik.handleSubmit}>
             <label htmlFor="" className='ms-2'>Email Address</label>
                <input
                 type="Firstname"
                 name="email"
                  placeholder="example@gmail.com"
                  onChange={formik.handleChange}
                   className="form-control border-0 border-bottom shadow-none" 
                   onBlur={formik.handleBlur}
                   />
                   {formik.touched.email? <p className='text-danger'>{formik.errors.email}</p>:""}

                <label htmlFor="" className='ms-2'>password</label>
                <input type="password"
                 placeholder="password"
                 name="password"
                 onChange={formik.handleChange} 
                  className="form-control border-0 border-bottom shadow-none"
                  onBlur={formik.handleBlur}/>
                  {formik.touched.password? <p className='text-danger'>{formik.errors.password}</p>:""}
                <Link className='theColor text-decoration-none' to={'/signup'}>Create an account</Link> <br /> <br />
                <button
                 className='btn p-3 w-50' 
                 type="submit"
                 style={{backgroundColor:"rgb(64,25,109)", color:"white"}}>
                  Sign Up
                 </button>
             </form>
                </div>
              </div>
              <img className='img' src={img}  alt="" />

       
    </div>
      </>
  )
}
