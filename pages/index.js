import config from "../config.json";
import { CSSReset } from "../src/components/cssrest/CSSReset";
import Header from "../src/components/header/Header";
import Menu from "../src/components/menu/Menu";
import Rodape from "../src/components/rodape/rodape";
import Timeline from "../src/components/timeline/Timeline";

function HomePage() {
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
        <Menu />
        <main style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <Header />
          <Timeline playlists={config.playlists} />
        </main>
        <Rodape seguindo={config.seguindo} />
      </div>
    </>
  );
}

export default HomePage;
