import styled from "styled-components";

const StyledRodape = styled.div`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  .container{
    display: flex;
    justify-content: center;
    padding-bottom: 10px;
    width: 100%;
  }

  .follow {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20%;
  }
`;

function Rodape(props) {
  const contasSeguidas = Object(props.seguindo);
  console.log(contasSeguidas);
  return (
    <StyledRodape>
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
