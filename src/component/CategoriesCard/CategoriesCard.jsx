import { useLoaderData } from "react-router-dom";
import CetagoryEdt from "../CetagoryEdt/CetagoryEdt";


const CategoriesCard = () => {
    const categorys = useLoaderData()
    return (
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 sm:mx-10 lg:mx-32 mt-20">
            {
              categorys.map(category => <CetagoryEdt key={category._id} category={category}></CetagoryEdt>)
            }
        </div>
    );
};

export default CategoriesCard;