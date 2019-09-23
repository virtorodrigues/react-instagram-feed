import React, { useState } from 'react'
import List from '../../components/listFeed/list'
import api from '../../services'

import './style.css'

export default function Feed() {
    const [ list ] = useState(api())
    
    return (
        <div className="feed-container">
           <List  items={list}/>
        </div>
    )
}