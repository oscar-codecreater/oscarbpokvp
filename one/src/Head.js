import React from 'react'
import img from './images/logo5.png'


const Head = () => {
  return (
    <>     
      <section className="head">
        <img className="log" src={img} alt=""/>
            <div className="container flexSB">
                <div className="logo">
                <h1>BPO DATA ENTRY</h1>
                </div>         
                <div className="social">
                    <i className='fab fa-facebook-f icon'></i>
                    <i className='fab fa-instagram icon'></i>
                    <i className='fab fa-twitter icon'></i>
                    <i className='fab fa-youtube icon'></i>
                </div>
            </div>
        </section>
    </>
  )
}

export default Head