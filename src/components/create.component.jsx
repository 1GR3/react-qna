import React from 'react';

export const Create = () => (

<div className="col questions-and-answers create" id>
          <div className="form-row">
            <div className="col-auto expand_feed" style={{marginBottom: '-30px', marginLeft: '5px', zIndex: 50}}>
              <button className="btn btn-secondary btn-xs px-1" id="expand_feed" data-toggle="tooltip" data-placement="right" title="Expand feed">
                <span className="fa fa-chevron-right" style={{transform: 'rotate(90deg) translateX(1px)'}} />
              </button>
            </div>
          </div>
          <div className id="create-content">
            <div className="row py-2">
              <div className="col ">
                <div className="alert alert-danger" style={{fontWeight: 300}}>
                  You&apos;re currently unable to post to this class. You have <a href>2 unread items</a> in your reading list. One of them is required to read before posting.
                </div>
              </div>
            </div>
            <div className="row py-2">
              <div className="col ">
                <div className="alert alert-warning" style={{fontWeight: 300}}>
                  Please note before posting: you have <a href>1 unread item</a> in your reading list. Your professor recommends you read it before posting.
                </div>
              </div>
            </div>
            <div className="row bg-white pt-2 pb-2">
              <div className="col-sm-3 col-md-2 col-lg-3 col-12 text-xs-left text-sm-right  text-md-right text-lg-right text-xl-right left-column">
                <strong>Post Type</strong>
              </div>
              <div className="col-sm-9 col-md-10 col-lg-9 col-xs-9">
                <div className="custom-control custom-radio custom-control-inline post_type_box active">
                  <input type="radio" id="customRadioInline1" name="customRadioInline1" className="custom-control-input" defaultChecked="checked" />
                  <label className="custom-control-label" htmlFor="customRadioInline1"><b>Question</b><p className="mt-1 mb-0"><i>if you need an answer</i></p></label>
                </div>
                <div className="custom-control custom-radio custom-control-inline post_type_box">
                  <input type="radio" id="customRadioInline2" name="customRadioInline1" className="custom-control-input" />
                  <label className="custom-control-label" htmlFor="customRadioInline2"><b>Note</b><p className="mt-1 mb-0"><i>if you <b>don&apos;t</b> need an answer</i></p></label>
                </div>
                <div className="custom-control custom-radio custom-control-inline post_type_box">
                  <input type="radio" id="customRadioInline3" name="customRadioInline1" className="custom-control-input" />
                  <label className="custom-control-label" htmlFor="customRadioInline3"><b>Poll/In-Class Response</b><p className="mt-1 mb-0"><i>if you need a vote</i></p></label>
                </div>
              </div>
            </div>
            <div className="row py-2">
              <div className="col-sm-3 col-md-2 col-lg-3 col-12 text-xs-left text-sm-right  text-md-right text-lg-right text-xl-right left-column">
                <strong>Post to</strong>
              </div>
              <div className="col-sm-9 col-md-10 col-lg-9 col-12">
                <div className="custom-control custom-radio custom-control-inline">
                  <input type="radio" id="2customRadioInline1" name="customRadioInline2" className="custom-control-input" />
                  <label className="custom-control-label" htmlFor="2customRadioInline1">Entire Class</label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input type="radio" id="2customRadioInline2" name="customRadioInline2" className="custom-control-input" />
                  <label className="custom-control-label" htmlFor="2customRadioInline2">Class Group</label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input type="radio" id="2customRadioInline3" name="customRadioInline2" className="custom-control-input" />
                  <label className="custom-control-label" htmlFor="2customRadioInline3">Individual Student(s) / Instructor(s)</label>
                </div>
              </div>
            </div>
            <div className="row pb-2">
              <div className="col-sm-3 col-md-2 col-lg-3 col-12 text-xs-left text-sm-right  text-md-right text-lg-right text-xl-right">
              </div>
              <div className="col-sm-9 col-md-10 col-lg-9 col-12">
                <input className="form-control" placeholder="Enter one or more names..." />
                <span className="helper-text">Type “Instructors” to include all instructors.</span>
              </div>
            </div>
            <div className="row pb-2">
              <div className="col-sm-3 col-md-2 col-lg-3 text-xs-left text-sm-right  text-md-right text-lg-right text-xl-right">
              </div>
              <div className="col-sm-9 col-md-10 col-lg-9">
                <div className="styled-select d-inline-block" style={{width: '120px'}}>
                  <select className="custom-select">
                    <option value={0} selected="selected">All my groups</option>
                    <option value={1}>the rest</option>
                    <option value={2}>is dynamic</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row pt-2">
              <div className="col-sm-3 col-md-2 col-lg-3 col-12 text-xs-left text-sm-right  text-md-right text-lg-right text-xl-right left-column">
                <strong>Select Folder(s)</strong>
              </div>
              <div className="col-sm-9 col-md-10 col-lg-9 col-12">
                <ul id="create-folder-tags">
                  <li><a data-pats="button" className="folder-tag " href="#">hw1</a></li>
                  <li><a data-pats="button" className="folder-tag " href="#">hw2</a></li>
                  <li><a data-pats="button" className="folder-tag " href="#">hw3</a></li>
                  <li><a data-pats="button" className="folder-tag  selected" href="#">hw4</a></li>
                  <li><a data-pats="button" className="folder-tag " href="#">hw5</a></li>
                  <li><a data-pats="button" className="folder-tag " href="#">hw6</a></li>
                  <li><a data-pats="button" className="folder-tag  selected" href="#">hw7</a></li>
                  <li><a data-pats="button" className="folder-tag " href="#">hw8</a></li>
                  <li><a data-pats="button" className="folder-tag " href="#">hw9</a></li>
                  <li><a data-pats="button" className="folder-tag " href="#">hw10</a></li>
                  <li><a data-pats="button" className="folder-tag " href="#">project</a></li>
                  <li><a data-pats="button" className="folder-tag " href="#">exam</a></li>
                  <li><a data-pats="button" className="folder-tag " href="#">logistics</a></li>
                  <li><a data-pats="button" className="folder-tag " href="#">other</a></li>
                  <li><a data-pats="button" className="folder-tag  selected" href="#">fun</a></li>
                  <li><a data-pats="button" className="folder-tag " href="#">lecture_2</a></li>
                  <li><a data-pats="button" className="folder-tag  selected" href="#">memes</a></li>
                </ul>
                <p><a href>Show more folders</a> | <a href>Create new folder</a></p>
                <p><b className="text-red">Please select at least one folder for your post.</b></p>
              </div>
            </div>
            <div className="row pb-2">
              <div className="col-sm-3 col-md-2 col-lg-3 col-12" />
              <div className="col-auto pr-2">
                <div className="input-group" style={{maxWidth: '280px'}}>
                  <input type="text" className="form-control" placeholder="Add a custom folder title here" aria-label="Recipient's username" aria-describedby="button-add" style={{width: '232px'}} />
                  <div className="input-group-append">
                    <button className="btn btn-outline-secondary btn-xs" type="button" id="button-add">Add</button>
                  </div>
                </div>
                <p className="mb-0">New folder created!</p>
              </div>
              <div className="col pl-0" style={{paddingTop: '7px'}}>
                <a href>cancel</a>
              </div>
            </div>
            <div className="row py-2">
              <div className="col-sm-3 col-md-2 col-lg-3 col-12 text-xs-left text-sm-right  text-md-right text-lg-right text-xl-right left-column">
                <strong>Summary</strong><br />
                (100 characters or less)
              </div>
              <div className="col-sm-9 col-md-10 col-lg-9 col-12 position-relative mb-0">
                <input className="form-control" placeholder="Enter a one line summary..." />
                <b className="text-red">Please enter a brief summary of your post.</b>
                <div className="autocomplete-list" style={{display: 'none'}}>
                  <ul>
                    <li>
                      <div className="avatar">
                        <img src="images/qanda/anonymous.svg" />
                      </div>
                      <span>Lorem Ipsum</span>
                    </li>
                    <li>
                      <div className="avatar">
                        <img src="images/qanda/anonymous.svg" />
                      </div>
                      <span>Dolor Sit</span>
                    </li>
                    <li>
                      <div className="avatar">
                        <img src="images/qanda/anonymous.svg" />
                      </div>
                      <span>Amet</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row py-2">
              <div className="col-sm-3 col-md-2 col-lg-3 col-12 text-xs-left text-sm-right  text-md-right text-lg-right text-xl-right left-column">
                <strong>Details</strong><br />
              </div>
              <div className="col-sm-9 col-md-10 col-lg-9 col-12">
                <div className="custom-control custom-radio custom-control-inline">
                  <input type="radio" id="editorModeRich" name="editorMode" className="custom-control-input" />
                  <label className="custom-control-label" htmlFor="editorModeRich">Rich text editor</label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input type="radio" id="editorModePlain" name="editorMode" className="custom-control-input" />
                  <label className="custom-control-label" htmlFor="editorModePlain">Plain text editor</label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input type="radio" id="editorModeMarkdown" name="editorMode" className="custom-control-input" />
                  <label className="custom-control-label" htmlFor="editorModeMarkdown">Markdown editor</label>
                </div>
                <textarea className="form-control" rows={6} style={{resize: 'vertical', maxWidth: '100%'}} defaultValue={""} />
                <span className="helper-text">
                  Use &lt;md&gt;markdown block&lt;/md&gt; for markdown. Use $$latex formula$$ for latex.
                </span>
              </div>
            </div>
            <div className="row py-2">
              <div className="col-sm-3 col-md-2 col-lg-3 col-12 text-xs-left text-sm-right  text-md-right text-lg-right text-xl-right left-column">
                <strong>Poll Choices</strong>
              </div>
              <div className="col-sm-9 col-md-10 col-lg-9 col-12">
                <div className="input-group" style={{maxWidth: '280px'}}>
                  <input type="text" className="form-control" placeholder="Enter poll choices..." aria-label="Recipient's username" aria-describedby="button-add" />
                  <div className="input-group-append">
                    <button className="btn btn-outline-secondary btn-xs" type="button" id="button-add">Add</button>
                  </div>
                </div>
                <ul id="poll_options_preview" className="poll_options">
                  <li><span className="poll_option">one</span><a className="remove" /></li>
                  <li><span className="poll_option">two</span><a className="remove" /></li>
                  <li><span className="poll_option">three</span><a className="remove" /></li>
                </ul>
              </div>
            </div>
            <div className="row py-2">
              <div className="col-sm-3 col-md-2 col-lg-3 col-12 text-xs-left text-sm-right  text-md-right text-lg-right text-xl-right left-column">
                <strong>Poll Explanation</strong><br />
                (correct answer, etc.)
              </div>
              <div className="col-sm-9 col-md-10 col-lg-9 col-12">
                <input className="form-control" placeholder="Enter an explanation..." style={{maxWidth: '280px'}} />
                <span className="helper-text">This is optional, and it will be displayed when the poll closes.</span>
              </div>
            </div>
            <div className="row py-2">
              <div className="col-sm-3 col-md-2 col-lg-3 col-12 text-xs-left text-sm-right  text-md-right text-lg-right text-xl-right left-column">
                <strong>Poll Selection Type</strong>
              </div>
              <div className="col-sm-9 col-md-10 col-lg-9 col-12">
                <div className="custom-control custom-radio">
                  <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" />
                  <label className="custom-control-label" htmlFor="customRadio1">One choice allowed</label>
                </div>
                <div className="custom-control custom-radio">
                  <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" />
                  <label className="custom-control-label" htmlFor="customRadio2">Multiple choices allowed</label>
                </div>
              </div>
            </div>
            <div className="row py-2">
              <div className="col-sm-3 col-md-2 col-lg-3 col-12 text-xs-left text-sm-right  text-md-right text-lg-right text-xl-right left-column">
                <strong>Poll Close Date</strong><br />
                (you will be emailed a report after the poll closes)
              </div>
              <div className="col-sm-9 col-md-10 col-lg-9 col-12">
                <div className="custom-control custom-radio d-inline">
                  <input type="radio" id="2customRadio1" name="customRadio1" className="custom-control-input" />
                  <label className="custom-control-label" htmlFor="2customRadio1">After</label>
                </div>
                <div className="styled-select d-inline-block" style={{width: '120px'}}>
                  <select className="custom-select">
                    <option value={0} selected="selected">2 hours</option>
                    <option value={1}>6 hours</option>
                    <option value={2}>1 day</option>
                    <option value={3}>2 days</option>
                    <option value={4}>7 days</option>
                  </select>
                </div>
                <span className="helper-text">You can close the poll at any time (useful for in-class polls)</span>
                <div className="custom-control custom-radio">
                  <input type="radio" id="2customRadio2" name="customRadio1" className="custom-control-input" />
                  <label className="custom-control-label" htmlFor="2customRadio2">Always open</label>
                </div>
              </div>
            </div>
            <div className="row py-2">
              <div className="col-sm-3 col-md-2 col-lg-3 col-12 text-xs-left text-sm-right  text-md-right text-lg-right text-xl-right left-column">
                <strong>Show Results to Students</strong>
              </div>
              <div className="col-sm-9 col-md-10 col-lg-9 col-12">
                <div className="custom-control custom-radio">
                  <input type="radio" id="3customRadio1" name="customRadio2" className="custom-control-input" />
                  <label className="custom-control-label" htmlFor="3customRadio1">Before a student votes</label>
                </div>
                <div className="custom-control custom-radio">
                  <input type="radio" id="3customRadio2" name="customRadio2" className="custom-control-input" />
                  <label className="custom-control-label" htmlFor="3customRadio2">After a student votes</label>
                </div>
                <div className="custom-control custom-radio">
                  <input type="radio" id="3customRadio3" name="customRadio2" className="custom-control-input" />
                  <label className="custom-control-label" htmlFor="3customRadio3">After poll closes</label>
                </div>
                <div className="custom-control custom-radio">
                  <input type="radio" id="3customRadio4" name="customRadio2" className="custom-control-input" />
                  <label className="custom-control-label" htmlFor="3customRadio4">Never show results to students 
                    <span className="helper-text">(instructors will always have the option to view results at any time)</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="row py-2">
              <div className="col-sm-3 col-md-2 col-lg-3 col-12 text-xs-left text-sm-right  text-md-right text-lg-right text-xl-right left-column">
                <strong>Revotes allowed?</strong><br />
                Voters will be able to revote as many times as they want
              </div>
              <div className="col-sm-9 col-md-10 col-lg-9 col-12">
                <div className="custom-control custom-radio">
                  <input type="radio" id="4customRadio1" name="customRadio3" className="custom-control-input" />
                  <label className="custom-control-label" htmlFor="4customRadio1">Yes</label>
                </div>
                <div className="custom-control custom-radio">
                  <input type="radio" id="4customRadio2" name="customRadio3" className="custom-control-input" />
                  <label className="custom-control-label" htmlFor="4customRadio2">No</label>
                </div>
              </div>
            </div>
            <div className="row py-2">
              <div className="col-sm-3 col-md-2 col-lg-3 col-12 text-xs-left text-sm-right  text-md-right text-lg-right text-xl-right left-column">
                <strong>Poll Anonymity</strong>
              </div>
              <div className="col-sm-9 col-md-10 col-lg-9 col-12">
                <div className="custom-control custom-radio">
                  <input type="radio" id="5customRadio1" name="customRadio4" className="custom-control-input" />
                  <label className="custom-control-label" htmlFor="5customRadio1">Show names to everyone</label>
                </div>
                <div className="custom-control custom-radio">
                  <input type="radio" id="5customRadio2" name="customRadio4" className="custom-control-input" />
                  <label className="custom-control-label" htmlFor="5customRadio2">Show names to instructors but not students</label>
                </div>
                <div className="custom-control custom-radio">
                  <input type="radio" id="5customRadio3" name="customRadio4" className="custom-control-input" />
                  <label className="custom-control-label" htmlFor="5customRadio3">Don&apos;t show names to anyone
                    <span className="helper-text">(the only option for large classes)</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="row py-2">
              <div className="col-sm-3 col-md-2 col-lg-3 col-12 text-xs-left text-sm-right  text-md-right text-lg-right text-xl-right left-column">
                <strong>Visible to class</strong>
              </div>
              <div className="col-sm-9 col-md-10 col-lg-9 col-12">
                <div className="custom-control custom-radio">
                  <input type="radio" id="6customRadio1" name="customRadio5" className="custom-control-input" />
                  <label className="custom-control-label" htmlFor="6customRadio1">Visible now</label>
                </div>
                <div className="custom-control custom-radio">
                  <input type="radio" id="6customRadio2" name="customRadio5" className="custom-control-input" />
                  <label className="custom-control-label" htmlFor="6customRadio2">Visible now to individuals</label>
                </div>
                <div className="custom-control custom-radio">
                  <input type="radio" id="6customRadio3" name="customRadio5" className="custom-control-input" />
                  <label className="custom-control-label" htmlFor="6customRadio3">Make visible later
                    <span className="helper-text">You can publish it later at any time to make it visible to the class</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="row py-2">
              <div className="col-sm-3 col-md-2 col-lg-3 col-12 text-xs-left text-sm-right  text-md-right text-lg-right text-xl-right left-column">
                <strong>Posting Options</strong>
              </div>
              <div className="col-sm-9 col-md-10 col-lg-9 col-12">
                <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="customCheck1" />
                  <label className="custom-control-label" htmlFor="customCheck1">Make this an announcement
                    <span className="helper-text">(note appears on the course page)</span>
                  </label>
                </div>
                <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="customCheck2" />
                  <label className="custom-control-label" htmlFor="customCheck2">Send email notifications immediately
                    <span className="helper-text">(bypassing students&apos; email preferences, if necessary)</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="row py-2">
              <div className="col-sm-3 col-md-2 col-lg-3 col-12 text-xs-left text-sm-right  text-md-right text-lg-right text-xl-right">
              </div>
              <div className="col-sm-9 col-md-10 col-lg-9 col-12">
                <a href>Open advanced options</a> <span className="helper-text">(add post to reading list)</span><br />
                <p>Advanced options <span className="helper-text">(add post to reading list)</span></p>
                <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="readingListCheck" />
                  <label className="custom-control-label" htmlFor="readingListCheck">Add this post to students’ reading lists
                    <span className="helper-text">(appears in student’s “my reading list” bin until they’ve read it; see details in Manage Class)</span>
                  </label>
                </div>
                <div className="mt-2 ml-3">
                  Remove from reading list:
                  <div className="custom-control custom-radio custom-control-inline">
                    <input type="radio" id="readingListRemoveM" name="readingListRemoveM" className="custom-control-input" />
                    <label className="custom-control-label ml-3" htmlFor="readingListRemoveM">Manually</label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input type="radio" id="readingListRemoveS" name="readingListRemoveS" className="custom-control-input" />
                    <label className="custom-control-label ml-1" htmlFor="readingListRemoveS">
                      Schedule
                    </label>
                  </div>
                  <div className="d-inline-block">
                    <input id="datepicker" className="form-control" width={160} placeholder="--/--/--" />
                  </div>
                  <div className="d-inline-block">
                    <input id="datepicker" className="form-control" width={160} placeholder="--:--" />
                  </div>
                  <div className="d-inline-block">
                    PST
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="readingRequirementCheck" />
                    <label className="custom-control-label" htmlFor="readingRequirementCheck">Require students to have read this post before they can create a new post
                      <span className="helper-text">(if selected, students are blocked from creating a new post until they’ve read this)</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="row pt-4 pb-5">
              <div className="col-sm-3 col-md-2 col-lg-3 col-12 d-xs-none d-sm-block text-xs-left text-sm-right  text-md-right text-lg-right text-xl-right">
              </div>
              <div className="col-sm-9 col-md-10 col-lg-9 col-12">
                <div class="row">
                  <div class="col-xl-auto col-md-12">
                    <button id="postId" type="button" class="text-nowrap text-truncate w-100 btn btn-primary">
                      Post My Note to 101loooooooooongnumberthatshouldnotfitintothisshortamountofcharactersthatare!
                    </button>
                  </div>
                  <div class="col-xl-auto col-md-6">
                    <button id="postId" type="button" class="btn btn-light btn-block">Save Draft</button>
                  </div>
                  <div class="col-xl-auto col-md-6">
                    <button id="postId" type="button" class="btn btn-light btn-block">Cancel</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

);

export default Create;