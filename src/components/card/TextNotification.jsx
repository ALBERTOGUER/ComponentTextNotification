import React from 'react'
import './style.css';
import { Button } from '../Button/Button';
import { Chat } from '../chat/Chat';


export const TextNotification = ({ textMessage, sendReply, navigateToInboxThread }) => {
  return (
    <div className='card'>
      <Button />
      <Chat/>
    </div>
  )
}
