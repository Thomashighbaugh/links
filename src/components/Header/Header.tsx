import React from 'react';
import Icon from '../Icon/Icon';
import Name from '../Name/Name';



const Header = (): JSX.Element => {
  return (
    <>
      <header className=" ">
              
              <Name />
              <Icon />
              
          </header>
    </>
  );
};
export default Header;