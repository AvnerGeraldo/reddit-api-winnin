import styled from 'styled-components'

const Button = styled.button`
    background-color: ${props => props.active === true ? "#FF4500" : "#696969"};
    border: 2px solid;
    border-color: ${props => props.active === true ? '#FF4500' : "#696969"};
    color: ${props => props.color || "#FFF"};
    padding: 8px 44px;
    margin: 0 5px;
    min-width: 11em;
    border-radius: 7px;
    cursor: pointer;

    &:hover {
        background-color: #FF4500;
        border-color: #FF4500;
        color: #FFF;
    }
`

export default Button