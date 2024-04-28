
import {  Link, NavLink } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";




const Navbar = () => {
  const {logOut, user} = UseAuth({});
    const link = <>
      
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/login'>Login</NavLink></li>
      <li><NavLink to='/register'>Register Page</NavLink></li>
      <li><NavLink to='allcard'>All Art & craft Items</NavLink></li>

      {
        user ? <div className="flex">
        <li> <NavLink to='/addcraft' >Add Craft Item</NavLink> </li>
        <li> <NavLink to='/mycard' >My Art&Craft List</NavLink> </li>
        </div> : <p></p>
      }
    </>
    return (
        
       <div>
         <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
             {link}
            </ul>
          </div>
          <Link to='/' className="btn btn-ghost text-xl">Commercial</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {link}
          </ul>
        </div>
        <div className="navbar-end">
          {
            user ?  
               <div className="flex">
                 {
                  user ? <img className="w-10 rounded-full mr-4" src={user?.image} /> : <img className="w-10 rounded-full"  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                 }
                 <button className="mr-10" onClick={logOut}>Log Out</button>
              </div>
             :  <li><NavLink className="mr-10" to='/login'>Login</NavLink></li>
          }
        </div>
      </div>
       </div>
    );
};

export default Navbar;