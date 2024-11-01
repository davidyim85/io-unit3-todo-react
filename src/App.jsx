import { Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import { useState } from 'react';
import { getUser } from './services/authService';
import NavBar from './components/Navbar';
import Todo from './components/Todo';
// NavBar
// Routes 
//  -> Route
function App() {
  const [token, setToken] = useState(getUser())
  console.log(token)
  
  return (
    <>
      <NavBar token={token} setToken={setToken} />
     
      <Routes>
        <Route
          path="/"
          element={token ? <Todo /> : <h1>Sign In Or Sign Up</h1>}
        />
        <Route path="/signup" element={<SignUp setToken={setToken} />} />
        <Route path="/signin" element={<SignIn setToken={setToken} />} />
      </Routes>
    </>
  )
}

export default App
