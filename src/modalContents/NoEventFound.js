import React, {useContext, useEffect, useState} from 'react';
import styled from '@emotion/styled';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import  {SecondContext} from '../context/secondContext';

const Container = styled.div`
    width: 25rem;
    height: 17rem;
    background: #fff;
    margin: 7rem auto auto auto;
    box-shadow: 1px 1px 1px 1px #000, -1px -1px 1px 1px #000;
    transform: translateX(-22rem);
    opacity: 0;
    transition: all 0.4s ease-in;
`
const Content  = styled.div`
    margin: 0;
    padding: 1rem  .5rem .5rem .5rem;
    text-align: center;
`
const Button = styled.button`
    width: 30%;
    margin-top: 1rem;
    height: 2.5rem;
    font-size: 1em;
    background: #1a1a3d;
    color: #fff;
    border: 2px solid #1a1a3d;
    opacity: 0.5;
    border-radius: .3rem;
    cursor: pointer;
    &:hover{
        opacity: 1;
    }
`
const Span = styled.span`
    color: #1a1a3d;
    opacity: 0.7;
`

const NoEvent = () => {
    const [state, setState] = useState(false);
    useEffect(() => {
        // setTimeout(() => {
            setState(true);
        // }, 100)
    })
    return ( 
        <Container style={{opacity: `${state && '1'}`, transform: `${state && 'translateX(0rem)'}`}}>
            <Content>
                <Span><FontAwesomeIcon icon="frown" size="5x"/></Span>
                <h1 style={{color: '#666'}}>...Sorry no Events Found!</h1>
                <Button>close</Button>
            </Content>
        </Container>
     );
}
 
export default NoEvent;