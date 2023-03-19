export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li className="friendList_item" key={id}>
      {isOnline === true ? (
        <span
          className="friendList_status"
          style={{
            backgroundColor: 'green',
            width: 10,
            height: 10,
            display: 'block',
            borderRadius: 50,
          }}
        ></span>
      ) : (
        <span
          className="friendList_status"
          style={{
            backgroundColor: 'red',
            width: 10,
            height: 10,
            display: 'block',
            borderRadius: 50,
          }}
        ></span>
      )}
      <img
        className="friendList_avatar"
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className="friendList_name">{name}</p>
    </li>
  );
};
