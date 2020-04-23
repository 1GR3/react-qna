import React from 'react';

export const SpecialContent = () => (

<div className="col questions-and-answers special">
        <div className="form-row">
          <div className="col-auto expand_feed" style={{marginBottom: '-30px', marginLeft: '5px', zIndex: 50}}>
            <button className="btn btn-secondary btn-xs px-1" id="expand_feed" data-toggle="tooltip" data-placement="right" title="Expand feed">
              <span className="fa fa-chevron-right" style={{transform: 'rotate(90deg) translateX(1px)'}} />
            </button>
          </div>
        </div>
        <div className id="qanda-content">
          <article className="note">
            <header className="container-fluid border-bottom pl-1">
              <div className="form-row">
                <div className="col-auto py-1">
                  <svg width="24px" height="24px">
                    <use xlinkHref="#Note" />
                  </svg>
                </div>
                <div className="col text-left pl-0 pt-1">
                  <b>
                    private note 
                    <a data-toggle="tooltip" className="post_number_copy_link" data-placement="bottom" title data-original-title="Copy @4">@4</a>
                    <a data-toggle="tooltip" className="url_copy_link" data-placement="bottom" title style={{verticalAlign: 'middle'}} data-original-title="Copy URL">
                      <svg width="20px" height="20px">
                        <use href="#Link" />
                      </svg>
                    </a>
                  </b>
                  <a data-toggle="tooltip" className="favorite-btn" data-placement="bottom" title data-original-title="Save this post to your favorites to find it later.">
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
              <div className="form-row">
                <div className="col">
                  <h2 className="pt-3 float-left">Tips &amp; Tricks for a successful class</h2>
                  {/*             <h3>Reduce inbox clutter:</h3> */}
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
                </div>
              </div>
              <div className="form-row">
                <div className="col-12 col-sm-4 col-md-3 col-lg-2 side-nav">
                  <div className="form-row">
                    <div className="col">
                      <h4>Reduce inbox clutter:</h4>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col bg-grey">
                      <ul>
                        <li className="one_one selected">Redirect student emails to Piazza</li>
                        <li className="one_two">Replace your class distribution list</li>
                        <li className="one_three">Use private posts to communicate with other instructors</li>
                      </ul>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col">
                      <h4>Set the tone for the class:</h4>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col bg-grey">
                      <ul>
                        <li className="two_one">Post announcements the first week of class</li>
                        <li className="two_two">Endorse and encourage student responses</li>
                        <li className="two_three">Encourage collaborative editing</li>
                        <li className="two_four">Go for visual posts</li>
                      </ul>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col">
                      <h4>Keep the class on track:</h4>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col bg-grey">
                      <ul>
                        <li className="three_one">Manage your class folders</li>
                        <li className="three_two">Link to other questions</li>
                        <li className="three_three">Mark questions duplicate</li>
                        <li className="three_four">Edit or delete anything</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col pl-3">
                  <div className="clearfix">
                    <button className="btn btn-link btn-xs float-left">« prev</button>
                    <button className="btn btn-link btn-xs float-right">next »</button>
                  </div>
                  <div className="one_one">
                    <p>When students email instructors with individual questions, your teaching staff may find itself answering the same questions over and over. When a question is posted on Piazza, it only needs to be answered once.</p>
                    <p>When students post on Piazza, everyone benefits. Students like knowing that others have the same question, and when it's answered on Piazza, it's answered for everybody.</p>
                    <p>Ask students to post their questions to Piazza instead of emailing you directly. Some instructors choose to respond to emailed questions by redirecting the students to Piazza. Others like to copy questions from emails or office hours and post them directly on the site so the answer can benefit the entire class (and save you some time!).</p>
                  </div>
                  <div className="one_two" style={{display: 'none'}}>
                    <p>Piazza makes it easy to post announcements to the entire class anytime. By posting announcements on Piazza, you can see any responses to the announcement all in one place rather than letting them fill your inbox.</p>
                    <p>To post an announcement, click "+ New Post" and select the "Note" tab, which lets you create a post that does not require a response. To make the announcement to the entire class immediately, regardless of their email settings, just check the box labeled "Send immediately to the entire class." All members of the class will receive an email notification of the post right away. It&apos;s a great way to get important information out fast.</p>
                  </div>
                  <div className="one_three" style={{display: 'none'}}>
                    <p>Piazza&apos;s private posts make it easy to keep all instructor dialogue in one place. When creating a new post, check the box labeled "Make this a private question." When an instructor adds a private post, only other class instructors can view it. Look for the blue "Private" label in the question feed on the left.</p>
                    <p>Students can also create private posts. When a student creates one, only that student and the class&apos;s instructors can view the post. Student-created private posts are useful for asking questions when the student is unsure whether the material may be shared with the entire class. If the post contains information that the entire class would benefit from, an instructor can always make the private post public using the menu that appears left of the question&apos;s title in the question feed.</p>
                  </div>
                  <div className="two_one" style={{display: 'none'}}>
                    <p>As soon as you&apos;ve enrolled your class, let students know you&apos;re active on Piazza by adding a couple announcements.</p>
                    <p>The first few posts are a great opportunity to share basic information about the class, like when office hours are and how you can be contacted. Many instructors also like to lay out the ground rules for posting questions and answers on Piazza.</p>
                    <p>Add a new post by clicking "+ New Post" at the top of your screen and filling in the details. Select the "Note" tab if you&apos;re posting an announcement and don't require a response.</p>
                  </div>
                  <div className="two_two" style={{display: 'none'}}>
                    <p>Click "Good Question" or "Good Answer" to encourage students to ask questions and respond to classmates' questions.</p>
                  </div>
                  <div className="two_three" style={{display: 'none'}}>
                    <p>Piazza questions and answers are like Wikipedia: anyone can contribute to them. Collaboratively edited questions and answers are far easier to read and comprehend than a long thread of comments.</p>
                    <p>The answer to each question is divided into a students&apos; answer (for all students to edit) and an instructors&apos; answer (for all instructors to edit). When you read a good students&apos; answer, click "Good Answer!" to endorse it—this helps encourage students to answer others&apos; questions. Plus, when students see the checkmark over the students&apos; answer icon in the question feed, they know that that endorsed students&apos; answer is just as good as any instructors&apos; answer.</p>
                    <p>Another good way to encourage students to edit the students&apos; answer is to refine what other students have written. Anyone can view the contributions individuals made to the response by using the Question History slider that appears above the question after several edits.</p>
                  </div>
                  <div className="two_four" style={{display: 'none'}}>
                    <p>We know from experience that visual posts can communicate concepts very effectively. Embed images, attach files, and format math and code to make posts clean and easily understandable.</p>
                    <p>Easily include blocks of pre-formatted code by selecting the pre button in the question editor, and include inline code snippets by selecting the tt button for teletype text. For mathematical equations, click the Fx icon to access a LaTeX editor.</p>
                    <p>See our <a href>formatting page</a> for more details on how to format your posts.</p>
                  </div>
                  <div className="three_one" style={{display: 'none'}}>
                    <p>Folders make it easy to filter questions by a particular assignment or topic. Classes start out and stay more organized when instructors create folders for a class before it starts.</p>
                    <p>Specify your class&apos;s folders in your manage class page. Click the "Manage Class" link at the top of your screen.</p>
                  </div>
                  <div className="three_two" style={{display: 'none'}}>
                    <p>Create a hyperlink to another post by typing the "@" symbol followed by that post&apos;s number (e.g. @102). Find a post&apos;s number by looking in the URL, or by hovering over the arrow to the left of the question&apos;s title in the question feed.</p>
                  </div>
                  <div className="three_three" style={{display: 'none'}}>
                    <p>If you notice that a question has been asked before, mark it as a duplicate question to avoid confusion. Select the "Mark as Duplicate" option in the duplicate question&apos;s more menu and follow the directions. To limit the number of duplicate questions that arise, as soon as there is a significant number of posts in your class, we&apos;ll do our part to keep things organized by requiring students to search existing posts before adding their own.</p>
                  </div>
                  <div className="three_four" style={{display: 'none'}}>
                    <p>If you notice that a question has been asked before, mark it as a duplicate question to avoid confusion. Select the "Mark as Duplicate" option in the duplicate question&apos;s more menu and follow the directions. To limit the number of duplicate questions that arise, as soon as there is a significant number of posts in your class, we&apos;ll do our part to keep things organized by requiring students to search existing posts before adding their own.</p>
                  </div>
                </div>
              </div>
              <div className="form">
                <div className="col text-center py-3">
                  <p className="helper-text">This private post is only visible to <b>original poster</b> and <b>Instructors</b><br />
                    (Change this private post into an anonymous public post under Actions &gt; Change Visibility of Post)
                  </p>
                </div>
              </div>
            </div>
            <footer className="container-fluid border-top">
              <div className="form-row">
                <div className="col col-auto text-left py-0 align-self-center">
                  <button className="btn btn-primary btn-xs mr-2">Edit</button>
                  <a href>good question</a>
                  | 12
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
          <article className="question">
            <header className="container-fluid border-bottom pl-1">
              <div className="form-row">
                <div className="col-auto py-1">
                  <svg width="24px" height="24px">
                    <use xlinkHref="#Note" />
                  </svg>
                </div>
                <div className="col text-left pl-0 pt-1">
                  <b>
                    private note
                    <a data-toggle="tooltip" className="post_number_copy_link" data-placement="bottom" title data-original-title="Copy @4">@4</a>
                    <a data-toggle="tooltip" className="url_copy_link" data-placement="bottom" title style={{verticalAlign: 'middle'}} data-original-title="Copy URL">
                      <svg width="20px" height="20px">
                        <use href="#Link" />
                      </svg>
                    </a>
                  </b>
                  <a data-toggle="tooltip" className="favorite-btn" data-placement="bottom" title data-original-title="Save this post to your favorites to find it later.">
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
                  <div className="post_region_content note" id="view_quesiton_note">
                    <h1 data-pats="title_text" className="post_region_title">Introduce Piazza to your students</h1>
                    <div className="post_region_text" id="questionText">                
                      <div id="introduce_piazza">
                        <div className="intro_post_section" id="welcomePostSection">
                          <h1 className="mb-2">Post a Welcome Note!</h1>
                          <div className="ml-4 pb-3">
                            <p className="mb-3">In your first post on Piazza, welcome your students to their new class:</p>
                            <textarea className="form-control mb-2" rows={7} defaultValue={"Students,\n\nWelcome to Piazza! We'll be conducting all class-related discussion here this term. The quicker you begin asking questions on Piazza (rather than via emails), the quicker you'll benefit from the collective knowledge of your classmates and instructors. We encourage you to ask questions when you're struggling to understand a concept—you can even do so anonymously.\n\n-%NAME%\n                      "} />
                            <button className="btn btn-primary btn-xs" style={{position: 'relative', left: '45%'}}>Add Post</button>
                            <div>
                              <h2>Note Added!</h2>
                              <div className="post_confirm clearFix">
                                <div className="post_confirm_img" />
                                <div className="post_confirm_text"><p>To add another note, click the "New Post" button to the left of the search bar.</p></div>
                              </div>
                              <div className="intro_post_section_line" />
                            </div>
                          </div>
                        </div>
                        <div className>
                          <h1 className>Include this blurb in your syllabus</h1>
                          <div className="ml-4">
                            <p className="mb-3">This term we will be using Piazza for class discussion. The system is highly catered to getting you help fast and efficiently from classmates, the TA, and myself. Rather than emailing questions to the teaching staff, I encourage you to post your questions on Piazza. If you have any problems or feedback for the developers, email team@piazza.com.</p>
                            <p className="mb-3">Find our class page at: 
                              <a href="#">https://piazza.com/test.com/fall2019/engrd2210/home</a>
                            </p>
                          </div>
                        </div>
                        <div className="intro_post_section" id="officeHoursSection">
                          <h1>Post your office hours</h1>
                          <div className="ml-4">
                            <p className="mb-3">Let your students know when they can reach you in person - create a new post right here, quickly and easily:</p>
                            <textarea className="form-control mb-2" rows={7} defaultValue={"Students,\n  \nMy office hours this term will be held:\nDAY from TIME–TIME at LOCATION.\n  \n-%NAME%\n                      "} />
                            <button className="btn btn-primary btn-xs" style={{position: 'relative', left: '45%'}}>Add Post</button>
                            <div className="intro_post_section_content second_page">
                              <h2>Note Added!</h2>
                              <div className="post_confirm clearFix">
                                <div className="post_confirm_img" />
                                <div className="post_confirm_text"><p>To add another note, click the "New Post" button to the left of the search bar.</p></div>
                                <div className="intro_post_section_line" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="helper-text text-center mb-4">
                      This private post is only visible to <strong>original poster</strong> and <strong>Instructors</strong><br />
                      (Change this private post into an anonymous public post under Actions &gt; Change Visibility of Post)
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <footer className="container-fluid border-top">
              <div className="row">
                <div className="col col-auto text-left py-0 align-self-center"> 
                  <button className="btn btn-primary btn-xs mr-2 post_edit" data-toggle="tooltip" data-placement="bottom" title data-original-title="Improve this question to add more details or clarify something.">
                    edit
                  </button>
                  <a href>good question</a>
                  <div className="d-inline-block good_post_number">&nbsp;12</div>
                </div>
                <div className="col text-right">
                  <div className="update_text">
                    <span className="d-none d-sm-none d-md-inline">Updated</span> 
                    <span data-toggle="tooltip" data-placement="top" title data-original-title="Timestamp">
                      5 days ago by Piazza Team Longer name (anon. to classmates) and 
                    </span>
                    <a href className data-toggle="tooltip" data-placement="top" data-html="true" title data-original-title="Dylan<br />Krystine">
                      2 others
                    </a>
                  </div>
                </div>
              </div>
            </footer>
          </article>
          <article className="question search_teammates">
            <header className="container-fluid border-bottom pl-1">
              <div className="form-row">
                <div className="col-auto py-1">
                  <svg width="24px" height="24px">
                    <use xlinkHref="#Note" />
                  </svg>
                </div>
                <div className="col text-left pl-0 pt-1">
                  <b>
                    private note
                    <a data-toggle="tooltip" className="post_number_copy_link" data-placement="bottom" title data-original-title="Copy @4">@4</a>
                    <a data-toggle="tooltip" className="url_copy_link" data-placement="bottom" title style={{verticalAlign: 'middle'}} data-original-title="Copy URL">
                      <svg width="20px" height="20px">
                        <use href="#Link" />
                      </svg>
                    </a>
                  </b>
                  <a data-toggle="tooltip" className="favorite-btn" data-placement="bottom" title data-original-title="Save this post to your favorites to find it later.">
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
              <div className="form-row">
                <div className="col">
                  <h1 className="float-left pt-2">Search for Teammates!</h1>
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
                </div>
              </div>
              <div className="form-row">
                <div className="col-1  py-2" />
                <div className="col-10  py-2 px-3 alert alert-warning text-center">
                  <div className="profs_only">
                    <h1 className="text-uppercase">Instructors:</h1>
                    <div className="post_is_private" style={{display: 'none'}}>
                      <p>This post is currently private and visible only to instructors.</p>
                      <p>If you anticipate your students needing to find teammates for project work, make this post public.</p>
                      <button id="make_this_public" className="btn btn-primary btn-large" onclick="makePublic('itchky9q7x97k6');">Make Post Public</button>
                    </div>
                    <div className="post_is_public">
                      <p>This post is currently public to your students.</p>
                      <button className="btn btn-primary btn-xs">Make Post Private</button>
                    </div>
                    <div className="post_is_public" style={{marginTop: '20px'}}>
                      <p>You can mark all open requests as closed.</p>
                      <button className="btn btn-primary btn-xs">Mark all requests as closed</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="col py-2">
                  <p><i>Need to form teams? Create a post below to initiate a search and we’ll notify you via email when others respond.</i></p>
                </div>
              </div>
              <div className="row">
                <div className="col bg-grey">
                  <div className="row">
                    <div className="col pt-4">
                      <h2><b>add new post:</b></h2>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-sm-3 col-xs-auto py-0 text-right">
                      <div style={{background: 'url(/images/project_teams/single_mini.png) center no-repeat', width: '20px', height: '27px', display: 'inline-block'}} />
                    </div>
                    <div className="col py-2">
                      <div className="custom-control custom-radio">
                        <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" />
                        <label className="custom-control-label" htmlFor="customRadio1">I&apos;m <b>one student</b> looking for more people to work with.</label>
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-sm-3 col-xs-auto py-0 text-right">
                      <div style={{background: 'url(/images/project_teams/many_mini.png) center no-repeat', width: '20px', height: '27px', display: 'inline-block'}} />
                    </div>
                    <div className="col-9 py-2 ">
                      <div className="custom-control custom-radio">
                        <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" />
                        <label className="custom-control-label" htmlFor="customRadio2">I&apos;m <b>from a group</b> looking for more students.</label>
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-sm-3 col-12 py-2 text-xs-left text-sm-right text-md-right text-lg-right text-xl-right">
                      <b>*Name</b>
                    </div>
                    <div className="col">
                      <input className="form-control" />
                    </div>
                    <div className="col-sm-auto col-12 py-2 bg-grey text-xs-left text-sm-right  text-md-right text-lg-right text-xl-right">
                      <b>*Email</b>
                    </div>
                    <div className="col">
                      <input className="form-control" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-sm-3 col-12 py-2 bg-grey text-xs-left text-sm-right  text-md-right text-lg-right text-xl-right">
                      <b>Teammates</b>
                    </div>
                    <div className="col">
                      <input className="form-control" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-sm-3 col-12 py-2 text-xs-left text-sm-right  text-md-right text-lg-right text-xl-right">
                      <b>*About Us</b>
                    </div>
                    <div className="col pb-3">
                      <textarea className="form-control" placeholder="Introduce yourself. What kind of teammate(s) are you looking for?" defaultValue={""} />
                      <p>(Things you could include: your location, grad/undergrad, when you&apos;re available... help people get to know you!)</p>
                      <button className="btn btn-primary btn-xs">Submit</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col py-2 ">
                  <h3>2 open searches:</h3>
                </div>
              </div>
              <div className="row">
                <div className="col-3 py-1 bg-grey">
                  <b># students</b>
                </div>
                <div className="col py-1 bg-grey">
                  <b>about</b>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-3 col-2 py-1">
                  <div className="pt-2 mx-auto" style={{width: '45px'}}>
                    <img src="images/project_teams/single.jpg" width="45px" height="45px" />
                    {/* <img src="images/project_teams/many.jpg" width="45px" height="45px"> */}
                  </div>
                  <p className="text-center">
                    many students
                  </p>
                </div>
                <div className="col-lg-9 col-md-9 col-sm-9 col-10 py-1">
                  <div className="alert alert-warning">
                    <b>Your search is</b>
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="customRadioInline1" name="customRadioInline1" className="custom-control-input" />
                      <label className="custom-control-label" htmlFor="customRadioInline1">Ongoing!</label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="customRadioInline2" name="customRadioInline1" className="custom-control-input" />
                      <label className="custom-control-label" htmlFor="customRadioInline2">Done. Mark as closed.</label>
                    </div>
                  </div>
                  <div className="p-2">
                    <p className="search_owner_info">
                      <a href>Crystal Escolero</a>
                      (crystal@piazza.com)
                    </p>
                    <p>I&apos;m an undergrad (senior) majoring in Symbolic Systems. I&apos;ve taken CS core classes except CS110 and CS161. I&apos;ve also taken Intro to NLP (CS124). Open to any ideas! I&apos;m taking the class for 3 units. Pretty flexible schedule. Good at working with night owls.
                    </p>
                  </div>
                  <button className="btn btn-link">show/hide responses</button>
                  <div className="bg-grey w-100 p-2">
                    <p className="search_owner_info">
                      <a href>Crystal Escolero</a>
                      (crystal@piazza.com)
                    </p>
                    <p>I&apos;m an undergrad (senior) majoring in Symbolic Systems. I&apos;ve taken CS core classes except CS110 and CS161. I&apos;ve also taken Intro to NLP (CS124). Open to any ideas! I&apos;m taking the class for 3 units. Pretty flexible schedule. Good at working with night owls.
                    </p>
                    <button className="btn btn-primary btn-xs">Edit post</button>
                  </div>
                  <div className="bg-grey w-100">
                    <div className="form-row">
                      <div className="col">
                        <input className="form-control" placeholder="Write your response..." />
                      </div>
                      <div className="col-auto">
                        <button className="btn btn-primary btn-xs">respond</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <footer className="container-fluid border-top">
              <div className="row">
                <div className="col col-auto text-left py-0 align-self-center"> 
                  <button className="btn btn-primary btn-xs mr-2 post_edit" data-toggle="tooltip" data-placement="bottom" title data-original-title="Improve this question to add more details or clarify something.">
                    edit
                  </button>
                  <a href>good question</a>
                  <div className="d-inline-block good_post_number">&nbsp;12</div>
                </div>
                <div className="col text-right">
                  <div className="update_text">
                    <span className="d-none d-sm-none d-md-inline">Updated</span> 
                    <span data-toggle="tooltip" data-placement="top" title data-original-title="Timestamp">
                      5 days ago by Piazza Team Longer name (anon. to classmates) and 
                    </span>
                    <a href className data-toggle="tooltip" data-placement="top" data-html="true" title data-original-title="Dylan<br />Krystine">
                      2 others
                    </a>
                  </div>
                </div>
              </div>
            </footer>
          </article>
          <article className="question">
            <header className="container-fluid border-bottom pl-1">
              <div className="form-row">
                <div className="col-auto py-1">
                  <svg width="24px" height="24px">
                    <use xlinkHref="#Note" />
                  </svg>
                </div>
                <div className="col text-left pl-0 pt-1">
                  <b>
                    private note
                    <a data-toggle="tooltip" className="post_number_copy_link" data-placement="bottom" title data-original-title="Copy @4">@4</a>
                    <a data-toggle="tooltip" className="url_copy_link" data-placement="bottom" title style={{verticalAlign: 'middle'}} data-original-title="Copy URL">
                      <svg width="20px" height="20px">
                        <use href="#Link" />
                      </svg>
                    </a>
                  </b>
                  <a data-toggle="tooltip" className="favorite-btn" data-placement="bottom" title data-original-title="Save this post to your favorites to find it later.">
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
              <div className="row">
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
                  <div className="intro_post_section" id="welcomePostNetworkSection">
                    <h1>Piazza Network requires active opt in and helps students get jobs and internships</h1>
                    <ul>
                      <li>Joining the Network is optional for students and requires active opt in. Students can leave the Network any time from their Account Settings page.</li>
                      <li>No class discussion content is ever visible. Only course metadata and student-provided profile information is shared with employers. Learn more at <a href="/piazzanetwork" target="_blank">piazza.com/piazzanetwork</a>.</li>
                      <li>Learn how Piazza complies with FERPA and protects student privacy at <a href="/legal/ferpa" target="_blank">piazza.com/legal/ferpa</a>.</li>
                    </ul>
                    <h1>We built Piazza Network so Q&amp;A could stay free for professors and students</h1>
                    <ul>
                      <li>We built the Piazza Network so professors wouldn’t have to pay (or ask their students to pay); employers sign up to interact with opted-in students on the Piazza Network, allowing us to keep Piazza Q&amp;A free for students and professors.</li>
                      <li>To see a full list of what employers do and do not see, visit our FAQ at <a href="/piazzanetworkFAQ" target="_blank">piazza.com/piazzanetworkFAQ</a>.</li>
                    </ul>
                    <div className="intro_post_section_content first_page" style={{padding: '0px'}}>
                      <h1>Help your students find jobs and internships - Introduce Piazza Network to them</h1>
                      <p>Publish this note (scroll to see full note) to students to let them know about the Piazza Network and how it works.</p>
                      <div className="textareaWrapper">
                        <textarea id="first_post" style={{width: '95%', height: '175px', overflow: '-moz-scrollbars-vertical', overflowY: 'scroll'}} defaultValue={"Dear students,\n\t\t\nPlease find below a note from the Piazza Team regarding Piazza Network, their additional offering that connects you with job and internship opportunities. It is optional to join. Visit piazza.com/piazzanetwork to see all details.\n\t\t--\nYou’re taking classes on Piazza. Those classes tell a story about you. We believe we can help tell your story to employers. Here’s how it works:\n\t\t\n- Class posts are never shared with employers\n- Participation or lack thereof in the Piazza Network does not have any impact on your course grade\n- Instructors do not see your interactions with companies in the Piazza Network\n- You can control what employers see: piazza.com/myprofile\n- You’ll receive invitations to career events happening on campus\n- You’ll be contacted for relevant job / internship opportunities\n\t\t\nThanks,\nThe Piazza Team\n\t\t--\nNeed the nitty gritty details? Visit piazza.com/piazzanetwork\nQuestions? Contact team@piazza.com\n\t\t\t\t\t\t\t\t"} />
                      </div>
                      <span className="helper-text"><em>We drafted this note in conjunction with professors at leading universities</em></span>
                      <div className="text-center py-3">
                        <div className="btn btn-secondary">Add Post</div>
                      </div>
                      <p className="helper-text text-center mb-4">
                        This private post is only visible to <strong>original poster</strong> and <strong>Instructors</strong><br />
                        (Change this private post into an anonymous public post under Actions &gt; Change Visibility of Post)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <footer className="container-fluid border-top">
              <div className="form-row py-2">
                <div className="col-md-12 col-lg-8 text-center text-lg-left py-2">
                  Still have more questions about Piazza Network? Send us an email at  
                  <a href>
                    questions@piazza.com
                  </a>
                </div>
                <div className="col-md-12 col-lg-4 text-center text-lg-right">
                  <div className="update_text py-2">
                    <span className="d-none d-sm-none d-md-inline">Updated</span> 
                    <span data-toggle="tooltip" data-placement="top" title data-original-title="Timestamp">
                      5 days ago by Piazza Team and 
                    </span>
                    <a href className data-toggle="tooltip" data-placement="top" data-html="true" title data-original-title="Dylan<br />Krystine">
                      2 others
                    </a>
                  </div>
                </div>
              </div>
            </footer>
          </article>
          <article className="question">
            <header className="container-fluid border-bottom pl-1">
              <div className="form-row">
                <div className="col-auto py-1">
                  <svg width="24px" height="24px">
                    <use xlinkHref="#Note" />
                  </svg>
                </div>
                <div className="col text-left pl-0 pt-1">
                  <b>
                    private note
                    <a data-toggle="tooltip" className="post_number_copy_link" data-placement="bottom" title data-original-title="Copy @4">@4</a>
                    <a data-toggle="tooltip" className="url_copy_link" data-placement="bottom" title style={{verticalAlign: 'middle'}} data-original-title="Copy URL">
                      <svg width="20px" height="20px">
                        <use href="#Link" />
                      </svg>
                    </a>
                  </b>
                  <a data-toggle="tooltip" className="favorite-btn" data-placement="bottom" title data-original-title="Save this post to your favorites to find it later.">
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
              <div className="row">
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
                  <div className="intro_post_section" id="welcomePostNetworkSection">
                    <h1>Get familiar with Piazza</h1>
                    <h1>Piazza Features</h1>
                    <div className="ml-4">
                      <p><a>Click</a> to go to our Features List, which details all the different ways you can use Piazza.</p>
                      <hr />
                    </div>
                    <h1>Integration with your Course Management Platform</h1>
                    <div className="ml-4">
                      <p>We view Piazza as a stronger alternative to forums that come with course management solutions. We recommend including links to your class’s discussion page on Piazza so students know how to access Piazza.</p>
                      <p>
                        <b>Include this link on your course page:</b><br />
                        <a>https://piazza.com/piazza.com/spring2019/pza150/home</a>
                      </p>
                      <hr />
                    </div>	
                    <h1>FERPA, Privacy, and Control</h1>
                    <div className="ml-4">
                      <p className="mb-0">Piazza is <a>FERPA-compliant</a>.</p>
                      <ul><li>We protect the privacy of student education records.</li></ul>
                      <p className="mb-0">Piazza keeps your information private.</p>
                      <ul>
                        <li>We do not sell or rent personally identifiable information.</li>
                        <li>You retain ownership of all the content you post.</li>
                        <li>Your class Q&amp;A is not searchable by search engines.</li>
                      </ul>
                      <p className="mb-0">Piazza puts instructors in control of their classes.</p>
                      <p className="mb-0">You have complete editing ability over class content.</p>
                      <ul className="mb-2">
                        <li>You can manage course details and who is enrolled in your class.</li>
                        <li>You can monitor individual instructor and student participation.</li>
                        <li>You decide whether students can post anonymously to instructors.</li>
                      </ul>
                    </div>
                    <p className="helper-text text-center mb-4">
                      This private post is only visible to <strong>original poster</strong> and <strong>Instructors</strong><br />
                      (Change this private post into an anonymous public post under Actions &gt; Change Visibility of Post)
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <footer className="container-fluid border-top">
              <div className="row">
                <div className="col col-auto text-left py-0 align-self-center"> 
                  <button className="btn btn-primary btn-xs mr-2 post_edit" data-toggle="tooltip" data-placement="bottom" title data-original-title="Improve this question to add more details or clarify something.">
                    edit
                  </button>
                  <a href>good question</a>
                  <div className="d-inline-block good_post_number">&nbsp;12</div>
                </div>
                <div className="col text-right">
                  <div className="update_text">
                    <span className="d-none d-sm-none d-md-inline">Updated</span> 
                    <span data-toggle="tooltip" data-placement="top" title data-original-title="Timestamp">
                      5 days ago by Piazza Team Longer name (anon. to classmates) and 
                    </span>
                    <a href className data-toggle="tooltip" data-placement="top" data-html="true" title data-original-title="Dylan<br />Krystine">
                      2 others
                    </a>
                  </div>
                </div>
              </div>
            </footer>
          </article>
        </div>
      </div>
  
)

export default SpecialContent;