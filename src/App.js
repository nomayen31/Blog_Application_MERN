import './App.css';
import Login from './components/account/Login';
import Home from './components/home/Home';
import DataProvider from './context/DataProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <DataProvider >
      <BrowserRouter>
        <div style={{ marginTop: 64 }}>
          <Routes>
           <Route path='/login'
           element={<Login></Login>}
           ></Route>
           <Route path='/'
           element={<Home></Home>}
           ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
