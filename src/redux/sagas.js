import { all } from 'redux-saga/effects'
import albums from './albums/sagas'

export default function* rootSaga() {
  yield all([
    albums(),
  ])
}
