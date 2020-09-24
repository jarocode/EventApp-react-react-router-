import React, {useContext, useEffect} from 'react';
import styled from '@emotion/styled';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { MyContext } from '../context/firstContext';

const Container  = styled.div`
    & {
        position: relative;
        background: url("./img/checklist2.jpg")  center/cover no-repeat;
        z-index: -1; 
        width: 80rem;
        height: 10.35rem;

    }
    & :after {
        content: '';
        background: #ff3434;
        position: absolute;
        opacity: 0.5;
        top: 0rem;
        left: 0rem;
        height: 100%;
        width: 100%;
        z-index: -2;
    }
`
const Input = styled.input`
    margin-top: 3rem; 
    width: 20rem;
    border: none;
    border-bottom: 1px solid #ffafaf;
    background: none;
    padding-bottom: 7px;
    &:focus {
        outline: none;
    }
    &::placeholder {
        top: 0rem;
        color: #fff;
        font-weight: 900;
        font-family: 'Font Awesome solid icons'
    }
`
const Button = styled.button`
    position: absolute;
`
const Span = styled.span`
    position: absolute;
    top: 3rem;
    color: #fff;
    z-indeX: -20;
    background: none;
`

const Searchbar = () => {
    
    const {state} = useContext(MyContext)
    
    const Handle = (str) => {
         console.log(str);
    }
    
    return ( 
        <Container>
             {/* <Span><FontAwesomeIcon icon=''/></Span><Input type='text' placeholder='&#xF002;'/> */}
            {/* <Button onClick={() => Handle(state)} >+</Button> */}
            <div></div>
        </Container>
     );
}
 
export default Searchbar;