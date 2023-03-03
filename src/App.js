import { useState } from "react"
import styled from "styled-components"
import deck from "./assets/decks"
import icones from "./assets/icones"
import Footer from "./Components/Footer"
import Main from "./Components/Main"

export default function App() {
  const tamDeck=deck.length;
  const [renderRespostas, setRenderRespostas] = useState([]);

  function responderApp(resp) {
    //utilizar caminho para imagem no renderRespostas
    setRenderRespostas([...renderRespostas, icones[resp]]);
    switch (resp) {
      case 1:
        //Lembrei

        break;

      case 2:
        //Quase
        
        break;

      case 3:
        //Não
        
        break;

      default:
        break;
    }

  }

  return (
    <ContainerApp>
      <Main responderApp={responderApp} deck={deck} />
      <Footer respostas={renderRespostas} tamDeck={tamDeck} />
    </ContainerApp>
  )
}

const ContainerApp = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #FB6B6B;
  align-items: center;
  width:100%;
  height: 100vh;
  max-height:100vh;
`;