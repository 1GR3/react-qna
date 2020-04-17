import React, { Component } from 'react';
import $ from'jquery';

class OldLogic extends React.Component {

  componentDidMount() {
    $(document).ready(function(){  
      $("feed-item-qna article").click(function(){
        $("body").toggleClass("feed_collapsed");
      });
      
      $("#get_back").click(function(){
        $("body").toggleClass("feed_collapsed");
      });
      
      $("#colapse_feed").click(function(){
        $("body").toggleClass("feed_collapsed");
      });
      $("#expand_feed").click(function(){
        $("body").toggleClass("feed_collapsed");
      });
      
      $("#disable_history").click(function(){
        $(".progress-timeline").toggleClass("invisible");
      });
      
      $("#referral-code").click(function(){
        alert("Copied to clipboard");
      });
      
      $("#sm_up").click(function(){
        $("body").toggleClass("special-mentions-open");
      });
      $("#sm_down").click(function(){
        $("body").toggleClass("special-mentions-open");
      });
      
      $(function () {
        $("[data-toggle='tooltip']").tooltip();
      });
  
      $("#create-folder-tags .folder-tag").click(function(){
        $(this).toggleClass("selected");
      });
      $(".favorite-btn").click(function(){
        $(this).toggleClass("icon-star-outline icon-star-full");
      });
      $('#datepicker').datepicker({
        uiLibrary: 'bootstrap4'
      });
      
      $('.dropdown-submenu span.link').on("click", function(e){
		    $(this).next('ul').toggle();
		    e.stopPropagation();
		    e.preventDefault();
		  });
		  $('#similarContentButton').on("click", function(e){
			  $(this).text(function(i, text){
          return text === "Show" ? "Hide" : "Show";
      	})
        $('#similarContent').toggle();
      });
		  $("#search_tips_toggle").on("click", function(e){
				$("body").toggleClass("serchbar-open");
        $('#search_tips_holder').toggleClass("open");
      });
    });
  };
  
  render() {
  }
}