import React from 'react'
import { Link } from 'react-router-dom'


export default function Home() {
  
  return (
    <>
    <header>
      
    <nav>
      <ul>
      <li>
      <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
      
      </ul>
    </nav>
    </header>
    <div>
      this is home page
    </div>
    </>
     
      
      
    
  )
}