import { Link } from "react-router-dom";

function Contatos() {
  return (
    <div className="Contatos">
      <h1>Contatos</h1>
      <br />
      <br />
      <span>Telefone: (xx)xxxx-xxxx</span>
      <br />
      <br />
      <Link to="/">Pag Home</Link> <br />
      <br />
      <Link to="/Sobre">Sobre</Link>
    </div>
  );
}

export default Contatos;
