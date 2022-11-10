import React from "react";
import config from "../config.json";
import Menu from "../src/components/Menu";
import Rodape from "../src/components/rodape";
import Header from "../src/components/header";
import Timeline from "../src/components/Timeline";

function HomePage() {
    const [valorDoFiltro, setValorDoFiltro] = React.useState("");

    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
            }}>
                
                <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
                <main>
                    <Header />
                <Timeline searchValue={valorDoFiltro} playlists={config.playlists}>
                    Conteúdo
                </Timeline>
                </main>
                <Rodape seguindo={config.seguindo}/>
            </div>
        </>
    );
}

export default HomePage

