import React from 'react';
import FriendsContainer from './FriendsContainer';

const FriendsList = props => {
    console.log(props);
    return (
        <div>
            {props.friends.map((friend, index) =>(
                <FriendsContainer
                    key={index}
                    name={friend.name}
                    age={friend.age}
                    email={friend.email}
                />
            ))}
        </div>
    )
}

export default FriendsList;