import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import io from "socket.io-client";
import { SOCKET_URL } from "../../config/Constants";
import PropTypes from "prop-types";
import ReactLoading from "react-loading";

function Home({ setSocket }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);

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
      <button onClick={handleSubmit} disabled={loading}>
        Acessar Tela Segura
      </button>
      {loading && (
        <div className="loading-overlay">
          <ReactLoading
            type={"spin"}
            color={"#000"}
            height={"20px"}
            width={"20px"}
          />
        </div>
      )}
    </div>
  );
}

Home.propTypes = {
  setSocket: PropTypes.func.isRequired,
};

export default Home;
