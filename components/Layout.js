import React from 'react';
import NavBar from './NavBar';
import Notify from './Notify';

const layout = ({ children }) => {
  return (
    <div className='container'>
      <NavBar />
      <Notify />
      {children}
    </div>
  );
};

export default layout;
