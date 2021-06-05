import MessageBubble from './MessageBubble';
import theme from '../theme';


export default function ActualChatting ({initialMessage}) {
  return (
    <>
      <MessageBubble msg={initialMessage} side="right"/>

      {/* <div className="emailForInit">          
        <label htmlFor="email">Your e-mail</label>
        <input type="text" name="email" id="email"/>
      </div>      */}
      {/* <style jsx>

      </style> */}

    </>
  )
}