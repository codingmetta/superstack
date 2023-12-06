'use client';
import { useState } from 'react';
import NavBar from '../../components/NavBar'
import NavBarLG from '../../components/NavBarLG';

function Header() {
  const [isMobile, setIsMobile] = useState(false)

  return (
    <header>
      {isMobile?  <NavBar /> : <NavBarLG />}
    </header>
  )
}

export default Header