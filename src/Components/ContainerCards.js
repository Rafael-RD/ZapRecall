import styled from "styled-components";
import Cards from "./Cards";


export default function ContainerCards({responderApp, deck}){
    
    return (
        <DivCards>
            {deck.map((e,i)=><Cards key={i} n={i+1} question={e.question} answer={e.answer} responderApp={responderApp} />)}
        </DivCards>
    )
}

const DivCards=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
