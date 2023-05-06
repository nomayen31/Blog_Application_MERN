import { useState } from 'react';
import './App.css';
import Login from './components/account/Login';
import Header from './components/header/Header';
import Home from './components/home/Home';
import DataProvider from './context/DataProvider';
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom'

const PrivateRoute = ({ isAuthenticated, ...props }) => {
  return isAuthenticated ?
    <>
      <Outlet />
    </>
    : <Navigate replace to='/login' />
}

function App() {
  const [isAuthenticated, isUserAuthenticated] = useState(false);
  return (
    <DataProvider >
      <BrowserRouter>
        <Header />
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
          </Routes>
        </div>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
