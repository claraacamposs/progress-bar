import "./styles.css";

export default function App() {
  return (
    <div>
      <ol className="progress" data-steps="6">
        <li className="done">
          <span className="name">Incrição</span>
          <span className="status">Concluído!</span>
          <span className="step"></span>
        </li>
        <li className="done">
          <span className="name">Seleção</span>
          <span className="status">01/07 até 07/07</span>
          <span className="step"></span>
        </li>
        <li>
          <span className="name">Indicados</span>
          <span className="status">08/07 até 30/08</span>
          <span className="step"></span>
        </li>
        <li>
          <span className="name">Votação</span>
          <span className="status">01/09 até 30/10</span>
          <span className="step"></span>
        </li>
        <li>
          <span className="name">Evento de Premiação</span>
          <span className="status">12/12/22</span>
          <span className="step"></span>
        </li>
        <li>
          <span className="name">Divulgação dos resultados</span>
          <span className="status">13/12/22</span>
          <span className="step"></span>
        </li>
      </ol>
    </div>
  );
}
