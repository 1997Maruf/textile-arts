import UseAuth from "../../Hooks/UseAuth";


const SocalLogin = () => {
         
 const {googleLogin, githubLogin  } = UseAuth();
    return (
        <div className="flex justify-between mx-10 ">
            <button className="bg-red-600 rounded-lg mr-4 py-2 px-3 text-[#fff]" onClick={()=>googleLogin()}>Google</button>
            <button className="bg-orange-600 rounded-lg	py-2 px-3 text-[#fff]" onClick={()=>githubLogin ()}>GitHub</button>
        </div>
    );
};

export default SocalLogin;