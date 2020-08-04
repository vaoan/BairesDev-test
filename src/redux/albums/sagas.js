import { all, takeEvery, put, call } from 'redux-saga/effects'
import { notification } from 'antd'
import { getAlbums } from '../../services/albums'
import { setAlbums } from './actions'
import actions from './actions'

export function* GET_ALBUMS() {
    const success = yield call(getAlbums)
    console.log(success)
    if (success) {
        yield put(setAlbums(success))
    } else {
        notification.error({
            message: 'NOT FOUND',
            description: 'PLEASE TRY AGAIN',
        })
    }
}

export default function* cupones() {
    yield all([takeEvery(actions.LOAD_ASYNC, GET_ALBUMS)])
}
