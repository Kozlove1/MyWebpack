import React from 'react';

import { connect } from 'react-redux';
import store, { InitialState } from '../redux/store';

function Likes(props: { store: typeof store }) {

    return (
        <div className='control-buttons'>
            <button onClick={() => props.store.dispatch({ type: 'INCREMENT' })} >
                💜{props.store.getState().likes}
            </button>
            <button>💔</button>

        </div>
    );
}

const mapStateToProps = (state: InitialState) => {
    console.log('mapStateToProps')
    return {
        likes: state.likes
    }
}

const mapDispatchToProps = (dispatch: typeof store.dispatch) => {
    console.log('mapDispatchToProps')

    return {
        onIncrementLikes: () => {
            const action = { type: 'INCREMENT' };
            dispatch(action)
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Likes);