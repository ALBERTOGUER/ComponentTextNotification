import React from 'react'
import './style.css';
import { useState } from 'react';

export const Chat = ({ from, text, sendReply }) => {
    const [reply, setReply] = useState('')

    const handleReply = ({ target }) => {
        setReply(target.value)
    }
  return (
    <div className='chat'>
        <div>
            <h1 className='tittle'>New message from:</h1>
            <h2 className='from' >{from}</h2>
            <p className='text'>
                {
                    text.length < 50 ? text : `${text.slice(0,50)}...`
                    
                }
            </p>
        </div>
        <div>
            <textarea value={reply} onChange={handleReply} name=' reply' placeholder='Your reply to be sent' className='textArea'>

            </textarea>
            <button className='buttonSend' onClick={() => {sendReply(reply)}}>
                <div className='imgButton'>

                </div>
                Send Reply
            </button>
        </div>
        
    </div>
  )
}
