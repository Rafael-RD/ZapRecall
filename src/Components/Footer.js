import styled from "styled-components"
import { icones, iconesDataTest } from "../assets/icones";

export default function Footer({respostas, tamDeck}) {

    return (
        <ContainerFooter data-test="footer">
            <Texto>{`${respostas.length}/${tamDeck} Concluídos`}</Texto>
            <ContainerRespostas>
                {respostas.map((e,i)=><Imagem data-test={iconesDataTest[e]} key={i} src={icones[e]} />)}
            </ContainerRespostas>
        </ContainerFooter>
    )
}

const ContainerFooter = styled.footer`
    background-color: #FFFFFF;
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: initial;
    padding: 15px 0 10px 0;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
`;

const Texto=styled.span`
    font-family: 'Recursive', sans-serif;
    font-weight: 400;
    font-size: 18px;
    color: #333333;    
    text-transform: uppercase;
`;

const ContainerRespostas=styled.div`
    display: flex;
    align-items: center;
    margin-top: 5px;
`;

const Imagem=styled.img`
    margin: 2px;
`;