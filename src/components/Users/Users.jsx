import "./Users.scss";
import User from "../../svg/users.svg";

function Users() {
  return (
    <ul className="stats__dropdown-users">
      <li>
        <p className="user-ava">
          <img className="user" src={User} alt="icon" />
        </p>
        <p className="user-name">Name</p>
      </li>
      <li>
        <p className="user-ava">
          <img className="user" src={User} alt="icon" />
        </p>
        <p className="user-name">Name</p>
      </li>
      <li>
        <p className="user-ava">
          <img className="user" src={User} alt="icon" />
        </p>
        <p className="user-name">Name</p>
      </li>
      <li>
        <p className="user-ava">
          <img className="user" src={User} alt="icon" />
        </p>
        <p className="user-name">Name</p>
      </li>
    </ul>
  );
}

export default Users;
