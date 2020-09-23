import React, {useContext} from 'react';
import styled from '@emotion/styled';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Table from './savedEventTable';
import {SecondContext} from '../context/secondContext';
const Container = styled.div`
    background: #000;
    width: 49.28rem;
    position: absolute;
    height: 40rem;
    z-index: 25;
    left: 12.8rem;
    top: 7.4rem;
    border-radius: 13px;
    display: block;
`
const Body = styled.div`
    margin: 3rem 1.4rem 0 1.4rem;
    color: #fff;
`
const Header = styled.div`
    margin: 0 0 2rem 0;
    
`
const Head = styled.h3`
   margin-right: 30rem;
   padding: 7px 26px 7px 15px;
   background: #1a1a3d;
`
const Span2 = styled.span`
   &:hover {
       color: #fff;
   }
`
const Button = styled.button`
    border: 1px solid #0f0;
    background: none;
    left: 15.5rem;
    top: 3.3rem;
    padding: 6px 6px 6px 6px ;
    position: absolute;
    border-radius: 50%;
    outline: none;
    cursor: pointer;
    &:hover,:active {
        background: #000;
        border: 1px solid #000;
    }
`

const SavedEvents = () => {
    
    const {show, dispatch2} = useContext(SecondContext);
    
    const showForm = () => {
        dispatch2({type:'showAddEventModal', payLoad: true});
    }
    return ( 
        <Container>
            <Body>
                <Header>
                   <Head>
                       <span><FontAwesomeIcon icon='map-marked-alt' color='#0f0'/></span>&nbsp;&nbsp;Your Events
                       <Button onClick={showForm}><FontAwesomeIcon icon='pen-alt' color='#0f0'/></Button>
                    </Head>
                </Header>
                <Table/>
            </Body>
        </Container>
     );
}
 
export default SavedEvents;