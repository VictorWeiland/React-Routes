import { Link } from "react-router-dom";

function Sobre() {
  return (
    <div className="Sobre">
      <h1>Pag sobre a empresa</h1>
      <br />
      <br />
      <Link to="/">Pag Home</Link> <br />
      <br />
      <Link to="/Contatos">Contatos</Link>
    </div>
  );
}

export default Sobre;
