import { Link } from "react-router-dom";


const CardEdt = ({craft}) => {

    const {_id,name,email,item,sub,price,rating ,customization, processing,stockStatus,photo,description} = craft;
    
    return (
        <div>
          <div className="card  bg-base-100 shadow-xl">
  <figure><img src={photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{item}</h2>
    <h2 className="card-title">{sub}</h2>
    <p>{description}</p>
    <p>Price : {price}</p>
    <p>Rating : {rating}</p>
    <p>Customization : {customization}</p>
    <div className="">
      <Link to={`/card/${_id}`} className="btn btn-primary">View Details</Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default CardEdt;