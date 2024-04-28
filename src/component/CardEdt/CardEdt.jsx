import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CardEdt = ({craft}) => {

    const {_id,name,email,item,sub,price,rating ,customization, processing,stockStatus,photo,description} = craft;
    const handelDelete = _id =>{
     console.log(_id)

     Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
       
        fetch(`http://localhost:5000/craft/${_id}`,{
          method: 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
          console.log(data);
          if(data.deletedCount > 0){
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
          }
        })
      }
    });
    }
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
    <div className="flex justify-between mt-8	"> 
      <Link to='/update' className="btn btn-primary">Update</Link>
      <button onClick={() => handelDelete(_id) } className="btn btn-primary">Delete</button>
      <Link to={`/card/${_id}`} className="btn btn-primary">View Details</Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default CardEdt;