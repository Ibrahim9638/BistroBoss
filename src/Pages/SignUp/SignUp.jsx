import React, { useContext } from 'react';
import SignUpImg from "../../assets/others/authentication1.png";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'



const SignUp = () => {
    const {createUser, updateUserProfile} = useContext(AuthContext);
    const { register, handleSubmit, reset,formState: { errors } } = useForm();
    const navigate = useNavigate()


    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            updateUserProfile(data.name, data.photoURL)
           .then(()=>{
            console.log("User updated successfully");
            reset();
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'User updated successfully',
                showConfirmButton: false,
                timer: 2500
              })
              navigate('/');
           })
           .catch(error =>console.log(error))
            
        })
        .catch(error => console.log(error))
    }

    
    // const handleSignUp = (event)=>{
    //     event.preventDefault();
    //     const name = event.target.name.value;
    //     const email = event.target.email.value;
    //     const password = event.target.password.value;
    //     const user ={name, email, password}
    //     console.log(user)
    //     createUser(email, password)
    //     .then(result => {
    //         const user = result.user;
    //         console.log(user);
    //     })
    //     .catch(error=>{
    //         console.log(error.message);
    //     })    
    // }


    return (
        <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse gap-16">
        <div className="text-center lg:w-[600px] lg:text-left">
          <img className="rounded-2xl" src={SignUpImg} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
         
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <h1 className="text-center text-xl font-bold">Please SignUp</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
              {...register("name", { required: true })}
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
              />
              {errors.name && <span className='text-red-600'>Name field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">PhotoURL</span>
              </label>
              <input
              {...register("photoURL", { required: true })}
                type="text"
                name="photoURL"
                placeholder="Photo URL"
                className="input input-bordered"
              />
              {errors.photoURL && <span className='text-red-600'>PhotoURL field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
               {...register("email", { required: true })}
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
              />
              {errors.email && <span className='text-red-600'>Email field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
               {...register("password",
               { required: true, 
                minLength:6, 
                maxLength: 20,
                pattern: /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z >>!#$%&? "<<])[a-zA-Z0-9 >>!#$%&?<<]{8,20}$/

            } )}
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
              />
              {errors.password && <span className='text-red-600'>Password at least 6 Character </span>}
              {errors.password?.type === 'maxLength' && <p className='text-red-600'>Password Maximum  20 Character</p>}
              {errors.password?.type === 'pattern' && <p className='text-red-600'>You have at least One digit and One Uppercase and One Lowercase and Special character</p>}
            </div>

            <div className="form-control mt-6">
              <input  className="btn bg-[#D1A054] border-0" type="submit" value="SignUp" />
            </div>
            <p className="text-orange-400 text-center"><small>Already Registered? <Link to='/login' className=" font-bold">Go to login</Link></small></p>
          </form>

        </div>
      </div>
    </div>
    );
};

export default SignUp;