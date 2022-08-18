import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
      <h1>Bem vindo a pagina Home</h1> <br />
      <br />
      <Link to="/Sobre">Sobre</Link> <br />
      <br />
      <Link to="/Contatos">Contatos</Link>
    </div>
  );
}

export default Home;
