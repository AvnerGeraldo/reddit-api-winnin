import { LOAD_POSTS_DATA, LOAD_MORE_POSTS_DATA, ERROR_LOAD_POSTS_DATA } from '../actions/redux-actions'

const initialState = {
    data: {},
    filter: '',
    error: ''
}

const adjustData = data => {
    return data.map(v => {
        const { selftext, author_fullname, title, name, score, media_embed, link_flair_text,
            thumbnail, domain, selftext_html, subreddit_id, link_flair_background_color,
            id, author, num_comments, author_flair_text_color, permalink, created_utc,
            preview  } = v.data
        
        return {
            [`${id}`]: { 
                selftext, 
                author_fullname, 
                title, 
                name, 
                score, 
                media_embed, 
                link_flair_text,
                thumbnail,
                domain,
                selftext_html,
                subreddit_id,
                link_flair_background_color,                            
                author,
                num_comments,
                author_flair_text_color,
                comment_title: permalink ? permalink.split('/').pop() : '',
                created_utc,
                preview  
            }
        }
    })
}

export default (state = initialState, { type, payload }) => {
    let after, before, dist, children, childrenFiltered
    
    switch(type) {
        case LOAD_POSTS_DATA:
            after = payload.response.data.after
            before = payload.response.data.before
            dist = payload.response.data.dist
            children = payload.response.data.children
            childrenFiltered = adjustData(children)

            return {
                ...state,
                data: {
                  totalCount: dist,
                  after,
                  before,
                  children: childrenFiltered
                },
                filter: payload.filter,
                error: ''
            }
        case LOAD_MORE_POSTS_DATA:
            after = payload.response.data.after
            before = payload.response.data.before
            dist = payload.response.data.dist
            children = payload.response.data.children
            childrenFiltered = adjustData(children)

            const obj = state.data.children.concat(childrenFiltered)
            const totalCount = parseInt(state.data.totalCount) + parseInt(dist)
            
            return {
                ...state,
                data: {
                    totalCount,
                    after,
                    before,
                    children: obj
                },
                filter: payload.filter,
                error: ''
            }
        case ERROR_LOAD_POSTS_DATA:
            return {
                ...state,
                data: {},
                error: payload.error
            }
        default:
            return state
    }
}