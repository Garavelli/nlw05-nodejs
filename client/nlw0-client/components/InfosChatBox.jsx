import theme from '../theme';

export default function InfosForChatBox ({ setInfosParams, infosParams, handleClick }) {

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