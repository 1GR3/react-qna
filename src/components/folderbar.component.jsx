import React from 'react';
import Button from 'react-bootstrap/Button';


const FolderBar = ({username, bgcolor}) => (

      <div className="form-row folder-tags-row">
        <div className="col text-cutoff grey-bar folders-bar">
          <span className="icon-font icon-folder" style={{color: '#989898'}} />
          &nbsp;
          <ul id="popular_tags_list" className="folder-tags" style={{marginRight: '-10px'}}>
            <li><a className="folder">Drafts<span className="popular_tag_number show">4</span></a></li>
          </ul>
          <span style={{color: '#707d8d'}}>|</span>&nbsp;
          <span className="icon-font icon-folder" style={{color: '#989898'}} />
          &nbsp;
          <ul id="popular_tags_list" className="folder-tags" style={{marginRight: '-10px'}}>
            <li><a className="folder">Reading list</a></li>
          </ul>
          <span style={{color: '#707d8d'}}>|</span>&nbsp;
          <span className="icon-font icon-folder" style={{color: '#9bb8cc'}} />
          &nbsp;
          <ul id="popular_tags_list" className="folder-tags">
            <li><a className="folder">hw1<span className="popular_tag_number show">11</span></a></li>
            <li><a className="folder">hw2<span className="popular_tag_number show">6</span></a></li>    
            <li><a className="folder">hw3<span className="popular_tag_number show">4</span></a></li>
            <li><a className="folder">hw4<span className="popular_tag_number show">4</span></a></li>
            <li><a className="folder">exam<span className="popular_tag_number show">4</span></a></li>
            <li><a className="folder">logistics<span className="popular_tag_number show">6</span></a></li>
            <li><a className="folder">other<span className="popular_tag_number show">7</span></a></li>
            <li><a className="folder">fun<span className="popular_tag_number show">1</span></a></li>
            <li><a className="folder">lecture_2<span className="popular_tag_number show">1</span></a></li>
          </ul>
        </div>
        <div className="col col-auto grey-bar d-md-none">
          <div className="dropdown">
            <button className="btn btn-link btn-xs px-1 pt-0 my-0" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {/*         <span class="icon-font icon-3-dots"></span> */}
              ...
            </button>
            <div className="dropdown-menu dropdown-menu-right folder-tags" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item folder" href="#">hw1<span className="popular_tag_number show">11</span></a>
              <a className="dropdown-item folder" href="#">hw2<span className="popular_tag_number show">6</span></a>
              <a className="dropdown-item folder" href="#">hw3<span className="popular_tag_number show">4</span></a>
              <a className="dropdown-item folder" href="#">hw4<span className="popular_tag_number show">4</span></a>
              <a className="dropdown-item folder" href="#">exam<span className="popular_tag_number show">4</span></a>
              <a className="dropdown-item folder" href="#">logistics<span className="popular_tag_number show">6</span></a>
              <a className="dropdown-item folder" href="#">other<span className="popular_tag_number show">7</span></a>
              <a className="dropdown-item folder" href="#">fun<span className="popular_tag_number show">1</span></a>
              <a className="dropdown-item folder" href="#">lecture_2<span className="popular_tag_number show">1</span></a>
              <a className="dropdown-item folder" href="#">memes<span className="popular_tag_number show">1</span></a>
              <a className="dropdown-item folder" href="#">hw1<span className="popular_tag_number show">11</span></a>
              <a className="dropdown-item folder" href="#">hw2<span className="popular_tag_number show">6</span></a>
              <a className="dropdown-item folder" href="#">hw3<span className="popular_tag_number show">4</span></a>
              <a className="dropdown-item folder" href="#">hw4<span className="popular_tag_number show">4</span></a>
              <a className="dropdown-item folder" href="#">exam<span className="popular_tag_number show">4</span></a>
              <a className="dropdown-item folder" href="#">logistics<span className="popular_tag_number show">6</span></a>
              <a className="dropdown-item folder" href="#">other<span className="popular_tag_number show">7</span></a>
              <a className="dropdown-item folder" href="#">fun<span className="popular_tag_number show">1</span></a>
              <a className="dropdown-item folder" href="#">lecture_2<span className="popular_tag_number show">1</span></a>
              <a className="dropdown-item folder" href="#">memes<span className="popular_tag_number show">1</span></a>
            </div>
          </div>
        </div>
      </div>
);

export default FolderBar;