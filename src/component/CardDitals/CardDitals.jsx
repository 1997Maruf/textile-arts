import { Link, useLoaderData, useParams } from "react-router-dom";


const CardDitals = () => {
    const cards = useLoaderData();
    console.log(cards)
    const {id} = useParams();
    const cardId = parseInt(id);
    const card = cards.find(card => card.id == cardId)
    console.log(card)
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content ">
    <div className="">
        <img src={card.image} alt="" />
      <h1 className="text-4xl my-4 font-bold">{card.estate_title}</h1>
      <h1 className="text-3xl font-bold">{card.segment_name}</h1>
      <p className="py-2 text-start font-medium	">{card.description}</p>
      <p className="py-2 font-medium	"><span className="font-semibold	">price :</span> {card.price}</p>
      <p className="py-2 font-medium"><span className="font-semibold	">status :</span> {card.status}</p>
      <p className="py-2 font-medium"><span className="font-semibold	">area :</span> {card.area}</p>
      <p className="py-2 font-medium"><span className="font-semibold">location :</span> {card.area}</p>
      <p className="font-semibold	">facilities</p>
      <p className="py-2 font-medium">* {card.facilities[0]}</p>
      <p className="py-2 font-medium">* {card.facilities[1]}</p>
      <p className="py-2 font-medium">* {card.facilities[2]}</p>
      <Link to='/' className="btn btn-primary">Go Home</Link>
    </div>
  </div>
</div>
    );
};

export default CardDitals;