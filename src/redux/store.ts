import { legacy_createStore as createStore } from 'redux'

const initialState =
{
    likes: 3
}

export type InitialState = {
    likes: number
}

type Action = {
    type: string,
    payload?: number
}

const reducer = (state: InitialState = initialState, action: Action) => {
    console.log('reducer')
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                likes: state.likes + 1
            }
        default:
            return state;

    }
}

const store = createStore(reducer);

export default store;