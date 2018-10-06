import * as types from '../constants/actionTypes'

import {takeEvery} from 'redux-saga/effects'

const handleNewMessage = function* handleNewMessage(params) {
    yield takeEvery(types.ADD_MESSAGE, (action) => {
        action.author = params.username
        params.socket.send(JSON.stringify(action))
    })
} 

export default handleNewMessage;