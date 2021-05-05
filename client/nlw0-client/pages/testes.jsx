import React from 'react';

// import { Container } from './styles';

function Testes() {
  const [teste, setTeste] = React.useState(
      [{id: 1, hadouken: 'hahahahha'},
      {id: 2, hadouken: 'jajajajaj'}]
  );
  return (
    <div>
      {teste.map((test) => {
        return (
        <h1 key={test.id} id={test.id}onClick={(e) => {
          
          setTeste((prevState) => {
            return prevState.map((test) => {
              if (test.id === e.target.id){
                test.hadouken= 'çlksdjçflaskdjf';
              }
              return test;
            })
            return [...prevState, {hadouken: 'aef ehrth rfg '}]
          })
        }}>
          {test.hadouken}
        </h1>
        )
      })}
    </div>
  );
}

export default Testes;