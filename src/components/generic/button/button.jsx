import React from 'react';
import './button.scss';
import PropTypes from 'prop-types'


const ButtonMain = (props) => {

    const {onClickButton, children} = props

    return (
        <div className ='button-box'>
            <button className="button-main" onClick={onClickButton}>
                <p className='button-text'>{children}</p></button>
        </div>
    )
}

ButtonMain.propTypes = {
    children: PropTypes.string,
    onClickButton: PropTypes.func
  }

  ButtonMain.defaultProps = {
    children: 'Button',
    onClickButton: () => alert('click button')
};

export default ButtonMain;