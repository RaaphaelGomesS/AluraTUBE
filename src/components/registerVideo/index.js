import react from "react";
import { StyledRegisterVideo } from "./style";
import { createClient } from "@supabase/supabase-js";

function useForm(propsDoForm) {
  const [values, setValues] = react.useState(propsDoForm.initialValues);
  return {
    values,
    handleChange: (e) => {
      const value = e.target.value;
      const name = e.target.name;
      setValues({
        ...values,
        [name]: value,
      });
    },
    clearForm() {
      setValues({});
    },
  };
}

const PROJECT_URL = "https://nhwibwgqmqervdmyedzx.supabase.co";
const PUBLIC_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5od2lid2dxbXFlcnZkbXllZHp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgyNjQ5MDAsImV4cCI6MTk4Mzg0MDkwMH0.eDToZzIloQU6thNP9uDQHVazBb-9C5I54Zxnl-yJ2YY";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

const getThumbnail = (url) => {
  let videoId = url.split("v=")[1];
  const ampersandPosition = videoId.indexOf("&");
  if (ampersandPosition !== -1) {
    videoId = videoId.substring(0, ampersandPosition);
  }
  return `https://img.youtube.com/vi/${videoId}/0.jpg`;
};

function RegisterVideo() {
  const formCadastro = useForm({
    initialValues: { titulo: "", url: "" , playlist: ""},
  });
  const [formVisivel, setFormVisivel] = react.useState(false);
  return (
    <StyledRegisterVideo>
      <button
        className="add-video"
        onClick={() => {
          setFormVisivel(true);
        }}
      >
        +
      </button>
      {formVisivel ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            supabase
              .from("video")
              .insert({
                title: formCadastro.values.titulo,
                url: formCadastro.values.url,
                thumb: getThumbnail(formCadastro.values.url),
                playlist: formCadastro.values.playlist,
              })
              .then((response) => {
                console.log(response);
              })
              .catch((error) => {
                console.log(error);
              });
            setFormVisivel(false);
            formCadastro.clearForm();
          }}
        >
          <div>
            <button
              type="button"
              className="close-modal"
              onClick={() => {
                setFormVisivel(false);
              }}
            >
              x
            </button>
            <input
              placeholder="Titulo do Vídeo"
              name="titulo"
              value={formCadastro.values.titulo}
              onChange={formCadastro.handleChange}
            />
            <input
              placeholder="URL"
              name="url"
              value={formCadastro.values.url}
              onChange={formCadastro.handleChange}
            />

            <select
              name="playlist"
              id="playlist"
              value={formCadastro.values.playlist}
              onChange={formCadastro.handleChange}
            > 
              <option value="Programação">Programação</option>
              <option value="Jogos">Jogos</option>
              <option value="Cultura pop">Cultura pop</option>
            </select>

            <button type="submit">Cadastrar</button>
          </div>
        </form>
      ) : (
        false
      )}
    </StyledRegisterVideo>
  );
}

export default RegisterVideo;
