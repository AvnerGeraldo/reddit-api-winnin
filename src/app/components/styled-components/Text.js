import styled from 'styled-components'

const Text = styled.span`
    color: ${props => props.color || '#000'};
    font-size: ${props => props.fontSize || '14px'};
    font-weight: ${props => props.fontWeight || 'normal'};
`

export default Text