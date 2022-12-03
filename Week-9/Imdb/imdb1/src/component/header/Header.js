import { Link } from "react-router-dom"
import React from 'react'
import header from './header.css'
let Header=()=>{
   return <div className="header">
       <div className="headerleft">

        <Link to='/' >
            <img className="imdblogo"  src='/IMDB_Logo_2016.svg.png'></img>
            </Link>
        <Link to='/movie/popular'>Popular</Link>
        <Link to='/movie/top_rated'>Top Rated</Link>
        <Link to='/movie/upcoming'>Upcoming</Link>

    
       </div>


    </div>
}
export default Header