import React, { Component } from 'react';
import './App.css';
import UserProfile from './userProfile/user_profile';
import FriendList from './friendsList/friend_list';


class App extends Component {
  constructor(props){
    super(props);
    this.data = this.props.data;
  }
  createHeader(user){
    return (
        <header className="topHeader">
          <h1 className="title">Super Blog!</h1>
          <UserProfile user={user}/>
        </header>
    );
  }
 

  displayBlogList(blogs){
    return blogs.map( (singleBlog, index) => this.displaySingleBlogSummary(singleBlog, index))
  }
  displaySingleBlogSummary(post, index){
    return (
      <div className="post" key={index}>
        <div className="postTitle">{post.title}</div>
        <article>{post.content}</article>
      </div>
    )
  }
  render() {
    console.log('data: ',this.data);
    return (
      <div className="App">
        {this.createHeader(this.data.user)}
        {this.createFriendList(this.data.user.friendsList)}
        <main>
          <div id="topPosts">
            <h3>Top Posts:</h3>
            {this.displayBlogList(this.data.pageData.topPosts)}
          </div>
        </main>
      </div>
    );
  }
}

export default App;