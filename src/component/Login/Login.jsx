
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import UseAuth from "../../Hooks/UseAuth";
import SocalLogin from "../SocalLogin/SocalLogin";
import { Helmet } from "react-helmet-async";


const Login = () => {
    const {signInUser} = UseAuth();
  
    const navigate = useNavigate();
    const location = useLocation();
    const form = location?.state || '/';
    const { register, handleSubmit,  formState: { errors } } = useForm();

  const onSubmit = data =>{
    
    const {email, password} = data;
    signInUser(email, password)
    .then((result) => {
      if(result.user){
        navigate(form);
      }

    })
    .catch(error =>{
      console.log(error)
    })

   }
    
    return (
        <div className="hero min-h-screen bg-base-200">
          <Helmet>
            <title>Login </title>
          </Helmet>
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            
          </div>
          <div className="s shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)}  className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered"  name="email" {...register("email", { required: true })} />
                {errors.email && <span>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" name="password" {...register("password", { required: true })} />
                {errors.password && <span>This field is required</span>}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
           <div>
           <SocalLogin></SocalLogin>
           </div>
            <p className="text-center mt-8 pb-4">Do not have an account <Link to='/register' className="font-bold text-orange-600">Register</Link></p>
          </div>
        </div>
      </div>
    );
};

export default Login;