import { Link, useLoaderData } from "react-router-dom";
import AllCraftEdt from "../AllCraftEdt/AllCraftEdt";


const AllArtcraftItems = () => {
    const crafts = useLoaderData();
   
    return (
       <div>
        <h2 className="text-4xl text-center font-bold pt-9">All Art & Craft Items</h2>
         <div className="mx-[20%] mt-20 mb-44">
            {
               crafts.map(craft => <AllCraftEdt key={craft._id} craft={craft}></AllCraftEdt>)
            }
        </div>
       </div>
    );
};

export default AllArtcraftItems;