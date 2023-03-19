import { RandomColor } from '../../utils/randomColour.js';
import css from "./statistics_styles.css"
export const Statistics = ({ title, stats }) => {
  
  return (
    <section className="statistics">
      <h2 className="statistics_title">{title}</h2>
      <ul className="statistics_list">
        {stats.map(({ id, label, percentage }) => (
          <li
            className="statistics_item"
            key={id}
            style={{ background: `#` + RandomColor() }}
          >
            <span className="statistics_label">{label}</span>
            <span className="statistics_percentage">{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
