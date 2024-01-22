import React from 'react'
import './Home.css'
import { Link } from 'react-scroll'

const Home = () => {
    return (
        <>
        <div className='hero' id='home'>
            <div className='content'>
                <p>Welcome</p>
                <p>To</p>
                <p>Oscar BPO</p>
                <p>Data Entry Services</p>
               <Link to='contact'> <button  className='button'>Contact-Us</button></Link>
            </div>
        </div>
        </>
    )
}

export default Home