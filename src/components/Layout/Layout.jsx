import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Message from '../Message_Line/Message';
import Filter from '../Filter/Filter';

function Layout({ children, cart }) {
  const location = useLocation();
  const shouldShowFilter = !['/cart', '/checkout'].includes(location.pathname);

  return (
    <>
      <Header cart={cart} />
      <Message />
      {shouldShowFilter && <Filter />}
      <div>
        {children}
      </div>
    </>
  );
}

export default Layout;

