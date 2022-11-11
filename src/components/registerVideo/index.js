import react from "react";
import { StyledRegisterVideo } from "./style";

function useForm(propsDoForm){
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
       clearForm(){
        setValues({});
       }
    };
}

function RegisterVideo() {
    const formCadastro = useForm({
        initialValues: {titulo: "", url: ""}
    });
    const [formVisivel, setFormVisivel] = react.useState(false);
  return (
    <StyledRegisterVideo>
      <button className="add-video" onClick={()=>{setFormVisivel(true)}}>
        +
      </button>
      {formVisivel 
        ? (
            <form onSubmit={(e)=>{
                e.preventDefault();
                setFormVisivel(false);
               formCadastro.clearForm();
            }}>
                <div>
                    <button type="button" className="close-modal" onClick={()=>{setFormVisivel(false)}}>
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
                    <button type="submit">
                        Cadastrar
                    </button>
                </div>
            </form>
        ) 
        : false}
    </StyledRegisterVideo>
  );
}

export default RegisterVideo;
