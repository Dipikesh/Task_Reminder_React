import React from 'react'
import PropTypes from 'prop-types'
const Button = ({color,text,onClick}) => {
    return (
        <div>
            <button onClick={onClick} style={ {backgroundColor:color}} className='btn'>{ text}</button>
        </div>
    )
}

Button.defaultProps = {
    color: 'blue',
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button
