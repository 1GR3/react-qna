import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import TopBar from './components/topbar.component.jsx';
import FolderBar from './components/folderbar.component.jsx';

import 'icons.svg';

const posts = () => (
  <div>
    <h1>posts page / posts</h1>
  </div>
)
const stats = () => (
  <div>
    <h1>stats page</h1>
  </div>
)

function App() {
  
  return (
    <div>
      
      <TopBar />
      <FolderBar />
      <Switch>
        <Route exact path='/' component={posts} />
        <Route path='/stats' component={stats} />
      </Switch>
      
    </div>
    
  );
}

export default App;
