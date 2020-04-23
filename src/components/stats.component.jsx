import React from 'react';

export const Stats = () => (

  <div>
    <div className="col questions-and-answers stats">
      <div className="form-row">
        <div className="col-auto expand_feed" style={{marginBottom: '-30px', marginLeft: '5px', zIndex: 50}}>
          <button className="btn btn-secondary btn-xs px-1" id="expand_feed" data-toggle="tooltip" data-placement="right" title="Expand feed">
            <span className="fa fa-chevron-right" style={{transform: 'rotate(90deg) translateX(1px)'}} />
          </button>
        </div>
      </div>
      <div className id="qanda-content">
        <article className="question">
          <header className="container-fluid">
            <div className="form-row">
              <div className="col-auto text-left py-2">
                <span className="stats_header">TEST 101 Statistics</span>
              </div>
              <div className="col-sm-auto col-12 text-left mt-3">
                (<a href>Get class statistics as a CSV file</a>)
                (<a href>TEST 101 Piazza Report</a>)
                (<a href>Bulk download poll statistics</a>)
              </div>
            </div>
          </header>
          <div className="content container-fluid pb-3">
            <div className="form-row">
              <div className="col mt-3">
                <a><b>Download class contents in JSON/CSV format</b></a><br />
                <b>Export started. A link to the export file will be sent to your email: krystine@piazza.com</b>
              </div>
            </div>
            <div className="form-row">
              <div className="col mt-3 text-center">
                <h3>Usage Trends For TEST 101</h3>
              </div>
            </div>
            <div className="form-row">
              <div className="col mt-3">
                <div className="chart bg-grey border py-5 mb-3">
                  <h1 className="px-3 py-5 text-center">chart</h1>
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="col my-1">
                <div className="styled-select" style={{width: '155px', margin: 'auto'}}>
                  <select className="custom-select">
                    <option value={0}>Unique users per day</option>
                    <option value={1}>Posts per day</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="form-row mb-3">
              <div className="col-12 col-sm-5 col-md-4 col-lg-3">
                <h3 className="mb-3">Class At A Glance</h3>
                <div className="form-row">
                  <div className="col-auto text-right text-bold">
                    <b>
                      5<br />
                      14<br />
                      0<br />
                      0<br />
                      1<br />
                      -
                    </b>
                  </div>
                  <div className="col mr-3">
                    total&nbsp;posts*<br />
                    total&nbsp;contributions**<br />
                    un‑credited&nbsp;contributions***<br />
                    instructors'&nbsp;responses<br />
                    students'&nbsp;responses<br />
                    avg.&nbsp;response&nbsp;time<br />
                  </div>
                </div>
              </div>
              <div className="col">
                <h3 className="mb-3 d-inline-block">Top Student Contributors</h3>
                (<a data-toggle="modal" data-target="#stickersModal">Request stickers for my students</a>)
                {/*             (<a data-toggle="modal" data-target="#studentStickersModal">students request stickers</a>) */}
                <div className="form-row">
                  <div className="col-auto text-left">
                    23 contributions; 18 days online<br />
                    18 contributions; 33 days online<br />
                    11 contributions; 200 days online<br />
                    9 contributions; 4 days online<br />
                    5 contributions; 61 days online
                  </div>
                  <div className="col">
                    <b>
                      Ana Fuentes<br />
                      Rach<br />
                      Crystal<br />
                      Loyd Süreyya<br />
                      Andi
                    </b>
                  </div>
                </div>
              </div>
              {/*           <div class="col-2"></div> */}
            </div>
            <div className="form-row">
              <div className="col-lg-12 col-sm-12">
                <h3 className="mb-3 text-center">Top Student Askers</h3>
                <table id="stats_askers" className="tablesorter table table-condensed table-hover table-bordered">
                  <thead>
                    <tr>
                      <th>Name, Email</th>
                      <th>questions asked</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="shrink"><strong>Rach</strong> <span className="email">rlam@wellesley.edu</span></td>
                      <td className="expand">9</td>
                    </tr>
                    <tr>
                      <td className="shrink"><strong>Crystal</strong> <span className="email">cmescolero@gmail.com</span></td>
                      <td className="expand">7</td>
                    </tr>
                    <tr>
                      <td className="shrink"><strong>Christin Michiko</strong> <span className="email">student132@piazza.com</span></td>
                      <td className="expand">2</td>
                    </tr>
                    <tr>
                      <td className="shrink"><strong>Feivush Arn</strong> <span className="email">student107@piazza.com</span></td>
                      <td className="expand">2</td>
                    </tr>
                    <tr>
                      <td className="shrink"><strong>Loyd Süreyya</strong> <span className="email">student36@piazza.com</span></td>
                      <td className="expand">2</td>
                    </tr>
                    <tr>
                      <td className="shrink"><strong>Ana Fuentes</strong> <span className="email">rlam+elastic@wellesley.edu</span></td>
                      <td className="expand">1</td>
                    </tr>
                    <tr>
                      <td className="shrink"><strong>Arkhip Nthanda</strong> <span className="email">student88@piazza.com</span></td>
                      <td className="expand">1</td>
                    </tr>
                    <tr>
                      <td className="shrink"><strong>Ayako Lommán</strong> <span className="email">student128@piazza.com</span></td>
                      <td className="expand">1</td>
                    </tr>
                    <tr>
                      <td className="shrink"><strong>Brian Berko</strong> <span className="email">student95@piazza.com</span></td>
                      <td className="expand">1</td>
                    </tr>
                    <tr>
                      <td className="shrink"><strong>CMcG</strong> <span className="email">mcgarry@piazza.com</span></td>
                      <td className="expand">1</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-lg-12 col-sm-12">
                <h3 className="mb-3 text-center">Top Student "Good Question" Askers</h3>
                <table id="stats_good_q" className="tablesorter table table-condensed table-hover table-bordered">
                  <thead>
                    <tr>
                      <th>Name, Email</th>
                      <th>number of "good question"s</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="shrink"><strong>Rach</strong> <span className="email">rlam@wellesley.edu</span></td>
                      <td className="expand">2</td>
                    </tr>
                    <tr>
                      <td className="shrink"><strong>Crystal</strong> <span className="email">cmescolero@gmail.com</span></td>
                      <td className="expand">2</td>
                    </tr>
                    <tr>
                      <td className="shrink"><strong>Theofilus Zemfira</strong> <span className="email">student52@piazza.com</span></td>
                      <td className="expand">1</td>
                    </tr>
                    <tr>
                      <td className="shrink"><strong>Christin Michiko</strong> <span className="email">student132@piazza.com</span></td>
                      <td className="expand">1</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="form-row">
              <div className="col">
                <h3 className="mb-3 text-center">Top Student Answerers</h3>
                <table id="stats_answerers" className="tablesorter table table-condensed table-hover table-bordered">
                  <thead>
                    <tr>
                      <th>Name, Email</th>
                      <th>number of answers</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="shrink"><strong>Ana Fuentes</strong> <span className="email">rlam+elastic@wellesley.edu</span></td>
                      <td className="expand">18</td>
                    </tr>
                    <tr>
                      <td className="shrink"><strong>Andi</strong> <span className="email">rachel.lam17+5@gmail.com, rlam+angie@wellesley.edu</span></td>
                      <td className="expand">5</td>
                    </tr>
                    <tr>
                      <td className="shrink"><strong>Rach</strong> <span className="email">rlam@wellesley.edu</span></td>
                      <td className="expand">2</td>
                    </tr>
                    <tr>
                      <td className="shrink"><strong>Christin Michiko</strong> <span className="email">student132@piazza.com</span></td>
                      <td className="expand">1</td>
                    </tr>
                    <tr>
                      <td className="shrink"><strong>Crystal</strong> <span className="email">cmescolero@gmail.com</span></td>
                      <td className="expand">1</td>
                    </tr>
                    <tr>
                      <td className="shrink"><strong>Loyd Süreyya</strong> <span className="email">student36@piazza.com</span></td>
                      <td className="expand">1</td>
                    </tr>
                    <tr>
                      <td className="shrink"><strong>Thucydides Nairyosangha</strong> <span className="email">student101@piazza.com</span></td>
                      <td className="expand">1</td>
                    </tr>
                    <tr>
                      <td className="shrink"><strong>Zora Reuven</strong> <span className="email">student105@piazza.com</span></td>
                      <td className="expand">1</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="form-row">
              <div className="col">
                <h3 className="mb-3 text-center">Top Student "Endorsed Answer" Answerers</h3>
                <table id="stats_good_a" className="tablesorter table table-condensed table-hover table-bordered">
                  <thead>
                    <tr>
                      <th>Name, Email</th>
                      <th>number of endorsed answers</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="shrink">
                        <strong>Andi</strong> <span className="email">rachel.lam17+5@gmail.com, rlam+angie@wellesley.edu</span>
                      </td>
                      <td className="expand">1</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="form-row">
              <div className="col">
                <h3 className="mb-3 text-center">Top Student Listeners</h3>
                <table id="stats_listeners" className="tablesorter table table-condensed table-hover table-bordered">
                  <thead>
                    <tr>
                      <th>Name, Email</th>
                      <th>number of questions/notes viewed</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="shrink"><strong>Dylan Student</strong> <span className="email">duckieddylan@gmail.com</span></td>
                      <td className="expand">12</td>
                    </tr>
                    <tr>
                      <td className="shrink"><strong>CMcG</strong> <span className="email">mcgarry@piazza.com</span></td>
                      <td className="expand">11</td>
                    </tr>
                    <tr>
                      <td className="shrink"><strong>Terence J Kidd</strong> <span className="email">kidduknow@utexas.edu</span></td>
                      <td className="expand">8</td>
                    </tr>
                    <tr>
                      <td className="shrink"><strong>Hugleikr Morgan</strong> <span className="email">student151@piazza.com</span></td>
                      <td className="expand">3</td>
                    </tr>
                    <tr>
                      <td className="shrink"><strong>Jon Kalfayan</strong> <span className="email">jonk1993@berkeley.edu, jonk1993@gmail.com</span></td>
                      <td className="expand">3</td>
                    </tr>
                    <tr>
                      <td className="shrink"><strong>Brian Berko</strong> <span className="email">student95@piazza.com</span></td>
                      <td className="expand">2</td>
                    </tr>
                    <tr>
                      <td className="shrink"><strong>Thucydides Nairyosangha</strong> <span className="email">student101@piazza.com</span></td>
                      <td className="expand">2</td>
                    </tr>
                    <tr>
                      <td className="shrink"><strong>Jozef Mathilde</strong> <span className="email">student165@piazza.com</span></td>
                      <td className="expand">1</td>
                    </tr>
                    <tr>
                      <td className="shrink"><strong>Krystine Student Testing</strong> <span className="email">krystinerae@gmail.com</span></td>
                      <td className="expand">1</td>
                    </tr>
                    <tr>
                      <td className="shrink"><strong>Uhtric Kayin</strong> <span className="email">student93@piazza.com</span></td>
                      <td className="expand">1</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="form-row">
              <div className="col">
                <b>*posts</b> are questions and notes<br />
                <b>**contributions</b> are posts, responses, edits, followups, and comments to followups (i.e., everything)<br />
                <b>***un-credited</b> contributions are un-credited fully anonymous contributions to preserve anonymity; they are randomly distributed as more anonymous contributions are submitted.
                <p className="helper-text">More stats will be displayed here as class activity increases.</p>
              </div>
            </div>
            <div className="form-row">
              <div className="col">
                <h3 className="mb-3 text-center">Instructor Participation Report</h3>
                <table id="stats_all_instructors" className="tablesorter table table-condensed table-hover table-bordered">
                  <thead>
                    <tr>
                      <th style={{maxWidth: '201px'}}>Name, Email</th>
                      <th>days online</th>
                      <th>posts viewed<em>*</em></th>
                      <th>contributions<em>**</em></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="shrink"><strong>Dylan</strong> <span className="email">dbedford@stanford.edu</span></td>
                      <td>144</td>
                      <td>23</td>
                      <td className="expand">0</td>
                    </tr>
                    <tr>
                      <td className="shrink"><strong>Ivo Gregurec</strong> <span className="email">ivo@piazza.com</span></td>
                      <td>21</td>
                      <td>11</td>
                      <td className="expand">0</td>
                    </tr>
                    <tr>
                      <td className="shrink"><strong>Krystine I.</strong> <span className="email">krystinerae@gmail.com</span></td>
                      <td>2</td>
                      <td>4</td>
                      <td className="expand">0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="form-row">
              <div className="col">
                <h3 className="mb-3 text-center">Student Participation Report</h3>
                <table id="stats_all_users" className="tablesorter table table-condensed table-hover table-bordered">
                  <thead>
                    <tr>
                      <th style={{maxWidth: '201px'}}>Name, Email</th>
                      <th>days online</th>
                      <th>posts viewed<em>*</em></th>
                      <th>
                        <span className="d-none d-sm-inline">contributions</span>
                        <span className="d-inline d-sm-none">ctrb</span>
                        <em>**</em>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="shrink"><strong>Ana Fuentes</strong> <span className="email">rlam+elastic@wellesley.edu</span></td>
                      <td>18</td>
                      <td>20</td>
                      <td className="expand">23</td>
                    </tr>
                    <tr>
                      <td className="shrink"><strong>Andi</strong> <span className="email">rachel.lam17+5@gmail.com, rlam+angie@wellesley.edu</span></td>
                      <td>61</td>
                      <td>15</td>
                      <td className="expand">5</td>
                    </tr>
                    <tr>
                      <td className="shrink"><strong>Arkhip Nthanda</strong> <span className="email">student88@piazza.com</span></td>
                      <td>1</td>
                      <td>0</td>
                      <td className="expand">1</td>
                    </tr>
                    <tr>
                      <td className="shrink"><strong>Ayako Lommán</strong> <span className="email">student128@piazza.com</span></td>
                      <td>1</td>
                      <td>0</td>
                      <td className="expand">1</td>
                    </tr>
                    <tr>
                      <td className="shrink"><strong>Brian Berko</strong> <span className="email">student95@piazza.com</span></td>
                      <td>2</td>
                      <td>2</td>
                      <td className="expand">1</td>
                    </tr>
                    <tr>
                      <td className="shrink"><strong>Christin Michiko</strong> <span className="email">student132@piazza.com</span></td>
                      <td>4</td>
                      <td>3</td>
                      <td className="expand">4</td>
                    </tr>
                    <tr>
                      <td className="shrink"><strong>CMcG</strong> <span className="email">mcgarry@piazza.com</span></td>
                      <td>4</td>
                      <td>11</td>
                      <td className="expand">1</td>
                    </tr>
                    <tr>
                      <td className="shrink"><strong>Crystal</strong> <span className="email">cmescolero@gmail.com</span></td>
                      <td>200</td>
                      <td>13</td>
                      <td className="expand">11</td>
                    </tr>
                    <tr>
                      <td className="shrink"><strong>Crystal Martinez</strong> <span className="email">cmescolero+martinez@gmail.com</span></td>
                      <td>0</td>
                      <td>0</td>
                      <td className="expand">0</td>
                    </tr>
                    <tr>
                      <td className="shrink"><strong>Crystal New Student</strong> <span className="email">cmescolero+newstudent@gmail.com</span></td>
                      <td>0</td>
                      <td>0</td>
                      <td className="expand">0</td>
                    </tr>
                    <tr>
                      <td className="shrink"><strong>Dylan Student</strong> <span className="email">duckieddylan+newstudent@gmail.com</span></td>
                      <td>16</td>
                      <td>12</td>
                      <td className="expand">0</td>
                    </tr>
                    <tr>
                      <td className="shrink"><strong>Feivush Arn</strong> <span className="email">student107@piazza.com</span></td>
                      <td>1</td>
                      <td>1</td>
                      <td className="expand">2</td>
                    </tr>
                    <tr>
                      <td className="shrink"><strong>Fion Mira</strong> <span className="email">student8@piazza.com</span></td>
                      <td>3</td>
                      <td>27</td>
                      <td className="expand">2</td>
                    </tr>
                    <tr>
                      <td className="shrink"><strong>Ginny Weasley</strong> <span className="email">testingpiazza+ginny@gmail.com</span></td>
                      <td>0</td>
                      <td>0</td>
                      <td className="expand">0</td>
                    </tr>
                    <tr>
                      <td className="shrink"><strong>Hermione G.</strong> <span className="email">testingpiazza+hermione@gmail.com</span></td>
                      <td>0</td>
                      <td>0</td>
                      <td className="expand">0</td>
                    </tr>
                    <tr>
                      <td className="shrink"><strong>Hugleikr Morgan</strong> <span className="email">student151@piazza.com</span></td>
                      <td>2</td>
                      <td>3</td>
                      <td className="expand">1</td>
                    </tr>
                    <tr>
                      <td className="shrink"><strong>Jon Kalfayan</strong> <span className="email">jonk1993@berkeley.edu, jonk1993@gmail.com</span></td>
                      <td>21</td>
                      <td>3</td>
                      <td className="expand">0</td>
                    </tr>
                    <tr>
                      <td className="shrink"><strong>Jozef Mathilde</strong> <span className="email">student165@piazza.com</span></td>
                      <td>1</td>
                      <td>1</td>
                      <td className="expand">1</td>
                    </tr>
                    <tr>
                      <td className="shrink"><strong>Krystine Student</strong> <span className="email">krystinerae+optintest@gmail.com</span></td>
                      <td>0</td>
                      <td>0</td>
                      <td className="expand">0</td>
                    </tr>
                    <tr>
                      <td className="shrink"><strong>Krystine Student Testing</strong> <span className="email">krystinerae+studentka@gmail.com</span></td>
                      <td>1</td>
                      <td>1</td>
                      <td className="expand">0</td>
                    </tr>
                    <tr>
                      <td className="shrink"><strong>Kunibert Herminius</strong> <span className="email">student7@piazza.com</span></td>
                      <td>1</td>
                      <td>0</td>
                      <td className="expand">1</td>
                    </tr>
                    <tr>
                      <td className="shrink"><strong>Loyd Süreyya</strong> <span className="email">student36@piazza.com</span></td>
                      <td>4</td>
                      <td>2</td>
                      <td className="expand">9</td>
                    </tr>
                    <tr>
                      <td className="shrink"><strong>Oliviero Tara</strong> <span className="email">student89@piazza.com</span></td>
                      <td>1</td>
                      <td>0</td>
                      <td className="expand">1</td>
                    </tr>
                    <tr>
                      <td className="shrink"><strong>Rach</strong> <span className="email">rlam@wellesley.edu</span></td>
                      <td>33</td>
                      <td>10</td>
                      <td className="expand">18</td>
                    </tr>
                    <tr>
                      <td className="shrink"><strong>Sabine Apollinariya</strong> <span className="email">student40@piazza.com</span></td>
                      <td>1</td>
                      <td>0</td>
                      <td className="expand">1</td>
                    </tr>
                    <tr>
                      <td className="shrink"><strong>Tadija Aigle</strong> <span className="email">student117@piazza.com</span></td>
                      <td>1</td>
                      <td>0</td>
                      <td className="expand">1</td>
                    </tr>
                    <tr>
                      <td className="shrink"><strong>Terence J Kidd</strong> <span className="email">kidduknow@utexas.edu</span></td>
                      <td>153</td>
                      <td>8</td>
                      <td className="expand">1</td>
                    </tr>
                    <tr>
                      <td className="shrink"><strong>Theofilus Zemfira</strong> <span className="email">student52@piazza.com</span></td>
                      <td>2</td>
                      <td>0</td>
                      <td className="expand">1</td>
                    </tr>
                    <tr>
                      <td className="shrink"><strong>Thucydides Nairyosangha</strong> <span className="email">student101@piazza.com</span></td>
                      <td>4</td>
                      <td>2</td>
                      <td className="expand">1</td>
                    </tr>
                    <tr>
                      <td className="shrink"><strong>Uhtric Kayin</strong> <span className="email">student93@piazza.com</span></td>
                      <td>1</td>
                      <td>1</td>
                      <td className="expand">1</td>
                    </tr>
                    <tr>
                      <td className="shrink"><strong>Yannick Nathanael</strong> <span className="email">student3@piazza.com</span></td>
                      <td>1</td>
                      <td>0</td>
                      <td className="expand">1</td>
                    </tr>
                    <tr>
                      <td className="shrink"><strong>Zora Reuven</strong> <span className="email">student105@piazza.com</span></td>
                      <td>2</td>
                      <td>7</td>
                      <td className="expand">3</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>    
)

export default Stats;