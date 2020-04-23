import React from 'react';

export const Intro = () => (

  <div className="col questions-and-answers" id>
    <div className="form-row">
      <div className="col-auto expand_feed" style={{marginBottom: '-30px', marginLeft: '5px', zIndex: 50}}>
        <button className="btn btn-secondary btn-xs px-1" id="expand_feed" data-toggle="tooltip" data-placement="right" title="Expand feed">
          <span className="fa fa-chevron-right" style={{transform: 'rotate(90deg) translateX(1px)'}} />
        </button>
      </div>
    </div>
    <div className="row" ng-show="false">
      <div className="col border bg-white px-3 pt-1 pb-2 carousel-width">
        <h2>Piazza features that professors and students appreciate include:</h2>
        <div id="infoCarousel" className="carousel slide border-top pt-3 pb-1 " data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <div className="col">
                  <ol id="intro-list">
                    <li>Keep your homework and lecture notes organized with folders</li>
                    <li>Track TA and student participation</li>
                    <li>Build a single, comprehensive response with a wiki-style format</li>
                    <li>Quickly filter posts to find only the ones needing your attention</li>
                    <li>Encourage peer to peer knowledge sharing by endorsing good questions and answers</li>
                    <li>Create a new post and use LaTeX equation editor to easily read and write equations. Also post with code blocking, equations, images, videos, polls, and more…</li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-4">
                  <h3 className="mt-0">Keep your homework and lecture notes organized with <strong>folders</strong></h3>
                  <p>Folders make it easy to organize posts about a specific assignment (such as a homework or exam) or topic.</p>
                </div>
                <div className="col-8 ">
                  <img src="/images/careers_v2/screenshot.png" className="border mr-1" />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-4">
                  <h3>Track TA and student <strong>participation</strong></h3>
                  <p>Your class statistics tab will allow you to see usage trends, top class contributors, and reports.</p>
                  <ul>
                    <li>View your student and TA participation report to see your most active contributors.</li>
                    <li>Your overall class report allows you to gauge spikes in class activity.</li>
                  </ul>
                </div>
                <div className="col-8">
                  {/*                 <img src="https://via.placeholder.com/363x223" class="border mr-1"> */}
                  <svg>
                    <use xlinkHref="#Students" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-4">
                  <h3>Build a single, comprehensive response with a <strong>wiki-style format</strong></h3>
                  <p>Answers within the post can be edited by students, TAs and professors to get to a single great answer, eliminating the need to scroll through dozens of disconnected comments.</p>
                </div>
                <div className="col-8">
                  <img src="https://via.placeholder.com/363x223" className="border mr-1" />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-4">
                  <h3>Quickly <strong>filter posts</strong> to find only the ones needing your attention</h3>
                  <p />
                </div>
                <div className="col-8">
                  <img src="https://via.placeholder.com/363x223" className="border mr-1" />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-4">
                  <h3>Encourage peer to peer knowledge sharing by <strong>endorsing</strong> good questions and answers</h3>
                  <p>Drive active learning by getting students to answer each other’s questions. A quick endorsement will let them know the answer can be trusted.</p>
                </div>
                <div className="col-8">
                  <img src="https://via.placeholder.com/363x223" className="border mr-1" />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-4">
                  <h3>Create a new post and use <strong>LaTeX equation editor</strong> to easily read and write equations. Also post with <strong>code blocking, equations, images, videos, polls</strong>, and more...</h3>
                  <p>Example basic details if you were, say, setting up for a career fair at Penn:</p>
                </div>
                <div className="col-8">
                  <img src="https://via.placeholder.com/363x223" className="border mr-1" />
                </div>
              </div>
            </div>
          </div>
          <nav className="pt-3">
            <a className="custom-carousel-control-prev text-right" href="#infoCarousel" role="button" data-slide="prev">
              <span className="icon-font icon-chevron-left" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a className="custom-carousel-control-next text-left" href="#infoCarousel" role="button" data-slide="next">
              <span className="icon-font icon-chevron-right" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
            <div className="clearfix" />
            <ol className="carousel-indicators">
              <li data-target="#infoCarousel" data-slide-to={0} className="active" />
              <li data-target="#infoCarousel" data-slide-to={1} />
              <li data-target="#infoCarousel" data-slide-to={2} />
              <li data-target="#infoCarousel" data-slide-to={3} />
              <li data-target="#infoCarousel" data-slide-to={4} />
              <li data-target="#infoCarousel" data-slide-to={5} />
              <li data-target="#infoCarousel" data-slide-to={6} />
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>

)

export default Intro;