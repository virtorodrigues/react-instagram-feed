import React from 'react'

import './Style.css'

import logo from '../../assets/logo.svg'
import camera from '../../assets/camera.svg'

export default function Header() {
    return(
        <div className="header-container">
            <img src={logo} alt="as" />
            <img src={camera} alt="as" />
        </div>
    )
}