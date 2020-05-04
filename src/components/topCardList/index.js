 import React from 'react'
import Card from '../card'
import './top-card-list.css'

const cardListData = [
  {
    username: '@danijsmc.ct97',
    id: 1,
    followers: '160',
    todayFollowers: 12,
    icon: 'images/icon-facebook.svg',
    name: 'facebook',
  },
  {
    username: '@stalinct97',
    id: 2,
    followers: '80',
    todayFollowers: 20,
    icon: 'images/icon-twitter.svg',
    name: 'twitter',

  },
  {
    username: '@stalinmaza97',
    id: 3,
    followers: '214',
    todayFollowers: 30,
    icon: 'images/icon-instagram.svg',
    name: 'instagram',


  },
  {
    username: '@StalinMaza',
    id: 4,
    followers: '250',
    todayFollowers: 50,
    icon: 'images/icon-youtube.svg',
    name: 'youtube',

  },
]

function TopCardList() {
  return (
    <section className="top-cards">
      <div className="wrapper">
        <h2>Estádisticas Generales</h2>
        <div className="grid">
          {
            cardListData.map((cardData) => <Card key={cardData.id} {...cardData} />)
          }
        </div>
      </div>
    </section>
  )
}

export default TopCardList