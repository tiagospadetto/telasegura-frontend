import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SecureScreen.css";

function SecureScreen({ socket }) {
  const navigate = useNavigate();
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    if (!socket) {
      navigate("/home");
    } else {
      bloqueia();
    }
  }, [socket]);

  const handleSubmit = () => {
    liberaTela();
  };

  const liberaTela = () => {
    socket.emit("liberatela", socket.id);
    navigate("/home");
  };

  const bloqueia = () => {
    socket.emit("verifica", (response) => {
      console.log(response);
      const dest = response.liberado;
      console.log(dest);

      if (dest !== "secure") {
        navigate("/" + dest);
      }
    });
  };

  return (
    <div className="secure">
      <h1>Você está acessando a tela segura</h1>
      <button onClick={handleSubmit}>Sair</button>
    </div>
  );
}

export default SecureScreen;
