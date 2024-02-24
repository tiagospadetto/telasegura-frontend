import React from "react";
import { useNavigate } from "react-router-dom";
import io from "socket.io-client";
import { SOCKET_URL } from "../../config/Constants";
import PropTypes from "prop-types"; // Importe PropTypes

function Home({ setSocket }) {
  const navigate = useNavigate();

  const handleSubmit = () => {
    const socket = io.connect(SOCKET_URL);

    socket.emit("bloqueia", (response) => {
      console.log(response.liberado);

      if (response.liberado) {
        navigate("/secure");
      } else {
        navigate("/block");
      }
    });

    setSocket(socket);
  };

  return (
    <div className="home">
      <h1>Bem vindo!</h1>
      <button onClick={handleSubmit}>Acessar Tela Segura</button>
    </div>
  );
}

Home.propTypes = {
  setSocket: PropTypes.func.isRequired,
};

export default Home;
