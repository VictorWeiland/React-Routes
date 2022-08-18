import { Link } from "react-router-dom";
import "./style.css";

function Header() {
  return (
    <Header>
      <h2>Sujeito Dev</h2>

      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/Sobre">Sobre</Link>
        <Link to="/Contatos">Contatos</Link>
      </div>
    </Header>
  );
}

export default Header;
