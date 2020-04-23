import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import tersus from 'tersus-jsx.macro';
import './style.css';

import TopBar from './components/topbar.component.jsx';
import FolderBar from './components/folderbar.component.jsx';
import FeedBar from './components/feedbar.component.jsx';
import Posts from './components/posts.component.jsx';
import Create from './components/create.component.jsx';
//import OldLogic from './components/jquery-logic.component.jsx';

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

class App extends Component  {
  constructor() {
    super();
    this.state = {
      feed: [],
      searchField: ''
    }
  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(users => this.setState({feed: posts}));
      
      {/* PA.call_pj("network.get_my_feed", {nid:P.feed.network.id}, null, function(data){...}, function(err){...});*/}
  }
  
  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }
  
  render() {
    const {feed,searchField} = this.state;
{/*
    const filteredFeed = feed.filter(post => 
      post.title.toLowerCase().includes(searchField.toLowerCase())
    )
*/}
    return (
      <div>
        
        <TopBar />
        <div className="container-fluid main-content">
          <FolderBar />
          <div className="row" id="content-holder">
            <FeedBar />
            <Switch>
              <Route exact path='/' component={Posts} />
              <Route path='/stats' component={stats} />
              <Route path='/create' component={Create} />
            </Switch>
          </div>
          <div className="row">
            <div className="col" id="special_mentions_gap"></div>
            <div className="col"></div>
          </div>
        </div>
        </div>
      
    );
  }
}

export default App;
