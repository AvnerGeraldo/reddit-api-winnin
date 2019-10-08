import styled from 'styled-components'

const Box = styled.div`
    background-color: ${props => props.backgroundColor || "#FFF"};
    border-color: ${props => props.borderColor | "none"};
    color: ${props => props.color || "#FFF"};
`
export default Box