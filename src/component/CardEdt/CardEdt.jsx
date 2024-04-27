import { Link } from "react-router-dom";


const CardEdt = ({card}) => {

    const {image,estate_title,segment_name,description,area,location,id} = card;
    // 
    return (
        <div>
          <div className="card  bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{estate_title}</h2>
    <h2 className="card-title">{segment_name}</h2>
    <p>{description}</p>
    <p>{area}</p>
    <p>{location}</p>
    <div className="">
      <Link to={`/card/${id}`} className="btn btn-primary">Buy Now</Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default CardEdt;