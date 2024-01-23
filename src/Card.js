import React from 'react';
import './Card.css';

/**
 * A single card instance
 *
 * Prop:
 * - card: an object
 *
 * State: None
 *
 * CardDeck -> Card
 */

function Card({card}) {
  console.log("The card component is passed:", card);
  return (
    <div>
      <img src={card.image} alt={card.code}/>
    </div>
  );
}

export default Card;