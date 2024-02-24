import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import io from "socket.io-client";
import "./Home.css";

function Home({setSocket}) {

  const navigate = useNavigate();

  const handleSubmit = async () => {
    const socket = await io.connect('https://telasegura-backend-private.onrender.com')
    
    socket.emit("bloqueia", (response) => {
      console.log(response.liberado); 

      if (response.liberado) {
        navigate("/secure");
      }else{
        navigate("/block");
      }

    });

    setSocket(socket)
  }

  return (
    <div className="home">
      <h1>Bem vindo!</h1>
      <button onClick={()=>handleSubmit()}>Acessar Tela Segura</button>
    </div>
  );
}

export default Home;
