import React, { useContext } from 'react';
import Header from '../Header/Header';
import { FaFacebookSquare, FaGithub, FaTwitter } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/Authprovider/AuthProvider';


const Register = () => {
    const {googleLoginProvider} = useContext(AuthContext);
    const handleGoogleLogin =()=>{
        googleLoginProvider()
        .then((result)=>{console.log(result)})
        .catch((error)=>{
            console.error(error);
        })
    }
    return (
        <div>
        <Header></Header>        
 <section className="myform-area">
   
 <div className="container">
     <div className="row justify-content-center">
         <div className="col-lg-8">
             <div className="form-area login-form">
                 <div className="form-content">
                     <h2>Register Now</h2>
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non aperiam cum quas quod reprehenderit.</p>
                     <ul>
                     <li onClick={handleGoogleLogin}><a href="#" className="google "><FcGoogle className='me-1'></FcGoogle>Google</a></li>
                         <li><a href="#" className="facebook"><FaFacebookSquare className='me-1'> </FaFacebookSquare> facebook</a></li>
                         <li className=' mt-3'><a href="#"  className="twitter"><FaTwitter className='me-1'></FaTwitter> twitter</a></li>
                         
                         <li><a href="#" className="github"><FaGithub  className='me-1'></FaGithub> Github</a></li>
                     </ul>
                 </div>
                 <div className="form-input">
                     <h2>Register Form</h2>
                     <form>
                         <div className="form-group">
                             <input type="text"  id="" name="name" required/>
                             <label>User Name</label>
                         </div>
                         <div className="form-group">
                              <input type="email"  id="" name="email" required/>
                              <label>Email</label>
                          </div>
                         <div className="form-group">
                             <input type="text"  id="" name="photoUrl" required/>
                             <label>photo Url</label>
                         </div>
                         <div className="form-group">
                             <input type="password" id="" name="password" required/>
                             <label>password</label>
                         </div>
                         <div className="myform-button mb-3">
                             <button className="myform-btn">Login</button>
                         </div>
                     </form>
                     <small className='ps-5 '>Already have an Account, <Link to="/login"> Log in </Link></small>
                 </div>
             </div>
         </div>
     </div>
 </div>
</section>
</div>
    );
};

export default Register;