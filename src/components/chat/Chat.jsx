import React from 'react'
import './style.css';

export const Chat = ({ from, text, sendReply }) => {
  return (
    <div className='chat'>
        <div>
            <h1 className='tittle'>New message from:</h1>
            <h2 className='from' >{from}</h2>
            <p className='text'>
                {text}
            </p>
        </div>
        <div>
            <textarea placeholder='Your reply to be sent' className='textArea'>

            </textarea>
            <button className='buttonSend'></button>
        </div>
        
    </div>
  )
}
