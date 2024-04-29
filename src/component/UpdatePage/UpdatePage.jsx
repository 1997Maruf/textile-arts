import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdatePage = () => {
    
    const craft = useLoaderData();
    const {_id,item,sub,price,rating ,customization, processing,stockStatus,photo,description} = craft;

        const handelUpdate = event => {

            event.preventDefault();
    
            const form = event.target;
    
           
            const item = form.item.value;
            const sub = form.sub.value;
            const price = form.price.value;
            const rating = form.rating.value;
            const customization = form.customization.value;
            const processing = form.processing.value;
            const stockStatus = form.stockStatus.value;
            const photo = form.photo.value;
            const description = form.description.value;
    
            const newCraft = { item,sub,price,rating ,customization, processing,stockStatus,photo,description }
    
            console.log(newCraft);
         

            fetch(`http://localhost:5000/craft/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCraft)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount > 0){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Craft Update Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
            })
        
        }
    
    
        return (
            <div className="bg-[#F4F3F0] p-24">
                <h2 className="text-3xl font-extrabold">Update a Textile Arts CArd : {item}</h2>
                <form onSubmit={handelUpdate}>
                    {/* form name and quantity row */}
                    <div className="md:flex mb-8">
                        
                    </div>
                    {/* form supplier row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">item_name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="item" defaultValue={item} placeholder="item_name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">subcategory_Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="sub" defaultValue={sub} placeholder="subcategory_Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form category and details row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="price" defaultValue={price} placeholder="price" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">rating</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="rating" defaultValue={rating} placeholder="rating" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">customization</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="customization" defaultValue={customization} placeholder="customization" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">processing_time</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="processing" defaultValue={processing} placeholder="processing_time" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form Photo url row */}
                    <div className="mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="photo" defaultValue={photo}  placeholder="Photo URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">stockStatus </span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="stockStatus" defaultValue={stockStatus}   placeholder="stockStatus " className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">description </span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="description" defaultValue={description}  placeholder="description " className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Add" className="btn btn-block" />
    
                </form>
            </div>
    );
};

export default UpdatePage;