import './App.css';
import cavernas from "./livros/cavernas_aco.jpg"
import Livros from './components/Livros';

const desc = `As Cavernas de Aço, de Isaac Asimov, é o primeiro romance da consagrada Série dos Robôs, uma das mais populares da ficção científica. 
A história nasceu de um desafio: Asimov queria provar para seu editor que a ficção científica não era limitada e poderia ser incorporada a qualquer gênero literário, 
inclusive nos dramas policiais. A obra foi publicada, pela primeira vez, na revista Galaxy Science Fiction, e o sucesso foi tão grande que, um ano depois, se tornou livro.`

function App() {
  return (
    <div className="App">
      <Livros
        titulo = "As Cavernas de Aço"
        autor = "Isaac Azimov"
        imagem = {cavernas}
        descricao = {desc}
      />

      <Livros
        titulo = "Sol Desvelado"
        autor = "Isaac Azimov"
        imagem = {cavernas}
        descricao = {desc}
      />

      <Livros
        titulo = "Robôs da Alvorada"
        autor = "Isaac Azimov"
        imagem = {cavernas}
        descricao = {desc}
      />

    </div>
  );
}

export default App;
