import React from 'react';
import Header from '../Header/Header';
import Routers from '../../routers/Routers';
import Message from '../Message_Line/Message';
import Filter from '../Filter/Filter'

function Layout() {
  return (
    <>
      <Header/>
      <Message />
      <Filter/>
     
      <div>
        <Routers/>
      </div>
    </>
  )
}

export default Layout;
