import { takeLatest, put, call } from 'redux-saga/effects'

//Actions
import { LOAD_MORE_POSTS_DATA_ASYNC } from '../../actions/saga-actions'
import { LOAD_MORE_POSTS_DATA, ERROR_LOAD_POSTS_DATA } from '../../actions/redux-actions'

//API
import { getPosts } from '../../api'

function* getMorePostsAsync({ payload }) {
    try {
        const after_post = payload.after, filter_post = payload.filter
        const response = yield call(getPosts, after_post, filter_post)

        yield put({
            type: LOAD_MORE_POSTS_DATA,
            payload: {
                response,
                filter: filter_post
            }
        })
    } catch (e) {
        yield put({
            type: ERROR_LOAD_POSTS_DATA,
            payload: { error: e.message }
        })
    }
}

export default function* () {
    yield takeLatest(LOAD_MORE_POSTS_DATA_ASYNC, getMorePostsAsync)
}