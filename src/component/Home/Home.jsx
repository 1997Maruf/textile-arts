
import { Helmet } from "react-helmet-async";
import CardItem from "../CardItem/CardItem";
import Carousel from "../Carousel/Carousel";



const Home = () => {
    
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
           <Carousel></Carousel> 
          
          <CardItem></CardItem>

        </div>
    );
};

export default Home;