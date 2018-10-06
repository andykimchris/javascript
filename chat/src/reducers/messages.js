import * as types from '../constants/actionTypes';

const  messages = (state = [], action) => {
    switch(action.type) {
        case types.ADD_MESSAGE:
        case types.MESSAGE_RECEIVED:
            return state.concat([
                    {
                        message: action.message,
                        author:action.id,
                        id: action.id
                    }
            ])
        default: 
            return state;
    }
}

export default messages;

