'use client';
import { useContext } from 'react';
import HeaderMobile from 'src/components/Header/HeaderMobile'
import HeaderDesktop from 'src/components/Header/HeaderDesktop';
import { AppContext } from 'src/context/AppContext';

function Header() {
  const { isMobile} = useContext(AppContext);

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