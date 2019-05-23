import React from "react";
import FriendsContainer from "./FriendContainer";

const FriendsList = props => {
  console.log(props);
  return (
    <div>
      {props.friends.map((friend, index) => (
        <FriendsContainer key={index} friend={friend} />
      ))}
    </div>
  );
};

export default FriendsList;
