import React from 'react'
import './style.css';

export const Button = ({ threadId, navigateToInboxThread }) => {
  return (
    <button className='button' onClick={() => navigateToInboxThread(threadId)}>
        <div className='circle'>
            <div className='img'></div>
        </div> 
    </button>
  )
}
