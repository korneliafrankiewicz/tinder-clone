import React, { useEffect, useState } from 'react'
import TinderCard from 'react-tinder-card'
import database from '../../firebase'
import './TinderCards.scss'

function TinderCards(props) {
  const [people, setPeople] = useState([])

  useEffect(() => {
    const unsubscribe = database
      .collection('people')
      .onSnapshot((snapshot) =>
        setPeople(snapshot.docs.map((doc) => doc.data())),
      )

    return () => {
      //this is cleanup...
      unsubscribe()
    }
  }, [])

  return (
    <div>
      <h1>Tinder cards</h1>

      <div className="tinder-cards">
        {people.map((person) => (
          <TinderCard
            className="tinder-cards-swipe"
            key={person.name}
            preventSwipe={['up', 'down']}
          >
            <div
              className="tinder-cards-item"
              style={{ backgroundImage: `url(${person.url})` }}
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  )
}

export default TinderCards
