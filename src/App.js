import './App.css';
import { TextNotification } from './components/textNotification/TextNotification';


function App() {

  const textMessage = {
    from: '3342079227',
    text: 'This is the message from your client about a loan',
    threadId: '123456789'
  }

  const sendReply = (text) => {
    console.log(text)
  }

  const navigateToInboxThread = (id) => {
    console.log(`navigate to threaded-${id}`)
  }

  return (
    <div className="App">
      <TextNotification 
        sendReply={sendReply}
        textMessage={textMessage}
        navigateToInboxThread={navigateToInboxThread}
      />      
    </div>
  );
}

export default App;
