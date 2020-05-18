import React from 'react';
import './logo.scss';

const Logo = React.memo(function Logo(props){
    return (
        <div className='logo'>
             <p className='logo-text'> NAIL STUDIO</p>
            <div className='line'></div>
        </div>
    )
})

export default Logo