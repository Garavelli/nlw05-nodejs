import ChatBox from "../components/ChatBox"

const backgroundColor = '#eee'

export default function Home() {
  return (
    <div className="container">
      <ChatBox />



      <style jsx>{`
        $color: red;

        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;          
        }
      `}</style>
    </div>
  )
}
