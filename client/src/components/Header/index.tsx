'use client';
import { useContext, useEffect } from 'react';
import HeaderMobile from 'src/components/Header/HeaderMobile'
import HeaderDesktop from 'src/components/Header/HeaderDesktop';
import { AppContext } from 'src/context/AppContext';
import { MEDIA_BREAKPOINT_DESKTOP } from 'src/utils/constants'

function Header() {
  const { isMobile, setIsMobile } = useContext(AppContext);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < MEDIA_BREAKPOINT_DESKTOP);
    };

    window.addEventListener('resize', handleResize);

    // clean up the event listener when the component is unmounted
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