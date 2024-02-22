

const Livros = ({titulo, autor, imagem, descricao}) => {
  return (
    <div class="cardBook">
            <h3>{titulo}</h3>
            <p>{autor}</p>

            <img className="card-book_img" src={imagem} alt='Capa do livro isso ai mermo'/>

            <p>
                {descricao}
            </p>
        </div>
  )
}

export default Livros