import { useState } from 'react';
import './App.css';
import Login from './components/account/Login';
import Header from './components/header/Header';
import Home from './components/home/Home';
import DataProvider from './context/DataProvider';
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom'
import CreatePost from './components/create/CreatePost.js';

const PrivateRoute = ({ isAuthenticated, ...props }) => {
  return isAuthenticated ?
    <>
      <Header />
      <Outlet />
    </>
    : <Navigate replace to='/login' />
}

function App() {
  const [isAuthenticated, isUserAuthenticated] = useState(false);
  return (
    <DataProvider >
      <BrowserRouter>
        <div style={{ marginTop: 64 }}>
          <Routes>

            <Route path='/login'
              element={<Login isUserAuthenticated={isUserAuthenticated}></Login>}
            ></Route>

         
            <Route path='/' element={<PrivateRoute isAuthenticated={isAuthenticated} ></PrivateRoute>}>
              <Route path='/'
                element={<Home></Home>}
              ></Route>
            </Route>

            <Route path='/create' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/create' element={<CreatePost />} />
            </Route>
            </Routes>
        </div>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
