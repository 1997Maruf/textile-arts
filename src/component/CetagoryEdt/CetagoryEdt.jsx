

const CetagoryEdt = ({category}) => {
    const {_id,name,email,item,sub,price,rating ,customization, processing,stockStatus,photo,description}= category;
    return (
        <div className=" bg-base-200 mb-8 pb-9">
          
        <div className="px-10">
          <img src={photo} className='w-full h-[400px]' alt="" />
          <h1 className="text-4xl mt-10 font-bold">{item}</h1>
          <h1 className="text-3xl mt-4 font-bold">{sub}</h1>
          <p className="py-6">{description}</p>
          <p className="py-6"><span className='font-bold'>Customization : </span> {customization}</p>
          <p className="py-6"><span className='font-bold'>Processing : </span>{processing}</p>
          <p className="py-6"><span className='font-bold'>Rice : </span>{price}</p>
          <p className="py-6"><span className='font-bold'>Rating : </span>{rating}</p>
          <p className="py-6"><span className='font-bold'>StockStatus : </span>{stockStatus}</p>
          </div>
</div>
    );
};

export default CetagoryEdt;