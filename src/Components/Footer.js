import styled from "styled-components"
import { icones, iconesDataTest } from "../assets/icones";

export default function Footer({ respostas, tamDeck }) {
    //respostas: 0=não respondida, 1=zap, 2=quase, 3=falhou
    function Resultado() {
        if (respostas.length === tamDeck && tamDeck !== 0) {
            if (respostas.includes(3)) {
                //falha
                return (
                    <ContainerResultado data-test="finish-text" >
                        <ContainerImagemResultado>
                            <img src="assets/sad.png" alt="Sad" />
                            <span>Putz...</span>
                        </ContainerImagemResultado>
                        <TextoResultado>Ainda faltam alguns... Mas não desanime!</TextoResultado>
                    </ContainerResultado>
                )
            } else {
                //sucesso
                return (
                    <ContainerResultado data-test="finish-text" >
                        <ContainerImagemResultado>
                            <img src="assets/party.png" alt="Party" />
                            <span>Parabens!</span>
                        </ContainerImagemResultado>
                        <TextoResultado>Você não esqueceu de nenhum flashcard!</TextoResultado>
                    </ContainerResultado>
                )
            }

        }
    }

    return (
        <ContainerFooter data-test="footer">
            {Resultado()}
            <TextoConcluidos>{`${respostas.length}/${tamDeck} Concluídos`}</TextoConcluidos>
            <ContainerRespostas>
                {respostas.map((e, i) => <Imagem data-test={iconesDataTest[e]} key={i} src={icones[e]} />)}
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

const ContainerResultado=styled.div`
    display: flex;
    flex-direction: column;
    height: fit-content;
    width: fit-content;
    align-items: center;
`;

const ContainerImagemResultado = styled.div`
    display: flex;
    margin-bottom: 10px;
    align-items: center;

    img{
        width: 23px;
        height: auto;
        margin-right: 10px;
    }

    span{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        color: #333333;
    }
`;

const TextoResultado=styled.span`
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    text-align: center;
    color: #333333;
    margin-bottom: 10px;
    word-wrap: break-word;
    max-width: 200px;
`;

const TextoConcluidos = styled.span`
    font-family: 'Recursive', sans-serif;
    font-weight: 400;
    font-size: 18px;
    color: #333333;    
    text-transform: uppercase;
`;

const ContainerRespostas = styled.div`
    display: flex;
    align-items: center;
    margin-top: 5px;
`;

const Imagem = styled.img`
    margin: 2px;
`;