import React from "react";
import config from "../config.json";
import Menu from "../src/components/Menu";
import Rodape from "../src/components/rodape";
import Header from "../src/components/header";
import Timeline from "../src/components/Timeline";
import { videoService } from "../src/components/services/videoService";

function HomePage() {
  const service = videoService();
  const [valorDoFiltro, setValorDoFiltro] = React.useState("");
  const [playlists, setPlaylists] = React.useState({});

  React.useEffect(() => {
    service.getAllVideos().then((dados) => {
      console.log(dados.data);
      const novasPlaylists = {};
      dados.data.forEach((video) => {
        if (!novasPlaylists[video.playlist]) {
          novasPlaylists[video.playlist] = [];
        }
        novasPlaylists[video.playlist] = [
          video,
          ...novasPlaylists[video.playlist],
        ];
      });
      setPlaylists(novasPlaylists);
    });
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <Menu
          valorDoFiltro={valorDoFiltro}
          setValorDoFiltro={setValorDoFiltro}
        />
        <main>
          <Header />
          <Timeline searchValue={valorDoFiltro} playlists={playlists}>
            Conteúdo
          </Timeline>
        </main>
        <Rodape seguindo={config.seguindo} />
      </div>
    </>
  );
}

export default HomePage;
