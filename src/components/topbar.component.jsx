import React from 'react';
import Button from 'react-bootstrap/Button';


const TopBar = ({username, bgcolor}) => (
  
<div id="topbar" className="ng-scope">
        <div className="container-fluid">
          <div className="form-row">
            <div className="col text-left" id="col-logo">
              <div className="form-row">
                <div className="col text-left">
                  <div className="logo">
                  </div>
                </div>
                <div className="col text-right">
                  <div className="dropdown w-100">
                    <button className="btn btn-primary btn-xs pr-0 text-truncate dropdown-toggle" type="button" id="classDropdownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <span className="classTruncate">ENGRD 2210</span>
                      <span className="top_bar_notification">12</span>
                    </button>
                    <div className="dropdown-menu dropdown-menu-right py-0" id="classes" aria-labelledby="classDropdownMenu">
                      <button className="dropdown-item" type="button">TET 325 Advenced Tetris Methods <span>[Fall 2019]</span></button>
                      <button className="dropdown-item" type="button">101 CS 101 <span>[Fall 2019]</span></button>
                      <button className="dropdown-item" type="button">ENGRD 2210 <span>[Fall 2019]</span></button>
                      <button className="dropdown-item dark-item border-top" type="button">Create a new class</button>
                      <button className="dropdown-item dark-item" type="button">Clone this class</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="form-row">
                <div className="col text-left breakpoint-820-down" id="class_nav_resources">
                  <div className="dropdown">
                    <button className="btn btn-primary btn-xs pr-0 dropdown-toggle" data-toggle="dropdown" style={{}}>
                      <span className="text-truncate classTruncate">Manage Class</span>
                    </button>
                    <ul className="dropdown-menu" id="section-menu">
                      <li className="dropdown-item"><a>Q&nbsp;&amp;&nbsp;A</a></li>
                      <li className="dropdown-item"><a>Resources</a></li>
                      <li className="dropdown-item"><a>Statistics</a></li>
                      <li className="dropdown-item"><a>Manage Class</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col text-left breakpoint-820-up">
                  <ul id="site-nav">
                    <li className="selected"><a>Q&nbsp;&amp;&nbsp;A</a></li>
                    <li className><a>Resources</a></li>
                    <li className><a>Statistics</a></li>
                    <li className><a>Manage Class</a></li>
                    <li className="yellow" style={{display: 'none'}}><a>Sign up in 2 mins. It’s free!</a></li>
                  </ul>
                </div>
                <div className="col-auto breakpoint-1075-up" id="search-companies">
                  <a className>Search Companies</a>
                  <button className="btn btn-transparent">
                    <svg width="16px" height="16px">
                      <use href="#Globe" width="16px" height="16px" preserveAspectRatio="xMinYMin meet">
                      </use></svg>
                  </button>
                  <button className="btn btn-transparent">
                    <svg width="16px" height="16px">
                      <use href="#Calendar" width="16px" height="16px" preserveAspectRatio="xMinYMin meet">
                      </use></svg>
                  </button>
                  <button className="btn btn-transparent position-relative">
                    <svg width="16px" height="16px">
                      <use href="#Bubble" width="16px" height="16px" preserveAspectRatio="xMinYMin meet">
                      </use></svg>
                    <span className="top_bar_notification">12</span>
                  </button>
                </div>
                <div className="col-auto text-right ml-auto">
                  <button className="btn btn-primary btn-xs pr-0" type="button">
                    <div className id="user">
                      <svg width="22px" height="22px">
                        <use href="#user" width="22px" height="22px" preserveAspectRatio="xMinYMin meet" />
                      </svg>
                    </div>
                    <span className="username">Prithvi Ramakrishnan</span>
                  </button>
                </div>
                <div className="col-auto breakpoint-1075-up">
                  <div className="dropdown" id="topbar_color_container">
                    <a className="dropdown-toggle" data-toggle="dropdown">
                      <div id="color-picker" />
                    </a>
                    <ul className="dropdown-menu dropdown-menu-right" id="color-palette" style={{width: '100px'}}>
                      <li className="dropdown-item"><div className="color-block" style={{background: 'rgb(62, 122, 171)'}}>&nbsp;</div></li>
                      <li className="dropdown-item"><div className="color-block" style={{background: 'rgb(21, 82, 7)'}}>&nbsp;</div></li>
                      <li className="dropdown-item"><div className="color-block" style={{background: 'rgb(61, 0, 121)'}}>&nbsp;</div></li>
                      <li className="dropdown-item"><div className="color-block" style={{background: 'rgb(77, 77, 77)'}}>&nbsp;</div></li>
                      <li className="dropdown-item"><div className="color-block" style={{background: 'rgb(197, 146, 1)'}}>&nbsp;</div></li>
                      <li className="dropdown-item"><div className="color-block" style={{background: 'rgb(69, 180, 32)'}}>&nbsp;</div></li>
                      <li className="dropdown-item"><div className="color-block" style={{background: 'rgb(84, 188, 232)'}}>&nbsp;</div></li>
                    </ul>
                  </div>
                </div>
                <div className="col-auto breakpoint-1075-down">
                  <div className="dropdown py-2">
                    <a className="dropdown-toggle border-left" data-toggle="dropdown">
                      &nbsp;
                    </a>
                    <ul className="dropdown-menu dropdown-menu-right" id="color-palette" style={{width: '100px'}}>
                      <li className="dropdown-item">Search Companies</li>
                      <li className="dropdown-item">Notifications</li>
                      <li className="dropdown-item">Browse Events</li>
                      <li className="dropdown-item">Messages</li>
                      <li className="dropdown-item dropdown-submenu"> 
                        <div className="dropdown dropdown-submenu dropleft position-relative" id="colorpicker2holder">
                          <span className="link dropdown-toggle" data-toggle="dropdown" display="static">
                            Top Bar Color
                          </span>
                          <ul className="dropdown-menu position-absolute" style={{width: '100px'}}>
                            <li className="dropdown-item"><div className="color-block" style={{background: 'rgb(62, 122, 171)'}}>&nbsp;</div></li>
                            <li className="dropdown-item"><div className="color-block" style={{background: 'rgb(21, 82, 7)'}}>&nbsp;</div></li>
                            <li className="dropdown-item"><div className="color-block" style={{background: 'rgb(61, 0, 121)'}}>&nbsp;</div></li>
                            <li className="dropdown-item"><div className="color-block" style={{background: 'rgb(77, 77, 77)'}}>&nbsp;</div></li>
                            <li className="dropdown-item"><div className="color-block" style={{background: 'rgb(197, 146, 1)'}}>&nbsp;</div></li>
                            <li className="dropdown-item"><div className="color-block" style={{background: 'rgb(69, 180, 32)'}}>&nbsp;</div></li>
                            <li className="dropdown-item"><div className="color-block" style={{background: 'rgb(84, 188, 232)'}}>&nbsp;</div></li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-auto text-right">
                  <div className="dropdown">
                    <button className="btn btn-primary btn-xs pr-0" type="button" id="dropdownMenuUser" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <span className="icon-font icon-settings" />
                    </button>
                    <div className="dropdown-menu dropdown-menu-right py-0" aria-labelledby="dropdownMenuUser" id="dmu">
                      <button className="dropdown-item" type="button">Account/Email Settings</button>
                      <button className="dropdown-item" type="button">Turn off Tooltips</button>
                      <button className="dropdown-item" type="button">Support</button>
                      <button className="dropdown-item" type="button">Report Bug</button>
                      <button className="dropdown-item" type="button">Piazza Homepage</button>
                      <button className="dropdown-item" type="button">Log Out</button>
                      <div id="credits" className="dropdown-item dark-item border-top text-center">
                        <a target="_blank" href="/privacy.html">Privacy Policy</a>&nbsp;·&nbsp;
                        <a target="_blank" href="/copyright.html">Copyright Policy</a><br />
                        <a target="_blank" href="/terms.html">Terms of Use</a><br />
                        <small>Copyright © 2017 Piazza Technologies, Inc. All Rights Reserved.</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

);

export default TopBar;