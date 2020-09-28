import React, {useEffect, useContext} from 'react';
import styled from '@emotion/styled';
import SideBar from './Sidebar';
import Searchbar from './Searchbar';
import Eventboard from './Eventboard';
import SavedEvents from './SavedEvents';
import {SecondContext} from '../context/secondContext';
import Modal from './reusableComponents/modal';
import EventForm from '../modalContents/AddEventForm';
import  NoEvent from '../modalContents/NoEventFound';
import SavedSuccessful from '../modalContents/NoEventFound';

 const Container = styled.div`
    /* display: flex;
    justify-content: space-between; */
    overflow-x: hidden;
`

const Dashboard = () => {
   
    const {displayState} = useContext(SecondContext);
    const {showSavedEvents, showAddEventModal} = displayState;
    return ( 
        <Container>
            {showAddEventModal && <Modal content ={EventForm}/>}
            <SideBar/>
            <div>
                <Searchbar/>
                { showSavedEvents ? <SavedEvents/> :
                <Eventboard/> } 
            </div>
        </Container>
     )
}
 
export default Dashboard;