import React, { useEffect, useContext } from 'react';
import styled from '@emotion/styled';
import Spinner from './Spinner';
import {useDispatch, useSelector} from 'react-redux';
import EventDetailsAPI from '../actions/detailsAction';
import DetailsCard from './EventDetailsCard';
import {SecondContext} from '../context/secondContext';
import SavedSuccessful from '../modalContents/savedSuccessful';
import Modal from './reusableComponents/modal';


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


const EventDetails = ({match}) => {
    const dispatch = useDispatch();
    const details = useSelector(state => state.details);
    const {displayState} = useContext(SecondContext);
    const {showSuccessModal} = displayState;
    // const {tableData, dispatch3} = useContext(TableContext);
    
    useEffect(() => {
        dispatch(EventDetailsAPI(match));
    }, []);
    
    return ( 
        <>
            {showSuccessModal && <Modal content={SavedSuccessful}/>}
            <Nav>
                <Brand>
                    <h2>JAROVENTS</h2>
                </Brand>
                <ul>
                    <Li>Home</Li>
                    <Li>About</Li>
                    <Li><button>back</button></Li>
                </ul>
                </Nav>
                
                {Object.keys(details) === 0? <Spinner/> :
                <DetailsCard data = {details}/>}
        </>
     );
}
 
export default EventDetails;
