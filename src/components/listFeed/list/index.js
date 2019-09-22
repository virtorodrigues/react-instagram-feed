import React from 'react'
import './style.css'
import Item from '../item'

export default function List({ items }) {
    return(
        <div className="list-container">
            { items.map((item) => <Item item={item} />) }
        </div>
    )
}