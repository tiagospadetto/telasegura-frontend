import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function BlockScreen({ socket }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!socket) {
      navigate("/home");
    } else {
      acessa();
    }
  }, [socket]);

  const acessa = async () => {
    socket.on("acessa", (data) => {
      navigate("/secure");
    });
  };

  const handleSubmit = () => {
    liberaTela();
  };

  const liberaTela = () => {
    socket.emit("liberaTelaBlock", socket.id);
    navigate("/home");
  };

  return (
    <div className="block">
      <h1>Desculpe! Existe outro usuário acessando a Tela Segura</h1>
      <h2>
        Aguarde nessa tela, você será redirecionado assim que ela estiver livre
      </h2>
      <h2>Não deseja aguardar?</h2>
      <button onClick={handleSubmit}>Voltar para home</button>
    </div>
  );
}

export default BlockScreen;
