import React from 'react';

import { connect } from 'react-redux';
import store, { InitialState } from '../redux/store';
import { DECREMENT, INCREMENT } from '../redux/types'


function Likes(props: { store: typeof store }) {

    return (

        <div className='control-buttons'>
            <button onClick={() => props.store.dispatch({ type: INCREMENT })}>
                💜
            </button>
            <div className='likes'>{store.getState().likes}</div>
            <button onClick={() => props.store.dispatch({ type: DECREMENT })}>
                💔
            </button>
        </div>
    );
}

const mapStateToProps = (state: InitialState) => {
    console.log('mapStateToProps')
    return {
        likes: state.likes
    }
}

// const mapDispatchToProps = (dispatch: typeof store.dispatch) => {
//     console.log('mapDispatchToProps')

//     return {
//         onIncrementLikes: () => {
//             const action = { type: INCREMENT };
//             dispatch(action)
//         },
//         onDecrementLikes: () => {
//             const action = { type: DECREMENT };
//             dispatch(action)
//         },
//     }
// }


export default connect(mapStateToProps)(Likes);