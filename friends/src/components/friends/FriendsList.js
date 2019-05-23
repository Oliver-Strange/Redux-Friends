import React from "react";
import FriendsContainer from "./FriendContainer";
import { connect } from "tls";

const FriendsList = props => {
  console.log(props);
  return (
    <div>
      {props.friends.map(friend => {
        return <FriendsContainer key={friend.id} friend={friend} />
    })}
    </div>
  );
};

export default FriendsList;
