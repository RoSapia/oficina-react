import logo from './logo.svg';
import './App.css';

import User from './componente/User';
const users = [
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
  return (
    <div className="App">
      <User name={users[0].name} description={users[0].description} />
      <User name={users[1].name} description={users[1].description} />
      <User name={users[2].name} description={users[2].description} />
    </div>
  );
}

export default App;
