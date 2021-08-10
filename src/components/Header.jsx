import React from 'react'
import logoSvg from '../assets/images/pizza-logo.svg'

import { Link } from 'react-router-dom'

import Button from './Button'

function Header() {


    return (
        <div className="header">
            <div className="container">
                <Link to="/">
                    <div className="header__logo">

                        <img width="38" src={logoSvg} alt="Pizza logo" />
                        <div>
                            <h1>React Pizza</h1>
                            <p>самая вкусная пицца во вселенной</p>
                        </div>
                    </div>
                </Link>
                <Button />
            </div>
        </div>

    )
}

export default Header