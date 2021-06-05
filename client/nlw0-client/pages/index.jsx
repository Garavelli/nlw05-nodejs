import ChatBox from "../components/ChatBox";
import axios from 'axios';

const backgroundColor = '#eee'

export default function Home({ chat }) {
  return (
    <div className="container">
      {chat && <ChatBox />}



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

export async function getServerSideProps(context) {
  let chat = true;
  const response = await axios.get('http://localhost:3333/settings/admin');
  console.log(response.data)
  if (!response.data.chat) {
    chat = false
  }

  return {
    props: {
      chat: chat
    }
  }
}
