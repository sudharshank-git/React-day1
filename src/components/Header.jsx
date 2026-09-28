import React from 'react'
import Button from "./Button"
import Badge from "./Badge"

function Header() {
  return (
    <header className='header'>
        <div className='header-inner'>
            <h1 className='header-brand'>Minion</h1>
            <nav className='header-nav'>
                <div className='header-nav-item'><Button text="Home"/></div>
                <div className='header-nav-item'><Button text="Wishlist" badge={6}/></div>
                <div className='header-nav-item'><Button text="Cart" badge= {3}/></div>
            </nav>
        </div>
    </header>
  )
}

export default Header