import css  from '../../components/profile/Profile.module.css';
export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.profile_description}>
        <img src={avatar} alt="User avatar" className={css.profile_avatar} />
        <p className={css.profile_name}>{username}</p>
        <p className={css.profile_tag}>{tag}</p>
        <p className={css.profile_location}>{location}</p>
      </div>
      <ul className={css.profile_stats}>
        <li className={css.profile_stats_item}>
          <span className={css.profile_label}>Followers</span>
          <span className={css.profile_quantity}>{stats.followers}</span>
        </li>
        <li className={css.profile_stats_item}>
          <span className={css.profile_label}>Views</span>
          <span className={css.profile_quantity}>{stats.views}</span>
        </li>
        <li className={css.profile_stats_item}>
          <span className={css.profile_label}>Likes</span>
          <span className={css.profile_quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
