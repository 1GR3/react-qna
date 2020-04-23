import React from 'react';
import Post from './post.component.jsx';

export const Posts = () => (

  <div className="col questions-and-answers">
    <div className="form-row alert alert-row alert-warning">
      <div className>Use the history slider to ban a particular contributor from posting in this class </div>
    </div>
    <div className="form-row time-line-bar ">
      <div className="col-auto expand_feed">
        <button className="btn btn-secondary btn-xs px-1" id="expand_feed" data-toggle="tooltip" data-placement="right" title="Expand feed">
          <span className="fa fa-chevron-right" style={{transform: 'rotate(90deg) translateX(1px)'}} />
        </button>
      </div>
      <div className="col-auto pt-1 history_title pl-2">
        <a href>Ban User Console</a>&nbsp;·&nbsp;
        <span>Question</span><span className="d-none">Note</span><span className="d-none">Poll</span> History
      </div>
      <div className="col">
        <div className="progress-timeline"> {/* toggle 'invisible' class disabling/enabling  */}
          <div className="progress time-line updated">
            <div className="progress-bar w-80" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
            <div className="slider-tick" style={{left: '20%'}} />
            <div className="slider-tick" style={{left: '40%'}} />
            <div className="slider-tick" style={{left: '60%'}} />
            <div className="slider-tick" style={{left: '80%'}} />
          </div>
          <div className="slider-handle round" style={{left: '80%'}} />
        </div>
      </div>
      <div className="col-auto pt-1 pr-2 history_title">
        <a id="disable_history">disable history</a>
      </div>
    </div>

    <div className="form-row">
      <div className="col-xs-12 col-sm-10 col-md-8 col-lg-6" style={{margin: 'auto'}}>
        <div className="feedback-info">
          <div className="form-row">
            <div className="col">
              <div className="avatar d-inline-block">
                <img src="/images/qanda/default.svg" />
              </div>
              <div className="text">
                <b>Loyd Sureyya</b>
                started off the students&apos; response | <span className="helper-text">1 month ago</span>
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="col">
              <b>Loyd Sureyya</b>
              from posting in this class for 
              <span className="styled-select d-inline-block">
                <select className="custom-select">
                  <option>1 day</option>
                  <option>1 week</option>
                  <option>2 weeks</option>
                  <option>indefinitely</option>
                </select>
              </span>
              <a>Ban user</a>
              <br />
              <a>Exit Console</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="pb-4 with-alert" id="qanda-content">
      <div className="mt-3">
        <div className="alert alert-primary py-1 px-2" role="alert">
          <b>! This class has been made inactive. No posts will be allowed until an instructor reactivates the class.</b>
        </div>
      </div>
      <article className="question">
        <header className="container-fluid border-bottom">
          <div className="form-row">
            <div className="col text-left py-1">
              <b>poll admin panel</b>
              <span className="post_type_snippet pl-1">visible only to instructors and creators of the poll</span>
            </div>
          </div>
        </header>
        <div className="content container-fluid">
          <div className="form-row">
            <div className="col  py-2">
              <button className="btn btn-xs btn-primary">Close the poll</button>
              <button className="btn btn-xs btn-primary">Download poll Stats</button>
              <button className="btn btn-xs btn-primary">Clone the poll</button>
              <button className="btn btn-xs btn-primary">Hide poll results</button>
            </div>
          </div>
        </div>
      </article>
      <button className="btn btn-danger btn-sm my-2 reading_list_btn">
        I’ve read this <em>(removes from reading list bin)</em>
      </button>
      <br />
      <button className="btn btn-primary btn-sm my-2 reading_list_btn" data-toggle="modal" data-target="#readThis">
        Add back to reading list bin
      </button>
      <div className="text-center get-back">
        Want to go back to the demo homescreen? 
        <a>Click here</a>
      </div>
      <article className="question">
        <header className="container-fluid border-bottom pl-1">
          <div className="form-row">
            <div className="col-auto py-1">
              <svg width="24px" height="24px">
                <use xlinkHref="#Poll" />
              </svg>
            </div>
            <div className="col text-left pl-0 pt-1">
              <b>
                poll 
                <a data-toggle="tooltip" className="post_number_copy_link" data-placement="bottom" title="Copy @123">@123</a>
                <a data-toggle="tooltip" className="url_copy_link" data-placement="bottom" title="Copy URL" style={{verticalAlign: 'middle'}}>
                  <svg width="20px" height="20px">
                    <use href="#Link" />
                  </svg>
                </a>
              </b>
              <a data-toggle="tooltip" className="favorite-btn" data-placement="bottom" title="Save this post to your favorites to find it later.">
                <span className="icon-font icon-star-full" />
              </a>
              <span className="alert alert-warning">URL copied</span>
            </div>
            <div className="col text-right pt-1">
              <a href>stop following</a>
              <span className="view-count"><b>1</b> view</span>
            </div>
          </div>
        </header>
        <div className="content container-fluid">
          {/*
  <div class="form-row">
    <div class="col text-right">
      
    </div>
  </div>
*/}
          <div className="form-row">
            <div className="col">
              <div className="dropdown float-right">
                <button className="btn btn-action dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Actions
                </button>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" href="#">Stop Following</a>
                  <a className="dropdown-item" href="#">Convert Question to Note</a>
                  <a className="dropdown-item" href="#">Mark as Duplicate</a>
                  <a className="dropdown-item" href="#">Change Visibility of Post</a>
                  <a className="dropdown-item" href="#">Add to Reading List</a>
                  <a className="dropdown-item" href="#">Disable history</a>
                  <a className="dropdown-item" href="#">Flag as Inappropriate</a>
                  <a className="dropdown-item" href="#">Delete question</a>
                  <a className="dropdown-item" href="#">Open User Ban Console</a>
                </div>
              </div>
              <div className="pb-3 history-selection">
                <h2>Important: Piazza Rules and Guidelines</h2>
                <p>
                  Hello everyone,
                </p>
                <p>
                  As we begin the semester, we just wanted to let everyone know about Piazza Rules and Guidelines. 
                </p>
                <p>
                  Piazza is here because we want to help each of you succeed in the course. In order to make sure Piazza questions are answered as efficiently and effectively as possible, please follow these guidelines:
                </p>
                <p>
                  0) Always, on Piazza and in person, be respectful to both the course staff and to your fellow students.
                </p>
                <p>
                  1) Make sure the question hasn&apos;t been asked before. Check the FAQ document and other posts. You would be surprised how many questions can easily be answered by searching for keywords.  
                </p>
                <p>
                  2) When asking a question, do not just post code without any context. Tell us what your problem is, what you have done to debug, which tests are failing, etc. In addition, try to make your questions public so they can help more people. Give helpful titles to your posts that indicate what the question is. 
                </p>
                <p>
                  3) After we respond to your question, try to put some thought into solving the problem before asking follow ups (e.g. if we tell you how to fix a syntax error and then you subsequently have a new syntax error, try to spend some time thinking about why this is happening before asking a follow up question)
                </p>
                <p>
                  4) We encourage you to help out your fellow students on Piazza. If you do find a fix to a problem, especially in regards to compilation errors, please share your solution! However, make sure you are guiding your fellow students to the answer rather than simply handing them the solution.
                </p>
                <p>
                  5) Refrain from posting code until we&apos;ve asked you to post it. Try to frame every question as high-level and conceptually as possible so the question can be made public. Generally, posting code on Piazza is only appropriate if (1) a TA or Instructor has given you permission to post the code, and (2) there is some error specific to your code that you cannot figure out how to solve. When posting code, please format it using Piazza&apos;s "code" button, which makes it easier to read. You should never be posting your code in public posts.
                </p>
                <p>
                  6) If you see a question / issue that pertains directly to you, please mark it as a "Good Question" instead of commenting "me too" or "same." This way when we check the question out and see that so many people have given it a "good question," we know that a lot of people are having the issue.
                </p>
                <p>
                  Feel free to let any of us know if you have any questions about Piazza usage. Thank you :D 
                </p>
                <p>
                  Best wishes,
                  CIS120 TAs  
                </p>
                <p>
                  #pin
                </p>
                <p className="helper-text text-center">
                  This private post is only visible to <b>Instructors</b> and <b>Krystine Altamira</b><br />
                  (Change this private post into an anonymous public post under Actions &gt; Change Visibility of Post)
                </p>
              </div>
            </div>
          </div>
        </div>
        <footer className="container-fluid border-top">
          <div className="row">
            <div className="col col-auto text-left py-0 align-self-center">
              <button className="btn btn-primary btn-xs mr-2 post_edit" data-toggle="tooltip" data-placement="bottom" title="Improve this question to add more details or clarify something.">
                edit
              </button>
              <a href>good question</a>
              <div className="d-inline-block good_post_number">&nbsp;12</div>
            </div>
            <div className="col text-right">
              <div className="update_text">
                <span className="d-none d-sm-none d-md-inline">Updated</span> 
                <span>
                  <span data-toggle="tooltip" data-placement="top" title="Timestamp">
                    5 days ago by 
                  </span>
                  <span>
                    Piazza Team Longer name (anon. to classmates) 
                    <div className="d-inline-block endorsed_answerer_badge" data-toggle="tooltip" data-placement="left" title="Instructor-endorsed answerer on Piazza">
                      <svg width="16px" height="16px">
                        <use href="#badge-gold">
                        </use></svg>
                    </div>
                    <div className="d-inline-block endorsed_answerer_badge" data-toggle="tooltip" data-placement="left" title="Instructor-endorsed answerer in this class">
                      <svg width="16px" height="16px">
                        <use href="#badge-bronze">
                        </use></svg>
                    </div>
                  </span>
                  and 
                </span>
                <a href className data-toggle="tooltip" data-placement="top" data-html="true" title="Dylan<br />Krystine">
                  2 others
                </a>
              </div>
            </div>
          </div>
        </footer>
      </article>
      <article className="answer">
        <header className="container-fluid border-bottom pl-1">
          <div className="form-row">
            <div className="col-auto text-left py-1">
              <svg width="24px" height="24px">
                <use xlinkHref="#Students" />
              </svg>
            </div>
            <div className="col text-left pl-0 pt-1">
              <b>the students&apos; answer,</b>
              <span className="post_type_snippet pl-1">
                where students collectively construct a single answer
              </span>
            </div>
          </div>
        </header>
        <div className="content container-fluid">
          <div className="form-row">
            <div className="col  pb-2">
              <div className="dropdown float-right">
                <button className="btn btn-action dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Actions
                </button>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" href="#">Stop Following</a>
                  <a className="dropdown-item" href="#">Convert Question to Note</a>
                  <a className="dropdown-item" href="#">Mark as Duplicate</a>
                  <a className="dropdown-item" href="#">Change Visibility of Post</a>
                  <a className="dropdown-item" href="#">Disable history</a>
                  <a className="dropdown-item" href="#">Flag as Inappropriate</a>
                  <a className="dropdown-item" href="#">Delete question</a>
                  <a className="dropdown-item" href="#">Open User Ban Console</a>
                </div>
              </div>
              <p className="pt-3">
                new answer, yep, mhm
              </p>
            </div>
          </div>
        </div>
        <footer className="container-fluid border-top">
          <div className="row">
            <div className="col col-auto text-left py-0 align-self-center"> 
              <button className="btn btn-primary btn-xs mr-2 post_edit" data-toggle="tooltip" data-placement="bottom" title="Improve this question to add more details or clarify something.">
                edit
              </button>
              <a href>good question</a>
              <div className="d-inline-block good_post_number">&nbsp;12</div>
            </div>
            <div className="col text-right">
              <div className="update_text">
                <span className="d-none d-sm-none d-md-inline">Updated</span> 
                <span data-toggle="tooltip" data-placement="top" title="Timestamp">
                  5 days ago by Piazza Team Longer name (anon. to classmates) and 
                </span>
                <a href className data-toggle="tooltip" data-placement="top" data-html="true" title="Dylan<br />Krystine">
                  2 others
                </a>
              </div>
            </div>
          </div>
        </footer>
      </article>
      <article className="answer">
        <header className="container-fluid border-bottom pl-1">
          <div className="form-row">
            <div className="col-auto text-left py-1">
              <svg width="24px" height="24px">
                <use xlinkHref="#Question-r" />
              </svg>
            </div>
            <div className="col text-left pl-0 pt-1">
              <b>testing</b>
              <span className="post_type_snippet pl-1">actions menu inside paragraph</span>
            </div>
          </div>
        </header>
        <div className="content container-fluid">
          <div className="form-row">
            <div className="col  pb-3">
              <div className="dropdown float-right">
                <button className="btn btn-action dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Actions
                </button>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" href="#">Stop Following</a>
                  <a className="dropdown-item" href="#">Convert Question to Note</a>
                  <a className="dropdown-item" href="#">Mark as Duplicate</a>
                  <a className="dropdown-item" href="#">Change Visibility of Post</a>
                  <a className="dropdown-item" href="#">Disable history</a>
                  <a className="dropdown-item" href="#">Flag as Inappropriate</a>
                  <a className="dropdown-item" href="#">Delete question</a>
                  <a className="dropdown-item" href="#">Open User Ban Console</a>
                </div>
              </div>
              <p className="pt-3">
                Refrain from posting code until we&apos;ve asked you to post it. Try to frame every question as high-level and conceptually as possible so the question can be made public. Generally, posting code on Piazza is only appropriate if (1) a TA or Instructor has given you permission to post the code, and (2) there is some error specific to your code that you cannot figure out how to solve. When posting code, please format it using Piazza&apos;s "code" button, which makes it easier to read. You should never be posting your code in public posts.
              </p>
              <p>
                xc(t) has period 2π/ω, and xp(t) has period 2π/ω0. Showing that x(t) is periodic amounts to showing that there is some number τ with x(t+τ)=x(t) for all t -- it suffices to find some τ which is a multiple of the periods of both xc and xp, since then xc(t+τ)=xc(t), and similarly xp(t+τ)=xp(t). So, can you find a number that is a multiple of both periods?
              </p>
            </div>
          </div>
        </div>
        <footer className="container-fluid border-top">
          <div className="row">
            <div className="col col-auto text-left py-0 align-self-center">
              <button className="btn btn-primary btn-xs mr-2 post_edit" data-toggle="tooltip" data-placement="bottom" title="Improve this question to add more details or clarify something.">
                edit
              </button>
              <a href>good question</a>
              <div className="d-inline-block good_post_number">&nbsp;12</div>
            </div>
            <div className="col text-right">
              <div className="update_text">
                <span className="d-none d-sm-none d-md-inline">Updated</span> 
                <span data-toggle="tooltip" data-placement="top" title="Timestamp">
                  5 days ago by Piazza Team Longer name (anon. to classmates) and 
                </span>
                <a href className data-toggle="tooltip" data-placement="top" data-html="true" title="Dylan<br />Krystine">
                  2 others
                </a>
              </div>
            </div>
          </div>
        </footer>
      </article>
      <article className="answer">
        <header className="container-fluid border-bottom pl-1">
          <div className="form-row">
            <div className="col-auto text-left py-1">
              <svg width="24px" height="24px">
                <use xlinkHref="#Instructors" />
              </svg>
            </div>
            <div className="col text-left pl-0 pt-1">
              <b>the instructors&apos; answer,</b>
              <span className="post_type_snippet pl-1">where instructors collectively construct a single answer</span>
            </div>
          </div>
        </header>
        <div className="content container-fluid">
          <div className="form-row">
            <div className="col">
              <div className="dropdown float-right">
                <button className="btn btn-action dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Actions
                </button>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" href="#">Stop Following</a>
                  <a className="dropdown-item" href="#">Convert Question to Note</a>
                  <a className="dropdown-item" href="#">Mark as Duplicate</a>
                  <a className="dropdown-item" href="#">Change Visibility of Post</a>
                  <a className="dropdown-item" href="#">Disable history</a>
                  <a className="dropdown-item" href="#">Flag as Inappropriate</a>
                  <a className="dropdown-item" href="#">Delete question</a>
                  <a className="dropdown-item" href="#">Open User Ban Console</a>
                </div>
              </div>
              <p className="pt-3">
                I've cleaned up some of your notation, but the key thing to realize is that you've got the reciprocals of the periods:
              </p>
              <p>
                xc(t) has period 2π/ω, and xp(t) has period 2π/ω0. Showing that x(t) is periodic amounts to showing that there is some number τ with x(t+τ)=x(t) for all t -- it suffices to find some τ which is a multiple of the periods of both xc and xp, since then xc(t+τ)=xc(t), and similarly xp(t+τ)=xp(t). So, can you find a number that is a multiple of both periods?
              </p>
            </div>
          </div>
        </div>
        <footer className="container-fluid border-top">
          <div className="row">
            <div className="col col-auto text-left py-0 align-self-center">
              <button className="btn btn-primary btn-xs mr-2 post_edit" data-toggle="tooltip" data-placement="bottom" title="Improve this question to add more details or clarify something.">
                edit
              </button>
              <a href>good question</a>
              <div className="d-inline-block good_post_number">&nbsp;12</div>
            </div>
            <div className="col text-right">
              <div className="update_text">
                <span className="d-none d-sm-none d-md-inline">Updated</span> 
                <span data-toggle="tooltip" data-placement="top" title="Timestamp">
                  5 days ago by Piazza Team Longer name (anon. to classmates) and 
                </span>
                <a href className data-toggle="tooltip" data-placement="top" data-html="true" title="Dylan<br />Krystine">
                  2 others
                </a>
              </div>
            </div>
          </div>
        </footer>
      </article>
      <article className="answer followup_container">
        <header className="container-fluid border-bottom pl-1">
          <div className="row">
            <div className="col text-left text-truncate py-1">
              <div className="pl-2 d-inline-block">
                <b>followup discussions</b>
              </div>
              <span className="post_type_snippet pl-1">
                for lingering questions and comments
              </span>
            </div>
            <div className="col text-right pt-2">
              <span className="text-green">1 endorsed followup comment</span>
            </div>
          </div>
        </header>
        <div className="content container-fluid">
          <div className="row followup">
            <div className="col followup_content_wrapper">
              <div className="form-row">
                <div className="col-auto">
                  <div className="resolved">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="customRadioInline1" name="customRadioInline1" className="custom-control-input" />
                      <label className="custom-control-label" htmlFor="customRadioInline1">Resolved</label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="customRadioInline2" name="customRadioInline1" className="custom-control-input" />
                      <label className="custom-control-label" htmlFor="customRadioInline2">Unresolved</label>
                    </div>
                  </div>
                </div>
                <div className="col mt-1 pl-0">
                  <a data-toggle="tooltip" className="post_number_copy_link" data-placement="bottom" title="Copy @123"><b>@123</b></a>
                  <a data-toggle="tooltip" data-placement="bottom" className="url_copy_link" title="Copy URL" style={{verticalAlign: 'middle'}}>
                    <svg width="20px" height="20px">
                      <use href="#Link" />
                    </svg>
                  </a>
                </div>
                <div className="col text-right">
                  <div className="dropdown">
                    <button className="btn btn-link dropdown-toggle btn-xs px-1" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Actions
                    </button>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                      <a className="dropdown-item" href="#">Edit</a>
                      <a className="dropdown-item" href="#">Delete</a>
                      <a className="dropdown-item" href="#">Open User Ban Console</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="col-auto mx-0">
                  <div className="avatar" data-toggle="tooltip" data-placement="bottom" title="Anonymous">
                    <img src="/images/qanda/anonymous.svg" />
                  </div>
                </div>
                <div className="col">
                  <b>Anonymous</b> <span className="helper-text">1 month ago</span>
                  <p>Thanks for this answer, but how does the priming section work? When the subject is being tested is that when the word is flashed for 34ms and the subject studies as they did in the initial condition, or is the 34ms flash during the learning phase and they are tested as they were initially? Thanks!
                  </p>
                  <a href>good comment</a>
                  <div className="d-inline-block good_post_number">&nbsp;12</div>
                  <div className="form-row followup_reply">
                    <div className="col-auto mx-0">
                      <div className="avatar" data-toggle="tooltip" data-placement="bottom" title="Anonymous">
                        <img src="/images/qanda/anonymous.svg" />
                      </div>
                    </div>
                    <div className="col">
                      <div className="dropdown float-right">
                        <button className="btn btn-link dropdown-toggle btn-xs px-1" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Actions
                        </button>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                          <a className="dropdown-item" href="#">Edit</a>
                          <a className="dropdown-item" href="#">Delete</a>
                          <a className="dropdown-item" href="#">Open User Ban Console</a>
                        </div>
                      </div>
                      <b>Anonymous</b> <span className="helper-text">1 month ago</span>
                      <p>Yes, the 34ms flash is the testing phase! The words that flash are the same words that are in the study phase.
                      </p>
                      <p className="text-green text-center pt-2">
                        <b>~ An instructor (Professor Escolero) thinks this is a good comment ~</b>
                      </p>
                      <a href>good comment</a>
                      <div className="d-inline-block good_post_number">&nbsp;12</div>
                    </div>
                  </div>
                  <div className="form-row followup_reply">
                    <div className="col-auto mx-0">
                      <div className="avatar" data-toggle="tooltip" data-placement="bottom" title="Loyd Surreyya">
                        <img src="/images/qanda/default.svg" />
                      </div>
                    </div>
                    <div className="col">
                      <b>Loyd Surreyya</b> <span className="helper-text">1 month ago</span>
                      <p>Right. The word that is flashed is COLD, and typically it would be flashed too quickly for anyone to be able to read it, but becasuse participants were primed with the word they will be more likely to see it.
                      </p>
                      <a href>good comment</a>
                      <div className="d-inline-block good_post_number">&nbsp;12</div>
                    </div>
                  </div>
                  <div className="form-row followup_reply">
                    <div className="col-auto mx-0">
                      <div className="avatar" data-toggle="tooltip" data-placement="bottom" title="Anonymous">
                        <img src="/images/qanda/anonymous.svg" />
                      </div>
                    </div>
                    <div className="col">
                      <b>Anonymous</b> <span className="helper-text">1 month ago</span>
                      <p>Thanks!
                      </p>
                      <a href>good comment</a>
                      <div className="d-inline-block good_post_number">&nbsp;12</div>
                    </div>
                  </div>
                  <div className="form-row followup comment pr-0 pl-0 pb-0">

                    <div className="col pr-0 mr-0 pl-0 pb-0">
                      <input type="text" className="form-control ng-pristine ng-valid my-0" placeholder="Reply to this followup discussion" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h3>Start a new followup discussion</h3>
              <input type="text" className="form-control ng-pristine ng-valid my-2" placeholder="Compose a new followup discussion" />
            </div>
          </div>
        </div>
      </article>
      <article className="question">
        <header className="container-fluid border-bottom pl-1">
          <div className="form-row">
            <div className="col-auto py-1">
              <svg width="24px" height="24px">
                <use xlinkHref="#Poll" />
              </svg>
            </div>
            <div className="col text-left pl-0 pt-1">
              <b>poll</b>
              <a data-toggle="tooltip" className="favorite-btn" data-placement="bottom" title="Save this post to your favorites to find it later.">
                <span className="icon-font icon-star-full" />
              </a>
            </div>
            <div className="col text-right pt-1">
              <a href>stop following</a>
              <span className="view-count"><b>1</b> view</span>
            </div>
          </div>
        </header>
        <div className="content container-fluid">
          <div className="form-row">
            <div className="col">
              <div className="dropdown float-right">
                <button className="btn btn-action dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Actions
                </button>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" href="#">Stop Following</a>
                  <a className="dropdown-item" href="#">Convert Question to Note</a>
                  <a className="dropdown-item" href="#">Mark as Duplicate</a>
                  <a className="dropdown-item" href="#">Change Visibility of Post</a>
                  <a className="dropdown-item" href="#">Disable history</a>
                  <a className="dropdown-item" href="#">Flag as Inappropriate</a>
                  <a className="dropdown-item" href="#">Delete question</a>
                  <a className="dropdown-item" href="#">Open User Ban Console</a>
                </div>
              </div>
              <h2 className="pt-2">Daily poll: What will the loop print</h2>
              <pre className="prettyprint">for(int i = 0; i &lt; 3; i++){"{"}{"\n"}{"\t"}print(i * 2){"\n"}{"}"}{"\n"}{"            "}</pre>
              <p>
              </p><div className="custom-control custom-radio">
                <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" />
                <label className="custom-control-label" htmlFor="customRadio1">0 2 4</label>
              </div>
              <div className="custom-control custom-radio">
                <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" />
                <label className="custom-control-label" htmlFor="customRadio2">0 1 2</label>
              </div>
              <div className="custom-control custom-radio">
                <input type="radio" id="customRadio3" name="customRadio" className="custom-control-input" />
                <label className="custom-control-label" htmlFor="customRadio3">1 2 3</label>
              </div>
              <br />
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                <label className="custom-control-label" htmlFor="customCheck1">Custom checkbox A</label>
              </div>
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck2" />
                <label className="custom-control-label" htmlFor="customCheck2">Custom checkbox B</label>
              </div>
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck3" />
                <label className="custom-control-label" htmlFor="customCheck3">Custom checkbox C</label>
              </div>
              <br />
              <b>#pin</b>
              <br />
              <br />
              <button className="btn btn-xs btn-secondary">Submit</button>
              <p />
              <p>
                You have <b>not voted</b> yet.
              </p>
              <p>
                Revoting is <b>not allowed</b>. Select your vote and click submit to register your vote.
              </p>
              <p>
                Your name will be <b>visible to instructors but not students</b>.
              </p>
              <p className="py-2">
                <span className="folder-tag">hw2</span>
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
            </div>
          </div>
        </div>
        <footer className="container-fluid border-top">
          <div className="row">
            <div className="col col-auto text-left py-0 align-self-center">
              <button className="btn btn-primary btn-xs mr-2 post_edit" data-toggle="tooltip" data-placement="bottom" title="Edit the single Wiki Answer to improve the answer.">
                edit
              </button>
              <a href>good question</a>
              <div className="d-inline-block good_post_number">&nbsp;12</div>
            </div>
            <div className="col text-right">
              <div className="update_text">
                <span className="d-none d-sm-none d-md-inline">Updated</span> 
                5 days ago by iazza Team Longer name anon. to classmates) and 
                <a href className data-toggle="tooltip" data-placement="top" data-html="true" title="Dylan<br />Krystine">
                  2 others
                </a>
              </div>
            </div>
          </div>
        </footer>
      </article>
      <article className="poll-results">
        <div className="content container-fluid">
          <div className="form-row">
            <div className="col  py-2 text-center">
              <h2 className="mb-0">charts closes in 2 day(s)</h2>
              <h3>A total of 1 vote(s) in 0 hours</h3>
            </div>
          </div>
          <div className="form-row">
            <div className="col-2 text-right">
              0 (0% of users)
            </div>
            <div className="col">
              <div className="progress">
                <div className="progress-bar bg-success" role="progressbar" style={{width: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
            <div className="col">
              0 2 4
            </div>
            <div className="col-auto">
              <a href>show voters</a>
            </div>
          </div>
          <div className="form-row">
            <div className="col-2 text-right">
              0 (0% of users)
            </div>
            <div className="col">
              <div className="progress">
                <div className="progress-bar bg-success" role="progressbar" style={{width: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
            <div className="col">
              0 1 2
            </div>
            <div className="col-auto">
              <a href className="invisible">show voters</a>
            </div>
          </div>
          <div className="form-row">
            <div className="col border-top border-bottom">
              <a href>Hide Voters</a><br />
              Piazza Team
            </div>
          </div>
          <div className="form-row">
            <div className="col-2 text-right">
              0 (0% of users)
            </div>
            <div className="col">
              <div className="progress">
                <div className="progress-bar bg-success" role="progressbar" style={{width: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
            <div className="col">
              1 2 3
            </div>
            <div className="col-auto">
              <a href>show voters</a>
            </div>
          </div>
          <div className="form-row">
            <div className="col  py-2">
            </div>
          </div>
        </div>
      </article>

    </div>
  </div>
  
);

export default Posts;