import React, {useState, useContext, useEffect, useRef} from 'react';
import styled from '@emotion/styled';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {SecondContext} from '../context/secondContext';
import {SelectClick} from '../Functions/selectClick';
import Contextmenu from './ContextMenu';
import Customenu from './CustomMenu';
import {countryContext} from '../context/countryContext';

const Container = styled.div`
    margin-left: 0;
    margin-top: 0;
    background: #1a1a3d;
    height: 100%;
    width: 19%;
`
const User = styled.div`
    border-bottom: 1px solid #7f7f7f;
    text-align: center;
`

const ImageDiv = styled.div`
    margin: 0rem 2rem 0.1rem 1.7rem;
    padding: 1.5rem; 
`
const Image = styled.img`
    border-radius: 50%;
`

const P1 = styled.div`
    color: #fff;
    font-size: 0.84em;
    padding-top: 0.7rem;
    
`
const P2 = styled.div`
    color: #fff;
    font-weight: 100;
    font-size: 0.74em;
`

const ListDiv = styled.div`
    margin-top: 4.6rem;
    margin-left: -1.5rem;
    color: #fff;
    padding-bottom: 16.2rem;
`
const Li = styled.li`
    text-decoration: none;
    padding: .5rem 0 .5rem 1rem;
    margin: 0 1rem 1rem 0;
    font-size: .9em;
    list-style: none;
    cursor: pointer;
    &:hover {
        background: linear-gradient(to right, #ff3434, #1a1a3d);
        color: #fff;
    }
`
const Span = styled.span`
    /* margin-right: 1rem; */
`

const SideBar = () => {
    const [name, setName] = useState(
        [
            'My events', 
            'Add Events',
            'music',
            'sports',
            'fashion',
        ])
    const [ID, setID] = useState('head')
    const {details, dispatch2} = useContext(SecondContext);
    const {newState} = useContext(countryContext);
    const [state1, disp] = newState;
    const {classification} = state1;
    // console.log(ID);
    return ( 
        <Container>
           <User>
                <ImageDiv> 
                    <Image 
                        src='./img/sia2.jpg' 
                        alt='profile_img' 
                        width='70px' 
                        height='67px'/>
                    <P1 id = 'head'>UserName</P1>
                    <P2>description</P2>
                </ImageDiv>
           </User>
           
           <ListDiv>
                <ul>
                    { name.map((el, Index) =>
                     <Li 
                        key={Index} 
                        id={Index} 
                        onClick={() => SelectClick(el, dispatch2,setID,Index,disp)}>
                        <Span>
                            <FontAwesomeIcon 
                                icon='music'
                            />&nbsp;&nbsp;{el}</Span>
                    </Li>)
                    }
                </ul>
           </ListDiv>
           <Contextmenu 
                ind={ID} 
                menu={() => <Customenu/>}
            />
           
        </Container>
     );
}
 
export default SideBar;