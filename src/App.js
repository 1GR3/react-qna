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
import Edit from './components/edit.component.jsx';
import Home from './components/home.component.jsx';
import Intro from './components/intro.component.jsx';
import SpecialContent from './components/sc.component.jsx';
import Stats from './components/stats.component.jsx';
import sMentions from './components/special-mentions.component.jsx';

//import OldLogic from './components/jquery-logic.component.jsx';

import 'icons.svg';

  const posts = () => (
    <div>
      <h1>posts page / posts</h1>
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
              <Route path='/create' component={Create} />
              <Route path='/edit' component={Edit} />
              <Route path='/home' component={Home} />
              <Route path='/intro' component={Intro} />
              <Route path='/special-content' component={SpecialContent} />
              <Route path='/stats' component={Stats} />
            </Switch>
          </div>
          <div className="row">
            <div className="col" id="special_mentions_gap"></div>
            <div className="col">
              <sMentions />
            </div>
          </div>
        </div>
        </div>
      
    );
  }
}

export default App;
