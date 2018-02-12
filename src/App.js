import React, { Component } from 'react';
import './App.css';
import UserProfile from './userProfile/user_profile';
import FriendList from './friendsList/friend_list';
import BlogSummary from './blog/blog_summary'

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
    return blogs.map( (blogs, index) => <BlogSummary post = {blogs} key = {index}/>)
  }

  render() {
    return (
      <div className="App">
        {this.createHeader(this.data.user)}
        <FriendList friends={this.data.user.friendsList}/>
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