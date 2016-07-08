// format for making a component

// in the compoent.js file

class StoryBox extends React.Component { // inherits from react base
  render(){ // render function
    return(<div>Story Box</div>); // what will be rendered using JSX
  }
}
// Note: classes are upper camel case

// To call the compoent
ReactDOM.render(
  <StoryBox/>, document.getElementByID('story-app')
);

// in HTML file
<!DOCTYPE html>
<html>
  <body>
    <div id="story-app"></div>
    <script src="vendors/react.js"></script>
    <script src="vendors/react-dom.js"></script>
    <script src="vendors/babel.js"></script>
    <script type="text/babel" src="compoents.js"></script>
  </body>
</html>


// JSX notes

...
  <div>
    <h3>Some Heading</h3>
    <p className="name">Some Paragraph</p>
  </div>
...

// is transpiled to

React.createElement(div, null,
  React.createElement(h3, null, "Some Heading"),
  React.createElement(p, {className:"name"}, "Some Paragraph") // this makes a
  // paragraph with a class = "name"
);

// Example
// render curent time
class StoryBox extends React.Component { // inherits from react base
  render(){ // render function
    const now = new Date();
    return(
      <div>
        <h3>Some Heading</h3>
        <p className="name">
          Current Time: {now.toString()} // {} render javascript
        </p>
      </div>
    ); // what will be rendered using JSX
  }
}

// Example
// render a list
class StoryBox extends React.Component { // inherits from react base
  render(){ // render function
    const topicsList = ['HTML', 'JS', 'React'];
    return(
      <div>
        <h3>Some Heading</h3>
        <ul>
          {topicsList.map(topic => <li>{topic}</li>)}
        </ul>
      </div>
    ); // what will be rendered using JSX
  }
}

// Props
// HTML Mockup
// comment container compoent
<div class="comment-box">
  <h3>Comments</h3>
  <h4 class="comment-count">2 comments</h4>
  <div class='comment-list'>
  // comment component
    <div class='comment'>
      <p class="comment-header">Anne Droid</p>
      <p class="comment-body">
        I wanna know what love is...
      </p>
      <div class="comment-footer">
        <a hres="#" class="comment-footer-delete">
          Delete Comment
        </a>
      </div>
    </div>
  //
  </div>
</div>

// comment component conversion
class Comment extends React.Component {
  render(){
    return(
      <div className='comment'>
      <p className="comment-header">Anne Droid</p>
      <p className="comment-body">
        I wanna know what love is...
      </p>
      <div className="comment-footer">
        <a hres="#" className="comment-footer-delete">
          Delete Comment
        </a>
      </div>
    </div>
  )}
}

// Comment Box converison
class CommentBox extends React.Component {
  render(){
    return(
      <div className="comment-box">
        <h3>Comments</h3>
        <h4 className="comment-count">2 comments</h4>
        <div className='comment-list'>
          <Comment
            author="Morgan McCirciut" body="cool stuff" /> // arguments to comment
          <Comment
            author="Bending Bender" body="neeto!" /> // passed as props (no commas)
        </div>
      </div>
  )}
}

// comment using props passed from comment box
class Comment extends React.Component {
  render(){
    return(
      <div className='comment'>
      <p className="comment-header">{this.props.author}</p>
      <p className="comment-body">
        {this.props.body}
      </p>
      <div className="comment-footer">
        <a hres="#" className="comment-footer-delete">
          Delete Comment
        </a>
      </div>
    </div>
  )}
}

// Comment Box converison using _getComments
class CommentBox extends React.Component {

  // Passing props from API data
  // create function that gets properties
  _getComments(){ // _ is convention for non react methods
    const commentList = [
      {id:1, author="Morgan McCirciut", body="cool stuff" },
      {id:2, author="Bending Bender", body="neeto!"}
    ]
    return commentList.map((comment) => {
      return <Comment author={comment.author} body={comment.body} key={comment.id}/>
      // dynamically pass each comment as a Comment Component
      // key keeps track of the element
    })
  }
  _getCommentTitle(commentCount){
    if (commentCount === 0) {
      return "No Comments yet";
    } else if (commentCount === 1){
      return "1 Comment";
    } else {
      return `${commentCount} Comments`;
    }
  }
  render(){
    const comments = this._getComments();
    return(
      <div className="comment-box">
        <h3>Comments</h3>
        <h4 className="comment-count">{this._getCommentTitle(comments.length)}</h4>
        <div className='comment-list'>
          {comments} // JSX renders arrays as lists automatically
        </div>
      </div>
  )}
}

// Changing state
// Indirect DOM manipulation
// Example

render(){
  if (this.state.showComments){
    // do show comments
  } else{
    // do hide comments
  }
}

// update of comments
class Comment extends React.Component {
  render(){
    return(
      <div className='comment'>
      <p className="comment-header">Anne Droid</p>
      <p className="comment-body">
        I wanna know what love is...
      </p>
      <div className="comment-footer">
        <a hres="#" className="comment-footer-delete">
          Delete Comment
        </a>
      </div>
    </div>
  )}
}

// Comment Box converison
class CommentBox extends React.Component {
  render(){
    return(
      <div className="comment-box">
        <h3>Comments</h3>
        <h4 className="comment-count">2 comments</h4>
        <div className='comment-list'>
          <Comment
            author="Morgan McCirciut" body="cool stuff" /> // arguments to comment
          <Comment
            author="Bending Bender" body="neeto!" /> // passed as props (no commas)
        </div>
      </div>
  )}
}

// comment using props passed from comment box
class Comment extends React.Component {
  render(){
    return(
      <div className='comment'>
      <p className="comment-header">{this.props.author}</p>
      <p className="comment-body">
        {this.props.body}
      </p>
      <div className="comment-footer">
        <a hres="#" className="comment-footer-delete">
          Delete Comment
        </a>
      </div>
    </div>
  )}
}

// Comment Box converison using _getComments
class CommentBox extends React.Component {
  // if setting state must use constructor
  constructor(){
    super(); // <-- must first call super
    this.state = { // <-- to update must use setState ex this.setState({showComments: true})
      showComments: false, // <-- set intial value to false to hide comments
    };
  }
  let buttonText = "Show Comments";
  if (this.state.showComments){
    buttonText = "Hide Comments";
  }

  _handleClick(){
    this.setState({
      showComments= !this.state.showComments
    });
  }

  // Passing props from API data
  // create function that gets properties
  _getComments(){ // _ is convention for non react methods
    const commentList = [
      {id:1, author="Morgan McCirciut", body="cool stuff" },
      {id:2, author="Bending Bender", body="neeto!"}
    ]
    return commentList.map((comment) => {
      return <Comment author={comment.author} body={comment.body} key={comment.id}/>
      // dynamically pass each comment as a Comment Component
      // key keeps track of the element
    })
  }
  _getCommentTitle(commentCount){
    if (commentCount === 0) {
      return "No Comments yet";
    } else if (commentCount === 1){
      return "1 Comment";
    } else {
      return `${commentCount} Comments`;
    }
  }
  render(){
    const comments = this._getComments();
    let commentNodes;
    if (this.state.showComments){
      commentNodes = <div className='comment-list'>
        {comments}
      </div>
    }
    return(
      <div className="comment-box">
        <button onClick = {this._handleClick.bind(this)}>{buttonText}</button>
        <h3>Comments</h3>
        <h4 className="comment-count">{this._getCommentTitle(comments.length)}</h4>
        {commentNodes}
      </div>
  )}
}


// Synthetic Events

class CommentForm extends React.Component {
  render(){
    return(
      <form className="comment-form" onSubmit={this._handleForm.bind(this)}>
        <label>Join the Discussion</label>
        <div className="comment-field-forms">
          <input placeholder="Name:" ref={
            (input) => this._author = input }/>
          <textarea placeholder="Comment:" ref={
            (textarea) => this._body = textarea}><textarea/>
            // refs access the input values
        </div>
        <div className="comment-form-actions">
          <button type="submit">
            Post Comment
          </button>
        </div>
      </form>
    );
  }
  _handleForm(event){
    event.preventDefault();
    let author = this._author;
    let body = this._body;

    this.props.addComment(author.value, body.value);
  }
}

class CommentBox extends React.Component {
  // if setting state must use constructor
  constructor(){
    super(); // <-- must first call super
    this.state = { // <-- to update must use setState ex this.setState({showComments: true})
      showComments: false, // <-- set intial value to false to hide comments
      comments: [
        {id:1, author="Morgan McCirciut", body="cool stuff" },
        {id:2, author="Bending Bender", body="neeto!"}
      ]
    };
  }
  let buttonText = "Show Comments";
  if (this.state.showComments){
    buttonText = "Hide Comments";
  }

  _addComment(author, body){
    const comment = {
      id: this.state.comments.length + 1,
      author,
      body
    }
    this.setState({comments: this.state.comments.concat([comment])});
    // use concat because it creates a new array instead of mutating the existing
    // array.  No supposed to directly change state.
  }

  _handleClick(){
    this.setState({
      showComments= !this.state.showComments
    });
  }

  // Passing props from API data
  // create function that gets properties
  _getComments(){ // _ is convention for non react methods
    return this.state.comments.map((comment) => { // updated to read from state
      return <Comment author={comment.author}
        body={comment.body}
        key={comment.id}
        onDelete={this._deleteComment.bind(this)}/> // pass delete method
      // dynamically pass each comment as a Comment Component
      // key keeps track of the element
    })
  }
  _getCommentTitle(commentCount){
    if (commentCount === 0) {
      return "No Comments yet";
    } else if (commentCount === 1){
      return "1 Comment";
    } else {
      return `${commentCount} Comments`;
    }
  }
  render(){
    const comments = this._getComments();
    let commentNodes;
    if (this.state.showComments){
      commentNodes = <div className='comment-list'>
        {comments}
      </div>
    }
    return(
      <div className="comment-box">
      <CommentForm _addComment={this._addComment.bind(this)} />
        <button onClick = {this._handleClick.bind(this)}>{buttonText}</button>
        <h3>Comments</h3>
        <h4 className="comment-count">{this._getCommentTitle(comments.length)}</h4>
        {commentNodes}
      </div>
  )}
}

// Getting data from a remote server
// Empty out the comments to make an empty array

class CommentBox extends React.Component {
  // if setting state must use constructor
  constructor(){
    super(); // <-- must first call super
    this.state = { // <-- to update must use setState ex this.setState({showComments: true})
      showComments: false, // <-- set intial value to false to hide comments
      comments: []
    };
  }
  let buttonText = "Show Comments";
  if (this.state.showComments){
    buttonText = "Hide Comments";
  }

  // lifecycle Events
  componentWillMount(){ // Called before component is rendered
    _fetchComments();
  }

  componentDidMount(){ // called after render method
    this._timer = setInterval(()=> this._fetchComments(), 5000);
    // adds timer to check for updates every 5 sec
  }

  componentWillUnmount(){ // called before component is to be removed from DOM
    clearInterval(this._timer); // prevent memory leaks from adding timers to
    // every form created
  }

  // ajax request for comments
  -fetchComments(){
    jQuery.ajax({
      method: get,
      url: '/api/comments',
      success: (comments) =>{
        this.setState({comments})
      }
    });
  }

  _deleteComment(comment){
      jQuery.ajax({
        method: 'delete',
        url:`/api/comments/${comment.id}`
      });
      const comments = [...this.state.comments];
      const commentIndex = comments.indexOf(comment);
      comments.splice(commentIndex, 1);
      this.setState({comments});
  }

  _addComment(author, body){
    const comment = {
      author,
      body
    }
    jQuery.post('/api/comments',{comment})
      .success(newComment => {
        this.setState({ comments: this.state.comments.concat([comment]) });
    // use concat because it creates a new array instead of mutating the existing
    // array.  No supposed to directly change state.
    });
  }

  _handleClick(){
    this.setState({
      showComments= !this.state.showComments
    });
  }

  // Passing props from API data
  // create function that gets properties
  _getComments(){ // _ is convention for non react methods
    return this.state.comments.map((comment) => { // updated to read from state
      return <Comment author={comment.author} body={comment.body} key={comment.id}/>
      // dynamically pass each comment as a Comment Component
      // key keeps track of the element
    })
  }
  _getCommentTitle(commentCount){
    if (commentCount === 0) {
      return "No Comments yet";
    } else if (commentCount === 1){
      return "1 Comment";
    } else {
      return `${commentCount} Comments`;
    }
  }
  render(){
    const comments = this._getComments();
    let commentNodes;
    if (this.state.showComments){
      commentNodes = <div className='comment-list'>
        {comments}
      </div>
    }
    return(
      <div className="comment-box">
      <CommentForm _addComment={this._addComment.bind(this)} />
        <button onClick = {this._handleClick.bind(this)}>{buttonText}</button>
        <h3>Comments</h3>
        <h4 className="comment-count">{this._getCommentTitle(comments.length)}</h4>
        {commentNodes}
      </div>
  )}
}

class Comment extends React.Component {
  render(){
    return(
      <div className='comment'>
      <p className="comment-header">{this.props.author}</p>
      <p className="comment-body">
        {this.props.body}
      </p>
      <div className="comment-footer">
        <a hres="#" className="comment-footer-delete" onClick={this._handleDelete.bind(this)}>
          Delete Comment
        </a>
      </div>
    </div>
  )}
  _handleDelete(event){
    event.preventDefault();
    if (confirm('Are You Sure?')){
      this.props.onDelete(this.props.comment);
    }
  }
}
