import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'
import './TinderCards.scss'

function TinderCards(props) {
  const [people, setPeople] = useState([
    {
      name: 'steve jobs',
      url:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Steve_Jobs_Headshot_2010-CROP2.jpg/1200px-Steve_Jobs_Headshot_2010-CROP2.jpg',
    },
    {
      name: 'mark zuckenberg',
      url:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/800px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg',
    },
  ])

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
