import React from 'react'

import './style.css'

import more from '../../../assets/more.svg'
import comment from '../../../assets/comment.svg'
import like from '../../../assets/like.svg'
import send from '../../../assets/send.svg'

export default function Item({item}) {

    return (
        <div className="item-container">
            <header>
                <div className="user-info">
                    <span>{item.name}</span>
                    <span className="location">{item.location}</span>
                </div>
               <img src={more} alt="..." />
            </header>

            <img className="img-feed" src={item.image} alt="myimage" />
            
            <footer>
                <div className="actions">
                    <img src={like} alt=".." />
                    <img src={comment} alt=".." />
                    <img src={send} alt=".." />
                </div>
                <strong>{item.like} curtidas</strong>
                <p>
                    {item.desciption}
                    <span>{item.hashtag}</span>
                </p>
            </footer>
        </div>
    )
}