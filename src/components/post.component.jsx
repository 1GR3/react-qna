import React from 'react';

export const Post = () => (

  <article className="answer">
    <header className="container-fluid border-bottom pr-1 pl-1">
      <div className="form-row">
        <div className="col-auto p-1">
          <svg width="24px" height="24px" viewBox="0 0 24 24">
            <use xlinkHref="#Question">
            </use>
          </svg>
          <svg width="24px" height="24px">
            <use xlinkHref="#Question-r" />
          </svg>
          <svg width="24px" height="24px">
            <use xlinkHref="#Note" />
          </svg>
          <svg width="24px" height="24px">
            <use xlinkHref="#Poll" />
          </svg>
          <svg width="24px" height="24px">
            <use xlinkHref="#Students" />
          </svg>
          <svg width="24px" height="24px">
            <use xlinkHref="#Instructors" />
          </svg>
        </div>
        <div className="col text-left pl-0 pt-1">
          <b className="ml-1">question</b>
          <span className="icon-font icon-star-outline favorite-btn" />
        </div>
        <div className="col text-right pt-1">
          <a href>stop following</a>
          <span className="view-count"><b>1</b> view</span>
        </div>
        {/*
<div class="col-auto border-left text-right">
  <div class="dropdown">
    <button class="btn btn-link dropdown-toggle btn-xs px-1" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <span class="icon-font icon-3-dots" style="font-size: 16px; font-weight: 900"></span>
    </button>
    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
      <a class="dropdown-item" href="#">Stop Following</a>
      <a class="dropdown-item" href="#">Convert Question to Note</a>
      <a class="dropdown-item" href="#">Mark as Duplicate</a>
      <a class="dropdown-item" href="#">Change Visibility of Post</a>
      <a class="dropdown-item" href="#">Disable history</a>
      <a class="dropdown-item" href="#">Flag as Inappropriate</a>
      <a class="dropdown-item" href="#">Delete question</a>
    </div>
  </div>
</div>
*/}
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
          <h2 className="pt-3">actions menu with 3 dots example</h2>
          <p>It appears that the results of this study suggest that priming and declarative memory can be dissociated in healthy subjects, given that the graphs are opposite, but what was the overall point of this study? Is the overall takeaway that priming and declarative memory are different memory forms, or is there something else that I&apos;m missing?</p>
          <p className="py-2">
            <span className="folder-tag">hw2</span>
            <span className="folder-tag">lecture_2</span>
          </p>
          <p className="text-green text-center"><b>~ An instructor (Crystal) endorsed the answer ~</b></p>
          <p className="text-red text-center"><b>~ 1 other user is editing this right now. ~</b></p>
        </div>
      </div>        
    </div>
    <footer className="container-fluid border-top">
      <div className="row">
        <div className="col col-auto text-left py-0 align-self-center">
          <button className="btn btn-primary btn-xs mr-2 post_edit">edit</button>
          <a href>good question</a>
          <div className="d-inline-block good_post_number">&nbsp;12</div>
        </div>
        <div className="col text-right">
          <div className="update_text">
            <span className="d-none d-sm-none d-md-inline">Updated</span> 
            5 days ago by Piazza Team and 
            <a href className data-toggle="tooltip" data-placement="top" title="Dylan 
Krystine">
              2 others
            </a>
          </div>
        </div>
      </div>
    </footer>
  </article>
  
);

export default Post;