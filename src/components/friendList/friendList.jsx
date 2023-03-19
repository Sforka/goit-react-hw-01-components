import PropTypes from "prop-types"
import css from './friendList.module.css';
import { FriendListItem } from './friendListItem.jsx';
export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friend_list}>
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

FriendList.propTypes = {
  friends:PropTypes.arrayOf().isRequired,
};
