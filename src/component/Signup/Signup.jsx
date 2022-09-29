import { Link} from 'react-router-dom'
import { useState } from 'react'
import './Signup.css'
import { useFormik } from 'formik'
import * as yup from 'yup'
const img = './images/signup.svg'
export default function Signup() {
  const formik = useFormik({
    initialValues:{
      firstname:"",
      lastname:"",
      email:"",
      password:""
    },
    onSubmit:(values)=>{
      console.log(values);
    },
    // validate:(values)=>{
    //   let errors ={}
    //     if (values.firstname=="") {
    //       errors.firstname = "This field is required"
    //     }else if (values.firstname.length<4) {
    //       errors.firstname = "Firstname must be greater than four"
    //     }
    //     if (values.lastname=="") {
    //       errors.lastname = "This field is required"
    //     }else if (values.lastname.length<4) {
    //       errors.lastname = "lastname must be greater than four"
    //     }
    //     if (values.email=="") {
    //       errors.email = "This field is required"
    //     }else if (values.email.length<4) {
    //       errors.email = "email must be greater than four"
    //     }
    //     if (values.password=="") {
    //       errors.password = "This field is required"
    //     }else if (values.password.length<7) {
    //       errors.password = "password must be greater than seven"
    //     }
    //   return errors
    // }

    validationSchema : yup.object({
      firstname : yup.string().required('This field is required').min(5,'Must be up to 5 characters'),
      lastname : yup.string().required('This field is required').min(5,'Must be up to 5 characters'),
      email : yup.string().required('This field is required').email('Invalid email input'),
      password : yup.string().required('This field is required').min(7,'Must be up to 7 characters'),
    })
  })
  // console.log(formik.errors);

  return (
    <>
    <div className="container-fluid d-lg-flex cont ">
              <div className="col-lg-4 col-sm-12 col-md-6 p-5 mt-5">
              <div className="alert alert-primary"> 
                <p className="theColor"><i className ="fa-solid fa-lock" style={{color:"rgb(72,211,138)"}}></i> Please, check your browser’s address bar to be sure you’re on</p>
                </div>
                <div className="p-5 shadow">
                <h3>Sign up to Kuda</h3>
                <p>To sign up input all important details and do not forget your password</p>
                <form action="" onSubmit={formik.handleSubmit}>
                
                <label htmlFor="" className='ms-2'>First Name</label>
                <input 
                type="text"
                 name='firstname'
                  placeholder="Firstname"
                  onChange={formik.handleChange}
                  className="form-control border-0 border-bottom shadow-none" 
                  onBlur={formik.handleBlur}
                  />
                  {formik.touched.firstname? <p className='text-danger'>{formik.errors.firstname}</p>:""}


                
                  
                  
                <label htmlFor="" className='ms-2'>Last Name</label>
                <input 
                type="text" 
                name='lastname' 
                placeholder="Lastname" 
                onChange={formik.handleChange}
                className="form-control border-0 border-bottom shadow-none" 
                onBlur={formik.handleBlur}
                />
                 {formik.touched.lastname? <p className='text-danger'>{formik.errors.lastname}</p>:""}

                <label htmlFor="" className='ms-2'>Email Address</label>

                <input type="email" 
                name='email'
                placeholder="example@gmail.com" 
                onChange={formik.handleChange}
                className="form-control border-0 border-bottom shadow-none" 
                onBlur={formik.handleBlur}
                />
                 {formik.touched.email? <p className='text-danger'>{formik.errors.email}</p>:""}
                <label htmlFor="" className='ms-2'>password</label>

                <input 
                type="password"
                name='password'
                placeholder="password" 
                onChange={formik.handleChange}
                className="form-control border-0 border-bottom shadow-none" 
                onBlur={formik.handleBlur}
                />
                {/* <p className='theColor'>Forgot Password? Reset it</p> */}
                {formik.touched.password? <p className='text-danger'>{formik.errors.password}</p>:""}
                <Link className='theColor text-decoration-none' to={'/signin'}>Already have an account</Link> <br /> <br />

                <button 
                className='btn p-3 w-50' 
                type='submit'
                style={{backgroundColor:"rgb(64,25,109)", color:"white"}}>
                  Sign Up
                  </button>
                </form>
                </div>
              </div>
              <img src={img} alt="" />
       
    </div>
    </>
  )
}
