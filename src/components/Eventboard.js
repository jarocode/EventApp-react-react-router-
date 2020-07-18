import React, { useContext, useEffect, useRef} from 'react';
import styled from '@emotion/styled';
import Eventcard from './Eventcard';
import { MyContext } from '../context/firstContext';
import Spinner from './Spinner';
import {countryContext} from '../context/countryContext';

const Container = styled.div`
    position: absolute;
    color: #000;
    border: 4px solid #fff;
    border-radius: 13px;
    background: #fff;
    width: 77.3%;
    height: 95%;
    left: 12.85rem;
    z-index: 3;
    top: 7.5rem;
    box-shadow: 1px 2px 2px 2px #afafaf;
`
const Header = styled.div`
    padding-top: 1rem;
`
const H3 = styled.h3`
    padding-left: 0.7rem;
    border-left: 3px solid #0f0;
    margin-left: 1.3rem;
    margin-top: 0.5rem;
    color: #797979;
`
const Flex = styled.div`
   padding-top: 1.3rem;
   margin-left: 0.3rem;
   display: flex;
   height: 75%;
   flex-wrap: wrap;
`

const Eventboard = () => {
    const {state, dispatch} = useContext(MyContext);
    const {restOfState, header} = state;
    const {newState} = useContext(countryContext);
    const [state1, disp] = newState;
    const{countryCode, classification} = state1;
    const isInitialMount = useRef(true);
    
    useEffect(() => {
        if(isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            const Api = async () => {
                const res = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?countryCode=${countryCode}&page=10&classificationName=${classification}&size=6&apikey=ckkAjaoFXB0PY72OcQT2UinV6PReL8m4`)
                let resJson = await res.json();
                return resJson;
            }
            Api().then(res => {
                if (res._embedded === undefined) {
                    console.log('no event found');
                }
                else {
                    const {events} = res._embedded;
                     console.log(events);
                     dispatch({type:'ChangeHeader', payload: classification })
                     dispatch({type:'ADD', payload: events })
                }
            });
        }
    },[countryCode]);
    
    
    return ( 
        <Container>
            <Header>
                <H3>{header} events</H3>
            </Header>
            <Flex>
               {  Object.keys(restOfState).length === 0 ? <Spinner/> : 
                   restOfState.map(item => 
                    <Eventcard 
                    name={item.name}
                    key ={item.id}
                    id={item.id}
                    date ={item.dates.start.localDate}
                    image ={item.images[1].url}
                />
               )}
            </Flex>
        </Container>
     );
}
 
export default Eventboard;