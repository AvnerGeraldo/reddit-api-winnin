import { all } from 'redux-saga/effects'

//Watch List
//LOAD DATA
import watchLoadData from './api/watchLoadData'
import watchLoadMoreData from './api/watchLoadMoreData'

export default function* () {
    yield all([
        watchLoadData(),
        watchLoadMoreData()
    ])
}