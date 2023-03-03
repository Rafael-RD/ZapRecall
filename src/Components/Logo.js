import styled from "styled-components"

export default function Logo(){
    return (
        <ContainerLogo>
            <Imagem src="assets/logo.png" alt="Logo" />
            <Texto>ZapRecall</Texto>
        </ContainerLogo>
    )
}

const ContainerLogo=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: fit-content;
    margin-bottom: 15px;
`;

const Imagem=styled.img`
    height: 60px;
    width: 52px;
    margin-right: 10px;
`;

const Texto=styled.h1`
    font-family: 'Righteous', cursive;
    font-weight: 400;
    font-size: 36px;
    color: #FFFFFF;
`;