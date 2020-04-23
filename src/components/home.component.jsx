import React from 'react';

export const Home = () => (

  <div className="col questions-and-answers ">
    <div className="form-row">
      <div className="col-auto expand_feed" style={{marginBottom: '-30px', marginLeft: '5px', zIndex: 50}}>
        <button className="btn btn-secondary btn-xs px-1" id="expand_feed" data-toggle="tooltip" data-placement="right" title data-original-title="Expand feed">
          <span className="fa fa-chevron-right" style={{transform: 'rotate(90deg) translateX(1px)'}} />
        </button>
      </div>
    </div>
    <div className="homepage" id="qanda-content">
      <article className="empty pt-3">
        <div className="row">
          <div className="col ">
            <h2 className="d-inline mr-2">Class at a Glance</h2>
            <i>
              <span>
                Updated 2 hours ago.
                <a href>Reload</a>
              </span>
            </i>
          </div>
          <div className="col-sm-5 col-12 text-right" style={{marginTop: '6px'}}>
            <a>Request stickers for my students</a>
          </div>
        </div>
      </article>
      <article className="py-3">
        <div className="content container-fluid">
          <div className="form-row">
            <div className="col-auto">
              <button className="btn btn-light btn-block btn-sm text-left">
                <svg width="29px" height="31px">
                  <use xlinkHref="#check" />
                </svg>
                <span className="text">no unread posts</span>
              </button>
              <button className="btn btn-light btn-block btn-sm text-left">
                <svg width="29px" height="31px">
                  <use xlinkHref="#exclamation" />
                </svg>
                <span className="text">3 unanswered questions</span>
              </button>
              <button className="btn btn-light btn-block btn-sm text-left">
                <svg width="29px" height="31px">
                  <use xlinkHref="#exclamation" />
                </svg>
                <span className="text">4 unresolved followups</span>
              </button>
            </div>
            <div className="col-auto col-lg-2 text-right font-weight-bold pt-3">
              125<br />
              255<br />
              64<br />
              19<br />
              0 min
            </div>
            <div className="col pt-3 text-truncate">
              total posts<br />
              total contributions<br />
              instructors' responses<br />
              students' responses<br />
              avg. response time
            </div>
          </div>
          <div className="form-row pt-2">
            <div className="col">
              <h4>Student Enrollment</h4>
            </div>
            <div className="col text-right pt-2">
              <span className="helper-text">..out of 100 (estimated)</span>&nbsp;<a href>Edit</a>
            </div>
          </div>
          <div className="form-row">
            <div className="col">
              <div className="progress">
                <div className="progress-bar bg-success" role="progressbar" style={{width: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
                  35 enrolled
                </div>
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="col text-right pt-2">
              <span className="download-text">Download us in the app store:&nbsp;</span>
              <a href="https://itunes.apple.com/us/app/piazza/id453142230" target="_blank" className>
                <img src="https://d1b10bmlvqabco.cloudfront.net/careers/download_app_images/iphone_store.png" width="60px" height="20px" /></a>
              &nbsp;
              <a href="https://play.google.com/store/apps/details?id=com.piazza.android" target="_blank" className>
                <img src="https://d1b10bmlvqabco.cloudfront.net/careers/download_app_images/play_store.png" width="60px" height="20px" /></a>
            </div>
          </div>
        </div>
      </article>
      <article className="empty pt-3">
        <div className="row">
          <div className="col ">
            <h2 className="d-inline mr-2">Network at a Glance</h2>
          </div>
        </div>
      </article>
      <article className="pb-3 mb-0"> {/* py-3 when there's no header */}
        <header className="private clearfix mb-2">
          <div className="form-row">
            <div className="col">
              <img src="https://dvngeac8rg9mb.cloudfront.net/images/piazza/dashboard/private_icon.png" className="float-left" width="26px" height="26px" />
              <p className="mb-0">
                Your profile is not published. To allow companies to discover and contact you, publish your profile.
              </p>
              <a data-toggle="modal" data-target="#privateModal">What does this mean?</a>
            </div>
            <div className="col-auto">
              <button className="btn btn-success btn-xs float-right">
                Publish profile
              </button>
            </div>
          </div>
        </header>  
        <div className="content container-fluid">
          <div className="form-row">
            <div className="col">
              <button className="btn btn-light btn-block btn-sm text-left">
                <svg width="29px" height="31px">
                  <use xlinkHref="#check" />
                </svg>
                <span className="text">183 total connections</span>
              </button>
              <button className="btn btn-light btn-block btn-sm text-left">
                <svg width="29px" height="31px">
                  <use xlinkHref="#check" />
                </svg>
                <span className="text">95% profile completed</span>
              </button>
              <button className="btn btn-light btn-block btn-sm text-left">
                <svg width="29px" height="31px">
                  <use xlinkHref="#check" />
                </svg>
                <span className="text">4 companies viewed</span>
              </button>
              <div className="mb-3">
                <h4 className="companies_recently_added_header">Companies recently added</h4>
                <ul className="companies_recently_added clearfix">
                  <li>
                    <a id="company_link_0" href="/careers/dashboard#/company_profile/nokia" target="_blank" className="caag_notification" type="company_1">
                      <img id="comp_img_0" src="/redirect/s3?bucket=uploads&prefix=company%2Fnokia%2Fcompany_pic%2F1528492080_120.jpg" alt="" original-title="Nutanix" title="Nokia" /></a>
                  </li>
                  <li>
                    <a id="company_link_1" href="/careers/dashboard#/company_profile/att" target="_blank" className="caag_notification" type="company_2">
                      <img id="comp_img_1" src="/redirect/s3?bucket=uploads&prefix=company%2Fatt%2Fcompany_pic%2F1536767161_120.jpg" alt="" original-title="Adobe" title="AT&T" /></a>
                  </li>
                  <li>
                    <a id="company_link_2" href="/careers/dashboard#/company_profile/intel" target="_blank" className="caag_notification" type="company_3">
                      <img id="comp_img_2" src="https://d1b10bmlvqabco.cloudfront.net/company/intel/company_pic/1392921515_120.jpg" alt="" original-title="Facebook" title="Intel" /></a>
                  </li>
                  <li>
                    <a id="company_link_3" href="/careers/dashboard#/company_profile/bridgewater" target="_blank" className="caag_notification" type="company_4">
                      <img id="comp_img_3" src="https://d1b10bmlvqabco.cloudfront.net/company/bridgewater/company_pic/1407268632_120.jpg" alt="" original-title="Bridgewater" /></a>
                  </li>
                  <li>
                    <a id="company_link_4" href="/careers/dashboard#/company_profile/adobe" target="_blank" className="caag_notification" type="company_5">
                      <img id="comp_img_4" src="/redirect/s3?bucket=uploads&prefix=company%2Fadobe%2Fcompany_pic%2F1540321632_120.jpg" alt="" original-title="Adobe" /></a>
                  </li>
                </ul>
                <div className="preference_list clearfix" id="selected_preferences_section" style={{display: 'block'}}>
                </div>
              </div>
            </div>
            <div className="col-auto pt-1">
              <p className="helper-text mb-2">
                2020 job status
                <select>
                  <option>Seeking Full Time</option>
                  <option>Seeking Internship</option>
                  <option>Seeking Co-op/Term Internship</option>
                  <option>Accepted Position</option>
                </select>
              </p>
              <p><b>Worked at/Headed to:</b> Piazza <a>edit</a></p>
              <div className="job-form pb-3">
                <div className="form-row">
                  <div className="col-4 pt-1">
                    Company
                  </div>
                  <div className="col-8">
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-4 pt-1">
                    Role
                  </div>
                  <div className="col-8">
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-4 pt-1">
                    Location
                  </div>
                  <div className="col-8">
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-4">
                    Year
                  </div>
                  <div className="col-8">
                    <select className="w-100">
                      <option>2020</option>
                      <option>2019</option>
                      <option>2018</option>
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col text-right">
                    <button className="btn btn-success btn-xs mt-1">Update</button>
                  </div>
                </div>
              </div>
              <p className="pb-1"><b>Visa requirement:</b> US Citizen <a data-toggle="modal" data-target="#visaModal">edit</a></p>
              <p className="text-right mb-0">
                <a>Edit career preferences</a>
              </p>
            </div>
          </div>
        </div>
      </article>
      <article className="empty pt-0">
        <div className="row">
          <div className="col ">
            <p className="helper-text">
              * Companies are looking to build relationships year round, even when you’re not on the market for a job. Set preferences to control which companies you hear from.
            </p>
          </div>
        </div>
      </article>
      <article className="py-3">
        <div className="content container-fluid">
          <div className="form-row">
            <div className="col">
              <h1 className="text-center">Share Your Class</h1>
              <p>Professors appreciate Piazza best when they see how it is being used.</p>
              <p>Allow colleagues to view your class through a demo link - a restricted, read only version of your class where all students&apos; names are anonymized and all student information hidden.</p>
              <p className="border py-1 px-2 font-weight-bold">
                https://piazza.com/demo_login?nid=itchkxzaetj7jt&amp;auth=6c4a257
              </p>
              <p className="text-center helper-text">
                Opening this link in the same browser will log you out as ivo@piazza.com
              </p>
            </div>
          </div>
        </div>
      </article>
      <article className="py-3">
        <div className="content container-fluid">
          <div className="form-row">
            <div className="col">
              <h1 className="text-center">Product Updates: Oct 26, 2019</h1>
              <p>Inspired by input we've received from professors, we've created this space in your home screen to inform you of product updates that our team is working on.</p>
              <ul>
                <li>
                  <b>[Released]</b> Ability to download your class posts via the Statistics page as a JSON/CSV file<br />            
                </li>
                <li>
                  <b>[Released]</b> Students can no longer save their names as "Anonymous"<br />
                </li>
                <li>
                  <b>[Released]</b> Support to update files in Class Resources so that links do not become stale<br />
                </li>
                <li>
                  <b>[In queue]</b> Improving refresh of left feed panel so it stays in sync with class activity<br />
                </li>
                <li>
                  <b>[In queue]</b> Improving the search result experience; adding support for duplicate post detection<br />
                </li>
                <li>
                  <b>[In queue]</b> Improvements to our iOS and Android apps on frequently requested items<br />
                </li>
              </ul>
              <p>We&apos;re eager to learn how we can continue to improve our product. Drop us a note at <a href="mailto:productfeedback@piazza.com">productfeedback@piazza.com</a>, we&apos;d love to hear from you! Warm regards, The Piazza Team</p>
            </div>
          </div>
        </div>
      </article>
      <article className="py-3">
        <div className="content container-fluid">
          <div className="form-row">
            <div className="col">
              <a href="https://www.piazzalectureseries.com/large-courses" target="_blank">
                <div className="series_image_container series_image_link_1" />
              </a>
              <p className="text-center">Driving Student Engagement in Large Classes with Piazza</p>
            </div>
            <div className="col">
              <a href="https://www.piazzalectureseries.com/large-courses" target="_blank">
                <div className="series_image_container series_image_link_2" />
              </a>
              <p className="text-center">Engaging Women in STEM Fields on Piazza</p>
            </div>
            <div className="col">
              <a href="https://www.piazzalectureseries.com/large-courses" target="_blank">
                <div className="series_image_container series_image_link_3" />
              </a>
              <p className="text-center">Engaging Small Discussion Based Classes on Piazza</p>
            </div>
          </div>
          <div className="form-row">
            <div className="col text-center">
              <a href="https://open.spotify.com/show/0PZYgzA2f4qfiFNzXNTO7t" target="_blank" className="podcast_link no-underline">
                <div className="podcast_pill spotify" />
              </a>
              <a href="https://podcasts.apple.com/us/podcast/piazza-lecture-series-podcast/id1458646909" target="_blank" className="podcast_link no-underline">
                <div className="podcast_pill apple" />
              </a>
              <a href="https://play.google.com/music/listen?u=0#/ps/Iqfcwaixsu3i6rfx652uzdc5peu" target="_blank" className="podcast_link no-underline">
                <div className="podcast_pill google" />
              </a>
            </div>
          </div>
        </div>
      </article>
      <article className="pb-3">
        <button type="button" className="close mr-2" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
        <div className="content container-fluid pt-3">
          <div className="form-row">
            <div className="col">
              <p>Dear Professors:</p>
              <p>Piazza was built on the founding principle of creating inclusion in the classroom. I was one of 3 women studying computer science, and too shy to ask for help from my male classmates, I started Piazza so every student could have a voice.</p>
              <p>We recently compiled a Toolkit for Professors. This toolkit includes an in-depth product guide, professor case studies, tips for a successful class, boosting minorities’ participation in the class, information on FERPA compliance, student privacy and on our optional careers-oriented product offering Piazza Network that serves to aid students in getting jobs and internships.</p>
              <p>We hope this serves as a helpful resource to you and other faculty members in your department as you adopt Piazza to further your students’ learning and outcomes: <a href="https://piazza.com/toolkit" target="_blank">piazza.com/toolkit</a></p>
              <ul>
                <li>
                  <a href="/pdfs/piazza_product_introduction.pdf" target="_blank">Product PDF</a><br />            
                </li>
                <li>
                  <a href="/professors" target="_blank">Professor Success Stories</a><br />
                </li>
                <li>
                  <a href="/about/story" target="_blank">Our Story</a><br />
                </li>
                <li>
                  <a href="/network" target="_blank">The Piazza Network</a><br />
                </li>
                <li>
                  <a href="/boostingparticipation" target="_blank">Boosting Women's and Minorities' Participation</a><br />
                </li>
                <li>
                  <a href="/demopiazza" target="_blank">Demo Piazza to Other Faculty</a><br />
                </li>
                <li>
                  <a href="/legal/ferpa" target="_blank">FERPA Compliance</a><br />
                </li>
              </ul>
              <p>Thank you for your support, today and always. Should you have any questions or feedback, please don’t hesitate to email me at <a href="mailto:pooja@piazza.com" target="_blank">pooja@piazza.com</a>.</p>
              <p className="no_bottom_margin">Warm regards,</p>
              <p className="no_bottom_margin">Pooja</p>
              <p>Founder &amp; CEO, Piazza</p>
              <p>P.S. You might be interested in <a href="https://www.tandfonline.com/doi/abs/10.1080/15391523.2017.1343692?journalCode=ujrt20" target="_blank">this paper</a> in the Journal of Research on Technology in Education that analyzed how Piazza enables student interactivity and the formation of a knowledge community.</p>
              <p className="helper-text">You own the content you post on Piazza. <a href="/terms" target="_blank">Learn more</a> about our Terms of Service. <a href="/ferpa" target="_blank">Learn more</a> about how Piazza complies with FERPA.</p>
            </div>
          </div>
        </div>
      </article>
      <article className="pb-3">
        <button type="button" className="close mr-2" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
        <div className="content container-fluid pt-3">
          <div className="form-row pt-2">
            <div className="col">
              <h2 className="text-center">When is the first day of class?</h2>
            </div>
          </div>
          <div className="form-row pt-2">
            <div className="col" />
            <div className="col">
              <input className="form-control" type="date" />
            </div>
            <div className="col-auto">
              <button className="btn btn-secondary btn-xs">Save</button>
            </div>
            <div className="col" />
          </div>
        </div>
      </article>
      <article className="pb-3">
        <button type="button" className="close mr-2" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
        <div className="content container-fluid pt-3">
          <div className="form-row pt-2">
            <div className="col">
              <h2 className="text-center">Enroll your students</h2>
              <p>Paste any email addresses below in any format. Or visit Manage Class page to upload your student roster or share your Class Signup Link<br />
                <span className="helper-class">↳ Each will receive a welcome email.</span>
              </p>
              <textarea className="form-control" placeholder="john@email.com, smith@email.com" defaultValue={""} />
              <p className="text-center pt-3">
                <button className="btn btn-primary btn-xs ">Enroll Students</button>
              </p>
            </div>
          </div>
          <div className="form-row pt-2">
            <div className="col">
              <h4>Student Enrollment</h4>
            </div>
            <div className="col text-right pt-2">
              <span className="helper-text">..out of 100 (estimated)</span>&nbsp;<a href>Edit</a>
            </div>
          </div>
          <div className="form-row">
            <div className="col">
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{width: '0%'}} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100}>
                  <span className="ml-2 text-dark">0 enrolled</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article className="pb-3">
        <button type="button" className="close mr-2" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
        <div className="content container-fluid pt-3">
          <div className="form-row pt-2">
            <div className="col">
              <h2 className="text-center">Allow TAs/other instructors to enroll themselves</h2>
            </div>
          </div>
          <div className="form-row pb-2">
            <div className="col" />
            <div className="col">
              <button className="btn btn-secondary btn-sm btn-block">Yes</button>
            </div>
            <div className="col">
              <button className="btn btn-secondary btn-sm btn-block">No</button>
            </div>
            <div className="col" />
          </div>
        </div>
      </article>
      <article className="py-3">
        <div className="content container-fluid">
          <div className="form-row pt-2">
            <div className="col">
              <h2 className="text-center">Enroll your fellow instructors</h2>
              <p>Paste any email addresses below in any format. Or visit Manage Class page to share your Class Signup Link<br />
                <span className="helper-class">↳ Once added they receive a welcome email with a link to activate their Piazza account.</span>
              </p>
              <textarea className="form-control" placeholder="john@email.com, smith@email.com" defaultValue={""} />
              <p className="text-center pt-3">
                <button className="btn btn-primary btn-xs ">Enroll Students</button>
              </p>
            </div>
          </div>
        </div>
      </article>
      <article className>
        <button type="button" className="close mr-2" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
        <div className="content container-fluid pt-3">
          <div className="form-row pt-2">
            <div className="col">
              <h2 className="text-center">Set up your Course Page</h2>
            </div>
          </div>
          <div className="form-row pb-2">
            <div className="col">
              <p>After you <a>enter your course description</a>, make sure you <a>upload your syllabus</a> and <a>post your office hours</a>!</p>
            </div>
          </div>
        </div>
        <button className="btn btn-xs mb-0 btn-secondary btn-block btn-footer">
          done
        </button>
      </article>
      <article className>
        <button type="button" className="close mr-2" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
        <div className="content container-fluid pt-3">
          <div className="form-row pt-2">
            <div className="col">
              <h2 className="text-center">Enable Group Based Discussion</h2>
            </div>
          </div>
          <div className="form-row pb-2">
            <div className="col">
              <p>This feature allows students to post private messages to instructors and members of a predefined group, great for project teams or class groups</p>
            </div>
          </div>
        </div>
        <button className="btn btn-xs mb-0 btn-secondary btn-block btn-footer">
          learn more
        </button>
      </article>
      <article className>
        <button type="button" className="close mr-2" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
        <div className="content container-fluid pt-3">
          <div className="form-row pt-2">
            <div className="col">
              <h2 className="text-center">Share Piazza with other professors</h2>
            </div>
          </div>
          <div className="form-row pb-2">
            <div className="col">
              <p>Click the email icon to send a message to other professors about Piazza!
                {/* 		          <a><img src="../../images/userprofile/left-column-icons.png"></a> */}
                <a className="envelope-link"><span className="icon-font icon-envelope" /></a>
              </p>
            </div>
          </div>
        </div>
      </article>
      <article className>
        <button type="button" className="close mr-2" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
        <div className="content container-fluid pt-3">
          <div className="form-row pt-2">
            <div className="col">
              <h2 className="text-center">Create another Piazza class</h2>
            </div>
          </div>
        </div>
        <button className="btn btn-xs mb-0 btn-secondary btn-block btn-footer">
          get started
        </button>
      </article>
      <article className>
        <button type="button" className="close mr-2" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
        <div className="content container-fluid pt-3">
          <div className="form-row pt-2">
            <div className="col text-center">
              <h2 className="text-center">Read tips and tricks for a successful Piazza Class</h2>
              <a>
                <img src="/images/Q&Av2/tips&tricks.png" width={293} height="30px" className=" mb-3" />
              </a>
            </div>
          </div>
        </div>
        <button className="btn btn-xs mb-0 btn-secondary btn-block btn-footer">
          read now
        </button>
      </article>
    </div>
  </div>
)

export default Home;