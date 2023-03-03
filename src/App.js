import { useState } from "react"
import styled from "styled-components"
import deck from "./assets/decks"
import Footer from "./Components/Footer"
import LandingPage from "./Components/LandingPage"
import Main from "./Components/Main"

export default function App() {
  const tamDeck=deck.length;
  const [renderRespostas, setRenderRespostas] = useState([]);
  const [jogando, setJogando]=useState(false);

  function responderApp(resp) {
    setRenderRespostas([...renderRespostas, resp]);
  }

  return (
    <ContainerApp>
      <LandingPage jogando={jogando} setJogando={setJogando} />
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