import React,{useState, useEffect} from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    padding-top: 4rem;
    z-index: 99;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
`
const InnerDiv = styled.div`
    margin: auto;
    width: 80%;
    height: 80%;
    /* background: #fff; */
`


const Modal = ({content}) => {
    const [state, setState] = useState(false);

    useEffect(() => {
        setState(true);
    }, []);

    
    
    return (  
        <Container style={{opacity: `${state ? `1` : `0`}`}}>
            <InnerDiv>
                {content()}
            </InnerDiv>
        </Container>
    );
}
 
export default Modal;