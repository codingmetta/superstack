'use client';
import { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar'
import NavBarXl from '../../components/NavBarXl';

/*
  Breakpoint:
  xl: 1280px
  2xl: 1536px
 */


function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1280);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1280);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
          {isMobile?  <NavBar /> : <NavBarXl />}
    </>

  )
}

export default Header