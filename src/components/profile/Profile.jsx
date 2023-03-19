import "./profile_styles.css"
export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className="profile">
      <div className="profile_description">
        <img src={avatar} alt="User avatar" className="profile_avatar" />
        <p className="profile_name">{username}</p>
        <p className="profile_tag">{tag}</p>
        <p className="profile_location">{location}</p>
      </div>
      <ul className="profile_stats">
        <li className="profile_stats_item">
          <span className="profile_label">Followers</span>
          <span className="profile_quantity">{stats.followers}</span>
        </li>
        <li className="profile_stats_item">
          <span className="profile_label">Views</span>
          <span className="profile_quantity">{stats.views}</span>
        </li>
        <li className="profile_stats_item">
          <span className="profile_label">Likes</span>
          <span className="profile_quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
