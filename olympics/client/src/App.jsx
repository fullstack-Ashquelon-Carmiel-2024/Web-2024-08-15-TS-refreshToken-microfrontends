import { useContext, useEffect } from 'react';
import {Routes, Route} from 'react-router-dom';

import { userContext } from './context/userContext';

import Home from './pages/Home';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import Login from './components/Login';
import SideBar from './components/sidebar/SideBar';
import Sportsmen from './pages/Sportsmen';

import { LoggedRoutes, NotLoggedRoutes } from './routes/logged-not-logged';

function App() {

  const { user, dispatchUser } = useContext(userContext);

  useEffect(() => {

    dispatchUser({type:'CHECK_STORAGE_FOR_USER'});

  },[])

  return (
    <div className={user.role==='guest'?`container`:
    `sm:flex`}>
      {
        user.role === 'guest' ?
        <h1 className='text-center text-white py-5 text-3xl font-bold underline my-6 bg-indigo-600' >
          Login - Forgot Password?
        </h1>:
        <SideBar />
      }
      <Routes>

        <Route element={ <NotLoggedRoutes role={user.role} /> }>
          <Route path="/auth" >

            <Route path="login" element={ <Login /> } />
            {/* <Route path="sign-up" element={ <SignUp /> } /> */}
            <Route path="forgot-password" element={ <ForgotPassword /> } />
            <Route path="reset-password" element={ <ResetPassword /> } />

          </Route>
        </Route>

        <Route element={ <LoggedRoutes role={user.role} /> }>
          
          <Route path="/" >

            <Route index element={ <Home user={user} /> } />
            <Route path="sportsmen" element={ <Sportsmen user={user} /> } />
            
          </Route>
        </Route>
      </Routes>
      
    </div>
  )
}

export default App
