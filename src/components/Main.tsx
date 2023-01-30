import React from 'react'
import eiffel from '../img/eiffel.jpg'
import  Likes from './Likes'
import store from '../redux/store'


export const Main = () => {
    return (
        <div className='containerForPhotoAndAllThings'>
            <div className='photoContainer'>
                <img src={eiffel} alt='Парижу ёптэ'></img>
                <Likes store={store}/>
            </div>
        </div>
    )
}