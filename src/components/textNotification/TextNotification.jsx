import React from 'react'
import './style.css';
import { Button } from '../Button/Button';
import { Chat } from '../chat/Chat';


export const TextNotification = ({ textMessage, sendReply, navigateToInboxThread }) => {
  const { from, text, threadId } = textMessage
  return (
    <div className='card'>
      <Button 
        navigateToInboxThread={navigateToInboxThread}
        threadId={threadId}  
      />
      <Chat 
        sendReply={sendReply}
        from={from}
        text={text}
      />
    </div>
  )
}
