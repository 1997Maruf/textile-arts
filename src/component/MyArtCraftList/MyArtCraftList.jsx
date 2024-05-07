import { useEffect, useState } from "react";
import UseAuth from "../../Hooks/UseAuth";
import Details from "../Details/Details";


const MyArtCraftList = () => {
    const {user} = UseAuth() || {};
    const [crafts, setCrafts] = useState([]);
   
    useEffect(()=>{
       fetch(`https://b9a10-server-side-1997-maruf.vercel.app/craftList/${user?.email}`)
       .then(res => res.json())
       .then(data =>{
        setCrafts(data);
       })
    },[user])
    return (
        <div>
             <h2 className='mb-20 text-center text-4xl font-bold'>MY ART & CRAFT</h2>
            <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-6 sm:mx-10 lg:mx-44 mt-20">
           
            {
                crafts.map(p =><Details key={p._id} p={p}></Details>)
            }
        </div>
        </div>
    );
};

export default MyArtCraftList;