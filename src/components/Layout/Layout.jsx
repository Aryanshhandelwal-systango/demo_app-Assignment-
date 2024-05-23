import React from 'react';
import Header from '../Header/Header';
import Routers from '../../routers/Routers';

function Layout() {
  return (
    <>
      <Header/>
      <div>
        <Routers/>
      </div>
    </>
  )
}

export default Layout
