import React, {useState, useContext} from 'react';
import styled from '@emotion/styled';
import {countryContext} from '../context/countryContext';
import { useEffect } from 'react';
import {Selectcountry} from '../Functions/selectClick';


const Container = styled.div`
    /* position: absolute; */
    width: 10rem;
    height: 13.6rem;
    background: #1a1a3d;
    /* top: 13.4rem;
    left: 7.9rem; */
    /* z-index: 50; */
    box-shadow: -2px -2px 4px 2px #000;
`
const Div = styled.div`
    margin: auto;
    width: 80%;
    background: none;
    height: 90%;
    margin-top: 1rem;
    color: #f7f7f7;
`
const Ul = styled.ul`
    padding: 0 1.7rem 0 1.7rem;
    &:hover {
        padding: 0 0 0 0;
        text-align: center;
    }
`

const Li = styled.li`
    list-style: none ;
    margin: 0 0 0.5rem 0;
    padding-bottom: .5rem;
    border-bottom: 1px solid #f7f7f7;
    color: #0f0;
    transition: 0.5s all ease-in-out;
    cursor: pointer;
    &:hover{
        color: #fff;
        background: #5e5e7f;
        border: none;
    } 
`

const Customenu = () => {
    const {newState} = useContext(countryContext);
    const [state1, disp] = newState;
    const [state, setState] = useState([
        'USA', 'Canada', 'South Africa', 'Britain', 'Germany'
    ])
    // console.log(state1);
    return ( 
        <Container>
            <Div>
                <Ul style={{textAlign: 'center'}}>
                  { state.map((el,index) => 
                    <Li 
                        onClick={() => Selectcountry(state1, index, disp)} 
                        key={index}>{el}
                    </Li> 
                    )}
                </Ul>
            </Div>
        </Container>
     );
}
 
export default Customenu;