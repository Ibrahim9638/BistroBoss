import React, { useContext, useEffect, useState } from "react";
import logImg from "../../assets/others/authentication1.png";
import { loadCaptchaEnginge, LoadCanvasTemplate,validateCaptcha } from 'react-simple-captcha';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { signIn} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

    const [disable, setDisable] = useState(true)

    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])


    const handleLogin = (event) =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const user ={email, password}
        console.log(user);
        signIn(email, password)
        .then(result=>{
          const user = result.user;
          console.log(user);
          Swal.fire({
            title: 'User Login Successfully',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
          navigate(from, { replace: true });
        })
         .catch(error =>{
          console.log(error);
         })
        
    }

    const handleValidateCaptcha = (e)=>{
        const user_captcha_value = e.target.value;

        if (validateCaptcha(user_captcha_value)) {
            setDisable(false)
        }
        else{
            setDisable(true);
        }
    }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row gap-16">
        <div className="text-center lg:w-[600px] lg:text-left">
          <img className="rounded-2xl" src={logImg} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
         
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-center text-xl font-bold">Please Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
              <LoadCanvasTemplate />
              </label>
              <input onBlur={handleValidateCaptcha}
                type="text"
                name="captcha"
                placeholder="Type your captcha"
                className="input input-bordered"
              />
            </div>
           
            <div className="form-control mt-6">
              <input disabled={disable} className="btn bg-[#D1A054] border-0" type="submit" value="Login" />
            </div>
          <p className="text-orange-400 text-center"><small>New Here? <Link to='/signUp' className=" font-bold">Create a New Account</Link></small></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
