import React, { Component } from 'react';
import { connect } from 'react-redux'

//Actions
import { LOAD_POSTS_DATA_ASYNC, LOAD_MORE_POSTS_DATA_ASYNC } from './actions/saga-actions'

//Styled Components
import Box from './components/styled-components/Box'
import PostsList from './components/PostsList/PostsList'

//Components
import ButtonFilter from './components/ButtonFilter/ButtonFilter'

class App extends Component {
    componentDidMount() {
        const { dispatch } = this.props
        
        dispatch({ type: LOAD_POSTS_DATA_ASYNC, payload: { filter_post: 'hot' } })
    }

    orderingList(filter_post) {
        const { dispatch } = this.props

        dispatch({ type: LOAD_POSTS_DATA_ASYNC, payload: { filter_post } })
    }

    render() {
        const { listPosts, filterPosts, errorPosts } = this.props

        const styleHeader = {
            margin: '0 5px',
            padding: '20px 0px',
            textTransform: 'uppercase',
            fontSize: '26px',
            fontWeight: 'bold',
            textAlign: 'center',
            alignSelf: 'stretch'
        }

        const styleBoxButtons = {
            borderBottom: '1px solid #000',
            padding: '10px 0',
            margin: '0 5px',
            textAlign: 'center'
        }

        return (
            <div style={{ 
                display: 'flex',
                flexDirection: 'column'
            }}>
                <Box
                    backgroundColor="#000"
                    style={styleHeader}>React<span style={{ color: '#FF4500' }}>JS</span>
                </Box>
                <Box
                    backgroundColor='transparent' 
                    style={styleBoxButtons}>
                    <ButtonFilter
                        fnClick={_=>this.orderingList('hot')}
                        active={filterPosts === 'hot'}
                    >hot</ButtonFilter>
                    <ButtonFilter
                        fnClick={_=>this.orderingList('new')}
                        active={filterPosts === 'new'}
                    >news</ButtonFilter>
                    <ButtonFilter
                        fnClick={_=>this.orderingList('rising')}
                        active={filterPosts === 'rising'}
                    >rising</ButtonFilter>
                </Box>
                <PostsList 
                    data={listPosts}
                    error={errorPosts}
                    fnClick={_=>this.props.dispatch({
                        type: LOAD_MORE_POSTS_DATA_ASYNC,
                        payload: {
                            after: listPosts.after,
                            filter: filterPosts
                        }
                    })} />
            </div>
        );
    }
}

const mapStateToProps = ({ data, filter, error }) => ({
    listPosts: data,
    filterPosts: filter,
    errorPosts: error
})

export default connect(mapStateToProps)(App);
