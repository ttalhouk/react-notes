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
