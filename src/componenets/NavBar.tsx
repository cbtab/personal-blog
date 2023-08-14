import "./styles/NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar-holder">
      <div className="navbar-name">
        <h1>cbtab</h1>
      </div>
      <div className="navbar-route">
        <ul>
          <li>Blog</li>
          <li>Projects</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
