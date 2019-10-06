import styled from 'styled-components'

const Box = styled.div`
    background-color: ${props => props.backgroundColor || "#FFF"};
    color: ${props => props.color || "#FFF"};
`
export default Box