import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SecureScreen.css";

function SecureScreen({ socket }) {

  const navigate = useNavigate();

  useEffect(() => {

    if(!socket){
      navigate('/home');
    }

    socket.emit("bloqueia", (response) => {
      console.log(response.liberado);

      if (response.destino !== "secure") {
        navigate('/'+destino);
      }
    });
  }, []);

  const handleSubmit = async () => {
    socket.emit('liberatela', socket.id);
    navigate("/home");
  }

  return (
    <div className="secure">
      <h1>Você está acessando a tela segura</h1>
      <button onClick={()=>handleSubmit()}>Sair</button>
    </div>
  );
}

export default SecureScreen;
