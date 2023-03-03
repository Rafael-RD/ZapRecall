import styled from "styled-components"

export default function LandingPage({jogando, setJogando}){
    return(
        <LP jogando={jogando} >
            <img src="assets/logo.png" alt="Logo" />
            <span>ZapRecall</span>
            <button data-test="start-btn" onClick={()=>setJogando(true)} >Iniciar Recall!</button>
        </LP>
    )
}

const LP=styled.div`
    display: ${({jogando})=>jogando ? 'none' : 'flex'};
    flex-direction: column;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
    background-color: #FB6B6B;
    align-items: center;
    justify-content: center;

    img{
        width: 15vw;
        height: auto;
        margin-bottom: 30px;
    }

    span{
        font-family: 'Righteous';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        letter-spacing: -0.012em;
        color: #FFFFFF;
        margin-bottom: 40px;
    }

    button{
        background: #FFFFFF;
        border: 1px solid #D70900;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        text-align: center;
        color: #D70900;
        width: 246px;
        height: 54px;
        cursor: pointer;
    }
`;