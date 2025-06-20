import "./navbar/navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <nav className="navbar-container">
        <div className="Name"> Idan </div>
        <ul className="navbar-ul">
          <li className="navbar-li"> About </li>
          <li className="navbar-li"> Projects </li>
          <li className="navbar-li"> Contact </li>
        </ul>
      </nav>
    </header>
  );
}
