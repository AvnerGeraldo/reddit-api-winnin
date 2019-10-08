import styled from 'styled-components'

const Button = styled.button`
    background-color: ${props => props.backgroundColor | "#FFF"};
    border-color: ${props => props.borderColor | "none"};
    color: ${props => props.color | "#000"}
`

export default Button