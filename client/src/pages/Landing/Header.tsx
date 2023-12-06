'use client';
import { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar'
import NavBarLG from '../../components/NavBarLG';

/*TODO: make 2xl repsonsive */
/*TODO: add isLg, isXl State */

function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1536);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1536);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
          {isMobile?  <NavBar /> : <NavBarLG />}
    </>

  )
}

export default Header