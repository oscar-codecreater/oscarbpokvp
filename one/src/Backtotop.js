import React, { useState, useEffect } from 'react';
import './Backtotop.css'; 

const Backtotop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show the button when the user scrolls down, hide when at the top
  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    setIsVisible(scrollTop > 100);
  };

  // Scroll to the top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    // Attach the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`back-to-top-button ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>Back To Top
      <span>&uarr;</span>
    </div>
  );
};

export default Backtotop;
