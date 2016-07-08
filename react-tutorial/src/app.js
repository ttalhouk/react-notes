import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
// transpile libraries
// import CommentBox from './components/comment-box'; Can remove now.

// video 3
import Layout from './layout/layout';
import BlogPage from './pages/blog';
import PicturePage from './pages/picture';
import VideoPage from './pages/video';
import {hashHistory, Router, Route, Redirect} from 'react-router';
// holds history alternatively use Browser History
const app =(
  <Router history={hashHistory}>
    <Redirect from="/" to="/blog"/>
    <Route path="/" component = {Layout}>
      <Route path="blog" component = {BlogPage} />
      <Route path="picture" component = {PicturePage} />
      <Route path="video" component = {VideoPage} />
    </Route>
  </Router>
)

jQuery(function() {
  ReactDOM.render(
    app,
    document.getElementById('comment-box'),
    function(){
      console.time('react-app')
    }
  );
})
