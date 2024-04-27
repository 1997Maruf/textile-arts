import { useEffect, useState } from 'react';
import CardEdt from '../CardEdt/CardEdt';

const CardItem = () => {
    const [cards, setCards] = useState([]);
     console.log(cards)
    useEffect(() =>{
        fetch('json.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])
    return (
        <div className ="grid lg:grid-cols-3 gap-8 md:grid-cols-2	lg:mx-64 mt-20">
           {
            cards.map(card => <CardEdt key={card.id} card={card}></CardEdt>)
           }
        </div>
    );
};

export default CardItem;