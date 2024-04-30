import { Link } from "react-router-dom";

const AllCraftEdt = ({craft}) => {
    
    const {_id,name,email,item,sub,price,rating ,customization, processing,stockStatus,photo,description} = craft;
    return (
        <div className="">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
       
        <th>Name</th>
        <th className="w-[600px]">Price</th>
        <th>Rating</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <td>{item}</td>
        <td>{price}</td>
        <td>{rating}</td>
      </tr>
      
    </tbody>
  </table>
</div>
    );
};

export default AllCraftEdt;