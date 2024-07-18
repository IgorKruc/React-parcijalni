import { useState } from 'react';
import './App.css';
import FormComponent from './components/form-component';
import UserDetails from './components/user-details-component';
import './index.css';

function App() {
  const [user, setUser] = useState(null);

  const handleSearch = (id) => {
    fetch(`https://api.github.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error('Error fetching user: ', error));
  };

  return (
    <div className="div">
      <FormComponent search={handleSearch} />
      <UserDetails user={user} />
    </div>
  );
}

export default App;

// https://jsonplaceholder.typicode.com
// API URL: https://jsonplaceholder.typicode.com/users/1
//  https://github.com/MPerkovic96/react-ispit-vjezba.git
