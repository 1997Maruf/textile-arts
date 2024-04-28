import { useEffect } from "react";
import UseAuth from "../../Hooks/UseAuth";


const MyArtCraftList = () => {
    const {user} = UseAuth() || {};

    useEffect(()=>{
       fetch(`http://localhost:5000/MyArtCraftList/${user?.email}`)
       .then(res => res.json())
       .then(data =>{
        console.log(data)
       })
    },[user])
    return (
        <div>
            <h2>my art card list</h2>
        </div>
    );
};

export default MyArtCraftList;