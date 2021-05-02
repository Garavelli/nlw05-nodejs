import React from 'react';
import theme from '../theme';

// import { Container } from './styles';

function ChatBox() {
  return (
    <div className="chatContainer">
      <section className="chatContainer__header">
        <p>Start the chat!</p>
        <div className="closeButton">X</div>
      </section>

      <section className="chatContainer__main">

        <div className="initialMessage">
          <label htmlFor="message">How can we help you?</label>
          <textarea name="message" id="message"></textarea>
        </div>

        <div className="emailForInit">          
          <label htmlFor="email">Your e-mail</label>
          <input type="text" name="email" id="email"/>
        </div>

      </section>

      <section className="chatContainer__sendArea">
        <button className="btnChat  red">Cancel</button>
        <button className="btnChat purple">Start</button>
      </section>

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

            &__main {
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
                  height: 10rem;
                  border-radius: ${theme.nicets.borderRadius};
                  resize: none;
                  padding: 0.7rem
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
            } //main

            &__sendArea{
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
          }
        `}
      </style>
    </div>
  );
}

export default ChatBox;