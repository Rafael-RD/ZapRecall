import { useState } from "react";
import styled from "styled-components";
import icones from "../assets/icones";

export default function Cards({ n, question, answer, responderApp }) {
    const [virada, setVirada] = useState(false);
    const [selecionada, setSelecionada] = useState(false);
    const [cor, setCor] = useState('#333333');
    const [resposta, setResposta] = useState(0);


    function responder(opcao) {
        setVirada(false);
        setSelecionada(false);
        switch (opcao) {
            case 'nao':
                setCor('#FF3030');
                setResposta(3);
                responderApp(3);
                break;

            case 'quase':
                setCor('#FF922E');
                setResposta(2);
                responderApp(2);
                break;

            case 'lembrei':
                setCor('#2FBE34');
                setResposta(1);
                responderApp(1);
                break;

            default:
                setCor('#333333');
                setResposta(0);
                responderApp(0);
                break;
        }
    }


    return (
        <Carta>
            <CartaPergunta cor={cor} selecionada={selecionada} >
                <span>{`Pergunta ${n}`}</span>
                <img onClick={() => setSelecionada(true)} src={icones[resposta]} alt="Play" />
            </CartaPergunta>
            <CartaFrente selecionada={selecionada} virada={virada} >
                <span>{question}</span>
                <img onClick={() => setVirada(true)} src="assets/seta_virar.png" alt="Virar" />
            </CartaFrente>
            <CartaTraseira selecionada={selecionada} virada={virada} >
                <span>{answer}</span>
                <ContainerBotoes>
                    <BotaoNaoLembrei onClick={() => responder('nao')}>Não lembrei</BotaoNaoLembrei>
                    <BotaoQuaseNaoLembrei onClick={() => responder('quase')}>Quase não lembrei</BotaoQuaseNaoLembrei>
                    <BotaoZap onClick={() => responder('lembrei')}>Zap!</BotaoZap>
                </ContainerBotoes>
            </CartaTraseira>
        </Carta>
    )
}

const Carta = styled.div`
    margin-bottom: 20px;
    width:fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    `;

const CartaPergunta = styled.div`
    display: ${props => props.selecionada ? 'none' : 'flex'};
    background: #FFFFFF;
    padding: 15px;
    width: 300px;
    height: 65px;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    
    span{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        color: ${props => props.cor};
        text-decoration: ${props => props.cor !== '#333333' && 'line-through'};
    }
    
    img{
        width: 23px;
        height: auto;
    }
    `;


const CartaBase = styled.div`
    backface-visibility: hidden;
    position: relative;
    display: ${props => props.selecionada ? 'flex' : 'none'};
    flex-direction: column;
    background: #FFFFD4;
    width: 80vw;
    max-width: 400px;
    min-height: 100px;
    padding: 18px 15px 10px 15px;
    border-radius: 5px;
    
    span {
        font-family: 'Recursive', sans-serif;
        font-weight: 400;
        font-size: 18px;
        color: #333333;
        margin-bottom: 40px;
    }

    img {
        width: 30px;
        height: 20px;
        position: absolute;
        right: 15px;
        bottom: 6px;
    }
`;


const CartaFrente = styled(CartaBase)`
    transform: ${props => props.virada && 'rotateY(180deg)'};
    display:  ${props => props.virada && 'none'};
    
`;

const CartaTraseira = styled(CartaBase)`
    transform: ${props => !props.virada && 'rotateY(180deg)'};
    display: ${props => !props.virada && 'none'};
`;

const ContainerBotoes = styled.div`
    display: flex;
    justify-content: space-between;
`;

const BotaoNaoLembrei = styled.button`
    border: none;
    border-radius: 5px;
    min-width: 85px;
    width: 30%;
    height: 40px;
    background-color: #FF3030;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    color: #FFFFFF;
`;
const BotaoQuaseNaoLembrei = styled.button`
    border: none;
    border-radius: 5px;
    min-width: 85px;
    width: 30%;
    height: 40px;
    background-color: #FF922E;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    color: #FFFFFF;
`;
const BotaoZap = styled.button`
    border: none;
    border-radius: 5px;
    min-width: 85px;
    width: 30%;
    height: 40px;
    background-color: #2FBE34;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    color: #FFFFFF;
`;