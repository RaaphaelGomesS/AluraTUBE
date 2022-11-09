import react from "react";
import config from "../config.json";
import { CSSReset } from "../CSSReset";
import Header from "../src/components/header/Header";
import Menu from "../src/components/menu/Menu";
import Rodape from "../src/components/rodape/rodape";
import Timeline from "../src/components/timeline/Timeline";

function HomePage() {

  const [valorDoFiltro, setValorDoFiltro] = react.useState("");

  return (
    <>
      <CSSReset />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro}/>
        <main style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <Header />
          <Timeline searchValue={valorDoFiltro} playlists={config.playlists} />
        </main>
        <Rodape seguindo={config.seguindo} />
      </div>
    </>
  );
}

export default HomePage;
