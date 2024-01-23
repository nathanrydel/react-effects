import React, { useEffect, useState } from 'react';
import Card from './Card';
import './CardDeck.css';

/**
 * A container for the cards
 *
 * Props:
 * - none
 *
 * State:
 * - deck: { deckid , remaining }
 * - card: { code, image, images, value, suit }
 *
 * App -> CardDeck -> Card
 */

function CardDeck() {
  const [deck, setDeck] = useState({ deckId: undefined, remaining: undefined });
  const [card, setCard] = useState({});

  async function drawCard() {
    return null;
  }

  useEffect(function fetchNewDeckWhenMounted() {
    async function fetchNewDeck() {
      const response = await fetch();
      const { deckId, remaining } = await response.json();
      setDeck({
        deckId,
        remaining,
      });
    }
    fetchNewDeck();
  }, []);

  return (
    <div className='CardDeck'>
      <button className='CardDeck-new-card-btn' onClick={drawCard}>
        Draw a new card.
      </button>
      <Card card={card} />
    </div>
  );
}

export default CardDeck;