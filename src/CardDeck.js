import React, { useEffect, useState } from 'react';
import Card from './Card';
import './CardDeck.css';

const DECK_OF_CARDS_API = "https://deckofcardsapi.com/api/deck";

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
  const [deck, setDeck] = useState({ deckId: undefined, remaining: undefined, cards:[] });
  const [card, setCard] = useState({});

  console.log("The deck is:", deck);
  console.log("The card state is:", card);

  async function drawCard() {
    console.log("THE DECK IS:", deck)
    const response = await fetch(
      `${DECK_OF_CARDS_API}/${deck.deckId}/draw/?count=52`
    );
    console.log("response here is:", response)
    const { cards }= await response.json();
    console.log("Within drawCards, cards is:", cards);
    setCard(cards[0]);
    // setDeck(()=> [...cards ])
    //TODO: Only one card shows at a time + no fix for no cards remaining error
  };

  useEffect(function fetchNewDeckWhenMounted() {
    async function fetchNewDeck() {
      const response = await fetch(
        `${DECK_OF_CARDS_API}/new/shuffle?deck_count=1`
      );
      console.log("Fetchdeck is:", fetch)
      const { deck_id, remaining } = await response.json();
      setDeck({
        deckId: deck_id,
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