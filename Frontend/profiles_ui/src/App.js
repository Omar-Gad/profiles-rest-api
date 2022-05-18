import './App.css';
import Auth from './components/Auth';
import Feed from './components/Feed';
import Nav from './components/Nav';
import axios from 'axios';

import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
import { useEffect, useState } from 'react';

function App() {

  const [profiles, setProfiles] = useState([]);
  const [update, setUpdate] = useState(0);


  useEffect(() => {
    axios.get('http://localhost:8000/api/feed/')
      .then(res => {
        const data = res.data
        setProfiles(data)
      })
  }, [update]);

  const onUpdate = () => {
    setUpdate(update + 1)
  }

  return (
    <Router>
      <div className="App">
        <Nav />
      </div>
      <Routes>
        <Route path='*' exact element={<Auth />} />
        <Route path='/feed' exact element={<Feed onUpdate={onUpdate} profiles={profiles} />} />
      </Routes>
    </Router>
  );
}

export default App;
