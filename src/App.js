
import React from 'react';
import './App.css';
import {Dashboard} from './Component/Admin/Dashboard';
import LayOut from './Component/Admin/layOut';
import { Route, Routes } from "react-router-dom"
import {Posts} from './Component/Admin/Posts';
import Album from './Component/Admin/Album';
import Comments from './Component/Admin/Comments';
import Users from './Component/Admin/Users';
import AddNewPost from './Component/Admin/AddNewPost';

function App() {

  return (
    <div className="App">
      <LayOut> 
      <Routes>
                <Route path='/' element={<Dashboard/>} />
                <Route path='/posts' element={<Posts/>} />
                    <Route path='/posts/addnewpost' element={<AddNewPost/>} />
                <Route path='/album' element={<Album/>} />
                <Route path='/comments' element={<Comments/>} />
                <Route path='/users' element={<Users/>} />
      </Routes>
     </LayOut>
    </div>
  );
}

export default App;
