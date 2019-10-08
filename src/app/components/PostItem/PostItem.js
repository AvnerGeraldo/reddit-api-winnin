import React from 'react'

//Function
import calculateTime from '../../util/calculateTime'

//Styled Components
import Text from '../styled-components/Text'
import BoxPostItem from '../styled-components/BoxPostItem'

//Assets
import noImage from '../../../assets/images/no-image.jpeg'

//Styles
//Thumbnail
const styleThumbnail = {
    alignSelf: 'flex-start',
    height: '6em',
    width: '6em',
    marginRight: '1em'
}

//Post Info
const stylePostInfo = {
    display: 'flex',
    flexDirection: 'column'
}

const PostItem = props => {
    const { thumbnail, title, created_utc, author, domain } = props.data
    let showDateTime = created_utc !== undefined ? `enviado à ${calculateTime(new Date(created_utc*1000))}` : ''
    let thumbnailImage = noImage
    
    if (thumbnail !== undefined && (thumbnail.search('http://') > -1 || thumbnail.search('https://') > -1))
        thumbnailImage = thumbnail

    return (
        <BoxPostItem>
            <div style={styleThumbnail}>
                <img src={thumbnailImage} alt={title} height="100%" width="100%" />
            </div>
            <div style={stylePostInfo}>
                <Text 
                    fontSize='20px'
                    fontWeight='bold'>{title}</Text>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row'
                }}>
                    <div style={{ marginRight: '15px' }}><Text color="#696969">{showDateTime}</Text></div>
                    <div><Text>por</Text> <Text color="#FF4500">{author}</Text></div>
                </div>
                <div><Text style={{
                    textDecoration: 'underline'
                }}>{domain}</Text></div>
            </div>
        </BoxPostItem>
    )
}

export default PostItem