import React from 'react';
import './header.scss';
import Logo from '../logo/logo';
import Text from '../generic/text/text'

const Header = (props) => {

    return (
        <header className='header'>
            <Logo/>
         <div className='info-box'>
          <Text type='small'>Для записи звоните</Text>
          <Text type='big'>+ 7 (495) 555 - 55 - 55</Text>
          <Text type='big'>или</Text>
         </div>
  
         </header>
    )
}

export default Header;