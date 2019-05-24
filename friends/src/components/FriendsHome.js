import React from 'react';
import FriendsList from './friends/FriendsList';
import { connect } from "react-redux";
import { getFriends } from "../store/actions";


class FriendsHome extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        console.log('CDM friends home');
        this.props.getFriends();
    }

    render() {
       return (
           <div>
               <FriendsList friends={this.props.friends}/>
           </div>
        
        );
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        friends: state.friendsReducer.friends,
        error: state.friendsReducer.error,
        fetchingFriends: state.friendsReducer.fetchingFriends
    }
}

export default connect(mapStateToProps, { getFriends })(FriendsHome);