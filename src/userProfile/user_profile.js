import React from 'react'

const UserProfile = (props) =>{
    let user = props.user;
    let favoriteQuoteElement= null;
    if(user.hasOwnProperty('favoriteQuotes') && user.favoriteQuotes.length>0){
      const quoteIndex = (Math.random()*user.favoriteQuotes.length)>>0;
      favoriteQuoteElement = <div className="quote">{user.favoriteQuotes[quoteIndex]}</div>
    } 
    return (
      <aside className="userProfile">
        { favoriteQuoteElement }
        <div className="avatar" style={{ backgroundImage: `url(${user.avatar})`}}>
          <figcaption className="name">{user.name}</figcaption>
        </div>     
      </aside>
    )
  }

  export default UserProfile