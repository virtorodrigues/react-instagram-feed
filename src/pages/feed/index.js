import React from 'react'
import './Style.css'
import List from '../../components/listFeed/list'

import image from '../../assets/image.jpg'
import image1 from '../../assets/image1.jpg'

export default function Feed() {

    const list = [
        {   image: image, 
            desciption: 'aasduih ausdausi uasdhiuas uasdhiuas uasdiuas uasdiua siudiuasud o', 
            like: '300', 
            name: 'Vitor Santos Rodrigues', 
            hashtag: '#react', 
            location: 'Presidente Prudente-sp' 
        },
        {   image: image1, 
            desciption: 'aasduih ausdausi uasdhiuas uasdhiuas uasdiuas uasdiua siudiuasud o', 
            like: '100', 
            name: 'Vitor Santos Rodrigues', 
            hashtag: '#react', 
            location: 'São Paulo-sp' 
        },
        {   image: image, 
            desciption: 'aasduih ausdausi uasdhiuas uasdhiuas uasdiuas uasdiua siudiuasud o', 
            like: '300', 
            name: 'Vitor Santos Rodrigues', 
            hashtag: '#react', 
            location: 'Presidente Prudente-sp' 
        },
        {   image: image1, 
            desciption: 'aasduih ausdausi uasdhiuas uasdhiuas uasdiuas uasdiua siudiuasud o', 
            like: '200', 
            name: 'Vitor Santos Rodrigues', 
            hashtag: '#react', 
            location: 'São Paulo-sp' 
        },
        {   image: image, 
            desciption: 'aasduih ausdausi uasdhiuas uasdhiuas uasdiuas uasdiua siudiuasud o', 
            like: '300', 
            name: 'Vitor Santos Rodrigues', 
            hashtag: '#react', 
            location: 'Presidente Prudente-sp' 
        },
        {   image: image1, 
            desciption: 'aasduih ausdausi uasdhiuas uasdhiuas uasdiuas uasdiua siudiuasud o', 
            like: '300', 
            name: 'Vitor Santos Rodrigues', 
            hashtag: '#react', 
            location: 'Presidente Prudente-sp' 
        },
    ]

    return (
        <div className="feed-container">
           <List items={list}/>
        </div>
    )
}