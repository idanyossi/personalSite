import "./navbar.css";

export default function Navbar({ activeSelection, onNavClick }) {
  return (
    <header className="navbar">
      <nav className="navbar-container">
        <div className="Name"> Idan Yossifov </div>
        <ul className="navbar-ul">
          <li
            className={`navbar-li${
              activeSelection === "About" ? " active" : ""
            }`}
            onClick={() => onNavClick("about")}
          >
            About
          </li>
          <li
            className={`navbar-li${
              activeSelection === "Projects" ? " active" : ""
            }`}
            onClick={() => onNavClick("projects")}
          >
            Projects
          </li>
          <li className="navbar-li"> Contact </li>
        </ul>
      </nav>
    </header>
  );
}
