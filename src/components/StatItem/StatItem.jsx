import { useState } from "react";
import "./StatItem.scss";

function StatItem({ id, title, icon, value, dropdown }) {
  const [visible, setVisible] = useState(false);

  return (
    <li key={id} onClick={() => setVisible((prevState) => !prevState)}>
      <div className="stat-item">
        <div style={{ width: "60px", height: "60px", backgroundColor: icon }}></div>
        <div className="stats-name">
          <p>{title}</p>
          <p>{value}</p>
        </div>
      </div>
      {visible && dropdown}
    </li>
  );
}
export default StatItem;
