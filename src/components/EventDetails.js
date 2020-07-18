import React, { useEffect, useContext } from 'react';
import styled from '@emotion/styled';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {SecondContext} from '../context/secondContext';
import Spinner from './Spinner';
import {TableContext} from '../context/TableContext';
import SuccessModal from './SuccessModal';

const Container = styled.div`
`
const Brand = styled.div`
    float: left !important;
`

const Nav = styled.nav`
   background: #3c3c5f;
   display: flex;
   color: #fff;
   justify-content: space-around;
`
const Li = styled.li`
    list-style: none;
    display: inline-block;
    padding-left: 1rem;
    margin-top: 0.5rem;
`
const Card = styled.div`
    border: 1px solid #fff;
    width: 70%;
    margin-top: 2rem !important;
    margin: auto;
`

const Name = styled.div`
    margin: 0rem 13rem 0rem 1.5rem;
    color: #fff;
    word-wrap: break-word;
`
const LowCard = styled.div`
    background: #fff;
    padding-bottom: 1rem;
    padding-top: 0.1rem;
`

const H4 = styled.h4`
    margin-left: 17rem;
    color: #3c3c5f;
`

const LongCard = styled.div`
    border: 1px solid #fff;
    box-shadow: 0px 6px 20px -3px #afafaf;
    display: grid;
    grid-template-columns: 12.99rem 12.99rem 12.99rem;
    width: 90%;
    padding: 0 0 0 0rem;
    margin: auto;
`
const Div1 = styled.div`
    text-align: center;
    
`
const Div2 = styled.div`
    border-right: 1px solid #cfcfcf;
`
const H = styled.h4`
    margin-bottom: 0;
    color: #3c3c5f;
`
const P = styled.p`
    margin-top: 10px;
    color: #afafaf;
`
const DetailDiv = styled.div`
    margin-top: 4.9rem;
`

const HeadDiv = styled.div`
    margin: 2rem;
    color: #3c3c5f;
    position: relative;
    &::after {
        position: absolute;
        left: 0;
        height: 2px;
        width: 70px;
        content: "";
        background: #ff3434;
    }
`
const DetailCard = styled.div`
    border: 1px solid #fff;
    box-shadow: 3px 3px 6px 3px #dfdfdf;
    margin: 4rem 2.2rem 0 7rem;
`
const DetailP = styled.div`
    border-bottom: 1px solid #cfcfcf; 
    padding: 0.7rem 0 1rem 0;
    color: #6f6f6f;
`
const Span1 = styled.span`
    color: #00f;
`
const Button = styled.button`
    margin: 4rem 2.4rem 0 3.3rem; 
    width: 85%;
    padding: 1rem 0 1rem 0;
    color: #fff;
    background: #00f;
    border: 1px solid #00f;
    border-radius: 7px;
`

const EventDetails = ({match}) => {
    
    const {details, dispatch2} = useContext(SecondContext); 
    const {tableData, dispatch3} = useContext(TableContext);
    
    // useEffect(() => {
    //     console.log(tableData);
    // }, [tableData])
    
    const handleSubmit = (e) => {
        e.preventDefault();
        let newEvent = details.names;
        let newType = details.types;
        let newGenre = details.genres;
        let newSubgenre = details.subGenres;
        let newCountry = details.Venues[0].country.name;
        let newCity = details.Venues[0].city.name;
        let newState = details.Venues[0].state.name;
        let newAddress = details.Venues[0].address.line1;
        let newDate = details.date.start.localDate;
        let newTime = details.date.start.localTime;
        let newTimezone = details.date.timezone;
        let bg = false;
        let data = [];
        data = [
            ...tableData, 
            {
                newEvent,
                newType,
                newGenre,
                newSubgenre,
                newCountry,
                newCity,
                newState,
                newAddress,
                newDate,
                newTime,
                newTimezone,
                newBg : !bg 
            }
        ]
        
        console.log(tableData);
        dispatch3({type: 'Add', payload: data});
        dispatch2({type: 'AddShowSuccess', payload: 'true'})
        
    }
    
    
    const CheckDetails = info => {
        let c = Object.entries(info);
        return c.every(el => Object.keys(el[1]).length !== 0);
    }
    
    
    
    const UpCard = styled.div`
    width: 100%;
    background: url(${() => CheckDetails(details) && details.image[0].url})  no-repeat;
    background-size: 710px 500px;
    padding-top: 17rem;
    padding-bottom: 3rem;
    position: relative;
    z-index: 1;
    &::after {
        position: absolute;
        content: '';
        z-index: -1;
        background: #3c3c5f;
        width: 100%;
        height: 100%;
        top: 0;
        opacity: 0.5;
    }
`
     
    console.log(details);
    useEffect(() => {
       const Details = async () => {
         const res =   await fetch(`https://app.ticketmaster.com/discovery/v2/events/${match.params.id}.json?apikey=ckkAjaoFXB0PY72OcQT2UinV6PReL8m4`);
           let result = await  res.json();
           return result ;
       }

       Details().then(res => {
        const {dates, images, name, classifications} = res;
        let venue = res._embedded.venues;
         console.log(res);
        const {genre, segment, subGenre} = classifications[0];
        dispatch2({type: 'AddVenues', payload: venue})
        dispatch2({type: 'AddDate', payload: dates})
        dispatch2({type: 'AddImage', payload: images})
        dispatch2({type: 'AddName', payload: name})
        dispatch2({type: 'AddType', payload: segment.name})
        dispatch2({type: 'AddGenre', payload: genre.name})
        dispatch2({type: 'AddSubgenre', payload: subGenre.name})
           
        });
    }, []);
    
    return ( 
        <Container>
            <Nav>
                <Brand>
                    <h2>JAROVENTS</h2>
                </Brand>
                <ul>
                    <Li>Home</Li>
                    <Li>About</Li>
                </ul>
                </Nav>
                {details.showSuccess === 'true' && <SuccessModal/>}
                { !CheckDetails(details) ? <Spinner/> :
                <Card>
                    <UpCard>
                       <Name>
                          <h1>{details.names}</h1>
                        </Name> 
                    </UpCard>
                    <LowCard>
                        <H4><Span1><FontAwesomeIcon icon='map-marked-alt'/></Span1>&nbsp;&nbsp;Event Categories</H4>
                        <LongCard>
                                <Div1>
                                    <Div2>
                                        <H>TYPE</H>
                                        <P>{details.types}</P>
                                    </Div2>
                                </Div1>
                                <Div1>
                                    <Div2>
                                        <H>GENRE</H>
                                        <P>{details.genres}</P>
                                    </Div2>
                                </Div1>
                                <Div1>
                                    <Div2>
                                        <H>SUBGENRE</H>
                                        <P>{details.subGenres}</P>
                                    </Div2>
                                </Div1>
                            </LongCard>
                             <DetailDiv>
                                <HeadDiv>
                                    <h2>
                                        <Span1><FontAwesomeIcon icon='map-marker-alt'/>&nbsp;&nbsp;</Span1>Location Details
                                    </h2>
                                    <div></div>
                                </HeadDiv>
                                
                                <DetailCard>
                                    <div style={{margin: '0 1.5rem 0 1.5rem'}}>
                                        <DetailP>
                                            <span><FontAwesomeIcon icon='city'/></span>&nbsp;&nbsp; {details.Venues[0].country.name}
                                        </DetailP>
                                        <DetailP>
                                            <span><FontAwesomeIcon icon='location-arrow'/></span>&nbsp;&nbsp;{details.Venues[0].city.name}, {details.Venues[0].state.name}
                                        </DetailP>
                                        <p style={{color: '#6f6f6f'}}>
                                            <span><FontAwesomeIcon icon='location-arrow'/></span>&nbsp;&nbsp;{details.Venues[0].address.line1}
                                        </p>
                                    </div>
                                </DetailCard>
                                <HeadDiv style={{marginTop: '5rem'}}>
                                    <h2>
                                        <Span1><FontAwesomeIcon icon='calendar-alt'/>&nbsp;&nbsp;</Span1>Time Details
                                    </h2>
                                    <div></div>
                                </HeadDiv>
                                
                                <DetailCard>
                                    <div style={{margin: '0 1.5rem 0 1.5rem'}}>
                                        <DetailP>
                                            <span><FontAwesomeIcon icon='city'/></span>&nbsp;&nbsp; {details.date.start.localDate}
                                        </DetailP>
                                        <DetailP>
                                            <span><FontAwesomeIcon icon='location-arrow'/></span>&nbsp;&nbsp;{details.date.start.localTime}
                                        </DetailP>
                                        <p style={{color: '#6f6f6f'}}>
                                            <span><FontAwesomeIcon icon='location-arrow'/></span>&nbsp;&nbsp;{details.date.timezone}
                                        </p>
                                    </div>
                                </DetailCard>
                             </DetailDiv>
                             <Button onClick={handleSubmit}><FontAwesomeIcon icon='pen-alt'/>&nbsp;&nbsp;ADD EVENT</Button>
                            
                            
                            
                
                    </LowCard>
                </Card> }
        </Container>
     );
}
 
export default EventDetails;
