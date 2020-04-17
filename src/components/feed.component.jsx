import React from 'react';

const Feed = ({username, bgcolor}) => (

  <div id="accordion">
    <div className="text-center py-3 ng-hide" ng-show="filteredFeedList.length == 0">
      <strong>Events you create will appear here in your feed</strong>
    </div>  
    <div className="card">
      <div className="card-header" id="headingOne">
        <h5>
          <button className="btn btn-link ng-binding btn-bucket" data-toggle="tooltip" data-placement="bottom" title="My Reading List">
            My Reading List
          </button>
        </h5>
      </div>
      <div id="collapseOne0" className="collapse show">
        <div className="card-body">      
          <feed-item-qna>
            
            <article>
              <div className="form-row">
                <div className="col-10">
                  <h6 className="mt-0 text-truncate">Cycle Energy Balance</h6>
                  <p className="mb-0 ng-binding">
                    I understand for a cycle Wcycle=Qcycle. However, isn&apos;t Qcycle the sum or the net oof the heat transfer process on the
                  </p>
                  <ul className="status">
                    <li className="pending ng-binding ng-hide" ng-hide="item.state == 'done' || item.state == 'archived'" />
                    <li className="pending ng-binding ng-hide" ng-show="item.state == 'done' && item.missing_int > 0"> missing interviewers details</li>
                    <li className="pending ng-binding ng-hide" ng-show="item.state == 'done' && item.missing_loc > 0"> missing locations details</li>
                    <li className="pending ng-binding ng-hide" ng-show="item.state == 'done' && item.signups_pend > 0"> pending confirmations</li>
                    <li className="confirmed ng-binding ng-hide" ng-show="item.state == 'done' && item.counts.rsvps > 0 "> RSVPs</li>
                    <li className="confirmed ng-binding ng-hide" ng-show="item.state == 'done' && item.counts.pre_reg > 0 "> Pre-registered</li>
                    <li className="confirmed ng-binding ng-hide" ng-show="item.state == 'done' && checkinCount(item) > 0 ">0 Check-ins</li>
                  </ul>
                  <div className="date float-right">
                    <span className="icon-font icon-o-archive ng-hide" style={{fontSize: '16px'}} ng-show="item.state == 'archived'" />
                  </div>
                </div>
                <div className="col metapost">
                  <span className="date">3/29/17</span>
                  <br />
                  <div className="feed_icon">
                    <svg width={14} height={16}>
                      <use href="#Students" />
                    </svg>     
                  </div>
                  <div className="feed_icon">
                    <svg width={14} height={16}>
                      <use href="#Instructors" />
                    </svg>     
                  </div>
                </div>
              </div>
            </article>
            <div className="form-row actions">
              <div className="col unread">
                <span>Unread</span>
              </div>
              <div className="col unfollow">
                <span>Unfollow</span>
              </div>
              <div className="col refer">
                <span>Refer</span>
              </div>
              <div className="col pin">
                <span>Pin</span>
              </div>
              <div className="col archive">
                <span>Archive</span>
              </div>
              <div className="col delete">
                <span>Delete</span>
              </div>
            </div>
            
          </feed-item-qna>
        </div>
      </div>
    </div>
  </div>
        );

export default Feed;