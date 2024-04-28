
import { Helmet } from "react-helmet-async";

import Carousel from "../Carousel/Carousel";
import { Link, useLoaderData } from "react-router-dom";
import CardEdt from "../CardEdt/CardEdt";



const Home = () => {

    const crafts = useLoaderData();
    
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
           <Carousel></Carousel> 
       
         <div className="grid grid-cols-3 gap-6 mx-44 mt-20">
         {
            crafts.map(craft => <CardEdt key={craft._id} craft={craft}></CardEdt>)
           }
         </div>
            <h2 className="text-4xl text-center font-bold pt-9">CUSTOMER FEEDBACK</h2>
          <div className="carousel w-full mt-20">
         <div id="slide1" className="carousel-item relative w-full">
         <p className="mx-auto text-[20px] text-center">"I absolutely love shopping at Textile Arts! The selection of materials is fantastic, and the quality is top-notch. Plus, their customer <br></br>service is excellent - always helpful and friendly. I've learned so much from their tutorials and blog posts. Highly recommend!"</p>
           <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
             <a href="#slide4" className="btn btn-circle">❮</a> 
             <a href="#slide2" className="btn btn-circle">❯</a>
           </div>
         </div> 
         <div id="slide2" className="carousel-item relative w-full">
         <p className="mx-auto text-[20px] text-center">"Great experience overall. The website is easy to navigate, and I found exactly what I was looking for. My order arrived promptly, <br></br>and the products were exactly as described. The only reason I'm not giving 5 stars is that I wish they had a few<br></br> more options in the knitting section. Otherwise, fantastic!"</p>
           <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
             <a href="#slide5" className="btn btn-circle">❮</a> 
             <a href="#slide7" className="btn btn-circle">❯</a>
           </div>
         </div> 
         <div id="slide3" className="carousel-item relative w-full">
         <p className="mx-auto text-[20px] text-center">"Textile Arts has become my go-to for all things textile-related. The community aspect is what sets it apart - it feels like a welcoming space where everyone is encouraged to share their creations<br></br> and ideas. The events and workshops are a great way to connect<br></br> with other enthusiasts. Keep up the fantastic work!"</p>
           <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
             <a href="#slide6" className="btn btn-circle">❮</a> 
             <a href="#slide8" className="btn btn-circle">❯</a>
           </div>
         </div> 
         <div id="slide4" className="carousel-item relative w-full">
         <p className="mx-auto text-[20px] text-center">"I recently attended one of Textile Arts' workshops, and I had a wonderful time! The instructor was knowledgeable and patient, and I learned some new techniques that I can't wait to try at home. The only suggestion I have is to offer <br></br>more workshops in different locations. Overall, a great experience!"</p>
           <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
             <a href="#slide7" className="btn btn-circle">❮</a> 
             <a href="#slide5" className="btn btn-circle">❯</a>
           </div>
         </div>      
    </div>

          <div className="  bg-base-200 mt-10 pb-10">
            <div className=" text-center">
             <div className=" mx-56">
              <h1 className="text-5xl font-bold pt-9">ABOUT US</h1>
              <p className="py-6">At Textile Arts, we're passionate about the timeless craft of textile creation. From the delicate artistry of embroidery to the cozy comfort of handmade quilts, our love for textiles knows no bounds.
            Our journey began with a shared vision: to create a space where artisans, hobbyists, and enthusiasts alike could come together to celebrate and explore the world of textile arts. What started as a humble idea has blossomed into a vibrant community, united by our appreciation for craftsmanship and creativity.</p>
             <Link to='/allcard' className="btn btn-primary">All Art & Craft</Link>
          </div>
       </div>
     </div>

      
 </div>
    );
};

export default Home;