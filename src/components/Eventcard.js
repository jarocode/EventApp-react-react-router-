import React from 'react';
import styled from '@emotion/styled';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {withRouter} from 'react-router-dom';

const Container = styled.div`
    height: 22rem;
    width: 16rem;
    margin: 1.5rem;
    box-shadow: 2px 2px 4px 4px #eee;
    border-radius: 3px;
`

const Lowercard = styled.div`
    /* padding-top: 1.1rem; */
`
const LowContent = styled.div`
    margin: auto;
    height: 9rem;
    width: 15rem;
`
const H3 = styled.h3`
    margin: 0;
    z-index: 7;
    color: #fff;
    position: relative;
    font-weight: lighter;
    float: right;
`
const P1 = styled.p`
    color: #777;
    font-size: 1.5em;
    font-weight: bold;
    margin: 1rem 0rem;
`
const P2 = styled.p`
    color: #9c9c9c;
    font-size: 0.95em;
    margin: 0.6rem 0rem;
`
const Button = styled.button`
    width: 100%;
    padding: 0.5rem;
    margin-top: 1.2rem;
    background: #1a1a3d;
    border: 1px solid #1a1a3d;
    border-radius: 2px;
    color: #fff; 
`
const Span = styled.span`
    margin-right: 0.5rem;
    opacity: 0.5;
    z-index: 2;
    position: relative;
    `

const EventCard = ({name, date, image, history, id, venue}) => {
    
    const Uppercard = styled.div`
        background: url(${image}) center/cover no-repeat;
        width: 100%;
        height: 55%;
        border-radius: inherit;
        position: relative;
        padding: .5rem .5rem 0 0;
        /* z-index: 2; */
        &::after{
            content: '';
            background: #1a1a3d;
            position: absolute;
            opacity: 0.7;
            height: 100%;
            width: 100%;
            top: 0;
            z-index: 1;
        }
    `
  
const eventName = name.length > 16 ? name.replace(name.slice(12), '...') : name

const handleClick = () => {
    history.push(`/${id}`)
}

    
    return ( 
        <Container>
            <Uppercard>
                <H3>
                    <Span style= {{opacity: '1'}}>
                        <FontAwesomeIcon icon='map-marker-alt' color='#fff'/>
                    </Span>
                    {venue}
                </H3>
            </Uppercard>
            <Lowercard>
                <LowContent>
                    <P1>{eventName}</P1>
                    <P2><Span><FontAwesomeIcon icon='calendar-alt' color='#ff3434'/></Span>{date}</P2>
                    <Button onClick={handleClick}>view details</Button>
                </LowContent>
            </Lowercard>
        </Container>
     );
}
 
export default withRouter(EventCard);