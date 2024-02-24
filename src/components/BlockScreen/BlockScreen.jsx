import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './BlockScreen.css'

function BlockScreen({socket}) {

  const navigate = useNavigate();

  useEffect(()=>{


    if(!socket){
      navigate('/home');
    }

    socket.on('acessa', data => {
      navigate('/secure');
    })

    return () => socket.off('receive_message')
  }, [socket])

  return (
    <div className="block">
    <h1>Desculpe! Existe outro usuário acessando a Tela Segura</h1>
    <h2>Aguarde nessa tela, você será redirecionado assim que ela estiver livre</h2>
    <h2>Não deseja aguardar?</h2>
    <button>Voltar para home</button>
  </div>
  )
}

export default BlockScreen
