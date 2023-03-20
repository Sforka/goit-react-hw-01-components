import PropTypes from 'prop-types';
import css from './friendList.module.css';
export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.friendList_item}>
      {isOnline === true ? (
        <span className={css.friendList_green}></span>
      ) : (
        <span className={css.friendList_red}></span>
      )}
      <img
        className={css.friendList_avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={css.friendList_name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
