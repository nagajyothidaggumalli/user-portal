import './App.css';
import {BrowserRouter, Routes, Route , useLocation} from "react-router-dom";
import UsersList from "./components/UsersList";
import UserDetails from "./components/UserDetails";
import AddUser from "./components/AddUser";
import { useEffect } from 'react';
import { useState } from 'react';

//const studentData=[];

function App() {
    const location = useLocation();

    useEffect(() => {

    }, [location.pathname]);

    return (
        <div className="container">
      
          <Routes> 
              {/* <Route path='/' element={<Redirect to="/students"/>}></Route> */}
              <Route path='/' element={<UsersList />}></Route>
              <Route path='/users' element={<UsersList />}></Route>
              <Route exact path='/user-details/:userId'  element={<UserDetails />}></Route>
              <Route exact path='/add'  element={<AddUser />}></Route>
          </Routes>
        </div>
    );
}

function AppContainer() {
    return <BrowserRouter><App /></BrowserRouter>
}

export default AppContainer;

