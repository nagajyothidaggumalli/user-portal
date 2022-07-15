import './App.css';
import {BrowserRouter, Routes, Route , useLocation} from "react-router-dom";
import UsersList from "./components/UsersList";
import UserDetails from "./components/UserDetails";
import AddUser from "./components/AddUser";
import { useEffect } from 'react';

function App() {
    const location = useLocation();

    useEffect(() => {

    }, [location.pathname]);

    return (
        <div className="container">
      
          <Routes> 
              <Route path='/' element={<UsersList />}></Route>
              <Route path='/users' element={<UsersList />}></Route>
              <Route exact path='/user/:id'  element={<UserDetails />}></Route>
              <Route exact path='/add'  element={<AddUser />}></Route>
          </Routes>
        </div>
    );
}

function AppContainer() {
    return <BrowserRouter><App /></BrowserRouter>
}

export default AppContainer;

