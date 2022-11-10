import styled from "styled-components";
import config from "../../config.json"

const StyledRodape = styled.div`
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  .container{
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
    width: 100%;
    grid-gap: 15vh;
    margin-left: 30px;
  }

  .follow {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    width: 20px;
    text-align: center;
  }

  h2 {
    font-size: 16px;
    margin-left: 30px;
    margin-bottom: 10px;
    text-transform: capitalize;
  }
  a {
        scroll-snap-align: start;
        span {
          padding-top: 8px;
          color: ${({ theme }) => theme.textColorBase || "#222222"};
        }
      }
`;

function Rodape(props) {
  const contasSeguidas = Object(props.seguindo);
  return (
    <StyledRodape>
        <h2>Favoritos</h2>
        <div className="container">
      {contasSeguidas.map((conta, index) => {
        return (
            <a key={index} href={conta.url} className="follow">
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
