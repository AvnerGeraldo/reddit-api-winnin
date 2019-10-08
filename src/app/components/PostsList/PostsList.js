import React from 'react'
import { connect } from 'react-redux'

//Styled Components
import Box from '../styled-components/Box'
import Button from '../styled-components/Button'
import TextError from '../styled-components/TextError'

//Components
import PostItem from '../PostItem/PostItem'

//Style
const stylePostList = {
    margin: '0 5px',
}

const PostsList = (props) => {
    
    if (props.data === {} || props.data === undefined) {
        return null
    }
    
    return (
        <Box style={stylePostList}>
            {props.error && (
                <div style={{ 
                    textAlign: 'center',
                    padding: '60px 0'
                    }}>
                    <TextError>{props.error}</TextError>
                </div>
            )}
            {props.data.children !== undefined && props.data.children.length === 0 && <TextError>Not found data!</TextError>}
            {(props.error.length === 0  && props.data.children !== undefined) && 
            props.data.children.map(item => {
                const id= Object.keys(item)
                
                return (
                    <PostItem key={id} data={item[id]} />
                )
            }
            )}
            <Box style={{
                display: 'flex',
                alignItems: 'stretch',
                flexDirection: 'column',
                margin: '5px 0'
            }}>
                <Button
                    onClick={props.fnClick}
                    style={{ margin: '0'}}>More Posts</Button>
            </Box>
        </Box>    
    )
}

export default connect(null)(PostsList)