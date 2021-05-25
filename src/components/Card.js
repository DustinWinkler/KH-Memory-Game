import React from 'react'

export default function Card(props) {
  const imageUrl = props.image.url
  return (
    <div className="card" >
      <img alt="Character" src={imageUrl}></img>
      <p>{props.image.name}</p>
    </div>
  )
}
