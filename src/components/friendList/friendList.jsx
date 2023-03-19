import './friendList_style.css';
import { FriendListItem } from './friendListItem.jsx';
export const FriendList = ({ friends }) => {
  return (
    <ul className="friend_list">
      {friends.map(friend => {
        return (
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
            key={friend.id}
          ></FriendListItem>
        );
      })}
    </ul>
  );
};
