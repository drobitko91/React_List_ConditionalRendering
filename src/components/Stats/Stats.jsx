import "./Stats.scss";
import StatItem from "../StatItem/StatItem";
import DropdownList from "../DropdownList/DropdownList";
import Users from "../Users/Users";

function Stats() {
  const stats = [
    {
      id: 1,
      icon: "blue",
      title: "Text 1",
      value: "15",
    },
    {
      id: 2,
      icon: "orange",
      title: "Text 2",
      value: "323",
    },
    {
      id: 3,
      icon: "red",
      title: "Text 3",
      value: "54",
      dropdown: <DropdownList />,
    },
    {
      id: 4,
      icon: "green",
      title: "Text 4",
      value: "12",
      dropdown: <Users />,
    },
  ];

  return (
    <ul className="stats">
      {stats.map(({ id, icon, title, value, dropdown }) => (
        <StatItem id={id} title={title} icon={icon} value={value} dropdown={dropdown} />
      ))}
    </ul>
  );
}

export default Stats;
