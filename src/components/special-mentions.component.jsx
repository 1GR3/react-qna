import React from 'react';

const sMentions = ({username, bgcolor}) => (
  
  <div id="special_mentions_holder" className="dashboard_toolbar special_mentions_wrapper">
    <button className="btn-collapse" id="sm_down">▾</button>
    <button className="btn-collapse" id="sm_up">▴</button>
    <div id="special_mentions_regular" className="form-row">
      <div className="col-lg-3 col-xl-2">
        <h3 className="text-truncate">Average Response Time:</h3>
        <div className="content">
          <span id="avg_resp_time" className="number">29 sec</span>
        </div>
      </div>
      <div id="special-mentions" className="col-lg-6 col-xl-8">
        <h3 className="text-truncate">Special Mentions:</h3>
        <div className="content" id="hof_best_answer2">
          <div className="text-truncate">
            Whoa! 
            <span anon="no" className="user_name user_name_null ">Anonymous </span> 
            answered 
            <a href="#" onclick="PEM.fire('selectContent', 113);">Perceptual Overlap and Generation--Week...</a> 
            in 23 sec.
            <span className="timestamp">
              <span title="Thu Sep 19 2019 17:57:58 GMT+0200 (Central European Summer Time)">1 month ago</span>
            </span>
          </div>
        </div>
      </div>
      <div id="overview-stats" className="col-lg-3 col-xl-2">
        <div className="form-row">
          <div className="col" style={{borderRight: '1px solid black'}}>
            <h3 className="text-center text-truncate">Online Now</h3>
          </div>
          <div className="col">
            <h3 className="text-center text-truncate">This Week:</h3>
          </div>
        </div>
        <div className="content">
          <div className="form-row">
            <div className="col" style={{borderRight: '1px solid black'}}>
              <span id="users_online_stat" className="split number">1</span>
            </div>
            <div className="col">
              <span id="users_7_stat" className="split number">13</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 text-center">
        <div id="legal_info">
          <ul>
            <li>Copyright © 2017 Piazza Technologies, Inc. All Rights Reserved.</li>
            <li><a target="_blank" href="/privacy.html">Privacy Policy</a></li>
            <li><a target="_blank" href="/copyright.html">Copyright Policy</a></li>
            <li><a target="_blank" href="/terms.html">Terms of Use</a></li>
            {/* 	                <li><a target="_blank" href="http://blog.piazza.com">Blog</a></li> */}
            <li><a className="report_bug" href="#">Report Bug!</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  
 );

export default sMentions;