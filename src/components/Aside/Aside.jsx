import "./Aside.scss";
import dashboard from "../../svg/dashboard.svg";
import sales from "../../svg/sales.svg";
import library from "../../svg/library.svg";
import user from "../../svg/user.svg";
import reviews from "../../svg/reviews.svg";

function Aside() {
  const links = [
    {
      id: 1,
      name: "Dashboard",
      svg: dashboard,
    },
    {
      id: 2,
      name: "Sales",
      svg: sales,
    },
    {
      id: 3,
      name: "Catalog",
      svg: library,
    },
    {
      id: 4,
      name: "Customers",
      svg: user,
    },
    {
      id: 4,
      name: "Reviews",
      svg: reviews,
    },
  ];

  let lis = links.map(({ id, name, svg }) => (
    <li className="aside-link" key={id}>
      <img className="aside-icon" src={svg} alt="icon" />
      {name}
    </li>
  ));

  return (
    <aside className="aside">
      <nav>
        <ul>{lis}</ul>
      </nav>
    </aside>
  );
}

export default Aside;
