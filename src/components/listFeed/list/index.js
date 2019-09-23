import React from 'react'
import Item from '../item'
import './style.css'

export default function List({ items }) {
    return(
        <div className="list-container">
            { items.map((item, index) => <Item key={index} item={item} />) }
        </div>
    )
}