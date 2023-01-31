import { legacy_createStore as createStore } from 'redux';
import { DECREMENT, INCREMENT } from './types'

const initialState =
{
    likes: 0
}

export type InitialState = {
    likes: number
}

type Action = {
    type: string,
    payload?: number
}

const reducer = (state: InitialState = initialState, action: Action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                likes: state.likes + 1
            }
        case DECREMENT:
            return {
                ...state,
                likes: state.likes > 0 ? state.likes - 1 : state.likes
            }
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;