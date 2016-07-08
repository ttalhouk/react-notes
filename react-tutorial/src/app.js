import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
// transpile libraries
import CommentBox from './components/comment-box'


jQuery(function() {
  ReactDOM.render(
    <CommentBox />,
    document.getElementById('comment-box'),
    function(){
      console.time('react-app')
    }
  );
})
