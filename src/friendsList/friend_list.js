import React from 'react'
import UserProfile from '../userProfile/user_profile'

const createFriendList = (friends) =>{
    
    const friendsOnline = friends.reduce( (count, singleFriend) => {
        return count + (singleFriend.status === 'online' ? 1 : 0);
    }, 0);
    console.log('online: ' + friendsOnline);
    return (
        <aside id="friendList">
        <div className="friendTab">
            <div className="friendList-online" style={{ backgroundColor: `rgba(${(friendsOnline ? '0,255,0,.5': '175,175,175,.5')}`}}>
            {friendsOnline}
            </div>
        </div>
        {friends.map( (friend) => <UserProfile user = {friend}/>)}
        </aside>
    )
    }