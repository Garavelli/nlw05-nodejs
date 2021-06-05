import theme from '../theme';

export default function MessageBubble({msg , side}) {

  return (
    <>
      <div className={`bubbleContainer ${side}`}>
        <div className={side}></div>
        {msg}
      </div>
      <style jsx>
        {`
          .bubbleContainer {
            min-width: 50px;
            min-height: 50px;
            border-radius: 20px;
            border: 1px solid gray;

            &.left {
              justify-self: flex-start;
            }

            &.right {
              justify-self: flex-end;
            }
          }
        `}
      </style>
    </>
  )
}