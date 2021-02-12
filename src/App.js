import React, { useState } from 'react';
import './App.css';

import User from './componente/User';

const data = [
  { 
    name:  'Isa',
    description: 'Gosta de Sorvete' 
  },
  { 
    name:  'Cintia',
    description: 'Gosta de Goiabada'
  },
  { 
    name:  'Moni',
    description: 'Gosta de Mousse'
  }
];

const App = () => {
  const [users, setUsers] = useState(data);
  const[name, setName] = useState('teste');
  const[description, setDescription] = useState('teste teste');
  return (
    <div className="App">
      {
        users.map((user, index) => (
          <User
          key={index}
          name={user.name}
          description={user.description}
          />
          )
        )
      }
      {/*<User name={users[0].name} description={users[0].description} />
      <User name={users[1].name} description={users[1].description} />
      <User name={users[2].name} description={users[2].description} />*/}
      <form>
        <input type='text' value={name} onChange={(event) => console.log(event.target.value)} />
        <input type='text' value={description} onChange={() => {}} />
        <button type='submit' onClick={() => console.log('clicou')}>Criar novo usuário</button>
      </form>
    </div>
  );
}

export default App;
