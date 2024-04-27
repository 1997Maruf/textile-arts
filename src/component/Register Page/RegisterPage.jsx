
import { Link } from "react-router-dom";

import { useForm } from "react-hook-form"
import UseAuth from "../../Hooks/UseAuth";
import { Helmet } from "react-helmet-async";


const RegisterPage = () => {

 const {createUser } = UseAuth();

  const { register, handleSubmit, formState: { errors } } =useForm()

  const onSubmit = (data) =>{
    const {email, password} = data;
    createUser(email, password,)
    .then((result) => {
     
        console.log(result)
      })
      


   }
    

   

    return (
        <div className="hero min-h-screen bg-base-200">
          <Helmet>
            <title>Register</title>
          </Helmet>
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
        
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={ handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Name" name="name" className="input input-bordered" {...register("name", { required: true })}/>
                {errors.Name && <span className="text-red">This field is required</span>}
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" className="input input-bordered"{ ...register("email", { required: true })}/>
                {errors.Email && <span className="text-red">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" placeholder="PhotoURL" name="photo" className="input input-bordered" { ...register("photo", { required: true })} />
                {errors.Photo && <span className="text-red">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name="password" className="input input-bordered" { ...register("password", { required: true })} />
                {errors.password && <span className="text-red">This field is required</span>}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
           <p className="text-center mt-8 pb-4">Already have an accound <Link to='/login' className="font-bold text-orange-600">Lohin</Link></p>
          </div>
        </div>
       
      </div>
    );
};

export default RegisterPage;