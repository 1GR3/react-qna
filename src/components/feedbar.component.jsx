import React from 'react';
import Feed from './feed.component.jsx';

const FeedBar = ({username, bgcolor}) => (

      <div id="feed" className="col">
        <div data-pats="feed_container" style={{paddingRight: 0}}>
          <div className="container-fluid px-3">
            <div id="feed-filters" className="form-row border-bottom grey-bar feed_utility_bar">
              <div className="col-auto mr-1">
                <button className="btn btn-secondary btn-xs px-1" id="colapse_feed" data-toggle="tooltip" data-placement="right" title="Collapse feed">
                  <span className="fa fa-chevron-left" style={{transform: 'rotate(-90deg) translateX(-1px)'}} />
                </button>
              </div>
              <div className="col-auto text-truncate sort_categories">
                <a href className="folder">Unread</a>
              </div>
              <div className="col-auto text-truncate sort_categories">
                <a href className="folder">Updated</a>
              </div>
              <div className="col-auto text-truncate sort_categories">
                <a href className="folder">Unresolved</a>
              </div>
              <div className="col-auto text-truncate sort_categories">
                <a href className="folder">Following</a>
              </div>
              <div className="col-auto " style={{marginLeft: 'auto'}}>
                <button className="btn btn-link btn-xs px-1 dropdown-toggle" type="button" id="feedSettingsButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                  <span className="icon-font icon-settings" />
                </button>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="feedSettingsButton">
                  <a className="dropdown-item selected" href="#"><i className="icon-ok opt_check" />All</a>
                  <a className="dropdown-item" href="#"><i className="icon-ok opt_check" />Unread</a>
                  <a className="dropdown-item" href="#"><i className="icon-ok opt_check" />Updated</a>
                  <a className="dropdown-item" href="#"><i className="icon-ok opt_check" />Unresolved</a>
                  <a className="dropdown-item" href="#"><i className="icon-ok opt_check" />Due for answer</a>
                  <a className="dropdown-item" href="#"><i className="icon-ok opt_check" />Following</a>
                  <a className="dropdown-item" href="#"><i className="icon-ok opt_check" />Archived</a>
                  <a className="dropdown-item" href="#"><i className="icon-ok opt_check" />Instructor Posts</a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#"><i className="icon-ok opt_check" />Hide Group Posts</a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#" data-toggle="tooltip" data-placement="right" title="Mark all posts as read">
                    <i className="icon-ok opt_check" />Mark All Read
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item selected" href="#" data-toggle="tooltip" data-placement="right" title="Hide post descriptions from your feed">
                    <i className="icon-ok opt_check" />View in Compact Mode
                  </a>
                  <a className="dropdown-item selected" href="#" data-toggle="tooltip" data-placement="right" title="Identify which posts have instructors’ or students’ answers">
                    <i className="icon-ok opt_check" />Show Helper Icons
                  </a>
                </div>
              </div>
            </div>
            <div className="row" id="searchbar">
              <div ng-show="root.toolbarSelectedTab == 'classmates'" className="col pl-0 pr-1" style={{maxWidth: '88px'}}>
                <button className="btn btn-block btn-xs btn-primary px-1" ng-click="createNewList()" style={{paddingTop: '5px', marginTop: '3px'}}>
                  <span className="icon-font icon-file mr-1" />
                  New Post
                </button>
              </div>
              <div className="col px-0">
                <span className="search">
                  <input className="form-control ng-pristine ng-valid" type="search" placeholder="Search or add a post..." aria-label="Search" ng-model="filterInitiatives" ng-change="filterFeedList()" style={{marginTop: '2px', borderColor: '#d1d7de', height: '28px'}} />
                </span>
              </div>
            </div>
          </div>
          <div className="page_feed_filter_feed" id="filter_sort_method" style={{display: 'block'}}>
            <div id="search_tips_holder">
              <div className="search_tips_header">
                <a href="#" id="search_tips_toggle" className="dropdown-toggle">Search Tips</a>
                <span className="helper-text initial_message">(Increase the relevance of your search results!)</span>
              </div>
              <div id="search_tips">
                <table>
                  <tbody><tr width="120px">
                      <th>
                        If you type:
                      </th>
                      <th className="results">
                        You&apos;ll see:
                      </th>
                    </tr>
                    <tr>
                      <td>
                        Office hours
                      </td>
                      <td>
                        only results that contain office <strong>and</strong> hours
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Office |hours
                      </td>
                      <td>
                        results that contain office <strong>or</strong> hours
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Office -hours
                      </td>
                      <td>
                        only results that contain office <strong>but not</strong> hours
                      </td>
                    </tr>
                    <tr>
                      <td>
                        "Office Hours"
                      </td>
                      <td>
                        results with the <strong>exact phrase</strong> "Office hours"
                      </td>
                    </tr>
                    <tr>
                      <td>
                        subject:"Office hours"
                      </td>
                      <td>
                        posts with the <strong>title</strong> "Office hours"
                      </td>
                    </tr>
                    <tr>
                      <td>
                        contributor:"Jon Kidd"
                      </td>
                      <td>
                        posts with <strong>contributions by</strong> Jon Kidd
                      </td>
                    </tr>
                    <tr>
                      <td>
                        folder:hw1
                      </td>
                      <td>
                        posts <strong>within the folder</strong> "hw1"
                      </td>
                    </tr>
                  </tbody></table>
                <div className="btn-group btn-group-toggle mt-2" data-toggle="buttons">
                  <span className="py-1 pr-0">Sort results by: </span>
                  <label className="btn btn-xs btn-outline-secondary active">
                    <input type="radio" name="options" id="option1" defaultChecked /> Relevance
                  </label>
                  <label className="btn btn-xs btn-outline-secondary">
                    <input type="radio" name="options" id="option2" /> Date
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className=" text-right grey-bar">
            <div className="filter_by_container">
              <span>Filtering by:</span> <strong id="filter_by">Posts I Archived</strong>
              <a className="bookmark_filter_link" href="#">Add shortcut</a>
              <a className="position-relative remove" />
            </div>
          </div>
          <div className="row" style={{marginRight: 0}}>
            <div className="container-fluid" style={{paddingRight: 0}}>
              <div className="row" style={{marginRight: 0}}>
                <div className="col" style={{paddingRight: 0}}>
                  
                  <Feed />
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      );

export default FeedBar;