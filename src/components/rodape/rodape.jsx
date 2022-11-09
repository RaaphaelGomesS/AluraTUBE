import styled from "styled-components";

const StyledRodape = styled.div`
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  .container{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
  }

  .follow {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    width: 20px;
    text-align: center;
    margin-left: 10vh;
    margin-right: 10vh;
    margin-bottom: 2vh;
  }

  h2 {
    font-size: 16px;
    margin-left: 30px;
    margin-bottom: 10px;
    text-transform: capitalize;
  }
`;

function Rodape(props) {
  const contasSeguidas = Object(props.seguindo);
  console.log(contasSeguidas);
  return (
    <StyledRodape>
        <h2>Favoritos</h2>
        <div className="container">
      {contasSeguidas.map((conta) => {
        return (
            <a href={conta.url} className="follow">
              <img src={conta.imagem}></img>
              <span>{conta.nome}</span>
            </a>
        );
      })}
      </div>
    </StyledRodape>
  );
}

export default Rodape;
