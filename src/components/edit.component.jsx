import React from 'react';

export const Edit = () => (

  <div className="col questions-and-answers">
    <div className="form-row">
      <div className="col-auto expand_feed" style={{marginBottom: '-30px', marginLeft: '5px', zIndex: 50}}>
        <button className="btn btn-secondary btn-xs px-1" id="expand_feed" data-toggle="tooltip" data-placement="right" title="Expand feed">
          <span className="fa fa-chevron-right" style={{transform: 'rotate(90deg) translateX(1px)'}} />
        </button>
      </div>
    </div>
    <div className id="qanda-content">
      <article className="question edit">
        <header className="container-fluid border-bottom pl-1">
          <div className="form-row">
            <div className="col-auto text-left py-1">
              <svg width="24px" height="24px">
                <use xlinkHref="#Students" />
              </svg>
            </div>
            <div className="col text-left py-1">
              <b>The students&apos; answer</b>
              <span className="helper-text">where students collectively construct a single answer</span>
            </div>
            <div className="col-auto text-right pt-1">
              <a href>stop following</a>
              <span className="view-count"><b>1</b> view</span>
            </div>
          </div>
        </header>
        <div className="content container-fluid">
          <div className="form-row">
            <div className="col mt-3">
              <div className="alert alert-danger py-1 px-2" role="alert">
                ! As an instructor, you&apos;re editing the Students Response in super-user mode.
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="col-auto">
              <h3>Summary</h3>
            </div>
          </div>
          <div className="form-row">
            <div className="col">
              <input className="form-control" type="text" placeholder="Post Summary" />
              <b className="text-red">Please enter a brief summary of your post</b>
            </div>
          </div>
          <div className="form-row">
            <div className="col-auto">
              <h3>Details</h3>
            </div>
            <div className="col text-right pt-2">
              report any bugs with our editor to bugs@piazza.com ·
              <a className>use rich text editor</a>
            </div>
          </div>
          <div className="form-row">
            <div className="col">
              <textarea rows={6} style={{resize: 'vertical', maxWidth: '100%'}} defaultValue={"text\n\n[o] 1\n[o] 2\n[o] 3\n            "} />
              <br />
              <span className="helper-text">Use &lt;md&gt;markdown block&lt;/md&gt; for markdown. Use $$latex formula$$ for latex</span>
            </div>
          </div>
          <div className="edit_details">
            <div className="form-row">
              <div className="col-12 col-sm-auto col-md-auto col-lg-auto text-left">
                <h3>Folders:</h3>
              </div>
              <div className="col">
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
                <p><b className="text-red">Please select at least one folder for your post.</b></p>
              </div>
            </div>
            <div className="form-row">
              <div className="col-12 col-sm-auto col-md-auto col-lg-auto text-left">
                <h3 className="mb-1 mt-0">Save as:</h3>
              </div>
              <div className="col mb-1">
                <div className="form-row">
                  <div className="col-xs-12 col-sm-auto">
                    <div className="custom-control custom-radio custom-control-inline mr-1">
                      <input type="radio" id="saveRadio1" name="saveRadio" className="custom-control-input" />
                      <label className="custom-control-label" htmlFor="saveRadio1"><b>Question</b> <span className="subtext">(this needs an answer)</span></label>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-auto">
                    <div className="custom-control custom-radio custom-control-inline mr-1">
                      <input type="radio" id="saveRadio2" name="saveRadio" className="custom-control-input" />
                      <label className="custom-control-label" htmlFor="saveRadio2"><b>Note</b> <span className="subtext">(this doesn&apos;t need an answer) </span> </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="col-12 col-sm-auto col-md-auto col-lg-auto text-left">
                <h3 className="mb-1 mt-0">Visible to:</h3>
              </div>
              <div className="col mb-1">
                <div className="form-row">
                  <div className="col-xs-12 col-sm-auto">
                    <div className="custom-control custom-radio custom-control-inline mr-1">
                      <input type="radio" id="vis1" name="visibleTo" className="custom-control-input" />
                      <label className="custom-control-label" htmlFor="vis1"><b>Entire class</b></label>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-auto">
                    <div className="custom-control custom-radio custom-control-inline mr-1">
                      <input type="radio" id="vis2" name="visibleTo" className="custom-control-input" />
                      <label className="custom-control-label" htmlFor="vis2"><b>Group</b></label>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-auto">
                    <div className="custom-control custom-radio custom-control-inline mr-1">
                      <input type="radio" id="vis3" name="visibleTo" className="custom-control-input" />
                      <label className="custom-control-label" htmlFor="vis3"><b>Private</b> 
                        <span className="subtext"> to Individual Student(s) / Instructor(s) </span></label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="col-auto px-0">
                <div className="d-none d-sm-block" style={{width: '100px'}} /> 
              </div>
              <div className="col">
                <select>
                  <option disabled selected="selected">All my groups</option>
                  <option value={0}>DR1</option>
                  <option value={1}>DR2</option>
                  <option value={2}>DR3</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="col-auto px-0">
                <div className="d-none d-sm-block" style={{width: '100px'}} /> 
              </div>
              <div className="col">
                <input className="form-control" placeholder="Enter one or more names..." style={{maxWidth: '400px'}} />
                <span className="helper-text">Type “Instructors” to include all instructors.</span>
                <ul className="instructors-list mb-0">
                  <li>instructors <a>×</a></li>
                  <li>Dylan Student <a>×</a></li>
                </ul>
              </div>
            </div>
            <div className="form-row">
              <div className="col-12 col-sm-auto col-md-auto col-lg-auto text-left">
                <h3 className="mt-1">Reading list:</h3>
              </div>
              <div className="col">
                <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="addReadingList" />
                  <label className="custom-control-label" htmlFor="addReadingList">Add this post to students’ reading lists</label>
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="col-auto px-0">
                <div className="d-none d-sm-block" style={{width: '100px'}} /> 
              </div>
              <div className="col">
                <div className="custom-control">
                  <div className>
                    Remove from reading list:
                    <div className="custom-control custom-radio custom-control-inline mr-1">
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
                      <div role="wrapper" className="input-group" style={{width: '160px'}}>
                        <input id="datepicker" className="form-control" width={160} placeholder="--/--/--" />
                      </div>
                    </div>
                    <div className="d-inline-block">
                      <input id="datepicker" className="form-control" width={160} placeholder="--:--" />
                    </div>
                    <div className="d-inline-block">
                      PST
                    </div>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="readingRequirementCheck" />
                      <label className="custom-control-label" htmlFor="readingRequirementCheck">
                        Require students to have read this post before they can create a new post
                        {/*  							<span class="helper-text">(if selected, students are blocked from creating a new post until they’ve read this)</span> */}
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="col pt-3">
                <p className="text-red text-center"><b>~ 1 other user is editing this right now. ~</b></p>
              </div>        
            </div>
          </div>
        </div>
        <footer className="container-fluid border-top mt-3">
          <div className="row">
            <div className="col col-auto text-left py-0">
              <button className="btn btn-primary btn-xs mr-2">submit</button>
              ·
              <a href>
                preview
              </a>
            </div>
            <div className="col text-right">
              <div className="pt-2">
                <a href>
                  cancel
                </a>
              </div>
            </div>
          </div>
          <div className="row bg-white subfooter border-top">
            <div className="container-fluid">
              <div className="form-row py-1">
                <div className="col">
                  <b>Post that may be similar:</b><span className="similar-post-links"><a>@123;</a> <a>@456;</a> <a>@789;</a></span><br />
                  <span className="helper-text d-none d-sm-inline">Have feedback on our similar post suggestions? Email us at <a>productfeedback@piazza.com</a></span>
                  <span className="d-inline d-sm-none">
                    <a>Leave feedback</a>
                  </span>
                </div>
                <div className="col-auto text-right">
                  <button className="btn btn-primary btn-xs" id="similarContentButton">Hide</button>
                </div>

              </div>
              <div className="form-row pt-2 border-top" id="similarContent">
                <div className="col scrollable" style={{height: '120px'}}>
                  <ul className="similar-posts">
                    <li>
                      <span className="number" id="suggested_113" data-original-title title>@113 
                        <a href="/class/itchkxzaetj7jt?cid=113" target="_blank">Perceptual Overlap and Generation--Week 7 Lecture 1 Slides 41-46</a>
                        <p>
                          Anonymous: <b>Perceptual</b> <b>Overlap</b> and <b>Generation</b>... --<b>Week</b> <b>7</b> <b>Lecture</b> <b>1</b> <b>Slides</b> <b>41</b>-<b>46</b>
                          It <b>appears</b>... that the <b>results</b> of this <b>study</b> <b>suggest</b> that... <b>priming</b> and <b>declarative</b> <b>memory</b> <b>can</b> be <b>dissociated</b>... in <b>healthy</b> <b>subjects</b>, <b>given</b> that the <b>graphs</b>... <b>declarative</b> <b>memory</b> are <b>different</b> <b>memory</b> <b>forms</b>... , or is there <b>something</b> else that I&amp;#<b>39</b>;<b>m</b>...
                        </p>
                      </span>
                    </li>
                    <li>
                      <span onclick="P.answer.copyAt(32)" className="number" id="suggested_32" data-original-title title>@32 </span>
                      <a href="/class/itchkxzaetj7jt?cid=32" target="_blank">Office hours preferences poll</a>
                      <p>
                        <br />available to come to office hours this <b>week</b>... [*] Wednesday 3/29 6-<b>7</b>pm
                        [*] Wednesday 3... /29 <b>7</b>-8pm
                        [*] Thursday 3/30 5-<b>7</b>pm
                        [*] Thursday... 3/30 <b>7</b>-9pm
                        #<b>pin</b>...
                      </p>
                    </li>
                    <li>
                      <span onclick="P.answer.copyAt(21)" className="number" id="suggested_21" data-original-title title>@21 </span>
                      <a href="/class/itchkxzaetj7jt?cid=21" target="_blank">Blackboard Quiz 1</a>
                      Student 36: Blackboard Quiz <b>1</b>
                      Hi I have a... exactly the same notation used in chapter <b>1</b>... I also inserted <b>slide</b> 14 into the notes from... I <b>can</b>&amp;#<b>39</b>;t guarantee that websites will... ;s notation, but I&amp;#<b>39</b>;<b>m</b> now curious as to... ;t expecting a new <b>slide</b>/concept to have... I have looked at the <b>slide</b> and now understand...
                    </li>
                    <li>
                      <span onclick="P.answer.copyAt(13)" className="number" id="suggested_13" data-original-title title>@13 </span>
                      <a href="/class/itchkxzaetj7jt?cid=13" target="_blank">4a</a><br />
                      <p>
                        u2-h<b>1</b>)?&nbsp;
                        &nbsp;... volume energy balance but after that I&amp;#<b>39</b>... ;<b>m</b> lost&nbsp;
                        $$<b>m</b>^2$$
                        Rachel Lam, Ana Fuentes... : 
                        I am not completely sure at what <b>point</b>... From this <b>point</b> we will do what I call &quot;... amount of mass in tank at state 2, which is <b>given</b>... step, I have a much better idea of what&amp;#<b>39</b>...
                      </p>
                    </li>
                    <li>
                      <span onclick="P.answer.copyAt(26)" className="number" id="suggested_26" data-original-title title>@26 </span>
                      <a href="/class/itchkxzaetj7jt?cid=26" target="_blank">Blackboard Quiz 1 help</a>
                      <p>
                        Student 132: Blackboard Quiz <b>1</b> help
                        Hi I... exactly the same notation used in chapter <b>1</b>... I also inserted <b>slide</b> 14 into the notes from... I <b>can</b>&amp;#<b>39</b>;t guarantee that websites will... ;s notation, but I&amp;#<b>39</b>;<b>m</b> now curious as to... ;t expecting a new <b>slide</b>/concept to have... I have looked at the <b>slide</b> and now understand...
                      </p>
                    </li>
                    <li>
                      <span onclick="P.answer.copyAt(11)" className="number" id="suggested_11" data-original-title title>@11 </span>
                      <a href="/class/itchkxzaetj7jt?cid=11" target="_blank">Page 1 Question 1</a>
                      <p>Anonymous: Page <b>1</b> Question <b>1</b>
                        I know there... correct values from the tables, however, I&amp;#<b>39</b>... ;<b>m</b> not finding anything close to where I... For the first part, <b>1</b>MPa doesnt even go up... And for the second part, I <b>can</b>&amp;#<b>39</b>;t find... Would we be <b>given</b> different numbers on the... in the past, but as you said the values <b>given</b>...
                      </p>
                    </li>
                    <li>
                      <span onclick="P.answer.copyAt(18)" className="number" id="suggested_18" data-original-title title>@18 </span>
                      <a href="/class/itchkxzaetj7jt?cid=18" target="_blank">How to do number 40 in sec 11.1?</a>
                      <p>
                        $$A_{'{'}n{'}'} = \frac{'{'}\sin 2n{'}'}{'{'}<b>1</b>+\sqrt{'{'}n{'}'}{'}'}... #<b>pin</b>
                        Instructor Prod ryans@piazza.com, Krystine... \leq \sin(2n) &lt; <b>1</b>$$), try to transform... $), the <b>result</b> will have greater absolute... Anonymous: To clarify: $$\leq \sin(2n)$$ <b>can</b>... never be equal to <b>1</b>?... Anonymous: $$\sin 2n$$ <b>can</b> never equal <b>1</b>,...
                      </p>
                    </li>
                    <li>
                      <span onclick="P.answer.copyAt(100)" className="number" id="suggested_100" data-original-title title>@100 </span>
                      <a href="/class/itchkxzaetj7jt?cid=100" target="_blank">Last week's handout: why won't my GRect display properly?</a>
                      <p>
                        Krystine Altamira, Crystal: Last <b>week</b>&amp;#<b>39</b>... ;s handout: why won&amp;#<b>39</b>;t my GRect display...
                      </p>
                    </li>
                    <li>
                      <span onclick="P.answer.copyAt(101)" className="number" id="suggested_101" data-original-title title>@101 </span>
                      <a href="/class/itchkxzaetj7jt?cid=101" target="_blank">Using Piazza in ENGRD 2210</a>
                      <p>
                        online Q&amp;A platform where students <b>can</b>... know the answer to a question, explaining <b>something</b>... know the exact answer to a question, you <b>can</b>... probably contribute <b>something</b> – a starting... <b>point</b>, a reference, or even an additional... #<b>pin</b>
                        Caitlin McGarry: Excited to try Piazza...
                      </p>
                    </li>
                    <li>
                      <span onclick="P.answer.copyAt(37)" className="number" id="suggested_37" data-original-title title>@37 </span>
                      <span className="copied" id="copied_37">Copied!</span>
                      <a href="/class/itchkxzaetj7jt?cid=37" target="_blank">Question on Question 3</a><br />
                      specific volume of the final state with the <b>given</b>... look up at specific volume-temperature <b>graph</b>... Anonymous: 
                      You&amp;#<b>39</b>;re supposed to be able... specific volume of the final state with the <b>given</b>...
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </article>
    </div>
  </div>
)
export default Edit;