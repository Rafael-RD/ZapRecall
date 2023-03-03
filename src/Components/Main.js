import styled from "styled-components";
import ContainerCards from "./ContainerCards";
import Logo from "./Logo";

export default function Main({responderApp, deck}){


    return (
        <ContainerMain>
            <Logo />
            <ContainerCards responderApp={responderApp} deck={deck} />
        </ContainerMain>
    )
}





const ContainerMain=styled.main`
  background-color: #FB6B6B;
  height: 100%;
  max-width: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 15px;
  overflow-y: scroll;
`;