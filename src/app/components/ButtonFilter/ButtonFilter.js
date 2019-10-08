import React from 'react'

//Styled Components
import Button from '../styled-components/Button'

const styleButtonFilter = {
    textTransform: 'uppercase'
}

const ButtonFilter = props => {
    return (
        <Button 
            onClick={props.fnClick}
            active={props.active}
            style={styleButtonFilter}
            >{props.children}</Button>
    )
}

export default ButtonFilter