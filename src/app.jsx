import React from 'react';
import './app.css';
import Login from './components/login/login';

function App({ authService }) {
  // const [isLogin, setIsLogin] = useState(null);

  return (
    <div className="App">
      <Login authService={authService} />
    </div>
  );
}

export default App;
