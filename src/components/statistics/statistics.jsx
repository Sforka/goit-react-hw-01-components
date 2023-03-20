import PropTypes from "prop-types"
import { RandomColor } from '../../utils/randomColour.js';
import css from "./statistics.module.css"
export const Statistics = ({ title, stats }) => {
  
  return (
    <section className={css.statistics}>
      <h2 className={css.statistics_title}>{title}</h2>
      <ul className={css.statistics_list}>
        {stats.map(({ id, label, percentage }) => (
          <li
            className={css.statistics_item}
            key={id}
            style={{ background: `#` + RandomColor() }}
          >
            <span className={css.statistics_label}>{label}</span>
            <span className={css.statistics_percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
  title: PropTypes.string,
};
