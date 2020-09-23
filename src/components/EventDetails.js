import React, { useEffect, useContext } from 'react';
import styled from '@emotion/styled';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Spinner from './Spinner';
import {TableContext} from '../context/TableContext';
import SuccessModal from './SuccessModal';
import {useDispatch, useSelector} from 'react-redux';
import EventDetailsAPI from '../actions/detailsAction';
import DetailsCard from './EventDetailsCard';


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
    
    // const {tableData, dispatch3} = useContext(TableContext);
    
    useEffect(() => {
        dispatch(EventDetailsAPI(match));
    }, []);
    
    return ( 
        <>
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
                {Object.keys(details) === 0? <Spinner/> :
                <DetailsCard data = {details}/>}
        </>
     );
}
 
export default EventDetails;
