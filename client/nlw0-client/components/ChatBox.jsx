import React from 'react';
import theme from '../theme';
import io from 'socket.io-client'

// import { Container } from './styles';
function InfosForChatBox ({ setInfosParams, infosParams, handleClick }) {

  return (
    <>
      <section className="chatContainer__main">
        <div className="initialMessage">
          <label htmlFor="message">How can we help you?</label>
          <textarea name="message" id="message" required onChange={(e) => {
            const newParams = infosParams;
            newParams.text = e.target.value;
            setInfosParams(newParams)            
          }}></textarea>
        </div>

        <div className="emailForInit">          
          <label htmlFor="email">Your e-mail</label>
          <input type="text" name="email" id="email" required onChange={(e) => {
            const newParams = infosParams;
            newParams.email = e.target.value;
            setInfosParams(newParams)            
          }}/>
        </div>
      </section>

      <section className="chatContainer__sendArea">
        <button className="btnChat red">Cancel</button>
        <button className="btnChat purple" onClick={(e) => handleClick(e)}>Start</button>
      </section>
      <style jsx>
        {`
          .chatContainer__main {            
              display: flex;
              flex-direction: column;
              align-items: center;
              flex-basis: 100%;
              justify-content: space-evenly; 
              width: 100%;
              font-size: 1.2rem;

                          
            
            .initialMessage {
              display: flex;
              flex-direction: column;
              width: 100%;
              margin: 1rem 0;

              textarea {
                width: 100% !important;
                height: 9rem;
                border-radius: ${theme.nicets.borderRadius};
                resize: none;
                padding: 0.7rem
              }                
            }
          }
          .emailForInit {
            display: flex;
            flex-direction: column;
            width: 100%;
            margin: 1rem 0;
            
            input {
              padding: 0.7rem;
              border: 1px solid gray;
              border-radius: ${theme.nicets.borderRadius};
            }
          }
          .chatContainer__sendArea{
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: flex-end;
              gap: 10px;

              .btnChat {
                padding: 0.6rem 1.3rem;
                color: white;
                font-weight: bold;
                border: none;
                border-radius: ${theme.nicets.borderRadius};
                cursor: pointer;                
              }

              .btnChat:hover {
                filter: brightness(1.4);
              }
            }             
        `}
      </style>
    </>
  )
}

function ChatForChatBox () {
  return (
    <>
      <div className="initialMessage">
        <label htmlFor="message">fasdfasdfasdfasdfasdfasdfasdfasdfasdfsadfasdfasdfasdfasdfdfdfdfdfdfdfsdfdfdfdfdfdf</label>
        <textarea name="message" id="message"></textarea>
      </div>

      <div className="emailForInit">          
        <label htmlFor="email">Your e-mail</label>
        <input type="text" name="email" id="email"/>
      </div>     
    </>
  )
}

function ChatBox() {
  const [screen, setScreen] = React.useState('infos');
  const [infosParams, setInfosParams] = React.useState({email: '', text: ''});
  const [errors, setErrors] = React.useState([]);

  function addToAObjState(state, newInfo) {
    const newState = state;
    const newID = newState.length > 0 ? newState[newState.length - 1].id + 1 : 1;
    return [...state, {id: newID, text: newInfo}];
  };

  function hasError() {
    let errorsT = [];
    if (!infosParams.email || !infosParams.text) {
      
      
      if (!infosParams.email) {errorsT = addToAObjState(errorsT, 'Email is empty!')};
      if (!infosParams.text) {errorsT  = addToAObjState(errorsT, 'Text is empty!')};
      
      
    };
    setErrors(errorsT)

    return (errorsT.length < 1 ? false : true);
  };

  function startWebSocket () {
    const socket = io("ws://localhost:3333");
    socket.on("connect", () => {
      socket.emit("client_first_access", infosParams, (call, err) => {
        if (err) {
          console.err(err);
        }else {
          console.log(call);
        }
      })
    })
    console.log(e)
  }

  function handleClick(e) {
    if (hasError()) return;    
    setScreen('chat');
    //startWebSocket();    
  }

  return (
    <div className="chatContainer">
      <section className="chatContainer__header">
        <p>Start the chat!</p>
        <div className="closeButton">X</div>
      </section>

      <section className="chatContainer__errors" id="errorSpace">
        {errors.map((error)=>{
          return <p key={error.id}>{error.text}</p>;
        })}
      </section>  

      {screen === 'infos' && <InfosForChatBox setInfosParams={setInfosParams} infosParams={infosParams} handleClick={handleClick} />}
      {screen === 'chat' && <ChatForChatBox />}      
    
      <style jsx>
        {`  
          .chatContainer{
            width: 25rem;
            height: 30rem;
            border-radius: ${theme.nicets.borderRadius};
            border: 1px solid gray;
            padding: 0.7rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            
            &__header {
              border-radius: ${theme.nicets.borderRadius};
              color: white;
              font-size: 1.5rem;
              background-color: ${theme.colors.primary};;
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding: 1rem;
              
              p {

              }

              .closeButton {
                color: ${theme.colors.primary};;
                width: 1.5rem;
                height: 1.5rem;
                font-size: 1rem;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: bold;
                border-radius: ${theme.nicets.borderRadius};
                background-color: white;
                cursor: pointer;
              }
            } // header     

            &__errors {
              width: 100%;
              color: red;
              display: flex;
              flex-direction: column;

              font-size: 1.2rem;
            }       
          }
        `}
      </style>
    </div>
  );
}

export default ChatBox;