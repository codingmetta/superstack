'use client';
import { useContext, useEffect } from 'react';
import HeaderMobile from '../../components/HeaderMobile'
import HeaderDesktop from '../../components/HeaderDesktop';
import { AppContext } from '../../context/AppContext';

/*
  @media breakpoint:
  xl ==>  >= 1280px
 */

function Header() {
  const { isMobile, setIsMobile } = useContext(AppContext);

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
      {
        isMobile ?
          <HeaderMobile />
          :
          <HeaderDesktop />
      }
    </>

  )
}

export default Header