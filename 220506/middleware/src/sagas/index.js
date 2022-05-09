import { all } from 'redux-saga/effects'
import watchCounter from './counterSaga.js'

console.log(all)

export default function* rootSaga() {
    yield all([
        watchCounter()
    ])
}