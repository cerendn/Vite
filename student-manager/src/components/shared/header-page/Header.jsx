import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <h2>
        {" "}
        <Link to="/"> Student Manager</Link>
      </h2>
      <nav>
        <ul>
          <li>
            <Link className="link" to={"/"}>
              Home
            </Link>
            <Link className="link" to={"/students"}>
              Students
            </Link>
            <Link className="link" to={"/students/new"}>
              New Student
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
