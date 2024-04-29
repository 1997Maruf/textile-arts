import { Link, useLoaderData, useParams } from "react-router-dom";


const CardDitals = () => {
    const crafts = useLoaderData();
    const {_id,name,email,item,sub,price,rating ,customization, processing,stockStatus,photo,description} = crafts;
   

    const craftId = parseInt(_id);
    const craft = crafts.find(card => card.id == craftId)
    console.log(craft)
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content ">
    <div className="">
        <img src={craft.image} alt="" />
      <h1 className="text-4xl my-4 font-bold">{craft.estate_title}</h1>
      <h1 className="text-3xl font-bold">{craft.segment_name}</h1>
      <p className="py-2 text-start font-medium	">{craft.description}</p>
      <p className="py-2 font-medium	"><span className="font-semibold	">price :</span> {craft.price}</p>
      <p className="py-2 font-medium"><span className="font-semibold	">status :</span> {craft.status}</p>
      <p className="py-2 font-medium"><span className="font-semibold	">area :</span> {craft.area}</p>
      <p className="py-2 font-medium"><span className="font-semibold">location :</span> {craft.area}</p>
      <p className="font-semibold	">facilities</p>
  
      <Link to='/' className="btn btn-primary">Go Home</Link>
    </div>
  </div>
</div>
    );
};

export default CardDitals;