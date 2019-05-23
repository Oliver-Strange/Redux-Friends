import React from 'react';
import FriendsList from './friends/FriendsList';
import { connect } from "react-redux";
import { getFriends } from "../store/actions";


class FriendsHome extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('CDM friends home');
        this.props.getFriends();
    }

    render() {
        if (this.props.fetchingFriends) {
            return <h2>Finding Friends</h2>
        }
       return (
           <div>
               <FriendsList friends={this.props.friends}/>
           </div>
        
        );
    }
}

const mapStateToProps = state => {
    return {
        friends: state.friendsReducer.friends,
        error: state.friendsReducer.error,
        fetchingFriends: state.friendsReducer.fetchingFriends
    }
}

export default connect(mapStateToProps, { getFriends })(FriendsHome);