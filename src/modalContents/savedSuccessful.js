import React, {useContext, useState, useEffect} from 'react';
import styled from '@emotion/styled';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import  {SecondContext} from '../context/secondContext';
import loader from '../loaders/25.gif'

const Container = styled.div`
    width: 25rem;
    height: 17rem;
    background: #fff;
    margin: 7rem auto auto auto;
    box-shadow: 1px 1px 1px 1px #000, -1px -1px 1px 1px #000;
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
const Div = styled.div`
    position: relative;
`

const Div2 = styled.div`
    width: 20%;
    height: 100%;
    margin: auto;
    background: #0f0;
    padding: 1rem;
    border-radius: 50%;
`
const H1 = styled.h1`
    position: absolute;
    margin: -1.5rem 0 0 22rem;
    cursor: pointer;
    color: #aaa;
    &:hover{
        color: red;
    }
`
    
const SavedSuccessful = () => {
    const [state, setState] = useState(false);
     
    useEffect(() => {
        setTimeout(() => {
            setState(true);
        }, 5000)
     
    }, [])
    
    return ( 
        <Container>
            <Content>
                <Div>
                    <H1>&times;</H1>
                   { !state?<img src={loader} alt=""/> :
                    <Div2>
                        <span><FontAwesomeIcon icon="check" size="4x" color="#fff"/></span>
                    </Div2>}
                </Div> 
                {state? <h1 style={{color: '#666'}}>event saved!!</h1> :
                <h1 style={{color: '#666'}}>please wait...</h1>}
                { state ? <Button>View events</Button> :
                <Button>Close</Button>}
            </Content>
        </Container>
     );
}
 
export default SavedSuccessful;