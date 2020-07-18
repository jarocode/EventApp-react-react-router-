import React from 'react';
import styled from '@emotion/styled';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';


const Content = styled.div`
    margin: 0 0.7rem 0 0.7rem;
`
const H5 = styled.h4`
    margin: 0.4rem 0 0 0;
    color: #fff;
    z-index: 2;
`
const H6 = styled.h6`
    margin: 0.1rem 0 0 0;
    color: #797979;
`
const P1 = styled.p`
    font-size: 0.65em;
    margin: 0.6rem 0.8rem 0 0;
    color: #fff;
    z-index: 2;
`
const P2 = styled.p`
    font-size: 0.67em;
    color: #00f;
    margin-top: 0.3rem;
    z-index: 2;
`
const Button = styled.button`
    background: #ef3434;
    border: 2px solid #fff;
    color: #fff;
    padding: 5px 10px 5px 10px;
    font-size: 0.65em;
    float: right;
    border-radius: 7px;
    margin-bottom: 0rem;
    width: 2.6rem;
    z-index: 2;
`

const EventCard = ({name, date, image, history,id}) => {
    
  const Container = styled.div`
   position: relative;
   width: 30%;
   height: 45%;
   border: none;
   border-radius: 5px;
   /* box-shadow: 3px 3px 1px 1px #dfdfdf; */
   margin-left: 1rem;
   background: url(${image}) no-repeat;
   background-size: 300px 200px;
   z-index: 1;
   &::after {
        position: absolute;
        content: '';
        height: 100%;
        width: 100%;
        z-index: -1;
        background: #3c3c5f;
        opacity: 0.65;
        top: 0;
   }

`  
const handleClick = () => {
    history.push(`/${id}`)
}

    
    return ( 
        <Container>
            <Content>
                <H5>{name}</H5>
                <H6><span></span>New boston</H6>
                <P1>
                    Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit.Fugit repellendus accusamus 
                </P1>
                <P2><span></span>{date}</P2>
                <span></span><Button onClick={handleClick}></Button>
            </Content>
        </Container>
     );
}
 
export default withRouter(EventCard);